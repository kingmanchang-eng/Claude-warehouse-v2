export { asrs } from './asrs'
export { materialHandling } from './material-handling'
export { picking } from './picking'
export { software } from './software'
import { asrs } from './asrs'
import { materialHandling } from './material-handling'
import { picking } from './picking'
import { software } from './software'
import type { Solution } from '../types'

export const allSolutions: Solution[] = [asrs, materialHandling, picking, software]

export const solutionsBySlug: Record<string, Solution> = Object.fromEntries(
  allSolutions.map(s => [s.slug, s])
)
