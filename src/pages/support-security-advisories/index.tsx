import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-security-advisories/HeroSection';
import MainSection from '@/pages/support-security-advisories/MainSection';
import Footer from '@/components/Footer';

/** Security Advisories — Figma frame 1:8665 */
export default function SupportSecurityAdvisoriesPage() {
  return (
    <Page bg={"#f9f9ff"} height={2560} chrome={true}>
      <Section x={0} y={147} w={1440} h={294}>
        <HeroSection />
      </Section>
      <Section x={0} y={525} w={1440} h={1271}>
        <MainSection />
      </Section>
      <Section x={0} y={1916} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
