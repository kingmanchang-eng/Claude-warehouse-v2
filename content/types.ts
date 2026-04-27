export interface ProductSpec {
  label: string
  value: string
}

export interface ProductFeature {
  title: string
  description: string
}

export interface Product {
  slug: string
  model_number: string
  name: string
  category: string
  short_description: string
  description: string
  payload_kg: number | null
  speed_ms: number | null
  specs: ProductSpec[]
  features: ProductFeature[]
  applications: ProductFeature[]
  use_cases: string[]
  related_products: string[]
}

export interface SolutionMetric {
  label: string
  value: string
}

export interface SolutionStep {
  number: string
  title: string
  description: string
}

export interface Solution {
  slug: string
  name: string
  service_type: string
  short_description: string
  description: string
  key_metrics: SolutionMetric[]
  benefits: ProductFeature[]
  process_steps: SolutionStep[]
  related_products: string[]
}

export interface FAQ {
  question: string
  answer: string
  category: string
}

export interface Company {
  name: string
  founding_year: number
  description: string
  employees: number
  patents: number
  software_copyrights: number
  markets: number
  email: string
  phone: string
  address: string
  certifications: string[]
  industries: string[]
  clients: string[]
}
