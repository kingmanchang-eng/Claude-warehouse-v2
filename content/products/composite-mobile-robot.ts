import type { Product } from '../types'

export const compositeMobileRobot: Product = {
  slug: 'composite-mobile-robot',
  model_number: 'RL-CR-PICK',
  name: 'Composite Mobile Robot RL-CR-PICK',
  category: 'Composite Mobile Robot',
  short_description: 'Autonomous mobile robot with integrated 6-axis arm for intelligent picking operations.',
  description: 'Integrated transport and manipulation for high-precision industrial workflows. The CMR fuses an autonomous mobile base with a high-precision 6-axis robotic arm, eliminating the boundaries between logistics and production.',
  payload_kg: 200,
  speed_ms: 1.5,
  specs: [
    { label: 'Payload Capacity', value: '200 KG' },
    { label: 'Max Velocity', value: '1.5 M/S' },
    { label: 'Operational Accuracy', value: '±5 MM' },
    { label: 'Navigation Mode', value: 'Laser SLAM + QR Code' },
    { label: 'Battery Life', value: '8 Hours Continuous' },
    { label: 'Safety Suite', value: 'Dual Radar + Depth Camera' },
    { label: 'Arm DOF', value: '6-Axis Collaborative' },
  ],
  features: [
    { title: 'AI Vision Picking', description: 'Deep learning algorithms for sub-millimeter recognition and pose estimation in dynamic workspaces.' },
    { title: '6-Axis Integration', description: 'Seamless coordination between the mobile chassis and the manipulator arm.' },
    { title: 'Autonomous Navigation', description: 'SLAM technology for infrastructure-free deployment in complex facilities.' },
    { title: 'MES/WMS Connectivity', description: 'Real-time data synchronization with enterprise resource platforms.' },
    { title: 'Safe Collaborative Operation', description: 'Multiple layers of active safety sensors allow the robot to operate safely alongside human workers without physical barriers.' },
    { title: 'Vision-Guided Precision', description: 'Embedded AI vision systems enable real-time object recognition and dynamic path planning for error-free manipulation.' },
  ],
  applications: [
    { title: 'Bin Picking', description: 'Automated identification and retrieval of components from unordered storage bins.' },
    { title: 'CNC Machine Tending', description: 'Continuous loading and unloading of CNC machines to maximize throughput.' },
    { title: 'Quality Inspection', description: 'Vision-guided automated inspection for real-time defect detection.' },
  ],
  use_cases: ['Depalletizing', 'Order picking', 'Bin-picking', 'Returns processing', 'CNC machine tending', 'Quality inspection'],
  related_products: ['RL-LT1000', 'RL-SD005'],
}
