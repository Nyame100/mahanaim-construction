import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb: string
  eyebrow?: string
}

// Tailwind has no built-in grid-pattern utility, so the overlay is applied via inline style
const gridOverlay: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
  `,
  backgroundSize: '48px 48px',
}

export default function PageHero({ title, subtitle, breadcrumb, eyebrow }: PageHeroProps) {
  return (
    <section
      className="bg-brand-green-dark text-white min-h-64 flex flex-col justify-end px-lg pb-xxl pt-xxxl"
      style={gridOverlay}
    >
      <div className="container mx-auto">

        {/* Breadcrumb */}
        <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-md">
          <Link href="/" className="hover:text-white/70 transition-colors">
            Home
          </Link>
          {' / '}
          {breadcrumb}
        </p>

        {/* Optional eyebrow label */}
        {eyebrow && (
          <div className="flex items-center gap-3 mb-md">
            <span className="block w-8 h-px bg-brand-green-light" />
            <span className="font-body text-brand-green-light text-sm uppercase tracking-widest">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Page title */}
        <h1 className="font-display text-6xl leading-none text-white">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-white/60 max-w-2xl mt-md">
          {subtitle}
        </p>

      </div>
    </section>
  )
}
