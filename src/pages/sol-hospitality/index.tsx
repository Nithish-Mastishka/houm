import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/sol-hospitality/HeroSection';
import ChallengesSection from '@/pages/sol-hospitality/ChallengesSection';
import ApproachSection from '@/pages/sol-hospitality/ApproachSection';
import BenefitsSection from '@/pages/sol-hospitality/BenefitsSection';
import SolutionsSection from '@/pages/sol-hospitality/SolutionsSection';
import Footer from '@/components/Footer';

/** Hospitality — Figma frame 1:2127 */
export default function SolHospitalityPage() {
  return (
    <Page bg={"#f9f9ff"} height={4025} chrome={true}>
      <Section x={0} y={147} w={1440} h={308}>
        <HeroSection />
      </Section>
      <Section x={72} y={539} w={1296} h={402}>
        <ChallengesSection />
      </Section>
      <Section x={72} y={1061} w={1296} h={864}>
        <ApproachSection />
      </Section>
      <Section x={72} y={2045} w={1296} h={420}>
        <BenefitsSection />
      </Section>
      <Section x={72} y={2585} w={1296} h={676}>
        <SolutionsSection />
      </Section>
      <Section x={0} y={3381} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
