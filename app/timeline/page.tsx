'use client'

import Header from '@/components/Header'
import { LanguageProvider } from '@/lib/LanguageContext'

const GOOGLE_FORM = 'https://forms.gle/4sAUKRjNfY79YP89A'
const IMG_BASE = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/claude/world-cup-generate-page-vuHuO/Project%20progress'

const MONTHS = [
  {
    num: '01',
    name: 'Onboard & Build',
    dates: 'Week 1–4',
    milestone: 'Staging site delivered',
    img: `${IMG_BASE}/1.png`,
    deliverables: [
      'Intake form completed',
      'Business & competitor research',
      '5-section landing page built',
      'World Cup campaign copy written',
      'Staging link sent for your review',
    ],
    clientFeedback: 'Review your staging site on the Vercel preview link and leave comments directly on the page.',
    userFeedback: 'Share the Google Form with your network to start collecting early user feedback.',
    highlight: false,
  },
  {
    num: '02',
    name: 'Launch',
    dates: 'Week 5–8',
    milestone: 'Site live on your domain',
    img: `${IMG_BASE}/2.png`,
    deliverables: [
      'Domain connected & DNS configured',
      'SEO foundations set up',
      'Google Analytics live',
      '3 social media post templates (Full Digital Refresh only)',
      'Revision round applied from Week 1–4 feedback',
    ],
    clientFeedback: 'Leave post-launch notes via Vercel comments on the live preview.',
    userFeedback: 'Share the Google Form with customers as traffic begins. Their responses inform the next revision.',
    highlight: false,
  },
  {
    num: '03',
    name: 'Tournament Begins',
    dates: 'Week 9–12',
    milestone: 'World Cup kicks off — 1.5M+ visitors in Toronto',
    img: `${IMG_BASE}/3.png`,
    deliverables: [
      'Live site performance check',
      'Copy & CTA refresh',
      'Google Business profile audit',
      'Revision round applied from Week 5–8 feedback',
      'Monthly analytics summary sent',
    ],
    clientFeedback: 'Leave Vercel comments on any updates needed for the tournament crowd.',
    userFeedback: 'Encourage visitors to fill out the Google Form. Conversion observations welcome.',
    highlight: true,
  },
  {
    num: '04',
    name: 'Peak Traffic',
    dates: 'Week 13–16',
    milestone: 'Maximum visitor volume',
    img: `${IMG_BASE}/4.png`,
    deliverables: [
      'Analytics report: traffic, conversions, top pages',
      'CTA and offer review',
      "Content refresh based on what's working",
      'Revision round applied from Week 9–12 feedback',
    ],
    clientFeedback: "Add Vercel comments on content or offer changes based on what you're seeing.",
    userFeedback: 'Review Google Form responses and include key patterns in your consolidated feedback.',
    highlight: false,
  },
  {
    num: '05',
    name: 'Final Push',
    dates: 'Week 17–20',
    milestone: 'Last window of peak tourist traffic',
    img: `${IMG_BASE}/5.png`,
    deliverables: [
      'Final campaign content update',
      'Performance summary to date',
      'Revision round applied from Week 13–16 feedback',
      'Post-tournament transition options discussed',
    ],
    clientFeedback: 'Final Vercel comments for last content tweaks before wind-down.',
    userFeedback: 'Keep the Google Form active through the final. Last chance for visitor input.',
    highlight: false,
  },
  {
    num: '06',
    name: 'Wind Down & Handoff',
    dates: 'Week 21–24',
    milestone: 'Campaign complete — full handoff',
    img: `${IMG_BASE}/6.png`,
    deliverables: [
      'Full 6-month analytics report',
      'Campaign performance summary',
      'Site transition options presented',
      'Offboarding guide delivered',
      'Exit revision round applied',
    ],
    clientFeedback: 'Final Vercel comments for the exit revision round.',
    userFeedback: 'Complete the exit survey via Google Form. Your feedback shapes how we improve the program.',
    highlight: false,
  },
]

function TimelineContent() {
  return (
    <main className="min-h-screen pt-[88px] bg-[#080603]">
      <div className="max-w-[960px] mx-auto px-6 pt-14 pb-20">

        {/* Hero */}
        <div className="mb-12">
          <p className="text-[rgba(203,152,58,0.85)] text-[11px] font-bold tracking-[2px] uppercase mb-5">
            World Cup Campaign · Client Roadmap
          </p>
          <h1 className="text-white font-bold text-[32px] md:text-[48px] tracking-[-2px] leading-[1.05] mb-5">
            Your 6-Month<br />World Cup Journey
          </h1>
          <p className="text-white/50 text-[15px] leading-[1.65] max-w-[520px]">
            Every deliverable, every milestone, and exactly how your feedback shapes the work — week by week across 6 months.
          </p>
        </div>

        {/* Feedback model */}
        <div className="rounded-[20px] border border-[rgba(203,152,58,0.22)] bg-[rgba(203,152,58,0.05)] p-8 mb-12">
          <p className="text-[rgba(203,152,58,0.85)] text-[10px] font-bold tracking-[2px] uppercase mb-7">
            How Feedback Is Collected Each Month
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.3)] flex items-center justify-center mb-1">
                <span className="text-[#cb983a] font-bold text-[12px]">1</span>
              </div>
              <p className="text-white font-semibold text-[14px]">Client feedback via Vercel</p>
              <p className="text-white/45 text-[13px] leading-[1.55]">
                Review your site on the Vercel preview link and leave comments directly on the page. We collect them at month end.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.3)] flex items-center justify-center mb-1">
                <span className="text-[#cb983a] font-bold text-[12px]">2</span>
              </div>
              <p className="text-white font-semibold text-[14px]">User feedback via Google Form</p>
              <p className="text-white/45 text-[13px] leading-[1.55]">
                Share{' '}
                <a href={GOOGLE_FORM} target="_blank" rel="noopener noreferrer"
                  className="text-[rgba(203,152,58,0.8)] hover:text-[#cb983a] underline transition-colors">
                  this form
                </a>
                {' '}with your customers so they can leave feedback on your site.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.3)] flex items-center justify-center mb-1">
                <span className="text-[#cb983a] font-bold text-[12px]">3</span>
              </div>
              <p className="text-white font-semibold text-[14px]">1 revision round applied</p>
              <p className="text-white/45 text-[13px] leading-[1.55]">
                Both feedback streams are consolidated into one revision round per month, applied within 3 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Monthly timeline */}
        <div className="flex flex-col gap-5">
          {MONTHS.map((m, i) => (
            <div
              key={i}
              className={`rounded-[20px] border overflow-hidden ${
                m.highlight
                  ? 'border-[rgba(240,192,96,0.35)] bg-[rgba(240,192,96,0.04)]'
                  : 'border-[rgba(203,152,58,0.15)] bg-[rgba(42,43,44,0.55)]'
              }`}
            >
              {/* Design progress image — full width, uncropped */}
              <div className="border-b border-[rgba(203,152,58,0.1)] bg-[rgba(12,10,8,0.6)]">
                <img
                  src={m.img}
                  alt={`Design progress — ${m.name}`}
                  className="w-full h-auto block"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-start gap-5 mb-4">
                  <p className={`font-bold text-[48px] leading-none tracking-[-2px] shrink-0 ${m.highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>
                    {m.num}
                  </p>
                  <div className="pt-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                      <p className="text-white font-bold text-[18px] leading-snug">{m.name}</p>
                      <p className="text-white/35 text-[13px]">{m.dates}</p>
                    </div>
                    <div className={`inline-flex items-center gap-2 rounded-[6px] px-3 py-[5px] ${
                      m.highlight
                        ? 'bg-[rgba(240,192,96,0.1)] border border-[rgba(240,192,96,0.28)]'
                        : 'bg-[rgba(203,152,58,0.07)] border border-[rgba(203,152,58,0.18)]'
                    }`}>
                      <span className={`text-[9px] font-bold tracking-[1.5px] uppercase ${m.highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>
                        Milestone
                      </span>
                      <span className="text-white/65 text-[12px]">{m.milestone}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-white/35 text-[10px] font-bold tracking-[1.5px] uppercase mb-3">Deliverables</p>
                  <div className="flex flex-col gap-[9px]">
                    {m.deliverables.map((d, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className={`font-bold text-[12px] leading-[1.7] shrink-0 ${m.highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>✓</span>
                        <span className="text-white/70 text-[13px] leading-[1.65]">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-[9px] pt-5 border-t border-white/[0.06]">
                  <div className="flex items-start gap-3">
                    <span className="text-[12px] shrink-0 mt-[2px]">💬</span>
                    <p className="text-white/40 text-[12px] leading-[1.6]">
                      <span className="text-white/55 font-semibold">Client: </span>
                      {m.clientFeedback}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[12px] shrink-0 mt-[2px]">📋</span>
                    <p className="text-white/40 text-[12px] leading-[1.6]">
                      <span className="text-white/55 font-semibold">Users: </span>
                      {m.userFeedback}{' '}
                      <a href={GOOGLE_FORM} target="_blank" rel="noopener noreferrer"
                        className="text-[rgba(203,152,58,0.6)] hover:text-[#cb983a] underline transition-colors">
                        Open form ↗
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
          <p className="text-white/35 text-[10px] font-bold tracking-[1.5px] uppercase mb-5">Revision Policy</p>
          <div className="flex flex-col gap-[10px]">
            {[
              { icon: '✓', text: 'One consolidated revision round per month, applied within 3 business days.', pos: true },
              { icon: '✓', text: 'Revisions cover text, images, layout adjustments, and offer copy.', pos: true },
              { icon: '✕', text: 'Multiple separate requests per month are not included — consolidate all feedback into one submission.', pos: false },
              { icon: '✕', text: 'Vercel comments or Google Form responses not submitted within the month do not roll over.', pos: false },
            ].map((note, i) => (
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
            Questions? Reach us at{' '}
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
