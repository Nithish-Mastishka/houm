import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-technical-videos-2/HeroSection';
import VideosSection from '@/pages/support-technical-videos-2/VideosSection';
import Footer from '@/components/Footer';

/** Technical Videos (Playlist) — Figma frame 1:8625 */
export default function SupportTechnicalVideos2Page() {
  return (
    <Page bg={"#f9f9ff"} height={3069} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={463} w={1296} h={1640}>
        <VideosSection />
      </Section>
      <Section x={0} y={2425} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
