import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/products/HeroSection';
import PanelSection from '@/pages/products/PanelSection';
import GridSection from '@/pages/products/GridSection';
import Footer from '@/components/Footer';

/** All Products — Figma frame 1:10348 */
export default function ProductsPage() {
  return (
    <Page bg={"#f9f9ff"} height={2823} chrome={true}>
      <Section x={0} y={147} w={1440} h={288}>
        <HeroSection />
      </Section>
      <Section x={72} y={507} w={306} h={809}>
        <PanelSection />
      </Section>
      <Section x={402} y={507} w={966} h={1536}>
        <GridSection />
      </Section>
      <Section x={0} y={2179} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
