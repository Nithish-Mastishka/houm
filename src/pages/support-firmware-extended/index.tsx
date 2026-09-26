import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-firmware-extended/HeroSection';
import LeftSection from '@/pages/support-firmware-extended/LeftSection';
import MainSection from '@/pages/support-firmware-extended/MainSection';
import Footer from '@/components/Footer';

/** Firmware (Extended) — Figma frame 1:6302 */
export default function SupportFirmwareExtendedPage() {
  return (
    <Page bg={"#f9f9ff"} height={1950} chrome={true}>
      <Section x={0} y={163} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={459} w={306} h={727}>
        <LeftSection />
      </Section>
      <Section x={402} y={459} w={966} h={559}>
        <MainSection />
      </Section>
      <Section x={0} y={1306} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
