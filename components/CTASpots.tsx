const clients = [
  'Club 216',
  'R&B Retreats',
  'Entropy Entertainment',
  'Vet24',
  'Ada Analytics',
  'Mthabisi Mhlange',
  'Nubian Divinity',
]

export default function CTASpots() {
  return (
    <section className="relative bg-[#080603] px-16 py-0 pt-0 overflow-hidden">
      {/* CTAs */}
      <div className="flex items-start gap-6 pt-0 pb-5">
        <a
          href="#claim"
          className="btn-spring btn-primary-glow inline-block bg-[#cb983a] text-[#080603] font-semibold text-[15px] h-[52px] leading-[52px] px-10 rounded-[8px] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0c060]"
        >
          Get my World Cup site
        </a>
        <a
          href="#pricing"
          className="btn-spring inline-block border-[1.5px] border-[rgba(203,152,58,0.6)] text-[#cb983a] font-normal text-[15px] h-[52px] leading-[52px] px-10 rounded-[8px] hover:bg-[#cb983a]/10 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#cb983a]"
        >
          {`See what's included`}
        </a>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/85 text-[14px] font-semibold">Spots claimed so far</span>
          <span className="text-[#cb983a] text-[14px] font-semibold">7 of 20 spots</span>
        </div>
        <div className="relative h-[6px] bg-white/10 rounded-[3px] w-full overflow-hidden">
          <div className="progress-bar absolute left-0 top-0 h-full bg-[#cb983a] rounded-[3px]" style={{ width: '35%' }} />
        </div>
      </div>

      {/* Client badges with stagger */}
      <div className="badge-stagger flex flex-wrap items-center gap-2 pb-6">
        {clients.map((name) => (
          <span
            key={name}
            className="bg-white/[0.06] border border-white/15 rounded-full px-[7px] h-[28px] leading-[28px] text-white/75 text-[12px] whitespace-nowrap"
          >
            {name}
          </span>
        ))}
        <span className="bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.35)] rounded-full px-[7px] h-[28px] leading-[28px] text-[#cb983a] text-[12px] whitespace-nowrap">
          + 13 spots left
        </span>
      </div>
    </section>
  )
}
