import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ProcessSteps from "@/components/home/ProcessSteps";
import ProjectsGrid from "@/components/home/ProjectsGrid";
import ServicesGrid from "@/components/home/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Marquee/>
      <ServicesGrid/>
      <ProjectsGrid/>
      <ProcessSteps/>
    </main>
  );
}
