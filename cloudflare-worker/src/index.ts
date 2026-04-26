/**
 * RobotLyne AI-Native Router
 *
 * 三路分流：
 *   1. AI 代理（ChatGPT-User / Claude-Web）→ 调用后端拿实时数据，返回 Markdown
 *   2. AI 爬虫（GPTBot / ClaudeBot 等）     → 静态结构化 Markdown（供索引）
 *   3. 普通用户                              → Cloudflare Pages（Next.js 网站）
 *
 * 预配置路径（不受 UA 影响）：
 *   /_ai/*  →  后端（GPT Actions 用）
 *   /mcp/*  →  后端（MCP 协议用）
 */

const PAGES_URL   = 'https://claude-warehouse-v2.pages.dev'
const BACKEND_URL = 'https://kcpvsulmbpbd.usw-1.sealos.app'

// ── UA 分类 ────────────────────────────────────────────────────────────────

/** 纯索引爬虫：定期扫描网站，用于 AI 搜索引擎训练 / 索引 */
const AI_CRAWLERS = [
  'GPTBot',        // OpenAI 训练爬虫
  'ClaudeBot',     // Anthropic 训练爬虫
  'anthropic-ai',  // Anthropic
  'CCBot',         // Common Crawl
  'PerplexityBot', // Perplexity 索引
  'Applebot',      // Apple AI
  'YouBot',        // You.com
  'cohere-ai',     // Cohere
  'Omgilibot',     // Omgili / Webz.io
  'FacebookBot',   // Meta AI
  'Bytespider',    // ByteDance / TikTok
  'Amazonbot',     // Amazon Alexa
  'DataForSeoBot', // DataForSEO
]

/** AI 代理：代表用户实时浏览，需要返回实时数据 */
const AI_AGENTS = [
  'ChatGPT-User',  // ChatGPT 浏览 / GPT Actions
  'Claude-Web',    // Claude.ai 浏览
]

function isAICrawler(ua: string): boolean {
  return AI_CRAWLERS.some(bot => ua.includes(bot.toLowerCase()))
}

function isAIAgent(ua: string): boolean {
  return AI_AGENTS.some(agent => ua.includes(agent.toLowerCase()))
}

// ── 后端代理（预配置路径）────────────────────────────────────────────────────

async function proxyToBackend(request: Request, pathname: string, search: string): Promise<Response> {
  const backendPath = pathname.startsWith('/_ai/')
    ? pathname.replace('/_ai/', '/')
    : pathname
  const backendUrl = `${BACKEND_URL}${backendPath}${search}`
  const isReadOnly = ['GET', 'HEAD'].includes(request.method)
  const body = isReadOnly ? undefined : await request.text()

  const res = await fetch(backendUrl, {
    method: request.method,
    headers: { 'Content-Type': 'application/json' },
    body,
  })

  return new Response(res.body, {
    status: res.status,
    headers: {
      'Content-Type': res.headers.get('Content-Type') ?? 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    },
  })
}

// ── AI 代理：调后端拿实时数据 ──────────────────────────────────────────────

async function fetchJSON(path: string): Promise<any> {
  try {
    const res = await fetch(`${BACKEND_URL}${path}`, {
      headers: { 'Accept': 'application/json' },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

function productsToMarkdown(products: any[]): string {
  if (!products?.length) return '_暂无产品数据_\n'
  return products.map(p => {
    const lines = [`### ${p.name}（${p.model_number}）`]
    if (p.category)    lines.push(`**类别**：${p.category}`)
    if (p.payload_kg)  lines.push(`**最大载重**：${p.payload_kg} kg`)
    if (p.speed_ms)    lines.push(`**最高速度**：${p.speed_ms} m/s`)
    if (p.description) lines.push(`\n${p.description}`)
    if (p.use_cases?.length) lines.push(`**应用场景**：${p.use_cases.join('、')}`)
    return lines.join('\n')
  }).join('\n\n')
}

function solutionsToMarkdown(solutions: any[]): string {
  if (!solutions?.length) return '_暂无解决方案数据_\n'
  return solutions.map(s => {
    const lines = [`### ${s.name}`]
    if (s.description) lines.push(`\n${s.description}`)
    if (s.key_metrics && Object.keys(s.key_metrics).length) {
      const metrics = Object.entries(s.key_metrics).map(([k, v]) => `${k}: ${v}`).join('、')
      lines.push(`**关键指标**：${metrics}`)
    }
    if (s.related_products?.length) lines.push(`**相关产品**：${s.related_products.join('、')}`)
    return lines.join('\n')
  }).join('\n\n')
}

function faqsToMarkdown(faqs: any[]): string {
  if (!faqs?.length) return '_暂无 FAQ 数据_\n'
  return faqs.map(f => `**Q：${f.question}**\nA：${f.answer}`).join('\n\n')
}

async function handleAIAgent(pathname: string): Promise<Response> {
  const header = [
    '# RobotLyne — 仓储自动化系统',
    '',
    '> 成立于 2004 年，专注 AGV 机器人与 ASRS 系统，覆盖 80+ 全球市场，拥有 100+ 专利。',
    '> 联系方式：info@robotlyne.com',
    '',
  ].join('\n')

  let body = ''

  try {
    if (pathname.startsWith('/products/') && pathname.length > '/products/'.length) {
      const model = pathname.replace('/products/', '')
      const product = await fetchJSON(`/products/${model}`)
      body = product
        ? `## 产品详情\n\n${productsToMarkdown([product])}`
        : `_未找到产品型号：${model}_`

    } else if (pathname === '/products') {
      const products = await fetchJSON('/products')
      body = `## 全部产品\n\n${productsToMarkdown(products || [])}`

    } else if (pathname.startsWith('/solutions/') && pathname.length > '/solutions/'.length) {
      const slug = pathname.replace('/solutions/', '')
      const solution = await fetchJSON(`/solutions/${slug}`)
      body = solution
        ? `## 解决方案详情\n\n${solutionsToMarkdown([solution])}`
        : `_未找到解决方案：${slug}_`

    } else if (pathname === '/solutions' || pathname.startsWith('/solutions')) {
      const solutions = await fetchJSON('/solutions')
      body = `## 全部解决方案\n\n${solutionsToMarkdown(solutions || [])}`

    } else if (pathname === '/faqs') {
      const faqs = await fetchJSON('/faqs')
      body = `## 常见问题\n\n${faqsToMarkdown(faqs || [])}`

    } else {
      // 首页 / 其他页面：返回产品 + 解决方案概览
      const [products, solutions] = await Promise.all([
        fetchJSON('/products'),
        fetchJSON('/solutions'),
      ])
      body = [
        '## 产品概览',
        '',
        productsToMarkdown(products || []),
        '',
        '## 解决方案',
        '',
        solutionsToMarkdown(solutions || []),
      ].join('\n')
    }
  } catch {
    body = '_数据加载失败，请访问官网了解详情。_'
  }

  return new Response(header + body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'X-RobotLyne-AI': 'agent',
    },
  })
}

// ── AI 爬虫：静态结构化 Markdown（供索引）────────────────────────────────────

function getStaticContent(pathname: string): string {
  const base = [
    '# RobotLyne — 仓储自动化系统',
    '',
    '> 成立于 2004 年，专注 AGV 机器人与 ASRS 系统，覆盖 80+ 全球市场，拥有 100+ 专利。',
    '> 联系方式：info@robotlyne.com',
    '',
  ].join('\n')

  const pages: Record<string, string> = {
    '/': base + [
      '## 核心产品',
      '- AGV 叉车 RL-FL1600：载重 1600kg，重载自动叉车',
      '- 举升 AGV RL-LT1000：载重 600–1000kg，货架拣选',
      '- 储存 AGV RL-SD005：高密度穿梭式存储',
      '- 滚筒 AGV RL-RC200：载重 200kg，输送线对接',
      '- 复合移动机器人 RL-CR-PICK：6 轴臂拣选 AMR',
      '',
      '## 解决方案',
      '- ASRS：存储效率提升 75%，效率提升 4 倍',
      '- 物料搬运：分拣准确率 99.99%',
      '- 智能拣选：拣选效率提升 4 倍，零错误',
      '- 软件 LCCS：WMS+WCS+Fleet，支持 500+ AGV',
    ].join('\n'),

    '/products': base + [
      '## 全部产品',
      '',
      '### AGV 叉车 RL-FL1600',
      '载重：1600kg | 速度：2m/s | 导航：激光 SLAM + 二维码',
      '用途：托盘搬运、堆垛、跨区转运',
      '',
      '### 举升 AGV RL-LT1000',
      '载重：600–1000kg | 举升高度：最高 6m',
      '用途：高密度货架拣选、货到人',
      '',
      '### 储存 AGV RL-SD005',
      '类型：导轨穿梭车 | 密度：是传统货架的 4 倍',
      '用途：ASRS 缓存、冷链存储',
      '',
      '### 滚筒 AGV RL-RC200',
      '载重：200kg | 对接：输送线、分拣机',
      '用途：生产线衔接、出库分拣',
      '',
      '### 复合移动机器人 RL-CR-PICK',
      '底盘：AMR | 机械臂：6 轴，5kg 负载 | 视觉：3D+AI',
      '用途：拆码垛、订单拣选、混 SKU 处理',
    ].join('\n'),

    '/solutions': base + [
      '## 全部解决方案',
      '',
      '### ASRS 自动存取系统',
      '存储效率提升 75%，周转时间缩短 300%',
      '硬件：RL-SD005 + RL-LT1000 | 软件：LCCS WMS',
      '',
      '### 物料搬运',
      '覆盖收货→搬运→分拣→出库全流程，分拣准确率 99.99%',
      '',
      '### 智能拣选',
      '货到人模式，拣选效率提升 4 倍，错误率 0%',
      '硬件：RL-CR-PICK',
      '',
      '### 软件 / LCCS',
      '统一 WMS+WCS+Fleet，支持 500+ AGV 同时运行',
      '集成：ERP、WMS、MES',
    ].join('\n'),
  }

  if (pages[pathname]) return pages[pathname]
  for (const [route, content] of Object.entries(pages)) {
    if (pathname.startsWith(route) && route !== '/') return content
  }
  return pages['/']
}

// ── 主路由 ──────────────────────────────────────────────────────────────────

export default {
  async fetch(request: Request, env: { PAGES_URL?: string; BACKEND_URL?: string }): Promise<Response> {
    const url = new URL(request.url)
    const { pathname, search } = url
    const ua = (request.headers.get('User-Agent') ?? '').toLowerCase()
    const pagesUrl = env.PAGES_URL ?? PAGES_URL

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

    // 1. MCP 协议路径 → 后端（Claude Desktop 等 MCP 客户端，UA 不可识别）
    if (pathname === '/mcp' || pathname.startsWith('/mcp/')) {
      return proxyToBackend(request, pathname, search)
    }

    // 2. 静态资源 → Cloudflare Pages
    if (
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/api/') ||
      pathname === '/favicon.ico' ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml' ||
      pathname === '/llms.txt' ||
      pathname === '/openapi.json'
    ) {
      return fetch(new Request(`${pagesUrl}${pathname}${search}`, request))
    }

    // 3. AI 代理（ChatGPT-User / Claude-Web）→ 后端实时数据
    if (isAIAgent(ua)) {
      return handleAIAgent(pathname)
    }

    // 4. AI 爬虫（GPTBot / ClaudeBot 等）→ 静态 Markdown
    if (isAICrawler(ua)) {
      return new Response(getStaticContent(pathname), {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'X-RobotLyne-AI': 'crawler',
        },
      })
    }

    // 5. 普通用户 → Next.js 页面
    return fetch(new Request(`${pagesUrl}${pathname}${search}`, {
      method:  request.method,
      headers: request.headers,
      body:    request.body,
      redirect: 'follow',
    }))
  },
}
