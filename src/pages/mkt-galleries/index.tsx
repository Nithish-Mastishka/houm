import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-galleries/HeaderSection';
import GridSection from '@/pages/mkt-galleries/GridSection';
import Footer from '@/components/Footer';

/** Gallery — Figma frame 1:12581 */
export default function MktGalleriesPage() {
  return (
    <Page bg={"#f9f9ff"} height={2559} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={433} w={1296} h={1267}>
        <GridSection />
      </Section>
      <Section x={0} y={1915} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
