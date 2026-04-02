const steps = [
  {
    number: '01',
    emoji: '📝',
    title: 'You fill out one short form',
    description: 'Tell us about your business, your goals, and which package you\'d like. Takes about 5 minutes.',
    time: '5 minutes',
  },
  {
    number: '02',
    emoji: '🔨',
    title: 'We research and build',
    description: 'Our team crafts your site using World Cup campaign copy tailored to your industry and audience.',
    time: '1–3 days',
  },
  {
    number: '03',
    emoji: '✅',
    title: 'You review and approve',
    description: 'We send you a preview link. You give feedback or approve — usually takes about 30 minutes.',
    time: '30 minutes',
  },
  {
    number: '04',
    emoji: '🚀',
    title: 'You go live',
    description: 'Your site launches and is indexed before the World Cup begins. Visitors find you. Revenue follows.',
    time: 'Before June 11',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-[#080603]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-[#CB983A] text-xs tracking-[3px] uppercase font-medium mb-4 text-center">
          The Process
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          From zero to live in 3–5 days
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-16 leading-relaxed">
          We handle the hard part. You show up at the beginning and the end.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#CB983A]/30 to-transparent z-10" style={{ width: 'calc(100% - 2rem)', left: '2rem' }} />
              )}

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors h-full">
                {/* Number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#CB983A]/40 font-bold text-3xl leading-none">{step.number}</span>
                  <div className="w-10 h-10 rounded-full bg-[#CB983A]/15 flex items-center justify-center text-xl">
                    {step.emoji}
                  </div>
                </div>

                <h3 className="text-white font-semibold mb-2 leading-snug">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>

                {/* Time badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#CB983A]/10 border border-[#CB983A]/20 rounded-full px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CB983A]" />
                  <span className="text-[#CB983A] text-xs font-medium">{step.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
