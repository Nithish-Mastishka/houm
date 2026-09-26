import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-firmware/HeroSection';
import LeftSection from '@/pages/support-firmware/LeftSection';
import MainSection from '@/pages/support-firmware/MainSection';
import Footer from '@/components/Footer';

/** Firmware — Figma frame 1:4797 */
export default function SupportFirmwarePage() {
  return (
    <Page bg={"#f9f9ff"} height={3577} chrome={true}>
      <Section x={0} y={163} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={459} w={306} h={727}>
        <LeftSection />
      </Section>
      <Section x={402} y={459} w={966} h={2354}>
        <MainSection />
      </Section>
      <Section x={0} y={2933} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
