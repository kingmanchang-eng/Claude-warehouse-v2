'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import CTAButton from '@/components/CTAButton'

const productLinks = [
  { label: 'AGV Forklift', href: '/products/agv-forklift', desc: 'RL-FL1600 · 1600kg' },
  { label: 'Lifting AGV', href: '/products/lifting-agv', desc: 'RL-LT1000 · 600–1000kg' },
  { label: 'Storage AGV', href: '/products/storage-agv', desc: 'RL-SD005 · High-Density' },
  { label: 'AGV Roller', href: '/products/agv-roller', desc: 'RL-RC200 · Conveyor Link' },
  { label: 'Composite Mobile Robot', href: '/products/composite-mobile-robot', desc: 'RL-CR-PICK · 6-Axis Arm' },
]

const solutionLinks = [
  { label: 'ASRS', href: '/solutions/asrs', desc: 'Automated Storage & Retrieval' },
  { label: 'Material Handling', href: '/solutions/material-handling', desc: 'AGV Logistics & Transport' },
  { label: 'Intelligent Picking', href: '/solutions/picking', desc: 'AMR Picking Systems' },
  { label: 'Software / LCCS', href: '/solutions/software', desc: 'WMS · WCS · Fleet Control' },
]

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<'products' | 'solutions' | null>(null)

  const getActiveKey = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/products' || pathname.startsWith('/products/')) return 'products'
    if (pathname === '/solutions' || pathname.startsWith('/solutions/')) return 'solutions'
    if (pathname === '/case-studies') return 'case-studies'
    if (pathname === '/about') return 'about'
    if (pathname === '/contact') return 'contact'
    return ''
  }
  const activePage = getActiveKey()

  const navBase = 'text-slate-400 font-medium hover:text-blue-100 transition-colors duration-300'
  const navActive = 'text-tertiary font-bold border-b-2 border-tertiary'

  return (
    <header className="fixed top-0 w-full z-50 bg-[#061423]/80 backdrop-blur-xl shadow-sm border-b border-white/5 font-space-grotesk tracking-tight">
      <div className="flex justify-between items-center container mx-auto px-8 h-20">
        <a href="/" className="text-2xl font-bold tracking-tighter text-[#AFC8F0]">RobotLyne</a>

        <nav className="hidden md:flex items-center space-x-8">
          <a className={activePage === 'home' ? navActive : navBase} href="/">Home</a>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('products')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a
              href="/products"
              className={`flex items-center gap-1 ${activePage === 'products' ? navActive : navBase}`}
            >
              Products
              <span className="material-symbols-outlined text-base leading-none" style={{ fontSize: '16px' }}>expand_more</span>
            </a>
            {openMenu === 'products' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                <div className="bg-[#0f1c2c] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/5">
                    <span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Product Line</span>
                  </div>
                  {productLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-on-surface group-hover:text-tertiary transition-colors">{link.label}</span>
                      <span className="text-[11px] text-slate-500">{link.desc}</span>
                    </a>
                  ))}
                  <div className="px-4 py-3 border-t border-white/5">
                    <a href="/products" className="text-[11px] text-tertiary font-bold uppercase tracking-widest hover:underline">
                      View All Products →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('solutions')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a
              href="/solutions/asrs"
              className={`flex items-center gap-1 ${activePage === 'solutions' ? navActive : navBase}`}
            >
              Solutions
              <span className="material-symbols-outlined text-base leading-none" style={{ fontSize: '16px' }}>expand_more</span>
            </a>
            {openMenu === 'solutions' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                <div className="bg-[#0f1c2c] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/5">
                    <span className="text-[10px] uppercase tracking-widest text-tertiary font-bold">Solutions</span>
                  </div>
                  {solutionLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-on-surface group-hover:text-tertiary transition-colors">{link.label}</span>
                      <span className="text-[11px] text-slate-500">{link.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a className={activePage === 'case-studies' ? navActive : navBase} href="/case-studies">Case Studies</a>
          <a className={activePage === 'about' ? navActive : navBase} href="/about">About</a>
          <a className={activePage === 'contact' ? navActive : navBase} href="/contact">Contact</a>
        </nav>

        <CTAButton className="bg-tertiary px-6 py-2.5 rounded text-on-tertiary font-bold text-sm hover:scale-105 active:scale-95 transition-all whitespace-nowrap" />
      </div>
    </header>
  )
}
