import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-tv-commercial/HeaderSection';
import GridSection from '@/pages/mkt-tv-commercial/GridSection';
import Footer from '@/components/Footer';

/** TV Commercials — Figma frame 1:12332 */
export default function MktTvCommercialPage() {
  return (
    <Page bg={"#f9f9ff"} height={3297} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={449} w={1298} h={2124}>
        <GridSection />
      </Section>
      <Section x={0} y={2653} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
