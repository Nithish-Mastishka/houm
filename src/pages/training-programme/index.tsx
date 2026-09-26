import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-programme/HeaderSection';
import MainSection from '@/pages/training-programme/MainSection';
import Footer from '@/components/Footer';

/** Mission Tech Training Programme — Figma frame 1:10016 */
export default function TrainingProgrammePage() {
  return (
    <Page bg={"#f9f9ff"} height={1979} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={0} y={479} w={1440} h={736}>
        <MainSection />
      </Section>
      <Section x={0} y={1335} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
