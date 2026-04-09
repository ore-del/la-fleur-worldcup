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
    <>
      {/* Fixed bg — stays put on scroll and matches across pages */}
      <div className="fixed inset-0 z-[1]">
        <picture className="w-full h-full">
          <source media="(max-width: 767px)" srcSet="https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Hero%20phone%20img.png" />
          <img src="https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Feature%20image%20-%20Home.png"
            alt="" aria-hidden className="w-full h-full object-cover object-[30%_center]" />
        </picture>
        <div className="absolute inset-0 bg-[#080603]/40" />
      </div>
      <main className="min-h-screen pt-[88px]">
      <div className="relative z-[2] max-w-[1184px] mx-auto px-6 py-20">
        <p className="text-[rgba(203,152,58,0.85)] text-[11px] font-bold tracking-[2px] uppercase mb-5">{h.label}</p>
        <h1 className="text-white font-bold text-[28px] md:text-[44px] tracking-[-1px] leading-tight mb-14">{h.headline}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {h.steps.map((step, i) => (
            <div key={i} className="step-card rounded-[16px] border border-[rgba(203,152,58,0.2)] bg-[rgba(42,43,44,0.82)] backdrop-blur-[20px]">
              <div className="step-card-content">
                <p className="text-[#f0c060] font-bold text-[56px] leading-none tracking-[-2px] mb-4">{step.num}</p>
                <p className="step-card-reveal text-white font-bold text-[16px] leading-snug mb-3">{step.title}</p>
                <p className="step-card-reveal text-white/[0.62] text-[13px] leading-[1.55] mb-6">{step.description}</p>
                <div className="step-card-reveal">
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
    </>

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
