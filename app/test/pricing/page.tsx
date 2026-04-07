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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-[640px] rounded-[24px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-[rgba(42,43,44,0.9)]" />
        <div className="absolute inset-0 backdrop-blur-[30px] bg-[rgba(168,168,168,0.05)] mix-blend-overlay" />
        <div className="absolute inset-0 rounded-[24px] border border-[rgba(203,152,58,0.2)]" />
        <div className="relative z-10 p-10">
          <button onClick={onClose}
            className="absolute top-5 right-6 text-white/40 hover:text-white/80 transition-colors text-[28px] leading-none font-light"
            aria-label="Close">×</button>

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
                <div className="bg-white/[0.03] border border-[rgba(203,152,58,0.2)] rounded-[16px] p-[38px] flex flex-col gap-0">
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.bizLabel}</label>
                  <input value={bizName} onChange={e => setBizName(e.target.value)} required
                    placeholder={c.bizPlaceholder}
                    className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] px-4 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-[rgba(203,152,58,0.65)] transition-colors mb-[22px] w-full" />
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.emailLabel}</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} required type="email"
                    placeholder={c.emailPlaceholder}
                    className="bg-white/[0.06] border border-[rgba(203,152,58,0.3)] rounded-[8px] h-[48px] px-4 text-[14px] text-white placeholder:text-white/30 outline-none focus:border-[rgba(203,152,58,0.65)] transition-colors mb-[22px] w-full" />
                  <label className="block text-[10px] font-bold text-white/45 tracking-[1.5px] mb-[10px]">{c.packageLabel}</label>
                  <div className="flex gap-3 mb-[30px]">
                    {c.packages.map((p, i) => (
                      <button key={i} type="button" onClick={() => setPkg(i as 0 | 1)}
                        className={`flex-1 rounded-[8px] py-[12px] px-[12px] text-left transition-all border ${
                          pkg === i
                            ? 'bg-[rgba(203,152,58,0.1)] border-[rgba(203,152,58,0.5)]'
                            : 'bg-white/[0.04] border-white/[0.12]'
                        }`}>
                        <p className={`font-semibold text-[14px] mb-1 ${pkg === i ? 'text-[#f0c060]' : 'text-white'}`}>{p.label}</p>
                        <p className={`text-[12px] ${pkg === i ? 'text-[rgba(203,152,58,0.8)]' : 'text-white/45'}`}>{p.sub}</p>
                      </button>
                    ))}
                  </div>
                  <button type="submit"
                    className="bg-[#cb983a] hover:bg-[#d4a84a] active:bg-[#b8872d] transition-colors h-[56px] rounded-[8px] text-[#080603] font-semibold text-[15px] w-full">
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

// ─── Pricing Page Content ─────────────────────────────────────
function PricingContent() {
  const { tx } = useLanguage()
  const p = tx.pricing
  const [modal, setModal] = useState<{ open: boolean; pkg: 0 | 1 }>({ open: false, pkg: 1 })

  const openModal  = useCallback((pkg: 0 | 1) => setModal({ open: true, pkg }), [])
  const closeModal = useCallback(() => setModal(m => ({ ...m, open: false })), [])

  return (
    <>
      <main className="min-h-screen bg-[#d49638] pt-[88px]">
        <div className="max-w-[1184px] mx-auto px-6 py-24">
          <h1 className="text-white font-bold text-[44px] leading-[1.1] tracking-[-1px] text-center mb-14 max-w-[860px] mx-auto">
            {p.headline}
          </h1>
          <div className="flex gap-9 justify-center flex-wrap">

            {/* Standard card */}
            <div className="relative overflow-hidden rounded-[16px] border border-[rgba(203,152,58,0.25)] w-full max-w-[560px] shrink-0">
              <div className="absolute inset-0 bg-[rgba(42,43,44,0.7)]" />
              <div className="absolute inset-0 backdrop-blur-[25px] bg-[rgba(168,168,168,0.08)] mix-blend-overlay" />
              <div className="relative z-10 p-[30px] flex flex-col">
                <p className="text-white font-bold text-[24px] mb-2">{p.standardName}</p>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[#cb983a] font-bold text-[52px] tracking-[-2px] leading-none">$149</span>
                  <span className="text-white/30 text-[20px] line-through">$299</span>
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
                  className="h-[52px] w-full rounded-[8px] border border-[rgba(203,152,58,0.6)] text-[#cb983a] font-semibold text-[15px] hover:bg-[rgba(203,152,58,0.1)] transition-colors">
                  {p.standardCta}
                </button>
              </div>
            </div>

            {/* Premium card */}
            <div className="relative overflow-hidden rounded-[16px] border-2 border-[rgba(203,152,58,0.5)] w-full max-w-[560px] shrink-0">
              <div className="absolute inset-0 bg-[rgba(42,43,44,0.7)]" />
              <div className="absolute inset-0 backdrop-blur-[25px] bg-[rgba(168,168,168,0.08)] mix-blend-overlay" />
              <div className="absolute top-0 left-0 right-0 h-[40px] bg-[#cb983a] flex items-center justify-center z-20">
                <span className="text-[#080603] font-semibold text-[13px]">{p.premiumBanner}</span>
              </div>
              <div className="relative z-10 p-[30px] pt-[58px] flex flex-col">
                <p className="text-white font-bold text-[24px] mb-3">{p.premiumName}</p>
                <div className="inline-flex items-baseline gap-2 bg-[rgba(203,152,58,0.15)] border border-[rgba(203,152,58,0.4)] rounded-[8px] px-3 py-1 mb-2 w-fit">
                  <span className="text-[#f0c060] font-bold text-[48px] tracking-[-2px] leading-tight">$249</span>
                  <span className="text-white/30 text-[18px] line-through">$499</span>
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
                  className="h-[52px] w-full rounded-[8px] bg-[#cb983a] hover:bg-[#d4a84a] text-[#080603] font-semibold text-[15px] transition-colors">
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
