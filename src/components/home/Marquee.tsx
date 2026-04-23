import { siteConfig } from '@/lib/constants/site'

const items = [
  'Residential Construction',
  'Data Centers',
  'Commercial Buildings',
  'Healthcare Facilities',
  'Industrial Projects',
  'Infrastructure Works',
  'Mission Critical',
  'Project Management',
]

function MarqueeItem({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-3 px-8 shrink-0">
      <span className="block w-1.5 h-1.5 rounded-full bg-brand-purple-light" />
      <span className="font-body text-sm uppercase tracking-widest whitespace-nowrap">
        {label}
      </span>
    </span>
  )
}

export default function Marquee() {
  return (
    <div
      className="bg-brand-purple-dark text-white/70 overflow-hidden py-4"
      aria-label={`${siteConfig.name} services`}
      aria-hidden="true"
    >
      {/*
        The list is rendered twice so translateX(-50%) lands exactly where
        the first copy started — making the loop invisible. See explanation below.
      */}
      <div className="flex animate-[marquee_28s_linear_infinite]">
        {items.map((item) => (
          <MarqueeItem key={item} label={item} />
        ))}
        {items.map((item) => (
          <MarqueeItem key={`${item}-copy`} label={item} />
        ))}
      </div>
    </div>
  )
}
