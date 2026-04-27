/**
 * generate-sitemap.ts
 * 从 app/ 目录扫描所有页面，自动生成 public/sitemap.xml
 *
 * 运行：npx ts-node --project tsconfig.scripts.json scripts/generate-sitemap.ts
 */
import * as fs from 'fs'
import * as path from 'path'

const ROOT = path.join(__dirname, '..')
const APP_DIR = path.join(ROOT, 'app')
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://robotlyne.com'

interface SitemapEntry {
  url: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

function scanPages(dir: string, base = ''): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  const today = new Date().toISOString().split('T')[0]

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 跳过特殊目录
      if (item.startsWith('_') || item.startsWith('(')) continue
      const nested = scanPages(fullPath, `${base}/${item}`)
      entries.push(...nested)
    } else if (item === 'page.tsx' || item === 'page.ts') {
      const urlPath = base === '' ? '/' : `${base}/`
      // 根据路径深度决定优先级
      const depth = urlPath.split('/').filter(Boolean).length
      let priority = 1.0
      let changefreq: SitemapEntry['changefreq'] = 'weekly'

      if (depth === 0) { priority = 1.0; changefreq = 'weekly' }
      else if (depth === 1) { priority = 0.9; changefreq = 'weekly' }
      else if (depth === 2) { priority = 0.8; changefreq = 'monthly' }

      entries.push({ url: `${SITE_URL}${urlPath}`, lastmod: today, changefreq, priority })
    }
  }

  return entries
}

async function main() {
  const entries = scanPages(APP_DIR)

  // 按优先级排序
  entries.sort((a, b) => b.priority - a.priority)

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(e => [
      '  <url>',
      `    <loc>${e.url}</loc>`,
      `    <lastmod>${e.lastmod}</lastmod>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n')),
    '</urlset>',
  ].join('\n')

  const outPath = path.join(ROOT, 'public', 'sitemap.xml')
  fs.writeFileSync(outPath, xml, 'utf-8')
  console.log(`Generated public/sitemap.xml (${entries.length} URLs)`)
  entries.forEach(e => console.log(`  ${e.priority.toFixed(1)}  ${e.url}`))
}

main().catch(e => { console.error(e); process.exit(1) })
