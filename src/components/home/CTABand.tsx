import Link from 'next/link'
import { siteConfig } from '@/lib/constants/site'

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand-purple-dark py-xxl">

      {/* Decorative background watermark */}
      <span className="absolute right-0 top-0 font-display text-[20rem] leading-none text-white/5 select-none pointer-events-none">
        BUILD
      </span>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-lg flex items-center justify-between gap-xxl">

        {/* Left — eyebrow, heading, description */}
        <div>
          <div className="flex items-center gap-3 mb-md">
            <span className="block w-8 h-px bg-brand-purple-light" />
            <span className="font-body text-brand-purple-light text-sm uppercase tracking-widest">
              Start Building
            </span>
          </div>
          <h2 className="font-display text-5xl leading-none text-white mb-md">
            Ready to Break Ground?
          </h2>
          <p className="font-body text-white/60 leading-relaxed max-w-2xl">
            {siteConfig.description}
          </p>
        </div>

        {/* Right — CTA buttons stacked */}
        <div className="flex flex-col gap-md shrink-0">
          <Link
            href="/contact"
            className="font-body font-semibold px-8 py-4 bg-white text-brand-purple-dark hover:bg-brand-off-white transition-colors text-center"
          >
            Start a Conversation
          </Link>
          <button
            type="button"
            className="font-body font-semibold px-8 py-4 border border-white/40 text-white hover:border-white transition-colors"
          >
            Download Company Profile
          </button>
        </div>

      </div>
    </section>
  )
}
