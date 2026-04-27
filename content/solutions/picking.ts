import type { Solution } from '../types'

export const picking: Solution = {
  slug: 'picking',
  name: 'Intelligent Picking Systems',
  service_type: 'Order Fulfillment Automation',
  short_description: 'AMR-powered picking solutions delivering 4x efficiency over manual workflows.',
  description: 'Goods-to-Person & Collaborative Picking Automation engineered for high-density logistics and manufacturing precision. Delivers up to 4x efficiency improvement, ~0% error rate, and 40–60% labor cost reduction.',
  key_metrics: [
    { label: 'Efficiency Improvement', value: '4x' },
    { label: 'Error Rate', value: '~0%' },
    { label: 'Labor Cost Reduction', value: '40–60%' },
    { label: 'Uptime Reliability', value: '99.9%' },
  ],
  benefits: [
    { title: '4X Throughput', description: 'Collaborative mobile robots eliminate walk-time, allowing pickers to focus purely on value-added tasks.' },
    { title: 'Error Elimination', description: 'Automated verification systems ensure 100% picking accuracy, virtually eliminating costly returns.' },
    { title: 'Labor Cost Reduction', description: 'Optimize your workforce by reallocating staff to complex tasks while robots handle repetitive logistics.' },
    { title: 'Universal Integration', description: 'Seamless connectivity with existing ERP/WMS systems via LCCS proprietary platform.' },
  ],
  process_steps: [
    { number: '01', title: 'Initiation', description: 'WMS sends order. Your existing Warehouse Management System pushes picking lists directly to our cloud interface via encrypted API.' },
    { number: '02', title: 'Orchestration', description: 'LCCS dispatches robot. The Logical Control & Communication System calculates the most efficient route and assigns the optimal robot fleet.' },
    { number: '03', title: 'Execution', description: 'Composite Mobile Robot navigates. Equipped with LIDAR and AI-vision, robots navigate complex warehouse environments to pick and stow autonomously.' },
    { number: '04', title: 'Completion', description: 'Delivery to packing station. Picked items are transported to designated outbound stations for final quality check and shipping.' },
  ],
  related_products: ['RL-CR-PICK', 'RL-LT1000', 'RL-SD005'],
}
