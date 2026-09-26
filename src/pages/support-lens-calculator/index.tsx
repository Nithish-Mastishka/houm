import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-lens-calculator/HeroSection';
import CalcSection from '@/pages/support-lens-calculator/CalcSection';
import Footer from '@/components/Footer';

/** Lens Calculator — Figma frame 1:7842 */
export default function SupportLensCalculatorPage() {
  return (
    <Page bg={"#f9f9ff"} height={2317} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={0} y={479} w={1440} h={1110}>
        <CalcSection />
      </Section>
      <Section x={0} y={1673} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
