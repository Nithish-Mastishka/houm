import { Page, Section } from '@/components/PageLayout';
import MainSection from '@/pages/sol-oil-gas/MainSection';
import Footer from '@/components/Footer';

/** Oil & Gas — Figma frame 1:1562 */
export default function SolOilGasPage() {
  return (
    <Page bg={"#f9f9ff"} height={6571} chrome={true}>
      <Section x={0} y={147} w={1440} h={5660}>
        <MainSection />
      </Section>
      <Section x={0} y={5927} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
