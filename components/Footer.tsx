export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 w-full pt-20 pb-10">
      <div className="container mx-auto px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        <div className="col-span-2">
          <span className="text-xl font-bold font-space-grotesk text-blue-200 mb-4 block">RobotLyne</span>
          <p className="text-slate-500 text-sm max-w-xs mb-8">
            Empowering industries through precise automation and kinetic intelligent systems since 2004.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-tertiary transition-colors">language</span>
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-tertiary transition-colors">hub</span>
            <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-tertiary transition-colors">mail</span>
          </div>
        </div>
        <div>
          <h5 className="text-blue-200 font-semibold mb-6">Solutions</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="/solutions/asrs">ASRS Systems</a></li>
            <li><a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="/solutions/picking">AMR Robotics</a></li>
            <li><a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="/solutions/material-handling">Conveyor Logic</a></li>
            <li><a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="/solutions/software">WMS Software</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-blue-200 font-semibold mb-6">Company</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="/about">About Us</a></li>
            <li><a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="/about">Careers</a></li>
            <li><a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="/about">Global Locations</a></li>
            <li><a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="/contact">Support Center</a></li>
          </ul>
        </div>
        <div className="col-span-2">
          <h5 className="text-blue-200 font-semibold mb-6">Subscribe</h5>
          <p className="text-slate-500 text-sm mb-4">Get the latest automation insights.</p>
          <div className="flex gap-2">
            <input
              className="bg-surface-container border border-outline-variant/20 text-on-surface rounded px-4 py-2 w-full text-sm focus:ring-1 focus:ring-tertiary outline-none"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-tertiary text-on-tertiary px-4 py-2 rounded text-sm font-bold">Send</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-slate-500 text-sm">© 2024 RobotLyne Automation. All rights reserved.</span>
        <div className="flex gap-8">
          <a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
          <a className="text-slate-500 text-sm hover:text-slate-300 transition-colors" href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  )
}
