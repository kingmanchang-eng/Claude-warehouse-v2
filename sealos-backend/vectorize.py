"""
Vectorization script: Supabase products/solutions/faqs → Gemini embeddings → documents table

Run once (or after content changes):
  python vectorize.py

Requires env vars: SUPABASE_URL, SUPABASE_SERVICE_KEY, GEMINI_API_KEY
"""
import os
import asyncio
from google import genai
from google.genai import types
from supabase import create_client
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SERVICE_KEY"]
GEMINI_API_KEY = os.environ["GEMINI_API_KEY"]
EMBED_MODEL = "gemini-embedding-001"
EMBED_DIM = 768

db = create_client(SUPABASE_URL, SUPABASE_KEY)
gemini = genai.Client(api_key=GEMINI_API_KEY)


async def embed(text: str) -> list[float]:
    result = await gemini.aio.models.embed_content(
        model=EMBED_MODEL,
        contents=text,
        config=types.EmbedContentConfig(
            task_type="RETRIEVAL_DOCUMENT",
            output_dimensionality=EMBED_DIM,
        ),
    )
    return result.embeddings[0].values


def build_product_text(p: dict) -> str:
    specs = p.get("specs") or {}
    spec_lines = "\n".join(f"  {k}: {v}" for k, v in specs.items())
    use_cases = ", ".join(p.get("use_cases") or [])
    return (
        f"Product: {p['name']} (Model: {p['model_number']})\n"
        f"Category: {p.get('category', '')}\n"
        f"Description: {p.get('description', '')}\n"
        f"Payload: {p.get('payload_kg', '')} kg  Speed: {p.get('speed_ms', '')} m/s\n"
        f"Use cases: {use_cases}\n"
        f"Specifications:\n{spec_lines}"
    )


def build_solution_text(s: dict) -> str:
    metrics = s.get("key_metrics") or {}
    metric_lines = "\n".join(f"  {k}: {v}" for k, v in metrics.items())
    related = ", ".join(s.get("related_products") or [])
    return (
        f"Solution: {s['name']} (slug: {s['slug']})\n"
        f"Description: {s.get('description', '')}\n"
        f"Key metrics:\n{metric_lines}\n"
        f"Related products: {related}"
    )


def build_faq_text(f: dict) -> str:
    return (
        f"FAQ Category: {f.get('category', '')}\n"
        f"Q: {f['question']}\n"
        f"A: {f['answer']}"
    )


async def vectorize_products():
    print("Vectorizing products...")
    rows = db.table("products").select("*").execute().data or []
    for p in rows:
        text = build_product_text(p)
        embedding = await embed(text)
        db.table("documents").upsert(
            {
                "content": text,
                "embedding": embedding,
                "source_type": "product",
                "source_id": p["model_number"],
                "title": f"{p['name']} ({p['model_number']})",
                "metadata": {
                    "category": p.get("category"),
                    "payload_kg": p.get("payload_kg"),
                    "speed_ms": p.get("speed_ms"),
                },
            },
            on_conflict="source_type,source_id",
        ).execute()
        print(f"  done: {p['model_number']}")


async def vectorize_solutions():
    print("Vectorizing solutions...")
    rows = db.table("solutions").select("*").execute().data or []
    for s in rows:
        text = build_solution_text(s)
        embedding = await embed(text)
        db.table("documents").upsert(
            {
                "content": text,
                "embedding": embedding,
                "source_type": "solution",
                "source_id": s["slug"],
                "title": s["name"],
                "metadata": {"related_products": s.get("related_products")},
            },
            on_conflict="source_type,source_id",
        ).execute()
        print(f"  done: {s['slug']}")


async def vectorize_faqs():
    print("Vectorizing FAQs...")
    rows = db.table("faqs").select("*").execute().data or []
    for f in rows:
        text = build_faq_text(f)
        embedding = await embed(text)
        db.table("documents").upsert(
            {
                "content": text,
                "embedding": embedding,
                "source_type": "faq",
                "source_id": str(f["id"]),
                "title": f["question"][:100],
                "metadata": {"category": f.get("category")},
            },
            on_conflict="source_type,source_id",
        ).execute()
        print(f"  done: FAQ #{f['id']}")


def cleanup_orphaned_documents():
    """删除 documents 表中已不存在对应数据的孤立向量"""
    print("Cleaning up orphaned documents...")

    # 当前有效的 product source_id
    products = db.table("products").select("model_number").execute().data or []
    valid_products = [p["model_number"] for p in products]

    # 当前有效的 solution source_id
    solutions = db.table("solutions").select("slug").execute().data or []
    valid_solutions = [s["slug"] for s in solutions]

    # 查出所有 product/solution 类型的 documents
    docs = db.table("documents").select("id,source_type,source_id") \
        .in_("source_type", ["product", "solution"]).execute().data or []

    deleted = 0
    for doc in docs:
        if doc["source_type"] == "product" and doc["source_id"] not in valid_products:
            db.table("documents").delete().eq("id", doc["id"]).execute()
            print(f"  deleted orphan: product/{doc['source_id']}")
            deleted += 1
        elif doc["source_type"] == "solution" and doc["source_id"] not in valid_solutions:
            db.table("documents").delete().eq("id", doc["id"]).execute()
            print(f"  deleted orphan: solution/{doc['source_id']}")
            deleted += 1

    print(f"  {deleted} orphaned document(s) removed.")


async def main():
    print("Starting vectorization...\n")
    await vectorize_products()
    await vectorize_solutions()
    await vectorize_faqs()
    cleanup_orphaned_documents()
    print("\nVectorization complete.")


if __name__ == "__main__":
    asyncio.run(main())
