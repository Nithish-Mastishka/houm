import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/smart-fixed-camera/HeroSection';
import PanelSection from '@/pages/smart-fixed-camera/PanelSection';
import GridSection from '@/pages/smart-fixed-camera/GridSection';
import TrustedSection from '@/pages/smart-fixed-camera/TrustedSection';
import Footer from '@/components/Footer';

/** Smart Fixed Camera — Figma frame 1:10392 */
export default function SmartFixedCameraPage() {
  return (
    <Page bg={"#f9f9ff"} height={3934} chrome={true}>
      <Section x={0} y={147} w={1440} h={237}>
        <HeroSection />
      </Section>
      <Section x={72} y={449} w={306} h={918}>
        <PanelSection />
      </Section>
      <Section x={401} y={449} w={967} h={2309}>
        <GridSection />
      </Section>
      <Section x={72} y={2806} w={1296} h={428}>
        <TrustedSection />
      </Section>
      <Section x={0} y={3290} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
