'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function ClaimSpot() {
  const { tx } = useLanguage()
  const c = tx.claim
  const [selectedPlan, setSelectedPlan] = useState<0 | 1>(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ business: '', email: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="claim" className="relative bg-[#0a0804] py-32 px-16 flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#cb983a]/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#cb983a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-white font-bold text-[40px] tracking-[-1px] text-center mb-3">{c.successTitle}</h2>
        <p className="text-white/60 text-[16px] text-center max-w-md leading-relaxed">{c.successSub}</p>
      </section>
    )
  }

  return (
    <section id="claim" className="relative bg-[#0a0804] py-20 px-16">
      <h2 className="text-white font-bold text-[56px] leading-none tracking-[-1.5px] text-center mb-3">{c.headline}</h2>
      <p className="text-white/55 text-[16px] text-center mb-10">{c.sub}</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white/[0.04] border-[1.5px] border-[rgba(203,152,58,0.25)] rounded-[16px] max-w-[640px] mx-auto p-[38.5px]"
      >
        <label className="block text-white/45 text-[10px] font-bold tracking-[1.5px] mb-2 uppercase">{c.bizLabel}</label>
        <div className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] mb-5 overflow-hidden focus-within:border-[#cb983a] focus-within:shadow-[0_0_0_2px_rgba(203,152,58,0.15)] transition-[border-color,box-shadow] duration-200">
          <input
            type="text" required placeholder={c.bizPlaceholder} value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className="w-full h-full bg-transparent px-4 text-white text-[14px] placeholder-white/30 focus:outline-none"
          />
        </div>

        <label className="block text-white/45 text-[10px] font-bold tracking-[1.5px] mb-2 uppercase">{c.emailLabel}</label>
        <div className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] mb-5 overflow-hidden focus-within:border-[#cb983a] focus-within:shadow-[0_0_0_2px_rgba(203,152,58,0.15)] transition-[border-color,box-shadow] duration-200">
          <input
            type="email" required placeholder={c.emailPlaceholder} value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full h-full bg-transparent px-4 text-white text-[14px] placeholder-white/30 focus:outline-none"
          />
        </div>

        <label className="block text-white/45 text-[10px] font-bold tracking-[1.5px] mb-3 uppercase">{c.packageLabel}</label>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {c.packages.map((plan, i) => (
            <button
              key={plan.label} type="button" onClick={() => setSelectedPlan(i as 0 | 1)}
              className={`btn-spring rounded-[8px] h-[72px] text-left px-3 transition-[border-color,background-color] duration-200 ${
                selectedPlan === i
                  ? 'bg-[rgba(203,152,58,0.1)] border-[1.5px] border-[rgba(203,152,58,0.5)]'
                  : 'bg-white/[0.04] border border-white/[0.12] hover:border-white/20'
              }`}
            >
              <p className={`font-semibold text-[14px] ${selectedPlan === i ? 'text-[#f0c060]' : 'text-white'}`}>{plan.label}</p>
              <p className={`text-[12px] mt-1 ${selectedPlan === i ? 'text-[rgba(203,152,58,0.8)]' : 'text-white/45'}`}>{plan.sub}</p>
            </button>
          ))}
        </div>

        <button type="submit" className="btn-spring btn-primary-glow w-full bg-[#cb983a] text-[#080603] font-semibold text-[15px] h-[56px] rounded-[8px] hover:bg-[#f0c060]">
          {c.submit}
        </button>
      </form>
    </section>
  )
}
