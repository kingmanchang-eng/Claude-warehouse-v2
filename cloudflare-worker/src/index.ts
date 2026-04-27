/**
 * RobotLyne AI-Native Router
 *
 * 三路分流（按架构文档）：
 *   1. AI 代理（ChatGPT-User / Claude-Web）→ Sealos 后端，返回实时 Markdown
 *   2. AI 爬虫（GPTBot / ClaudeBot 等）    → Next.js 静态页面（JSON-LD 供爬虫读）
 *   3. 普通用户                             → Next.js 静态页面
 *
 * AI 爬虫与普通用户均走 ASSETS（Next.js 静态导出），
 * 区别在于页面内嵌 JSON-LD 结构化数据，爬虫能自动解析。
 */

const BACKEND_URL = 'https://kcpvsulmbpbd.usw-1.sealos.app'

// ── UA 分类 ────────────────────────────────────────────────────────────────

/** AI 代理：代表用户实时操作，需要返回实时结构化数据 */
const AI_AGENTS = [
  'ChatGPT-User',  // ChatGPT 浏览 / GPT Actions
  'Claude-Web',    // Claude.ai 浏览
]

/** AI 爬虫：定期索引，走正常页面（页面内有 JSON-LD） */
const AI_CRAWLERS = [
  'GPTBot', 'ClaudeBot', 'anthropic-ai', 'CCBot',
  'PerplexityBot', 'Applebot', 'YouBot', 'cohere-ai',
  'Omgilibot', 'FacebookBot', 'Bytespider', 'Amazonbot', 'DataForSeoBot',
]

function isAIAgent(ua: string): boolean {
  return AI_AGENTS.some(a => ua.includes(a.toLowerCase()))
}

function isAICrawler(ua: string): boolean {
  return AI_CRAWLERS.some(b => ua.includes(b.toLowerCase()))
}

// ── 异步日志（不阻塞响应）──────────────────────────────────────────────────

function sendLog(ctx: ExecutionContext, entry: Record<string, unknown>): void {
  ctx.waitUntil(
    fetch(`${BACKEND_URL}/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'worker', ...entry }),
    }).catch(() => {})
  )
}

// ── 后端数据获取 ────────────────────────────────────────────────────────────

async function fetchJSON(path: string): Promise<any> {
  try {
    const res = await fetch(`${BACKEND_URL}${path}`, {
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

// ── Markdown 转换 ───────────────────────────────────────────────────────────

function productsToMarkdown(products: any[]): string {
  if (!products?.length) return '_No product data available._\n'
  return products.map(p => {
    const lines = [`### ${p.name} (${p.model_number})`]
    if (p.category)    lines.push(`**Category**: ${p.category}`)
    if (p.payload_kg)  lines.push(`**Max Payload**: ${p.payload_kg} kg`)
    if (p.speed_ms)    lines.push(`**Max Speed**: ${p.speed_ms} m/s`)
    if (p.description) lines.push(`\n${p.description}`)
    if (p.use_cases?.length) lines.push(`**Use Cases**: ${p.use_cases.join(', ')}`)
    return lines.join('\n')
  }).join('\n\n')
}

function solutionsToMarkdown(solutions: any[]): string {
  if (!solutions?.length) return '_No solution data available._\n'
  return solutions.map(s => {
    const lines = [`### ${s.name}`]
    if (s.description) lines.push(`\n${s.description}`)
    if (s.key_metrics && Object.keys(s.key_metrics).length) {
      const metrics = Object.entries(s.key_metrics).map(([k, v]) => `${k}: ${v}`).join(', ')
      lines.push(`**Key Metrics**: ${metrics}`)
    }
    if (s.related_products?.length) lines.push(`**Related Products**: ${s.related_products.join(', ')}`)
    return lines.join('\n')
  }).join('\n\n')
}

function faqsToMarkdown(faqs: any[]): string {
  if (!faqs?.length) return '_No FAQ data available._\n'
  return faqs.map(f => `**Q: ${f.question}**\nA: ${f.answer}`).join('\n\n')
}

// ── AI 代理处理：调后端返回实时 Markdown ───────────────────────────────────

async function handleAIAgent(pathname: string): Promise<Response> {
  const header = [
    '# RobotLyne — Warehouse Automation Systems',
    '',
    '> Founded 2004 · AGV Robots & ASRS Systems · 80+ markets · 100+ patents',
    '> Contact: info@robotlyne.com | Website: https://robotlyne.com',
    '',
  ].join('\n')

  let body = ''

  try {
    if (pathname.startsWith('/products/') && pathname.length > '/products/'.length) {
      const model = pathname.replace('/products/', '').replace(/\/$/, '')
      const product = await fetchJSON(`/products/${model}`)
      body = product
        ? `## Product Detail\n\n${productsToMarkdown([product])}`
        : `_Product not found: ${model}_`

    } else if (pathname === '/products' || pathname === '/products/') {
      const products = await fetchJSON('/products')
      body = `## All Products\n\n${productsToMarkdown(products || [])}`

    } else if (pathname.startsWith('/solutions/') && pathname.length > '/solutions/'.length) {
      const slug = pathname.replace('/solutions/', '').replace(/\/$/, '')
      const solution = await fetchJSON(`/solutions/${slug}`)
      body = solution
        ? `## Solution Detail\n\n${solutionsToMarkdown([solution])}`
        : `_Solution not found: ${slug}_`

    } else if (pathname === '/solutions' || pathname === '/solutions/') {
      const solutions = await fetchJSON('/solutions')
      body = `## All Solutions\n\n${solutionsToMarkdown(solutions || [])}`

    } else if (pathname === '/faqs' || pathname === '/faqs/') {
      const faqs = await fetchJSON('/faqs')
      body = `## Frequently Asked Questions\n\n${faqsToMarkdown(faqs || [])}`

    } else {
      // 首页 / 其他页：产品 + 方案 + FAQ 概览
      const [products, solutions, faqs] = await Promise.all([
        fetchJSON('/products'),
        fetchJSON('/solutions'),
        fetchJSON('/faqs'),
      ])
      body = [
        '## Products Overview',
        '',
        productsToMarkdown(products || []),
        '',
        '## Solutions Overview',
        '',
        solutionsToMarkdown(solutions || []),
        '',
        '## Frequently Asked Questions',
        '',
        faqsToMarkdown(faqs || []),
      ].join('\n')
    }
  } catch {
    body = '_Data unavailable. Please visit https://robotlyne.com for details._'
  }

  return new Response(header + body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'X-RobotLyne-Visitor': 'ai-agent',
    },
  })
}

// ── 主路由 ──────────────────────────────────────────────────────────────────

export default {
  async fetch(
    request: Request,
    env: { ASSETS: { fetch: (r: Request) => Promise<Response> }; BACKEND_URL?: string },
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url)
    const { pathname, search } = url
    const ua = (request.headers.get('User-Agent') ?? '').toLowerCase()
    const ip = request.headers.get('cf-connecting-ip') ?? ''
    const country = request.headers.get('cf-ipcountry') ?? ''
    const referer = request.headers.get('referer') ?? ''
    const method = request.method

    // CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    // 规范化路径：去掉末尾斜杠（/ 除外），统一匹配
    const cleanPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname

    // 1. AI 代理 → 后端实时数据（Markdown）
    if (isAIAgent(ua)) {
      const start = Date.now()
      const response = await handleAIAgent(cleanPath)
      sendLog(ctx, {
        method, pathname,
        user_agent:   request.headers.get('User-Agent'),
        visitor_type: 'ai_agent',
        routed_to:    'backend',
        status_code:  response.status,
        duration_ms:  Date.now() - start,
        ip, country, referer,
      })
      return response
    }

    // 2. AI 爬虫 → Next.js 静态页面（页面内有 JSON-LD，爬虫自动解析）
    if (isAICrawler(ua)) {
      const response = await env.ASSETS.fetch(new Request(request.url, request))
      sendLog(ctx, {
        method, pathname,
        user_agent:   request.headers.get('User-Agent'),
        visitor_type: 'ai_crawler',
        routed_to:    'page',
        status_code:  response.status,
        ip, country, referer,
      })
      return response
    }

    // 3. 普通用户 → Next.js 静态页面
    const start = Date.now()
    const response = await env.ASSETS.fetch(new Request(request.url, request))
    sendLog(ctx, {
      method, pathname,
      user_agent:   request.headers.get('User-Agent'),
      visitor_type: 'human',
      routed_to:    'page',
      status_code:  response.status,
      duration_ms:  Date.now() - start,
      ip, country, referer,
    })
    return response
  },
}
