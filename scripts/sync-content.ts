/**
 * 构建时同步脚本：content/ → Supabase
 *
 * 执行顺序：
 *   1. 同步 products 表
 *   2. 同步 solutions 表
 *   3. 同步 faqs 表
 *
 * 使用方式：npx ts-node scripts/sync-content.ts
 * 或在 package.json 的 build 脚本中加入
 */

import { createClient } from '@supabase/supabase-js'
import { allProducts, allSolutions, faqs } from '../content'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_KEY ?? ''
)

async function syncProducts() {
  console.log('📦 Syncing products...')
  for (const p of allProducts) {
    const record = {
      model_number: p.model_number,
      name:         p.name,
      category:     p.category,
      description:  p.description,
      payload_kg:   p.payload_kg,
      speed_ms:     p.speed_ms,
      use_cases:    p.use_cases,
      specs:        Object.fromEntries(p.specs.map(s => [s.label, s.value])),
    }
    const { error } = await supabase
      .from('products')
      .upsert(record, { onConflict: 'model_number' })
    if (error) console.error(`  ✗ ${p.model_number}:`, error.message)
    else console.log(`  ✓ ${p.model_number}`)
  }
  // 清理已删除的产品
  const currentIds = allProducts.map(p => p.model_number)
  const { data: existing } = await supabase.from('products').select('model_number')
  for (const row of existing ?? []) {
    if (!currentIds.includes(row.model_number)) {
      await supabase.from('products').delete().eq('model_number', row.model_number)
      console.log(`  🗑 removed: ${row.model_number}`)
    }
  }
}

async function syncSolutions() {
  console.log('🔧 Syncing solutions...')
  for (const s of allSolutions) {
    const record = {
      slug:             s.slug,
      name:             s.name,
      description:      s.description,
      key_metrics:      Object.fromEntries(s.key_metrics.map(m => [m.label, m.value])),
      related_products: s.related_products,
    }
    const { error } = await supabase
      .from('solutions')
      .upsert(record, { onConflict: 'slug' })
    if (error) console.error(`  ✗ ${s.slug}:`, error.message)
    else console.log(`  ✓ ${s.slug}`)
  }
  // 清理已删除的解决方案
  const currentSlugs = allSolutions.map(s => s.slug)
  const { data: existing } = await supabase.from('solutions').select('slug')
  for (const row of existing ?? []) {
    if (!currentSlugs.includes(row.slug)) {
      await supabase.from('solutions').delete().eq('slug', row.slug)
      console.log(`  🗑 removed: ${row.slug}`)
    }
  }
}

async function syncFaqs() {
  console.log('❓ Syncing FAQs...')
  // 清空后重新插入（FAQ 顺序和内容可能完全变化）
  const { error: delError } = await supabase.from('faqs').delete().neq('id', 0)
  if (delError) { console.error('  ✗ Failed to clear FAQs:', delError.message); return }

  const records = faqs.map(f => ({
    question: f.question,
    answer:   f.answer,
    category: f.category,
  }))
  const { error } = await supabase.from('faqs').insert(records)
  if (error) console.error('  ✗ FAQs insert failed:', error.message)
  else console.log(`  ✓ ${records.length} FAQs synced`)
}

async function main() {
  console.log('🚀 Starting content sync to Supabase...\n')
  await syncProducts()
  await syncSolutions()
  await syncFaqs()
  console.log('\n✅ Sync complete.')
}

main().catch(console.error)
