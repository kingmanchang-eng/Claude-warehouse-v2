import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function AsrsPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[serviceSchema({ name: "ASRS Automated Storage and Retrieval", description: "End-to-end automated storage and retrieval systems for high-density warehouses.", url: "/solutions/asrs", serviceType: "Warehouse Automation" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions/asrs" }, { name: "ASRS", url: "/solutions/asrs" }])]} />
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40 grayscale-[0.5]" alt="Massive automated warehouse with robotic cranes and high-density storage racks in a dimly lit industrial facility with blue ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADJseD8DEz_JRYdNv3mtzfVlvK4kIvATjV5tMPAhpEMZbQQvHkPGFBo2_LpTVpuBH-1hsI-B5-H66g8KHT-CTYSpr-9h_SMsVfi7puwIuD7ZuCmMo5fNOC4YynI89I_mnL12Lhd00mM1mrxqaMkXXt9AHSNfBElrdGWowwQ9GP6XmM_D0eh0xsy9alDg2bWFx8DGU_Ch1wtAcSTbPxNJrGxQwHeNYW6_JwBPJiZVQC5mIIBq7Potimrjgqene_mGB7GolQKEQ_KLg" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="font-label text-tertiary tracking-widest uppercase text-[0.6875rem] mb-4 block">Precision Logistics Architecture</span>
            <h1 className="font-display text-[3.5rem] leading-[1.1] font-bold mb-6 text-on-surface tracking-tighter">
              ASRS — Automated Storage <br />&amp; Retrieval System.
            </h1>
            <div className="flex items-center gap-8 mb-12">
              <div>
                <p className="font-display text-4xl font-bold text-tertiary">+75%</p>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-outline">Storage Capacity</p>
              </div>
              <div className="w-px h-12 bg-outline-variant/30"></div>
              <div>
                <p className="font-display text-4xl font-bold text-tertiary">4x</p>
                <p className="font-label text-[0.6875rem] uppercase tracking-widest text-outline">Throughput Efficiency</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="actuator-gradient px-8 py-4 rounded-sm font-bold text-on-primary uppercase tracking-tighter hover:opacity-90 transition-all">Configure My System</button>
              <button className="border border-outline-variant/30 px-8 py-4 rounded-sm font-bold text-on-surface uppercase tracking-tighter hover:bg-surface-container-high transition-all">Technical Specs</button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-surface-container-low py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-outline-variant/10">
            <div className="bg-surface p-12 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-tertiary mb-6 scale-125">inventory_2</span>
              <h3 className="font-display text-5xl font-bold mb-2">+75%</h3>
              <p className="font-label text-[0.6875rem] text-outline uppercase tracking-widest">Storage capacity increase</p>
              <div className="mt-8 h-1 w-0 group-hover:w-12 bg-tertiary transition-all"></div>
            </div>
            <div className="bg-surface p-12 hover:bg-surface-container-high transition-colors group border-l border-outline-variant/10">
              <span className="material-symbols-outlined text-tertiary mb-6 scale-125">speed</span>
              <h3 className="font-display text-5xl font-bold mb-2">4x</h3>
              <p className="font-label text-[0.6875rem] text-outline uppercase tracking-widest">Operating efficiency</p>
              <div className="mt-8 h-1 w-0 group-hover:w-12 bg-tertiary transition-all"></div>
            </div>
            <div className="bg-surface p-12 hover:bg-surface-container-high transition-colors group border-l border-outline-variant/10">
              <span className="material-symbols-outlined text-tertiary mb-6 scale-125">target</span>
              <h3 className="font-display text-5xl font-bold mb-2">99.99%</h3>
              <p className="font-label text-[0.6875rem] text-outline uppercase tracking-widest">Inventory accuracy</p>
              <div className="mt-8 h-1 w-0 group-hover:w-12 bg-tertiary transition-all"></div>
            </div>
            <div className="bg-surface p-12 hover:bg-surface-container-high transition-colors group border-l border-outline-variant/10">
              <span className="material-symbols-outlined text-tertiary mb-6 scale-125">group_remove</span>
              <h3 className="font-display text-5xl font-bold mb-2">-60%</h3>
              <p className="font-label text-[0.6875rem] text-outline uppercase tracking-widest">Labor cost reduction</p>
              <div className="mt-8 h-1 w-0 group-hover:w-12 bg-tertiary transition-all"></div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-tertiary-container text-tertiary font-label text-[0.625rem] tracking-[0.2em] uppercase mb-8">Ecosystem Architecture</div>
              <h2 className="font-display text-[2.5rem] font-bold leading-tight mb-8">Storage AGV + AGV Roller <br />&amp; LCCS Software</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-surface-container-high p-3 rounded-sm border-l-2 border-tertiary">
                    <span className="material-symbols-outlined text-tertiary">smart_toy</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-medium mb-1">Automated Retrieval</h4>
                    <p className="text-outline text-sm leading-relaxed max-w-md">Precision-guided AGVs eliminate manual searching and physical fetching, reducing cycle times by up to 300%.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-surface-container-high p-3 rounded-sm border-l-2 border-tertiary">
                    <span className="material-symbols-outlined text-tertiary">view_quilt</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-medium mb-1">Space Optimization</h4>
                    <p className="text-outline text-sm leading-relaxed max-w-md">Ultra-dense racking configurations managed by LCCS maximize every cubic meter of your facility footprint.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-surface-container-high p-3 rounded-sm border-l-2 border-tertiary">
                    <span className="material-symbols-outlined text-tertiary">terminal</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-medium mb-1">Intelligence Management</h4>
                    <p className="text-outline text-sm leading-relaxed max-w-md">The LCCS Software core coordinates multi-agent pathfinding and inventory visibility in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-surface-container-low p-8 rounded-lg aspect-square flex items-center justify-center border border-outline-variant/10 overflow-hidden">
                <img className="w-full h-full object-cover rounded shadow-2xl" alt="Close up of a futuristic AGV unit with glowing blue status lights moving through a modern warehouse facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDYUhKvQ20sq8RQBwgUvCfRDwmjNdHl_hhfqly7vHDCKkACyrpGm3hJ8jyqLX2zSKxFKV2_VWDw7QxDZr9Noc_tqoe0MYCxbvFV4dp2PARIVzeNcP5-Utddzh1oNe6wJBZX03fPdcX8k_TDPBIrSQRNDAT3kgsu92vSSu6io2MKhH7Kzm16GLyFEx93BLSkSjsbHpwYOl0DrlKhai9pFp2JnvkrApzXRHDPibyGFf-SQ4eZVvXIU7sUeDhDRfkSuKaqPN-uwYWevM" />
                <div className="absolute inset-0 bg-gradient-to-tr from-surface/40 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 glass-hud p-6 rounded-sm border border-outline-variant/20 max-w-[240px]">
                <p className="font-display text-2xl font-bold text-tertiary">LCCS Core</p>
                <p className="text-on-surface/60 text-xs font-label uppercase tracking-widest mt-1">Autonomous Control Engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-container-lowest py-32 overflow-hidden">
        <div className="container mx-auto px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-20 uppercase tracking-widest">The Operational Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="relative group">
              <div className="bg-surface-container p-8 h-full border-t-2 border-outline-variant hover:border-tertiary transition-colors">
                <span className="font-display text-4xl text-outline-variant/40 block mb-6 group-hover:text-tertiary transition-colors">01</span>
                <h4 className="font-headline text-lg mb-4">Task Intake</h4>
                <p className="text-outline text-sm">WMS transmits storage or retrieval requirements to the core system.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-surface-container p-8 h-full border-t-2 border-outline-variant hover:border-tertiary transition-colors">
                <span className="font-display text-4xl text-outline-variant/40 block mb-6 group-hover:text-tertiary transition-colors">02</span>
                <h4 className="font-headline text-lg mb-4">Dispatch</h4>
                <p className="text-outline text-sm">LCCS identifies optimal agent and dispatches AGV via secure mesh link.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-surface-container p-8 h-full border-t-2 border-outline-variant hover:border-tertiary transition-colors">
                <span className="font-display text-4xl text-outline-variant/40 block mb-6 group-hover:text-tertiary transition-colors">03</span>
                <h4 className="font-headline text-lg mb-4">Navigation</h4>
                <p className="text-outline text-sm">AGV utilizes LIDAR and SLAM to navigate rack corridors with millimeter precision.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-surface-container p-8 h-full border-t-2 border-outline-variant hover:border-tertiary transition-colors">
                <span className="font-display text-4xl text-outline-variant/40 block mb-6 group-hover:text-tertiary transition-colors">04</span>
                <h4 className="font-headline text-lg mb-4">Execution</h4>
                <p className="text-outline text-sm">Automated fork/roller system retrieves or stores load, confirming task closure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight">Machinery Catalog</h2>
              <p className="text-outline mt-2">Compatible components for your ASRS ecosystem.</p>
            </div>
            <a className="text-tertiary font-label text-[0.6875rem] uppercase tracking-widest hover:underline" href="/products">View All Hardware</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low group overflow-hidden">
              <div className="h-64 overflow-hidden bg-surface-container-highest">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Industrial storage AGV unit with lifting forks, matte black finish with cyan lighting accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzc8RpgfAP-ovYbcM7x0IzFI6sSI2YK_9iDkKVYrPAr7_yk0EqxuK5hGDI_WpJ1SgJ8I5Z0rsjYXWD-omFRlnmMzg99rNeMOUcc6h6nWLz8LD56nLp7ls8mmgFe3QzGzEYG9kidMlsyrb61qrAs6LtMqLeFQLrk2aMvqJuZHoGa5OCGo1HPaUfdHRprWvlNO9-tw7RYgn6s_d8sKZGtpoeI_CSxIFnOZpbWf-DYWtKtq7nTqcx-BjHI06qfcINsdinbsyz5TCyt54" />
              </div>
              <div className="p-8">
                <h4 className="font-display text-xl font-bold mb-2">Storage AGV</h4>
                <p className="text-outline text-sm mb-6 h-10 overflow-hidden">High-payload automated vehicle for palletized storage retrieval.</p>
                <a className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-tertiary transition-colors" href="/products/storage-agv">
                  View Product <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="bg-surface-container-low group overflow-hidden">
              <div className="h-64 overflow-hidden bg-surface-container-highest">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="AGV roller conveyer module integrated with a robotic transport base, industrial setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7AUptF95wgHjUgef-nTBP4EIf1plSXElOzYoOYyd2kDhopN8Ey13l2F3O0vkXsJA3KPrlKVZLoujn8cmuKHGWFURF5Vt1NeQbnxVEBI75JNZtgU4t3qdKzS0xr5efyvuysaWU2HTjBD4VJN6eMFdfkNbB3gWuNCRcYq8-Q6-phHOeNdaA-fxH2FeqQgIvJa3sSI3cbaT-h_FrcXwZh8xBFs-zfa53DtdQJCJkiZ21vx7bgwjLeJEKHjJICVcct8K2zqVHK3m9pxQ" />
              </div>
              <div className="p-8">
                <h4 className="font-display text-xl font-bold mb-2">AGV Roller</h4>
                <p className="text-outline text-sm mb-6 h-10 overflow-hidden">Integrated conveyor module for seamless line-side transfers.</p>
                <a className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-tertiary transition-colors" href="/products/agv-roller">
                  View Product <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="bg-surface-container-low group overflow-hidden">
              <div className="h-64 overflow-hidden bg-surface-container-highest">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Heavy duty lifting AGV designed for high-bay warehouse operations with advanced sensor array" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS_IYyYidpJDT4_Yrz4zf98YziwrJchbbXW0zavshj1BrezFbdA0JamMjULcMohTGXSUgYEaBNQfv5GuAFXRi2QLfUihbj5CGwdZUpOVPvKWVW1zgEaV8vAO6Xmd-lmL_y8vXxepOTe7_IPJyx9cZKfm2ZA3uNGKtgCgo0l3m6CzWXRKgAz9I6JTJ5NRSGadLUVK7KMQU0836g69YUSZuj9hQ_YKVIAi5SBaXMevBWpi5JQKT6vyAKU5EnQ8RpsEGTo0vsUkkwrqE" />
              </div>
              <div className="p-8">
                <h4 className="font-display text-xl font-bold mb-2">Lifting AGV</h4>
                <p className="text-outline text-sm mb-6 h-10 overflow-hidden">Vertical optimization specialist for reaching high-rack positions.</p>
                <a className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-tertiary transition-colors" href="/products/lifting-agv">
                  View Product <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-16 text-center tracking-widest uppercase">Implementation Success</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-surface border border-outline-variant/10 flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-1/3 h-64 md:h-auto">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Electronics assembly line with clean room environment and automated transport systems" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIMY5HlBqzRVQGOLICvbpx52uc0KhSEyuRGp1j2Komu5tvs96cltmStZ7-qOSkt7cg7jdNAZSdy6DyOmc5rKiz1EM6yoUEg_H_VjTTICsEYochVGYkoEntqq0pSZIYoslrE9e719dy_sQq7sxXoW4BPe5Sh2TE9BswdyuwNenvgUXFyTDKM7HJ7IVj25RAA2utPwO1zClYERbOVfH9I3OQdXOk5YpHD0aaAY2SWsDXq30qupSJYn8BS8t___ABcZTeRYn724ozodQ" />
              </div>
              <div className="p-10 md:w-2/3">
                <span className="text-tertiary font-label text-[0.625rem] tracking-[0.2em] uppercase mb-4 block">Electronics Assembly</span>
                <h3 className="font-display text-2xl font-bold mb-6">Mini Load ASRS</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-outline text-sm">Labor Reduction</span>
                    <span className="font-bold text-on-surface">2 Operators</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-outline text-sm">ROI Payback</span>
                    <span className="font-bold text-on-surface">11 Months</span>
                  </div>
                </div>
                <p className="text-outline text-sm mb-8 leading-relaxed">Integrated for small-parts handling in high-precision electronics manufacturing.</p>
                <button className="text-tertiary font-bold text-xs uppercase tracking-widest border-b border-tertiary/30 pb-1">Download Study</button>
              </div>
            </div>
            <div className="bg-surface border border-outline-variant/10 flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-1/3 h-64 md:h-auto">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Industrial appliance manufacturing facility with rows of washing machines being handled by AGVs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxvGWlW6kE41O9NGSgBHxBw03Ul_rr_GmJByI0sFafpq30BU4dgfb5zx901jbMYJAQ8VH5GWl0xlPCWG24GNbxOENMBLZHMNS3Mg9HiGuSmnsTxuRzSRZJ_ek8mp-7ekJ5q9SiHeCxH_nEyUOU-jAOLMNZ9-cT6ns-6Y4MZigpkvYbl1fR_E-jRLZFHrZ8kGWIj0YgtXsP4-8uOOdQiWfjcvzjYOQQBi9_rm0ilyz83SQ-K7i65Y2vWbGcHGZYhb4bxscqjIWfSXE" />
              </div>
              <div className="p-10 md:w-2/3">
                <span className="text-tertiary font-label text-[0.625rem] tracking-[0.2em] uppercase mb-4 block">Home Appliances</span>
                <h3 className="font-display text-2xl font-bold mb-6">Unit Load ASRS</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-outline text-sm">Storage Density</span>
                    <span className="font-bold text-on-surface">2x Capacity</span>
                  </div>
                  <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-outline text-sm">ROI Payback</span>
                    <span className="font-bold text-on-surface">12 Months</span>
                  </div>
                </div>
                <p className="text-outline text-sm mb-8 leading-relaxed">Large-scale washing machine storage and retrieval for high-volume logistics.</p>
                <button className="text-tertiary font-bold text-xs uppercase tracking-widest border-b border-tertiary/30 pb-1">Download Study</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="bg-surface-container-high relative p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <span className="material-symbols-outlined text-[300px] text-tertiary absolute -right-20 -top-20">settings_suggest</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-4xl font-bold mb-6 tracking-tight">Ready to Engineer Your <br />Autonomous Warehouse?</h2>
              <p className="text-outline text-lg mb-10 leading-relaxed">Our solution architects are ready to provide a custom simulation and ROI analysis for your specific facility requirements.</p>
              <div className="flex flex-wrap gap-6">
                <CTAButton />
                <button className="bg-surface px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm border border-outline-variant/20 hover:bg-surface-container-highest transition-all">Talk to an Engineer</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
