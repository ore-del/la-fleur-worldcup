// Real Figma asset URLs for portfolio screenshots
const imgMangrove = 'https://www.figma.com/api/mcp/asset/e746e229-6767-400b-bd05-bc90df2f2d23'
const imgRBRetreats = 'https://www.figma.com/api/mcp/asset/40eebade-a5c1-4d6b-bbb8-e4dd23d3cb73'
const imgNubianScreen1 = 'https://www.figma.com/api/mcp/asset/4c8bc3c2-2285-492b-93e6-bdf696ec80c2'
const imgBCBELA = 'https://www.figma.com/api/mcp/asset/e006b64e-f93f-4d66-8d6d-493dd3cfae95'
const imgClub216 = 'https://www.figma.com/api/mcp/asset/a59180f1-3b3a-44bb-b095-7399ac939453'
const imgAdaAnalytics = 'https://www.figma.com/api/mcp/asset/3a8a5849-40d8-45ab-9e9c-c9d5415757d4'

const projects = [
  {
    name: 'Mangrove Studios',
    category: 'Entertainment',
    description: 'Brand identity, motion design, and full site for a music collaboration platform.',
    img: imgMangrove,
    bg: 'rgb(17,30,60)',
  },
  {
    name: 'R&B Retreats',
    category: 'Hospitality',
    description: 'Photography, wireframing, and full site for a Canadian vacation rental.',
    img: imgRBRetreats,
    bg: 'rgb(17,30,60)',
  },
  {
    name: 'Nubian Divinity',
    category: 'Wellness',
    description: 'New brand identity and landing page for a spiritual wellness business.',
    img: imgNubianScreen1,
    bg: 'rgb(17,30,60)',
  },
  {
    name: 'BCBELA',
    category: 'Education',
    description: 'Full redesign and WordPress build for a BC-based education nonprofit.',
    img: imgBCBELA,
    bg: 'rgb(17,30,60)',
  },
  {
    name: 'Club 216',
    category: 'Entertainment',
    description: "SEO-focused site with videography integration for Toronto's top club.",
    img: imgClub216,
    bg: 'rgb(36,41,92)',
  },
  {
    name: 'Ada Analytics',
    category: 'Technology',
    description: 'Clean data-focused site for a Toronto analytics and insights company.',
    img: imgAdaAnalytics,
    bg: 'rgb(17,30,60)',
  },
]

export default function OurWork() {
  return (
    <section id="work" className="relative bg-[#080603] py-20 px-16 min-h-[770px]">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-[3px] h-[14px] bg-[rgba(203,152,58,0.7)] rounded-[2px]" />
        <p className="text-[rgba(203,152,58,0.7)] text-[11px] font-bold tracking-[2px]">OUR WORK</p>
      </div>

      <h2 className="text-[#f0c060] font-bold text-[40px] leading-none tracking-[-1px] mb-4">
        What to expect from a La Fleur site
      </h2>
      <p className="text-white/60 text-[15px] leading-[1.55] mb-10 max-w-[980px]">
        These are real sites built for real clients. Each took under 2 months using our standard process — and under 5 days with our new AI workflow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-white/[0.03] border border-[rgba(203,152,58,0.15)] rounded-[12px] overflow-hidden h-[260px] relative"
          >
            {/* Screenshot area */}
            <div
              className="h-[139px] flex items-center justify-center overflow-hidden"
              style={{ background: p.bg }}
            >
              <img
                alt={p.name}
                src={p.img}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Category badge */}
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
