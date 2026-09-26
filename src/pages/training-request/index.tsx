import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-request/HeaderSection';
import MainSection from '@/pages/training-request/MainSection';
import Footer from '@/components/Footer';

/** Training Request — Figma frame 1:10231 */
export default function TrainingRequestPage() {
  return (
    <Page bg={"#f9f9ff"} height={2025} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={72} y={479} w={1296} h={818}>
        <MainSection />
      </Section>
      <Section x={0} y={1381} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
