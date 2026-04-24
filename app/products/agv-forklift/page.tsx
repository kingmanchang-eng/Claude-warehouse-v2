import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { productSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function AgvForkliftPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[productSchema({ name: "AGV Forklift RL-FL1600", description: "Heavy-duty autonomous forklift robot with 1600kg payload capacity for warehouse logistics.", model: "RL-FL1600", url: "/products/agv-forklift", category: "AGV Forklift" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "AGV Forklift", url: "/products/agv-forklift" }])]} />
      {/* 1. Hero Section */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-50" alt="high-tech industrial warehouse with a sleek navy blue autonomous forklift transporting pallets under dramatic cyan lighting and misty atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiGEOrB4tnyS4Gyp860jNYiw8Oe-7aGN0bsTud1WY54PCz-njQ3AHT2sUHrMtrrOVPKgD6PgB-TnlHvFdhd8eoSaXIXQLhT_mLwqHBmU1tGf2QjBQJNH0w8YOuj1E61lFPn9F4qfA2NphX7z284SKXmK5XhriljKcJFGWmO0RIJPOPD1q-4DpKgIcM9q8232GZdim0qNFbpJsRsW8-twz1mFBs_kfAy4GsaTwCgM7YYMbmS8f-rfWtb8FRE9oai8pBLDuXVZNiBJM" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-tertiary font-bold tracking-[0.2em] uppercase mb-4 block text-sm">Industrial Automation Series</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-tight mb-6">
              AGV Forklift — <br />
              <span className="text-primary">Autonomous Pallet Handling</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl font-body max-w-xl mb-10 leading-relaxed">
              Precision-engineered logistics driven by Laser SLAM and 3D Vision navigation. Redefining high-density warehouse efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="actuator-btn px-8 py-4 rounded-sm text-on-primary font-bold uppercase tracking-widest text-sm">Download Datasheet</button>
              <button className="border border-outline-variant/30 px-8 py-4 rounded-sm text-on-surface font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-all">Watch Demo</button>
            </div>
          </div>
        </div>
        {/* Floating HUD Element */}
        <div className="absolute right-12 bottom-12 glass-hud p-6 rounded-lg hidden lg:block border border-outline-variant/15">
          <div className="flex gap-8">
            <div>
              <p className="font-label text-[0.6rem] uppercase tracking-widest text-tertiary mb-1">NAV_SYSTEM_STATUS</p>
              <p className="font-headline text-2xl font-bold">ACTIVE SLAM</p>
            </div>
            <div className="w-px bg-outline-variant/30"></div>
            <div>
              <p className="font-label text-[0.6rem] uppercase tracking-widest text-tertiary mb-1">PRECISION_INDEX</p>
              <p className="font-headline text-2xl font-bold">±10MM</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Overview (Bento Grid) */}
      <section className="py-24 bg-surface px-8">
        <div className="container mx-auto">
          <h2 className="font-headline text-3xl font-medium mb-16 flex items-center gap-4">
            <span className="w-12 h-px bg-tertiary"></span> System Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 bg-surface-container-low p-8 flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-8">view_module</span>
              <div>
                <h3 className="font-headline text-xl mb-2">Modular Design</h3>
                <p className="text-on-surface-variant font-body text-sm">Flexible hardware configuration for diverse industrial requirements, ensuring rapid deployment and easy maintenance.</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-8">recenter</span>
              <div>
                <h3 className="font-headline text-xl mb-2">360° Flexibility</h3>
                <p className="text-on-surface-variant font-body text-sm">Omnidirectional movement allows for maneuvers in extremely confined spaces.</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-8">safety_check</span>
              <div>
                <h3 className="font-headline text-xl mb-2">Omnidirectional Safety</h3>
                <p className="text-on-surface-variant font-body text-sm">3D obstacle avoidance and safety bumpers for secure human-machine collaboration.</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-8">history_edu</span>
              <div>
                <h3 className="font-headline text-xl mb-2">Minimal Turning Radius</h3>
                <p className="text-on-surface-variant font-body text-sm">Optimized chassis design for efficient navigation in narrow aisles (min 2500mm).</p>
              </div>
            </div>
            <div className="md:col-span-3 bg-surface-container-low p-8 flex flex-col md:flex-row gap-8 items-center group hover:bg-surface-container-high transition-colors">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-8">barcode_scanner</span>
                <h3 className="font-headline text-xl mb-2">Automatic Carrier Recognition</h3>
                <p className="text-on-surface-variant font-body text-sm">Advanced 3D vision detects pallet orientation and type automatically for seamless docking without manual adjustment.</p>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-surface overflow-hidden rounded-sm">
                <img className="w-full h-full object-cover grayscale opacity-60" alt="close-up of industrial sensor laser scanning a wooden pallet in a dark warehouse setting with digital blue wireframe overlays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDivoFiJmwJf1i86PopSZN1mYWqDvZuWFQNRYBolJJbGH1H9ifaxTwTcXi42v7g1Rv01EA1PT9UUQ_MelzvDCakqiMs6WYR_ftdrrvrtwMocgL2CXsk9YHTUwO3cbSPxB-J1SIzu0k5n9RFITYIBdKS6wsrpUywoF6qyzW-UtlR031t_eARr9NFPqwlEhbJAafc31AGkqaF1cg54lqdiV7MJbxWOZExjD1aMnOPHEnTBOkacfwGc5I2BebmXNVzd3-wdT2_HLFiJ3I" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Specs Table (Machined Layout) */}
      <section className="py-24 bg-surface-container-lowest px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-8">Technical Parameters</h2>
              <p className="text-on-surface-variant mb-12">Performance benchmarks for the Standard and Stacker configurations in industrial environments.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                  <span className="text-outline uppercase tracking-widest text-sm">Load Capacity</span>
                  <span className="font-headline text-xl text-primary font-bold">1600kg (Std) / 1400kg (Stk)</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                  <span className="text-outline uppercase tracking-widest text-sm">Lift Height</span>
                  <span className="font-headline text-xl text-primary font-bold">3000mm</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                  <span className="text-outline uppercase tracking-widest text-sm">Max Speed</span>
                  <span className="font-headline text-xl text-primary font-bold">1.8m/s (Std) / 1.5m/s (Stk)</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                  <span className="text-outline uppercase tracking-widest text-sm">Navigation Accuracy</span>
                  <span className="font-headline text-xl text-tertiary font-bold">±10mm</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                  <span className="text-outline uppercase tracking-widest text-sm">Battery Runtime</span>
                  <span className="font-headline text-xl text-primary font-bold">8h Continuous</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                  <span className="text-outline uppercase tracking-widest text-sm">Min Aisle Width</span>
                  <span className="font-headline text-xl text-primary font-bold">2500mm</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/15 pb-2">
                  <span className="text-outline uppercase tracking-widest text-sm">Pallet Dimensions</span>
                  <span className="font-headline text-xl text-primary font-bold">1200×800 / 1200×1000mm</span>
                </div>
              </div>
            </div>
            <div className="relative bg-surface p-1 rounded-sm border border-outline-variant/10">
              <img className="w-full opacity-80 grayscale" alt="detailed technical blueprint of an AGV forklift chassis with dimensional labels and mechanical diagrams on a dark blue background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0JGCYVqyXC95ksD1PXtZmFIVbF10BrDdjVs_L_LCyEvPyTBoE_3RF-DvLkjm7CVEVEQk6ypdkz0Vh5BsdEA1oiAUgOz4PnaPq877bxvuLC5lTU_TkSOZnlDUAOtjVCxpoW_Ce2C2ZHeviNnzhXan_HZQUVgW6PlTIMSHGCIgKBiPkGQ395rgYYVgmvhz-8MAv9C0Uh2fHEtA9CRHPGmzk-vooEgiFsevIg0iiM1RmUCh3BEXvDRmd3D7xtMgR2_UYEgVOijjCksg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 glass-hud text-center">
                  <span className="text-tertiary text-xs uppercase font-bold block mb-1">Precision Scan</span>
                  <span className="text-3xl font-bold font-headline">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Applications (Visual Cards) */}
      <section className="py-24 bg-surface px-8">
        <div className="container mx-auto">
          <h2 className="font-headline text-3xl font-medium mb-16 text-center">Operational Environments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative aspect-[3/4] overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale brightness-75" alt="massive industrial pallet racking system in a dark warehouse with automated forklifts moving through the aisles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGfs8-0joO0DpmAkpl1HxUWa39DxdAMtT-XeUNsQ2RdbGU4V7L6vH5D01Ai6-R9ixXKS89y0mq3k3akE1BHEK5p-dfHqLgeOQK1mCbnkFjV9za2AAxnqKg2aBbk713UbJXitAgiwE49IlEGn-vQdgT9lLkuDnTbtY3BkSr5FgGAuyWUUvlJPHQp3jIMeoWdMOcY9V7Q6rLlEtYQ3n_jbak5Dp8Zw4BgCJPHfkVsQUAMXfg-fbIBt008cAiRSUmJ1ru5Y7QIP8nSX0" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 pr-6">
                <h4 className="font-headline text-lg font-bold mb-2">Pallet In/Out Storage</h4>
                <p className="text-on-surface-variant text-xs font-body">Automated replenishment and retrieval for high-density racking.</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale brightness-75" alt="busy logistics dock area with autonomous vehicles loading and unloading pallets from trucks under blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDirs-zeOCCSF3P4vp5m4pTQxrN4pMReaAw2dyhn0T3U4RlYzIR0qLekalpbifUikistcnoYOYpprFPjjokcxt9tF3va472phnavGNBuF64fRlFXqUTZI09l1zQFPF2pv_wmguxSQIGH71gaeLqf4tgHVAU0Q55nIXg8pkAoOMsHZLIPqYeLs8jQk_GM7GbAYeEKoSpB5fQRY41lJLeRZUCvn6f3ePGqXn3FMdqv3-pZ69WNBSKSnIT_XG8bRJvGCV66N1JEvloNzg" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 pr-6">
                <h4 className="font-headline text-lg font-bold mb-2">Cross-docking</h4>
                <p className="text-on-surface-variant text-xs font-body">Rapid material transfer from inbound to outbound with zero dwell time.</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale brightness-75" alt="robotic production line assembly with agv forklifts delivering materials to automated workstations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEr-cTQ-GdGZAUe_ao53Obf3d4QxkAshmcTHMahBCuJOCy4xfjnQhtg-LbDRN1Ye0L5pSvzt3L_KeLyvxo5DcQIoKZZepFcdh1te9bXTVld8MyojJiKtdvDTH4pYNDVAEqLBTCZy-1oClsbDq-OUqwVge5qTina01iC_tk42IeVgbuSfyuP0MKfW_1-rM-vLbmJBg-KHXXDgVMId0dN7p957CTiJSw_49x04xyII4lMAd4JllyVJTWGt_K9sWFkUQDo6tpc8Qq5pU" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 pr-6">
                <h4 className="font-headline text-lg font-bold mb-2">Line Feeding</h4>
                <p className="text-on-surface-variant text-xs font-body">Just-in-time material supply to manufacturing lines to reduce inventory.</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale brightness-75" alt="interior of a cold storage facility with frosty atmosphere and agv forklifts operating in low temperatures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqOY9qK3_uvvfY9UpNoKaak78zPsAy1voerEBFnXK46AbWi3ss9ZYcz1NxiorydS8cWTQhwWL9ANQBIKk0HJNdS0Uv_UAvSOHNyA5_j4-wtMV0yD0lHWZJQt7VN3voYBwf8EWfRw6huV3iTxDF0In3bGMRqgCpQKtKl2UtsWitXli2LFEh4PpTZdtAwUdSmFcxD9TEkrnYl2u8CdS29DGOpGdrfIw3KG-9SBocIcEuUV1ajYshEIsFBt2dtBaOpvaMR0xRhmEew4Q" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 pr-6">
                <h4 className="font-headline text-lg font-bold mb-2">Cold Storage</h4>
                <p className="text-on-surface-variant text-xs font-body">Optimized performance in temperatures down to -25°C with specialized hardware.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Features (Technical Highlight) */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-12">
              <div className="pl-6 border-l-2 border-outline-variant/30">
                <h4 className="font-headline text-lg text-tertiary mb-2">Laser SLAM + 3D Vision</h4>
                <p className="text-on-surface-variant text-sm">Dual-layer navigation provides industry-leading spatial awareness and dynamic path planning.</p>
              </div>
              <div className="pl-6 border-l-2 border-outline-variant/30">
                <h4 className="font-headline text-lg text-primary mb-2">Auto Fork Adjustment</h4>
                <p className="text-on-surface-variant text-sm">Intelligent width control to accommodate various pallet standards (EU, US, custom) without downtime.</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-tertiary/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border border-primary/20"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="font-headline text-4xl font-bold">360°</span>
                  <span className="text-[0.6rem] uppercase tracking-widest text-outline">Detection Field</span>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="pl-6 border-l-2 border-outline-variant/30">
                <h4 className="font-headline text-lg text-primary mb-2">WMS / MES Integration</h4>
                <p className="text-on-surface-variant text-sm">Native connectivity via open APIs to existing enterprise software stacks.</p>
              </div>
              <div className="pl-6 border-l-2 border-outline-variant/30">
                <h4 className="font-headline text-lg text-tertiary mb-2">Remote Monitoring</h4>
                <p className="text-on-surface-variant text-sm">Full fleet control via LCCS (Lyne Cloud Control System) with real-time health diagnostics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. System Integration (Diagrammatic) */}
      <section className="py-24 bg-surface px-8 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-headline text-3xl font-bold mb-4">Enterprise Connectivity</h2>
          <p className="text-on-surface-variant mb-16">The RobotLyne Ecosystem bridges the gap between physical handling and digital management.</p>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            <div className="order-1 md:order-2 z-10">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full actuator-btn flex items-center justify-center shadow-[0_0_50px_rgba(0,218,243,0.2)]">
                <div className="text-center">
                  <p className="text-[0.6rem] font-bold uppercase tracking-wider text-on-primary">Core Intelligence</p>
                  <p className="font-headline text-xl font-bold text-on-primary">LCCS</p>
                </div>
              </div>
            </div>
            <div className="order-2 md:order-1 flex flex-col gap-12 md:-mr-12">
              <div className="bg-surface-container-high px-6 py-4 rounded-sm border border-outline-variant/20">
                <p className="font-headline font-bold">ERP</p>
                <span className="text-[0.6rem] text-outline">Resource Planning</span>
              </div>
              <div className="bg-surface-container-high px-6 py-4 rounded-sm border border-outline-variant/20">
                <p className="font-headline font-bold">WMS</p>
                <span className="text-[0.6rem] text-outline">Warehouse Management</span>
              </div>
            </div>
            <div className="order-3 md:order-3 flex flex-col gap-12 md:-ml-12">
              <div className="bg-surface-container-high px-6 py-4 rounded-sm border border-outline-variant/20">
                <p className="font-headline font-bold">MES</p>
                <span className="text-[0.6rem] text-outline">Execution Systems</span>
              </div>
              <div className="bg-surface-container-high px-6 py-4 rounded-sm border border-outline-variant/20">
                <p className="font-headline font-bold">FLEET</p>
                <span className="text-[0.6rem] text-outline">Autonomous Units</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-tertiary/30 to-transparent hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto bg-surface-container-high p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-[10rem]">precision_manufacturing</span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Ready for Autonomous Precision?</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">Our engineers are ready to design a custom integration plan for your facility. Let&apos;s optimize your logistics footprint together.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
