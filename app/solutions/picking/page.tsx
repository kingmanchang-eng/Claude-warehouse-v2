import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function PickingPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[serviceSchema({ name: "Intelligent Picking Systems", description: "AMR-powered picking solutions delivering 4x efficiency over manual workflows.", url: "/solutions/picking", serviceType: "Order Fulfillment Automation" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions/asrs" }, { name: "Intelligent Picking", url: "/solutions/picking" }])]} />
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img
            alt="Futuristic automated warehouse with multiple sleek blue robotic arms and mobile platforms navigating high-density shelving under dramatic industrial lighting"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp43ESjQdxsgwUyWnnaM9WJSzTSMpQXUmA6QxWCYG5LQ044kXOttvLkzgVHxSY3iFECrS-RydvePJ29RUi2E4yOGAXvKtJ8echLi7LJe_4JzpQamlh3q2RUIZyhvplaUDEzoyIrcZ9XnrwqqF7qHKCK-E10Gm4iC7Hpj_AF3rJ3bVTfyEFxdwbIRkwKwlZTl8QniXROBoIuKDHAYGOSZEVkBgiZXt8vhE0uOaDW39Je6fhcN5eNKA_ojotjCFzyfSmNGIdT4A1xMQ"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="font-label text-tertiary text-[0.6875rem] uppercase tracking-[0.2em] mb-4 block">Industrial Automation / Picking Systems</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-on-surface tracking-tighter leading-tight mb-6">
              Picking Solutions — <br />
              <span className="text-tertiary">Up to 4x</span> Efficiency Improvement.
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Goods-to-Person &amp; Collaborative Picking Automation engineered for high-density logistics and manufacturing precision.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold px-8 py-4 rounded-sm hover:scale-105 transition-transform">Deploy Solution</button>
              <button className="border border-outline-variant/30 text-on-surface font-semibold px-8 py-4 rounded-sm hover:bg-surface-container-high transition-colors">Technical Specs</button>
            </div>
          </div>
        </div>
        {/* Machined Metric Overlay */}
        <div className="absolute bottom-12 right-8 hidden lg:block">
          <div className="industrial-glass p-8 border-l-4 border-tertiary">
            <div className="font-display text-5xl font-bold text-tertiary">99.9%</div>
            <div className="font-label text-[0.6875rem] uppercase tracking-wider text-on-surface-variant">Uptime Reliability Index</div>
          </div>
        </div>
      </section>

      {/* Automated Modalities: 4 Cards */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium mb-2">Automated Modalities</h2>
              <p className="text-on-surface-variant">Precision picking tailored to specific workflow requirements.</p>
            </div>
            <div className="h-px flex-grow mx-8 bg-outline-variant/20 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="group bg-surface-container p-8 hover:bg-surface-container-high transition-all border-b-2 border-transparent hover:border-tertiary">
              <div className="mb-8">
                <span className="material-symbols-outlined text-tertiary text-4xl">inventory_2</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Order Picking</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Fast-paced individual item selection for e-commerce and high-velocity retail fulfillment.</p>
              <div className="font-label text-[0.625rem] text-tertiary uppercase tracking-widest group-hover:translate-x-2 transition-transform">System Ready →</div>
            </div>
            <div className="group bg-surface-container p-8 hover:bg-surface-container-high transition-all border-b-2 border-transparent hover:border-tertiary">
              <div className="mb-8">
                <span className="material-symbols-outlined text-tertiary text-4xl">precision_manufacturing</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Kit Picking</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Strategic grouping of related components for streamlined manufacturing assembly lines.</p>
              <div className="font-label text-[0.625rem] text-tertiary uppercase tracking-widest group-hover:translate-x-2 transition-transform">System Ready →</div>
            </div>
            <div className="group bg-surface-container p-8 hover:bg-surface-container-high transition-all border-b-2 border-transparent hover:border-tertiary">
              <div className="mb-8">
                <span className="material-symbols-outlined text-tertiary text-4xl">package_2</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Case Picking</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Efficient full-case handling and heavy-duty palletization for wholesale distribution.</p>
              <div className="font-label text-[0.625rem] text-tertiary uppercase tracking-widest group-hover:translate-x-2 transition-transform">System Ready →</div>
            </div>
            <div className="group bg-surface-container p-8 hover:bg-surface-container-high transition-all border-b-2 border-transparent hover:border-tertiary">
              <div className="mb-8">
                <span className="material-symbols-outlined text-tertiary text-4xl">conveyor_belt</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Line Side Replenishment</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Just-in-time delivery of essential materials directly to active manufacturing stations.</p>
              <div className="font-label text-[0.625rem] text-tertiary uppercase tracking-widest group-hover:translate-x-2 transition-transform">System Ready →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits: Bento Grid */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-lowest p-12 relative flex flex-col justify-end min-h-[400px]">
              <div className="absolute top-12 left-12">
                <span className="font-label text-tertiary text-[0.6875rem] uppercase tracking-widest">Efficiency Multiplier</span>
                <div className="font-display text-[8rem] font-bold text-on-surface leading-none -ml-2">4X</div>
              </div>
              <div className="relative z-10 max-w-sm">
                <h3 className="font-headline text-2xl font-bold mb-4">Unmatched Throughput</h3>
                <p className="text-on-surface-variant leading-relaxed">Our collaborative mobile robots eliminate walk-time, allowing pickers to focus purely on value-added tasks.</p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10">
                <span className="material-symbols-outlined text-[20rem]">speed</span>
              </div>
            </div>
            <div className="md:col-span-4 bg-tertiary text-on-tertiary p-12 flex flex-col justify-between">
              <span className="material-symbols-outlined text-5xl">verified_user</span>
              <div>
                <div className="font-display text-5xl font-bold mb-2">~0.0%</div>
                <h3 className="font-headline text-xl font-bold mb-2">Error Elimination</h3>
                <p className="text-on-tertiary/80 text-sm">Automated verification systems ensure 100% picking accuracy, virtually eliminating costly returns.</p>
              </div>
            </div>
            <div className="md:col-span-5 bg-surface-container-high p-12 border-l-4 border-primary">
              <div className="font-display text-4xl font-bold text-primary mb-4">40-60%</div>
              <h3 className="font-headline text-xl font-bold mb-2">Labor Cost Reduction</h3>
              <p className="text-on-surface-variant text-sm">Optimize your workforce by reallocating staff to complex tasks while robots handle repetitive logistics.</p>
            </div>
            <div className="md:col-span-7 bg-surface-container p-12 flex items-center gap-8">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">hub</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold mb-2 text-on-surface">Universal Integration</h3>
                <p className="text-on-surface-variant text-sm">Seamless connectivity with existing ERP/WMS systems via our LCCS proprietary platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Operational Flow */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">System Operational Flow</h2>
            <div className="w-12 h-1 bg-tertiary mx-auto"></div>
          </div>
          <div className="space-y-12">
            <div className="flex gap-12 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-surface-container-highest border border-outline-variant flex items-center justify-center font-display font-bold text-tertiary">01</div>
                <div className="w-px h-full bg-gradient-to-b from-outline-variant to-transparent mt-4"></div>
              </div>
              <div className="pb-12">
                <h4 className="font-label text-tertiary text-[0.6875rem] uppercase tracking-widest mb-2">Initiation</h4>
                <h3 className="font-headline text-2xl font-bold mb-3">WMS sends order</h3>
                <p className="text-on-surface-variant max-w-xl">Your existing Warehouse Management System pushes picking lists directly to our cloud interface via encrypted API.</p>
              </div>
            </div>
            <div className="flex gap-12 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-surface-container-highest border border-outline-variant flex items-center justify-center font-display font-bold text-tertiary">02</div>
                <div className="w-px h-full bg-gradient-to-b from-outline-variant to-transparent mt-4"></div>
              </div>
              <div className="pb-12">
                <h4 className="font-label text-tertiary text-[0.6875rem] uppercase tracking-widest mb-2">Orchestration</h4>
                <h3 className="font-headline text-2xl font-bold mb-3">LCCS dispatches robot</h3>
                <p className="text-on-surface-variant max-w-xl">The Logical Control &amp; Communication System (LCCS) calculates the most efficient route and assigns the optimal robot fleet.</p>
              </div>
            </div>
            <div className="flex gap-12 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-surface-container-highest border border-outline-variant flex items-center justify-center font-display font-bold text-tertiary">03</div>
                <div className="w-px h-full bg-gradient-to-b from-outline-variant to-transparent mt-4"></div>
              </div>
              <div className="pb-12">
                <h4 className="font-label text-tertiary text-[0.6875rem] uppercase tracking-widest mb-2">Execution</h4>
                <h3 className="font-headline text-2xl font-bold mb-3">Composite Mobile Robot navigates</h3>
                <p className="text-on-surface-variant max-w-xl">Equipped with LIDAR and AI-vision, robots navigate complex warehouse environments to pick and stow autonomously.</p>
              </div>
            </div>
            <div className="flex gap-12 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-tertiary flex items-center justify-center font-display font-bold text-on-tertiary">04</div>
              </div>
              <div>
                <h4 className="font-label text-tertiary text-[0.6875rem] uppercase tracking-widest mb-2">Completion</h4>
                <h3 className="font-headline text-2xl font-bold mb-3">Delivery to packing station</h3>
                <p className="text-on-surface-variant max-w-xl">Picked items are transported to designated outbound stations for final quality check and shipping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-primary">settings_input_component</span>
              <span className="font-display font-bold text-xl tracking-tighter">ERP CONNECT</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-primary">warehouse</span>
              <span className="font-display font-bold text-xl tracking-tighter">WMS SYNC</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-primary">factory</span>
              <span className="font-display font-bold text-xl tracking-tighter">MES CORE</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-primary">cloud_done</span>
              <span className="font-display font-bold text-xl tracking-tighter">LCCS PLATFORM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Equipment */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-12">Related Robotic Hardware</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low group overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  alt="Close up of a highly sophisticated industrial robot with multiple sensor modules and a precision gripper arm on a mobile base"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAapFMITi4_xKUaRpUTOi7qyhKwcrX1qLVxw16d_JR9meGaV1TrdMfmragvPdgqCJd3bjIEX9NUNymu9wKd6ZB4U-aQZxo5qrMdDbPxUq0dRf9cS6cAP9s5H4Dlw6WrzwPELUxYMtJ_IM8sD87QaBYzdRfojY4Dklws7I-BRc_6IrxdRGIyXbfAi-wmO2k_ZJL26nJKPgdGLhqz_5lgAZsa2uJpchQn1E9MWck1aACW0A8mmpNH3vCo9xDBXN-MCiMLVKCJA_5N9cI"
                />
                <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 font-label text-[0.625rem] font-bold uppercase tracking-wider">Top Seller</div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-xl font-bold mb-2">Composite Mobile Robot</h3>
                <p className="text-on-surface-variant text-sm mb-6">Versatile robot combining a mobile base with a high-precision cobot arm.</p>
                <a href="/products/composite-mobile-robot" className="block w-full py-3 border border-outline-variant text-center text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-colors">View Details</a>
              </div>
            </div>
            <div className="bg-surface-container-low group overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  alt="Industrial lifting AGV robot lifting a heavy pallet in a dark high-tech warehouse environment with cyan glowing indicators"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALIGGnyGApX_RkLjX_y84b_JUaGZDrSq5izZpoU6WqHTOsFJ5pE_QM3Q74_occG2Bjs038R90KmkVCyoJ6Zou_YnKnPV3w0Z1PMHsDO9fI59epJIMUY2b9Px14QL1HJeEBy_p1WPTuDsKis4S2bY8ytlugApWtR4fmXCGaAABHE-yPUFY1b5YA3ZquVFSLIw0MLjzSgRE_jd-4HsL9eSxIqjKruGq76OBKxa6FwCjlLK_D0GgO9ZrOM9ouPxpMD67BS-uh-qx9wU"
                />
              </div>
              <div className="p-8">
                <h3 className="font-headline text-xl font-bold mb-2">Lifting AGV</h3>
                <p className="text-on-surface-variant text-sm mb-6">Heavy-duty pallet transport with precision lifting for vertical racking storage.</p>
                <a href="/products/lifting-agv" className="block w-full py-3 border border-outline-variant text-center text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-colors">View Details</a>
              </div>
            </div>
            <div className="bg-surface-container-low group overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  alt="Sleek silver autonomous storage robot moving through aisles of a dense warehouse facility under cool blue lighting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd4Qi1pJM5XuaRR-gz_XX_tI3DRnw7mB0QZCPpQd54ef60s4fjQeOnEQW3abIQ7gPyvMgKDtPUqE1EgrCsLB7YrUoo2p5980r87pZCciiZ8OKHYpAMitswydkeUr83L70kkz_-xze652XN8CmZZ_dN02P_jrolWWvdaxmZeMpWdDMP1Z9zCUbkGhbSID2YTJ783FaLmLb_TEfiy_1mPFg_KRoM_JkzaJItXCpLStdYT8mskFHSqqS_xLR6rJqCQIWa_K0U2pxmoig"
                />
              </div>
              <div className="p-8">
                <h3 className="font-headline text-xl font-bold mb-2">Storage AGV</h3>
                <p className="text-on-surface-variant text-sm mb-6">Compact, high-speed mobile units for rapid shelf retrieval and stowing.</p>
                <a href="/products/storage-agv" className="block w-full py-3 border border-outline-variant text-center text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-colors">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="bg-surface-container-high relative overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img
                alt="Engineers monitoring a robotic fleet in a clean high-tech electronics manufacturing facility with futuristic dashboard displays"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgbHHjleglOxtjaEvlN59w3SLlV68d4degiHQAw0CMue8SkxGITLt8efSFzidaiozwS6_wS26NqKMGLHDdTLYCHDGxUas8SoLwnCon_fF8yHliOAfebD2ZUrsFPYlThV5ylJrjKdtJvR-7Rs-h4sNSUcYhpD0SpNbkQDJbPXM9N3qkvSAWorF786QZIBvRWJjxJ4sHd5xExwihHcui04M4SsZBx4cwz62fZPpXg6gKe4PzRMyoneEl-SNfCDNHxiwpQZRhQT7Gtwo"
              />
              <div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply"></div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 relative">
              <div className="mb-10">
                <span className="font-label text-tertiary text-[0.6875rem] uppercase tracking-widest font-bold">Featured Case Study</span>
                <h2 className="font-display text-4xl font-bold mt-4 mb-6">Global Electronics Manufacturer Transformation</h2>
                <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                  Transitioned a manual 24/7 picking floor to a fully autonomous &quot;lights-out&quot; operation, overcoming severe labor shortages and accuracy issues.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <div className="font-display text-3xl font-bold text-on-surface">-20</div>
                  <div className="font-label text-[0.625rem] text-on-surface-variant uppercase tracking-wider">Staff Reallocated</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-on-surface">1 Year</div>
                  <div className="font-label text-[0.625rem] text-on-surface-variant uppercase tracking-wider">Full ROI Achieved</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-tertiary">24/7</div>
                  <div className="font-label text-[0.625rem] text-on-surface-variant uppercase tracking-wider">Continuous Ops</div>
                </div>
              </div>
              <button className="mt-12 flex items-center gap-4 group">
                <span className="font-label text-[0.6875rem] uppercase tracking-widest font-bold border-b-2 border-tertiary pb-1">Read Full Report</span>
                <span className="material-symbols-outlined text-tertiary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
            <div className="border-r border-outline-variant"></div>
          </div>
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to Automate?</h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">
            Our technical engineers are standing by to simulate your warehouse environment and design a custom picking solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton />
          </div>
        </div>
      </section>
    </main>
  );
}
