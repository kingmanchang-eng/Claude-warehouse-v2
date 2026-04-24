import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { productSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function AgvRollerPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[productSchema({ name: "AGV Roller RL-RC200", description: "Conveyor-linked roller AGV for seamless integration with production line logistics.", model: "RL-RC200", url: "/products/agv-roller", category: "AGV Roller" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "AGV Roller", url: "/products/agv-roller" }])]} />
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 opacity-40">
          <img className="w-full h-full object-cover" alt="Modern dark industrial factory floor with blue atmospheric lighting, metallic surfaces, and blurred robotic machinery in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB16VXAftMFB0axsbcMoTYdnr2CHVcKmJZnz8apgrmwRmL5CDuM2gfTk8hsOFwOyMfuFLH2yl_dbF0vySNecn7H0x5P0TwTPNrIHbMbcWuDTDBWd9hoEdek4sevS3Tqq4-FyRj6TtgGGa1UHdVqCxNJmbndBz1PSadurv3ZKujxLugGFVUd8vDSGqBn0PBTumWEcivze5uppcqXdnpLzq0V7w-NNnPqakDfa-4a4LXY0lj4Lmcmg1UG6YZC3pShcZUtuDnOdyHw3Oo" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-tertiary-container text-tertiary font-label text-[10px] tracking-[0.2em] uppercase rounded-sm border border-tertiary/20">Precision Logistics</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tighter text-on-surface">
              AGV Roller — <span className="text-tertiary">Seamless</span> Conveyor Integration
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl font-light leading-relaxed">
              Redefining production line efficiency with autonomous docking and high-capacity roller transport. Eliminate fixed tracks and manual handovers.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-sm font-label font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all">Configure Unit</button>
              <button className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded-sm font-label font-bold uppercase text-xs tracking-widest hover:bg-surface-container-high transition-all">Download Specs</button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-tertiary/10 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <img className="relative z-10 w-full rounded-lg shadow-2xl border border-outline-variant/10" alt="High-tech autonomous mobile robot with a motorized roller conveyor top in a clean industrial facility, navy blue metallic finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjQ0cABTYxIHW8J-z-lsE14xB8htS_yCuKFSjlBWZsoNmg9NVYx73gLvRIT0uQq6LStSpA9K9uic-ntSZY9MtiIGc1Nrja5GwCj6cyzVGkFp46Wg-QgzzUYvhnb8zium0RkUHGuVbQ2fWpQTj03FHQ-tY-e6rGAS4JcpIBQXxWiMBfy3G3AetuC3wnAqLwTCJ5uwBcESxvBrkVe9GibkzvAZTfzRvB_CBxpdRenQ_oQZBmIQs_PVJ5aBWnxYFQt4O0M1oNVvjI4i4" />
          </div>
        </div>
      </section>

      {/* Product Overview (Asymmetric) */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/5">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <h2 className="font-display text-3xl font-medium text-on-surface leading-tight">Advanced <br /><span className="text-tertiary">Kinetic Intelligence</span></h2>
              <div className="mt-8 h-1 w-24 bg-tertiary"></div>
            </div>
            <div className="md:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-tertiary text-4xl">route</span>
                <h3 className="font-display text-xl font-semibold">No Fixed Tracks</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Full spatial freedom with dynamic path planning. RobotLyne units navigate complex environments without floor magnets or wires.</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-tertiary text-4xl">sync_alt</span>
                <h3 className="font-display text-xl font-semibold">Seamless Docking</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Precision alignment sensors allow the AGV to dock with existing conveyor systems with ±5mm accuracy for automated handovers.</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-tertiary text-4xl">explore</span>
                <h3 className="font-display text-xl font-semibold">Hybrid Navigation</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Dual-layer Laser SLAM and QR Code navigation ensure continuous operation even in dynamically changing warehouse environments.</p>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-tertiary text-4xl">precision_manufacturing</span>
                <h3 className="font-display text-xl font-semibold">Autonomous Planning</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Real-time obstacle avoidance and rerouting logic minimize downtime in shared human-robot workspaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specs Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tighter">Technical Specifications</h2>
              <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mt-2">V2.4 Control Logic Architecture</p>
            </div>
            <div className="hidden md:block h-px flex-grow mx-12 bg-outline-variant/20"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/10 border border-outline-variant/10">
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[180px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Max Load</span>
              <div className="font-display text-4xl font-bold">200<span className="text-lg font-normal ml-1">kg</span></div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[180px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Top Speed</span>
              <div className="font-display text-4xl font-bold">1.5<span className="text-lg font-normal ml-1">m/s</span></div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[180px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Docking Accuracy</span>
              <div className="font-display text-4xl font-bold">±5<span className="text-lg font-normal ml-1">mm</span></div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[180px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Battery Life</span>
              <div className="font-display text-4xl font-bold">8<span className="text-lg font-normal ml-1">hrs</span></div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[180px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Obstacle Radar</span>
              <div className="font-display text-4xl font-bold">x2<span className="text-lg font-normal ml-1">Lidar</span></div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[180px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Visual Sensor</span>
              <div className="font-display text-4xl font-bold">x1<span className="text-lg font-normal ml-1">Camera</span></div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[180px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Nav Mode</span>
              <div className="font-display text-2xl font-bold leading-tight">SLAM + <br />QR Code</div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[180px]">
              <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Charging</span>
              <div className="font-display text-2xl font-bold leading-tight">Auto / <br />Manual</div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications (Bento Grid) */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Deployment Scenarios</h2>
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            <div className="md:col-span-2 bg-surface-container-high relative overflow-hidden rounded-sm group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Massive automated warehouse with miles of conveyor systems and robotic arms, blue and steel lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxRWg5YNEsuQKjnS4c6qoz0_zDyfhG_yLnkySTxGXz1C2m2Wk8eWA-j7Fz3Pmv60Xx_S-cfR_dchV_lc0fWZWEPasLZ7zUqg_PMcEGtstnS83eBpIYKCFLt-MPrNu5XPfXG0IYo1o4j7Mof5DVlm4qm57XSO0dswlMQiczQhE3B4JxnLy4ziaa5O00HQpINxS3HyqpAHX5dLF7235FHElIUX6UP5lVYvlEEhAMhPOVJIFfxb8QDq6Yldf9k6atRG62h9t8B9yW6Rw" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <h4 className="font-display text-xl font-bold mb-2">Conveyor System Integration</h4>
                <p className="text-on-surface-variant text-sm max-w-md">Seamless bridge between disconnected production lines and automated storage systems.</p>
              </div>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col justify-end relative overflow-hidden rounded-sm border border-outline-variant/10">
              <div className="absolute top-8 left-8 p-3 bg-tertiary/20 rounded-full border border-tertiary/40">
                <span className="material-symbols-outlined text-tertiary">inventory_2</span>
              </div>
              <h4 className="font-display text-xl font-bold mb-2">Carton &amp; Box Transport</h4>
              <p className="text-on-surface-variant text-sm">High-speed movement of packaged goods across logistics centers.</p>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col justify-end border border-outline-variant/10 rounded-sm">
              <h4 className="font-display text-xl font-bold mb-2">Production Line Feeding</h4>
              <p className="text-on-surface-variant text-sm">Automated raw material delivery to precise assembly workstations.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container-high relative overflow-hidden rounded-sm group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" alt="Logistics cross-docking terminal with multiple loading bays and high-capacity freight handling equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfiFhj72ntAHJ8ON_lGWrbA7fwPQi0KpmXGaXUGpjKgyosskk7TFijX--z37l-Arb0z5TgAU4IE6D1S0zv5wSfXfoKzl7e93X4X9hDMwpxKxXevz9Q7gqHw5uUlWWla-sruRF0wPBenLHVh6FQ2xr0NL3tF8MozhIurJizOLh-sxFXKlr20U_0TBTR-Ou3J8UKdQQ1p--_iBRJ00mQXcZTHzhL3WlUKk-xA4x8U4DDqn8yEz64mfd_yoiJQn9mJvHq4mA34eRSBC8" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <h4 className="font-display text-xl font-bold mb-2">Cross-Docking &amp; Packaging</h4>
                <p className="text-on-surface-variant text-sm max-w-md">Rapid sorting and redirection of goods for outbound shipping efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features List */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl font-bold mb-8">System Capabilities</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block text-on-surface">No fixed track needed</span>
                  <span className="text-sm text-on-surface-variant">Lidar-based environment mapping requires zero floor modifications.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block text-on-surface">Auto conveyor docking</span>
                  <span className="text-sm text-on-surface-variant">Intelligent infrared alignment for precision load transfer.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block text-on-surface">Smooth roller transfer</span>
                  <span className="text-sm text-on-surface-variant">Variable speed motorized rollers ensure vibration-free transport.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block text-on-surface">Bidirectional travel</span>
                  <span className="text-sm text-on-surface-variant">Operate in narrow aisles with forward, reverse, and lateral motion.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <span className="font-bold block text-on-surface">Multi-robot coordination</span>
                  <span className="text-sm text-on-surface-variant">Fleet management system prevents congestion and optimizes routes.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 bg-surface-container-high rounded-lg p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 blur-3xl"></div>
            <img className="w-full h-auto rounded shadow-xl opacity-80 border border-outline-variant/20" alt="Technical schematic diagram of an AGV unit overlayed on a dark metallic surface with blue glowing highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmcG_XnrqJqAZzYs42oAKO_sSAd6KTeRteNDcXWsNPX_EwtcFc3RMv_kna0o7DtNTPWN0_IJVwGVs0bYhOrVhK6UHDjX-WN9A9O38VBsde1u0qQbuzYJik1EBJNZc6LrY9UulnYnR9eCdJ7GoMVgh6yEf43EG0SOjvqCVUzU2lfENWm5hv3gofRrM8odZNLJA86J-k7E6ABSAEjnEq9ZstQfQKsCQkss0fSOUYOO582fa8w54GYbf4k9kpT4aKukLBXlj-CjNOCCk" />
          </div>
        </div>
      </section>

      {/* System Integration Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8 text-center max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-4">Enterprise Ecosystem Ready</h2>
          <p className="text-on-surface-variant mb-16">The AGV Roller integrates directly with your existing software stack for a unified warehouse control experience.</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 items-center opacity-70">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border border-outline-variant/30 font-display font-bold text-xl">ERP</div>
              <span className="font-label text-[10px] tracking-widest uppercase">Enterprise Resource</span>
            </div>
            <div className="w-12 h-px bg-outline-variant/30 hidden md:block"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-tertiary text-tertiary font-display font-bold text-xl bg-tertiary/5">WCS</div>
              <span className="font-label text-[10px] tracking-widest uppercase">Warehouse Control</span>
            </div>
            <div className="w-12 h-px bg-outline-variant/30 hidden md:block"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border border-outline-variant/30 font-display font-bold text-xl">LCCS</div>
              <span className="font-label text-[10px] tracking-widest uppercase">Line Control</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent"></div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">Scale Your <span className="text-tertiary">Throughput</span> Today</h2>
            <p className="text-on-surface-variant text-lg">Speak with our engineers to design a custom AGV deployment plan tailored to your facility&apos;s unique conveyor architecture.</p>
            <div className="pt-8">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
