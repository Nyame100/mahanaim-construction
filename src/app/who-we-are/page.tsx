import PageHero from '@/components/ui/PageHero'
import CTABand from '@/components/home/CTABand'
import { siteConfig } from '@/lib/constants/site'

interface TeamMember {
  name: string
  role: string
  initials: string
  color: string // Tailwind bg class
}

const teamMembers: TeamMember[] = [
  { name: 'Joseph Djaba',   role: 'Founder & Managing Director', initials: 'JD', color: 'bg-brand-green-dark' },
  { name: 'Nana Kwesi',     role: 'Director of Operations',      initials: 'NK', color: 'bg-brand-purple-mid' },
  { name: 'Richmond Nyame', role: 'Chief Technical Officer',     initials: 'RN', color: 'bg-brand-green-mid'  },
]

const certifications: string[] = [
  'ISO 9001:2015',
  'Green Building Certified',
  'OHSAS 18001',
  'COREN Registered',
]

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        subtitle="A construction firm grounded in purpose, driven by technical excellence, and committed to building environments that endure."
        breadcrumb="Who We Are"
        eyebrow="Company"
      />

      {/* Our Story */}
      <section className="bg-white py-xxl">
        <div className="container mx-auto px-lg grid grid-cols-2 gap-xxl">

          {/* Left — narrative */}
          <div>
            <div className="flex items-center gap-3 mb-md">
              <span className="block w-8 h-px bg-brand-green-mid" />
              <span className="font-body text-brand-green-mid text-sm uppercase tracking-widest">
                Our Story
              </span>
            </div>
            <h2 className="font-display text-5xl leading-none text-brand-charcoal mb-lg">
              Built on Trust, Driven by Excellence
            </h2>
            <p className="font-body text-brand-charcoal/70 leading-relaxed mb-md">
              {siteConfig.name} was founded with a singular conviction: that Africa deserves
              construction of the highest global standard. From our first project in Tema, we
              have grown into a firm trusted by developers, governments, and communities to
              deliver buildings that stand as benchmarks for quality and durability.
            </p>
            <p className="font-body text-brand-charcoal/70 leading-relaxed">
              Every project we take on is underpinned by rigorous preconstruction planning,
              transparent client relationships, and a workforce trained to the most demanding
              international standards. We do not chase volume — we pursue excellence, and let
              our portfolio speak for itself.
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-md content-start">
            {[
              { value: '150+', label: 'Projects' },
              { value: '12+',  label: 'Years' },
              { value: '6',    label: 'Locations' },
              { value: '98%',  label: 'Satisfaction' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-brand-green-pale border-t-4 border-brand-green-mid p-xl"
              >
                <p className="font-display text-5xl leading-none text-brand-green-dark mb-sm">
                  {value}
                </p>
                <p className="font-body text-sm uppercase tracking-widest text-brand-charcoal/60">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership */}
      <section className="bg-brand-off-white py-xxl">
        <div className="container mx-auto px-lg">

          <div className="flex items-center gap-3 mb-md">
            <span className="block w-8 h-px bg-brand-green-mid" />
            <span className="font-body text-brand-green-mid text-sm uppercase tracking-widest">
              Our People
            </span>
          </div>
          <h2 className="font-display text-5xl leading-none text-brand-charcoal mb-xxl">
            Leadership Team
          </h2>

          <div className="grid grid-cols-3 gap-lg">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white">
                {/* Avatar area */}
                <div className={`relative h-48 flex items-center justify-center ${member.color}`}>
                  <span className="font-display text-5xl text-white/20 select-none">
                    {member.initials}
                  </span>
                  {/* Role strip */}
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-purple-mid px-lg py-sm">
                    <p className="font-body text-xs uppercase tracking-widest text-white/80">
                      {member.role}
                    </p>
                  </div>
                </div>
                {/* Name */}
                <div className="p-lg">
                  <p className="font-display text-xl text-brand-charcoal">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-xxl">
        <div className="container mx-auto px-lg">

          <div className="flex items-center gap-3 mb-md">
            <span className="block w-8 h-px bg-brand-green-mid" />
            <span className="font-body text-brand-green-mid text-sm uppercase tracking-widest">
              Our Standards
            </span>
          </div>
          <h2 className="font-display text-5xl leading-none text-brand-charcoal mb-xxl">
            Certifications &amp; Accreditations
          </h2>

          <div className="grid grid-cols-4 gap-lg">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-brand-off-white border-t-2 border-brand-green-mid p-xl text-center"
              >
                <p className="font-display text-lg text-brand-charcoal">{cert}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTABand />
    </>
  )
}
