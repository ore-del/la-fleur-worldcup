import CountdownTimer from './CountdownTimer'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080603]">
      {/* Background cityscape overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 900'%3E%3Crect width='1440' height='900' fill='%23080603'/%3E%3Crect x='100' y='400' width='80' height='500' fill='%23ffffff' opacity='0.05'/%3E%3Crect x='200' y='300' width='60' height='600' fill='%23ffffff' opacity='0.04'/%3E%3Crect x='280' y='350' width='100' height='550' fill='%23ffffff' opacity='0.06'/%3E%3Crect x='400' y='250' width='70' height='650' fill='%23ffffff' opacity='0.05'/%3E%3Crect x='490' y='320' width='50' height='580' fill='%23ffffff' opacity='0.03'/%3E%3Crect x='560' y='200' width='120' height='700' fill='%23ffffff' opacity='0.07'/%3E%3Crect x='700' y='280' width='80' height='620' fill='%23ffffff' opacity='0.05'/%3E%3Crect x='800' y='350' width='60' height='550' fill='%23ffffff' opacity='0.04'/%3E%3Crect x='880' y='220' width='90' height='680' fill='%23ffffff' opacity='0.06'/%3E%3Crect x='990' y='300' width='70' height='600' fill='%23ffffff' opacity='0.05'/%3E%3Crect x='1080' y='380' width='50' height='520' fill='%23ffffff' opacity='0.03'/%3E%3Crect x='1150' y='260' width='100' height='640' fill='%23ffffff' opacity='0.05'/%3E%3Crect x='1270' y='330' width='80' height='570' fill='%23ffffff' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      />

      {/* Gold gradient glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#CB983A]/10 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-[#CB983A]/10" />
      <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full border border-[#CB983A]/10" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full border border-[#CB983A]/10" />

      {/* Decorative vertical lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#CB983A]/10 ml-8 hidden lg:block" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-[#CB983A]/10 mr-8 hidden lg:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Label */}
        <p className="text-[#CB983A] text-xs tracking-[3px] uppercase font-medium mb-6">
          World Cup 2026 · Toronto · June 11 – July 19
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
          Your business, ready for{' '}
          <span className="text-[#F0C060]">a billion eyes</span>
          {' '}in Toronto
        </h1>

        {/* Subheadline */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          The World Cup is coming. 1.5M+ visitors. $2.4B+ in local spending.
          We'll get your business online in 3–5 days — before the crowds arrive.
        </p>

        {/* Countdown */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-white/40 text-xs tracking-[2px] uppercase mb-4">
            Kickoff Countdown
          </p>
          <CountdownTimer />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#claim"
            className="px-8 py-4 bg-[#CB983A] text-[#080603] font-semibold rounded-lg hover:bg-[#F0C060] transition-colors text-sm tracking-wide"
          >
            Claim Your Spot
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 border border-[#CB983A] text-[#CB983A] font-semibold rounded-lg hover:bg-[#CB983A]/10 transition-colors text-sm tracking-wide"
          >
            See Pricing
          </a>
        </div>

        {/* Spots progress */}
        <div className="mt-12 max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/50 text-xs tracking-wide">Spots claimed</span>
            <span className="text-[#F0C060] text-xs font-semibold">7 / 20</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#CB983A] to-[#F0C060] rounded-full transition-all"
              style={{ width: '35%' }}
            />
          </div>
          <p className="text-white/30 text-xs mt-2 text-center">
            13 spots remaining at this rate
          </p>
        </div>
      </div>
    </section>
  )
}
