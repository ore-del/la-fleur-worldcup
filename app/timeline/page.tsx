'use client'

import Header from '@/components/Header'
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext'

const GOOGLE_FORM = 'https://forms.gle/4sAUKRjNfY79YP89A'
const MONTH_IMGS = [1, 2, 3, 4, 5, 6].map(n => `/progress-${n}.png`)

function TimelineContent() {
  const { tx } = useLanguage()
  const r = tx.roadmap

  return (
    <main className="min-h-screen pt-[88px] bg-[#080603]">
      <div className="max-w-[960px] mx-auto px-6 pt-14 pb-20">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-[#6db87e] text-[11px] font-bold tracking-[2px] uppercase mb-5">
            {r.campaignLabel}
          </p>
          <h1 className="text-white font-bold text-[32px] md:text-[48px] tracking-[-2px] leading-[1.05] mb-5 whitespace-pre-line">
            {r.headline}
          </h1>
          <p className="text-white/50 text-[15px] leading-[1.65] max-w-[520px]">
            {r.sub}
          </p>
        </div>

        {/* Feedback model */}
        <div className="rounded-[20px] border border-[rgba(59,112,70,0.22)] bg-[rgba(59,112,70,0.05)] p-8 mb-12">
          <p className="text-[#6db87e] text-[10px] font-bold tracking-[2px] uppercase mb-7">
            {r.feedbackTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {r.feedbackItems.map((item) => (
              <div key={item.num} className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-[rgba(59,112,70,0.12)] border border-[rgba(59,112,70,0.3)] flex items-center justify-center mb-1">
                  <span className="text-[#6db87e] font-bold text-[12px]">{item.num}</span>
                </div>
                <p className="text-white font-semibold text-[14px]">{item.title}</p>
                <p className="text-white/45 text-[13px] leading-[1.55]">
                  {item.linkText
                    ? item.description.split('{link}').map((part, i) =>
                        i === 0 ? part : (
                          <span key={i}>
                            <a href={GOOGLE_FORM} target="_blank" rel="noopener noreferrer"
                              className="text-[#6db87e] hover:text-white underline transition-colors">
                              {item.linkText}
                            </a>
                            {part}
                          </span>
                        )
                      )
                    : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly timeline */}
        <div className="flex flex-col gap-5">
          {r.months.map((m, i) => (
            <div
              key={m.num}
              className={`rounded-[20px] border overflow-hidden ${
                m.highlight
                  ? 'border-[rgba(109,184,126,0.35)] bg-[rgba(109,184,126,0.04)]'
                  : 'border-[rgba(59,112,70,0.15)] bg-[rgba(42,43,44,0.55)]'
              }`}
            >
              <div className="border-b border-[rgba(59,112,70,0.1)] bg-[rgba(12,10,8,0.6)]">
                <img src={MONTH_IMGS[i]} alt={`Design progress — ${m.name}`} className="w-full h-auto block" />
              </div>

              <div className="p-7">
                <div className="flex items-start gap-5 mb-4">
                  <p className={`font-bold text-[48px] leading-none tracking-[-2px] shrink-0 ${m.highlight ? 'text-[#6db87e]' : 'text-[#6db87e]'}`}>
                    {m.num}
                  </p>
                  <div className="pt-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                      <p className="text-white font-bold text-[18px] leading-snug">{m.name}</p>
                      <p className="text-white/35 text-[13px]">{m.dates}</p>
                    </div>
                    <div className={`inline-flex items-center gap-2 rounded-[6px] px-3 py-[5px] ${
                      m.highlight
                        ? 'bg-[rgba(109,184,126,0.1)] border border-[rgba(109,184,126,0.28)]'
                        : 'bg-[rgba(59,112,70,0.07)] border border-[rgba(59,112,70,0.18)]'
                    }`}>
                      <span className={`text-[9px] font-bold tracking-[1.5px] uppercase ${m.highlight ? 'text-[#6db87e]' : 'text-[#6db87e]'}`}>
                        {r.milestoneLabel}
                      </span>
                      <span className="text-white/65 text-[12px]">{m.milestone}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-white/35 text-[10px] font-bold tracking-[1.5px] uppercase mb-3">{r.deliverablesLabel}</p>
                  <div className="flex flex-col gap-[9px]">
                    {m.deliverables.map((d, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="text-[#6db87e] font-bold text-[12px] leading-[1.7] shrink-0">✓</span>
                        <span className="text-white/70 text-[13px] leading-[1.65]">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-[9px] pt-5 border-t border-white/[0.06]">
                  <div className="flex items-start gap-3">
                    <span className="text-[12px] shrink-0 mt-[2px]">💬</span>
                    <p className="text-white/40 text-[12px] leading-[1.6]">
                      <span className="text-white/55 font-semibold">{r.clientLabel}: </span>
                      {m.clientFeedback}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[12px] shrink-0 mt-[2px]">📋</span>
                    <p className="text-white/40 text-[12px] leading-[1.6]">
                      <span className="text-white/55 font-semibold">{r.usersLabel}: </span>
                      {m.userFeedback}{' '}
                      <a href={GOOGLE_FORM} target="_blank" rel="noopener noreferrer"
                        className="text-[#6db87e] hover:text-white underline transition-colors">
                        {r.openFormLink}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Revision policy */}
        <div className="rounded-[16px] border border-white/[0.07] bg-white/[0.02] p-7 mt-8">
          <p className="text-white/35 text-[10px] font-bold tracking-[1.5px] uppercase mb-5">{r.revisionPolicyTitle}</p>
          <div className="flex flex-col gap-[10px]">
            {r.revisionPolicies.map((note, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`font-bold text-[12px] leading-[1.7] shrink-0 ${note.pos ? 'text-[#6db87e]' : 'text-white/30'}`}>
                  {note.pos ? '✓' : '✕'}
                </span>
                <p className="text-white/50 text-[13px] leading-[1.65]">{note.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-10 text-center">
          <p className="text-white/20 text-[12px] leading-[1.8]">
            {r.footerQuestion}{' '}
            <a href="mailto:hello@la-fleur.ca" className="text-[#6db87e] hover:text-white transition-colors">
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
