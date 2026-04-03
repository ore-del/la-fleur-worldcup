'use client'

import { useReveal } from './useReveal'
import { useLanguage } from '@/lib/LanguageContext'

const imgEllipse = 'https://www.figma.com/api/mcp/asset/5bd7799c-3775-4803-933e-b258cdbb58a9'

export default function HowItWorks() {
  const ref = useReveal()
  const { tx } = useLanguage()
  const h = tx.howItWorks

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative bg-[#0a0804] py-20 px-16">
      <div className="reveal flex items-center gap-3 mb-4">
        <div className="w-[3px] h-[14px] bg-[rgba(203,152,58,0.7)] rounded-[2px]" />
        <p className="text-[rgba(203,152,58,0.7)] text-[11px] font-bold tracking-[2px]">{h.label}</p>
      </div>

      <h2 className="reveal text-white font-bold text-[44px] leading-none tracking-[-1px] mb-12">{h.headline}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {h.steps.map((step, i) => (
          <div
            key={step.num}
            className={`reveal reveal-delay-${i + 1} card-spring relative bg-white/[0.03] border border-[rgba(203,152,58,0.2)] rounded-[16px] overflow-hidden p-5 h-[340px] hover:border-[rgba(203,152,58,0.4)] hover:bg-white/[0.05]`}
          >
            <img alt="" src={imgEllipse} className="absolute left-[15px] top-[15px] w-[80px] h-[80px] pointer-events-none select-none" />
            <p className="absolute left-[19px] top-[23px] text-[#f0c060] font-bold text-[56px] leading-none tracking-[-2px]">{step.num}</p>
            <p className="absolute left-[19px] top-[109px] text-white font-bold text-[17px] leading-[1.3] w-[269px]">{step.title}</p>
            <p className="absolute left-[19px] top-[173px] text-white/[0.62] text-[13px] leading-[1.55] w-[269px]">{step.description}</p>
            <p className="absolute left-[19px] bottom-[19px] text-[rgba(203,152,58,0.85)] font-semibold text-[12px]">{step.time}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
