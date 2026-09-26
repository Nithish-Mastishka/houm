import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-troubleshooting/HeroSection';
import MainSection from '@/pages/support-troubleshooting/MainSection';
import Footer from '@/components/Footer';

/** Troubleshooting — Figma frame 1:7715 */
export default function SupportTroubleshootingPage() {
  return (
    <Page bg={"#f9f9ff"} height={2021} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={0} y={443} w={1440} h={814}>
        <MainSection />
      </Section>
      <Section x={0} y={1377} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
