'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { tx } = useLanguage()
  const f = tx.footer

  return (
    <footer className="relative bg-[#050402] min-h-[280px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(203,152,58,0.12)]" />
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-[rgba(203,152,58,0.9)] text-[28px] font-bold">✦</span>
          <span className="text-white/90 font-bold text-[36px]">La Fleur</span>
          <span className="text-[rgba(203,152,58,0.7)] text-[16px] ml-0.5">®</span>
        </div>
        <p className="text-white/30 text-[13px] tracking-[1px] mb-8">{f.location}</p>
        <div className="w-full max-w-[1184px] h-px bg-[rgba(203,152,58,0.08)] mb-6 mx-auto" />
        <p className="text-white/25 text-[13px]">{f.copy}</p>
      </div>
    </footer>
  )
}
