'use client'

import { useReveal } from './useReveal'
import { useLanguage } from '@/lib/LanguageContext'

const accentColors = ['#f0c060', '#c41e1e', '#cb983a']
const borderColors = ['rgba(240,192,96,0.25)', 'rgba(196,30,30,0.25)', 'rgba(203,152,58,0.25)']

export default function EconomicSurge() {
  const ref = useReveal()
  const { tx } = useLanguage()
  const s = tx.surge

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative overflow-hidden bg-[#0e0a04] py-20 px-16 min-h-[480px]">
      <div className="reveal flex items-start gap-4 mb-10">
        <div className="w-1 rounded-[2px] bg-[rgba(203,152,58,0.8)] shrink-0 mt-2" style={{ height: '120px' }} />
        <h2 className="text-white font-bold text-[52px] leading-[1.1] tracking-[-1px] whitespace-pre-line">
          {s.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {s.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`reveal reveal-delay-${i + 1} card-spring relative bg-white/[0.03] rounded-[12px] overflow-hidden p-5 h-[200px]`}
            style={{ border: `1px solid ${borderColors[i]}` }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-[2px]" style={{ background: accentColors[i] }} />
            <p className="stat-number text-[48px] font-bold leading-none tracking-[-1.5px] whitespace-nowrap" style={{ color: accentColors[i], animationDelay: `${i * 120}ms` }}>
              {stat.value}
            </p>
            <p className="text-white/45 text-[10px] font-bold tracking-[1.5px] mt-1">{stat.label}</p>
            <div className="h-px bg-white/[0.08] my-3" />
            <p className="text-white/65 text-[13px] leading-[1.55]">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
