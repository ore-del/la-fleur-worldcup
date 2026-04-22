'use client'

import { useState, useCallback, useEffect } from 'react'
import Header from '@/components/Header'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

const STEP_TOOLS = [
  'Claude, Coolors, FontShare',
  'Figma, Google Stitch, Kling AI',
  'Claude, Vercel, GitHub',
]

// ─── Form Modal ───────────────────────────────────────────────
function FormModal({ onClose, defaultPkg }: { onClose: () => void; defaultPkg: 0 | 1 }) {
  const { tx } = useLanguage()
  const c = tx.claim
  const [pkg, setPkg]         = useState<0 | 1>(defaultPkg)
  const [bizName, setBizName] = useState('')
  const [email, setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bizName, email, pkg: c.packages[pkg].label }),
      })
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

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
              <form onSubmit={handleSubmit}>
                <div className="bg-white/[0.04] border border-[rgba(203,152,58,0.2)] rounded-[16px] p-[38px] flex flex-col">
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.bizLabel}</label>
                  <input value={bizName} onChange={e => setBizName(e.target.value)} required placeholder={c.bizPlaceholder}
                    className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] px-4 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-[rgba(203,152,58,0.65)] transition-colors mb-[22px] w-full" />
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.emailLabel}</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder={c.emailPlaceholder}
                    className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] px-4 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-[rgba(203,152,58,0.65)] transition-colors mb-[22px] w-full" />
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.packageLabel}</label>
                  <div className="flex flex-col sm:flex-row gap-3 mb-[30px]">
                    {c.packages.map((p, i) => (
                      <button key={i} type="button" onClick={() => setPkg(i as 0 | 1)}
                        className={`flex-1 rounded-[8px] py-[12px] px-[12px] text-left transition-all border ${pkg === i ? 'bg-[rgba(203,152,58,0.1)] border-[rgba(203,152,58,0.5)]' : 'bg-white/[0.04] border-white/[0.12]'}`}>
                        <p className={`font-semibold text-[14px] mb-1 ${pkg === i ? 'text-[#f0c060]' : 'text-white'}`}>{p.label}</p>
                        <p className={`text-[12px] ${pkg === i ? 'text-[rgba(203,152,58,0.8)]' : 'text-white/45'}`}>{p.sub}</p>
                      </button>
                    ))}
                  </div>
                  <button type="submit" disabled={loading}
                    className="bg-[#cb983a] hover:bg-[#d4a84a] disabled:opacity-60 transition-colors h-[56px] rounded-[8px] text-[#080603] font-semibold text-[15px] w-full">
                    {loading ? 'Sending…' : c.submit}
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

// ─── How It Works Page ─────────────────────────────────────────
function HowItWorksContent() {
  const { tx } = useLanguage()
  const h = tx.howItWorks
  const [modal, setModal] = useState(false)
  const openModal  = useCallback(() => setModal(true), [])
  const closeModal = useCallback(() => setModal(false), [])

  return (
    <>
      {/* Fixed bg — stays put on scroll and matches across pages */}
      <div className="fixed inset-0 z-[1]">
        <picture className="w-full h-full">
          <source media="(max-width: 767px)" srcSet="https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Hero%20phone%20img.png" />
          <img src="https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Hero%20image.png"
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
              <div key={i} className="rounded-[16px] border border-[rgba(203,152,58,0.2)] bg-[rgba(42,43,44,0.82)] backdrop-blur-[20px] p-[19px]">
                <p className="text-[#f0c060] font-bold text-[56px] leading-none tracking-[-2px] mb-4">{step.num}</p>
                <p className="text-white font-bold text-[16px] leading-snug mb-3">{step.title}</p>
                <p className="text-white/[0.62] text-[13px] leading-[1.55] mb-6">{step.description}</p>
                {i === 0 ? (
                  <button onClick={openModal}
                    className="inline-flex items-center bg-white/[0.07] border border-white/[0.15] rounded-[6px] px-[10px] py-[4px] text-[10px] font-bold text-white/75 underline whitespace-nowrap hover:text-white transition-colors">
                    Fill out form
                  </button>
                ) : (
                  <span className="inline-flex items-center bg-white/[0.07] border border-white/[0.15] rounded-[6px] px-[10px] py-[4px] text-[10px] font-bold text-white/75 whitespace-nowrap">
                    {STEP_TOOLS[i - 1]}
                  </span>
                )}
              </div>
            ))}
          </div>
          {/* Timeline teaser */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[16px] border border-[rgba(203,152,58,0.15)] bg-[rgba(42,43,44,0.82)] backdrop-blur-[20px] px-7 py-5">
            <div>
              <p className="text-white font-semibold text-[15px]">Already a client? See what's ahead.</p>
              <p className="text-white/40 text-[13px] mt-1">Your month-by-month deliverables, milestones, and feedback process.</p>
            </div>
            <a href="/timeline" className="shrink-0 text-[rgba(203,152,58,0.8)] hover:text-[#cb983a] font-semibold text-[13px] transition-colors whitespace-nowrap">
              View roadmap →
            </a>
          </div>

        </div>
      </main>
      {modal && <FormModal onClose={closeModal} defaultPkg={0} />}
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
