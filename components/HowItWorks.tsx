// Ellipse decorative image from Figma
const imgEllipse = 'https://www.figma.com/api/mcp/asset/5bd7799c-3775-4803-933e-b258cdbb58a9'

const steps = [
  {
    num: '01',
    title: 'You fill out one short form',
    description: "Business name, industry, what you want visitors to do. That's it — no brief, no calls required upfront.",
    time: 'Your time: 5 minutes',
  },
  {
    num: '02',
    title: 'We research and build',
    description: "We pull your public info, identify your World Cup opportunity, and build your site using our AI-accelerated process. You don't lift a finger.",
    time: 'Our time: 1–3 days',
  },
  {
    num: '03',
    title: 'You review and approve',
    description: 'We send a live staging link. Review it, request changes if needed, and give the green light.',
    time: 'Your time: 30 minutes',
  },
  {
    num: '04',
    title: 'You go live',
    description: 'We push your site live, set up analytics, and hand you a simple guide for basic updates. Ready for tournament day.',
    time: 'Live before May 15',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0a0804] py-20 px-16 min-h-[680px]">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-[3px] h-[14px] bg-[rgba(203,152,58,0.7)] rounded-[2px]" />
        <p className="text-[rgba(203,152,58,0.7)] text-[11px] font-bold tracking-[2px]">HOW IT WORKS</p>
      </div>

      <h2 className="text-white font-bold text-[44px] leading-none tracking-[-1px] mb-12 whitespace-nowrap">
        From zero to live in 3–5 days
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative bg-white/[0.03] border border-[rgba(203,152,58,0.2)] rounded-[16px] overflow-hidden p-5 h-[340px]"
          >
            {/* Ellipse background */}
            <img
              alt=""
              src={imgEllipse}
              className="absolute left-[15px] top-[15px] w-[80px] h-[80px] pointer-events-none"
            />

            {/* Number */}
            <p className="absolute left-[19px] top-[23px] text-[#f0c060] font-bold text-[56px] leading-none tracking-[-2px]">
              {step.num}
            </p>

            {/* Title */}
            <p className="absolute left-[19px] top-[109px] text-white font-bold text-[17px] leading-[1.3] w-[269px]">
              {step.title}
            </p>

            {/* Description */}
            <p className="absolute left-[19px] top-[173px] text-white/62 text-[13px] leading-[1.55] w-[269px]">
              {step.description}
            </p>

            {/* Time */}
            <p className="absolute left-[19px] bottom-[19px] text-[rgba(203,152,58,0.85)] font-semibold text-[12px]">
              {step.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
