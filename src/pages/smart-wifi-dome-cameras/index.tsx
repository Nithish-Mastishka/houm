import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/smart-wifi-dome-cameras/HeroSection';
import PanelSection from '@/pages/smart-wifi-dome-cameras/PanelSection';
import GridSection from '@/pages/smart-wifi-dome-cameras/GridSection';
import TrustedSection from '@/pages/smart-wifi-dome-cameras/TrustedSection';
import Footer from '@/components/Footer';

/** Smart Wi-Fi Dome Cameras — Figma frame 1:10493 */
export default function SmartWifiDomeCamerasPage() {
  return (
    <Page bg={"#f9f9ff"} height={3018} chrome={true}>
      <Section x={0} y={147} w={1440} h={237}>
        <HeroSection />
      </Section>
      <Section x={72} y={449} w={306} h={937}>
        <PanelSection />
      </Section>
      <Section x={401} y={449} w={967} h={1393}>
        <GridSection />
      </Section>
      <Section x={72} y={1890} w={1296} h={428}>
        <TrustedSection />
      </Section>
      <Section x={0} y={2374} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
