import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-hdd-calculator/HeroSection';
import CalcSection from '@/pages/support-hdd-calculator/CalcSection';
import HowSection from '@/pages/support-hdd-calculator/HowSection';
import ConsiderationsSection from '@/pages/support-hdd-calculator/ConsiderationsSection';
import Footer from '@/components/Footer';

/** HDD & Bandwidth Calculator — Figma frame 1:8234 */
export default function SupportHddCalculatorPage() {
  return (
    <Page bg={"#f9f9ff"} height={2935} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={479} w={1296} h={996}>
        <CalcSection />
      </Section>
      <Section x={72} y={1507} w={1296} h={280}>
        <HowSection />
      </Section>
      <Section x={72} y={1819} w={1296} h={388}>
        <ConsiderationsSection />
      </Section>
      <Section x={0} y={2291} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
