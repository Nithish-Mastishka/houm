import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/sol-transport/HeroSection';
import IntroSection from '@/pages/sol-transport/IntroSection';
import CoverageSection from '@/pages/sol-transport/CoverageSection';
import ModesSection from '@/pages/sol-transport/ModesSection';
import WhySection from '@/pages/sol-transport/WhySection';
import ComponentsSection from '@/pages/sol-transport/ComponentsSection';
import ArchitectureSection from '@/pages/sol-transport/ArchitectureSection';
import Footer from '@/components/Footer';

/** Transport — Figma frame 1:3601 */
export default function SolTransportPage() {
  return (
    <Page bg={"#f9f9ff"} height={8305} chrome={true}>
      <Section x={0} y={147} w={1440} h={370}>
        <HeroSection />
      </Section>
      <Section x={242} y={637} w={956} h={96}>
        <IntroSection />
      </Section>
      <Section x={72} y={853} w={1296} h={1424}>
        <CoverageSection />
      </Section>
      <Section x={0} y={2397} w={1440} h={550}>
        <ModesSection />
      </Section>
      <Section x={0} y={3067} w={1440} h={644}>
        <WhySection />
      </Section>
      <Section x={0} y={3831} w={1440} h={2528}>
        <ComponentsSection />
      </Section>
      <Section x={0} y={6479} w={1440} h={1062}>
        <ArchitectureSection />
      </Section>
      <Section x={0} y={7661} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
