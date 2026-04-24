'use client'
import { useEffect, useState } from 'react'

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handler = () => setIsOpen(true)
    window.addEventListener('open-contact-modal', handler)
    return () => window.removeEventListener('open-contact-modal', handler)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-[#0a1628] border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-on-surface tracking-tight">Get In Touch</h2>
            <p className="text-sm text-slate-400 mt-1">Our team responds within 24 hours.</p>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-on-surface transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="px-8 pb-8">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="text-tertiary text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-on-surface mb-2">Message Sent!</h3>
              <p className="text-slate-400">Thanks! We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full bg-[#0f1c2c] border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-500 focus:outline-none focus:border-tertiary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">Company Name</label>
                <input
                  type="text"
                  placeholder="Acme Logistics Inc."
                  className="w-full bg-[#0f1c2c] border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-500 focus:outline-none focus:border-tertiary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">Email <span className="text-tertiary">*</span></label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-[#0f1c2c] border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-500 focus:outline-none focus:border-tertiary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#0f1c2c] border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-500 focus:outline-none focus:border-tertiary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">Message / What can we help you with?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your warehouse automation needs..."
                  className="w-full bg-[#0f1c2c] border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-500 focus:outline-none focus:border-tertiary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-tertiary text-on-tertiary py-3.5 rounded-lg font-bold uppercase tracking-tight hover:scale-[1.02] active:scale-95 transition-all mt-2"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
