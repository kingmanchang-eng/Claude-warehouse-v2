import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function MaterialHandlingPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[serviceSchema({ name: "Material Handling Automation", description: "AGV-based logistics and transport solutions for manufacturing and distribution centers.", url: "/solutions/material-handling", serviceType: "Material Handling" }), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Solutions", url: "/solutions/asrs" }, { name: "Material Handling", url: "/solutions/material-handling" }])]} />
      {/* Section 1: Hero */}
      <section className="relative min-h-[870px] flex items-center px-10 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent z-10"></div>
          <img
            alt="Automated warehouse"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMEYtiX0DW3wJfGeD-d6yC_6V6BRaAhCJLuAU2a5WmfNQWvdFO3s8-jQkGN_6NT672yVtyC776BOrPDZrYqWrqSm1VhwXAvrKrZ1wMpTkJUPZDDog3Qra6DwNplg-X-UMMA1iLZTFFZDSEK1Qn7rnYWoB2GNVSYOrT92nU-X83GSL8zizgKb207hjMuJZuaEWR32vm-UdntoF2ZvDlYfdcymvynvmSF4WrbcuWee0ZeSS-jEK4bloUb1kyVXvX5MtKzvTfBP3-Ja0"
          />
        </div>
        <div className="relative z-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface-container-high border-l-2 border-tertiary">
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.1em] text-tertiary font-bold">Industrial Logistics 4.0</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-none mb-8 tracking-tighter">
            Material Handling Solutions — <span className="text-primary">Intelligent Internal Logistics Automation</span>
          </h1>
          <div className="flex flex-wrap gap-12 mt-12">
            <div>
              <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-1">System Accuracy</p>
              <p className="font-display text-4xl font-bold text-tertiary">99.99%</p>
            </div>
            <div>
              <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-1">Efficiency Gain</p>
              <p className="font-display text-4xl font-bold text-primary">3-4x</p>
            </div>
            <div>
              <p className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-1">Cost Reduction</p>
              <p className="font-display text-4xl font-bold text-on-surface">-40~60%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Benefits */}
      <section className="py-24 px-10 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          <div className="bg-surface p-8 group hover:bg-surface-container-high transition-all duration-300">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-6 block">precision_manufacturing</span>
            <h3 className="font-headline text-xl mb-4">Accuracy 99.99%</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Precision-engineered sensor fusion ensuring near-zero error rates in high-density navigation.</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-high transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">bolt</span>
            <h3 className="font-headline text-xl mb-4">Efficiency 3-4x improvement</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Continuous 24/7 operation cycle with autonomous charging and intelligent pathfinding.</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-high transition-all duration-300">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-6 block">payments</span>
            <h3 className="font-headline text-xl mb-4">Labor cost -40~60%</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Optimizing human resources by automating repetitive, heavy-load transport tasks.</p>
          </div>
          <div className="bg-surface p-8 group hover:bg-surface-container-high transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">fact_check</span>
            <h3 className="font-headline text-xl mb-4">Full process coverage</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Seamless integration across receiving, storage, and dispatching modules.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Process Coverage */}
      <section className="py-24 px-10 bg-surface">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-2">End-to-End Automated Fleet Integration</h2>
          <div className="w-24 h-1 bg-tertiary"></div>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/20 hidden md:block z-0"></div>
          <div className="relative z-10 w-full md:w-1/5 bg-surface-container-low p-6 machined-edge group">
            <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-tertiary transition-colors">
              <span className="font-display font-bold text-xs">01</span>
            </div>
            <h4 className="font-headline text-lg mb-2">Receiving</h4>
            <p className="text-xs text-on-surface-variant font-body">Inbound pallet identification and automated unloading.</p>
          </div>
          <div className="relative z-10 w-full md:w-1/5 bg-surface-container-low p-6 machined-edge group">
            <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-tertiary transition-colors">
              <span className="font-display font-bold text-xs">02</span>
            </div>
            <h4 className="font-headline text-lg mb-2">Storage</h4>
            <p className="text-xs text-on-surface-variant font-body">High-density racking and buffer zone management.</p>
          </div>
          <div className="relative z-10 w-full md:w-1/5 bg-surface-container-low p-6 machined-edge group">
            <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-tertiary transition-colors">
              <span className="font-display font-bold text-xs">03</span>
            </div>
            <h4 className="font-headline text-lg mb-2">Production</h4>
            <p className="text-xs text-on-surface-variant font-body">Line-side supply and Work-In-Process transport.</p>
          </div>
          <div className="relative z-10 w-full md:w-1/5 bg-surface-container-low p-6 machined-edge group">
            <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-tertiary transition-colors">
              <span className="font-display font-bold text-xs">04</span>
            </div>
            <h4 className="font-headline text-lg mb-2">Packaging</h4>
            <p className="text-xs text-on-surface-variant font-body">Automated flow to wrapping and labeling stations.</p>
          </div>
          <div className="relative z-10 w-full md:w-1/5 bg-surface-container-low p-6 machined-edge group">
            <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-tertiary transition-colors">
              <span className="font-display font-bold text-xs">05</span>
            </div>
            <h4 className="font-headline text-lg mb-2">Shipping</h4>
            <p className="text-xs text-on-surface-variant font-body">Final dispatch sorting and loading bay delivery.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Fleet Components */}
      <section className="py-24 px-10 bg-surface-container-lowest">
        <h2 className="font-display text-2xl font-bold mb-12 uppercase tracking-widest text-on-primary-container">Fleet Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low border border-outline-variant/15 overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="AGV Forklift"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbHR7XX-GSBHR5g2kcMAj9g3_rlwX1tfvCq-G2jodAEiviAfJfwZrEQTCul2MSRFElyiXvVVluqLT_3wSAxEDkb1xWOGF3RQPQQGcy4_9cl1515E31IodP88dOVFgQzsDd9FGHWvwqj7IIZmbkqUqVgCa7oI9nrLdaXC6ZOMrckC0253ny--Gol0r7AcSc9WWjmFbZNM830GwS1t-TqQIph2uPovkiqe_HZBakVCOnXAZaIDMELHsNTKbeM7-7c7msE6SD0M9TSXQ"
              />
              <div className="absolute bottom-0 left-0 bg-tertiary px-4 py-1">
                <span className="font-label text-[0.6rem] font-bold text-on-tertiary uppercase">Model R-600</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-xl font-bold mb-2">AGV Forklift</h3>
              <p className="text-sm text-on-surface-variant mb-6">High-reach pallet handling with SLAM navigation.</p>
              <a className="text-tertiary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group" href="/products/agv-forklift">
                Technical Specs <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/15 overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="Lifting AGV"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYL0lTX9rWGqBzv0HMcvja4ilybZ9h-f--VfmgNZWa3TENGx9fdAOyQv9KtDOtHHBNqxwcoyJnVcJ46hAPM22EsOetkbeP3zKjMv4B_nctROfnrQGoV0xwFkxsalNC1dDmnHW2Mlw5ITftjMBVAw4jTAULzRAxhFmYaQz9WqiVCcQrluqu6qUWlslhckxH5rIB2rW9SKmTpEbwrPYFGH28Bacsnko5OearnqqFZxqFYRclPbsItZGDha7CVGdiAYRk4YwEOYzv7lE"
              />
              <div className="absolute bottom-0 left-0 bg-tertiary px-4 py-1">
                <span className="font-label text-[0.6rem] font-bold text-on-tertiary uppercase">Model R-1200</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-xl font-bold mb-2">Lifting AGV</h3>
              <p className="text-sm text-on-surface-variant mb-6">Compact, low-profile chassis for heavy payload transport.</p>
              <a className="text-tertiary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group" href="/products/lifting-agv">
                Technical Specs <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/15 overflow-hidden group">
            <div className="h-64 overflow-hidden relative">
              <img
                alt="AGV Roller"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnja-4RbWKC_IlIk4kk-IHHA711CvFjvEfaP9TEXlJTM6ffFpsu1MSmbYeww_7xPWXXjedxlFQyjHQwx0apMLoaUhW9LrzF8rAPEGTB-IneWhrfiQLR7E0IhtiouHFRDB_9Vr4o-Jg1xDuIEnXxmID4jHvkjj-BRb0o7NHWbqyXu4nXgi7ggqYJNh-vF5_U2N3kGOVFE7sY6IxegI8gNRYeE9jY_XWe0kKF9pY_CIzqqOCNOqdcrdYrchgj8wPjh50V1v8uHJ2RQY"
              />
              <div className="absolute bottom-0 left-0 bg-tertiary px-4 py-1">
                <span className="font-label text-[0.6rem] font-bold text-on-tertiary uppercase">Model R-1000</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-xl font-bold mb-2">AGV Roller</h3>
              <p className="text-sm text-on-surface-variant mb-6">Active roller conveyor interface for line-side integration.</p>
              <a className="text-tertiary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group" href="/products/agv-roller">
                Technical Specs <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Operational Versatility */}
      <section className="py-24 px-10 bg-surface relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-container-low -skew-x-12 translate-x-24 -z-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-12">Operational Versatility</h2>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-1 bg-tertiary self-stretch"></div>
                <div>
                  <h4 className="font-headline text-lg text-primary mb-1">Raw material feeding</h4>
                  <p className="text-sm text-on-surface-variant">Automated supply to production lines ensuring continuous uptime.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1 bg-outline-variant self-stretch"></div>
                <div>
                  <h4 className="font-headline text-lg text-on-surface mb-1">WIP transport</h4>
                  <p className="text-sm text-on-surface-variant">Intelligent routing between workstations with zero bottlenecking.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1 bg-outline-variant self-stretch"></div>
                <div>
                  <h4 className="font-headline text-lg text-on-surface mb-1">Finished goods to dispatch</h4>
                  <p className="text-sm text-on-surface-variant">Final transport to warehousing or shipping docks.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1 bg-outline-variant self-stretch"></div>
                <div>
                  <h4 className="font-headline text-lg text-on-surface mb-1">Packaging line integration</h4>
                  <p className="text-sm text-on-surface-variant">Seamless handover to automated packaging and sorting systems.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-high aspect-square p-4 border border-outline-variant/10">
              <img
                alt="Industrial app 1"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyCEfKhZTMgJ-dsMAf6DInS5u5p5FBbCJyNRNWVB0dpwZ6PNTqrkPr5B3SND1CHNNK_opqRHsFFw4Kj5w9HvK-2GDQnr3ZsEeHxgJqKgYoypwtU_h8YZXm3pWN68Jyp-zfXF1YT6KzDFTJgx3ZB4dg9wz-aN47KCmxKSCY5-0WtWJ3g3FO3l9RlhHBoMmxhre4Z70bA7OInPfYLqmjUJ41hyx5Ks3DOt1evONZM3NUrRt10cQn8EFJI6VoA-I13ZwIsU6m_X-FBHA"
              />
            </div>
            <div className="bg-surface-container-high aspect-square p-4 border border-outline-variant/10 mt-12">
              <img
                alt="Industrial app 2"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdSDMBgXszvxt9S-UHUW9Gds3lN2oTpOUs3Ft3VxLT0V82GT2Sqe_rqiyyVRMvzeIEnwQ8eCMJh7ptu4lbCxsHeXNAIoUgYR2VyFWn-O8D1JBvqonOqB-iuskZ5Z97VQdBGGhYkerI6jx_OqpUP7XwOKupwxgX-pP0zA7BlnLh8tO6Q7D9Pj7yMTZZa_9UhyDo9H5_fiw8vzoagTg-Vwln1_6vSNx8J3Y6UNE6N0s6PjbCx_Pa53odyJSBXElgjYLZowZNqj6IC60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Case Study */}
      <section className="py-24 px-10 bg-surface-container-low">
        <div className="container mx-auto px-8 industrial-glass p-12 border-l-4 border-tertiary relative">
          <div className="absolute top-8 right-8">
            <span className="material-symbols-outlined text-tertiary/20 text-9xl">factory</span>
          </div>
          <div className="relative z-10">
            <p className="font-label text-xs uppercase tracking-[0.2em] text-tertiary mb-6 font-bold">Featured Case Study</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Packaging Manufacturer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-on-surface leading-relaxed mb-8">
                  Implementing a fleet of 45 AGVs in a 150,000 sqm facility, achieving full-process automation across three production shifts.
                </p>
                <div className="flex gap-12">
                  <div>
                    <p className="font-display text-3xl font-bold">150k</p>
                    <p className="font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant">Sqm Facility</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold">45</p>
                    <p className="font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant">Active Units</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-highest p-8">
                <p className="italic text-on-surface-variant mb-6 text-sm">&quot;The integration of RobotLyne&apos;s fleet transformed our logistics from a bottleneck to our primary competitive advantage. The ROI was realized in under 18 months.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-container rounded-full"></div>
                  <div>
                    <p className="text-xs font-bold">Director of Operations</p>
                    <p className="text-[0.6rem] text-on-surface-variant uppercase">Global Packaging Corp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-32 px-10 bg-surface text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-5xl font-bold mb-6">Design Your Material Handling Solution</h2>
          <p className="text-on-surface-variant mb-12">Consult with our engineering team to develop a custom automation blueprint for your specific facility requirements.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CTAButton />
            <button className="border border-outline-variant/30 text-on-surface font-bold px-10 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-surface-container-high transition-colors">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
