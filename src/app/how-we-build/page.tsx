import PageHero from '@/components/ui/PageHero'
import ServicesGrid from '@/components/home/ServicesGrid'
import ProcessSteps from '@/components/home/ProcessSteps'
import CTABand from '@/components/home/CTABand'

export default function HowWeBuildPage() {
  return (
    <>
      <PageHero
        title="How We Build"
        subtitle="Innovative methods, rigorous standards and a relentless focus on delivery excellence across every project type."
        breadcrumb="How We Build"
        eyebrow="Our Approach"
      />
      <ServicesGrid />
      <ProcessSteps />
      <CTABand />
    </>
  )
}
