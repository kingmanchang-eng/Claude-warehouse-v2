import type { Product } from '../types'

export const storageAgv: Product = {
  slug: 'storage-agv',
  model_number: 'RL-SD005',
  name: 'Storage AGV RL-SD005',
  category: 'Storage AGV',
  short_description: 'High-density automated storage shuttle for dense rack systems.',
  description: 'Engineered for precision handling in ultra-dense warehousing environments. The SL-2000 integrates seamlessly with existing infrastructure to maximize throughput and space utilization using hybrid Laser SLAM and QR Code navigation.',
  payload_kg: null,
  speed_ms: null,
  specs: [
    { label: 'Docking Accuracy', value: '±5mm' },
    { label: 'Navigation', value: 'Laser SLAM + QR Code' },
    { label: 'Storage Density', value: '4× vs conventional racking' },
    { label: 'Temperature Range', value: '-25°C to +40°C' },
    { label: 'Charging', value: 'Auto' },
    { label: 'Fleet Support', value: '500+ robots via LCCS' },
  ],
  features: [
    { title: 'Hybrid Navigation', description: 'Dual-mode Laser SLAM + QR Code matrix for environment mapping and pinpoint station arrival.' },
    { title: 'Precision Docking', description: 'Mechanical and sensor alignment achieve ±5mm accuracy for high-speed rack interfacing.' },
    { title: 'LCCS Fleet Control', description: 'Centrally manage 500+ robots with sub-second pathfinding and deadlock prevention.' },
    { title: 'Dual-Side Unloading', description: 'Optimized chassis design allows for loading and unloading from both sides simultaneously.' },
    { title: 'Dynamic Obstacle Detection', description: '360° obstacle detection for safe operation in busy environments.' },
    { title: 'Cold Chain Ready', description: 'Operates in temperatures from -25°C to +40°C for cold storage environments.' },
  ],
  applications: [
    { title: 'High-Density ASRS', description: 'Maximum storage density with automated retrieval for high-throughput operations.' },
    { title: 'Cold Storage', description: 'Specialized hardware for cold chain environments down to -25°C.' },
    { title: 'Pharmaceutical', description: 'Precision storage for regulated pharmaceutical environments.' },
  ],
  use_cases: ['ASRS buffer', 'Cold chain storage', 'High-bay warehouses', 'Pharmaceutical storage'],
  related_products: ['RL-LT1000', 'RL-RC200'],
}
