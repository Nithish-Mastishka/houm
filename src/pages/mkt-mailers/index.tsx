import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-mailers/HeaderSection';
import GridSection from '@/pages/mkt-mailers/GridSection';
import Footer from '@/components/Footer';

/** Mailers — Figma frame 1:12005 */
export default function MktMailersPage() {
  return (
    <Page bg={"#f9f9ff"} height={2311} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={467} w={1296} h={1120}>
        <GridSection />
      </Section>
      <Section x={0} y={1667} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
