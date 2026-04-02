const stats = [
  {
    value: '$2.4B+',
    label: 'Projected GDP Impact',
    description: 'Economists forecast a historic economic surge across the Greater Toronto Area during the tournament.',
    accent: '#CB983A',
  },
  {
    value: '1.5M+',
    label: 'Global Visitors',
    description: "Tourists from across the planet will flood Toronto's restaurants, hotels, shops, and services.",
    accent: '#C41E1E',
  },
  {
    value: '48',
    label: 'Nations Converging',
    description: 'Fans from every corner of the world, all spending — and all searching online for local businesses like yours.',
    accent: '#F0C060',
  },
]

export default function EconomicSurge() {
  return (
    <section className="py-24 px-6 bg-[#080603]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-[#CB983A] text-xs tracking-[3px] uppercase font-medium mb-4 text-center">
          The Opportunity
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          A once-in-a-lifetime economic surge
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-16 leading-relaxed">
          The FIFA World Cup is the most-watched sporting event on Earth. In 2026, Toronto is a host city — and your window to capture that energy online is closing fast.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative rounded-xl p-8 bg-white/5 border border-white/10 overflow-hidden group hover:bg-white/[0.07] transition-colors"
              style={{ borderLeft: `3px solid ${stat.accent}` }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ background: stat.accent }}
              />

              <div className="relative z-10">
                <p
                  className="text-5xl font-bold mb-2 leading-none"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </p>
                <p className="text-white font-semibold mb-3 text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
