import type { Product } from '../types'

export const liftingAgv: Product = {
  slug: 'lifting-agv',
  model_number: 'RL-LT1000',
  name: 'Lifting AGV RL-LT1000',
  category: 'Lifting AGV',
  short_description: 'Compact lifting AGV with 600–1000kg payload for high-density warehouse environments.',
  description: 'Redefining warehouse throughput with high-precision lifting technology and multi-mode SLAM navigation for seamless factory floor integration. 24/7 unmanned operation with automated opportunity charging.',
  payload_kg: 1000,
  speed_ms: 1.5,
  specs: [
    { label: 'Load Capacity (RL-LIFT-600)', value: '600 kg' },
    { label: 'Load Capacity (RL-LIFT-1000)', value: '1000 kg' },
    { label: 'Max Speed', value: '1.5 m/s' },
    { label: 'Lift Height', value: '60 mm' },
    { label: 'Navigation', value: 'Laser SLAM + QR Code' },
    { label: 'Navigation Accuracy', value: '±10 mm' },
    { label: 'Battery Endurance', value: '8.0 h' },
    { label: 'Efficiency', value: '99.4%' },
  ],
  features: [
    { title: '24/7 Unmanned Operation', description: 'Continuous workflow with automated opportunity charging and mission queuing.' },
    { title: '360° Laser Protection', description: 'Multi-layered safety sensors ensuring collision-free movement in dynamic environments.' },
    { title: 'Integrated LCCS Platform', description: 'Native connectivity with MES and WMS systems for enterprise-grade control.' },
    { title: 'Multi-Mode Navigation', description: 'Versatile SLAM, QR Code, and Reflector navigation modes for any facility layout.' },
    { title: 'LCCS Fleet Management', description: 'Real-time scheduling and traffic control for fleets of 100+ robots.' },
    { title: 'Auto Charging', description: 'Smart mission management returns units to charging docks at optimal low-activity windows.' },
  ],
  applications: [
    { title: 'E-commerce Fulfillment Centers', description: 'High-frequency shelf transport for picking stations and order consolidation.' },
    { title: 'Manufacturing WIP', description: 'Automated Work-In-Progress transport between assembly line modules.' },
    { title: 'Tote & Bin Handling', description: 'Precision transport of standardized totes in high-density storage zones.' },
    { title: 'ASRS Integration', description: 'Seamless handover between automated storage and retrieval systems and horizontal transport fleets.' },
  ],
  use_cases: ['Goods-to-person picking', 'ASRS buffer zones', 'High-density shelf environments', 'E-commerce fulfillment', 'Manufacturing WIP'],
  related_products: ['RL-SD005', 'RL-FL1600'],
}
