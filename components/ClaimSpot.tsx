'use client'

import { useState } from 'react'

export default function ClaimSpot() {
  const [selectedPlan, setSelectedPlan] = useState<'world-cup-ready' | 'full-refresh'>('full-refresh')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    category: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="claim" className="py-24 px-6 bg-[#080603]">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#CB983A]/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#CB983A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Spot Claimed!</h2>
          <p className="text-white/60 leading-relaxed">
            We received your request and will reach out within 24 hours to get started.
            Get ready — your business is about to be World Cup ready.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="claim" className="py-24 px-6 bg-[#080603]">
      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <p className="text-[#CB983A] text-xs tracking-[3px] uppercase font-medium mb-4 text-center">
          Get Started
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Claim your spot
        </h2>
        <p className="text-white/50 text-center mb-12 leading-relaxed">
          Fill out this short form and we'll reach out within 24 hours to get you started.
          Only <span className="text-[#F0C060] font-semibold">13 spots</span> remaining.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-5"
        >
          {/* Plan selection */}
          <div className="space-y-3">
            <label className="block text-white/60 text-xs tracking-[2px] uppercase font-medium">
              Select your plan
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'world-cup-ready', label: 'World Cup Ready', price: '$149/mo' },
                { id: 'full-refresh', label: 'Full Digital Refresh', price: '$249/mo' },
              ].map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlan(plan.id as typeof selectedPlan)}
                  className={`relative p-4 rounded-xl border text-left transition-all ${
                    selectedPlan === plan.id
                      ? 'border-[#CB983A] bg-[#CB983A]/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 mb-2 flex items-center justify-center ${
                      selectedPlan === plan.id ? 'border-[#CB983A]' : 'border-white/20'
                    }`}
                  >
                    {selectedPlan === plan.id && (
                      <div className="w-2 h-2 rounded-full bg-[#CB983A]" />
                    )}
                  </div>
                  <p className="text-white font-medium text-sm">{plan.label}</p>
                  <p className="text-[#F0C060] text-xs font-semibold mt-0.5">{plan.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/60 text-xs tracking-[2px] uppercase font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#CB983A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs tracking-[2px] uppercase font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="jane@business.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#CB983A] transition-colors"
              />
            </div>
          </div>

          {/* Phone + Business */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/60 text-xs tracking-[2px] uppercase font-medium mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                placeholder="+1 (416) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#CB983A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs tracking-[2px] uppercase font-medium mb-2">
                Business Name
              </label>
              <input
                type="text"
                required
                placeholder="My Business"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#CB983A] transition-colors"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-white/60 text-xs tracking-[2px] uppercase font-medium mb-2">
              Business Category
            </label>
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#CB983A] transition-colors appearance-none"
              style={{ colorScheme: 'dark' }}
            >
              <option value="" disabled>Select your industry...</option>
              <option value="hospitality">Hospitality / Restaurant</option>
              <option value="wellness">Health & Wellness</option>
              <option value="entertainment">Entertainment / Events</option>
              <option value="education">Education / Training</option>
              <option value="technology">Technology / Software</option>
              <option value="retail">Retail / E-commerce</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white/60 text-xs tracking-[2px] uppercase font-medium mb-2">
              Anything else? (optional)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us a bit about your current web presence and goals..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#CB983A] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#CB983A] text-[#080603] font-bold py-4 rounded-lg hover:bg-[#F0C060] transition-colors text-sm tracking-wide"
          >
            Reserve My Spot — Limited Availability
          </button>

          <p className="text-white/30 text-xs text-center">
            No payment required now. We'll send an invoice after your site is approved.
          </p>
        </form>
      </div>
    </section>
  )
}
