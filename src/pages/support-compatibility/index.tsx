import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-compatibility/HeroSection';
import MainSection from '@/pages/support-compatibility/MainSection';
import Footer from '@/components/Footer';

/** Compatibility List — Figma frame 1:7621 */
export default function SupportCompatibilityPage() {
  return (
    <Page bg={"#f9f9ff"} height={1908} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={0} y={443} w={1440} h={701}>
        <MainSection />
      </Section>
      <Section x={0} y={1264} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
