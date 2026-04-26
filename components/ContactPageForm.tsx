'use client'
import { useState } from 'react'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://kcpvsulmbpbd.usw-1.sealos.app'

interface FormData {
  first_name: string
  last_name: string
  company: string
  email: string
  country_selected: string
  industry: string
  project_type: string
  message: string
}

const EMPTY: FormData = {
  first_name: '', last_name: '', company: '', email: '',
  country_selected: 'Select Region', industry: 'Manufacturing',
  project_type: 'ASRS', message: '',
}

const inputCls = "w-full bg-surface-container p-4 border border-outline-variant/15 focus:ring-0 focus:outline-none border-l-2 border-l-tertiary text-on-surface placeholder:text-outline-variant"
const selectCls = inputCls + " appearance-none"

export default function ContactPageForm() {
  const [form, setForm]         = useState<FormData>(EMPTY)
  const [loading, setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${BACKEND_URL}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name:       form.first_name || undefined,
          last_name:        form.last_name  || undefined,
          company:          form.company    || undefined,
          email:            form.email,
          message:          form.message    || undefined,
          country_selected: form.country_selected !== 'Select Region' ? form.country_selected : undefined,
          industry:         form.industry   || undefined,
          project_type:     form.project_type || undefined,
          source:           'contact_page',
          landing_page:     typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.detail ?? `Server error ${res.status}`)
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <div className="text-tertiary text-5xl mb-6">✓</div>
        <h3 className="font-display text-2xl font-bold text-on-surface mb-3">Message Sent!</h3>
        <p className="text-on-surface-variant">Thanks! Our team will be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label text-[10px] uppercase tracking-widest text-outline">First Name</label>
          <input className={inputCls} name="first_name" value={form.first_name} onChange={handleChange} placeholder="John" type="text" />
        </div>
        <div className="space-y-2">
          <label className="font-label text-[10px] uppercase tracking-widest text-outline">Last Name</label>
          <input className={inputCls} name="last_name" value={form.last_name} onChange={handleChange} placeholder="Doe" type="text" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label text-[10px] uppercase tracking-widest text-outline">Company Name</label>
          <input className={inputCls} name="company" value={form.company} onChange={handleChange} placeholder="Enterprise Systems" type="text" />
        </div>
        <div className="space-y-2">
          <label className="font-label text-[10px] uppercase tracking-widest text-outline">
            Email Address <span className="text-tertiary">*</span>
          </label>
          <input className={inputCls} name="email" value={form.email} onChange={handleChange} placeholder="john@enterprise.com" type="email" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="font-label text-[10px] uppercase tracking-widest text-outline">Country</label>
          <select className={selectCls} name="country_selected" value={form.country_selected} onChange={handleChange}>
            <option>Select Region</option>
            <option>China</option>
            <option>USA</option>
            <option>Germany</option>
            <option>Japan</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-label text-[10px] uppercase tracking-widest text-outline">Industry</label>
          <select className={selectCls} name="industry" value={form.industry} onChange={handleChange}>
            <option>Manufacturing</option>
            <option>Logistics</option>
            <option>Automotive</option>
            <option>Healthcare</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-label text-[10px] uppercase tracking-widest text-outline">Project Type</label>
          <select className={selectCls} name="project_type" value={form.project_type} onChange={handleChange}>
            <option>ASRS</option>
            <option>Material Handling</option>
            <option>Picking</option>
            <option>Software</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label text-[10px] uppercase tracking-widest text-outline">Project Scope / Message</label>
        <textarea className={inputCls} name="message" value={form.message} onChange={handleChange} placeholder="Describe your automation objectives..." rows={4} />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded px-4 py-3">{error}</p>
      )}

      <button
        className="w-full bg-gradient-to-r from-tertiary to-primary-container text-on-secondary font-headline font-bold uppercase tracking-[0.2em] py-5 rounded-sm hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Sending…' : 'Initiate Connection'}
      </button>
    </form>
  )
}
