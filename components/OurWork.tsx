const projects = [
  {
    name: 'Maison Roux',
    category: 'Hospitality',
    description: 'Upscale French bistro in the Distillery District. World Cup landing page with reservation flow.',
    color: '#CB983A',
  },
  {
    name: 'Elevate Wellness',
    category: 'Wellness',
    description: 'Yoga and recovery studio. Campaign page targeting visiting athletes and tourists.',
    color: '#F0C060',
  },
  {
    name: 'Kinetic Sports Bar',
    category: 'Entertainment',
    description: 'Sports bar near Scotiabank Arena. Full site with event calendar and table booking.',
    color: '#C41E1E',
  },
  {
    name: 'Lingua Academy',
    category: 'Education',
    description: 'Language school offering immersive programs for international World Cup visitors.',
    color: '#CB983A',
  },
  {
    name: 'Apex Travel Co.',
    category: 'Technology',
    description: 'Toronto-based travel tech startup. Rebuilt site to capture inbound tourism demand.',
    color: '#F0C060',
  },
  {
    name: 'Portside Market',
    category: 'Entertainment',
    description: 'Artisan food market on the waterfront. Campaign site highlighting local vendors.',
    color: '#CB983A',
  },
]

const categoryColors: Record<string, string> = {
  Hospitality: '#CB983A',
  Wellness: '#F0C060',
  Entertainment: '#C41E1E',
  Education: '#7C9FBE',
  Technology: '#6B8F71',
}

export default function OurWork() {
  return (
    <section id="work" className="py-24 px-6 bg-[#080603]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-[#CB983A] text-xs tracking-[3px] uppercase font-medium mb-4 text-center">
          Portfolio
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          What to expect from a La Fleur site
        </h2>
        <p className="text-white/50 text-center max-w-xl mx-auto mb-16 leading-relaxed">
          We've built for restaurants, studios, markets, and more. Here's a sample of recent World Cup campaign work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-pointer"
            >
              {/* Mockup placeholder */}
              <div className="relative h-44 bg-white/5 overflow-hidden">
                {/* Simulated browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="flex-1 mx-2 h-3 rounded bg-white/10" />
                </div>
                {/* Simulated page layout */}
                <div className="p-3 space-y-2">
                  <div className="h-3 rounded bg-white/10 w-3/4" />
                  <div className="h-2 rounded bg-white/6 w-full" />
                  <div className="h-2 rounded bg-white/6 w-5/6" />
                  <div className="h-6 rounded mt-3" style={{ background: `${project.color}30`, borderLeft: `2px solid ${project.color}` }} />
                  <div className="grid grid-cols-3 gap-1 mt-2">
                    <div className="h-8 rounded bg-white/5" />
                    <div className="h-8 rounded bg-white/5" />
                    <div className="h-8 rounded bg-white/5" />
                  </div>
                </div>

                {/* Color accent glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 opacity-30 blur-sm"
                  style={{ background: `linear-gradient(to top, ${project.color}60, transparent)` }}
                />
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-semibold">{project.name}</h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ml-2"
                    style={{
                      color: categoryColors[project.category] || '#CB983A',
                      background: `${categoryColors[project.category] || '#CB983A'}20`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
