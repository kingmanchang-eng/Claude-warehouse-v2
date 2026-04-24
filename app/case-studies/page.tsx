import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { orgSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function CaseStudies() {
  return (
    <main className="pt-20">
      <JsonLd data={[orgSchema(), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Case Studies", url: "/case-studies" }])]} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-10 overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #00daf3 0%, transparent 70%)' }}></div>
        <div className="container mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface-container-low border-l-2 border-tertiary">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary">Industrial Proof</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-on-surface leading-none tracking-tighter mb-8 max-w-4xl">
            Customer Success Stories — Real Results from <span className="text-tertiary">Real Deployments</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-12">
            Our Kinetic Monolith architecture delivers precision at scale. Explore how RobotLyne transforms complex industrial challenges into high-efficiency automated environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-surface-container-low p-6 min-w-[200px]">
              <div className="font-display text-4xl font-bold text-primary mb-1">98.4%</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">System Uptime</div>
            </div>
            <div className="bg-surface-container-low p-6 min-w-[200px]">
              <div className="font-display text-4xl font-bold text-primary mb-1">14mo</div>
              <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Avg. ROI Period</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-10 py-8 bg-surface-container-low sticky top-20 z-40 border-b border-outline-variant/10">
        <div className="container mx-auto flex flex-wrap gap-8 items-center">
          <button className="font-label text-[11px] uppercase tracking-widest text-tertiary border-b-2 border-tertiary pb-1 transition-all">All Projects</button>
          <button className="font-label text-[11px] uppercase tracking-widest text-on-surface/50 hover:text-on-surface transition-all">ASRS</button>
          <button className="font-label text-[11px] uppercase tracking-widest text-on-surface/50 hover:text-on-surface transition-all">Material Handling</button>
          <button className="font-label text-[11px] uppercase tracking-widest text-on-surface/50 hover:text-on-surface transition-all">Picking</button>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="px-10 py-20 bg-surface">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-surface-container-low rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-high">
            <div className="h-56 relative overflow-hidden">
              <img alt="Automated Picking Warehouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzM0Oxv3ifih3AJXMnv0z6oPRbkFLGjUtSwopdUC4SvXVSJtIiF6ycyXErtBk6C2HpyLgHa0DhdYyEg7MBpGi0Ns94fkvDRM0orffysRrNKdqJvMxGWeK13vIAhqHV7FdY6PNpsvFHjlLlokf3W9uty9XOpKYWHCUFizO0yFJzKYng65J3ZYzsB_cKDSLARHLB-QaIPahiqsXtFJO51Mo1CPwfb9JY1nQlP5bmpf4s7qsvKKJKCzm7oXFz8OO3jhNZ4a7LwS7Pj-c" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-primary font-label text-[10px] uppercase px-2 py-1 tracking-wider">Picking</span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="font-display text-xl font-bold text-on-surface leading-tight mb-6">Electronics Manufacturer Warehouse Automation</h3>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Reduced 20 staff members via full picking automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Complete 1-year ROI achieved ahead of schedule</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Converted to 24/7 lights-out operations</span>
                </div>
              </div>
              <button className="group/btn w-full flex items-center justify-between font-label text-[11px] uppercase tracking-widest text-primary border border-outline-variant/20 px-4 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300">
                View Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-surface-container-low rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-high">
            <div className="h-56 relative overflow-hidden">
              <img alt="Mini Load ASRS" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSE19MdDnWBxKXGDKjv-39jp6vaRl0uGN-fexdhvQFINBFSCAMFc9guhzJGaOVKy4CnzwW53PfNm1qpCJD9hfYdNaUSrWST4-MIloz0No-wcfDGH6jvr2r08gtYNRkXuIHHv4uXyWvpUytbGBBannqTW-LTJ_xMEzV4eCtgI8rmDQ8R5I06k0oqtbZOHUnC7Sdij5N6Kj2QPGZJBbj561_wV29wf-cqZaACPi7varI-1qcBZlKXRXldLYWxjjlqkYikaFqSfH_L4w" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-primary font-label text-[10px] uppercase px-2 py-1 tracking-wider">ASRS</span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="font-display text-xl font-bold text-on-surface leading-tight mb-6">Mini Load ASRS - Electronics Assembly</h3>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Reduced 2 operators per shift for assembly kits</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">11-month payback for system deployment</span>
                </div>
              </div>
              <button className="group/btn w-full flex items-center justify-between font-label text-[11px] uppercase tracking-widest text-primary border border-outline-variant/20 px-4 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300">
                View Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-surface-container-low rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-high">
            <div className="h-56 relative overflow-hidden">
              <img alt="Unit Load ASRS" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbEPWsIIy_BkWyMufezQlR-NejngrWbIPGZyBjlqSFBIVv51ddb9L5g0fqnwjZujvau-B2YInjFDC_jDRGOE08YT3HuGJRRkkKFOinDCS7bCp5qEZgB6Zanal6H3_x_0k9PxHAIfsJv_av_479Kg0wYEEMZtTcCVsjQeY0oyxgm6HvNrQCHKj9Th6KFAimBtvPpeOPTaX61oaCt6J474Ws9u62gb0kc7Q-5M5FDg0RZSeL1SKFuaWp9V_qZuLOU37I4O10_DJYy2w" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-primary font-label text-[10px] uppercase px-2 py-1 tracking-wider">ASRS</span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="font-display text-xl font-bold text-on-surface leading-tight mb-6">Unit Load ASRS - Home Appliance</h3>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Storage capacity doubled within existing footprint</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">12-month payback on initial capital expenditure</span>
                </div>
              </div>
              <button className="group/btn w-full flex items-center justify-between font-label text-[11px] uppercase tracking-widest text-primary border border-outline-variant/20 px-4 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300">
                View Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-surface-container-low rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-high">
            <div className="h-56 relative overflow-hidden">
              <img alt="Internal Logistics Facility" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnh6gwTGe-6lPMOoIASvY2j1JiO4i4w4bId9weE6i80e6fq8fLP6ng_NDZfCCcD-uEU-C8MY5B7lK8ATuVGMEmMupibiXSi7c8Bdi3AhqO_Dv9q1b_vftXWKjeLIoPIfnsU6_ARFKi8PFWvFb_SsePfdBYz1dmyvhKhgPCmM9RLoZj9QGv0nFQlZ-wy7abPOas8LMtsNK1ng4WAyhZBsA4s--88--56koh5db8a1kKS2pk1nkuG3NzAdiNtSrfKLKSrSnWGvxt_YI" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-primary font-label text-[10px] uppercase px-2 py-1 tracking-wider">Material Handling</span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="font-display text-xl font-bold text-on-surface leading-tight mb-6">Packaging Manufacturer - Internal Logistics</h3>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">150,000 sqm facility logistics overhaul</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Full-process automation from intake to shipping</span>
                </div>
              </div>
              <button className="group/btn w-full flex items-center justify-between font-label text-[11px] uppercase tracking-widest text-primary border border-outline-variant/20 px-4 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300">
                View Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group bg-surface-container-low rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-high">
            <div className="h-56 relative overflow-hidden">
              <img alt="AGV Logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACvck_X8v3Cks6V0q9pIK2QE3yuJpz-Y71oumultiMd9sb8tR46gTWdEMsX6165f-UPnpltnf8NWNenVHzF6bb2VTi4qmvH6vB6xKH-hpKwOBUDRgSxb_alQGVT-9TPoWdENxna9DDXh_vUXRd4jOIRCVyxJ8RefmZrKrV7XTCSIJ6qKyTgrSHLXBbhpVesF74Ff5Q6dX4EW_qE3-wVckdSg84uaAJDAyiB6hcehoTT8BCkkbB-25q6ToA2_Qncyz_Ss9IHpUPEMI" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-primary font-label text-[10px] uppercase px-2 py-1 tracking-wider">Material Handling</span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="font-display text-xl font-bold text-on-surface leading-tight mb-6">AGV Smart Home Manufacturing</h3>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Line-side feeding automation for assembly efficiency</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Finished goods transport to loading docks</span>
                </div>
              </div>
              <button className="group/btn w-full flex items-center justify-between font-label text-[11px] uppercase tracking-widest text-primary border border-outline-variant/20 px-4 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300">
                View Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group bg-surface-container-low rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-high">
            <div className="h-56 relative overflow-hidden">
              <img alt="ASRS Upgrade" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA78y0QIM-DPpEmjATjXNvlswd7x0JqmX-aracRaiz6bJbv_FR1kg6hn_zeNdO-fI4A0r82JiyYP-3tYvTZTrV_NYbWtQcbYG6vGWCd84Fm29aUL04M0sEPe_w0WPqvSOPmdlWRrWF3qroKMyyTsAnJS_h4BU1P0rwUaEUzP3kauiyJoceHZ9Z8UfmK2nFTCvQuAOLBOcv15liJBDaPzAWTYeMEdvG1hpnwggEM8WMsCyOWrvTjA0K7AQekTRxyy3C1A34wESuQXF0" />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-primary font-label text-[10px] uppercase px-2 py-1 tracking-wider">ASRS</span>
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="font-display text-xl font-bold text-on-surface leading-tight mb-6">Warehouse ASRS Upgrade</h3>
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">Automated storage integration with legacy systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface-variant font-body">3-year payback inclusive of labor reduction gains</span>
                </div>
              </div>
              <button className="group/btn w-full flex items-center justify-between font-label text-[11px] uppercase tracking-widest text-primary border border-outline-variant/20 px-4 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300">
                View Details
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-10 py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(30deg, #132030 12%, transparent 12.5%, transparent 87%, #132030 87.5%, #132030), linear-gradient(150deg, #132030 12%, transparent 12.5%, transparent 87%, #132030 87.5%, #132030), linear-gradient(30deg, #132030 12%, transparent 12.5%, transparent 87%, #132030 87.5%, #132030), linear-gradient(150deg, #132030 12%, transparent 12.5%, transparent 87%, #132030 87.5%, #132030), linear-gradient(60deg, #1e2b3b 25%, transparent 25.5%, transparent 75%, #1e2b3b 75%, #1e2b3b), linear-gradient(60deg, #1e2b3b 25%, transparent 25.5%, transparent 75%, #1e2b3b 75%, #1e2b3b)', backgroundSize: '80px 140px', backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px' }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="font-label text-xs uppercase tracking-[0.4em] text-tertiary mb-6">Future-Proof Your Facility</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-on-surface mb-10 tracking-tight">Start Your Success Story</h2>
          <p className="font-body text-on-surface-variant mb-12 text-lg max-w-2xl mx-auto">
            Ready to achieve these results in your own operation? Our engineering team is standing by to design your Kinetic Monolith solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <CTAButton />
            <button className="font-label text-sm uppercase tracking-widest text-on-surface border border-outline-variant/30 px-10 py-5 hover:bg-surface-container-high transition-all">
              Download Tech Specs
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
