"""
RobotLyne AI Backend — FastAPI
Handles AI agent requests: RAG search, product queries, MCP tool calls, inquiry submission.
"""
import os
import json
import time
import resend
from contextlib import asynccontextmanager
from datetime import datetime, timezone
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from models import (
    InquiryRequest, InquiryResponse,
    ProductResult, SolutionResult, FAQResult,
    SearchResponse, LogEntry,
)
from database import get_supabase
from rag import semantic_search

load_dotenv()


@asynccontextmanager
async def lifespan(app: FastAPI):
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
# 后端请求日志中间件
# ──────────────────────────────────────────────

@app.middleware("http")
async def log_backend_requests(request: Request, call_next):
    # 跳过日志接口本身，避免死循环
    if request.url.path in ("/log", "/logs"):
        return await call_next(request)

    start = time.time()
    response = await call_next(request)
    duration = int((time.time() - start) * 1000)

    try:
        ua = request.headers.get("user-agent") or ""
        ua_lower = ua.lower()
        # 判断访问者类型
        if any(x in ua_lower for x in ["chatgpt-user", "claude-web"]):
            visitor_type = "ai_agent"
        elif any(x in ua_lower for x in ["gptbot", "claudebot", "anthropic-ai", "ccbot",
                                          "perplexitybot", "youbot", "cohere-ai", "bytespider",
                                          "amazonbot", "applebot"]):
            visitor_type = "ai_crawler"
        else:
            visitor_type = "human"

        db = get_supabase()
        db.table("access_logs").insert({
            "source":       "backend",
            "method":       request.method,
            "pathname":     request.url.path,
            "user_agent":   ua,
            "visitor_type": visitor_type,
            "status_code":  response.status_code,
            "duration_ms":  duration,
            "ip":           request.headers.get("cf-connecting-ip") or request.headers.get("x-forwarded-for") or (request.client.host if request.client else ""),
            "country":      request.headers.get("cf-ipcountry") or "",
            "referer":      request.headers.get("referer") or "",
        }).execute()
    except Exception:
        pass  # 日志写入失败不影响正常响应

    return response


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
async def search(q: str, threshold: float = 0.6, limit: int = 5):
    """
    Semantic search over RobotLyne content.
    Used by AI agents for fuzzy / natural language queries.
    """
    if not q:
        raise HTTPException(status_code=400, detail="Query 'q' is required.")
    results = await semantic_search(q, threshold=threshold, limit=limit)
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
# Email helpers
# ──────────────────────────────────────────────

def detect_device(ua: str) -> str:
    ua = ua.lower()
    if any(x in ua for x in ['ipad', 'tablet', 'kindle']):
        return 'Tablet'
    if any(x in ua for x in ['mobile', 'android', 'iphone', 'ipod', 'blackberry', 'windows phone']):
        return 'Mobile'
    return 'Desktop'


def build_inquiry_email(body: InquiryRequest, ip: str, country: str, device: str, user_agent: str, visits: list) -> str:
    name = body.name or f"{body.first_name or ''} {body.last_name or ''}".strip() or "N/A"
    now  = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

    # Visit history rows
    if visits:
        rows = "".join(f"""
          <tr>
            <td style="padding:6px 12px;border-bottom:1px solid #1e3a5f;color:#94a3b8;font-size:12px;">{v.get('timestamp','')[:19].replace('T',' ')}</td>
            <td style="padding:6px 12px;border-bottom:1px solid #1e3a5f;color:#e2e8f0;font-size:12px;">{v.get('pathname','')}</td>
            <td style="padding:6px 12px;border-bottom:1px solid #1e3a5f;font-size:12px;"><span style="background:#0f2d4a;color:#38bdf8;padding:2px 8px;border-radius:4px;font-size:11px;">{v.get('visitor_type','')}</span></td>
          </tr>""" for v in visits)
        history_html = f"""<table style="width:100%;border-collapse:collapse;margin-top:8px;">
          <tr style="background:#0a1f38;">
            <th style="padding:8px 12px;text-align:left;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:.05em;">Time</th>
            <th style="padding:8px 12px;text-align:left;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:.05em;">Page</th>
            <th style="padding:8px 12px;text-align:left;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:.05em;">Type</th>
          </tr>{rows}</table>"""
    else:
        history_html = '<p style="color:#64748b;font-size:13px;margin:0;">No prior visits recorded</p>'

    extra = ""
    if body.country_selected:
        extra += f'<tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:140px;">Country (Form)</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;">{body.country_selected}</td></tr>'
    if body.industry:
        extra += f'<tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Industry</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;">{body.industry}</td></tr>'
    if body.project_type:
        extra += f'<tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Project Type</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;">{body.project_type}</td></tr>'

    ua_short = (user_agent[:120] + "…") if len(user_agent) > 120 else user_agent

    return f"""<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#060f1e;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:640px;margin:0 auto;padding:32px 16px;">

  <div style="background:linear-gradient(135deg,#0a1628,#0f2040);border:1px solid #1e3a5f;border-radius:12px;padding:28px 32px;margin-bottom:16px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <div style="width:8px;height:8px;background:#00daf3;border-radius:50%;"></div>
      <span style="color:#64748b;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">New Inquiry — RobotLyne</span>
    </div>
    <h1 style="margin:0;color:#e2e8f0;font-size:22px;font-weight:700;">New Form Submission</h1>
    <p style="margin:6px 0 0;color:#64748b;font-size:13px;">{now}</p>
  </div>

  <div style="background:#0a1628;border:1px solid #1e3a5f;border-radius:12px;padding:24px 32px;margin-bottom:16px;">
    <h2 style="margin:0 0 16px;color:#00daf3;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">Contact Details</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:140px;">Name</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;font-weight:600;">{name}</td></tr>
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Company</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;">{body.company or 'N/A'}</td></tr>
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:{body.email}" style="color:#38bdf8;font-size:13px;">{body.email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Phone</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;">{body.phone or 'N/A'}</td></tr>
      {extra}
    </table>
  </div>

  <div style="background:#0a1628;border:1px solid #1e3a5f;border-radius:12px;padding:24px 32px;margin-bottom:16px;">
    <h2 style="margin:0 0 12px;color:#00daf3;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">Message</h2>
    <p style="margin:0;color:#cbd5e1;font-size:14px;line-height:1.7;white-space:pre-wrap;">{body.message or '(No message provided)'}</p>
  </div>

  <div style="background:#0a1628;border:1px solid #1e3a5f;border-radius:12px;padding:24px 32px;margin-bottom:16px;">
    <h2 style="margin:0 0 16px;color:#00daf3;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">Visit Context</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:140px;">Landing Page</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;">{body.landing_page or 'N/A'}</td></tr>
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">IP Address</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;font-family:monospace;">{ip}</td></tr>
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Country</td><td style="padding:8px 0;color:#e2e8f0;font-size:13px;">{country}</td></tr>
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Device</td><td style="padding:8px 0;"><span style="background:#0f2d4a;color:#38bdf8;padding:3px 10px;border-radius:4px;font-size:12px;font-weight:600;">{device}</span></td></tr>
      <tr><td style="padding:8px 0;color:#64748b;font-size:13px;vertical-align:top;">User Agent</td><td style="padding:8px 0;color:#64748b;font-size:11px;font-family:monospace;word-break:break-all;">{ua_short}</td></tr>
    </table>
  </div>

  <div style="background:#0a1628;border:1px solid #1e3a5f;border-radius:12px;padding:24px 32px;margin-bottom:16px;">
    <h2 style="margin:0 0 12px;color:#00daf3;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">Visit History (Last 5)</h2>
    {history_html}
  </div>

  <p style="text-align:center;color:#334155;font-size:11px;margin:24px 0 0;">RobotLyne Automated Alert · robotlyne.com</p>
</div>
</body></html>"""


# ──────────────────────────────────────────────
# Inquiry Submission
# ──────────────────────────────────────────────

@app.post("/inquiry", response_model=InquiryResponse)
async def submit_inquiry(request: Request, body: InquiryRequest):
    """Submit a sales inquiry. Stores in Supabase and sends email notification."""
    # ── Extract metadata from request headers ─────────────────────────────
    ip      = request.headers.get("cf-connecting-ip") or request.headers.get("x-forwarded-for") or (request.client.host if request.client else "")
    country = request.headers.get("cf-ipcountry") or "Unknown"
    ua      = request.headers.get("user-agent") or ""
    device  = detect_device(ua)

    # ── Fetch last 5 visits for this IP ───────────────────────────────────
    visits: list = []
    if ip:
        try:
            db = get_supabase()
            res = db.table("access_logs").select("timestamp,pathname,visitor_type") \
                    .eq("ip", ip).order("timestamp", desc=True).limit(5).execute()
            visits = res.data or []
        except Exception:
            pass

    # ── Save to Supabase ───────────────────────────────────────────────────
    db = get_supabase()
    # Merge first_name/last_name into name if needed
    db_name = body.name or f"{body.first_name or ''} {body.last_name or ''}".strip() or None
    db_data = {
        "name":    db_name,
        "company": body.company,
        "email":   body.email,
        "phone":   body.phone,
        "message": body.message,
        "source":  body.source,
    }
    result = db.table("inquiries").insert(db_data).execute()
    row = result.data[0]

    # ── Send email via Resend ──────────────────────────────────────────────
    resend_key = os.getenv("RESEND_API_KEY", "")
    if resend_key:
        try:
            resend.api_key = resend_key
            display_name = db_name or body.email
            subject = f"New Inquiry from {display_name}" + (f" — {body.company}" if body.company else "")
            resend.Emails.send({
                "from":    "RobotLyne Inquiries <onboarding@resend.dev>",
                "to":      ["Kingman.chang@gmail.com"],
                "subject": subject,
                "html":    build_inquiry_email(body, ip, country, device, ua, visits),
            })
        except Exception as e:
            print(f"⚠️  Resend email failed: {e}")

    return InquiryResponse(id=row["id"], email=row["email"], created_at=row["created_at"])


# ──────────────────────────────────────────────
# 访问日志
# ──────────────────────────────────────────────

@app.post("/log")
async def receive_log(entry: LogEntry):
    """接收 Cloudflare Worker 发来的访问日志"""
    try:
        db = get_supabase()
        db.table("access_logs").insert(entry.model_dump(exclude_none=True)).execute()
    except Exception:
        pass
    return {"ok": True}


@app.get("/logs")
async def get_logs(
    limit: int = 100,
    source: str | None = None,
    visitor_type: str | None = None,
):
    """查询合并后的访问日志"""
    db = get_supabase()
    q = db.table("access_logs").select("*").order("timestamp", desc=True).limit(limit)
    if source:
        q = q.eq("source", source)
    if visitor_type:
        q = q.eq("visitor_type", visitor_type)
    result = q.execute()
    return {"total": len(result.data), "logs": result.data}


# ──────────────────────────────────────────────
# MCP JSON-RPC 2.0 — Claude Desktop integration
# ──────────────────────────────────────────────

MCP_TOOLS = [
    {
        "name": "search",
        "description": "Semantic search over RobotLyne products, solutions, and FAQs using natural language. Use for any warehouse automation query or product recommendation.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "q": {"type": "string", "description": "Natural language search query"},
                "limit": {"type": "integer", "description": "Number of results (default 5)", "default": 5},
            },
            "required": ["q"],
        },
    },
    {
        "name": "list_products",
        "description": "List all RobotLyne AGV products. Optionally filter by category.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "category": {"type": "string", "description": "Filter by category (optional)"},
            },
        },
    },
    {
        "name": "get_product",
        "description": "Get full technical specs of a product by model number (e.g. RL-FL1600).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "model_number": {"type": "string", "description": "Product model number"},
            },
            "required": ["model_number"],
        },
    },
    {
        "name": "list_solutions",
        "description": "List all warehouse automation solutions: ASRS, material handling, intelligent picking, LCCS software.",
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "list_faqs",
        "description": "List frequently asked questions about RobotLyne products and services.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "category": {"type": "string", "description": "Filter by FAQ category (optional)"},
            },
        },
    },
    {
        "name": "submit_inquiry",
        "description": "Submit a sales inquiry on behalf of a user. Use when user wants to contact RobotLyne or request a quote. Always confirm with user before calling.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "email": {"type": "string", "description": "User's email address (required)"},
                "name": {"type": "string", "description": "User's name"},
                "company": {"type": "string", "description": "User's company name"},
                "phone": {"type": "string", "description": "User's phone number"},
                "message": {"type": "string", "description": "Inquiry message"},
            },
            "required": ["email"],
        },
    },
]


@app.post("/mcp")
async def mcp_jsonrpc(request: Request):
    """
    MCP JSON-RPC 2.0 endpoint.
    Implements: initialize, tools/list, tools/call
    Used by Claude Desktop and other MCP-compatible clients.
    """
    try:
        body = await request.json()
    except Exception:
        return JSONResponse({"jsonrpc": "2.0", "id": None, "error": {"code": -32700, "message": "Parse error"}})

    method = body.get("method")
    req_id = body.get("id")
    params = body.get("params", {})

    # ── Handshake ──────────────────────────────
    if method == "initialize":
        return {
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "protocolVersion": "2024-11-05",
                "capabilities": {"tools": {}},
                "serverInfo": {"name": "robotlyne", "version": "1.0.0"},
            },
        }

    if method == "notifications/initialized":
        return JSONResponse(content=None, status_code=204)

    # ── Tool discovery ─────────────────────────
    if method == "tools/list":
        return {"jsonrpc": "2.0", "id": req_id, "result": {"tools": MCP_TOOLS}}

    # ── Tool execution ─────────────────────────
    if method == "tools/call":
        tool_name = params.get("name")
        arguments = params.get("arguments", {})
        db = get_supabase()

        try:
            if tool_name == "search":
                results = await semantic_search(
                    arguments["q"],
                    threshold=0.6,
                    limit=int(arguments.get("limit", 5)),
                )
                result_data = [r.model_dump() for r in results]

            elif tool_name == "list_products":
                q = db.table("products").select("*")
                if arguments.get("category"):
                    q = q.eq("category", arguments["category"])
                result_data = q.order("id").execute().data or []

            elif tool_name == "get_product":
                row = db.table("products").select("*").eq("model_number", arguments["model_number"]).single().execute()
                if not row.data:
                    raise ValueError(f"Product '{arguments['model_number']}' not found")
                result_data = row.data

            elif tool_name == "list_solutions":
                result_data = db.table("solutions").select("*").order("id").execute().data or []

            elif tool_name == "list_faqs":
                q = db.table("faqs").select("*")
                if arguments.get("category"):
                    q = q.eq("category", arguments["category"])
                result_data = q.order("id").execute().data or []

            elif tool_name == "submit_inquiry":
                payload = {k: arguments[k] for k in ["email", "name", "company", "phone", "message"] if k in arguments}
                payload["source"] = "mcp"
                row = db.table("inquiries").insert(payload).execute()
                result_data = {"id": row.data[0]["id"], "message": "Inquiry submitted successfully."}

            else:
                return {"jsonrpc": "2.0", "id": req_id, "error": {"code": -32601, "message": f"Unknown tool '{tool_name}'"}}

            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "content": [{"type": "text", "text": json.dumps(result_data, ensure_ascii=False, default=str)}]
                },
            }

        except Exception as e:
            return {"jsonrpc": "2.0", "id": req_id, "error": {"code": -32603, "message": str(e)}}

    # ── Unknown method ─────────────────────────
    return {"jsonrpc": "2.0", "id": req_id, "error": {"code": -32601, "message": f"Method not found: {method}"}}


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
                "endpoint": "GET /search?q={query}",
                "parameters": {"q": "string (required)", "limit": "int (default 5)"},
            },
            {
                "name": "list_products",
                "description": "List all AGV products. Optionally filter by category.",
                "endpoint": "GET /products",
                "parameters": {"category": "string (optional)"},
            },
            {
                "name": "get_product",
                "description": "Get full specs of a product by model number (e.g. RL-FL1600).",
                "endpoint": "GET /products/{model_number}",
            },
            {
                "name": "list_solutions",
                "description": "List all warehouse automation solutions (ASRS, picking, material handling, software).",
                "endpoint": "GET /solutions",
            },
            {
                "name": "list_faqs",
                "description": "List frequently asked questions about RobotLyne products and services.",
                "endpoint": "GET /faqs",
            },
            {
                "name": "submit_inquiry",
                "description": "Submit a sales inquiry on behalf of a user. Requires email.",
                "endpoint": "POST /inquiry",
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
