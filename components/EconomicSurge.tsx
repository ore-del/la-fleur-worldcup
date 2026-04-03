'use client'

import { useReveal } from './useReveal'

const stats = [
  {
    value: '$2.4B+',
    label: 'PROJECTED GDP IMPACT',
    description: "New capital circulating through Toronto's business ecosystem during the 2026 campaign cycle.",
    accent: '#f0c060',
    borderColor: 'rgba(240,192,96,0.25)',
  },
  {
    value: '1.5M+',
    label: 'GLOBAL VISITORS',
    description: 'High-intent consumers flooding the downtown core looking for premium services and local brands.',
    accent: '#c41e1e',
    borderColor: 'rgba(196,30,30,0.25)',
  },
  {
    value: '48',
    label: 'NATIONS CONVERGING',
    description: 'Toronto becomes the center of the world. Every local business is now a global business.',
    accent: '#cb983a',
    borderColor: 'rgba(203,152,58,0.25)',
  },
]

export default function EconomicSurge() {
  const ref = useReveal()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative overflow-hidden bg-[#0e0a04] py-20 px-16 min-h-[480px]">
      {/* Left vertical gold bar + title */}
      <div className="reveal flex items-start gap-4 mb-10">
        <div className="w-1 rounded-[2px] bg-[rgba(203,152,58,0.8)] shrink-0 mt-2" style={{ height: '120px' }} />
        <h2 className="text-white font-bold text-[52px] leading-[1.1] tracking-[-1px]">
          A ONCE-IN-A-LIFETIME<br />ECONOMIC SURGE
        </h2>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`reveal reveal-delay-${i + 1} card-spring relative bg-white/[0.03] rounded-[12px] overflow-hidden p-5 h-[200px]`}
            style={{ border: `1px solid ${stat.borderColor}` }}
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] rounded-[2px]"
              style={{ background: stat.accent }}
            />

            <p
              className="stat-number text-[48px] font-bold leading-none tracking-[-1.5px] whitespace-nowrap"
              style={{ color: stat.accent, animationDelay: `${i * 120}ms` }}
            >
              {stat.value}
            </p>
            <p className="text-white/45 text-[10px] font-bold tracking-[1.5px] mt-1">
              {stat.label}
            </p>
            <div className="h-px bg-white/[0.08] my-3" />
            <p className="text-white/65 text-[13px] leading-[1.55]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
