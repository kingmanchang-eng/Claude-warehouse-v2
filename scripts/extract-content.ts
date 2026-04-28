/**
 * extract-content.ts
 * 读取 app/**\/page.tsx → 用 Gemini 提取结构化内容 → 更新 content/*.ts
 *
 * 运行：npx ts-node --project tsconfig.scripts.json scripts/extract-content.ts
 */
import * as fs from 'fs'
import * as path from 'path'
import * as https from 'https'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`

const ROOT = path.join(__dirname, '..')
const CONTENT_DIR = path.join(ROOT, 'content')
const APP_DIR = path.join(ROOT, 'app')

// ── Gemini 调用 ─────────────────────────────────────────────────────────────

function httpsPost(url: string, body: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const u = new URL(url)
    const req = https.request(
      { hostname: u.hostname, path: u.pathname + u.search, method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) } },
      (res) => {
        let data = ''
        res.on('data', chunk => data += chunk)
        res.on('end', () => resolve(data))
      }
    )
    req.on('error', reject)
    req.write(body)
    req.end()
  })
}

async function callGemini(prompt: string): Promise<string> {
  const body = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseMimeType: 'application/json', temperature: 0.1 },
  })
  const raw = await httpsPost(GEMINI_URL, body)
  const resp = JSON.parse(raw)
  if (resp.error) throw new Error(`Gemini error: ${resp.error.message}`)
  return resp.candidates[0].content.parts[0].text
}

// ── 生成 TypeScript 文件内容 ────────────────────────────────────────────────

function toTS(obj: unknown, indent = 0): string {
  const pad = '  '.repeat(indent)
  if (obj === null) return 'null'
  if (typeof obj === 'string') return JSON.stringify(obj)
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj)
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]'
    const items = obj.map(v => `${pad}  ${toTS(v, indent + 1)}`).join(',\n')
    return `[\n${items},\n${pad}]`
  }
  if (typeof obj === 'object') {
    const entries = Object.entries(obj as Record<string, unknown>)
      .map(([k, v]) => `${pad}  ${k}: ${toTS(v, indent + 1)}`)
      .join(',\n')
    return `{\n${entries},\n${pad}}`
  }
  return String(obj)
}

function writeProductFile(slug: string, data: Record<string, unknown>): void {
  const varName = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
  const outPath = path.join(CONTENT_DIR, 'products', `${slug}.ts`)
  const content = `import type { Product } from '../types'\n\nexport const ${varName}: Product = ${toTS(data)}\n`
  fs.writeFileSync(outPath, content, 'utf-8')
  console.log(`  ✓ content/products/${slug}.ts`)
}

function writeSolutionFile(slug: string, data: Record<string, unknown>): void {
  const varName = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
  const outPath = path.join(CONTENT_DIR, 'solutions', `${slug}.ts`)
  const content = `import type { Solution } from '../types'\n\nexport const ${varName}: Solution = ${toTS(data)}\n`
  fs.writeFileSync(outPath, content, 'utf-8')
  console.log(`  ✓ content/solutions/${slug}.ts`)
}

// ── 产品提取 ────────────────────────────────────────────────────────────────

async function extractProduct(slug: string): Promise<void> {
  const tsxPath = path.join(APP_DIR, 'products', slug, 'page.tsx')
  if (!fs.existsSync(tsxPath)) return
  const tsx = fs.readFileSync(tsxPath, 'utf-8')

  const prompt = `You are extracting structured product data from a Next.js TSX page for a warehouse automation company (RobotLyne).

Extract ALL content from the TSX and return ONLY valid JSON matching this exact structure:
{
  "slug": "${slug}",
  "model_number": "e.g. RL-FL1600",
  "name": "full product name",
  "category": "product category",
  "short_description": "one sentence description",
  "description": "full description paragraph",
  "payload_kg": 1600,
  "speed_ms": 1.8,
  "specs": [
    { "label": "Load Capacity", "value": "1600kg" }
  ],
  "features": [
    { "title": "Feature Title", "description": "Feature description" }
  ],
  "applications": [
    { "title": "Application Title", "description": "Application description" }
  ],
  "use_cases": ["use case 1", "use case 2"],
  "related_products": ["RL-FL1600"]
}

Rules:
- payload_kg and speed_ms must be numbers or null
- Extract ALL specs from any specs table or list in the page
- Extract ALL features/highlights/capabilities sections
- Extract ALL application/use-case sections
- related_products should be model numbers only (e.g. RL-FL1600)
- Return only valid JSON, no markdown, no explanation

TSX page content:
${tsx}`

  const json = await callGemini(prompt)
  const data = JSON.parse(json)
  writeProductFile(slug, data)
}

// ── 方案提取 ────────────────────────────────────────────────────────────────

async function extractSolution(slug: string): Promise<void> {
  const tsxPath = path.join(APP_DIR, 'solutions', slug, 'page.tsx')
  if (!fs.existsSync(tsxPath)) return
  const tsx = fs.readFileSync(tsxPath, 'utf-8')

  const prompt = `You are extracting structured solution data from a Next.js TSX page for a warehouse automation company (RobotLyne).

Extract ALL content from the TSX and return ONLY valid JSON matching this exact structure:
{
  "slug": "${slug}",
  "name": "full solution name",
  "service_type": "e.g. Warehouse Automation",
  "short_description": "one sentence description",
  "description": "full description paragraph",
  "key_metrics": [
    { "label": "Storage Capacity Increase", "value": "+75%" }
  ],
  "benefits": [
    { "title": "Benefit Title", "description": "Benefit description" }
  ],
  "process_steps": [
    { "number": "01", "title": "Step Title", "description": "Step description" }
  ],
  "related_products": ["RL-SD005"]
}

Rules:
- Extract ALL metrics/KPIs/statistics from the page
- Extract ALL benefits/advantages sections
- Extract ALL process/workflow steps in order
- related_products should be model numbers only
- Return only valid JSON, no markdown, no explanation

TSX page content:
${tsx}`

  const json = await callGemini(prompt)
  const data = JSON.parse(json)
  writeSolutionFile(slug, data)
}

// ── FAQ 提取（从首页提取） ─────────────────────────────────────────────────

async function extractFaqs(): Promise<void> {
  // 收集所有页面的 FAQ
  const pages = [
    path.join(APP_DIR, 'page.tsx'),
    path.join(APP_DIR, 'about', 'page.tsx'),
    ...fs.readdirSync(path.join(APP_DIR, 'products')).map(d =>
      path.join(APP_DIR, 'products', d, 'page.tsx')).filter(f => fs.existsSync(f)),
    ...fs.readdirSync(path.join(APP_DIR, 'solutions')).map(d =>
      path.join(APP_DIR, 'solutions', d, 'page.tsx')).filter(f => fs.existsSync(f)),
  ]

  const combined = pages.map(p => fs.existsSync(p) ? fs.readFileSync(p, 'utf-8') : '').join('\n\n---PAGE BREAK---\n\n')

  const prompt = `Extract ALL FAQ questions and answers from these Next.js TSX pages for a warehouse automation company.

Return ONLY valid JSON as an array:
[
  {
    "question": "What is the minimum order?",
    "answer": "No minimum order required.",
    "category": "sales"
  }
]

Categories to use: "general", "technical", "sales", "implementation", "integration", "support"

Rules:
- Extract every question and answer you can find
- Deduplicate identical questions
- Return only valid JSON array, no markdown, no explanation

TSX pages content:
${combined.slice(0, 30000)}`

  const json = await callGemini(prompt)
  const faqs = JSON.parse(json)

  const outPath = path.join(CONTENT_DIR, 'faqs.ts')
  const content = `import type { FAQ } from './types'\n\nexport const faqs: FAQ[] = ${toTS(faqs)}\n`
  fs.writeFileSync(outPath, content, 'utf-8')
  console.log(`  ✓ content/faqs.ts (${faqs.length} FAQs)`)
}

// ── 变更检测：只处理 git diff 中变化的 TSX 文件 ────────────────────────────

function getChangedTsxFiles(): Set<string> {
  try {
    const { execSync } = require('child_process') as typeof import('child_process')
    // 获取与上一个 commit 相比变化的文件
    const output = execSync('git diff --name-only HEAD~1 HEAD 2>/dev/null || git diff --name-only HEAD 2>/dev/null || echo ""', { encoding: 'utf-8' })
    const files = new Set(output.split('\n').map(f => f.trim()).filter(Boolean))
    console.log('Changed files:', [...files].filter(f => f.endsWith('.tsx')).join(', ') || 'none')
    return files
  } catch {
    // 无法获取 diff 时，处理所有文件
    return new Set(['ALL'])
  }
}

function shouldProcess(changedFiles: Set<string>, tsxRelPath: string): boolean {
  if (changedFiles.has('ALL')) return true
  return changedFiles.has(tsxRelPath)
}

// ── 主流程 ──────────────────────────────────────────────────────────────────

async function main() {
  if (!GEMINI_API_KEY) {
    console.error('Missing GEMINI_API_KEY')
    process.exit(1)
  }

  const changedFiles = getChangedTsxFiles()
  let extracted = 0

  console.log('Extracting products...')
  const productSlugs = fs.readdirSync(path.join(APP_DIR, 'products'))
    .filter(d => fs.statSync(path.join(APP_DIR, 'products', d)).isDirectory())
  for (const slug of productSlugs) {
    const rel = `app/products/${slug}/page.tsx`
    if (shouldProcess(changedFiles, rel)) {
      await extractProduct(slug)
      extracted++
    } else {
      console.log(`  skip (unchanged): ${slug}`)
    }
  }

  console.log('\nExtracting solutions...')
  const solutionSlugs = fs.readdirSync(path.join(APP_DIR, 'solutions'))
    .filter(d => fs.statSync(path.join(APP_DIR, 'solutions', d)).isDirectory())
  for (const slug of solutionSlugs) {
    const rel = `app/solutions/${slug}/page.tsx`
    if (shouldProcess(changedFiles, rel)) {
      await extractSolution(slug)
      extracted++
    } else {
      console.log(`  skip (unchanged): ${slug}`)
    }
  }

  // FAQ 只在相关页面变化时重新提取
  const faqPages = ['app/page.tsx', 'app/about/page.tsx']
  if (faqPages.some(p => shouldProcess(changedFiles, p))) {
    console.log('\nExtracting FAQs...')
    await extractFaqs()
    extracted++
  } else {
    console.log('\nFAQs: skip (no relevant page changes)')
  }

  console.log(`\nDone. Extracted ${extracted} item(s).`)
}

main().catch(e => { console.error(e); process.exit(1) })
