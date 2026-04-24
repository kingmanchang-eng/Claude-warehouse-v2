import os
from openai import AsyncOpenAI
from database import get_supabase
from models import RAGResult

openai_client = AsyncOpenAI(api_key=os.environ.get("OPENAI_API_KEY"))


async def get_embedding(text: str) -> list[float]:
    """Convert text to vector embedding using OpenAI."""
    response = await openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=text,
    )
    return response.data[0].embedding


async def semantic_search(query: str, threshold: float = 0.6, limit: int = 5) -> list[RAGResult]:
    """Perform RAG semantic search against Supabase pgvector."""
    embedding = await get_embedding(query)
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


async def ingest_document(content: str, source: str, metadata: dict = {}) -> int:
    """Embed and store a document chunk in Supabase."""
    embedding = await get_embedding(content)
    db = get_supabase()

    result = db.table("documents").insert({
        "content": content,
        "embedding": embedding,
        "source": source,
        "metadata": metadata,
    }).execute()

    return result.data[0]["id"]
