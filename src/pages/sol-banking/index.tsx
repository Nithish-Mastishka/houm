import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/sol-banking/HeroSection';
import BodySection from '@/pages/sol-banking/BodySection';
import Footer from '@/components/Footer';

/** Banking — Figma frame 1:564 */
export default function SolBankingPage() {
  return (
    <Page bg={"#f9f9ff"} height={4842} chrome={true}>
      <Section x={0} y={147} w={1440} h={370}>
        <HeroSection />
      </Section>
      <Section x={0} y={601} w={1440} h={3477}>
        <BodySection />
      </Section>
      <Section x={0} y={4198} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
