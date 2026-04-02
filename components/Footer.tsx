export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-[#080603]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#CB983A]/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="#CB983A"/>
              </svg>
            </div>
            <span className="text-white font-bold tracking-wide">La Fleur Digital</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            <a href="#pricing" className="text-white/40 hover:text-white/70 text-sm transition-colors">Pricing</a>
            <a href="#work" className="text-white/40 hover:text-white/70 text-sm transition-colors">Work</a>
            <a href="#claim" className="text-white/40 hover:text-white/70 text-sm transition-colors">Get Started</a>
          </nav>

          {/* Copyright */}
          <p className="text-white/20 text-xs text-center md:text-right">
            © 2026 La Fleur Digital. All rights reserved.
            <br />
            Toronto, ON · World Cup Campaign
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-white/20 text-xs text-center leading-relaxed max-w-2xl mx-auto">
            La Fleur Digital is an independent web design agency based in Toronto. This campaign is not affiliated with FIFA or any official World Cup organization.
            Pricing is promotional and subject to change. Limited spots available.
          </p>
        </div>
      </div>
    </footer>
  )
}
