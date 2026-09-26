import { Page, Section } from '@/components/PageLayout';
import MainSection from '@/pages/sol-campus/MainSection';
import Footer from '@/components/Footer';

/** Campus — Figma frame 1:812 */
export default function SolCampusPage() {
  return (
    <Page bg={"#f9f9ff"} height={5570} chrome={true}>
      <Section x={0} y={147} w={1440} h={4659}>
        <MainSection />
      </Section>
      <Section x={0} y={4926} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
