'use client'

import Header from '@/components/Header'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

const GOOGLE_FORM = 'https://forms.gle/4sAUKRjNfY79YP89A'
const IMG_BASE = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Project%20progress'
const IMGS = [`${IMG_BASE}/1.png`, `${IMG_BASE}/2.png`, `${IMG_BASE}/3.png`, `${IMG_BASE}/4.png`, `${IMG_BASE}/5.png`, `${IMG_BASE}/6.png`]
const HIGHLIGHTS = [false, false, true, false, false, false]

function TimelineContent() {
  const { tx } = useLanguage()
  const tl = tx.timeline

  return (
    <main className="min-h-screen pt-[88px] bg-[#080603]">
      <div className="max-w-[960px] mx-auto px-6 pt-14 pb-20">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-[rgba(203,152,58,0.85)] text-[11px] font-bold tracking-[2px] uppercase mb-5">
            {tl.label}
          </p>
          <h1 className="text-white font-bold text-[32px] md:text-[48px] tracking-[-2px] leading-[1.05] mb-5">
            {tl.headline}
          </h1>
          <p className="text-white/50 text-[15px] leading-[1.65] max-w-[520px]">
            {tl.sub}
          </p>
        </div>

        {/* Feedback model */}
        <div className="rounded-[20px] border border-[rgba(203,152,58,0.22)] bg-[rgba(203,152,58,0.05)] p-8 mb-12">
          <p className="text-[rgba(203,152,58,0.85)] text-[10px] font-bold tracking-[2px] uppercase mb-7">
            {tl.feedbackTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {tl.feedbackSteps.map((step, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.3)] flex items-center justify-center mb-1">
                  <span className="text-[#cb983a] font-bold text-[12px]">{i + 1}</span>
                </div>
                <p className="text-white font-semibold text-[14px]">{step.title}</p>
                <p className="text-white/45 text-[13px] leading-[1.55]">
                  {'descriptionBefore' in step ? (
                    <>
                      {step.descriptionBefore}
                      <a href={GOOGLE_FORM} target="_blank" rel="noopener noreferrer"
                        className="text-[rgba(203,152,58,0.8)] hover:text-[#cb983a] underline transition-colors">
                        {step.formLinkText}
                      </a>
                      {step.descriptionAfter}
                    </>
                  ) : step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly timeline */}
        <div className="flex flex-col gap-5">
          {tl.months.map((m, i) => {
            const highlight = HIGHLIGHTS[i]
            return (
              <div
                key={i}
                className={`rounded-[20px] border overflow-hidden ${
                  highlight
                    ? 'border-[rgba(240,192,96,0.35)] bg-[rgba(240,192,96,0.04)]'
                    : 'border-[rgba(203,152,58,0.15)] bg-[rgba(42,43,44,0.55)]'
                }`}
              >
                {/* Design progress image */}
                <div className="border-b border-[rgba(203,152,58,0.1)] bg-[rgba(12,10,8,0.6)]">
                  <img
                    src={IMGS[i]}
                    alt={`Design progress — ${m.name}`}
                    className="w-full h-auto block"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start gap-5 mb-4">
                    <p className={`font-bold text-[48px] leading-none tracking-[-2px] shrink-0 ${highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <div className="pt-1">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                        <p className="text-white font-bold text-[18px] leading-snug">{m.name}</p>
                        <p className="text-white/35 text-[13px]">{m.dates}</p>
                      </div>
                      <div className={`inline-flex items-center gap-2 rounded-[6px] px-3 py-[5px] ${
                        highlight
                          ? 'bg-[rgba(240,192,96,0.1)] border border-[rgba(240,192,96,0.28)]'
                          : 'bg-[rgba(203,152,58,0.07)] border border-[rgba(203,152,58,0.18)]'
                      }`}>
                        <span className={`text-[9px] font-bold tracking-[1.5px] uppercase ${highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>
                          {tl.milestoneLabel}
                        </span>
                        <span className="text-white/65 text-[12px]">{m.milestone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-white/35 text-[10px] font-bold tracking-[1.5px] uppercase mb-3">{tl.deliverablesLabel}</p>
                    <div className="flex flex-col gap-[9px]">
                      {m.deliverables.map((d, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <span className={`font-bold text-[12px] leading-[1.7] shrink-0 ${highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>✓</span>
                          <span className="text-white/70 text-[13px] leading-[1.65]">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-[9px] pt-5 border-t border-white/[0.06]">
                    <div className="flex items-start gap-3">
                      <span className="text-[12px] shrink-0 mt-[2px]">💬</span>
                      <p className="text-white/40 text-[12px] leading-[1.6]">
                        <span className="text-white/55 font-semibold">{tl.clientLabel} </span>
                        {m.clientFeedback}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[12px] shrink-0 mt-[2px]">📋</span>
                      <p className="text-white/40 text-[12px] leading-[1.6]">
                        <span className="text-white/55 font-semibold">{tl.usersLabel} </span>
                        {m.userFeedback}{' '}
                        <a href={GOOGLE_FORM} target="_blank" rel="noopener noreferrer"
                          className="text-[rgba(203,152,58,0.6)] hover:text-[#cb983a] underline transition-colors">
                          {tl.openFormLink}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Revision policy */}
        <div className="rounded-[16px] border border-white/[0.07] bg-white/[0.02] p-7 mt-8">
          <p className="text-white/35 text-[10px] font-bold tracking-[1.5px] uppercase mb-5">{tl.revisionTitle}</p>
          <div className="flex flex-col gap-[10px]">
            {tl.revisionNotes.map((note, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`font-bold text-[12px] leading-[1.7] shrink-0 ${note.pos ? 'text-[#cb983a]' : 'text-white/30'}`}>{note.icon}</span>
                <p className="text-white/50 text-[13px] leading-[1.65]">{note.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-10 text-center">
          <p className="text-white/20 text-[12px] leading-[1.8]">
            {tl.footerQuestion}{' '}
            <a href="mailto:hello@la-fleur.ca" className="text-[rgba(203,152,58,0.55)] hover:text-[#cb983a] transition-colors">
              hello@la-fleur.ca
            </a>
          </p>
          <p className="text-white/[0.12] text-[11px] mt-2">La Fleur Digital · toronto · la-fleur.digital</p>
        </div>

      </div>
    </main>
  )
}

export default function TimelinePage() {
  return (
    <LanguageProvider>
      <Header />
      <TimelineContent />
    </LanguageProvider>
  )
}
