import CTAButton from '@/components/CTAButton'
import JsonLd from '@/components/JsonLd'
import { orgSchema, breadcrumbSchema } from '@/lib/jsonld'

export default function About() {
  return (
    <main className="pt-20">
      <JsonLd data={[orgSchema(), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])]} />
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Cinematic wide shot of a futuristic automated warehouse facility with robotic sorting arms and AGVs moving under atmospheric blue industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJSjzxnr6ODV52U3BIGJsvdkEscMi1siU2dp8uMz6-6KULugK-FgCdvzRyp-BJi13DDwjwCpQkq4DOzNCY5cy3Q21_W7k-8F8I1FAZnmaEWNW3JIBoLYaAB_NE1lOJF2siMQ73v0zfJQX6spVPC8SVzSxOzok59tzBAc1tG5poqFXB2f-C3bhh7H-eRjnywzY9EfCuf62UVlxw0FMDzi52QIgX1M-9w6nYPam40twSYJekXOuxx_spi0IL0gBPcfXZS5sz7QenBx0" />
          <div className="absolute inset-0 bg-surface-dim/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-surface-dim/60 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-8">
          <span className="font-label text-tertiary text-xs uppercase tracking-[0.2em] mb-4 block">Est. 2004</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-on-surface leading-tight mb-6">
            About RobotLyne &mdash; <br />
            <span className="text-primary">Pioneering Intelligent</span> <br />
            Warehouse Automation
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl">
            Redefining precision and scale in industrial logistics for over two decades.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-8 grid grid-cols-1 md:grid-cols-12 gap-12 bg-surface">
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl font-bold mb-8 text-on-surface">Precision Since Inception</h2>
          <div className="w-16 h-1 bg-tertiary mb-8"></div>
        </div>
        <div className="md:col-span-7 space-y-6">
          <p className="font-body text-lg leading-relaxed text-on-surface-variant">
            Founded in 2004 in the heart of Shenzhen&apos;s innovation district, RobotLyne began as a specialized division under <span className="text-primary font-semibold">Huizong Intelligent Equipment</span>. Our mission was clear: to engineer the most reliable autonomous systems for complex industrial environments.
          </p>
          <p className="font-body text-lg leading-relaxed text-on-surface-variant">
            With a deep-rooted expertise in intelligent mobile robots and AGV (Automated Guided Vehicle) systems, we have transformed from a local specialist into a global leader in factory logistics and warehouse management solutions. Every line of code and every mechanical joint is engineered for relentless industrial performance.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0.5 bg-outline-variant/10">
          <div className="bg-surface-container-low p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontSize: '32px' }}>public</span>
            <div className="font-display text-4xl font-bold text-on-surface">80+</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Markets</div>
          </div>
          <div className="bg-surface-container-low p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontSize: '32px' }}>verified</span>
            <div className="font-display text-4xl font-bold text-on-surface">100+</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Patents</div>
          </div>
          <div className="bg-surface-container-low p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontSize: '32px' }}>groups</span>
            <div className="font-display text-4xl font-bold text-on-surface">100+</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Employees</div>
          </div>
          <div className="bg-surface-container-low p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontSize: '32px' }}>terminal</span>
            <div className="font-display text-4xl font-bold text-on-surface">30</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Copyrights</div>
          </div>
          <div className="bg-surface-container-low p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontSize: '32px' }}>precision_manufacturing</span>
            <div className="font-display text-4xl font-bold text-on-surface">20</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Product Patents</div>
          </div>
        </div>
      </section>

      {/* Capability Statement: Asymmetric Bento */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-surface-container-low p-10 border-l-4 border-tertiary">
            <h3 className="font-display text-2xl font-bold text-on-surface mb-4">R&amp;D Supremacy</h3>
            <p className="font-body text-on-surface-variant">Over 40% of our team is dedicated to core research, focusing on SLAM navigation, fleet orchestration, and machine vision breakthroughs.</p>
          </div>
          <div className="bg-surface-container-high p-8">
            <span className="material-symbols-outlined text-primary mb-4">settings_suggest</span>
            <h4 className="font-display text-xl font-bold text-on-surface mb-2">Custom Dev</h4>
            <p className="font-body text-sm text-on-surface-variant">Tailored automation scripts for non-standard warehouse geometries.</p>
          </div>
          <div className="bg-surface-container-high p-8">
            <span className="material-symbols-outlined text-primary mb-4">support_agent</span>
            <h4 className="font-display text-xl font-bold text-on-surface mb-2">After-Sales</h4>
            <p className="font-body text-sm text-on-surface-variant">24/7 technical monitoring and global localized maintenance teams.</p>
          </div>
          <div className="md:col-span-4 bg-primary-container/30 p-10 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary mb-2">Fleet Management OS</h3>
              <p className="font-body text-on-surface max-w-xl">Our proprietary software environment controls up to 500 units simultaneously with millisecond latency.</p>
            </div>
            <CTAButton className="mt-6 md:mt-0 bg-tertiary text-on-tertiary px-10 py-4 rounded font-bold uppercase tracking-tight hover:scale-105 active:scale-95 transition-all" />
          </div>
        </div>
      </section>

      {/* Key Clients Marquee */}
      <section className="py-16 border-y border-outline-variant/10">
        <div className="px-8 mb-8">
          <h5 className="font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant text-center">Trusted By Global Giants</h5>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all px-8">
          <span className="text-3xl font-display font-black tracking-tighter text-on-surface">BYD</span>
          <span className="text-3xl font-display font-black tracking-tighter text-on-surface">DENSO</span>
          <span className="text-3xl font-display font-black tracking-tighter text-on-surface">HANS LASER</span>
          <span className="text-3xl font-display font-black tracking-tighter text-on-surface">TP-LINK</span>
          <span className="text-3xl font-display font-black tracking-tighter text-on-surface">HYTERA</span>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 px-8">
        <h2 className="font-display text-4xl font-bold mb-16 text-center">Operational Timeline</h2>
        <div className="relative container mx-auto px-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-outline-variant/20"></div>
          <div className="space-y-24">
            {/* 2004 */}
            <div className="relative flex items-center justify-between w-full">
              <div className="w-[45%] text-right pr-12">
                <div className="font-display text-2xl font-bold text-tertiary">2004</div>
                <h4 className="font-headline font-bold text-on-surface mb-2">Shenzhen Inception</h4>
                <p className="font-body text-on-surface-variant">RobotLyne established under Huizong Intelligent Equipment to pioneer mobile robotics.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-tertiary rounded-full border-4 border-surface shadow-[0_0_10px_#00DAF3]"></div>
              <div className="w-[45%]"></div>
            </div>
            {/* 2013 */}
            <div className="relative flex items-center justify-between w-full">
              <div className="w-[45%]"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-[0_0_10px_#AFC8F0]"></div>
              <div className="w-[45%] pl-12">
                <div className="font-display text-2xl font-bold text-primary">2013</div>
                <h4 className="font-headline font-bold text-on-surface mb-2">Automation Pivot</h4>
                <p className="font-body text-on-surface-variant">Full commercial launch of specialized factory logistics and warehouse delivery systems.</p>
              </div>
            </div>
            {/* 2020 */}
            <div className="relative flex items-center justify-between w-full">
              <div className="w-[45%] text-right pr-12">
                <div className="font-display text-2xl font-bold text-tertiary">2020</div>
                <h4 className="font-headline font-bold text-on-surface mb-2">National Spotlight</h4>
                <p className="font-body text-on-surface-variant">Developed critical mask automation systems during global crisis; featured by CCTV for innovation.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-tertiary rounded-full border-4 border-surface shadow-[0_0_10px_#00DAF3]"></div>
              <div className="w-[45%]"></div>
            </div>
            {/* 2026 */}
            <div className="relative flex items-center justify-between w-full">
              <div className="w-[45%]"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-[0_0_10px_#AFC8F0]"></div>
              <div className="w-[45%] pl-12">
                <div className="font-display text-2xl font-bold text-primary">2026 Projection</div>
                <h4 className="font-headline font-bold text-on-surface mb-2">Global Scale</h4>
                <p className="font-body text-on-surface-variant">Successfully delivered to 20+ countries and partnered with 100+ global manufacturers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & IP */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <h3 className="font-label text-[11px] uppercase tracking-[0.2em] text-tertiary mb-12">Certification &amp; Intellectual Property</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 border border-outline-variant/10 bg-surface flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">verified_user</span>
              <span className="font-headline font-bold">ISO 9001:2015</span>
              <span className="font-label text-[10px] text-on-surface-variant">Quality Management</span>
            </div>
            <div className="p-8 border border-outline-variant/10 bg-surface flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">workspace_premium</span>
              <span className="font-headline font-bold">High-Tech Org</span>
              <span className="font-label text-[10px] text-on-surface-variant">National Certification</span>
            </div>
            <div className="p-8 border border-outline-variant/10 bg-surface flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">copyright</span>
              <span className="font-headline font-bold">30+ Soft-Copy</span>
              <span className="font-label text-[10px] text-on-surface-variant">Algorithm IP</span>
            </div>
            <div className="p-8 border border-outline-variant/10 bg-surface flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">gavel</span>
              <span className="font-headline font-bold">Patent Pending</span>
              <span className="font-label text-[10px] text-on-surface-variant">Mechanical Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-surface text-center">
        <div className="max-w-3xl mx-auto industrial-glass p-16 rounded-sm border border-outline-variant/10">
          <h2 className="font-display text-4xl font-bold text-on-surface mb-6">Ready to Automate?</h2>
          <p className="font-body text-on-surface-variant mb-10 text-lg">Partner with RobotLyne to deploy precision robotics across your global manufacturing facilities.</p>
          <CTAButton />
        </div>
      </section>
    </main>
  )
}
