'use client'

import CountdownTimer from './CountdownTimer'
import { useLanguage } from '@/lib/LanguageContext'

// Hero background image
const heroBgImage = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Hero%20image.png'

export default function Hero() {
  const { tx } = useLanguage()
  const h = tx.hero

  return (
    <section className="relative h-[680px] overflow-hidden bg-[#080603] pt-[88px]">
      {/* Background image */}
      <img
        src={heroBgImage}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Overlay to keep text legible */}
      <div className="absolute inset-0 bg-[#080603]/40" />

      {/* Deadline Bar — glass pill, Figma layout: text above, countdown below */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10 w-max">
        <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md border border-white/[0.15] rounded-[65px] px-6 py-4">
          <p className="text-white text-[14px] font-bold leading-snug text-center whitespace-pre-line">
            {h.deadlineBar}
          </p>
          <CountdownTimer />
        </div>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6" style={{ marginTop: '60px' }}>
        <p className="text-[#cb983a] text-xs tracking-[3px] uppercase font-medium mb-5">
          {h.label}
        </p>
        <h1 className="text-white font-bold text-[56px] leading-[1.08] tracking-[-1.5px] max-w-[900px] mx-auto">
          {h.headline}
        </h1>
        <div className="text-white/60 text-[17px] leading-[1.6] max-w-[760px] mx-auto mt-6">
          <p>{h.sub1}</p>
          <p>{h.sub2}</p>
        </div>
      </div>
    </section>
  )
}
