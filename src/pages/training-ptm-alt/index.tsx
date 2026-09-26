import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-ptm-alt/HeaderSection';
import MainSection from '@/pages/training-ptm-alt/MainSection';
import Footer from '@/components/Footer';

/** Partners' Meet & Training (Alt) — Figma frame 1:9562 */
export default function TrainingPtmAltPage() {
  return (
    <Page bg={"#f9f9ff"} height={2060} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={0} y={479} w={1440} h={817}>
        <MainSection />
      </Section>
      <Section x={0} y={1416} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
