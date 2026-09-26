import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-sira-camera-thermal/HeroSection';
import MainSection from '@/pages/support-sira-camera-thermal/MainSection';
import Footer from '@/components/Footer';

/** SIRA Camera Thermal — Figma frame 1:6997 */
export default function SupportSiraCameraThermalPage() {
  return (
    <Page bg={"#f9f9ff"} height={1738} chrome={true}>
      <Section x={0} y={163} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={0} y={459} w={1440} h={515}>
        <MainSection />
      </Section>
      <Section x={0} y={1094} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
