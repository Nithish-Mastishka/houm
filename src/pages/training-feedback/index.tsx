import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-feedback/HeaderSection';
import MainSection from '@/pages/training-feedback/MainSection';
import Footer from '@/components/Footer';

/** Training Feedback — Figma frame 1:9139 */
export default function TrainingFeedbackPage() {
  return (
    <Page bg={"#f9f9ff"} height={2754} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={72} y={479} w={1296} h={1547}>
        <MainSection />
      </Section>
      <Section x={0} y={2110} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
