'use client'

import { useState, useCallback, useEffect } from 'react'
import Header from '@/components/Header'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

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

// ─── Pricing Page ─────────────────────────────────────────────
function PricingContent() {
  const { tx } = useLanguage()
  const p = tx.pricing
  const [modal, setModal] = useState<{ open: boolean; pkg: 0 | 1 }>({ open: false, pkg: 1 })
  const openModal  = useCallback((pkg: 0 | 1) => setModal({ open: true, pkg }), [])
  const closeModal = useCallback(() => setModal(m => ({ ...m, open: false })), [])

  return (
    <>
      {/* Fixed bg — stays put on scroll and matches across pages */}
      <div className="fixed inset-0 z-[1]">
        <img src="https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Hero%20image.png"
          alt="" aria-hidden className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#080603]/40" />
      </div>
      <main className="min-h-screen pt-[88px]">
        <div className="relative z-[2] max-w-[1184px] mx-auto px-6 py-20">
          <h1 className="text-white font-bold text-[44px] leading-[1.1] tracking-[-1px] text-center mb-14 max-w-[860px] mx-auto">
            {p.headline}
          </h1>
          <div className="grid grid-cols-2 gap-9">

            {/* Standard */}
            <div className="rounded-[16px] border border-[rgba(203,152,58,0.25)] bg-[rgba(42,43,44,0.82)] backdrop-blur-[20px]">
              <div className="p-[30px] flex flex-col">
                <p className="text-white font-bold text-[24px] mb-2">{p.standardName}</p>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[#cb983a] font-bold text-[52px] tracking-[-2px] leading-none">$249</span>
                </div>
                <p className="text-white/40 text-[13px] mb-5">{p.standardBilling}</p>
                <div className="h-px bg-[rgba(203,152,58,0.12)] mb-5" />
                <p className="text-white/65 text-[14px] leading-[1.55] mb-7">{p.standardDesc}</p>
                <div className="flex flex-col gap-[14px] mb-8">
                  {p.standardFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-[#cb983a] font-bold text-[13px] leading-[1.5] shrink-0">✓</span>
                      <span className="text-white/80 text-[14px]">{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => openModal(0)}
                  className="h-[52px] w-full rounded-full bg-black text-white font-semibold text-[15px] hover:bg-black/80 transition-colors duration-200">
                  {p.standardCta}
                </button>
              </div>
            </div>

            {/* Premium */}
            <div className="rounded-[16px] border-2 border-[rgba(203,152,58,0.5)] bg-[rgba(42,43,44,0.82)] backdrop-blur-[20px] overflow-hidden">
              <div className="h-[40px] bg-[#cb983a] flex items-center justify-center">
                <span className="text-[#080603] font-semibold text-[13px]">{p.premiumBanner}</span>
              </div>
              <div className="p-[30px] flex flex-col">
                <p className="text-white font-bold text-[24px] mb-3">{p.premiumName}</p>
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#f0c060] font-bold text-[48px] tracking-[-2px] leading-none">$699</span>
                    <span className="text-white/50 text-[14px]">one-time</span>
                  </div>
                  <p className="text-white/55 text-[13px]">+ $249/mo World Cup Ready subscription</p>
                </div>
                <p className="text-white/40 text-[13px] mb-5">{p.premiumBilling}</p>
                <div className="h-px bg-[rgba(203,152,58,0.18)] mb-5" />
                <p className="text-white/65 text-[14px] leading-[1.55] mb-7">{p.premiumDesc}</p>
                <div className="flex flex-col gap-[14px] mb-8">
                  {p.premiumFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-[#f0c060] font-bold text-[13px] leading-[1.5] shrink-0">✓</span>
                      <span className="text-white/85 text-[14px]">{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => openModal(1)}
                  className="h-[52px] w-full rounded-full bg-black text-white font-semibold text-[15px] hover:bg-black/80 transition-colors duration-200">
                  {p.premiumCta}
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
      {modal.open && <FormModal onClose={closeModal} defaultPkg={modal.pkg} />}
    </>
  )
}

export default function PricingPage() {
  return (
    <LanguageProvider>
      <Header />
      <PricingContent />
    </LanguageProvider>
  )
}
