import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/partner-experience-center/HeroSection';
import AboutSection from '@/pages/partner-experience-center/AboutSection';
import CentersSection from '@/pages/partner-experience-center/CentersSection';
import Footer from '@/components/Footer';

/** Experience Center — Figma frame 1:4107 */
export default function PartnerExperienceCenterPage() {
  return (
    <Page bg={"#f9f9ff"} height={2468} chrome={true}>
      <Section x={0} y={147} w={1440} h={270}>
        <HeroSection />
      </Section>
      <Section x={0} y={537} w={1440} h={417}>
        <AboutSection />
      </Section>
      <Section x={0} y={1074} w={1440} h={630}>
        <CentersSection />
      </Section>
      <Section x={0} y={1824} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
