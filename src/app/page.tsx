import CTABand from "@/components/home/CTABand";
import Hero from "@/components/home/Hero";
import Insights from "@/components/home/Insights";
import Marquee from "@/components/home/Marquee";
import ProcessSteps from "@/components/home/ProcessSteps";
import ProjectsGrid from "@/components/home/ProjectsGrid";
import Sectors from "@/components/home/Sectors";
import ServicesGrid from "@/components/home/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Marquee/>
      <ServicesGrid/>
      <ProjectsGrid/>
      <Sectors/>
      <ProcessSteps/>
      <Insights/>
      <CTABand/>
    </main>
  );
}
