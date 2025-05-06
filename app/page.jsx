import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <Benefits />
      <Services />
      <Stats />
      <Projects />
      <CTA />
    </div>
  );
}