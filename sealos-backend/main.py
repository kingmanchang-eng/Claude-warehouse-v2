"""
RobotLyne AI Backend — FastAPI
Handles AI agent requests: RAG search, product queries, MCP tool calls, inquiry submission.
"""
import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from models import (
    InquiryRequest, InquiryResponse,
    ProductResult, SolutionResult, FAQResult,
    SearchResponse, MCPExecuteRequest, MCPExecuteResponse,
)
from database import get_supabase
from rag import semantic_search

load_dotenv()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Verify DB connection on startup
    db = get_supabase()
    db.table("products").select("id").limit(1).execute()
    print("✅ Supabase connected")
    yield


app = FastAPI(
    title="RobotLyne AI Backend",
    description="AI agent API for RobotLyne warehouse automation — RAG + MCP",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ──────────────────────────────────────────────
# Health
# ──────────────────────────────────────────────

@app.get("/")
async def health():
    return {"status": "ok", "service": "RobotLyne AI Backend"}


# ──────────────────────────────────────────────
# RAG — Semantic Search
# ──────────────────────────────────────────────

@app.get("/search", response_model=SearchResponse)
def search(q: str, threshold: float = 0.6, limit: int = 5):
    """
    Semantic search over RobotLyne content.
    Used by AI agents for fuzzy / natural language queries.
    """
    if not q:
        raise HTTPException(status_code=400, detail="Query 'q' is required.")
    results = semantic_search(q, threshold=threshold, limit=limit)
    return SearchResponse(query=q, results=results, total=len(results))


# ──────────────────────────────────────────────
# Products — Precise Queries
# ──────────────────────────────────────────────

@app.get("/products", response_model=list[ProductResult])
async def list_products(category: str | None = None):
    """List all products, optionally filtered by category."""
    db = get_supabase()
    q = db.table("products").select("*")
    if category:
        q = q.eq("category", category)
    result = q.order("id").execute()
    return result.data or []


@app.get("/products/{model_number}", response_model=ProductResult)
async def get_product(model_number: str):
    """Get a specific product by model number."""
    db = get_supabase()
    result = db.table("products").select("*").eq("model_number", model_number).single().execute()
    if not result.data:
        raise HTTPException(status_code=404, detail=f"Product '{model_number}' not found.")
    return result.data


# ──────────────────────────────────────────────
# Solutions — Precise Queries
# ──────────────────────────────────────────────

@app.get("/solutions", response_model=list[SolutionResult])
async def list_solutions():
    """List all warehouse automation solutions."""
    db = get_supabase()
    result = db.table("solutions").select("*").order("id").execute()
    return result.data or []


@app.get("/solutions/{slug}", response_model=SolutionResult)
async def get_solution(slug: str):
    """Get a specific solution by slug."""
    db = get_supabase()
    result = db.table("solutions").select("*").eq("slug", slug).single().execute()
    if not result.data:
        raise HTTPException(status_code=404, detail=f"Solution '{slug}' not found.")
    return result.data


# ──────────────────────────────────────────────
# FAQs
# ──────────────────────────────────────────────

@app.get("/faqs", response_model=list[FAQResult])
async def list_faqs(category: str | None = None):
    """List FAQs, optionally filtered by category."""
    db = get_supabase()
    q = db.table("faqs").select("*")
    if category:
        q = q.eq("category", category)
    result = q.order("id").execute()
    return result.data or []


# ──────────────────────────────────────────────
# Inquiry Submission
# ──────────────────────────────────────────────

@app.post("/inquiry", response_model=InquiryResponse)
async def submit_inquiry(body: InquiryRequest):
    """
    Submit a sales inquiry from an AI agent.
    Validates via Pydantic, stores in Supabase.
    """
    db = get_supabase()
    result = db.table("inquiries").insert(body.model_dump()).execute()
    row = result.data[0]
    return InquiryResponse(id=row["id"], email=row["email"], created_at=row["created_at"])


# ──────────────────────────────────────────────
# MCP — Unified Execute Endpoint
# ──────────────────────────────────────────────

@app.post("/mcp/execute", response_model=MCPExecuteResponse)
async def mcp_execute(body: MCPExecuteRequest):
    """
    Unified MCP tool execution endpoint.
    AI agents send { "tool": "<name>", "args": { ... } } and receive structured results.
    """
    tool = body.tool
    args = body.args
    db = get_supabase()

    if tool == "search":
        q = args.get("q") or args.get("query")
        if not q:
            raise HTTPException(status_code=400, detail="args.q is required for tool 'search'")
        results = semantic_search(q, threshold=float(args.get("threshold", 0.6)), limit=int(args.get("limit", 5)))
        return MCPExecuteResponse(tool=tool, result={"query": q, "results": [r.model_dump() for r in results], "total": len(results)})

    elif tool == "list_products":
        q = db.table("products").select("*")
        if args.get("category"):
            q = q.eq("category", args["category"])
        result = q.order("id").execute()
        return MCPExecuteResponse(tool=tool, result=result.data or [])

    elif tool == "get_product":
        model_number = args.get("model_number") or args.get("model")
        if not model_number:
            raise HTTPException(status_code=400, detail="args.model_number is required for tool 'get_product'")
        result = db.table("products").select("*").eq("model_number", model_number).single().execute()
        if not result.data:
            raise HTTPException(status_code=404, detail=f"Product '{model_number}' not found.")
        return MCPExecuteResponse(tool=tool, result=result.data)

    elif tool == "list_solutions":
        result = db.table("solutions").select("*").order("id").execute()
        return MCPExecuteResponse(tool=tool, result=result.data or [])

    elif tool == "list_faqs":
        q = db.table("faqs").select("*")
        if args.get("category"):
            q = q.eq("category", args["category"])
        result = q.order("id").execute()
        return MCPExecuteResponse(tool=tool, result=result.data or [])

    elif tool == "submit_inquiry":
        if not args.get("email"):
            raise HTTPException(status_code=400, detail="args.email is required for tool 'submit_inquiry'")
        inquiry = InquiryRequest(**args)
        result = db.table("inquiries").insert(inquiry.model_dump()).execute()
        row = result.data[0]
        return MCPExecuteResponse(tool=tool, result={"id": row["id"], "email": row["email"], "message": "Inquiry submitted successfully."})

    else:
        raise HTTPException(status_code=400, detail=f"Unknown tool '{tool}'. Call GET /mcp/tools to see available tools.")


# ──────────────────────────────────────────────
# MCP Tool manifest (for AI agent discovery)
# ──────────────────────────────────────────────

@app.get("/mcp/tools")
async def mcp_tools():
    """Returns the list of available MCP tools for AI agent discovery."""
    return {
        "tools": [
            {
                "name": "search",
                "description": "Semantic search over RobotLyne product & solution content. Use for fuzzy / natural language queries.",
                "execute": "POST /mcp/execute  {\"tool\": \"search\", \"args\": {\"q\": \"<query>\", \"limit\": 5}}",
                "direct": "GET /_ai/search?q={query}",
                "parameters": {"q": "string (required)", "limit": "int (default 5)"},
            },
            {
                "name": "list_products",
                "description": "List all AGV products. Optionally filter by category.",
                "execute": "POST /mcp/execute  {\"tool\": \"list_products\", \"args\": {\"category\": \"<optional>\"}}",
                "direct": "GET /_ai/products",
                "parameters": {"category": "string (optional)"},
            },
            {
                "name": "get_product",
                "description": "Get full specs of a product by model number (e.g. RL-FL1600).",
                "execute": "POST /mcp/execute  {\"tool\": \"get_product\", \"args\": {\"model_number\": \"RL-FL1600\"}}",
                "direct": "GET /_ai/products/{model_number}",
            },
            {
                "name": "list_solutions",
                "description": "List all warehouse automation solutions (ASRS, picking, material handling, software).",
                "execute": "POST /mcp/execute  {\"tool\": \"list_solutions\", \"args\": {}}",
                "direct": "GET /_ai/solutions",
            },
            {
                "name": "list_faqs",
                "description": "List frequently asked questions about RobotLyne products and services.",
                "execute": "POST /mcp/execute  {\"tool\": \"list_faqs\", \"args\": {}}",
                "direct": "GET /_ai/faqs",
            },
            {
                "name": "submit_inquiry",
                "description": "Submit a sales inquiry on behalf of a user. Requires email.",
                "execute": "POST /mcp/execute  {\"tool\": \"submit_inquiry\", \"args\": {\"email\": \"<required>\", \"name\": \"\", \"company\": \"\", \"message\": \"\"}}",
                "direct": "POST /_ai/inquiry",
                "parameters": {
                    "email": "string (required)",
                    "name": "string",
                    "company": "string",
                    "phone": "string",
                    "message": "string",
                },
            },
        ]
    }
