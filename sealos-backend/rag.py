import os
import google.generativeai as genai
from database import get_supabase
from models import RAGResult

# Gemini text-embedding-004: 768 dimensions, free tier 1500 req/day
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
EMBED_MODEL = "models/text-embedding-004"


def get_embedding(text: str) -> list[float]:
    """Convert text to 768-dim vector using Google Gemini."""
    result = genai.embed_content(
        model=EMBED_MODEL,
        content=text,
        task_type="retrieval_document",
    )
    return result["embedding"]


def get_query_embedding(text: str) -> list[float]:
    """Embed a search query (task_type=retrieval_query for better results)."""
    result = genai.embed_content(
        model=EMBED_MODEL,
        content=text,
        task_type="retrieval_query",
    )
    return result["embedding"]


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
