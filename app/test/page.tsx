'use client'

import Header from '@/components/Header'
import CountdownTimer from '@/components/CountdownTimer'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

// Figma assets — node 106:6040
const imgBg        = 'https://www.figma.com/api/mcp/asset/621e33e8-f608-475a-bab9-afc46ff9bc98'
const imgGoal      = 'https://www.figma.com/api/mcp/asset/1f667b3e-a6c5-4674-bfb0-155ab746e0eb'
const imgBall      = 'https://www.figma.com/api/mcp/asset/60d9e2d7-d405-49bd-a0db-e1c7355d5af1'

function TestHero() {
  const { tx } = useLanguage()
  const h = tx.hero

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#c9900a]">
      {/* Golden background scene */}
      <img
        alt=""
        src={imgBg}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      {/* Subtle dark overlay at top so header items stay legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

      {/* Deadline bar — same pattern as Hero.tsx */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[88px] z-10 pt-6">
        <div className="flex items-center gap-10 bg-black/30 border border-white/20 backdrop-blur-sm rounded-full px-6 py-4">
          <p className="text-white text-[14px] font-bold leading-snug whitespace-pre-line">
            {h.deadlineBar}
          </p>
          <CountdownTimer />
        </div>
      </div>

      {/* Left soccer goal */}
      <img
        alt=""
        src={imgGoal}
        className="absolute left-[3%] bottom-[8%] w-[28vw] max-w-[380px] pointer-events-none drop-shadow-[4px_8px_12px_rgba(188,135,46,0.5)]"
      />

      {/* Right soccer goal — mirrored */}
      <img
        alt=""
        src={imgGoal}
        className="absolute right-[3%] bottom-[8%] w-[28vw] max-w-[380px] pointer-events-none drop-shadow-[4px_8px_12px_rgba(188,135,46,0.5)]"
        style={{ transform: 'scaleX(-1)' }}
      />

      {/* Soccer ball */}
      <img
        alt=""
        src={imgBall}
        className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[110px] pointer-events-none drop-shadow-[5px_9px_9px_rgba(188,135,46,0.55)] z-10"
      />

      {/* Main copy */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pb-32">
        <h1 className="text-white font-bold text-[56px] leading-[1.08] tracking-[-1.5px] max-w-[660px] mx-auto mt-32">
          Your business, ready for a billion eyes in Toronto
        </h1>

        <button
          className="mt-8 bg-black text-white font-semibold text-[15px] rounded-full px-8 h-[52px] hover:bg-black/80 transition-colors duration-200 btn-spring btn-primary-glow"
        >
          Get my World Cup site
        </button>
      </div>
    </section>
  )
}

export default function TestPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <TestHero />
      </div>
    </LanguageProvider>
  )
}
