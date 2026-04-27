import type { Product } from '../types'

export const agvRoller: Product = {
  slug: 'agv-roller',
  model_number: 'RL-RC200',
  name: 'AGV Roller RL-RC200',
  category: 'AGV Roller',
  short_description: 'Conveyor-linked roller AGV for seamless integration with production line logistics.',
  description: 'Redefining production line efficiency with autonomous docking and high-capacity roller transport. Eliminate fixed tracks and manual handovers with precision alignment sensors and hybrid navigation.',
  payload_kg: 200,
  speed_ms: 1.5,
  specs: [
    { label: 'Max Load', value: '200 kg' },
    { label: 'Top Speed', value: '1.5 m/s' },
    { label: 'Docking Accuracy', value: '±5 mm' },
    { label: 'Battery Life', value: '8 hrs' },
    { label: 'Obstacle Radar', value: 'x2 Lidar' },
    { label: 'Visual Sensor', value: 'x1 Camera' },
    { label: 'Navigation Mode', value: 'SLAM + QR Code' },
    { label: 'Charging', value: 'Auto / Manual' },
  ],
  features: [
    { title: 'No Fixed Tracks', description: 'Full spatial freedom with dynamic path planning. Navigate complex environments without floor magnets or wires.' },
    { title: 'Seamless Docking', description: 'Precision alignment sensors allow the AGV to dock with existing conveyor systems with ±5mm accuracy for automated handovers.' },
    { title: 'Hybrid Navigation', description: 'Dual-layer Laser SLAM and QR Code navigation ensure continuous operation in dynamically changing warehouse environments.' },
    { title: 'Auto Conveyor Docking', description: 'Intelligent infrared alignment for precision load transfer.' },
    { title: 'Smooth Roller Transfer', description: 'Variable speed motorized rollers ensure vibration-free transport.' },
    { title: 'Multi-robot Coordination', description: 'Fleet management system prevents congestion and optimizes routes.' },
  ],
  applications: [
    { title: 'Conveyor System Integration', description: 'Seamless bridge between disconnected production lines and automated storage systems.' },
    { title: 'Carton & Box Transport', description: 'High-speed movement of packaged goods across logistics centers.' },
    { title: 'Production Line Feeding', description: 'Automated raw material delivery to precise assembly workstations.' },
    { title: 'Cross-Docking & Packaging', description: 'Rapid sorting and redirection of goods for outbound shipping efficiency.' },
  ],
  use_cases: ['Production line bridge', 'Outbound sortation', 'Cross-belt integration', 'Conveyor integration'],
  related_products: ['RL-FL1600', 'RL-SD005'],
}
