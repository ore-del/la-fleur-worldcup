'use client'

import { useState } from 'react'

export default function Header() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN')

  return (
    <div className="w-full bg-[#D2A822] py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo + Nav pill */}
        <div className="flex items-center gap-8 bg-[#080603] rounded-full px-5 py-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="#CB983A"/>
            </svg>
            <span className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: 'sans-serif' }}>
              La Fleur
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#pricing" className="text-white/70 hover:text-white text-sm transition-colors">
              Pricing
            </a>
            <a href="#work" className="text-white/70 hover:text-white text-sm transition-colors">
              Work
            </a>
            <a href="#ai-workflow" className="text-white/70 hover:text-white text-sm transition-colors">
              AI Workflow
            </a>
          </nav>
        </div>

        {/* Language switcher */}
        <div className="flex items-center gap-1 bg-[#080603] rounded-full p-1">
          <button
            onClick={() => setLang('EN')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              lang === 'EN'
                ? 'bg-[#CB983A] text-[#080603]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('FR')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              lang === 'FR'
                ? 'bg-[#CB983A] text-[#080603]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            FR
          </button>
        </div>
      </div>
    </div>
  )
}
