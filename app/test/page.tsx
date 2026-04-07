'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Header from '@/components/Header'
import CountdownTimer from '@/components/CountdownTimer'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

const heroBgImage = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Hero%20image.png'
const imgGoal = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Post.png'
const imgBall = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Ball.png'

const BALL_R    = 55
const FRICTION  = 0.87
const FIELD_TOP = 0.56
const GOAL_X    = 0.22
const GOAL_Y    = 0.68
const LAG       = 0.13

const CONFETTI_COLORS = [
  '#CB983A','#f0c060','#e8a82e','#daa520','#ffd700',
  '#b8860b','#c8952a','#f5c518','#ffe066','#e6b830',
  '#fffde7','#fff3cc','#ffffff','#2d1f00','#1a1200',
]

// ─── Confetti canvas ──────────────────────────────────────────
function ConfettiCanvas({ active, onDone }: { active: boolean; onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const { width, height } = canvas.getBoundingClientRect()
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')!

    const particles = Array.from({ length: 380 }, () => ({
      x: width * (0.2 + Math.random() * 0.6),
      y: height * 0.55 + Math.random() * 60,
      vx: (Math.random() - 0.5) * 16,
      vy: -(Math.random() * 18 + 4),
      size: Math.random() * 10 + 4,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rect: Math.random() > 0.5,
      friction: 0.990 + Math.random() * 0.007,
      angle: Math.random() * Math.PI * 2,
      angleV: (Math.random() - 0.5) * 0.28,
      priseAngle: Math.random() * Math.PI * 2,
      priseV: 0.04 + Math.random() * 0.04,
      priseAmp: (Math.random() - 0.5) * 0.045,
    }))

    const START = performance.now()
    const DURATION = 2500
    let raf: number

    function frame() {
      const elapsed = performance.now() - START
      const fade = Math.max(0, 1 - (elapsed - DURATION * 0.55) / (DURATION * 0.45))
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        const prise = p.priseAmp + Math.cos(p.priseAngle) * 0.018
        p.priseAngle += p.priseV
        p.vy += 0.22
        p.vx += prise
        p.vx *= p.friction
        p.x += p.vx
        p.y += p.vy
        p.angle += p.angleV
        if (p.y > height + 20 || p.x < -20 || p.x > width + 20) continue
        ctx.save()
        ctx.globalAlpha = fade
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.fillStyle = p.color
        if (p.rect) {
          ctx.fillRect(-p.size / 2, -p.size * 0.28, p.size, p.size * 0.56)
        } else {
          ctx.beginPath()
          ctx.ellipse(0, 0, p.size / 2, p.size / 3.2, 0, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      }
      if (elapsed < DURATION) {
        raf = requestAnimationFrame(frame)
      } else {
        onDone()
      }
    }

    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [active, onDone])

  if (!active) return null
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-40 pointer-events-none" />
}

// ─── Liquid glass pill ────────────────────────────────────────
function GlassPill({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center', overflow:'hidden', borderRadius:'65px', padding:'16px 28px', gap:'8px', boxShadow:'0 6px 6px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1)' }}>
      <div style={{ position:'absolute', inset:0, backdropFilter:'blur(6px)', WebkitBackdropFilter:'blur(6px)', filter:'url(#glass-distortion)', overflow:'hidden', isolation:'isolate' }} />
      <div style={{ position:'absolute', inset:0, zIndex:1, background:'rgba(255,255,255,0.18)' }} />
      <div style={{ position:'absolute', inset:0, zIndex:2, borderRadius:'65px', boxShadow:'inset 2px 2px 1px 0 rgba(255,255,255,0.55), inset -1px -1px 1px 1px rgba(255,255,255,0.35)' }} />
      <div style={{ position:'relative', zIndex:3, display:'flex', flexDirection:'column', alignItems:'center', gap:'8px' }}>{children}</div>
    </div>
  )
}

// ─── Draggable ball ───────────────────────────────────────────
function DraggableBall({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [renderPos, setRenderPos] = useState({ x: -0.12, y: 0.86 })
  const [spin, setSpin]           = useState(0)
  const [dragging, setDragging]   = useState(false)
  const [confetti, setConfetti]   = useState(false)
  const [hasScored, setHasScored] = useState(false)

  const s = useRef({
    bx: -0.12, by: 0.86,
    cx: 0.5, cy: 0.86,
    vx: 0, vy: 0,
    cvx: 0, cvy: 0,
    dragging: false,
    rafId: 0,
    spin: 0,
    lastCX: 0, lastCY: 0, lastT: 0,
  })

  const loopRef     = useRef<() => void>(() => {})
  const dragLoopRef = useRef<() => void>(() => {})

  loopRef.current = () => {
    const p = s.current
    const section = sectionRef.current
    if (!section || p.dragging) return
    p.vx *= FRICTION
    p.vy *= FRICTION
    p.spin += p.vx * 1.4
    const rect = section.getBoundingClientRect()
    const rw = BALL_R / rect.width
    const rh = BALL_R / rect.height
    let nx = p.bx + p.vx / rect.width
    let ny = p.by + p.vy / rect.height
    if (nx < rw     && p.vx < 0) { nx = rw;     p.vx =  Math.abs(p.vx) * 0.42 }
    if (nx > 1 - rw && p.vx > 0) { nx = 1 - rw; p.vx = -Math.abs(p.vx) * 0.42 }
    if (ny < FIELD_TOP + rh) { ny = FIELD_TOP + rh; p.vy = Math.abs(p.vy) * 0.32 }
    if (ny > 1 - rh) { ny = 1 - rh; p.vy = -Math.abs(p.vy) * 0.22 }
    if (ny > GOAL_Y && (nx < GOAL_X || nx > 1 - GOAL_X)) {
      p.bx = nx; p.by = ny
      p.vx = 0; p.vy = 0
      setRenderPos({ x: nx, y: ny })
      setConfetti(true)
      setHasScored(true)
      return
    }
    p.bx = nx; p.by = ny
    setRenderPos({ x: nx, y: ny })
    setSpin(p.spin)
    if (Math.abs(p.vx) > 0.18 || Math.abs(p.vy) > 0.18) {
      p.rafId = requestAnimationFrame(() => loopRef.current())
    }
  }

  dragLoopRef.current = () => {
    const p = s.current
    const section = sectionRef.current
    if (!section || !p.dragging) return
    const rect = section.getBoundingClientRect()
    const rw = BALL_R / rect.width
    const rh = BALL_R / rect.height
    p.bx += (p.cx - p.bx) * LAG
    p.by += (p.cy - p.by) * LAG
    p.bx = Math.max(rw, Math.min(1 - rw, p.bx))
    p.by = Math.max(FIELD_TOP + rh, Math.min(1 - rh, p.by))
    p.spin += p.cvx * 1.8
    setRenderPos({ x: p.bx, y: p.by })
    setSpin(p.spin)
    p.rafId = requestAnimationFrame(() => dragLoopRef.current())
  }

  useEffect(() => {
    const t = setTimeout(() => {
      s.current.vx = 9
      s.current.vy = 0
      s.current.rafId = requestAnimationFrame(() => loopRef.current())
    }, 200)
    return () => { clearTimeout(t); cancelAnimationFrame(s.current.rafId) }
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    cancelAnimationFrame(s.current.rafId)
    const section = sectionRef.current
    if (!section) return
    const rect = section.getBoundingClientRect()
    const cx = (e.clientX - rect.left) / rect.width
    const cy = (e.clientY - rect.top)  / rect.height
    s.current.dragging = true
    s.current.cx = cx; s.current.cy = cy
    s.current.lastCX = cx; s.current.lastCY = cy
    s.current.lastT  = performance.now()
    s.current.cvx = 0; s.current.cvy = 0
    s.current.vx = 0;  s.current.vy  = 0
    setDragging(true)
    s.current.rafId = requestAnimationFrame(() => dragLoopRef.current())
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!s.current.dragging) return
    const section = sectionRef.current
    if (!section) return
    const rect = section.getBoundingClientRect()
    const now = performance.now()
    const dt = Math.max(8, now - s.current.lastT)
    const cx = (e.clientX - rect.left) / rect.width
    const cy = (e.clientY - rect.top)  / rect.height
    s.current.cvx = (cx - s.current.lastCX) * 16 / dt * rect.width
    s.current.cvy = (cy - s.current.lastCY) * 16 / dt * rect.height
    s.current.cx = cx; s.current.cy = cy
    s.current.lastCX = cx; s.current.lastCY = cy
    s.current.lastT = now
  }

  const onPointerUp = () => {
    if (!s.current.dragging) return
    s.current.dragging = false
    setDragging(false)
    s.current.vx = s.current.cvx * 1.4
    s.current.vy = s.current.cvy * 1.4
    s.current.rafId = requestAnimationFrame(() => loopRef.current())
  }

  const handleConfettiDone = useCallback(() => {
    setConfetti(false)
    setHasScored(false)
    s.current.bx = 0.5; s.current.by = 0.86
    s.current.vx = 0;   s.current.vy  = 0
    s.current.spin = 0
    setSpin(0)
    setRenderPos({ x: 0.5, y: 0.86 })
    setTimeout(() => {
      s.current.vx = -2.5
      s.current.rafId = requestAnimationFrame(() => loopRef.current())
    }, 120)
  }, [])

  useEffect(() => () => cancelAnimationFrame(s.current.rafId), [])

  return (
    <>
      <ConfettiCanvas active={confetti} onDone={handleConfettiDone} />
      <div className="absolute z-20 pointer-events-none select-none"
        style={{
          left: `${renderPos.x * 100}%`,
          top:  `calc(${renderPos.y * 100}% - 90px)`,
          transform: 'translateX(-50%)',
          opacity: dragging || hasScored ? 0 : 0.75,
          transition: 'opacity 300ms ease',
        }}>
        <p className="text-white text-[11px] font-medium text-center whitespace-nowrap tracking-wide"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
          drag to shoot
        </p>
      </div>
      <div className="absolute z-20 select-none touch-none"
        style={{
          left:   `calc(${renderPos.x * 100}% - 55px)`,
          top:    `calc(${renderPos.y * 100}% - 55px)`,
          width: 110, height: 110,
          cursor: dragging ? 'grabbing' : 'grab',
          filter: `drop-shadow(5px 9px 9px rgba(188,135,46,${dragging ? 0.85 : 0.55}))`,
          willChange: 'left, top',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img src={imgBall} alt="Soccer ball — drag to score" draggable={false}
          className="w-full h-full object-contain pointer-events-none"
          style={{
            transform: `scale(${dragging ? 1.1 : 1}) rotate(${spin}deg)`,
            transition: dragging ? 'transform 120ms ease' : 'transform 300ms ease',
          }} />
      </div>
    </>
  )
}

// ─── Form Modal ───────────────────────────────────────────────
function FormModal({ onClose, defaultPkg }: { onClose: () => void; defaultPkg: 0 | 1 }) {
  const { tx } = useLanguage()
  const c = tx.claim
  const [pkg, setPkg]         = useState<0 | 1>(defaultPkg)
  const [bizName, setBizName] = useState('')
  const [email, setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-[640px] rounded-[24px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-[rgba(30,28,26,0.96)] backdrop-blur-[30px] rounded-[24px] border border-[rgba(203,152,58,0.2)]" />
        <div className="relative z-10 p-10">
          <button onClick={onClose} className="absolute top-5 right-6 text-white/40 hover:text-white/80 transition-colors text-[28px] leading-none font-light" aria-label="Close">×</button>
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-[56px] mb-5">🏆</div>
              <h2 className="text-white font-bold text-[36px] tracking-tight leading-tight mb-3">{c.successTitle}</h2>
              <p className="text-white/55 text-[16px] leading-relaxed max-w-[400px] mx-auto">{c.successSub}</p>
            </div>
          ) : (
            <>
              <h2 className="text-white font-bold text-[44px] tracking-[-1.5px] leading-none text-center mb-2">{c.headline}</h2>
              <p className="text-white/55 text-[16px] text-center mb-8">{c.sub}</p>
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                <div className="bg-white/[0.04] border border-[rgba(203,152,58,0.2)] rounded-[16px] p-[38px] flex flex-col">
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.bizLabel}</label>
                  <input value={bizName} onChange={e => setBizName(e.target.value)} required placeholder={c.bizPlaceholder}
                    className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] px-4 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-[rgba(203,152,58,0.65)] transition-colors mb-[22px] w-full" />
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.emailLabel}</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder={c.emailPlaceholder}
                    className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] px-4 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-[rgba(203,152,58,0.65)] transition-colors mb-[22px] w-full" />
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.packageLabel}</label>
                  <div className="flex gap-3 mb-[30px]">
                    {c.packages.map((p, i) => (
                      <button key={i} type="button" onClick={() => setPkg(i as 0 | 1)}
                        className={`flex-1 rounded-[8px] py-[12px] px-[12px] text-left transition-all border ${pkg === i ? 'bg-[rgba(203,152,58,0.1)] border-[rgba(203,152,58,0.5)]' : 'bg-white/[0.04] border-white/[0.12]'}`}>
                        <p className={`font-semibold text-[14px] mb-1 ${pkg === i ? 'text-[#f0c060]' : 'text-white'}`}>{p.label}</p>
                        <p className={`text-[12px] ${pkg === i ? 'text-[rgba(203,152,58,0.8)]' : 'text-white/45'}`}>{p.sub}</p>
                      </button>
                    ))}
                  </div>
                  <button type="submit" className="bg-[#cb983a] hover:bg-[#d4a84a] transition-colors h-[56px] rounded-[8px] text-[#080603] font-semibold text-[15px] w-full">
                    {c.submit}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────
function TestHero({ onClaim }: { onClaim: () => void }) {
  const { tx } = useLanguage()
  const h = tx.hero
  const cta = tx.cta
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden z-[2]">
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

      <div className="fixed inset-0 z-[1]">
        <img src={heroBgImage} alt="" aria-hidden className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080603]/40" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[88px] z-10 pt-6 w-max">
        <GlassPill>
          <p className="text-white text-[14px] font-bold leading-snug text-center whitespace-pre-line">{h.deadlineBar}</p>
          <CountdownTimer />
        </GlassPill>
      </div>

      <img alt="" src={imgGoal}
        className="absolute left-[3%] bottom-[8%] w-[28vw] max-w-[380px] pointer-events-none drop-shadow-[4px_8px_12px_rgba(188,135,46,0.5)]" />
      <img alt="" src={imgGoal}
        className="absolute right-[3%] bottom-[8%] w-[28vw] max-w-[380px] pointer-events-none drop-shadow-[4px_8px_12px_rgba(188,135,46,0.5)]"
        style={{ transform: 'scaleX(-1)' }} />

      <DraggableBall sectionRef={sectionRef} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pb-32">
        <h1 className="text-white font-bold text-[56px] leading-[1.08] tracking-[-1.5px] max-w-[660px] mx-auto mt-32">
          {h.headline}
        </h1>
        <button onClick={onClaim}
          className="mt-8 bg-black text-white font-semibold text-[15px] rounded-full px-8 h-[52px] hover:bg-black/80 transition-colors duration-200">
          {cta.primary}
        </button>
      </div>
    </section>
  )
}

export default function TestPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal  = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <TestHero onClaim={openModal} />
        {modalOpen && <FormModal onClose={closeModal} defaultPkg={1} />}
      </div>
    </LanguageProvider>
  )
}
