import type { Solution } from '../types'

export const software: Solution = {
  slug: 'software',
  name: 'Warehouse Software LCCS',
  service_type: 'Warehouse Management Software',
  short_description: 'Integrated WMS, WCS, and Fleet Control software for full warehouse ecosystem orchestration.',
  description: 'The intelligence behind your automated warehouse. LCCS (Logistics Central Control System) is a precision-engineered software platform integrating WMS, WCS, and Fleet Management with 0.2ms response latency and support for 500+ AGVs simultaneously.',
  key_metrics: [
    { label: 'Software Copyrights', value: '30+' },
    { label: 'Response Latency', value: '0.2ms' },
    { label: 'Fleet Scale', value: '500+ AGVs' },
    { label: 'Travel Distance Reduction', value: '18.4% avg' },
  ],
  benefits: [
    { title: 'Deadlock Prevention', description: 'Patented topological algorithms ensure zero-collision flow even in high-density corridors.' },
    { title: 'Optimized Efficiency', description: 'Dynamic path recalculation reduces travel distance by an average of 18.4%.' },
    { title: 'Global Visibility', description: 'Centralized cloud-native dashboard for managing multiple warehouse sites worldwide.' },
    { title: 'Predictive Alerts', description: 'Receive proactive maintenance triggers via SMS/Email before system slowdowns occur.' },
    { title: '3D Digital Twin', description: 'Visualize your entire operation in a high-fidelity 3D environment with millisecond accuracy.' },
  ],
  process_steps: [
    { number: 'WMS', title: 'Warehouse Management System', description: 'Order Management, Inventory Tracking, Task Execution.' },
    { number: 'WCS', title: 'Warehouse Control System', description: 'Equipment Control, Real-time Monitoring, Device Coordination.' },
    { number: 'RSS', title: 'Route & Resource System', description: 'AGV Scheduling, Path Planning, Auto Charging.' },
  ],
  related_products: ['RL-FL1600', 'RL-LT1000', 'RL-SD005', 'RL-RC200', 'RL-CR-PICK'],
}
