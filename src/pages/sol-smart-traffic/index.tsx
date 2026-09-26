import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/sol-smart-traffic/HeroSection';
import CoverageSection from '@/pages/sol-smart-traffic/CoverageSection';
import ChallengesSection from '@/pages/sol-smart-traffic/ChallengesSection';
import WhySection from '@/pages/sol-smart-traffic/WhySection';
import CapabilitiesSection from '@/pages/sol-smart-traffic/CapabilitiesSection';
import Footer from '@/components/Footer';

/** Smart Traffic — Figma frame 1:3276 */
export default function SolSmartTrafficPage() {
  return (
    <Page bg={"#f9f9ff"} height={5941} chrome={true}>
      <Section x={0} y={147} w={1440} h={370}>
        <HeroSection />
      </Section>
      <Section x={72} y={637} w={1296} h={672}>
        <CoverageSection />
      </Section>
      <Section x={72} y={1429} w={1296} h={1301}>
        <ChallengesSection />
      </Section>
      <Section x={72} y={2850} w={1296} h={644}>
        <WhySection />
      </Section>
      <Section x={0} y={3614} w={1440} h={1683}>
        <CapabilitiesSection />
      </Section>
      <Section x={0} y={5297} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
