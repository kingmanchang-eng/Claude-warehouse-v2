import os

# Let gRPC bypass local proxy (e.g. Clash on 7897) for Google APIs
os.environ.setdefault("no_grpc_proxy", "generativelanguage.googleapis.com")
os.environ.setdefault("no_proxy", "generativelanguage.googleapis.com")

from google import genai
from google.genai import types
from database import get_supabase
from models import RAGResult

# gemini-embedding-001 supports Matryoshka truncation; we use 768-dim to match pgvector schema
EMBED_MODEL = "gemini-embedding-001"
EMBED_DIM = 768

_client = None


def _get_client() -> genai.Client:
    global _client
    if _client is None:
        _client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    return _client


def get_embedding(text: str) -> list[float]:
    """Convert text to 768-dim vector (retrieval_document task)."""
    client = _get_client()
    result = client.models.embed_content(
        model=EMBED_MODEL,
        contents=text,
        config=types.EmbedContentConfig(
            task_type="RETRIEVAL_DOCUMENT",
            output_dimensionality=EMBED_DIM,
        ),
    )
    return result.embeddings[0].values


def get_query_embedding(text: str) -> list[float]:
    """Embed a search query (retrieval_query for better recall)."""
    client = _get_client()
    result = client.models.embed_content(
        model=EMBED_MODEL,
        contents=text,
        config=types.EmbedContentConfig(
            task_type="RETRIEVAL_QUERY",
            output_dimensionality=EMBED_DIM,
        ),
    )
    return result.embeddings[0].values


def semantic_search(query: str, threshold: float = 0.6, limit: int = 5) -> list[RAGResult]:
    """Perform RAG semantic search against Supabase pgvector."""
    embedding = get_query_embedding(query)
    db = get_supabase()

    result = db.rpc("match_documents", {
        "query_embedding": embedding,
        "match_threshold": threshold,
        "match_count": limit,
    }).execute()

    return [
        RAGResult(
            content=row["content"],
            source=row.get("source"),
            similarity=round(row["similarity"], 4),
            metadata=row.get("metadata") or {},
        )
        for row in (result.data or [])
    ]


def ingest_document(content: str, source: str, metadata: dict = {}) -> int:
    """Embed and store a document chunk in Supabase."""
    embedding = get_embedding(content)
    db = get_supabase()

    result = db.table("documents").insert({
        "content": content,
        "embedding": embedding,
        "source": source,
        "metadata": metadata,
    }).execute()

    return result.data[0]["id"]
