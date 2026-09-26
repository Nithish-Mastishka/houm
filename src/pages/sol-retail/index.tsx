import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/sol-retail/HeroSection';
import ChallengesSection from '@/pages/sol-retail/ChallengesSection';
import TouchpointsSection from '@/pages/sol-retail/TouchpointsSection';
import SolutionSection from '@/pages/sol-retail/SolutionSection';
import IntelligenceSection from '@/pages/sol-retail/IntelligenceSection';
import Footer from '@/components/Footer';

/** Retail — Figma frame 1:2453 */
export default function SolRetailPage() {
  return (
    <Page bg={"#f9f9ff"} height={7233} chrome={true}>
      <Section x={0} y={147} w={1440} h={370}>
        <HeroSection />
      </Section>
      <Section x={72} y={601} w={1296} h={582}>
        <ChallengesSection />
      </Section>
      <Section x={72} y={1303} w={1296} h={750}>
        <TouchpointsSection />
      </Section>
      <Section x={0} y={2173} w={1440} h={3630}>
        <SolutionSection />
      </Section>
      <Section x={72} y={5923} w={1296} h={546}>
        <IntelligenceSection />
      </Section>
      <Section x={0} y={6589} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
