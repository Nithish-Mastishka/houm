import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-newspaper/HeaderSection';
import GridSection from '@/pages/mkt-newspaper/GridSection';
import Footer from '@/components/Footer';

/** Newsletter — Figma frame 1:12138 */
export default function MktNewspaperPage() {
  return (
    <Page bg={"#f9f9ff"} height={2267} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={469} w={1296} h={1074}>
        <GridSection />
      </Section>
      <Section x={0} y={1623} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
