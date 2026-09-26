import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-sira-certificate/HeroSection';
import LeftSection from '@/pages/support-sira-certificate/LeftSection';
import MainSection from '@/pages/support-sira-certificate/MainSection';
import Footer from '@/components/Footer';

/** SIRA Certificate — Figma frame 1:7119 */
export default function SupportSiraCertificatePage() {
  return (
    <Page bg={"#f9f9ff"} height={2300} chrome={true}>
      <Section x={0} y={163} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={459} w={306} h={1077}>
        <LeftSection />
      </Section>
      <Section x={402} y={459} w={966} h={706}>
        <MainSection />
      </Section>
      <Section x={0} y={1656} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
