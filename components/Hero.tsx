import CountdownTimer from './CountdownTimer'

// Real Figma asset - Toronto cityscape
const imgHeroBg = 'https://www.figma.com/api/mcp/asset/34549b6d-c89f-4bc3-b364-7fb7ec7f2eab'
// Star/sparkle decorative element
const imgSparkle = 'https://www.figma.com/api/mcp/asset/81c5e386-14d9-4350-a295-685388f04967'

export default function Hero() {
  return (
    <section className="relative h-[680px] overflow-hidden bg-[#080603]">
      {/* Background cityscape */}
      <div className="absolute inset-0">
        <img
          alt=""
          src={imgHeroBg}
          className="absolute w-full object-cover object-bottom opacity-60 pointer-events-none"
          style={{ height: '2210px', top: '-1328px' }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#080603]/40" />

      {/* Deadline Bar — top center */}
      <div className="absolute left-1/2 -translate-x-1/2 top-9 z-10">
        <div className="flex items-center gap-10 bg-black/40 border border-white/15 backdrop-blur-sm rounded-full px-6 py-4">
          <div className="flex flex-col items-start">
            <p className="text-[#080603] text-[14px] font-bold leading-snug bg-[#d2a822] px-2 py-0.5 rounded whitespace-pre-line hidden" />
            <p className="text-white text-[14px] font-bold leading-snug whitespace-pre-line">
              {'Launch your world cup \nwebsite before the kickoff'}
            </p>
          </div>
          <CountdownTimer />
        </div>
      </div>

      {/* Sparkle decoration */}
      <img
        alt=""
        src={imgSparkle}
        className="absolute right-[285px] top-[295px] w-[85px] h-[90px] pointer-events-none z-10"
      />

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
        <h1
          className="text-white font-bold text-[56px] leading-[1.08] tracking-[-1.5px] max-w-[900px] mx-auto"
          style={{ marginTop: '60px' }}
        >
          Your business, ready for a billion eyes in Toronto
        </h1>
        <p className="text-white/60 text-[17px] leading-[1.6] max-w-[760px] mx-auto mt-6">
          The World Cup kicks off June 12. Over a million visitors are coming to your city.
          <br />
          {`We'll get your business online — fast, sharp, and built to convert — before the opening whistle.`}
        </p>
      </div>
    </section>
  )
}
