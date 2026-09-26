import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-advertisement/HeaderSection';
import GridSection from '@/pages/mkt-advertisement/GridSection';
import Footer from '@/components/Footer';

/** Advertisement — Figma frame 1:12096 */
export default function MktAdvertisementPage() {
  return (
    <Page bg={"#f9f9ff"} height={2105} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={469} w={1296} h={912}>
        <GridSection />
      </Section>
      <Section x={0} y={1461} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
