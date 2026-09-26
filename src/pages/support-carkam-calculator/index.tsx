import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-carkam-calculator/HeroSection';
import CalcSection from '@/pages/support-carkam-calculator/CalcSection';
import Footer from '@/components/Footer';

/** CarKam Storage Calculator — Figma frame 1:8032 */
export default function SupportCarkamCalculatorPage() {
  return (
    <Page bg={"#f9f9ff"} height={2193} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={0} y={479} w={1440} h={986}>
        <CalcSection />
      </Section>
      <Section x={0} y={1549} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
