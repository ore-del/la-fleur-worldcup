'use client'

import { useState } from 'react'

const plans = [
  {
    name: 'World Cup Ready',
    price: 149,
    originalPrice: 299,
    billing: '/mo',
    popular: false,
    features: [
      '5-section landing page',
      'World Cup campaign copy',
      'Mobile-first, fast-loading',
      'SEO setup + Google Analytics',
      'Free hosting for 6 months',
      '1 round of revisions',
    ],
  },
  {
    name: 'Full Digital Refresh',
    price: 249,
    originalPrice: 499,
    billing: '/mo',
    popular: true,
    features: [
      'Everything in World Cup Ready',
      'World Cup brand identity',
      'Campaign strategy + offer design',
      '3 social media post templates',
      'Google Business profile update',
      '2 rounds of revisions',
    ],
  },
]

export default function Pricing() {
  const [selected, setSelected] = useState(1)

  return (
    <section id="pricing" className="py-24 px-6 bg-[#080603]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-[#CB983A] text-xs tracking-[3px] uppercase font-medium mb-4 text-center">
          Pricing
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Two flexible ways to get online for the World Cup
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-16 leading-relaxed">
          Both plans are built for speed. Choose the one that fits your goals — and get live before the tournament begins.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-xl overflow-hidden cursor-pointer transition-all ${
                selected === i
                  ? 'border-2 border-[#CB983A]'
                  : 'border border-white/10 hover:border-white/20'
              }`}
              onClick={() => setSelected(i)}
            >
              {/* Popular banner */}
              {plan.popular && (
                <div className="bg-[#CB983A] text-[#080603] text-xs font-bold tracking-[2px] uppercase text-center py-2">
                  Most Popular
                </div>
              )}

              <div className="p-8 bg-white/[0.03]">
                {/* Selected indicator */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                    <p className="text-white/40 text-xs tracking-wide">Limited-time World Cup pricing</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 transition-all ${
                      selected === i ? 'border-[#CB983A] bg-[#CB983A]' : 'border-white/20'
                    }`}
                  >
                    {selected === i && (
                      <div className="w-2 h-2 rounded-full bg-[#080603]" />
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#F0C060]">${plan.price}</span>
                    <span className="text-white/40 text-sm">{plan.billing}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/30 text-sm line-through">${plan.originalPrice}/mo</span>
                    <span className="text-[#CB983A] text-xs font-semibold">
                      Save {Math.round((1 - plan.price / plan.originalPrice) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#CB983A]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#CB983A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#claim"
                  className={`block w-full text-center py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all ${
                    plan.popular
                      ? 'bg-[#CB983A] text-[#080603] hover:bg-[#F0C060]'
                      : 'border border-[#CB983A] text-[#CB983A] hover:bg-[#CB983A]/10'
                  }`}
                >
                  Claim This Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
