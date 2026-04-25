/**
 * RobotLyne AI-Native Router
 *
 * Routing logic:
 *   /_ai/*  or  /mcp/*        →  Sealos FastAPI backend (AI agent tool calls)
 *   AI crawler (User-Agent)   →  Structured Markdown content (for LLM indexing)
 *   /llms.txt                 →  Cloudflare Pages static file
 *   Human                     →  Cloudflare Pages (full Next.js site)
 */

const PAGES_URL   = 'https://claude-warehouse-v2.pages.dev'
const BACKEND_URL = 'https://kcpvsulmbpbd.usw-1.sealos.app'

// Known AI crawler User-Agent patterns
const AI_CRAWLERS = [
  'GPTBot',           // OpenAI
  'ChatGPT-User',     // OpenAI ChatGPT browse
  'Claude-Web',       // Anthropic
  'ClaudeBot',        // Anthropic
  'anthropic-ai',     // Anthropic
  'CCBot',            // Common Crawl (used by many LLMs)
  'PerplexityBot',    // Perplexity AI
  'Applebot',         // Apple Siri / AI
  'YouBot',           // You.com
  'cohere-ai',        // Cohere
  'Omgilibot',        // Omgili / Webz.io
  'FacebookBot',      // Meta AI
  'Bytespider',       // ByteDance / TikTok AI
  'Amazonbot',        // Amazon Alexa AI
  'DataForSeoBot',    // DataForSEO
]

function isAICrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase()
  return AI_CRAWLERS.some(bot => ua.includes(bot.toLowerCase()))
}

// Proxy request to Sealos backend
async function proxyToBackend(request: Request, pathname: string, search: string): Promise<Response> {
  const backendPath = pathname.startsWith('/_ai/')
    ? pathname.replace('/_ai/', '/')   // /_ai/search → /search
    : pathname                          // /mcp/tools → /mcp/tools

  const backendUrl = `${BACKEND_URL}${backendPath}${search}`

  const proxied = new Response(
    await fetch(new Request(backendUrl, {
      method: request.method,
      headers: { 'Content-Type': 'application/json' },
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
    })).then(r => r.body)
  )

  const res = await fetch(new Request(backendUrl, {
    method: request.method,
    headers: { 'Content-Type': 'application/json' },
    body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
  }))

  return new Response(res.body, {
    status: res.status,
    headers: {
      'Content-Type': res.headers.get('Content-Type') ?? 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    },
  })
}

// Structured AI-readable content per route
function getAIContent(pathname: string): string {
  const base = `# RobotLyne — Warehouse Automation Systems

> Manufacturer of AGV robots and ASRS solutions since 2004. 80+ global markets, 100+ patents.
> Contact: info@robotlyne.com | Website: https://robotlyne.com
>
> ## AI Agent Tools (MCP)
> Endpoint: ${BACKEND_URL}/mcp/tools
> Semantic search: ${BACKEND_URL}/search?q={query}

`

  const routes: Record<string, string> = {
    '/': base + `## Products
- AGV Forklift RL-FL1600: 1600kg payload heavy-duty autonomous forklift
- Lifting AGV RL-LT1000: 600–1000kg compact shelf AGV
- Storage AGV RL-SD005: High-density shuttle for dense racking
- AGV Roller RL-RC200: Conveyor-linked roller transport AGV
- Composite Mobile Robot RL-CR-PICK: 6-axis arm picking AMR

## Solutions
- ASRS: +75% storage capacity, 4x efficiency
- Material Handling: 99.99% sorting accuracy
- Intelligent Picking: 4x rate, 0% error
- Software/LCCS: WMS+WCS+Fleet for 500+ units

## Key Stats
- Founded: 2004 | Employees: 1,000+ | Patents: 100+ | Markets: 80+
`,
    '/products': base + `## Full Product Line

### AGV Forklift RL-FL1600
Payload: 1600kg | Speed: 2m/s | Navigation: laser SLAM + QR hybrid
Use case: pallet transport, stacking, cross-docking

### Lifting AGV RL-LT1000
Payload: 600–1000kg | Height: up to 6m | Navigation: QR code + laser
Use case: high-density shelf picking, goods-to-person

### Storage AGV RL-SD005
Type: rail-guided shuttle | Density: 4x vs conventional racking
Use case: ASRS buffer, cold chain storage

### AGV Roller RL-RC200
Payload: 200kg | Integration: conveyor, sortation
Use case: production line bridge, outbound sortation

### Composite Mobile Robot RL-CR-PICK
Base: AMR | Arm: 6-axis, 5kg payload | Vision: 3D + AI
Use case: depalletizing, order picking, bin-picking
`,
    '/solutions/asrs': base + `## ASRS Solution
Automated Storage and Retrieval System using AGV shuttles and LCCS software.
- Capacity increase: +75% vs manual racking
- Cycle time reduction: up to 300%
- Compatible hardware: Storage AGV RL-SD005, Lifting AGV RL-LT1000
- Software: LCCS WMS with real-time inventory visibility
`,
    '/solutions/material-handling': base + `## Material Handling Solution
AGV-based intralogistics for receiving, transport, sortation, dispatch.
- Sorting accuracy: 99.99%
- Cost reduction: 40–60%
- Hardware: AGV Forklift, AGV Roller, Lifting AGV
`,
    '/solutions/picking': base + `## Intelligent Picking Solution
AMR-based goods-to-person picking with computer vision.
- Picking rate: 4x vs manual
- Error rate: 0%
- Hardware: Composite Mobile Robot RL-CR-PICK
- AI: object detection, bin-picking, path planning
`,
    '/solutions/software': base + `## Software / LCCS
Logistics Cloud Control System — unified WMS + WCS + Fleet Management.
- Fleet scale: up to 500 AGVs simultaneously
- Integration: ERP, WMS, MES via API
- Features: real-time tracking, path optimization, predictive maintenance
`,
    '/about': base + `## About RobotLyne
Founded: 2004 | HQ: China | Global offices: 10+
Employees: 1,000+ | R&D staff: 30%
Certifications: ISO 9001, CE, FCC
Patents: 100+ invention patents | Software copyrights: 30+
`,
    '/contact': base + `## Contact RobotLyne
Email: info@robotlyne.com
For sales inquiries, technical consultations, and partnership discussions.
Response time: within 24 hours.
AI agents: use POST ${BACKEND_URL}/inquiry to submit inquiries programmatically.
`,
  }

  if (routes[pathname]) return routes[pathname]
  for (const [route, content] of Object.entries(routes)) {
    if (pathname.startsWith(route) && route !== '/') return content
  }
  return routes['/']
}

export default {
  async fetch(request: Request, env: { PAGES_URL?: string; BACKEND_URL?: string }): Promise<Response> {
    const url = new URL(request.url)
    const { pathname, search } = url
    const userAgent = request.headers.get('User-Agent') ?? ''
    const pagesUrl   = env.PAGES_URL   ?? PAGES_URL
    const backendUrl = env.BACKEND_URL ?? BACKEND_URL

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    // ── AI Agent Tool Routes → Sealos backend ──────────────────────────────
    // /_ai/search, /_ai/products, /_ai/faqs, /_ai/inquiry, etc.
    if (pathname.startsWith('/_ai/') || pathname.startsWith('/mcp/')) {
      return proxyToBackend(request, pathname, search)
    }

    // ── Static assets & Next.js internals → Cloudflare Pages ──────────────
    if (
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/api/') ||
      pathname === '/favicon.ico' ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml'
    ) {
      return fetch(new Request(`${pagesUrl}${pathname}${search}`, request))
    }

    // ── /llms.txt → Cloudflare Pages static file ───────────────────────────
    if (pathname === '/llms.txt') {
      return fetch(new Request(`${pagesUrl}/llms.txt`, request))
    }

    // ── AI crawler detected → structured Markdown ──────────────────────────
    if (isAICrawler(userAgent)) {
      const content = getAIContent(pathname)
      return new Response(content, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Robots-Tag': 'index, follow',
          'Cache-Control': 'public, max-age=3600',
          'X-RobotLyne-AI': 'true',
        },
      })
    }

    // ── Human visitor → Cloudflare Pages ──────────────────────────────────
    return fetch(new Request(`${pagesUrl}${pathname}${search}`, {
      method:   request.method,
      headers:  request.headers,
      body:     request.body,
      redirect: 'follow',
    }))
  },
}
