import type { Product } from '../types'

export const agvForklift: Product = {
  slug: 'agv-forklift',
  model_number: 'RL-FL1600',
  name: 'AGV Forklift RL-FL1600',
  category: 'AGV Forklift',
  short_description: 'Heavy-duty autonomous forklift robot with 1600kg payload capacity for warehouse logistics.',
  description: 'Precision-engineered logistics driven by Laser SLAM and 3D Vision navigation. Redefining high-density warehouse efficiency with 360° obstacle detection and automatic carrier recognition.',
  payload_kg: 1600,
  speed_ms: 1.8,
  specs: [
    { label: 'Load Capacity', value: '1600kg (Std) / 1400kg (Stk)' },
    { label: 'Lift Height', value: '3000mm' },
    { label: 'Max Speed', value: '1.8m/s (Std) / 1.5m/s (Stk)' },
    { label: 'Navigation Accuracy', value: '±10mm' },
    { label: 'Battery Runtime', value: '8h Continuous' },
    { label: 'Min Aisle Width', value: '2500mm' },
    { label: 'Pallet Dimensions', value: '1200×800 / 1200×1000mm' },
    { label: 'Uptime', value: '99.9%' },
  ],
  features: [
    { title: 'Laser SLAM + 3D Vision', description: 'Dual-layer navigation provides industry-leading spatial awareness and dynamic path planning.' },
    { title: 'Auto Fork Adjustment', description: 'Intelligent width control to accommodate various pallet standards (EU, US, custom) without downtime.' },
    { title: 'WMS / MES Integration', description: 'Native connectivity via open APIs to existing enterprise software stacks.' },
    { title: 'Remote Monitoring', description: 'Full fleet control via LCCS (Lyne Cloud Control System) with real-time health diagnostics.' },
    { title: '360° Flexibility', description: 'Omnidirectional movement allows for maneuvers in extremely confined spaces.' },
    { title: 'Omnidirectional Safety', description: '3D obstacle avoidance and safety bumpers for secure human-machine collaboration.' },
    { title: 'Automatic Carrier Recognition', description: 'Advanced 3D vision detects pallet orientation and type automatically for seamless docking without manual adjustment.' },
  ],
  applications: [
    { title: 'Pallet In/Out Storage', description: 'Automated replenishment and retrieval for high-density racking.' },
    { title: 'Cross-docking', description: 'Rapid material transfer from inbound to outbound with zero dwell time.' },
    { title: 'Line Feeding', description: 'Just-in-time material supply to manufacturing lines to reduce inventory.' },
    { title: 'Cold Storage', description: 'Optimized performance in temperatures down to -25°C with specialized hardware.' },
  ],
  use_cases: ['Pallet transport', 'Stacking', 'Cross-docking', 'Inbound receiving', 'Cold storage', 'Line feeding'],
  related_products: ['RL-LT1000', 'RL-RC200'],
}
