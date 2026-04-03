'use client'

const notes = [
  {
    icon: '✕',
    title: 'Cancel anytime',
    description: 'No long-term contracts. If you cancel, your site goes offline immediately — no ifs, no buts.',
  },
  {
    icon: '◎',
    title: 'Low barrier to start',
    description: 'Get a professional site live for less than a daily coffee. Start without the big upfront cost.',
  },
  {
    icon: '↻',
    title: 'Updates included',
    description: 'Request text and image updates any time. We batch them weekly at no extra cost.',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#080603] py-20 px-16 overflow-hidden">
      {/* Label */}
      <p className="text-[#cb983a] text-[11px] font-bold tracking-[2px] mb-4">PACKAGES</p>

      {/* Title */}
      <h2 className="text-white font-bold text-[44px] leading-[1.1] tracking-[-1px] text-center max-w-[860px] mx-auto mb-4">
        Two flexible ways to get online for the World Cup
      </h2>
      <div className="text-white/55 text-[16px] leading-[1.6] text-center max-w-[760px] mx-auto mb-12">
        <p>No large upfront cost. Pay monthly, cancel anytime. If you cancel, site access ends immediately.</p>
        <p>Limited to 20 businesses.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1184px] mx-auto">
        {/* Standard card */}
        <div className="bg-white/[0.03] border-[1.5px] border-[rgba(203,152,58,0.25)] rounded-[16px] overflow-hidden p-[30.5px] h-[540px] relative">
          <p className="text-white font-bold text-[24px] whitespace-nowrap">World Cup Ready</p>

          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-[#cb983a] font-bold text-[52px] tracking-[-2px]">$149</span>
            <span className="text-white/30 text-[20px] line-through">$299</span>
          </div>

          <p className="text-white/40 text-[13px] mt-1">/mo · Cancel anytime · Min. 3 months</p>
          <div className="h-px bg-[rgba(203,152,58,0.12)] my-4" />

          <p className="text-white/65 text-[14px] leading-[1.55] mb-4">
            A standalone landing page that captures soccer tournament traffic and drives direct action from tourists and locals.
          </p>

          {[
            '5-section landing page',
            'World Cup campaign copy',
            'Mobile-first, fast-loading',
            'SEO setup + Google Analytics',
            'Free hosting for 6 months',
            '1 round of revisions',
          ].map((f) => (
            <div key={f} className="flex items-center gap-4 mb-[14px]">
              <span className="text-[#cb983a] font-bold text-[13px] shrink-0">✓</span>
              <span className="text-white/80 text-[14px]">{f}</span>
            </div>
          ))}

          <a
            href="#claim"
            className="absolute bottom-[30.5px] left-[30.5px] right-[30.5px] h-[52px] leading-[52px] text-center border-[1.5px] border-[rgba(203,152,58,0.6)] text-[#cb983a] font-semibold text-[15px] rounded-[8px] hover:bg-[#cb983a]/10 transition-colors block"
          >
            Claim this package
          </a>
        </div>

        {/* Premium card */}
        <div className="bg-white/[0.05] border-2 border-[rgba(203,152,58,0.5)] rounded-[16px] overflow-hidden relative h-[540px]">
          {/* Most popular banner */}
          <div className="bg-[#cb983a] h-[40px] flex items-center justify-center">
            <span className="text-[#080603] font-semibold text-[13px]">Most popular</span>
          </div>

          <div className="px-[30px] pb-[30px] pt-4">
            <p className="text-white font-bold text-[24px] whitespace-nowrap mb-2">Full Digital Refresh</p>

            {/* Price box */}
            <div className="inline-flex items-baseline gap-2 bg-[rgba(203,152,58,0.15)] border border-[rgba(203,152,58,0.4)] rounded-[8px] px-[7px] py-1 mb-2">
              <span className="text-[#f0c060] font-bold text-[48px] tracking-[-2px]">$249</span>
              <span className="text-white/30 text-[18px] line-through">$499</span>
            </div>

            <p className="text-white/40 text-[13px] mb-3">/mo · Cancel anytime · Min. 3 months</p>
            <div className="h-px bg-[rgba(203,152,58,0.18)] mb-4" />

            <p className="text-white/65 text-[14px] leading-[1.55] mb-4">
              New World Cup brand identity plus a full landing page. Built for businesses without a strong online presence.
            </p>

            {[
              'Everything in World Cup Ready',
              'World Cup brand identity (logo, colors, fonts)',
              'Campaign strategy + offer design',
              '3 social media post templates',
              'Google Business profile update',
              'Free hosting for 6 months',
              '2 rounds of revisions',
            ].map((f) => (
              <div key={f} className="flex items-center gap-4 mb-[14px]">
                <span className="text-[#f0c060] font-bold text-[13px] shrink-0">✓</span>
                <span className="text-white/85 text-[14px]">{f}</span>
              </div>
            ))}
          </div>

          <a
            href="#claim"
            className="absolute bottom-[30px] left-[30px] right-[30px] h-[52px] leading-[52px] text-center bg-[#cb983a] text-[#080603] font-semibold text-[15px] rounded-[8px] hover:bg-[#f0c060] transition-colors block"
          >
            Claim this package
          </a>
        </div>
      </div>

      {/* Note cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1184px] mx-auto mt-6">
        {notes.map((note) => (
          <div key={note.title} className="bg-white/[0.03] border border-[rgba(203,152,58,0.12)] rounded-[12px] p-5 h-[100px]">
            <div className="flex items-center gap-[14px] mb-2">
              <span className="text-[rgba(203,152,58,0.7)] font-bold text-[16px]">{note.icon}</span>
              <span className="text-white font-semibold text-[14px]">{note.title}</span>
            </div>
            <p className="text-white/55 text-[12px] leading-[1.5]">{note.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
