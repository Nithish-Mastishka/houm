import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-faqs/HeroSection';
import MainSection from '@/pages/support-faqs/MainSection';
import Footer from '@/components/Footer';

/** FAQs — Figma frame 1:7479 */
export default function SupportFaqsPage() {
  return (
    <Page bg={"#f9f9ff"} height={2110} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={0} y={443} w={1440} h={903}>
        <MainSection />
      </Section>
      <Section x={0} y={1466} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
