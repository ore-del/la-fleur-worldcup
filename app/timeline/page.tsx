const MONTHS = [
  {
    num: '01',
    name: 'Onboard & Build',
    dates: 'Week 1–4',
    milestone: 'Staging site delivered',
    deliverables: [
      'Intake form completed',
      'Business & competitor research',
      '5-section landing page built',
      'World Cup campaign copy written',
      'Staging link sent for your review',
    ],
    feedback: 'Google Form sent upon staging delivery. Submit your consolidated feedback within 5 days so revisions can be applied before launch.',
    highlight: false,
  },
  {
    num: '02',
    name: 'Launch',
    dates: 'Week 5–8',
    milestone: 'Site live on your domain',
    deliverables: [
      'Domain connected & DNS configured',
      'SEO foundations set up',
      'Google Analytics live',
      '3 social media post templates (Full Digital Refresh only)',
      'Revision round applied from Month 1 feedback',
    ],
    feedback: 'Google Form sent at month end. 5 days to submit feedback — include any early observations from visitors or your own team.',
    highlight: false,
  },
  {
    num: '03',
    name: 'Tournament Begins',
    dates: 'June 12 onward',
    milestone: 'World Cup kicks off — 1.5M+ visitors in Toronto',
    deliverables: [
      'Live site performance check',
      'Copy & CTA refresh',
      'Google Business profile audit',
      'Revision round applied from Month 2 feedback',
      'Monthly analytics summary sent',
    ],
    feedback: 'Google Form sent end of month. Include any visitor feedback, conversion observations, or copy changes needed for the tournament crowd.',
    highlight: true,
  },
  {
    num: '04',
    name: 'Peak Traffic',
    dates: 'Mid-tournament · June / July',
    milestone: 'Maximum visitor volume',
    deliverables: [
      'Analytics report: traffic, conversions, top pages',
      'CTA and offer review',
      'Content refresh based on what\'s working',
      'Revision round applied from Month 3 feedback',
    ],
    feedback: 'Google Form sent mid-month. Combine performance data observations with content and copy requests in one consolidated submission.',
    highlight: false,
  },
  {
    num: '05',
    name: 'Final Push',
    dates: 'Into July 19 · World Cup Final',
    milestone: 'Last window of peak tourist traffic',
    deliverables: [
      'Final campaign content update',
      'Performance summary to date',
      'Revision round applied from Month 4 feedback',
      'Post-tournament transition options discussed',
    ],
    feedback: 'Google Form sent after the Final. Last content requests and your preferences for what happens to the site after July.',
    highlight: false,
  },
  {
    num: '06',
    name: 'Wind Down & Handoff',
    dates: 'August',
    milestone: 'Campaign complete — full handoff',
    deliverables: [
      'Full 6-month analytics report',
      'Campaign performance summary',
      'Site transition options presented',
      'Offboarding guide delivered',
      'Exit revision round applied',
    ],
    feedback: 'Exit survey via Google Form. Your feedback on the full experience shapes how we improve the program for future clients.',
    highlight: false,
  },
]

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-[#080603] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Top bar */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[860px] mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-[rgba(203,152,58,0.7)] text-[11px] font-bold tracking-[2px] uppercase">La Fleur Digital</span>
          <a href="mailto:hello@la-fleur.ca" className="text-white/30 hover:text-white/60 transition-colors text-[12px]">hello@la-fleur.ca</a>
        </div>
      </div>

      {/* Hero */}
      <header className="max-w-[860px] mx-auto px-6 pt-16 pb-12">
        <p className="text-[rgba(203,152,58,0.85)] text-[11px] font-bold tracking-[2px] uppercase mb-5">
          World Cup Campaign · Client Roadmap
        </p>
        <h1 className="text-white font-bold text-[36px] md:text-[52px] tracking-[-2px] leading-[1.05] mb-5">
          Your 6-Month<br />World Cup Journey
        </h1>
        <p className="text-white/50 text-[15px] leading-[1.65] max-w-[520px]">
          Every deliverable, every milestone, and exactly how your feedback shapes the work — month by month from now through August.
        </p>
      </header>

      {/* Feedback model */}
      <div className="max-w-[860px] mx-auto px-6 mb-14">
        <div className="rounded-[20px] border border-[rgba(203,152,58,0.22)] bg-[rgba(203,152,58,0.05)] p-8">
          <p className="text-[rgba(203,152,58,0.85)] text-[10px] font-bold tracking-[2px] uppercase mb-6">How Your Feedback Is Collected Each Month</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.3)] flex items-center justify-center mb-1">
                <span className="text-[#cb983a] font-bold text-[12px]">1</span>
              </div>
              <p className="text-white font-semibold text-[14px]">Google Form sent</p>
              <p className="text-white/45 text-[13px] leading-[1.55]">At the close of each month, you receive a short guided Google Form covering your site and any observations.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.3)] flex items-center justify-center mb-1">
                <span className="text-[#cb983a] font-bold text-[12px]">2</span>
              </div>
              <p className="text-white font-semibold text-[14px]">5-day window</p>
              <p className="text-white/45 text-[13px] leading-[1.55]">Submit one consolidated response — your own observations plus any user feedback you've gathered — within 5 days.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.3)] flex items-center justify-center mb-1">
                <span className="text-[#cb983a] font-bold text-[12px]">3</span>
              </div>
              <p className="text-white font-semibold text-[14px]">1 revision round applied</p>
              <p className="text-white/45 text-[13px] leading-[1.55]">One revision round is applied per month, within 3 business days of receiving your consolidated feedback.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly timeline */}
      <div className="max-w-[860px] mx-auto px-6 pb-6">
        <div className="flex flex-col gap-5">
          {MONTHS.map((m, i) => (
            <div
              key={i}
              className={`rounded-[20px] border p-8 ${
                m.highlight
                  ? 'border-[rgba(240,192,96,0.35)] bg-[rgba(240,192,96,0.04)]'
                  : 'border-[rgba(203,152,58,0.15)] bg-[rgba(42,43,44,0.55)]'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                {/* Month number */}
                <div className="shrink-0 w-[72px]">
                  <p className={`font-bold text-[52px] leading-none tracking-[-2px] ${m.highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>
                    {m.num}
                  </p>
                </div>

                {/* Body */}
                <div className="flex-1 min-w-0">

                  {/* Title row */}
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                    <p className="text-white font-bold text-[18px] leading-snug">{m.name}</p>
                    <p className="text-white/35 text-[13px]">{m.dates}</p>
                  </div>

                  {/* Milestone badge */}
                  <div className={`inline-flex items-center gap-2 rounded-[6px] px-3 py-[6px] mb-6 ${
                    m.highlight
                      ? 'bg-[rgba(240,192,96,0.1)] border border-[rgba(240,192,96,0.28)]'
                      : 'bg-[rgba(203,152,58,0.07)] border border-[rgba(203,152,58,0.18)]'
                  }`}>
                    <span className={`text-[9px] font-bold tracking-[1.5px] uppercase ${m.highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>
                      Milestone
                    </span>
                    <span className="text-white/65 text-[12px]">{m.milestone}</span>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <p className="text-white/35 text-[10px] font-bold tracking-[1.5px] uppercase mb-3">Deliverables</p>
                    <div className="flex flex-col gap-[10px]">
                      {m.deliverables.map((d, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <span className={`font-bold text-[12px] leading-[1.7] shrink-0 ${m.highlight ? 'text-[#f0c060]' : 'text-[#cb983a]'}`}>✓</span>
                          <span className="text-white/70 text-[13px] leading-[1.65]">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feedback row */}
                  <div className="flex items-start gap-3 pt-5 border-t border-white/[0.06]">
                    <span className="text-[13px] shrink-0 mt-[1px]">📋</span>
                    <p className="text-white/40 text-[12px] leading-[1.6]">
                      <span className="text-white/55 font-semibold">Feedback: </span>
                      {m.feedback}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revision policy */}
      <div className="max-w-[860px] mx-auto px-6 mt-8 mb-6">
        <div className="rounded-[16px] border border-white/[0.07] bg-white/[0.02] p-7">
          <p className="text-white/35 text-[10px] font-bold tracking-[1.5px] uppercase mb-5">Revision Policy</p>
          <div className="flex flex-col gap-[10px]">
            {[
              { icon: '✓', text: 'One consolidated revision round per month, applied within 3 business days.', highlight: true },
              { icon: '✓', text: 'Revisions cover text, images, layout adjustments, and offer copy.', highlight: true },
              { icon: '✕', text: 'Multiple separate revision requests per month are not included — consolidate all feedback into one submission.', highlight: false },
              { icon: '✕', text: 'Feedback not submitted within the 5-day window does not roll over to the following month.', highlight: false },
            ].map((note, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`font-bold text-[12px] leading-[1.7] shrink-0 ${note.highlight ? 'text-[#cb983a]' : 'text-white/30'}`}>{note.icon}</span>
                <p className="text-white/50 text-[13px] leading-[1.65]">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[860px] mx-auto px-6 pt-6 pb-16 text-center">
        <p className="text-white/20 text-[12px] leading-[1.8]">
          Questions about any of the above? Reach us at{' '}
          <a href="mailto:hello@la-fleur.ca" className="text-[rgba(203,152,58,0.55)] hover:text-[#cb983a] transition-colors">
            hello@la-fleur.ca
          </a>
        </p>
        <p className="text-white/[0.12] text-[11px] mt-2">
          La Fleur Digital · toronto · la-fleur.digital
        </p>
      </div>

    </div>
  )
}
