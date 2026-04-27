import type { Solution } from '../types'

export const asrs: Solution = {
  slug: 'asrs',
  name: 'ASRS Automated Storage and Retrieval',
  service_type: 'Warehouse Automation',
  short_description: 'End-to-end automated storage and retrieval systems for high-density warehouses.',
  description: 'End-to-end automated storage and retrieval system that increases storage capacity by 75%, delivers 4x throughput efficiency, and achieves 99.99% inventory accuracy through intelligent AGV coordination.',
  key_metrics: [
    { label: 'Storage Capacity Increase', value: '+75%' },
    { label: 'Throughput Efficiency', value: '4x' },
    { label: 'Inventory Accuracy', value: '99.99%' },
    { label: 'Labor Cost Reduction', value: '-60%' },
    { label: 'Cycle Time Reduction', value: 'Up to 300%' },
  ],
  benefits: [
    { title: 'Automated Retrieval', description: 'Precision-guided AGVs eliminate manual searching and physical fetching, reducing cycle times by up to 300%.' },
    { title: 'Space Optimization', description: 'Ultra-dense racking configurations managed by LCCS maximize every cubic meter of your facility footprint.' },
    { title: 'Intelligence Management', description: 'The LCCS Software core coordinates multi-agent pathfinding and inventory visibility in real-time.' },
  ],
  process_steps: [
    { number: '01', title: 'Task Intake', description: 'WMS transmits storage or retrieval requirements to the core system.' },
    { number: '02', title: 'Dispatch', description: 'LCCS identifies optimal agent and dispatches AGV via secure mesh link.' },
    { number: '03', title: 'Navigation', description: 'AGV utilizes LIDAR and SLAM to navigate rack corridors with millimeter precision.' },
    { number: '04', title: 'Execution', description: 'Automated fork/roller system retrieves or stores load, confirming task closure.' },
  ],
  related_products: ['RL-SD005', 'RL-RC200', 'RL-LT1000'],
}
