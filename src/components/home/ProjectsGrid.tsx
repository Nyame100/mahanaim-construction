import Link from 'next/link'

interface Project {
  title: string
  location: string
  sector: string
  gradient: string
}

const projects: Project[] = [
  {
    title: 'Apex Tier-IV Data Hub',
    location: 'Lagos',
    sector: 'Data Center',
    gradient: 'bg-gradient-to-br from-green-950 to-green-800',
  },
  {
    title: 'Greenview Estate',
    location: 'Accra',
    sector: 'Residential',
    gradient: 'bg-gradient-to-br from-purple-950 to-purple-800',
  },
  {
    title: 'Crown Office Park',
    location: 'Takoradi',
    sector: 'Commercial',
    gradient: 'bg-gradient-to-br from-slate-900 to-slate-700',
  },
  {
    title: 'Unity Medical Centre',
    location: 'Kumasi',
    sector: 'Healthcare',
    gradient: 'bg-gradient-to-br from-stone-950 to-amber-900',
  },
  {
    title: 'Northern Corridor Road',
    location: 'Tema',
    sector: 'Infrastructure',
    gradient: 'bg-gradient-to-br from-indigo-950 to-indigo-800',
  },
]

// Tailwind has no repeating diagonal-line utility; inline style is required
const diagonalPattern: React.CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)',
}

export default function ProjectsGrid() {
  return (
    <section className="bg-brand-off-white py-xxl">
      <div className="container mx-auto px-lg">

        {/* Section header */}
        <div className="flex items-end justify-between mb-xxl">
          <div>
            <div className="flex items-center gap-3 mb-md">
              <span className="block w-8 h-px bg-brand-green-light" />
              <span className="font-body text-brand-green-light text-sm uppercase tracking-widest">
                Our Work
              </span>
            </div>
            <h2 className="font-display text-5xl leading-none text-brand-charcoal">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="font-body text-sm text-brand-charcoal/60 hover:text-brand-charcoal transition-colors shrink-0"
          >
            View All Projects →
          </Link>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-md">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href="/projects"
              className={[
                'relative overflow-hidden min-h-64',
                'hover:scale-[1.02] transition-transform',
                project.gradient,
                index === 0 ? 'row-span-2' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {/* Diagonal line pattern overlay */}
              <div className="absolute inset-0" style={diagonalPattern} />

              {/* Bottom dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Card content anchored to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-lg flex flex-col gap-2">
                <span className="self-start px-3 py-1 bg-brand-purple-mid text-white font-body text-xs uppercase tracking-wider">
                  {project.sector}
                </span>
                <h3 className="font-display text-2xl leading-tight text-white">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-white/60">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
