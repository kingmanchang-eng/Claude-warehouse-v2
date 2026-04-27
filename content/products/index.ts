export { agvForklift } from './agv-forklift'
export { liftingAgv } from './lifting-agv'
export { storageAgv } from './storage-agv'
export { agvRoller } from './agv-roller'
export { compositeMobileRobot } from './composite-mobile-robot'
import { agvForklift } from './agv-forklift'
import { liftingAgv } from './lifting-agv'
import { storageAgv } from './storage-agv'
import { agvRoller } from './agv-roller'
import { compositeMobileRobot } from './composite-mobile-robot'
import type { Product } from '../types'

export const allProducts: Product[] = [
  agvForklift,
  liftingAgv,
  storageAgv,
  agvRoller,
  compositeMobileRobot,
]

export const productsBySlug: Record<string, Product> = Object.fromEntries(
  allProducts.map(p => [p.slug, p])
)
