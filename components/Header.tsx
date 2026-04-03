'use client'

import { useState } from 'react'

export default function Header() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN')

  return (
    <div className="w-full bg-[#d2a822] py-[10px] px-[128px]">
      <div className="bg-black flex items-center justify-between px-6 py-3 rounded-full w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[#cb983a] text-2xl leading-none">✦</span>
          <span className="text-white font-bold text-[22px] leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>
            La Fleur
          </span>
          <span className="text-[#cb983a] text-sm leading-none opacity-70 ml-0.5">®</span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-[42px]">
          <a href="#pricing" className="text-white/75 hover:text-white text-[14px] transition-colors">Pricing</a>
          <a href="#work" className="text-white/75 hover:text-white text-[14px] transition-colors">Work</a>
          <a href="#ai-workflow" className="text-white/75 hover:text-white text-[14px] transition-colors">AI Workflow</a>
        </nav>

        {/* Language switcher */}
        <div className="bg-[#2a2a2a] flex items-center gap-1 h-9 pl-1 pr-1 rounded-full">
          <button
            onClick={() => setLang('EN')}
            className={`h-7 w-[42px] rounded-full text-[14px] font-medium transition-all ${
              lang === 'EN' ? 'bg-[#cb983a] text-white' : 'text-white hover:text-white/80'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('FR')}
            className={`h-7 w-[40px] rounded-full text-[14px] font-medium transition-all ${
              lang === 'FR' ? 'bg-[#cb983a] text-white' : 'text-white hover:text-white/80'
            }`}
          >
            FR
          </button>
        </div>
      </div>
    </div>
  )
}
