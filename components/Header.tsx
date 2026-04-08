'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

const imgLogo = 'https://raw.githubusercontent.com/ore-del/la-fleur-worldcup/main/La%20Fleur%20logo%20wc.svg'
const imgFlowerFallback = 'https://www.figma.com/api/mcp/asset/5bc0d7fb-dedc-40f5-bb4d-69d4f85bf14f'

export default function Header() {
  const { lang, setLang, tx } = useLanguage()
  const [scrolled, setScrolled]   = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500"
        style={{ paddingTop: scrolled ? '10px' : '14px' }}
      >
        <div
          className={`
            flex items-center justify-between
            border transition-all duration-500
            ${scrolled
              ? 'w-[min(920px,calc(100vw-32px))] rounded-full px-5 h-[52px] bg-black/75 backdrop-blur-lg border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.55)]'
              : 'w-[min(1200px,calc(100vw-48px))] rounded-full px-6 h-[60px] bg-black/50 backdrop-blur-md border-white/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
            }
          `}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-[6px] shrink-0" onClick={close}>
            {logoFailed ? (
              <>
                <span className="text-white font-bold text-[22px] leading-none select-none"
                  style={{ fontFamily: "'Satoshi','Inter',sans-serif", letterSpacing: '-0.3px' }}>
                  La Fleur
                </span>
                <img src={imgFlowerFallback} alt="" aria-hidden
                  className="object-contain select-none"
                  style={{ height: '26px', width: 'auto', marginBottom: '-2px' }} />
              </>
            ) : (
              <img
                src={imgLogo}
                alt="La Fleur"
                className="h-[42px] w-auto object-contain select-none"
                style={{ marginTop: '-5px' }}
                onError={() => setLogoFailed(true)}
              />
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="/pricing" className="text-white/75 hover:text-white text-[13px] font-medium transition-colors duration-200">
              {tx.nav.pricing}
            </a>
            <a href="/how-it-works" className="text-white/75 hover:text-white text-[13px] font-medium transition-colors duration-200">
              {tx.nav.aiWorkflow}
            </a>
            <a href="https://la-fleur.digital/our-work/" className="text-white/75 hover:text-white text-[13px] font-medium transition-colors duration-200">
              {tx.nav.work}
            </a>
          </nav>

          {/* Right side: lang toggle + hamburger */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="bg-[#2a2a2a] flex items-center gap-[3px] h-[36px] px-[4px] rounded-full shrink-0">
              <button
                onClick={() => setLang('EN')}
                className={`h-[28px] w-[42px] rounded-full text-[14px] font-medium transition-[background-color,color] duration-200 ${
                  lang === 'EN' ? 'bg-[#515151] text-[#f0c060]' : 'text-white hover:text-[#f0c060]'
                }`}
                aria-pressed={lang === 'EN'}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('FR')}
                className={`h-[28px] w-[40px] rounded-full text-[14px] font-medium transition-[background-color,color] duration-200 ${
                  lang === 'FR' ? 'bg-[#515151] text-[#f0c060]' : 'text-white hover:text-[#f0c060]'
                }`}
                aria-pressed={lang === 'FR'}
                aria-label="Basculer en français"
              >
                FR
              </button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-[36px] h-[36px] gap-[5px] shrink-0"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-[20px] h-[2px] bg-white rounded-full origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-[20px] h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-[20px] h-[2px] bg-white rounded-full origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#080603]/90 backdrop-blur-xl" onClick={close} />

        {/* Menu content */}
        <nav className="absolute inset-0 flex flex-col items-center justify-center gap-10">
          <a href="/pricing" onClick={close}
            className="text-white font-bold text-[32px] tracking-[-0.5px] hover:text-[#f0c060] transition-colors duration-200">
            {tx.nav.pricing}
          </a>
          <a href="/how-it-works" onClick={close}
            className="text-white font-bold text-[32px] tracking-[-0.5px] hover:text-[#f0c060] transition-colors duration-200">
            {tx.nav.aiWorkflow}
          </a>
          <a href="https://la-fleur.digital/our-work/" onClick={close}
            className="text-white font-bold text-[32px] tracking-[-0.5px] hover:text-[#f0c060] transition-colors duration-200">
            {tx.nav.work}
          </a>
        </nav>
      </div>
    </>
  )
}
