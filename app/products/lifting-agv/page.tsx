import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { productSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function LiftingAgvPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[productSchema({ name: "Lifting AGV RL-LT1000", description: "Compact lifting AGV with 600–1000kg payload for high-density warehouse environments.", model: "RL-LT1000", url: "/products/lifting-agv", category: "Lifting AGV" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Lifting AGV", url: "/products/lifting-agv" }])]} />
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40" alt="industrial autonomous lifting robot operating in a dark modern high-tech warehouse facility with dramatic neon lighting and metallic surfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuPJUOJxUYemkri3n-2lGugMtnSoDYmYtgMY-3ionlccop1p9AGVq2ryIB0lAsCVlvf9z4CL7whQ_Xl_ocSzWOaApW_sG9EwzHGOluMWZ83FY0gqDhuhglx7jYizllvfW90VPLc60D3LhTWMF6brf13GrOyiYUlv0Y8vlG4O7FJYwvAF5neVBHAvd_CRoa5OPAtm8otjt4v1oXvNIf_KaCu6fXo20O-mVbmUM34GAPLS0X4W_U2cos1820_O4jHz5AKqzq9ZmENpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block font-label uppercase tracking-[0.2em] text-tertiary bg-tertiary/10 px-3 py-1 text-sm">Advanced Automation Series</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-tight">
              Lifting AGV — 24/7 <span className="text-primary">Autonomous</span> Shelf &amp; Tote Transport
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Redefining warehouse throughput with high-precision lifting technology and multi-mode SLAM navigation for seamless factory floor integration.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <CTAButton />
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="bg-surface-container-low/60 backdrop-blur-xl p-8 rounded-sm border-l-4 border-tertiary shadow-2xl">
              <div className="space-y-6">
                <div>
                  <div className="font-label text-[0.6rem] uppercase tracking-widest text-tertiary mb-1">Operational State</div>
                  <div className="font-display text-4xl font-bold text-on-surface">NOMINAL</div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1">Navigation</div>
                    <div className="font-body font-semibold">LIDAR SLAM</div>
                  </div>
                  <div>
                    <div className="font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant mb-1">Efficiency</div>
                    <div className="font-body font-semibold text-tertiary">99.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 bg-surface-container-low transition-all hover:bg-surface-container-high group">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">update</span>
              <h3 className="font-headline text-xl font-medium mb-4">24/7 Unmanned Operation</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Continuous workflow with automated opportunity charging and mission queuing.</p>
            </div>
            <div className="p-8 bg-surface-container-low transition-all hover:bg-surface-container-high group">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">shield</span>
              <h3 className="font-headline text-xl font-medium mb-4">360° Laser Protection</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Multi-layered safety sensors ensuring collision-free movement in dynamic environments.</p>
            </div>
            <div className="p-8 bg-surface-container-low transition-all hover:bg-surface-container-high group">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">hub</span>
              <h3 className="font-headline text-xl font-medium mb-4">Integrated LCCS Platform</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Native connectivity with MES and WMS systems for enterprise-grade control.</p>
            </div>
            <div className="p-8 bg-surface-container-low transition-all hover:bg-surface-container-high group">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">explore</span>
              <h3 className="font-headline text-xl font-medium mb-4">Multi-Mode Navigation</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Versatile SLAM, QR Code, and Reflector navigation modes for any facility layout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specs Table */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <div className="font-label text-tertiary uppercase tracking-widest mb-4 text-sm">Technical Performance</div>
            <h2 className="font-display text-4xl font-bold">Engineering Specifications</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant">
                  <th className="p-6 font-label uppercase text-[0.7rem] tracking-widest">Model Identifier</th>
                  <th className="p-6 font-label uppercase text-[0.7rem] tracking-widest">Load Capacity</th>
                  <th className="p-6 font-label uppercase text-[0.7rem] tracking-widest">Max Speed</th>
                  <th className="p-6 font-label uppercase text-[0.7rem] tracking-widest">Lift Height</th>
                  <th className="p-6 font-label uppercase text-[0.7rem] tracking-widest">Navigation Type</th>
                  <th className="p-6 font-label uppercase text-[0.7rem] tracking-widest">Accuracy</th>
                  <th className="p-6 font-label uppercase text-[0.7rem] tracking-widest">Endurance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="p-6 font-display text-lg font-bold">RL-LIFT-600</td>
                  <td className="p-6 font-body text-on-surface">600 kg</td>
                  <td className="p-6 font-body text-on-surface">1.5 m/s</td>
                  <td className="p-6 font-body text-on-surface">60 mm</td>
                  <td className="p-6 font-body text-on-surface">Laser SLAM + QR</td>
                  <td className="p-6 font-body text-tertiary">±10 mm</td>
                  <td className="p-6 font-body text-on-surface">8.0 h</td>
                </tr>
                <tr className="hover:bg-surface-container-high transition-colors bg-surface-container-lowest/30">
                  <td className="p-6 font-display text-lg font-bold">RL-LIFT-1000</td>
                  <td className="p-6 font-body text-on-surface">1000 kg</td>
                  <td className="p-6 font-body text-on-surface">1.5 m/s</td>
                  <td className="p-6 font-body text-on-surface">60 mm</td>
                  <td className="p-6 font-body text-on-surface">Laser SLAM + QR</td>
                  <td className="p-6 font-body text-tertiary">±10 mm</td>
                  <td className="p-6 font-body text-on-surface">8.0 h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="font-label text-tertiary uppercase tracking-widest mb-4 text-sm">Deployment Scenarios</div>
              <h2 className="font-display text-4xl font-bold">Industrial Applications</h2>
            </div>
            <div className="hidden md:block text-right max-w-xs text-sm text-on-surface-variant">
              Our lifting solutions are engineered for high-density environments where space and precision are critical.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 group relative overflow-hidden h-96">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="wide shot of a clean automated warehouse with multiple robotic units moving shelves and totes under bright industrial lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx0MSfYNpdW-DaUpw1wfMflGIOT9r2iwuWNga7wS1hP1AXDEG9mhsKqr710qdSg_67mdizodE0qSjsS_i1b3SZaJuOm4d6gBaTVkndRDADN-09rXi9cNa_RTLckfoqOO4oyVc3JbxxokNZBtZKx7LGL9EQL9_Km9ln280UMsJipGTz9tlX7oTlliIfn5ox0x_5Se3Otssams2D6l66NW5CrOtTsrBEDcrcApxmx9xuA02vDcGkRNyTwWfWYzY03w55dcZjhjn7oXM" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-2xl font-bold mb-2">E-commerce Fulfillment Centers</h3>
                <p className="font-body text-sm text-on-surface-variant max-w-md">High-frequency shelf transport for picking stations and order consolidation.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden h-96">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="close-up of industrial machinery and robotic arms in a manufacturing facility with cool blue atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEtuS0Yb0fCNLksgm1KUx86N2xUhlp4rIhdYppAd6A-fS8DJJSdi-rXmVXAwWxTaz1c8t5O4weTlqfdJO9BPRkTBdi0OkA0PQLsVrCqokTX5pX6eFYIqpErFUcjn0PLA2v0frZofSdK6TVzCnAmdUJoHvgu3oHr1Ctot290jIbZsuDi_C4Ear7VzPnSAuCurJL_yCGqb9vRkE6Gh88huJ-9x2oLXn3AzvWQmmykymqhwEkdJPEmO3R55c6AzhPXgYympFpy5OkgdU" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-2xl font-bold mb-2">Manufacturing WIP</h3>
                <p className="font-body text-sm text-on-surface-variant">Automated Work-In-Progress transport between assembly line modules.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden h-96">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="automated storage and retrieval system with yellow totes stacked on high industrial shelving units" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa2IVe0OYY4_Y4A3WX4o_b117xibuL3e_L5enA1FazB2fAxnEALXDhrH_eE9Yfslj7SDNJghJS5XFEm2a1MpOZrZqUMd5KkC1aziJQErGUrnjnSPF_QW79IVFjigExo6ga6HMqBcZGGDcOVoAxQqXvPpe1_sb4CJqEfYABrDT1NXWvWirI4JSXoaOWMrDfPtP6H0TgJo_OG0FhHKQZd5mmaQseGP2zC0g8qbp2b9Y06uP4vZtQ49jUwPX6NgDKK1T0TUmRKqd5hvI" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-2xl font-bold mb-2">Tote &amp; Bin Handling</h3>
                <p className="font-body text-sm text-on-surface-variant">Precision transport of standardized totes in high-density storage zones.</p>
              </div>
            </div>
            <div className="md:col-span-2 group relative overflow-hidden h-96">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="interior of a massive automated warehouse with robotic cranes and AGVs operating together in a synchronized system" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgsdU9U43xX6Xx_XhwJppeVnPvNNjZTZK94hh0HlNl02MtAf32zkDeRk5siI4LN7RomfQekoi5vBgWSW6aXDSuMnd5MYBSYQ5pIJUhDqPH5lD8tnTSRn4I65Vr7lYqS6FsmiMth3MKdiaM8qc4WFnfTdEvhzzJd-nuvLKvBYugwlFNzDKwesbi-drW8QMNLT_ES-Qhfl6PULsJyLSVfbXbs9lbP8RYVPxEUo59hicRIvIAJHI47Jy7P4Sj6gBReW-2H0wbnfU0VLY" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-2xl font-bold mb-2">ASRS Integration</h3>
                <p className="font-body text-sm text-on-surface-variant max-w-md">Seamless handover between automated storage and retrieval systems and horizontal transport fleets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Visual List */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-label text-tertiary uppercase tracking-widest mb-4 text-sm">Core Technology</div>
            <h2 className="font-display text-4xl font-bold mb-12">System Intelligence</h2>
            <ul className="space-y-8">
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-surface-container-high border-l-2 border-tertiary">
                  <span className="material-symbols-outlined text-tertiary">navigation</span>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-lg mb-1 group-hover:text-tertiary transition-colors">Multi-mode Navigation</h4>
                  <p className="font-body text-sm text-on-surface-variant">Switch dynamically between SLAM for flexibility and QR for millimeter precision.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-surface-container-high border-l-2 border-tertiary">
                  <span className="material-symbols-outlined text-tertiary">radar</span>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-lg mb-1 group-hover:text-tertiary transition-colors">360° Safety Laser</h4>
                  <p className="font-body text-sm text-on-surface-variant">Continuous environmental scanning for obstacle detection and dynamic path planning.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-surface-container-high border-l-2 border-tertiary">
                  <span className="material-symbols-outlined text-tertiary">settings_input_component</span>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-lg mb-1 group-hover:text-tertiary transition-colors">LCCS Fleet Management</h4>
                  <p className="font-body text-sm text-on-surface-variant">Real-time scheduling and traffic control for fleets of 100+ robots.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-surface-container-high border-l-2 border-tertiary">
                  <span className="material-symbols-outlined text-tertiary">battery_charging_full</span>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-lg mb-1 group-hover:text-tertiary transition-colors">Auto Charging</h4>
                  <p className="font-body text-sm text-on-surface-variant">Smart mission management returns units to charging docks at optimal low-activity windows.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square bg-surface-container-high p-4 rounded-sm border border-outline-variant/10">
              <div className="w-full h-full bg-surface-container-low flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 border-[20px] border-surface opacity-10"></div>
                <div className="z-10 text-center">
                  <div className="font-display text-[8rem] font-black text-white/5 select-none leading-none">TECH</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10rem] text-primary/20">precision_manufacturing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 p-6 bg-tertiary text-on-tertiary font-display font-bold">
              <div className="text-xs uppercase tracking-widest opacity-80">Engineered by</div>
              <div className="text-xl">RobotLyne Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl font-bold">System Architecture</h2>
            <p className="font-body text-on-surface-variant mt-4">Enterprise connectivity ecosystem for seamless data flow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-1 bg-surface-container-low p-8 text-center border-b-2 border-primary">
              <div className="font-label text-[0.6rem] uppercase text-on-surface-variant mb-2">Source Control</div>
              <div className="font-display font-bold">MES</div>
            </div>
            <div className="md:col-span-1 flex justify-center opacity-20">
              <span className="material-symbols-outlined text-4xl">arrow_forward</span>
            </div>
            <div className="md:col-span-1 bg-surface-container-high p-10 text-center border-b-4 border-tertiary shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tertiary text-on-tertiary px-3 py-1 text-[0.6rem] font-bold uppercase">Orchestrator</div>
              <div className="font-label text-[0.6rem] uppercase text-on-surface-variant mb-2">Control Layer</div>
              <div className="font-display text-xl font-bold">LCCS</div>
            </div>
            <div className="md:col-span-1 flex justify-center opacity-20">
              <span className="material-symbols-outlined text-4xl">arrow_forward</span>
            </div>
            <div className="md:col-span-1 bg-surface-container-low p-8 text-center border-b-2 border-primary">
              <div className="font-label text-[0.6rem] uppercase text-on-surface-variant mb-2">Storage Logic</div>
              <div className="font-display font-bold">WMS</div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-px h-16 bg-gradient-to-b from-tertiary to-transparent"></div>
            <div className="bg-surface-container-high px-8 py-6 border border-tertiary/30 rounded-sm">
              <div className="font-label text-[0.7rem] uppercase tracking-widest text-tertiary text-center mb-2">Fleet Execution</div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined">smart_toy</span>
                <span className="material-symbols-outlined">smart_toy</span>
                <span className="material-symbols-outlined">smart_toy</span>
                <span className="material-symbols-outlined">smart_toy</span>
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="bg-gradient-to-br from-surface-container-high to-surface p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-display text-5xl font-bold mb-6 tracking-tight">Ready to Automate Your Intra-logistics?</h2>
              <p className="font-body text-lg text-on-surface-variant mb-12">Our engineering team provides comprehensive facility analysis to determine the optimal fleet configuration for your specific volume requirements.</p>
              <div className="flex flex-wrap gap-4">
                <CTAButton />
                <button className="bg-surface-bright text-on-surface font-bold px-8 py-4 rounded-sm transition-all hover:bg-surface-container-highest">SCHEDULE A DEMO</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
