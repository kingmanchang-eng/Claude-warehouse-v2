import type { Solution } from '../types'

export const materialHandling: Solution = {
  slug: 'material-handling',
  name: 'Material Handling Automation',
  service_type: 'Material Handling',
  short_description: 'AGV-based logistics and transport solutions for manufacturing and distribution centers.',
  description: 'Intelligent internal logistics automation covering the full process from receiving to shipping. Achieves 99.99% sorting accuracy, 3–4x efficiency improvement, and 40–60% labor cost reduction through continuous 24/7 AGV fleet operation.',
  key_metrics: [
    { label: 'Sorting Accuracy', value: '99.99%' },
    { label: 'Efficiency Improvement', value: '3–4x' },
    { label: 'Labor Cost Reduction', value: '-40~60%' },
    { label: 'Process Coverage', value: 'Full (Receiving to Dispatch)' },
  ],
  benefits: [
    { title: 'Accuracy 99.99%', description: 'Precision-engineered sensor fusion ensuring near-zero error rates in high-density navigation.' },
    { title: 'Efficiency 3–4x', description: 'Continuous 24/7 operation cycle with autonomous charging and intelligent pathfinding.' },
    { title: 'Labor Cost -40~60%', description: 'Optimizing human resources by automating repetitive, heavy-load transport tasks.' },
    { title: 'Full Process Coverage', description: 'Seamless integration across receiving, storage, and dispatching modules.' },
  ],
  process_steps: [
    { number: '01', title: 'Receiving', description: 'Inbound pallet identification and automated unloading.' },
    { number: '02', title: 'Storage', description: 'High-density racking and buffer zone management.' },
    { number: '03', title: 'Production', description: 'Line-side supply and Work-In-Process transport.' },
    { number: '04', title: 'Packaging', description: 'Automated flow to wrapping and labeling stations.' },
    { number: '05', title: 'Shipping', description: 'Final dispatch sorting and loading bay delivery.' },
  ],
  related_products: ['RL-FL1600', 'RL-LT1000', 'RL-RC200'],
}
