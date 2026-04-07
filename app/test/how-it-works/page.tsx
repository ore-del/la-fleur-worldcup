'use client'

import Header from '@/components/Header'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

const STEP_TOOLS = [
  'Claude, Coolors, FontShare',
  'Claude, Coolors, FontShare',
  'Figma, Google Stitch, Kling AI',
  'Claude, Vercel, GitHub',
]

function HowItWorksContent() {
  const { tx } = useLanguage()
  const h = tx.howItWorks

  return (
    <main className="min-h-screen bg-[#c8900a] pt-[88px]">
      <div className="max-w-[1184px] mx-auto px-6 py-24">
        <p className="text-[rgba(203,152,58,0.7)] text-[11px] font-bold tracking-[2px] uppercase mb-5">{h.label}</p>
        <h1 className="text-white font-bold text-[44px] tracking-[-1px] leading-tight mb-14">{h.headline}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
          {h.steps.map((step, i) => (
            <div key={i} className="relative overflow-hidden rounded-[16px] border border-[rgba(203,152,58,0.2)] min-h-[340px]">
              <div className="absolute inset-0 bg-[rgba(42,43,44,0.7)]" />
              <div className="absolute inset-0 backdrop-blur-[25px] bg-[rgba(168,168,168,0.08)] mix-blend-overlay" />
              <div className="relative z-10 p-[19px] flex flex-col min-h-[340px]">
                <p className="text-[#f0c060] font-bold text-[56px] leading-none tracking-[-2px] mb-4">{step.num}</p>
                <p className="text-white font-bold text-[16px] leading-snug mb-3">{step.title}</p>
                <p className="text-white/[0.62] text-[13px] leading-[1.55] flex-1">{step.description}</p>
                <div className="mt-6">
                  <span className="inline-flex items-center bg-white/[0.07] border border-white/[0.15] rounded-[6px] px-[10px] py-[4px] text-[10px] font-bold text-white/75 whitespace-nowrap">
                    {STEP_TOOLS[i]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default function HowItWorksPage() {
  return (
    <LanguageProvider>
      <Header />
      <HowItWorksContent />
    </LanguageProvider>
  )
}
