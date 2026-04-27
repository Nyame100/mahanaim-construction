import Link from 'next/link'

interface Insight {
  title: string
  date: string
  category: string
  gradient: string
  excerpt?: string
}

const insights: Insight[] = [
  {
    title: "How Data Center Construction Is Reshaping Africa's Digital Future",
    date: 'April 10, 2026',
    category: 'Technology',
    gradient: 'bg-gradient-to-br from-green-950 to-purple-900',
    excerpt:
      "Africa's infrastructure boom is accelerating demand for carrier-neutral facilities built to meet global Tier-IV standards.",
  },
  {
    title: 'Green Building Practices We Have Adopted in 2026',
    date: 'March 28, 2026',
    category: 'Sustainability',
    gradient: 'bg-gradient-to-br from-purple-950 to-purple-800',
  },
  {
    title: 'Inside the Apex Data Hub: A Year in Review',
    date: 'March 12, 2026',
    category: 'Projects',
    gradient: 'bg-gradient-to-br from-green-950 to-green-800',
  },
]

export default function Insights() {
  return (
    <section className="bg-brand-off-white py-xxl">
      <div className="container mx-auto px-lg">

        {/* Section header */}
        <div className="flex items-end justify-between mb-xxl">
          <div>
            <div className="flex items-center gap-3 mb-md">
              <span className="block w-8 h-px bg-brand-green-light" />
              <span className="font-body text-brand-green-light text-sm uppercase tracking-widest">
                Latest From Us
              </span>
            </div>
            <h2 className="font-display text-5xl leading-none text-brand-charcoal">
              Insights &amp; News
            </h2>
          </div>

          <Link
            href="/news/all"
            className="font-body text-sm text-brand-charcoal/60 hover:text-brand-charcoal transition-colors shrink-0"
          >
            All Articles →
          </Link>
        </div>

        {/* Insight cards */}
        <div className="grid grid-cols-3 gap-lg">
          {insights.map((insight, index) => (
            <Link
              key={insight.title}
              href="/news/all"
              className="bg-white hover:-translate-y-1 transition-transform flex flex-col"
            >
              {/* Thumbnail */}
              <div className={`relative ${index === 0 ? 'h-56' : 'h-40'} ${insight.gradient}`}>
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-brand-purple-mid text-white font-body text-xs uppercase tracking-wider">
                  {insight.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-lg flex flex-col gap-3 flex-1">
                <p className="font-body text-xs text-brand-charcoal/50 uppercase tracking-wider">
                  {insight.date}
                </p>
                <h3 className="font-display text-xl leading-snug text-brand-charcoal">
                  {insight.title}
                </h3>
                {insight.excerpt && (
                  <p className="font-body text-sm text-brand-charcoal/55 leading-relaxed">
                    {insight.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
