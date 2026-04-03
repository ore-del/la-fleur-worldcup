'use client'

import CountdownTimer from './CountdownTimer'
import { useLanguage } from '@/lib/LanguageContext'

const imgHeroBg = 'https://www.figma.com/api/mcp/asset/34549b6d-c89f-4bc3-b364-7fb7ec7f2eab'
const imgSparkle = 'https://www.figma.com/api/mcp/asset/81c5e386-14d9-4350-a295-685388f04967'

export default function Hero() {
  const { tx } = useLanguage()
  const h = tx.hero

  return (
    <section className="relative h-[680px] overflow-hidden bg-[#080603] pt-[88px]">
      {/* Background cityscape */}
      <div className="absolute inset-0">
        <img
          alt=""
          src={imgHeroBg}
          className="absolute w-full object-cover object-bottom opacity-60 pointer-events-none"
          style={{ height: '2210px', top: '-1328px' }}
        />
      </div>
      <div className="absolute inset-0 bg-[#080603]/40" />

      {/* Deadline Bar — top center */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
        <div className="flex items-center gap-10 bg-black/40 border border-white/15 backdrop-blur-sm rounded-full px-6 py-4">
          <p className="text-white text-[14px] font-bold leading-snug whitespace-pre-line">
            {h.deadlineBar}
          </p>
          <CountdownTimer />
        </div>
      </div>

      {/* Sparkle */}
      <img
        alt=""
        src={imgSparkle}
        className="absolute right-[285px] top-[295px] w-[85px] h-[90px] pointer-events-none z-10"
      />

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
