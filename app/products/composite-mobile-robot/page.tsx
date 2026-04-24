import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { productSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function CompositeMobileRobotPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[productSchema({ name: "Composite Mobile Robot RL-CR-PICK", description: "Autonomous mobile robot with integrated 6-axis arm for intelligent picking operations.", model: "RL-CR-PICK", url: "/products/composite-mobile-robot", category: "Composite Mobile Robot" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Composite Mobile Robot", url: "/products/composite-mobile-robot" }])]} />
      {/* Section 1: Hero */}
      <section className="relative min-h-[870px] flex items-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Modern industrial factory floor with blue atmospheric lighting and a high-tech composite mobile robot with a 6-axis arm in focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ed1Yyi0MJBpXYaPpshWStaceZrQE8TDdpV10hrqa3ydgSp0YYVR81o_Ky4feC2X_U22DHXom9PrgiAjy1gq6bcGW8cGwk1tcue7BsPTlLKlsTRjxGiZj7lRi1OvN-k9y2a1FLoi2WbKzGHN-xYrUMt9BSKyPliXomSInkSHJA6sNSqR70xBmlkqmvapIf2BAO1jiPEYQCiP2f7abKgMz3jQlyy2THwbay8kRAAPIwuoNARyTalawzqUI_6GAUKIdth4xHL9WNh0" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="inline-block py-1 px-3 mb-6 border-l-2 border-tertiary bg-tertiary/10 text-tertiary font-label text-[0.6875rem] uppercase tracking-widest">
            Industrial Automation // Series CMR-01
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-on-background leading-[0.9]">
            Composite Mobile Robot — <br />
            <span className="text-primary">Autonomous Mobile Manipulation Platform</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Integrated transport and manipulation for high-precision industrial workflows. Engineered for seamless material handling and complex assembly tasks.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton />
            <button className="border border-outline-variant/30 text-on-surface px-8 py-4 font-bold rounded-sm hover:bg-surface-container-high transition-all">
              View Datasheet
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Product Overview */}
      <section className="py-24 px-8 bg-surface">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-medium text-tertiary mb-2">Mechanical Synergy</h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                The RobotLyne Composite Mobile Robot (CMR) represents the convergence of mobility and dexterity. By fusing an autonomous mobile base with a high-precision 6-axis robotic arm, we eliminate the boundaries between logistics and production.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-surface-container-low border-l-4 border-tertiary">
                <h3 className="font-display text-xl mb-2">Vision-Guided Precision</h3>
                <p className="text-sm text-on-surface-variant">Embedded AI vision systems enable real-time object recognition and dynamic path planning for error-free manipulation in unconstrained environments.</p>
              </div>
              <div className="p-6 bg-surface-container-low border-l-4 border-primary">
                <h3 className="font-display text-xl mb-2">Digital Thread Integration</h3>
                <p className="text-sm text-on-surface-variant">Fully compatible with existing MES (Manufacturing Execution Systems) and WMS (Warehouse Management Systems) for total operational transparency.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-tertiary/10 blur-3xl rounded-full"></div>
            <div className="relative bg-surface-container-high rounded-xl overflow-hidden aspect-square flex items-center justify-center p-8">
              <img className="rounded-lg object-cover w-full h-full shadow-2xl" alt="Detailed close-up of a high-precision 6-axis robotic arm with sleek industrial design and blue sensor lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdYy2Hve8i_-Mvvfy8sG38tMGEAJJ1PtDCHyGXxUcdzK08ngIZMzooGycQgGm9NJjRf8EECNZKWiQkStSH48RcFKKHzc8WI8Bx8N975zJzQ3eMQc7kQgyRV3eiNrfeL2JGzdS7K-2GVrwz3817Lj8uq2-26pPHBHFeFius_rE9_sjM1Nxw03LkOKXWOs8d7bz4C7gOFZxPQiahp-YyARldrQjF4ZhG4VQzokgtM2mrjDefx2B2YgnlYCFGGqsXjFOYT6owQl8_s1k" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Specifications */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-on-background">Technical Performance</h2>
          <div className="h-1 w-24 bg-tertiary mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/10 border border-outline-variant/10">
          <div className="bg-surface p-10 flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
            <span className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary mb-8">Payload Capacity</span>
            <div>
              <span className="font-display text-6xl font-bold text-on-background">200</span>
              <span className="font-display text-2xl text-tertiary ml-1">KG</span>
            </div>
          </div>
          <div className="bg-surface p-10 flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
            <span className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary mb-8">Velocity (Max)</span>
            <div>
              <span className="font-display text-6xl font-bold text-on-background">1.5</span>
              <span className="font-display text-2xl text-tertiary ml-1">M/S</span>
            </div>
          </div>
          <div className="bg-surface p-10 flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
            <span className="font-label text-[0.6875rem] uppercase tracking-widest text-tertiary mb-8">Operational Accuracy</span>
            <div>
              <span className="font-display text-6xl font-bold text-on-background">±5</span>
              <span className="font-display text-2xl text-tertiary ml-1">MM</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex items-center gap-4 p-4 bg-surface-container-lowest">
            <span className="material-symbols-outlined text-tertiary text-3xl">navigation</span>
            <div>
              <p className="font-label text-[0.625rem] text-on-surface-variant uppercase">Navigation Mode</p>
              <p className="font-body text-sm font-semibold">Laser SLAM + QR Code</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-surface-container-lowest">
            <span className="material-symbols-outlined text-tertiary text-3xl">battery_charging_full</span>
            <div>
              <p className="font-label text-[0.625rem] text-on-surface-variant uppercase">Battery Life</p>
              <p className="font-body text-sm font-semibold">8 Hours Continuous</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-surface-container-lowest">
            <span className="material-symbols-outlined text-tertiary text-3xl">security</span>
            <div>
              <p className="font-label text-[0.625rem] text-on-surface-variant uppercase">Safety Suite</p>
              <p className="font-body text-sm font-semibold">Dual Radar + Depth Camera</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-surface-container-lowest">
            <span className="material-symbols-outlined text-tertiary text-3xl">settings_input_component</span>
            <div>
              <p className="font-label text-[0.625rem] text-on-surface-variant uppercase">Arm DOF</p>
              <p className="font-body text-sm font-semibold">6-Axis Collaborative</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Deployment Scenarios */}
      <section className="py-24 px-8 bg-surface">
        <h2 className="font-display text-3xl font-bold mb-12 text-center">Operational Scenarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden aspect-[4/5] bg-surface-container-low">
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Industrial robot performing bin picking in a high-tech warehouse with blue neon highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJt0JoYkWO4nDg0oMXT-0e_SI9keIEWDwkjxjq3KJfmSUo8OTSpeA0XP2vH6zXgqWlIr1jWYtMaw1nPF3rIQq3VhKtU9DzXlRej3iBoJwyoLY5v2nFN835ciR5a3cDsu3gQcg9bM_lybcUcm6z737l1G-of9YfxvuucnMxoxszk364gddCTTjxhb5cqjD55ON4ToSIx6VVTBdcHRiiRKkwnmvfLZHeBiDer_fmAB7b-10vIFeg0WWEcvUm8g32tg4CmlSMiybY8I" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-0 p-8">
              <span className="material-symbols-outlined text-tertiary mb-4">inventory_2</span>
              <h3 className="font-display text-2xl font-bold mb-2">Bin Picking</h3>
              <p className="text-sm text-on-surface-variant">Automated identification and retrieval of components from unordered storage bins.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden aspect-[4/5] bg-surface-container-low">
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="CNC machine tending with a mobile robotic arm in a clean manufacturing environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV4SvxDcVCw-r6gzHljQiHRJMQgKmNHHMj1VqdAGCOTo2e-sP5Gjph08gNIEALF9VuDWKRA1hqSDJgAHQOYsy6qVQc-3ZwS5uJkaVxVCCnDJnMWSQgdBU7gMWJnTLB3fV548yth4RxmesZoVE6N4Tc6GkRnb4eCxAV9jZznp6DHNPBbn-8lTs-o7agCm0uj1yRa0H0ugymDA9ywd4_VYRAta3wuQIxWvnoeezzG_yNqaJUKKJXujAeKW53nVf7ySayY8wnIg" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-0 p-8">
              <span className="material-symbols-outlined text-tertiary mb-4">precision_manufacturing</span>
              <h3 className="font-display text-2xl font-bold mb-2">CNC Machine Tending</h3>
              <p className="text-sm text-on-surface-variant">Continuous loading and unloading of CNC machines to maximize throughput.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden aspect-[4/5] bg-surface-container-low">
            <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Robotic system performing quality inspection using advanced visual sensors in an industrial setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSgixb2RnT6uwR79I3wDmGlZ8l5n1xNWMXlKlqFfj29jVzSAgje0uO72aYmlX5N5ImhI9PBPAegc5DzXBsEdJbfCqnHQnm14VqgzBRBUHdt1kYBYzppdC7itlfGCGbfxZbFJnpdkDEkLBeYvrgOQidhg9hDuKcsnAr6zAS_r6TynATEAvgL-4Yc6wm6fC8s0O-erEk-G8psmOhGFCk72RB1baeZFgdAVEkIS4CaJMq74PtoAeTbYjCCWKJ_eVrjeKAXuSu49ux8e4" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-0 p-8">
              <span className="material-symbols-outlined text-tertiary mb-4">fact_check</span>
              <h3 className="font-display text-2xl font-bold mb-2">Quality Inspection</h3>
              <p className="text-sm text-on-surface-variant">Vision-guided automated inspection for real-time defect detection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Key Features (Bento Grid) */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[auto] md:h-[600px]">
          <div className="md:col-span-2 bg-surface-container-high p-8 flex flex-col justify-end relative overflow-hidden">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">psychology</span>
            <h3 className="font-display text-2xl font-bold mb-2">AI Vision Picking</h3>
            <p className="text-on-surface-variant text-sm">Deep learning algorithms for sub-millimeter recognition and pose estimation in dynamic workspaces.</p>
          </div>
          <div className="bg-surface-container-low p-8 flex flex-col justify-end">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">hub</span>
            <h3 className="font-display text-lg font-bold mb-2">6-Axis Integration</h3>
            <p className="text-on-surface-variant text-xs">Seamless coordination between the mobile chassis and the manipulator arm.</p>
          </div>
          <div className="bg-surface-container-low p-8 flex flex-col justify-end">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">explore</span>
            <h3 className="font-display text-lg font-bold mb-2">Autonomous Navigation</h3>
            <p className="text-on-surface-variant text-xs">SLAM technology for infrastructure-free deployment in complex facilities.</p>
          </div>
          <div className="bg-surface-container-low p-8 flex flex-col justify-end">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">cloud_sync</span>
            <h3 className="font-display text-lg font-bold mb-2">MES/WMS Connectivity</h3>
            <p className="text-on-surface-variant text-xs">Real-time data synchronization with enterprise resource platforms.</p>
          </div>
          <div className="md:col-span-3 bg-primary-container p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-4">policy</span>
              <h3 className="font-display text-2xl font-bold mb-2">Safe Collaborative Operation</h3>
              <p className="text-on-surface-variant">Multiple layers of active safety sensors allow the robot to operate safely alongside human workers without physical barriers.</p>
            </div>
            <div className="hidden md:block w-px h-full bg-outline-variant/30"></div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> <span className="text-xs">ISO 10218-1 Compliance</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> <span className="text-xs">CE Marking</span></div>
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> <span className="text-xs">RIA R15.06 Safety Certified</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: System Integration Ecosystem */}
      <section className="py-24 px-8 bg-surface text-center">
        <h2 className="font-display text-3xl font-bold mb-16">System Integration Ecosystem</h2>
        <div className="relative container mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-surface-container-high rounded-sm border-t-2 border-tertiary">
              <h4 className="font-display font-bold text-xl mb-1">MES</h4>
              <p className="font-label text-[0.625rem] text-tertiary uppercase">Exec Control</p>
            </div>
            <div className="p-6 bg-surface-container-high rounded-sm border-t-2 border-primary">
              <h4 className="font-display font-bold text-xl mb-1">WMS</h4>
              <p className="font-label text-[0.625rem] text-primary uppercase">Inventory</p>
            </div>
            <div className="p-6 bg-surface-container-high rounded-sm border-t-2 border-secondary">
              <h4 className="font-display font-bold text-xl mb-1">ERP</h4>
              <p className="font-label text-[0.625rem] text-secondary uppercase">Planning</p>
            </div>
            <div className="p-6 bg-surface-container-high rounded-sm border-t-2 border-on-surface">
              <h4 className="font-display font-bold text-xl mb-1">LCCS</h4>
              <p className="font-label text-[0.625rem] text-on-surface uppercase">Central Command</p>
            </div>
          </div>
          <div className="mt-12 p-12 bg-surface-container-low inline-block mx-auto rounded-full">
            <div className="w-32 h-32 flex items-center justify-center bg-tertiary/10 rounded-full border border-tertiary/30">
              <span className="material-symbols-outlined text-tertiary text-6xl">robot_2</span>
            </div>
            <p className="mt-4 font-display font-bold tracking-widest text-on-background uppercase">RobotLyne CORE</p>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Section */}
      <section className="py-24 px-8">
        <div className="bg-surface-container-high p-12 md:p-24 rounded-lg text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary/20 to-transparent"></div>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-on-background leading-tight">Ready to Integrate Intelligent Manipulation?</h2>
          <p className="max-w-2xl mx-auto mb-12 text-on-surface-variant text-lg">Our engineering team is ready to design a custom workflow for your specific industrial requirements.</p>
          <CTAButton />
        </div>
      </section>
    </main>
  );
}
