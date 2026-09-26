import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-gallery-view/HeaderSection';
import PhotosSection from '@/pages/mkt-gallery-view/PhotosSection';
import PhotoMainSection from '@/pages/mkt-gallery-view/PhotoMainSection';
import Footer from '@/components/Footer';

/** Gallery View — Figma frame 1:12767 */
export default function MktGalleryViewPage() {
  return (
    <Page bg={"#f9f9ff"} height={2559} chrome={true}>
      <Section x={0} y={147} w={1440} h={297}>
        <HeaderSection />
      </Section>
      <Section x={72} y={492} w={1296} h={1187}>
        <PhotosSection />
      </Section>
      <Section x={72} y={506} w={526} h={426}>
        <PhotoMainSection />
      </Section>
      <Section x={0} y={1915} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
