import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { orgSchema, websiteSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function Home() {
  return (
    <main className="pt-20">
        <JsonLd data={[orgSchema(), websiteSchema(), breadcrumbSchema([{ name: "Home", url: "/" }])]} />
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              alt="Modern dark warehouse interior with automated storage systems and robotic shuttles in soft cinematic lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsIisSFKgi2nCruNwHz3UH0vDylFLzwjyUntvVLAQ5piCdXOPX_JqBnAXuJ_JGBWdaG-shQmvw-GV2SYfNmqb-FPFS8PYSd-zUwrc3EwVSgDG0VctbrFz-297uuxKZvQ6VYFOnnFs33TG8ySVFrEB8bYCc-6zDx1h_VdvyjxzIEC0QJZyaUREexkM7r2on3eOuGGUlKq7vEfjvnxqC9nHg-69_iX-j4WthtiEWxAWovcwfBnNB1f0FbS42gY5Ax1qUb5D3t6DZmvY"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low opacity-90"></div>
          </div>
          <div className="relative z-10 container mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-tertiary-container text-tertiary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-tertiary/30">80+ Markets</span>
                <span className="bg-tertiary-container text-tertiary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-tertiary/30">100+ Patents</span>
                <span className="bg-tertiary-container text-tertiary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-tertiary/30">Since 2004</span>
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-bold text-on-surface leading-tight mb-6 tracking-tighter">
                Warehouse <span className="text-tertiary">Automation</span> Systems
              </h1>
              <p className="font-body text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                Smart warehouse automation for efficient storage, handling, and control. Engineered for high-throughput operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton className="bg-tertiary text-on-tertiary px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-tertiary/20 hover:scale-105 active:scale-95 transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Counter Section */}
        <section className="bg-surface-container-low py-12">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-tertiary mb-1">80+</div>
                <div className="font-label text-sm text-on-surface-variant font-medium uppercase tracking-widest">Global Markets</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-tertiary mb-1">100+</div>
                <div className="font-label text-sm text-on-surface-variant font-medium uppercase tracking-widest">Invention Patents</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-tertiary mb-1">1,000+</div>
                <div className="font-label text-sm text-on-surface-variant font-medium uppercase tracking-widest">Total Employees</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-tertiary mb-1">30+</div>
                <div className="font-label text-sm text-on-surface-variant font-medium uppercase tracking-widest">Software Copyrights</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions - Bento Grid Style */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-tertiary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Expertise</span>
                <h2 className="font-display text-5xl font-bold text-on-surface tracking-tighter">Integrated Core Solutions</h2>
              </div>
              <p className="text-on-surface-variant max-w-sm mb-2">Transforming logistical operations through precision-engineered robotics and intelligent data streams.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
              {/* ASRS */}
              <a href="/solutions/asrs" className="md:col-span-7 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10">
                <img
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  alt="Close-up of a high-speed automated storage and retrieval system crane in a dense warehouse environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDELIZ7gPQTc1yFTzdx-Jvm9KxMx6JfWSqzvO3IMgVA2noUY-ZsKcGqRAJfSO5mGeWnWR9Y3_6LCQbXGoeUZZ3r-Qu4qjGh85lCK9Uln48OJnapEXsQroFLi_oHHCwdjROju-6o8bo2dj7LtuGreuUAQu8masMa8NDbd9FgN5cgcGCwNFvJi2uP6l_EMZF7JwjuOGDiuNMvNUTuYDo7IdqK-Ur1-WJd0b-6FfkrWNhXWmG8uLduCrHHb6T8WCfODfvwgLraaGHqJCs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 text-on-surface">
                  <span className="material-symbols-outlined text-4xl mb-4 text-tertiary block">inventory_2</span>
                  <h3 className="font-display text-3xl font-bold mb-4 tracking-tight">ASRS (Storage &amp; Retrieval)</h3>
                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-bold">+75%</div>
                      <div className="text-xs text-on-surface-variant">Storage Capacity</div>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div>
                      <div className="text-2xl font-bold">4x</div>
                      <div className="text-xs text-on-surface-variant">Efficiency Boost</div>
                    </div>
                  </div>
                </div>
              </a>
              {/* Software */}
              <a href="/solutions/software" className="md:col-span-5 group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/10">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-30 group-hover:grayscale-0 transition-all"
                  alt="Dashboard interface showing real-time warehouse analytics and robot tracking on multiple screens"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIxDbjTqt9Jpw82EH9vqhWzKDjGuh8-Wm38PBsLUXwNRRRw3Mg8iUlsVe5YXeWv5-MxSoQptrg8kMs8A_FfOmVcNcjSMgct2lQGaXM5tdofAmG-uEp_u8HUGhFfS_W4sPbDzAr5RTssSxVGGYVZ5OaXH9pCRuhClsLg-dwWaM5HLBRhFymXxqO8nF93Cv-HnXrkBmlTSUzTSQ4wMtiwWMSMnUHLF7NEUeUs_dxq19dRYo0pS9phJGNKCt4Z9khZ3Pt5wSsxrWUbsQ"
                />
                <div className="relative h-full flex flex-col justify-end p-10">
                  <span className="material-symbols-outlined text-4xl mb-4 text-tertiary block">terminal</span>
                  <h3 className="font-display text-3xl font-bold text-on-surface mb-2">Software / LCCS</h3>
                  <p className="text-on-surface-variant mb-6">WMS + WCS + RSS. Centralized control for full ecosystem orchestration.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-tertiary/10 rounded text-xs font-bold text-tertiary uppercase">Real-time</span>
                    <span className="px-3 py-1 bg-tertiary/10 rounded text-xs font-bold text-tertiary uppercase">Scalable</span>
                  </div>
                </div>
              </a>
              {/* Material Handling */}
              <a href="/solutions/material-handling" className="md:col-span-5 group relative overflow-hidden rounded-xl bg-surface-container-highest border border-outline-variant/10">
                <div className="p-10 flex flex-col h-full">
                  <span className="material-symbols-outlined text-4xl mb-4 text-tertiary block">conveyor_belt</span>
                  <h3 className="font-display text-3xl font-bold text-on-surface mb-4 tracking-tight">Material Handling</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-on-surface">99.99% Sorting Accuracy</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-on-surface">40-60% Cost Reduction</span>
                    </li>
                  </ul>
                  <img
                    className="mt-auto h-40 object-contain grayscale group-hover:grayscale-0 transition-all"
                    alt="Industrial robotic arm moving packages on a high-speed conveyor belt system"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC-odk1HA7wj6M_FBjSv8OIMKcc4eAt5nM9OF97k6AsJh2Sb557w83fPHxwBS8FpWcJ_XS4__ct7eeP91-Is_00y_FF6RFGoN9-9NlMJGQOnFFPStbWX8tCu0LiH2jPKFRnUZkwx4QL3b-A6H1CKa7H3yWo7HwQIfHYsAsuTcEx2cdaE-4TQKmjYOeiMNbimkRqtXlKda91rXwtKV2UwgtwXHliGcDkIYHmkUkMUmKNumG3VEDat9YLH9aMgH9eKTO-2Ld1E5wqUc"
                  />
                </div>
              </a>
              {/* Intelligent Picking */}
              <a href="/solutions/picking" className="md:col-span-7 group relative overflow-hidden rounded-xl bg-surface-container-high border border-outline-variant/10 text-on-surface">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/20 to-transparent opacity-90"></div>
                <div className="relative p-10 flex flex-col justify-center h-full">
                  <h3 className="font-display text-4xl font-bold mb-6">Intelligent Picking</h3>
                  <p className="text-on-surface-variant text-xl max-w-md mb-8">Elevate throughput with our 4th generation AMR picking solutions. Up to 4x efficiency compared to manual workflows.</p>
                  <div className="flex gap-8">
                    <div className="bg-surface-container p-4 rounded-lg border border-outline-variant/20">
                      <div className="text-3xl font-bold text-tertiary">4x</div>
                      <div className="text-sm text-on-surface-variant">Picking Rate</div>
                    </div>
                    <div className="bg-surface-container p-4 rounded-lg border border-outline-variant/20">
                      <div className="text-3xl font-bold text-tertiary">0%</div>
                      <div className="text-sm text-on-surface-variant">Error Rate</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-32 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="font-display text-5xl font-bold mb-4 tracking-tight text-on-surface">Precision Implementation</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">A data-driven 6-step framework to transition from manual operations to fully autonomous ecosystems.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-tertiary shadow-sm">
                <div className="text-tertiary/20 font-display text-4xl font-extrabold mb-4">01</div>
                <h4 className="font-bold mb-2 text-on-surface">Site Assessment</h4>
                <p className="text-xs text-on-surface-variant">Data collection and spatial analysis.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-tertiary shadow-sm">
                <div className="text-tertiary/20 font-display text-4xl font-extrabold mb-4">02</div>
                <h4 className="font-bold mb-2 text-on-surface">Solution Dev</h4>
                <p className="text-xs text-on-surface-variant">Custom engineering for unique flows.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-tertiary shadow-sm">
                <div className="text-tertiary/20 font-display text-4xl font-extrabold mb-4">03</div>
                <h4 className="font-bold mb-2 text-on-surface">ROI Analysis</h4>
                <p className="text-xs text-on-surface-variant">Payback and efficiency forecasting.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-tertiary shadow-sm">
                <div className="text-tertiary/20 font-display text-4xl font-extrabold mb-4">04</div>
                <h4 className="font-bold mb-2 text-on-surface">Manufacturing</h4>
                <p className="text-xs text-on-surface-variant">Hardware &amp; software integration.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-tertiary shadow-sm">
                <div className="text-tertiary/20 font-display text-4xl font-extrabold mb-4">05</div>
                <h4 className="font-bold mb-2 text-on-surface">Installation</h4>
                <p className="text-xs text-on-surface-variant">Deployment &amp; SAT protocols.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl border-t-4 border-tertiary shadow-sm">
                <div className="text-tertiary/20 font-display text-4xl font-extrabold mb-4">06</div>
                <h4 className="font-bold mb-2 text-on-surface">Support</h4>
                <p className="text-xs text-on-surface-variant">24/7 Monitoring &amp; training.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-32 bg-surface">
          <div className="container mx-auto px-8">
            <div className="flex justify-between items-center mb-16">
              <h2 className="font-display text-5xl font-bold tracking-tight text-on-surface">Proven Results</h2>
              <a className="text-tertiary font-bold flex items-center gap-2 group" href="/case-studies">
                View All Case Studies{' '}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-low rounded-xl overflow-hidden hover:shadow-2xl transition-shadow border border-outline-variant/10">
                <img
                  className="w-full h-56 object-cover grayscale hover:grayscale-0 transition-all"
                  alt="Professional high-tech electronics manufacturing assembly line with automated robot arms"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqrM-VWZGLuBmObIdJLJiHWdRF5FFCanEXFqNAkSwNO435WJdgiRjFIhB_tKoq-9TV9T7qZUaBRuFE_jiBUtUmUadGhTHBAyJ4tKNIb7QBNaiuOefamKh5DOFW-71MU96DMruyOBfmGYt0-XmxcTrYx_BKvM4e610aLkuz4obNER3zyqTc1ABsa_hwCoe7PT1xD29t_5Sbx2XsOuHUgCoZLr1H7InbpVB7ym3UhrJk50uVMLwGU-y1N2756WRkNiwPgDjfL2z6eco"
                />
                <div className="p-8">
                  <div className="text-tertiary font-bold text-xs uppercase mb-4 tracking-widest">Electronics Manufacturer</div>
                  <h3 className="text-xl font-bold mb-4 text-on-surface">Staff Reduction &amp; Efficiency</h3>
                  <p className="text-on-surface-variant text-sm mb-6">Optimized assembly workflow reduced headcount by 20 personnel while maintaining 24/7 output.</p>
                  <div className="pt-6 border-t border-outline-variant/30 flex justify-between">
                    <div>
                      <span className="block text-tertiary font-bold">1 Year</span>
                      <span className="text-xs text-on-surface-variant">ROI Achieved</span>
                    </div>
                    <a href="/case-studies" className="text-right text-tertiary font-display font-bold hover:underline">Case Study</a>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl overflow-hidden hover:shadow-2xl transition-shadow border border-outline-variant/10">
                <img
                  className="w-full h-56 object-cover grayscale hover:grayscale-0 transition-all"
                  alt="Interior of a modern high-density automated warehouse showing mini-load storage racks"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARg-oRXvB-2u3aIzKiipO1Nd_xgc0Dv03yHMSlmwM-Cb-AaikF3_SMUdvteXnENQA6Qz_hom6lccZ3xfciZon4tGOO7YY5NruBVsK3p3ntbmeIvL3NOrDhzQ_5qn1tasxkYuz8hjS-yHi5vDyw_7IO5-RxdtLPc-PV5cBNJMOiEBjieNsMZjSeA89PZ9HB_prgKCqpJALPoB6ajddy5_1yCLOO9ScEzPgz5SxghFqRxS6-tbGJ1C1iV8lvqYYicc8rlXrUbzO7qCg"
                />
                <div className="p-8">
                  <div className="text-tertiary font-bold text-xs uppercase mb-4 tracking-widest">E-commerce Hub</div>
                  <h3 className="text-xl font-bold mb-4 text-on-surface">Mini Load ASRS Payback</h3>
                  <p className="text-on-surface-variant text-sm mb-6">Transitioned to automated mini-load storage resulting in ultra-fast order fulfillment cycles.</p>
                  <div className="pt-6 border-t border-outline-variant/30 flex justify-between">
                    <div>
                      <span className="block text-tertiary font-bold">11 Months</span>
                      <span className="text-xs text-on-surface-variant">Payback Period</span>
                    </div>
                    <a href="/case-studies" className="text-right text-tertiary font-display font-bold hover:underline">Case Study</a>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl overflow-hidden hover:shadow-2xl transition-shadow border border-outline-variant/10">
                <img
                  className="w-full h-56 object-cover grayscale hover:grayscale-0 transition-all"
                  alt="Large scale unit-load automated warehouse system with heavy duty pallets and robots"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuHurmpJvACg0PhXP4oSIdJgD9_1xQwFpXqS1_NpPV_qMSXodAYKn73VUfh6W92dSNhKd_Vg52RbDpWwIbVtruL1f4j8GnvpRGHmSvlx6224qMIPqE5phMVwK5QvEihNgUwVLjfhL6ZOwAr-f1gUu2_hxmRmHALxG3WeItJI2Wc3Iaxz04DxmV7xF9A1XK4uslZ9CNVQ8dyqqQzdeMPY0NmD66tGOHHMI6-Yiagm6ItgZy_c7VblGF3BGnQn-TM1SMQ060Pt8PYfM"
                />
                <div className="p-8">
                  <div className="text-tertiary font-bold text-xs uppercase mb-4 tracking-widest">Food &amp; Beverage</div>
                  <h3 className="text-xl font-bold mb-4 text-on-surface">Unit Load Capacity Shift</h3>
                  <p className="text-on-surface-variant text-sm mb-6">Doubled existing storage footprint without physical expansion through dense automation.</p>
                  <div className="pt-6 border-t border-outline-variant/30 flex justify-between">
                    <div>
                      <span className="block text-tertiary font-bold">200%</span>
                      <span className="text-xs text-on-surface-variant">Capacity Increase</span>
                    </div>
                    <a href="/case-studies" className="text-right text-tertiary font-display font-bold hover:underline">Case Study</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 bg-surface-container-high/50">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="whitespace-nowrap font-display text-2xl font-bold text-on-surface-variant">Trusted by Global Leaders</div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-12 w-full opacity-60 grayscale hover:grayscale-0 transition-all text-on-surface">
                <div className="flex justify-center items-center font-bold text-2xl">BYD</div>
                <div className="flex justify-center items-center font-bold text-2xl">DENSO</div>
                <div className="flex justify-center items-center font-bold text-2xl">Hans Laser</div>
                <div className="flex justify-center items-center font-bold text-2xl">TP-Link</div>
                <div className="flex justify-center items-center font-bold text-2xl">Hytera</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-32 px-8">
          <div className="container mx-auto relative overflow-hidden rounded-3xl bg-surface-container-high border border-outline-variant/10 p-16 md:p-24 text-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 blur-[100px]"></div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-on-surface mb-8 tracking-tighter">Ready to Automate Your Warehouse?</h2>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12">Join hundreds of global enterprises optimizing their supply chain with RobotLyne. Start your free consultation today.</p>
              <CTAButton />
            </div>
          </div>
        </section>
    </main>
  )
}
