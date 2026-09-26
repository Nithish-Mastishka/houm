import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-technical-videos/HeroSection';
import VideosSection from '@/pages/support-technical-videos/VideosSection';
import Footer from '@/components/Footer';

/** Technical Videos — Figma frame 1:8548 */
export default function SupportTechnicalVideosPage() {
  return (
    <Page bg={"#f9f9ff"} height={4271} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={463} w={1296} h={2870}>
        <VideosSection />
      </Section>
      <Section x={0} y={3627} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
