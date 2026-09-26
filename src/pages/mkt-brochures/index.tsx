import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-brochures/HeaderSection';
import GridSection from '@/pages/mkt-brochures/GridSection';
import Footer from '@/components/Footer';

/** Brochures — Figma frame 1:12051 */
export default function MktBrochuresPage() {
  return (
    <Page bg={"#f9f9ff"} height={2313} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={469} w={1296} h={1120}>
        <GridSection />
      </Section>
      <Section x={0} y={1669} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
