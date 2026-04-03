'use client'

import { useReveal } from './useReveal'
import { useLanguage } from '@/lib/LanguageContext'

const imgAssets = [
  'https://www.figma.com/api/mcp/asset/e746e229-6767-400b-bd05-bc90df2f2d23',
  'https://www.figma.com/api/mcp/asset/40eebade-a5c1-4d6b-bbb8-e4dd23d3cb73',
  'https://www.figma.com/api/mcp/asset/4c8bc3c2-2285-492b-93e6-bdf696ec80c2',
  'https://www.figma.com/api/mcp/asset/e006b64e-f93f-4d66-8d6d-493dd3cfae95',
  'https://www.figma.com/api/mcp/asset/a59180f1-3b3a-44bb-b095-7399ac939453',
  'https://www.figma.com/api/mcp/asset/3a8a5849-40d8-45ab-9e9c-c9d5415757d4',
]

export default function OurWork() {
  const ref = useReveal()
  const { tx } = useLanguage()
  const w = tx.ourWork

  return (
    <section id="work" ref={ref as React.RefObject<HTMLElement>} className="relative bg-[#080603] py-20 px-16">
      <div className="reveal flex items-center gap-3 mb-4">
        <div className="w-[3px] h-[14px] bg-[rgba(203,152,58,0.7)] rounded-[2px]" />
        <p className="text-[rgba(203,152,58,0.7)] text-[11px] font-bold tracking-[2px]">{w.label}</p>
      </div>

      <h2 className="reveal text-[#f0c060] font-bold text-[40px] leading-none tracking-[-1px] mb-4">{w.headline}</h2>
      <p className="reveal text-white/60 text-[15px] leading-[1.55] mb-10 max-w-[980px]">{w.sub}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {w.projects.map((p, i) => (
          <div
            key={p.name}
            className={`reveal reveal-delay-${(i % 3) + 1} card-spring bg-white/[0.03] border border-[rgba(203,152,58,0.15)] rounded-[12px] overflow-hidden h-[260px] relative hover:border-[rgba(203,152,58,0.35)] hover:bg-white/[0.06]`}
          >
            <div className="h-[139px] bg-[rgb(17,30,60)] overflow-hidden">
              <img alt={p.name} src={imgAssets[i]} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute top-[151px] left-[15px] bg-[rgba(203,152,58,0.12)] border border-[rgba(203,152,58,0.3)] rounded-full px-[7px] h-[22px] leading-[22px]">
              <span className="text-[#cb983a] font-semibold text-[11px]">{p.category}</span>
            </div>
            <div className="absolute top-[183px] left-[15px] right-[15px]">
              <p className="text-white font-bold text-[16px] mb-1">{p.name}</p>
              <p className="text-white/55 text-[12px] leading-[1.5]">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
