import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-videos/HeaderSection';
import FeaturedSection from '@/pages/mkt-videos/FeaturedSection';
import ListSection from '@/pages/mkt-videos/ListSection';
import Footer from '@/components/Footer';

/** Videos — Figma frame 1:11942 */
export default function MktVideosPage() {
  return (
    <Page bg={"#f9f9ff"} height={3157} chrome={true}>
      <Section x={0} y={147} w={1440} h={246}>
        <HeaderSection />
      </Section>
      <Section x={71} y={452} w={1298} h={336}>
        <FeaturedSection />
      </Section>
      <Section x={71} y={836} w={1298} h={1597}>
        <ListSection />
      </Section>
      <Section x={0} y={2513} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
