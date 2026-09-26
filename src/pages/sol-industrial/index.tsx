import { Page, Section } from '@/components/PageLayout';
import MainSection from '@/pages/sol-industrial/MainSection';
import Footer from '@/components/Footer';

/** Industrial — Figma frame 1:1926 */
export default function SolIndustrialPage() {
  return (
    <Page bg={"#f9f9ff"} height={6306} chrome={true}>
      <Section x={0} y={147} w={1440} h={5395}>
        <MainSection />
      </Section>
      <Section x={0} y={5662} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
