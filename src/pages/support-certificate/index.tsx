import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-certificate/HeroSection';
import LeftSection from '@/pages/support-certificate/LeftSection';
import MainSection from '@/pages/support-certificate/MainSection';
import Footer from '@/components/Footer';

/** Certificate — Figma frame 1:5775 */
export default function SupportCertificatePage() {
  return (
    <Page bg={"#f9f9ff"} height={2411} chrome={true}>
      <Section x={0} y={163} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={459} w={306} h={913}>
        <LeftSection />
      </Section>
      <Section x={402} y={459} w={966} h={1188}>
        <MainSection />
      </Section>
      <Section x={0} y={1767} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
