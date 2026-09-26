import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-corporate-logo/HeaderSection';
import GridSection from '@/pages/mkt-corporate-logo/GridSection';
import Footer from '@/components/Footer';

/** Corporate Logo — Figma frame 1:12178 */
export default function MktCorporateLogoPage() {
  return (
    <Page bg={"#f9f9ff"} height={1665} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={449} w={1296} h={496}>
        <GridSection />
      </Section>
      <Section x={0} y={1021} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
