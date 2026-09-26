import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/partner-galaxy-store/HeroSection';
import AboutSection from '@/pages/partner-galaxy-store/AboutSection';
import StoresSection from '@/pages/partner-galaxy-store/StoresSection';
import Footer from '@/components/Footer';

/** Galaxy Store — Figma frame 1:4169 */
export default function PartnerGalaxyStorePage() {
  return (
    <Page bg={"#f9f9ff"} height={2637} chrome={true}>
      <Section x={0} y={147} w={1440} h={318}>
        <HeroSection />
      </Section>
      <Section x={0} y={585} w={1440} h={518}>
        <AboutSection />
      </Section>
      <Section x={0} y={1223} w={1440} h={650}>
        <StoresSection />
      </Section>
      <Section x={0} y={1993} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
