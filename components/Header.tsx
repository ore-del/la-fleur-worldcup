'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

// La Fleur logo flower icon from Figma
const imgFlower = 'https://www.figma.com/api/mcp/asset/9778c332-91e4-4246-9dda-c2a7d7bc5e2c'

export default function Header() {
  const { lang, setLang, tx } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{ padding: scrolled ? '6px 24px' : '8px 24px' }}
    >
      {/* Pill nav — glassmorphic, like Supahero */}
      <div
        className={`
          max-w-6xl mx-auto flex items-center justify-between
          rounded-full border transition-all duration-300
          px-5 h-[52px]
          ${scrolled
            ? 'bg-black/75 backdrop-blur-lg border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-black/60 backdrop-blur-md border-white/[0.07] shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
          }
        `}
      >
        {/* Logo — animated flower on hover */}
        <a href="#" className="group flex items-center gap-2 shrink-0">
          {/* Text */}
          <span
            className="text-white font-bold text-[22px] leading-none select-none"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", letterSpacing: '-0.3px' }}
          >
            La Fleur
          </span>

          {/* Flower icon — spins on hover, springs back on leave */}
          <img
            src={imgFlower}
            alt="La Fleur logo"
            width={28}
            height={28}
            className="
              w-7 h-7 object-contain select-none
              transition-transform duration-[600ms]
              [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:rotate-[360deg] group-hover:scale-110
            "
          />
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#pricing"
            className="text-white/75 hover:text-white text-[13px] font-medium transition-colors duration-200"
          >
            {tx.nav.pricing}
          </a>
          <a
            href="#work"
            className="text-white/75 hover:text-white text-[13px] font-medium transition-colors duration-200"
          >
            {tx.nav.work}
          </a>
          <a
            href="#ai-workflow"
            className="text-white/75 hover:text-white text-[13px] font-medium transition-colors duration-200"
          >
            {tx.nav.aiWorkflow}
          </a>
        </nav>

        {/* Language toggle — updated Figma colors */}
        {/* Selected: bg-[#515151] + text-[#f0c060] | Unselected: no bg + text-white, hover: text-[#f0c060] */}
        <div className="bg-[#2a2a2a] flex items-center gap-[3px] h-[36px] pl-[4px] pr-[4px] rounded-full shrink-0">
          <button
            onClick={() => setLang('EN')}
            className={`
              h-[28px] w-[42px] rounded-full text-[14px] font-medium
              transition-[background-color,color] duration-200
              ${lang === 'EN'
                ? 'bg-[#515151] text-[#f0c060]'
                : 'text-white hover:text-[#f0c060]'
              }
            `}
            aria-pressed={lang === 'EN'}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            onClick={() => setLang('FR')}
            className={`
              h-[28px] w-[40px] rounded-full text-[14px] font-medium
              transition-[background-color,color] duration-200
              ${lang === 'FR'
                ? 'bg-[#515151] text-[#f0c060]'
                : 'text-white hover:text-[#f0c060]'
              }
            `}
            aria-pressed={lang === 'FR'}
            aria-label="Basculer en français"
          >
            FR
          </button>
        </div>
      </div>
    </header>
  )
}
