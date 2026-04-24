import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function SoftwarePage() {
  return (
    <main className="pt-20 grid-subtle">
      <JsonLd data={[serviceSchema({ name: "Warehouse Software LCCS", description: "Integrated WMS, WCS, and Fleet Control software for full warehouse ecosystem orchestration.", url: "/solutions/software", serviceType: "Warehouse Management Software" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions/asrs" }, { name: "Software / LCCS", url: "/solutions/software" }])]} />
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center px-8 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="relative z-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-tertiary border-l-2 border-tertiary mb-8">
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em]">System Launch Status: Active</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            LCCS — Logistics Central <br />
            <span className="text-tertiary">Control System.</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl font-light leading-relaxed mb-12">
            The Intelligence Behind Your Automated Warehouse. Precision-engineered software orchestration for high-density logistics and autonomous orchestration.
          </p>
          <div className="flex items-end gap-8">
            <div className="border-l border-outline-variant/30 pl-6">
              <div className="font-display text-6xl font-bold text-primary">30+</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Software Copyrights</div>
            </div>
            <div className="border-l border-outline-variant/30 pl-6">
              <div className="font-display text-6xl font-bold text-primary">0.2ms</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Response Latency</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-40">
          <img
            alt="Technical abstract"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwfrzLDZf3q8RLnFbUS3aNHomJRLLJZviy9ZRTbqloyBoGpt0_40ax-dyapzwSBqZKmSWSM4QLNnmJ5C3zEI5_ewlxsB2IZPEH6hqEPna-DNihCkE2Qyhpf1rfjvssN_A1aJQUPp3aRentGbP9Ufkkg7Dz9SeKDQwGuPfryGYLYvx0Yoj09e-YCHU5Iy8XuatdCfEuFvRmzo7JhDGHwBotzE7gs7nzGwatlvD3uxrWCOmPCdX0SmUrp2USczaZoD_oxqnYNshkmUU"
          />
        </div>
      </section>

      {/* The Core Engine */}
      <section className="py-24 px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="font-label text-tertiary text-[11px] font-bold uppercase tracking-[0.3em]">Module Hierarchy</span>
            <h2 className="font-headline text-4xl font-medium mt-4">The Core Engine</h2>
          </div>
          <p className="max-w-md text-on-surface-variant text-sm">Our modular architecture allows for seamless scaling of warehouse operations from single AGVs to massive multi-site fleets.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {/* WMS Card */}
          <div className="bg-surface-container-low p-12 group hover:bg-surface-container-high transition-colors">
            <span className="font-display text-primary/20 text-7xl font-bold absolute opacity-10 -mt-8 -ml-4">01</span>
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-primary mb-8">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-6">WMS</h3>
              <p className="font-label text-tertiary text-[10px] font-bold uppercase mb-4">Warehouse Management System</p>
              <ul className="space-y-4 text-on-surface-variant text-sm border-t border-outline-variant/20 pt-6">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>Order Management</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>Inventory Tracking</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>Task Execution</li>
              </ul>
            </div>
          </div>
          {/* WCS Card */}
          <div className="bg-surface-container-low p-12 group hover:bg-surface-container-high transition-colors">
            <span className="font-display text-primary/20 text-7xl font-bold absolute opacity-10 -mt-8 -ml-4">02</span>
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-primary mb-8">
                <span className="material-symbols-outlined">settings_input_component</span>
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-6">WCS</h3>
              <p className="font-label text-tertiary text-[10px] font-bold uppercase mb-4">Warehouse Control System</p>
              <ul className="space-y-4 text-on-surface-variant text-sm border-t border-outline-variant/20 pt-6">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>Equipment Control</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>Real-time Monitoring</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>Device Coordination</li>
              </ul>
            </div>
          </div>
          {/* RSS Card */}
          <div className="bg-surface-container-low p-12 group hover:bg-surface-container-high transition-colors">
            <span className="font-display text-primary/20 text-7xl font-bold absolute opacity-10 -mt-8 -ml-4">03</span>
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-primary mb-8">
                <span className="material-symbols-outlined">route</span>
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-6">RSS</h3>
              <p className="font-label text-tertiary text-[10px] font-bold uppercase mb-4">Route &amp; Resource System</p>
              <ul className="space-y-4 text-on-surface-variant text-sm border-t border-outline-variant/20 pt-6">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>AGV Scheduling</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>Path Planning</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary"></span>Auto Charging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Digital Twin Intelligence */}
      <section className="py-24 px-8 bg-surface-container-lowest overflow-hidden relative">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-hud p-4 rounded-lg border border-outline-variant/20 relative">
              <img
                alt="Digital Twin Visualization"
                className="w-full h-auto grayscale brightness-50 contrast-125 rounded"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZqrmt-yTBQuXHOsiDAUl878RaSVaogWEf6SpzpXbs8-xBVftVy-586w9_s2USJa74BfeqLqCOSPtKXxjv19datnYKykP2u4LG3b2rfVW89Gzlwmmr2ME3oQ1NfLpgf5oZ1R4EM2gmT9iAQM7_S8NG4neNvILxvSufGS2cVDKv52DEL3h6c4qUfz4xeoZ6tUirwAChcniO_z60VRlYiDQaHlHRbi0yw7IBUT1WYL761fHmPhF8wPf54DlQtuF1avv4QuFKK1Ncb2s"
              />
              <div className="absolute top-8 right-8 bg-tertiary/10 border border-tertiary/30 px-3 py-2 rounded text-[10px] font-mono text-tertiary uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary animate-pulse rounded-full"></span> Live Telemetry
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-label text-tertiary text-[11px] font-bold uppercase tracking-[0.3em]">Spatial Awareness</span>
            <h2 className="font-headline text-5xl font-bold mt-4 leading-tight">3D Digital Twin Intelligence.</h2>
            <p className="text-on-surface-variant my-8 text-lg font-light leading-relaxed">
              Visualize your entire operation in a high-fidelity 3D environment. Bridge the gap between physical hardware and digital orchestration with millisecond accuracy.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-headline text-primary font-semibold mb-2">Real-time Monitoring</h4>
                <p className="text-on-surface-variant text-sm">Instant visual feedback of every moving asset and inventory position across the floor.</p>
              </div>
              <div>
                <h4 className="font-headline text-primary font-semibold mb-2">Predictive Maintenance</h4>
                <p className="text-on-surface-variant text-sm">AI-driven diagnostics identify potential mechanical failures before they impact your throughput.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Management Dashboard */}
      <section className="py-32 px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-label text-tertiary text-[11px] font-bold uppercase tracking-[0.3em]">Operational Interface</span>
          <h2 className="font-headline text-4xl font-bold mt-4">Fleet Management Dashboard</h2>
        </div>
        <div className="bg-surface-container-highest rounded-xl p-2 shadow-2xl border border-outline-variant/10 max-w-[1200px] mx-auto overflow-hidden">
          <div className="bg-surface-dim rounded-lg overflow-hidden flex flex-col md:flex-row h-[600px]">
            {/* Dashboard Sidebar */}
            <div className="w-full md:w-64 bg-surface-container-low border-r border-outline-variant/20 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-tertiary flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-surface text-sm">rocket_launch</span>
                </div>
                <span className="font-headline font-bold text-sm tracking-tighter">LCCS CORE</span>
              </div>
              <nav className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 bg-surface-container-high text-tertiary rounded-sm">
                  <span className="material-symbols-outlined text-sm">dashboard</span>
                  <span className="text-xs font-medium">Dashboard</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-sm cursor-pointer">
                  <span className="material-symbols-outlined text-sm">smart_toy</span>
                  <span className="text-xs font-medium">Fleet Status</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-sm cursor-pointer">
                  <span className="material-symbols-outlined text-sm">analytics</span>
                  <span className="text-xs font-medium">Performance</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-sm cursor-pointer">
                  <span className="material-symbols-outlined text-sm">settings</span>
                  <span className="text-xs font-medium">Configuration</span>
                </div>
              </nav>
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Systems Nominal</span>
                </div>
              </div>
            </div>
            {/* Dashboard Map Area */}
            <div className="flex-1 bg-surface relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="grid-subtle w-full h-full"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-8">
                  <div className="w-full h-full border border-outline-variant/30 rounded relative bg-surface-container-lowest/50">
                    <div className="absolute top-1/4 left-1/4 w-32 h-20 border border-tertiary/20 bg-tertiary/5"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-24 border border-tertiary/20 bg-tertiary/5"></div>
                    {/* Robot Indicators */}
                    <div className="absolute top-[40%] left-[30%] group">
                      <div className="w-4 h-4 bg-tertiary shadow-[0_0_15px_rgba(0,218,243,0.5)] flex items-center justify-center">
                        <span className="text-[8px] text-surface font-bold">R1</span>
                      </div>
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-surface-container-high border border-tertiary px-2 py-1 hidden group-hover:block whitespace-nowrap">
                        <p className="text-[8px] font-mono">STATUS: ACTIVE<br />BATTERY: 84%</p>
                      </div>
                    </div>
                    <div className="absolute bottom-[35%] right-[40%]">
                      <div className="w-4 h-4 bg-primary flex items-center justify-center">
                        <span className="text-[8px] text-on-primary font-bold">R2</span>
                      </div>
                    </div>
                    <div className="absolute top-[20%] right-[15%]">
                      <div className="w-4 h-4 bg-orange-500 flex items-center justify-center">
                        <span className="text-[8px] text-surface font-bold">C1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Bar */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start pointer-events-none">
                <div className="flex gap-4 pointer-events-auto">
                  <div className="bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/20 p-4 min-w-[140px]">
                    <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Active Fleet</p>
                    <p className="font-display text-2xl font-bold text-tertiary">42 Units</p>
                  </div>
                  <div className="bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/20 p-4 min-w-[140px]">
                    <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Queue Status</p>
                    <p className="font-display text-2xl font-bold text-primary">High</p>
                  </div>
                </div>
                <div className="bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/20 px-4 py-2 pointer-events-auto">
                  <p className="text-[10px] font-mono text-tertiary">LAT: 34.0522° N | LON: 118.2437° W</p>
                </div>
              </div>
              {/* Fleet Table */}
              <div className="absolute bottom-6 left-6 right-6 h-32 bg-surface-container-high/90 backdrop-blur-md border border-outline-variant/20 overflow-hidden">
                <table className="w-full text-left text-[10px] uppercase tracking-wider font-label">
                  <thead className="bg-surface-container-highest">
                    <tr>
                      <th className="px-4 py-2">Robot ID</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Task</th>
                      <th className="px-4 py-2">Load</th>
                      <th className="px-4 py-2">Diag</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-outline-variant/10">
                      <td className="px-4 py-3 font-bold">AGV-902</td>
                      <td className="px-4 py-3 text-tertiary">Picking</td>
                      <td className="px-4 py-3">T-99812</td>
                      <td className="px-4 py-3">120kg</td>
                      <td className="px-4 py-3 text-green-500">OK</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold">AGV-401</td>
                      <td className="px-4 py-3 text-primary">Charging</td>
                      <td className="px-4 py-3">—</td>
                      <td className="px-4 py-3">0kg</td>
                      <td className="px-4 py-3 text-green-500">OK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Integration */}
      <section className="py-24 px-8 border-t border-outline-variant/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <span className="font-label text-tertiary text-[11px] font-bold uppercase tracking-[0.3em]">Interoperability</span>
            <h2 className="font-headline text-4xl font-bold mt-4 mb-8">Universal Integration.</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              RobotLyne LCCS doesn&apos;t exist in a vacuum. Our system features native connectors for leading enterprise software and a robust API for custom implementation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 opacity-60">
              <div className="bg-surface-container-high h-20 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-default border border-outline-variant/10">
                <span className="font-headline font-black text-xl tracking-tighter">SAP</span>
              </div>
              <div className="bg-surface-container-high h-20 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-default border border-outline-variant/10">
                <span className="font-headline font-black text-xl tracking-tighter">ORACLE</span>
              </div>
              <div className="bg-surface-container-high h-20 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-default border border-outline-variant/10">
                <span className="font-headline font-black text-xl tracking-tighter">MS DYNAMICS</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-surface-container-low p-12 border-l-4 border-tertiary">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-tertiary text-4xl">api</span>
              <h4 className="font-headline text-2xl font-bold">Custom API Connect</h4>
            </div>
            <div className="space-y-6 font-mono text-xs text-on-surface-variant">
              <div className="flex gap-4">
                <span className="text-tertiary">GET</span>
                <span>/api/v1/fleet/status</span>
              </div>
              <div className="flex gap-4">
                <span className="text-primary">POST</span>
                <span>/api/v1/task/assign</span>
              </div>
              <div className="p-4 bg-surface-container-lowest border border-outline-variant/20 rounded">
                <code className="block text-primary/70">{'{ "robot_id": "AGV_01", "action": "MOVE", "coord": [24.1, 12.8] }'}</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-24 px-8 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 border-l-2 border-outline-variant/20 hover:border-tertiary transition-colors">
            <div className="text-tertiary mb-6">
              <span className="material-symbols-outlined text-4xl">lock_open</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Deadlock Prevention</h4>
            <p className="text-on-surface-variant text-sm">Patented topological algorithms ensure zero-collision flow even in high-density corridors.</p>
          </div>
          <div className="p-8 border-l-2 border-outline-variant/20 hover:border-tertiary transition-colors">
            <div className="text-tertiary mb-6">
              <span className="material-symbols-outlined text-4xl">speed</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Optimized Efficiency</h4>
            <p className="text-on-surface-variant text-sm">Dynamic path recalculation reduces travel distance by an average of 18.4%.</p>
          </div>
          <div className="p-8 border-l-2 border-outline-variant/20 hover:border-tertiary transition-colors">
            <div className="text-tertiary mb-6">
              <span className="material-symbols-outlined text-4xl">public</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Global Visibility</h4>
            <p className="text-on-surface-variant text-sm">Centralized cloud-native dashboard for managing multiple warehouse sites worldwide.</p>
          </div>
          <div className="p-8 border-l-2 border-outline-variant/20 hover:border-tertiary transition-colors">
            <div className="text-tertiary mb-6">
              <span className="material-symbols-outlined text-4xl">notification_important</span>
            </div>
            <h4 className="font-headline text-xl font-bold mb-4">Predictive Alerts</h4>
            <p className="text-on-surface-variant text-sm">Receive proactive maintenance triggers via SMS/Email before system slowdowns occur.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-[#0F1C2C] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/5 to-transparent"></div>
        <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter mb-8">Ready to Orchestrate Your Warehouse?</h2>
          <p className="text-on-surface-variant max-w-2xl text-lg mb-12">
            Connect with our solution architects to see how LCCS can transform your floor operations with precision-engineered automation software.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <CTAButton />
            <button className="bg-surface-container-high text-on-surface border border-outline-variant/20 px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-highest transition-all">
              View System Specs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
