import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-webinars/HeaderSection';
import MainSection from '@/pages/training-webinars/MainSection';
import Footer from '@/components/Footer';

/** HOUM Webinars — Figma frame 1:9934 */
export default function TrainingWebinarsPage() {
  return (
    <Page bg={"#f9f9ff"} height={2446} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={0} y={479} w={1440} h={1203}>
        <MainSection />
      </Section>
      <Section x={0} y={1802} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
