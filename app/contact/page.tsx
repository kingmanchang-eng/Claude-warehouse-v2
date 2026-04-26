import JsonLd from '@/components/JsonLd'
import ContactPageForm from '@/components/ContactPageForm'
import { orgSchema, breadcrumbSchema, faqSchema } from '@/lib/jsonld'

const CONTACT_FAQS = [
  { question: "How do I contact RobotLyne for a sales inquiry?", answer: "You can reach RobotLyne by filling out the contact form on this page, or by emailing info@robotlyne.com. Our team responds within 24 hours." },
  { question: "What is the minimum order for AGV systems?", answer: "RobotLyne offers both single-unit pilots and full-fleet deployments. Contact our sales team for project-based pricing tailored to your needs." },
  { question: "How long does implementation take?", answer: "Typical deployment takes 8–16 weeks from order to go-live, including site survey, system design, installation, and staff training." },
  { question: "Does RobotLyne provide after-sales support?", answer: "Yes. RobotLyne provides full after-sales support including remote monitoring, preventive maintenance, spare parts supply, and on-site technical services." },
  { question: "Can RobotLyne integrate with our existing WMS or ERP?", answer: "Yes. The LCCS platform integrates with SAP, Oracle, Manhattan Associates, and other major WMS/ERP systems via REST API." },
]

export default function Contact() {
  return (
    <main className="pt-20">
      <JsonLd data={[orgSchema(), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]), faqSchema(CONTACT_FAQS)]} />
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-30" alt="Close-up of a high-tech robotic arm in a dimly lit industrial facility with atmospheric blue lens flares and mechanical precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbJRqwam5NJPxP_9IlmOSdpLaqp-ukSwt9LPiJvASGBrWa7gRngRAlCqH6-aUyow2UbbXYlu8C5Rt4oDQUFz93aSj9N9zrv034bomOJFv10JFNfIcHMUAaWNuYZc2dzIC8AjBsRA66uB3vpc0H5wnyLMJKbCvK-WsnjDbNlK7EhmAbXQLiqfgmu7JxPrNXPTiS7mHspuyZH7u3JBOSMkT2DpeLUuubIcylTSjcBv_4MdgZAEIhIawtwNf9UoWQyQbJtJTZAIUrxI4" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="font-label text-tertiary uppercase tracking-[0.2em] text-[0.6875rem] font-bold mb-4 block">System Connectivity Established</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6 text-on-surface">
              Contact Us — Start Your <br /><span className="text-tertiary">Automation Journey</span> Today
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Scale your industrial throughput with precision-engineered robotics. Our specialists are ready to architect your facility&apos;s future through data-driven automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-24 bg-surface px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Phone & WhatsApp */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/15 group hover:bg-surface-container-high transition-all">
              <div className="mb-6 flex justify-between items-start">
                <span className="material-symbols-outlined text-tertiary text-3xl">call</span>
                <span className="font-label text-[10px] text-outline opacity-40 uppercase tracking-widest">Channel 01</span>
              </div>
              <h3 className="font-headline text-lg font-medium mb-4 text-primary uppercase tracking-tight">Voice &amp; Mobile</h3>
              <div className="space-y-2">
                <p className="font-body text-sm font-semibold text-on-surface">+86 13510816743</p>
                <p className="font-label text-[10px] text-tertiary uppercase">WhatsApp Available</p>
              </div>
            </div>
            {/* Email */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/15 group hover:bg-surface-container-high transition-all">
              <div className="mb-6 flex justify-between items-start">
                <span className="material-symbols-outlined text-tertiary text-3xl">alternate_email</span>
                <span className="font-label text-[10px] text-outline opacity-40 uppercase tracking-widest">Channel 02</span>
              </div>
              <h3 className="font-headline text-lg font-medium mb-4 text-primary uppercase tracking-tight">Digital Inquiry</h3>
              <p className="font-body text-sm font-semibold text-on-surface">sales@robotlyne.com</p>
              <p className="font-label text-[10px] text-outline-variant uppercase mt-2">24h Response Target</p>
            </div>
            {/* Address */}
            <div className="bg-surface-container-low p-8 border border-outline-variant/15 md:col-span-2 group hover:bg-surface-container-high transition-all">
              <div className="mb-6 flex justify-between items-start">
                <span className="material-symbols-outlined text-tertiary text-3xl">location_on</span>
                <span className="font-label text-[10px] text-outline opacity-40 uppercase tracking-widest">Channel 03</span>
              </div>
              <h3 className="font-headline text-lg font-medium mb-4 text-primary uppercase tracking-tight">Global Headquarters</h3>
              <p className="font-body text-sm font-semibold text-on-surface leading-relaxed">
                101, Building 16, Longwangmiao Industrial Zone, Baishixia Community, Fuyong Street, Bao&apos;an District, Shenzhen, China
              </p>
            </div>
          </div>
          {/* Operating Hours & Socials Mini Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
            <div className="md:col-span-8 bg-surface-container-low p-8 border border-outline-variant/15 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-outline-variant">schedule</span>
                <div>
                  <h4 className="font-label text-[10px] text-outline uppercase tracking-[0.2em]">Operational Window</h4>
                  <p className="font-body text-sm text-on-surface">Mon&ndash;Fri 9:00&ndash;17:00 (GMT+8)</p>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-8">
                <a className="text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-2" href="#">
                  <span className="font-label text-[10px] uppercase tracking-widest">LinkedIn</span>
                </a>
                <a className="text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-2" href="#">
                  <span className="font-label text-[10px] uppercase tracking-widest">Facebook</span>
                </a>
                <a className="text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-2" href="#">
                  <span className="font-label text-[10px] uppercase tracking-widest">YouTube</span>
                </a>
              </div>
            </div>
            <div className="md:col-span-4 bg-tertiary/10 p-8 border border-tertiary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-tertiary">99.8%</div>
                <div className="font-label text-[9px] text-on-surface uppercase tracking-widest">Service Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Enquiry Form & Map Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form Side */}
            <div className="flex-1">
              <div className="mb-12">
                <h2 className="font-display text-4xl font-bold text-on-surface mb-4">Industrial Enquiry</h2>
                <p className="text-on-surface-variant">Submit your project requirements for a technical feasibility assessment.</p>
              </div>
              <ContactPageForm />
            </div>
            {/* Map/Visual Side */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="relative h-[400px] bg-surface-container-low border border-outline-variant/15 overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-slate-900">
                  <img className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2s]" alt="A dark-themed stylized satellite map showing Shenzhen urban grid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATREfXXg4E9lW_oiM8qRbYMJVJJtIGmenhPC4rne3O83CS4RT8FWbzkwQr7hwe5siAD5OiUJ-BASmjDT3_sgIaKM7wmwPzBK4YDhjV0q5EgpeL_F4nTh8EkhvbqoQj8eQmW6-U4KBF9D5cSRTIOXDVmV_2gbgnktCDLLC-nkrC2FVI3osfrky_IrH0o3_dLFzVoG-fwOOf_CZbckYlWVcK80SQKKdWQMCqmKt-zAvMtcC5I6D3o4YICEzSJ6u2_EdFMNGHrEa5xO0" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-tertiary rounded-full animate-pulse shadow-[0_0_10px_#00daf3]"></div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface font-bold">Node 01: Shenzhen HQ</span>
                  </div>
                </div>
              </div>
              {/* ROI CTA */}
              <div className="bg-gradient-to-br from-surface-container-high to-surface-container-lowest p-8 border border-outline-variant/15 border-l-4 border-l-tertiary">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">ROI Analysis</h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Get a Free ROI Analysis — See how much automation can save you through reduced operational latency.</p>
                <button className="flex items-center gap-3 group text-tertiary font-label text-xs font-bold uppercase tracking-widest">
                  Calculate ROI
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media visual banner */}
      <section className="py-12 px-8 bg-surface border-y border-outline-variant/15">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-16 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="font-display font-bold text-xl uppercase text-on-surface">LinkedIn</span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="font-display font-bold text-xl uppercase text-on-surface">Facebook</span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="font-display font-bold text-xl uppercase text-on-surface">YouTube</span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <span className="font-display font-bold text-xl uppercase text-on-surface">Twitter X</span>
          </div>
        </div>
      </section>
    </main>
  )
}
