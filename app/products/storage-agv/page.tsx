import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { productSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function StorageAgvPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[productSchema({ name: "Storage AGV RL-SD005", description: "High-density automated storage shuttle for dense rack systems.", model: "RL-SD005", url: "/products/storage-agv", category: "Storage AGV" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Storage AGV", url: "/products/storage-agv" }])]} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Modern dark automated warehouse with sleek industrial storage robots moving between high-density shelving units under dramatic cool blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-zDu5Sr3L_W3Xq3rwsu15expY6f_Yz3HGyGOxdupL4oQG6-1f_i78m0x5E5VflAzCgguEs3euotZjBXfu_Kzp49FgiCFMht25GlvuWUlYIEb2oUJ0Rtp2uBijPsRq7pnN_M0xwZDIwYicSgVu2MXuCTJTorTLjsXl0hQFVuHbgQpFrwmB7fJm9gipCKHP3yAhvnitsHqw-HyIXiUtXRJfou2UPbAEcIpKK6r_jYA-eqSJMD3ahMO3PqZf6XsCJ7mbuJbzA075jg" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-8 w-full grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8">
            <span className="font-label text-tertiary text-xs uppercase tracking-[0.2em] mb-4 block">Product Series: SL-2000</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-on-surface mb-8">
              Storage AGV — <br />
              <span className="text-tertiary">High-Density</span> <br />
              Automated Storage.
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Engineered for precision handling in ultra-dense warehousing environments. The SL-2000 integrates seamlessly with existing infrastructure to maximize throughput and space utilization.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary font-bold px-10 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all">Explore Specs</button>
              <button className="border border-outline-variant/30 text-on-surface font-bold px-10 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-surface-container-high transition-all">Watch Field Test</button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview: Tonal Layering */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-tertiary-container text-tertiary font-label text-[10px] tracking-widest uppercase">System Overview</div>
            <h2 className="font-headline text-4xl font-medium leading-tight">Advanced Hybrid Navigation &amp; Dual-Unloading Logic</h2>
            <p className="font-body text-on-surface-variant leading-relaxed text-lg">
              Seamlessly integrates with racks, production lines and sorting stations. Our proprietary sensor fusion technology combines Laser SLAM with high-precision QR Code navigation for unwavering reliability.
            </p>
            <div className="grid grid-cols-2 gap-8 border-l-2 border-surface-container-highest pl-8">
              <div>
                <div className="font-display text-3xl font-bold text-primary">±5mm</div>
                <div className="font-label text-[10px] uppercase text-outline tracking-widest mt-1">Docking Accuracy</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">360°</div>
                <div className="font-label text-[10px] uppercase text-outline tracking-widest mt-1">Obstacle Detection</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video bg-surface-container-highest overflow-hidden">
            <img className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105" alt="Extreme close-up of industrial robot sensors and metallic chassis highlighting precision engineering and high-tech components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCshm80dIj6Sc3CjHTrS-N_g4tJmfnbtBmAugMGmeOtZc5D4TWbZjbY3zxoI6X0GnCP4pCqyZUpVJEmh9Gd1UP3cifk_4SQvgUdnvOKPc6U-uXRrJlLf4P1YEUkBpe0mlS0UyR7x-_iP1E2f1O9AlaeEgntfvXQoDp6W7xvo1MSIJFmH2T6-Hb49m1HMxXHVJD8TyTmbYR7JIvx-vjIujj97cSyJgeDYizyHda0yKET_NXtz5D91pOWggTnzt5n6-B1SMe72i5ypXU" />
            <div className="absolute bottom-4 left-4 industrial-glass p-4 rounded-sm">
              <span className="font-label text-tertiary text-[10px] block mb-1">REAL-TIME DATA FEED</span>
              <span className="font-display text-lg font-bold text-white uppercase tracking-tighter italic">Lidar_Scan_Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specs: Bento Grid */}
      <section className="py-24 px-8 bg-surface">
        <h2 className="font-headline text-3xl mb-16 text-center lg:text-left">Technical Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          <div className="col-span-1 md:col-span-2 row-span-2 bg-surface-container-low p-8 flex flex-col justify-between group overflow-hidden">
            <span className="material-symbols-outlined text-tertiary text-4xl">navigation</span>
            <div>
              <h3 className="font-headline text-xl mb-2 text-primary">Hybrid Navigation</h3>
              <p className="font-body text-sm text-on-surface-variant opacity-70">Dual-mode Laser SLAM + QR Code matrix for environment mapping and pinpoint station arrival.</p>
            </div>
          </div>
          <div className="bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors cursor-default">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-tertiary">precision_manufacturing</span>
              <span className="font-label text-[10px] text-outline">ST-01</span>
            </div>
            <div className="font-headline text-lg">±5mm Accuracy</div>
          </div>
          <div className="bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors cursor-default">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-tertiary">swap_horiz</span>
              <span className="font-label text-[10px] text-outline">MECH-D</span>
            </div>
            <div className="font-headline text-lg">Dual-Side Unloading</div>
          </div>
          <div className="bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors cursor-default">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-tertiary">security</span>
              <span className="font-label text-[10px] text-outline">OS-SEC</span>
            </div>
            <div className="font-headline text-lg">Dynamic Obstacle detection</div>
          </div>
          <div className="bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors cursor-default">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-tertiary">battery_charging_full</span>
              <span className="font-label text-[10px] text-outline">PWR-M</span>
            </div>
            <div className="font-headline text-lg">Auto Charging</div>
          </div>
          <div className="col-span-1 md:col-span-2 bg-surface-container-low p-8 flex items-center gap-6">
            <div className="p-4 bg-tertiary/10 rounded-sm">
              <span className="material-symbols-outlined text-tertiary text-3xl">hub</span>
            </div>
            <div>
              <h3 className="font-headline text-lg text-on-surface">LCCS Integration</h3>
              <p className="font-body text-xs text-on-surface-variant">Full compatibility with the RobotLyne Central Control System for fleet-wide coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications: High-End Asymmetric Layout */}
      <section className="py-24 px-8 bg-surface-container-lowest overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="font-display text-6xl font-bold tracking-tighter leading-none mb-8">Operational Environments</h2>
            <p className="font-body text-on-surface-variant mb-12">The SL-2000 is engineered to excel in the most demanding vertical sectors, ensuring high-density storage is never compromised by operational lag.</p>
            <div className="space-y-4">
              <div className="p-6 bg-surface-container transition-all hover:translate-x-2 border-l-4 border-tertiary/50">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">warehouse</span>
                  <span className="font-headline text-lg">High-Density ASRS</span>
                </div>
              </div>
              <div className="p-6 bg-surface transition-all hover:translate-x-2">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">ac_unit</span>
                  <span className="font-headline text-lg opacity-70">Cold Storage</span>
                </div>
              </div>
              <div className="p-6 bg-surface transition-all hover:translate-x-2">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">medical_services</span>
                  <span className="font-headline text-lg opacity-70">Pharmaceutical</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" alt="Industrial cooling warehouse with automated machinery and storage units for pharmaceutical products in clinical white and blue light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaQRzVQ31xOAdiilYqPvCNBWTqKgyQG0NlTeDfgd4k5lSKQbXN6F-QbOeGcHiz7CIz_hFoa4oX9rp1-zrhua4PE117w4NeCYmOv3WJ8V53roFb_W7WBg_8UOT6wRXgES7_EdRTPKLkxDu3bxGSe83Yktbs-tiU0D3D-mAsalYxP1xGsULzlaFXZ7ju1oS67prpfYfND52FiOspGL0gv-Bwe5lYaz1HBf8W6EvzU74JAEJjgffaIIfQDsrWXuSGz_1axGdWsFG8tIw" />
            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm mt-12" alt="Macro photo of electronics manufacturing parts storage with automated picking robots and precise inventory management" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeFw3Xi4byeA17hY8P3ocQXmsyOyMM9ZNkf2Sd4ZK_hvMDJt2iDxWXhk0y3AkEMpvUaQgNyCVIsz6QG-kWfJDkgesSpXY-tbBCTHhcqSx6ozG6ThwpOTSm_K8Yq3ffzJC4f55jAp8dF-RhVke8Y5ZGxENIeU8_UqUCAgLFPqaeO5enbDKZwfOg8QCH2ThVPX9MjkmNGHBYFzBiVY0eGrmNL58h0Pq2sdPV2-P7KTlL1tYqiqWKcPs289w5g2u1SZV4fH5Cziox22M" />
          </div>
        </div>
      </section>

      {/* Key Features: High-Density Control Modules */}
      <section className="py-24 px-8 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-10 border border-outline-variant/15 hover:border-tertiary transition-colors group">
            <h3 className="font-display text-4xl font-bold mb-4 group-hover:text-tertiary transition-colors">01</h3>
            <h4 className="font-headline text-xl mb-4">Precision Docking</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Mechanical and sensor alignment achieve ±5mm accuracy for high-speed rack interfacing.</p>
          </div>
          <div className="p-10 border border-outline-variant/15 hover:border-tertiary transition-colors group">
            <h3 className="font-display text-4xl font-bold mb-4 group-hover:text-tertiary transition-colors">02</h3>
            <h4 className="font-headline text-xl mb-4">LCCS Fleet Control</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Centrally manage 500+ robots with sub-second pathfinding and deadlock prevention.</p>
          </div>
          <div className="p-10 border border-outline-variant/15 hover:border-tertiary transition-colors group">
            <h3 className="font-display text-4xl font-bold mb-4 group-hover:text-tertiary transition-colors">03</h3>
            <h4 className="font-headline text-xl mb-4">Dual-Side Logic</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Optimized chassis design allows for loading and unloading from both sides simultaneously.</p>
          </div>
        </div>
      </section>

      {/* System Integration: Schematic View */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <span className="font-label text-tertiary text-[10px] tracking-widest uppercase">Connectivity Matrix</span>
            <h2 className="font-headline text-4xl mt-4">Enterprise Ecosystem</h2>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 py-12 px-8 bg-surface rounded-sm border border-outline-variant/10">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-sm bg-surface-container-highest flex items-center justify-center border-l-2 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl">storage</span>
              </div>
              <span className="font-label text-xs">ERP / MES</span>
            </div>
            <div className="hidden md:block flex-grow h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-30"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-sm bg-surface-container-highest flex items-center justify-center border-l-2 border-tertiary">
                <span className="material-symbols-outlined text-tertiary text-3xl">hub</span>
              </div>
              <span className="font-label text-xs">WMS / WCS</span>
            </div>
            <div className="hidden md:block flex-grow h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-30"></div>
            <div className="flex flex-col items-center gap-2 scale-125">
              <div className="w-20 h-20 rounded-sm bg-primary flex items-center justify-center shadow-xl shadow-primary/10">
                <span className="material-symbols-outlined text-on-primary text-4xl">precision_manufacturing</span>
              </div>
              <span className="font-headline text-xs font-bold text-primary">SL-2000 AGV</span>
            </div>
            <div className="hidden md:block flex-grow h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-30"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-sm bg-surface-container-highest flex items-center justify-center border-l-2 border-tertiary">
                <span className="material-symbols-outlined text-tertiary text-3xl">settings_input_antenna</span>
              </div>
              <span className="font-label text-xs">LCCS CONTROL</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-8 overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,218,243,0.05),transparent)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">Ready to Optimize Your Storage Density?</h2>
          <p className="font-body text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">Our specialists can provide a full simulation of SL-2000 performance within your specific facility layout.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <CTAButton />
          </div>
        </div>
      </section>
    </main>
  );
}
