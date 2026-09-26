import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-software/HeroSection';
import LeftSection from '@/pages/support-software/LeftSection';
import MainSection from '@/pages/support-software/MainSection';
import Footer from '@/components/Footer';

/** Software — Figma frame 1:5278 */
export default function SupportSoftwarePage() {
  return (
    <Page bg={"#f9f9ff"} height={3479} chrome={true}>
      <Section x={0} y={163} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={459} w={306} h={727}>
        <LeftSection />
      </Section>
      <Section x={402} y={459} w={966} h={2256}>
        <MainSection />
      </Section>
      <Section x={0} y={2835} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
