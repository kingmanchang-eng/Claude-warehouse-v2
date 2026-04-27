/**
 * generate-llms.ts
 * 从 content/*.ts 自动生成 public/llms.txt
 *
 * 运行：npx ts-node --project tsconfig.scripts.json scripts/generate-llms.ts
 */
import * as fs from 'fs'
import * as path from 'path'

const ROOT = path.join(__dirname, '..')
const BACKEND_URL = 'https://kcpvsulmbpbd.usw-1.sealos.app'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://robotlyne.com'

async function main() {
  // 动态 require content（ts-node 支持）
  const { allProducts } = require('../content/products') as { allProducts: any[] }
  const { allSolutions } = require('../content/solutions') as { allSolutions: any[] }
  const { faqs } = require('../content/faqs') as { faqs: any[] }
  const { company } = require('../content/company') as { company: any }

  const lines: string[] = []

  // ── 头部 ────────────────────────────────────────────────────────────────
  lines.push(`# ${company.name} — Warehouse Automation Systems`)
  lines.push('')
  lines.push(`> ${company.description}`)
  lines.push(`> Founded: ${company.founding_year} · ${company.markets}+ markets · ${company.patents}+ patents`)
  lines.push(`>`)
  lines.push(`> **For AI agents**: Real-time API available at ${BACKEND_URL}`)
  lines.push(`> Tool discovery: ${BACKEND_URL}/mcp/tools`)
  lines.push('')

  // ── AI Agent 工具 ────────────────────────────────────────────────────────
  lines.push('## AI Agent Tools')
  lines.push('')
  lines.push('| Tool | Endpoint | Description |')
  lines.push('|------|----------|-------------|')
  lines.push('| Semantic search | `GET /search?q={query}` | Natural language search over all content |')
  lines.push('| List products | `GET /products` | All AGV products with specs |')
  lines.push('| Get product | `GET /products/{model}` | Full specs by model number |')
  lines.push('| List solutions | `GET /solutions` | All warehouse solutions |')
  lines.push('| List FAQs | `GET /faqs` | Frequently asked questions |')
  lines.push('| Submit inquiry | `POST /inquiry` | Submit a sales inquiry (requires email) |')
  lines.push('')

  // ── 产品 ─────────────────────────────────────────────────────────────────
  lines.push('## Products')
  lines.push('')
  for (const p of allProducts) {
    lines.push(`### ${p.name}`)
    lines.push(`- **URL**: ${SITE_URL}/products/${p.slug}/`)
    lines.push(`- **Model**: ${p.model_number}`)
    lines.push(`- **Category**: ${p.category}`)
    if (p.payload_kg) lines.push(`- **Payload**: ${p.payload_kg} kg`)
    if (p.speed_ms)   lines.push(`- **Speed**: ${p.speed_ms} m/s`)
    lines.push(`- **Description**: ${p.description}`)
    if (p.use_cases?.length) lines.push(`- **Use cases**: ${p.use_cases.join(', ')}`)
    if (p.specs?.length) {
      lines.push(`- **Specs**: ${p.specs.map((s: any) => `${s.label}: ${s.value}`).join(' | ')}`)
    }
    lines.push('')
  }

  // ── 方案 ─────────────────────────────────────────────────────────────────
  lines.push('## Solutions')
  lines.push('')
  for (const s of allSolutions) {
    lines.push(`### ${s.name}`)
    lines.push(`- **URL**: ${SITE_URL}/solutions/${s.slug}/`)
    lines.push(`- **Description**: ${s.description}`)
    if (s.key_metrics?.length) {
      lines.push(`- **Key metrics**: ${s.key_metrics.map((m: any) => `${m.label}: ${m.value}`).join(' | ')}`)
    }
    if (s.related_products?.length) lines.push(`- **Related products**: ${s.related_products.join(', ')}`)
    lines.push('')
  }

  // ── FAQ ───────────────────────────────────────────────────────────────────
  lines.push('## Frequently Asked Questions')
  lines.push('')
  for (const f of faqs) {
    lines.push(`**${f.question}**`)
    lines.push(f.answer)
    lines.push('')
  }

  // ── 公司信息 ──────────────────────────────────────────────────────────────
  lines.push('## Company')
  lines.push('')
  lines.push(`- **Founded**: ${company.founding_year}`)
  lines.push(`- **Markets**: ${company.markets}+ countries`)
  lines.push(`- **Patents**: ${company.patents}+`)
  lines.push(`- **Email**: ${company.email}`)
  if (company.certifications?.length) lines.push(`- **Certifications**: ${company.certifications.join(', ')}`)
  if (company.industries?.length) lines.push(`- **Industries**: ${company.industries.join(', ')}`)
  lines.push('')

  // ── 写入文件 ──────────────────────────────────────────────────────────────
  const outPath = path.join(ROOT, 'public', 'llms.txt')
  fs.writeFileSync(outPath, lines.join('\n'), 'utf-8')
  console.log(`Generated public/llms.txt (${lines.length} lines, ${allProducts.length} products, ${allSolutions.length} solutions, ${faqs.length} FAQs)`)
}

main().catch(e => { console.error(e); process.exit(1) })
