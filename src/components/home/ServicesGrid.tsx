import Link from 'next/link'
import { siteConfig } from '@/lib/constants/site'

export default function ServicesGrid() {
  return (
    <section className="bg-brand-charcoal text-white py-xxl">
      <div className="container mx-auto px-lg">

        {/* Section header — eyebrow + heading left, "View All" link right */}
        <div className="flex items-end justify-between mb-xxl">
          <div>
            <div className="flex items-center gap-3 mb-md">
              <span className="block w-8 h-px bg-brand-green-light" />
              <span className="font-body text-brand-green-light text-sm uppercase tracking-widest">
                What We Do
              </span>
            </div>
            <h2 className="font-display text-5xl leading-none">Our Core Capabilities</h2>
          </div>

          <Link
            href="/how-we-build"
            className="font-body text-sm text-white/60 hover:text-white transition-colors shrink-0"
          >
            View All Services →
          </Link>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-3 gap-lg">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.href}
              className="flex flex-col gap-md bg-white/5 hover:bg-white/10 border-t-2 border-transparent hover:border-brand-green-mid transition-colors p-xl"
            >
              {/* Zero-padded sequence number */}
              <span className="font-body text-sm text-brand-purple-light">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="font-display text-3xl leading-none">{service.title}</h3>

              <p className="font-body text-sm text-white/50 leading-relaxed flex-1">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="font-body text-sm text-brand-green-light hover:text-white transition-colors"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
