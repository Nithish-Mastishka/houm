import { Page, Section } from '@/components/PageLayout';
import MainSection from '@/pages/sol-real-estate/MainSection';
import Footer from '@/components/Footer';

/** Real Estate — Figma frame 1:375 */
export default function SolRealEstatePage() {
  return (
    <Page bg={"#f9f9ff"} height={5710} chrome={true}>
      <Section x={0} y={147} w={1440} h={4799}>
        <MainSection />
      </Section>
      <Section x={0} y={5066} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
