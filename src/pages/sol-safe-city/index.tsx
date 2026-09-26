import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/sol-safe-city/HeroSection';
import OverviewSection from '@/pages/sol-safe-city/OverviewSection';
import ChallengeSection from '@/pages/sol-safe-city/ChallengeSection';
import EcosystemSection from '@/pages/sol-safe-city/EcosystemSection';
import AreasSection from '@/pages/sol-safe-city/AreasSection';
import StatsSection from '@/pages/sol-safe-city/StatsSection';
import ArchitectureSection from '@/pages/sol-safe-city/ArchitectureSection';
import Footer from '@/components/Footer';

/** Safe City — Figma frame 1:2966 */
export default function SolSafeCityPage() {
  return (
    <Page bg={"#f9f9ff"} height={5653} chrome={true}>
      <Section x={0} y={147} w={1440} h={370}>
        <HeroSection />
      </Section>
      <Section x={72} y={637} w={1296} h={500}>
        <OverviewSection />
      </Section>
      <Section x={72} y={1257} w={1296} h={659}>
        <ChallengeSection />
      </Section>
      <Section x={72} y={2036} w={1296} h={715}>
        <EcosystemSection />
      </Section>
      <Section x={72} y={2871} w={1296} h={924}>
        <AreasSection />
      </Section>
      <Section x={72} y={3915} w={1296} h={114}>
        <StatsSection />
      </Section>
      <Section x={72} y={4149} w={1296} h={740}>
        <ArchitectureSection />
      </Section>
      <Section x={0} y={5009} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
