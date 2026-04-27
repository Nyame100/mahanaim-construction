const steps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'Understanding your goals, site conditions and project scope.',
  },
  {
    number: 2,
    title: 'Planning',
    description: 'Detailed design, BIM modeling and pre-construction engineering.',
  },
  {
    number: 3,
    title: 'Procurement',
    description: 'Sourcing quality materials and assembling specialist teams.',
  },
  {
    number: 4,
    title: 'Construction',
    description: 'Safe, precise execution with real-time quality control.',
  },
  {
    number: 5,
    title: 'Handover',
    description: 'Full commissioning, documentation and ongoing support.',
  },
]

// Alternate circle colours per spec: green-dark for 1-2, purple-mid for 3, charcoal for 4-5
function circleClass(index: number): string {
  if (index <= 1) return 'bg-brand-green-dark text-white'
  if (index === 2) return 'bg-brand-purple-mid text-white'
  return 'bg-brand-charcoal text-white'
}

export default function ProcessSteps() {
  return (
    <section className="bg-white py-xxl">
      <div className="container mx-auto px-lg">

        {/* Section header */}
        <div className="mb-xxl">
          <div className="flex items-center gap-3 mb-md">
            <span className="block w-8 h-px bg-brand-green-light" />
            <span className="font-body text-brand-green-light text-sm uppercase tracking-widest">
              How We Work
            </span>
          </div>
          <h2 className="font-display text-5xl leading-none text-brand-charcoal">
            Our Process
          </h2>
        </div>

        {/* Steps row — horizontal connecting line behind the circles */}
        <div className="relative flex justify-between">

          {/* Connecting line centred on the circles (top-7 = half of h-14) */}
          <div className="absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-brand-green-mid to-brand-purple-mid" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-display text-xl mb-lg ${circleClass(index)}`}
              >
                {step.number}
              </div>
              <h3 className="font-display text-lg text-brand-charcoal mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-brand-charcoal/55 leading-relaxed max-w-32">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
