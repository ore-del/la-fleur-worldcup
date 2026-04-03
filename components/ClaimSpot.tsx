'use client'

import { useState } from 'react'

export default function ClaimSpot() {
  const [selectedPlan, setSelectedPlan] = useState<0 | 1>(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ business: '', email: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="claim" className="relative bg-[#0a0804] py-24 px-16 flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-[#cb983a]/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#cb983a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-white font-bold text-[40px] tracking-[-1px] text-center mb-3">Spot Claimed!</h2>
        <p className="text-white/60 text-[16px] text-center max-w-md leading-relaxed">
          {"We'll reach out within 24 hours to get started. Get ready — your business is about to be World Cup ready."}
        </p>
      </section>
    )
  }

  return (
    <section id="claim" className="relative bg-[#0a0804] py-20 px-16 min-h-[670px]">
      <div className="absolute inset-0 bg-[#0a0804]" />

      <div className="relative z-10">
        <h2 className="text-white font-bold text-[56px] leading-none tracking-[-1.5px] text-center mb-3">
          Claim your spot
        </h2>
        <p className="text-white/55 text-[16px] text-center mb-10">
          {`Only 13 spots remaining. We'll follow up within 24 hours.`}
        </p>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/[0.04] border-[1.5px] border-[rgba(203,152,58,0.25)] rounded-[16px] overflow-hidden max-w-[640px] mx-auto p-[38.5px]"
        >
          {/* Business name */}
          <label className="block text-white/45 text-[10px] font-bold tracking-[1.5px] mb-2">
            BUSINESS NAME
          </label>
          <div className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] mb-5 overflow-hidden">
            <input
              type="text"
              required
              placeholder="Business name"
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
              className="w-full h-full bg-transparent px-4 text-white text-[14px] placeholder-white/30 focus:outline-none"
            />
          </div>

          {/* Email */}
          <label className="block text-white/45 text-[10px] font-bold tracking-[1.5px] mb-2">
            EMAIL ADDRESS
          </label>
          <div className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] mb-5 overflow-hidden">
            <input
              type="email"
              required
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full h-full bg-transparent px-4 text-white text-[14px] placeholder-white/30 focus:outline-none"
            />
          </div>

          {/* Package selection */}
          <label className="block text-white/45 text-[10px] font-bold tracking-[1.5px] mb-3">
            CHOOSE YOUR PACKAGE
          </label>
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button
              type="button"
              onClick={() => setSelectedPlan(0)}
              className={`rounded-[8px] h-[72px] text-left px-3 transition-all ${
                selectedPlan === 0
                  ? 'bg-[rgba(203,152,58,0.1)] border-[1.5px] border-[rgba(203,152,58,0.5)]'
                  : 'bg-white/[0.04] border border-white/12 hover:border-white/20'
              }`}
            >
              <p className={`font-semibold text-[14px] ${selectedPlan === 0 ? 'text-[#f0c060]' : 'text-white'}`}>
                World Cup Ready
              </p>
              <p className={`text-[12px] mt-1 ${selectedPlan === 0 ? 'text-[rgba(203,152,58,0.8)]' : 'text-white/45'}`}>
                $149/mo — Landing page
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPlan(1)}
              className={`rounded-[8px] h-[72px] text-left px-3 transition-all ${
                selectedPlan === 1
                  ? 'bg-[rgba(203,152,58,0.1)] border-[1.5px] border-[rgba(203,152,58,0.5)]'
                  : 'bg-white/[0.04] border border-white/12 hover:border-white/20'
              }`}
            >
              <p className={`font-semibold text-[14px] ${selectedPlan === 1 ? 'text-[#f0c060]' : 'text-white'}`}>
                Full Digital Refresh
              </p>
              <p className={`text-[12px] mt-1 ${selectedPlan === 1 ? 'text-[rgba(203,152,58,0.8)]' : 'text-white/45'}`}>
                $249/mo — Brand + page
              </p>
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#cb983a] text-[#080603] font-semibold text-[15px] h-[56px] rounded-[8px] hover:bg-[#f0c060] transition-colors"
          >
            Reserve my spot — limited availability
          </button>
        </form>
      </div>
    </section>
  )
}
