import Link from 'next/link'
import { siteConfig } from '@/lib/constants/site'

// Tailwind has no built-in grid-pattern utility, so the overlay is applied via inline style
const gridOverlay: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
  `,
  backgroundSize: '48px 48px',
}

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '12+', label: 'Years Experience' },
  { value: '98%',  label: 'Client Satisfaction' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-brand-green-dark text-white flex flex-col justify-end pt-32"
      style={gridOverlay}
    >
      {/* Bottom-anchored two-column content */}
      <div className="container mx-auto px-6 pb-24 flex items-end gap-16">

        {/* Left — eyebrow, headline, description, CTAs */}
        <div className="flex-1 w-full">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-brand-green-light" />
            <span className="font-body text-brand-green-light text-sm uppercase tracking-widest">
              Building What Matters
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-7xl leading-none mb-8">
            We Build
            <br />
            <span className="text-brand-purple-light">Beyond Boundaries</span>
          </h1>

          {/* Description */}
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mb-10">
            {siteConfig.description}
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="font-body font-semibold px-8 py-4 bg-brand-purple-mid text-white hover:bg-brand-purple-dark transition-colors"
            >
              View Our Projects
            </Link>
            <Link
              href="/how-we-build"
              className="font-body font-semibold px-8 py-4 border border-white text-white hover:bg-white hover:text-brand-green-dark transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right — stacked stats, right-aligned */}
        <div className="flex flex-col items-end gap-10 text-right shrink-0">
          {stats.map((stat) => (
            <div key={stat.value}>
              <div className="font-display text-6xl leading-none">{stat.value}</div>
              <div className="font-body text-xs uppercase tracking-widest text-white/55 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — centered at the bottom edge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <span className="block w-px h-10 bg-white/25" />
      </div>
    </section>
  )
}
