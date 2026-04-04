'use client'

import { useRef, useState, useEffect } from 'react'
import Header from '@/components/Header'
import CountdownTimer from '@/components/CountdownTimer'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

const heroBgVideo = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/main/Hero%20bg%20video.mp4'
const imgGoal = 'https://www.figma.com/api/mcp/asset/1f667b3e-a6c5-4674-bfb0-155ab746e0eb'
const imgBall = 'https://www.figma.com/api/mcp/asset/60d9e2d7-d405-49bd-a0db-e1c7355d5af1'

const BALL_R = 55          // half of 110px
const FRICTION = 0.87
const FIELD_TOP = 0.56     // ball constrained below this fraction of section height
const GOAL_X   = 0.22     // < this = left goal, > (1 - this) = right goal
const GOAL_Y   = 0.68     // must be below this to count

// ─── Liquid glass pill ────────────────────────────────────────
function GlassPill({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: 'relative', display: 'flex', flexDirection: 'column',
      alignItems: 'center', overflow: 'hidden', borderRadius: '65px',
      padding: '16px 28px', gap: '8px',
      boxShadow: '0 6px 6px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1)',
    }}>
      <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', filter: 'url(#glass-distortion)', overflow: 'hidden', isolation: 'isolate' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(255,255,255,0.18)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, borderRadius: '65px', boxShadow: 'inset 2px 2px 1px 0 rgba(255,255,255,0.55), inset -1px -1px 1px 1px rgba(255,255,255,0.35)' }} />
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        {children}
      </div>
    </div>
  )
}

// ─── Draggable soccer ball with physics ───────────────────────
function DraggableBall({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [renderPos, setRenderPos] = useState({ x: 0.5, y: 0.86 })
  const [dragging, setDragging] = useState(false)
  const [goal, setGoal] = useState<'left' | 'right' | null>(null)
  const [spin, setSpin] = useState(0)

  // All mutable physics state lives here — no stale closure issues
  const s = useRef({ x: 0.5, y: 0.86, vx: 0, vy: 0, dragging: false, lastX: 0, lastY: 0, lastT: 0, rafId: 0, spin: 0 })
  const loopRef = useRef<() => void>(() => {})

  // Keep loopRef.current fresh every render
  loopRef.current = () => {
    const p = s.current
    const section = sectionRef.current
    if (!section || p.dragging) return

    p.vx *= FRICTION
    p.vy *= FRICTION
    p.spin += p.vx * 1.2

    const rect = section.getBoundingClientRect()
    const rw = BALL_R / rect.width
    const rh = BALL_R / rect.height

    let nx = p.x + p.vx / rect.width
    let ny = p.y + p.vy / rect.height

    // Wall bounces
    if (nx < rw)     { nx = rw;     p.vx =  Math.abs(p.vx) * 0.45 }
    if (nx > 1 - rw) { nx = 1 - rw; p.vx = -Math.abs(p.vx) * 0.45 }
    if (ny < FIELD_TOP + rh) { ny = FIELD_TOP + rh; p.vy = Math.abs(p.vy) * 0.35 }
    if (ny > 1 - rh) { ny = 1 - rh; p.vy = -Math.abs(p.vy) * 0.25 }

    // Goal detection
    if (ny > GOAL_Y) {
      if (nx < GOAL_X) {
        p.x = nx; p.y = ny
        setGoal('left')
        setTimeout(() => {
          p.x = 0.5; p.y = 0.86; p.vx = 0; p.vy = 0; p.spin = 0
          setGoal(null); setSpin(0); setRenderPos({ x: 0.5, y: 0.86 })
        }, 2600)
        return
      }
      if (nx > 1 - GOAL_X) {
        p.x = nx; p.y = ny
        setGoal('right')
        setTimeout(() => {
          p.x = 0.5; p.y = 0.86; p.vx = 0; p.vy = 0; p.spin = 0
          setGoal(null); setSpin(0); setRenderPos({ x: 0.5, y: 0.86 })
        }, 2600)
        return
      }
    }

    p.x = nx; p.y = ny
    setRenderPos({ x: nx, y: ny })
    setSpin(p.spin)

    if (Math.abs(p.vx) > 0.2 || Math.abs(p.vy) > 0.2) {
      p.rafId = requestAnimationFrame(() => loopRef.current())
    }
  }

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    cancelAnimationFrame(s.current.rafId)
    s.current.dragging = true
    s.current.lastX = e.clientX
    s.current.lastY = e.clientY
    s.current.lastT = performance.now()
    s.current.vx = 0; s.current.vy = 0
    setDragging(true)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!s.current.dragging) return
    const section = sectionRef.current
    if (!section) return
    const rect = section.getBoundingClientRect()
    const now = performance.now()
    const dt = Math.max(8, now - s.current.lastT)

    // Track velocity from pointer delta
    s.current.vx = (e.clientX - s.current.lastX) * 16 / dt
    s.current.vy = (e.clientY - s.current.lastY) * 16 / dt
    s.current.lastX = e.clientX
    s.current.lastY = e.clientY
    s.current.lastT = now
    s.current.spin += s.current.vx * 0.8

    // Constrain to field area
    const rw = BALL_R / rect.width
    const rh = BALL_R / rect.height
    const nx = Math.max(rw, Math.min(1 - rw, (e.clientX - rect.left) / rect.width))
    const ny = Math.max(FIELD_TOP + rh, Math.min(1 - rh, (e.clientY - rect.top) / rect.height))
    s.current.x = nx; s.current.y = ny
    setRenderPos({ x: nx, y: ny })
    setSpin(s.current.spin)
  }

  const onPointerUp = () => {
    if (!s.current.dragging) return
    s.current.dragging = false
    setDragging(false)
    s.current.rafId = requestAnimationFrame(() => loopRef.current())
  }

  useEffect(() => () => cancelAnimationFrame(s.current.rafId), [])

  return (
    <>
      {/* GOAL overlay */}
      {goal && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
          <div
            className="text-white font-bold text-[96px] leading-none"
            style={{
              textShadow: '0 0 40px rgba(240,192,96,1), 0 0 80px rgba(203,152,58,0.8)',
              animation: 'shimmer-in 400ms var(--spring)',
            }}
          >
            GOAL!
          </div>
          <div className="text-[48px] mt-2" style={{ animation: 'shimmer-in 500ms var(--spring) 100ms both' }}>
            ⚽
          </div>
        </div>
      )}

      {/* Drag hint — only shown before first drag */}
      <div className="absolute z-20 pointer-events-none select-none"
        style={{
          left: `calc(${renderPos.x * 100}% - 55px)`,
          top: `calc(${renderPos.y * 100}% - 92px)`,
          opacity: dragging || goal ? 0 : 0.7,
          transition: 'opacity 300ms ease',
        }}>
        <p className="text-white text-[11px] font-medium text-center whitespace-nowrap tracking-wide">
          drag to shoot
        </p>
      </div>

      {/* Ball */}
      <div
        className="absolute z-20 select-none touch-none"
        style={{
          left: `calc(${renderPos.x * 100}% - 55px)`,
          top: `calc(${renderPos.y * 100}% - 55px)`,
          width: 110, height: 110,
          cursor: dragging ? 'grabbing' : 'grab',
          filter: `drop-shadow(5px 9px 9px rgba(188,135,46,${dragging ? '0.8' : '0.55'}))`,
          willChange: 'left, top',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img
          src={imgBall}
          alt="Soccer ball — drag to score"
          draggable={false}
          className="w-full h-full object-contain pointer-events-none"
          style={{
            transform: `scale(${dragging ? 1.12 : 1}) rotate(${spin}deg)`,
            transition: dragging ? 'transform 150ms ease' : 'transform 300ms ease',
          }}
        />
      </div>
    </>
  )
}

// ─── Hero section ─────────────────────────────────────────────
function TestHero() {
  const { tx } = useLanguage()
  const h = tx.hero
  const cta = tx.cta
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#080603]">

      {/* SVG glass distortion filter */}
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
      <video src={heroBgVideo} autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute inset-0 bg-[#080603]/40" />

      {/* Deadline bar */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[88px] z-10 pt-6 w-max">
        <GlassPill>
          <p className="text-white text-[14px] font-bold leading-snug text-center whitespace-pre-line"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
            {h.deadlineBar}
          </p>
          <CountdownTimer />
        </GlassPill>
      </div>

      {/* Left goal */}
      <img alt="" src={imgGoal}
        className="absolute left-[3%] bottom-[8%] w-[28vw] max-w-[380px] pointer-events-none drop-shadow-[4px_8px_12px_rgba(188,135,46,0.5)]" />
      {/* Right goal — mirrored */}
      <img alt="" src={imgGoal}
        className="absolute right-[3%] bottom-[8%] w-[28vw] max-w-[380px] pointer-events-none drop-shadow-[4px_8px_12px_rgba(188,135,46,0.5)]"
        style={{ transform: 'scaleX(-1)' }} />

      {/* Interactive ball */}
      <DraggableBall sectionRef={sectionRef} />

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
