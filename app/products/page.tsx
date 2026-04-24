import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/jsonld'

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Products", url: "/products" }])} />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low opacity-90"></div>
          <img className="w-full h-full object-cover mix-blend-overlay opacity-30" alt="Cinematic wide shot of a high-tech dark warehouse with blue telemetry light trails and autonomous mobile robots moving across the floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCELPHxv5UXZ4Fao-iicplnJfWP5mQyjFLKD0oaXGr_3oNLVIHN9ZOsbdS1YEA2Ly4fOEZR3XdwCuo5hT8-z84Ow34Kt7rAU2uZ0DbQSJOpD3_SDGZ2a8RdwJx9gq3cRLPBCFlL8N-DEbFeZFtosDaSErCnyNPBq5sxHFYsl7KZFcw5BZiFLEglnr_yVmG4ZtZ5fLcG7rOfjXNTvMOxl5PjkDWF_GmdNzqJf8pdsiXKVyznb7VJiiO9LyNsj2cJGIXKb4eN4gBTkvU" />
        </div>
        <div className="relative z-10 container mx-auto px-8">
          <div className="inline-block px-3 py-1 bg-tertiary-container border-l-2 border-tertiary mb-6">
            <span className="font-label text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-tertiary">Industrial Fleet Solutions</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-on-surface">
            Our AGV &amp; Mobile Robot <br />
            <span className="text-primary-fixed">Product Line</span>
          </h1>
          <p className="max-w-2xl font-body text-lg text-on-surface-variant leading-relaxed mb-12">
            Comprehensive autonomous vehicle fleet engineered for high-density warehouse environments and factory internal logistics. Precision telemetry meets heavy-duty mechanical reliability.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="actuator-gradient px-8 py-4 text-on-primary font-bold text-sm uppercase tracking-widest rounded-sm">
              Explore Full Catalog
            </button>
            <button className="px-8 py-4 bg-surface-container-high border border-outline-variant/15 text-on-surface font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-surface-bright transition-colors">
              Download Tech Specs
            </button>
          </div>
        </div>
      </section>

      {/* Product Cards (The Kinetic Monolith Grid) */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16 border-l-4 border-primary pl-6">
            <div>
              <h2 className="font-headline text-3xl font-medium tracking-tight">Active Fleet Units</h2>
              <p className="font-body text-on-surface-variant mt-2">Engineered for sub-millimeter precision and multi-shift endurance.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {/* AGV Forklift */}
            <div className="bg-surface group hover:bg-surface-container-high transition-colors p-8 flex flex-col justify-between aspect-[4/5] border border-outline-variant/5">
              <div>
                <div className="font-label text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-tertiary mb-4">RL-FL1600</div>
                <h3 className="font-display text-3xl font-bold mb-4">AGV Forklift</h3>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between text-xs font-label uppercase tracking-wider border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Capacity</span>
                    <span className="text-on-surface">1600kg</span>
                  </div>
                  <div className="flex justify-between text-xs font-label uppercase tracking-wider border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Navigation</span>
                    <span className="text-on-surface">Laser SLAM + 3D Vision</span>
                  </div>
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-sm mb-6">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Close up of a sleek industrial robotic forklift mechanism with laser sensors and metallic finish in a dark modern factory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ93gCbWAN9hBXeKr9xvVD_K6yCDyy9cw77TSWMmxCLWS8_BbV81zH4uEMbO3D85pxD7qZDo8nO1_2ly1JDXJaDSXttSZDBODYTNaTRy9eRoGuHiWt4A74IAxcfNdZeu1qweUDNOk5FA69DvfPMn14471NEEPXB18SfC7oSIIqXPFF6pqLslRplAf0OaZeKG0_UHAZizzFn17T4o1qEQNZCOWvIMpNNszrC4-2w-YKuN0u4nU-sJHThTMTwP5JMJp4sqHZACCkekM" />
              </div>
              <a href="/products/agv-forklift" className="w-full py-3 bg-surface-container-highest group-hover:actuator-gradient text-xs font-bold uppercase tracking-widest transition-all text-center block">
                View Module
              </a>
            </div>
            {/* Lifting AGV */}
            <div className="bg-surface group hover:bg-surface-container-high transition-colors p-8 flex flex-col justify-between aspect-[4/5] border border-outline-variant/5">
              <div>
                <div className="font-label text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-tertiary mb-4">RL-LT1000</div>
                <h3 className="font-display text-3xl font-bold mb-4">Lifting AGV</h3>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between text-xs font-label uppercase tracking-wider border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Capacity</span>
                    <span className="text-on-surface">600kg - 1000kg</span>
                  </div>
                  <div className="flex justify-between text-xs font-label uppercase tracking-wider border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Precision</span>
                    <span className="text-on-surface">Laser SLAM + QR</span>
                  </div>
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-sm mb-6">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Low profile autonomous mobile robot platform with mechanical lifting jack under a storage shelf in a dark technological environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBalOCU4G8EboLahdMv7Xaep0xFpf8HT8f-d3adLklY81AG_QeI-XP4eOloeUjekSL0Uu8522EgikeuWasvIAXYwKjPeOoRRm5lnSN-0V5O4Q79MJqambHpUJMbYlOaQLHBWqoQT0SR-SH0Jrsx9Dpx2eKv_9nM6CDR9jVIIh2skE_iCJi1G5Pe_gP_1eGBkI60MxfJb0v129QjqMwm7HUnVcch7-iy82hCITzK4tLNTTDqtXQOJby4-eq_MKHjLFwX6ZsfpAQF4gc" />
              </div>
              <a href="/products/lifting-agv" className="w-full py-3 bg-surface-container-highest group-hover:actuator-gradient text-xs font-bold uppercase tracking-widest transition-all text-center block">
                View Module
              </a>
            </div>
            {/* Storage AGV */}
            <div className="bg-surface group hover:bg-surface-container-high transition-colors p-8 flex flex-col justify-between aspect-[4/5] border border-outline-variant/5">
              <div>
                <div className="font-label text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-tertiary mb-4">RL-SD005</div>
                <h3 className="font-display text-3xl font-bold mb-4">Storage AGV</h3>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between text-xs font-label uppercase tracking-wider border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Accuracy</span>
                    <span className="text-on-surface">±5mm High-Density</span>
                  </div>
                  <div className="flex justify-between text-xs font-label uppercase tracking-wider border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Interface</span>
                    <span className="text-on-surface">LCCS Cloud-Ready</span>
                  </div>
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-sm mb-6">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Automated vertical storage system with high-speed robot shuttles and glowing blue status indicators in a tech hub" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDH6aETmZ2IGAzXVBFRiM67NZ5T7zjhWcenu4noIObkF_uOlxKaGWVQ1SEbA9A9tJlorlxaiJEeBKIQ3d3La-m2DHIqJ0TvYqwtA6b7pkQ0ApVmIlXMrpj35RUnV4vf92s5lNHw8IJmO-gsptxQ_C27uSDumhzjU0YYFA2uNpEyaITJy7H7pBC4OxpKrY8S-ppw6MBJp903JHIPJ1VXbMxQVBCDvvSO0cqRELz2DxmOBtUyLu4d9v2RKdIlk63K-NfVFcxFHqAWI8" />
              </div>
              <a href="/products/storage-agv" className="w-full py-3 bg-surface-container-highest group-hover:actuator-gradient text-xs font-bold uppercase tracking-widest transition-all text-center block">
                View Module
              </a>
            </div>
            {/* AGV Roller */}
            <div className="bg-surface group hover:bg-surface-container-high transition-colors p-8 flex flex-col justify-between aspect-[4/5] border border-outline-variant/5">
              <div>
                <div className="font-label text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-tertiary mb-4">RL-RC200</div>
                <h3 className="font-display text-3xl font-bold mb-4">AGV Roller</h3>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between text-xs font-label uppercase tracking-wider border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Integration</span>
                    <span className="text-on-surface">Conveyor Auto-Link</span>
                  </div>
                  <div className="flex justify-between text-xs font-label uppercase tracking-wider border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Load</span>
                    <span className="text-on-surface">200kg Max</span>
                  </div>
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-sm mb-6">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="A robotic mobile unit equipped with a motorized roller conveyor top surface moving a small package in a factory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbbwStIQi-Ik87UfABzrIg1_veHyZ5nwHPZ0L4P40BXvPDNF4yYofbB89HxYOyhhdnmsygUVPl2repOXlejf0xlUwqZ47TkK9wSRf7iSaTl2QfRC05Ae9LrO310xENlbEj108jvu8-TLVowI4YPGpZjIGUH7BjWpqSYV7BJpGH-EXBgVDR-oAshcpzBjpgvplVd4P4wiPB--r0aR5nGAEhVjbgMoe_LdJA17khakW2rCN49EtLq1cwlqUdARi5aPC8T_QpKU_yyVg" />
              </div>
              <a href="/products/agv-roller" className="w-full py-3 bg-surface-container-highest group-hover:actuator-gradient text-xs font-bold uppercase tracking-widest transition-all text-center block">
                View Module
              </a>
            </div>
            {/* Composite Mobile Robot */}
            <div className="bg-surface group hover:bg-surface-container-high transition-colors p-8 flex flex-col justify-between aspect-[4/5] border border-outline-variant/5 lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-label text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-tertiary mb-4">RL-CR-PICK</div>
                    <h3 className="font-display text-3xl font-bold mb-4">Composite Mobile Robot</h3>
                    <p className="text-sm text-on-surface-variant mb-6">Hybrid unit combining 6-axis robotic arm precision with AMR mobility for advanced picking operations.</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-surface-container-low p-3">
                        <span className="block font-label text-[0.6rem] text-tertiary uppercase mb-1">Arm Reach</span>
                        <span className="text-lg font-bold">900mm</span>
                      </div>
                      <div className="bg-surface-container-low p-3">
                        <span className="block font-label text-[0.6rem] text-tertiary uppercase mb-1">Payload</span>
                        <span className="text-lg font-bold">200kg</span>
                      </div>
                    </div>
                  </div>
                  <a href="/products/composite-mobile-robot" className="actuator-gradient py-4 text-xs font-bold uppercase tracking-widest transition-all text-center block">
                    Configure Picker Unit
                  </a>
                </div>
                <div className="flex-1 relative overflow-hidden rounded-sm min-h-[300px]">
                  <img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Advanced humanoid-style robotic arm mounted on a mobile wheeled platform performing precision picking in a dark laboratory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs7TFA_va_KEFbg2itpRHl0ueOHvoxIxY8J_1wwAsStDQee8K4phS4FTAwKfFi_iNAuGn53D7JsgAuzF7_e2llfjbaDAc9DRHTymlY_wJbIspL94vYB2iemppc-isjgXFuKC2FMYPhhUCDINd1ypYBBB61S35wi0qNg2MYp4vGpV14Tv3iSmjKS8KL82Cci9Qj2d2fkjZzxMX-X30nIzrURfZM2l4kiScqQ08n0JxDhjh3Uq9BQY-XS8hioEZGiQnI5vJMBfmCye8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features (Bento Grid) */}
      <section className="py-24 px-8 bg-surface">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-on-surface">Engineered Intelligence</h2>
            <div className="h-1 w-24 actuator-gradient mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-10 border-l-2 border-tertiary">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">explore</span>
              <h4 className="font-headline text-xl font-medium mb-3">Autonomous Navigation</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Dynamic path planning using multi-sensor fusion. Obstacle avoidance in real-time without fixed tracks.</p>
            </div>
            <div className="bg-surface-container-low p-10 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">update</span>
              <h4 className="font-headline text-xl font-medium mb-3">24/7 Operation</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Automatic charging cycles and rapid battery swapping ensure zero downtime across triple-shift schedules.</p>
            </div>
            <div className="bg-surface-container-low p-10 border-l-2 border-tertiary">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">hub</span>
              <h4 className="font-headline text-xl font-medium mb-3">Fleet Management (LCCS)</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Centralized control for up to 500 units. Intelligent traffic management and task prioritization.</p>
            </div>
            <div className="bg-surface-container-low p-10 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">settings_input_component</span>
              <h4 className="font-headline text-xl font-medium mb-3">WMS/ERP Integration</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Seamless API protocols for SAP, Oracle, and custom warehouse management architectures.</p>
            </div>
            <div className="bg-surface-container-low p-10 border-l-2 border-tertiary">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">verified_user</span>
              <h4 className="font-headline text-xl font-medium mb-3">Safety Certified</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">ISO 3691-4 compliant. 360-degree LIDAR coverage with dual safety PLCs for collaborative operation.</p>
            </div>
            <div className="bg-surface-container-low p-10 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">architecture</span>
              <h4 className="font-headline text-xl font-medium mb-3">Custom Configuration</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">Modular chassis design allowing for custom lifting heights, payloads, and specialized grippers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section (Tonal Layering) */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-8">Operational Applications</h2>
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-surface-container-high text-tertiary font-display font-bold text-xl group-hover:bg-tertiary group-hover:text-surface transition-all">01</div>
                  <div>
                    <h5 className="font-headline text-lg font-bold mb-2">E-commerce Fulfillment</h5>
                    <p className="text-on-surface-variant text-sm">High-speed sorting and goods-to-person systems for ultra-fast seasonal peak handling.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-surface-container-high text-tertiary font-display font-bold text-xl group-hover:bg-tertiary group-hover:text-surface transition-all">02</div>
                  <div>
                    <h5 className="font-headline text-lg font-bold mb-2">Automotive Manufacturing</h5>
                    <p className="text-on-surface-variant text-sm">Heavy-duty transport of chassis and components across production lines with synchronized timing.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-surface-container-high text-tertiary font-display font-bold text-xl group-hover:bg-tertiary group-hover:text-surface transition-all">03</div>
                  <div>
                    <h5 className="font-headline text-lg font-bold mb-2">Electronics Factory</h5>
                    <p className="text-on-surface-variant text-sm">ESD-safe transportation in cleanroom environments with sub-millimeter dock accuracy.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-surface-container-high text-tertiary font-display font-bold text-xl group-hover:bg-tertiary group-hover:text-surface transition-all">04</div>
                  <div>
                    <h5 className="font-headline text-lg font-bold mb-2">Cold Storage</h5>
                    <p className="text-on-surface-variant text-sm">Specialized robotics engineered for sustained performance in -25°C automated environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-surface-container-high rounded-sm overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Macro photo of circuit boards and robotic arms in a high-tech cleanroom electronics factory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGBIzSzBt9Y4q9W-kcckQETpma8sHwSj9LDqGtO3xGdeHcKVFFIMOCjx1P1s416-UqenX2ftWgAEQlNJ_QEARS6AG6dRqSQe5Y-dRD1IC5wL-XF8RD3Bkf4z34H9awRmpHGuk9Mh4m9rWyK7VU8xlpNwySzkd66L139XBpuQCxBU9zjngDB8lU56-TM-_A9BKj3C_lUxqsZUn-euQTMDtAji3ngAqwXjg9OSkIxh92SR-5qum0CCehLrj7Q_CFUOdj6ngIk4wXSKY" />
                </div>
                <div className="aspect-[3/4] bg-surface-container-high rounded-sm overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Large scale automotive assembly line with robotic welding machines and blue light sparks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw_3gYq046DEcmtd3sPLoXvPNGwPdAvy5Dg8-KpttDpGvNu77WhWnZX_RFxa2_835dfKVwBPkrEMk-21oB4SPXIW4FkLTnhaNQsHp_ioAGBFN8v-nZ5LRaFmbfvgSujrtlHW4Ob2LNwMEARFz14yNxbj0l-HFKMQDuHcE_1HNq5UIbtcecOO8-_Lz9FmzrdmJ_W1EnkVljpNGKitP6ORubOACmjzjXI73r6Zl-vTtEeSqUnl7sc5_kHul0jCHabAwGiPwWXgv-ozQ" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-surface-container-high rounded-sm overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Interior of a massive modern distribution center with high racks and glowing led floor paths" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3rIR2WLDKnKVNkhbdjSoOcl3IyzJATRxZ8EvDoIR5X_h1szEX6tMase6gaWjQczuqS-MV0TXAAUwQYgMRnG3rNFf4WIxBJqzS9Pc1NOydRqE6wwDsU0sn803XC0oW3trGBbUo2FrGtpF1TFYURgRwLNiKGSKANSpHPS0Fm04Z02I0xmAkNNzuFS2kebMjoVnGdc60UcyjH446jdTutMKrIhStL4azWyKJn2qMtGlGLcfErxcFA-sjws_wcXGjALLqsQjfUiMntjQ" />
                </div>
                <div className="aspect-square bg-surface-container-high rounded-sm overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Industrial cold storage facility with frosty shelves and bright white led overhead lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2i55FadAZxY1HvGaOMxXGZZYZ40Ba_sDbNwbvwKOQ3q4htfZ2d-XXm4Bieior7wGWXB_9z3B_v5tti6kFnh0o0RydQI5cqgcC6RAyp-WNVftT724VyLNRd5UaH5aF0CuNf26EOJzD0dHXgWYlFXD41VdSXbzfdgpsQ1QIzJ_Hxi_D3kH0v2ZLL6Ummge5UuPm-lNeNtLdox2wMlezUVVvpNVPetsMXQM5BcL5QefGpyB7n0td2DNTzDUt_bYDwiXnN7ulurjCzyA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="container mx-auto px-8 bg-surface-container-high p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 blur-[100px]"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-on-surface">Find the Right AGV for Your Operation</h2>
            <p className="text-on-surface-variant text-lg mb-10">Our automation consultants are ready to conduct a site simulation based on your floor plan and throughput requirements.</p>
            <CTAButton />
          </div>
        </div>
      </section>
    </main>
  );
}
