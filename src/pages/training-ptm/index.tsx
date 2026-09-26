import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-ptm/HeaderSection';
import MainSection from '@/pages/training-ptm/MainSection';
import Footer from '@/components/Footer';

/** Partners' Meet & Training — Figma frame 1:10102 */
export default function TrainingPtmPage() {
  return (
    <Page bg={"#f9f9ff"} height={2914} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={0} y={479} w={1440} h={1671}>
        <MainSection />
      </Section>
      <Section x={0} y={2270} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
