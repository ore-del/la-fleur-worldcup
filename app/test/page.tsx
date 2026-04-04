'use client'

import Header from '@/components/Header'
import CountdownTimer from '@/components/CountdownTimer'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

const heroBgVideo = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/main/Hero%20bg%20video.mp4'
const imgGoal = 'https://www.figma.com/api/mcp/asset/1f667b3e-a6c5-4674-bfb0-155ab746e0eb'
const imgBall = 'https://www.figma.com/api/mcp/asset/60d9e2d7-d405-49bd-a0db-e1c7355d5af1'

function GlassPill({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: '65px',
      padding: '16px 28px',
      gap: '8px',
      boxShadow: '0 6px 6px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1)',
    }}>
      {/* Blur + distortion layer */}
      <div style={{
        position: 'absolute', inset: 0,
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        filter: 'url(#glass-distortion)',
        overflow: 'hidden',
        isolation: 'isolate',
      }} />
      {/* White tint */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(255,255,255,0.18)',
      }} />
      {/* Inner shine border */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, borderRadius: '65px',
        boxShadow: 'inset 2px 2px 1px 0 rgba(255,255,255,0.55), inset -1px -1px 1px 1px rgba(255,255,255,0.35)',
      }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        {children}
      </div>
    </div>
  )
}

function TestHero() {
  const { tx } = useLanguage()
  const h = tx.hero
  const cta = tx.cta

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080603]">

      {/* Hidden SVG glass distortion filter */}
      <svg style={{ display: 'none' }} aria-hidden="true">
        <defs>
          <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves={1} seed={5} result="turbulence" />
            <feComponentTransfer in="turbulence" result="mapped">
              <feFuncR type="gamma" amplitude={1} exponent={10} offset={0.5} />
              <feFuncG type="gamma" amplitude={0} exponent={1} offset={0} />
              <feFuncB type="gamma" amplitude={0} exponent={1} offset={0.5} />
            </feComponentTransfer>
            <feGaussianBlur in="turbulence" stdDeviation={3} result="softMap" />
            <feSpecularLighting in="softMap" surfaceScale={5} specularConstant={1} specularExponent={100} lightingColor="white" result="specLight">
              <fePointLight x={-200} y={-200} z={300} />
            </feSpecularLighting>
            <feComposite in="specLight" operator="arithmetic" k1={0} k2={1} k3={1} k4={0} result="litImage" />
            <feDisplacementMap in="SourceGraphic" in2="softMap" scale={150} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Background video */}
      <video
        src={heroBgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#080603]/40" />

      {/* Deadline bar — liquid glass pill */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[88px] z-10 pt-6 w-max">
        <GlassPill>
          <p className="text-white text-[14px] font-bold leading-snug text-center" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
            {h.deadlineBar}
          </p>
          <CountdownTimer />
        </GlassPill>
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
          {h.headline}
        </h1>
        <button className="mt-8 bg-black text-white font-semibold text-[15px] rounded-full px-8 h-[52px] hover:bg-black/80 transition-colors duration-200 btn-spring btn-primary-glow">
          {cta.primary}
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
