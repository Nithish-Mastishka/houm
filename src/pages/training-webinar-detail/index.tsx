import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-webinar-detail/HeaderSection';
import MainSection from '@/pages/training-webinar-detail/MainSection';
import Footer from '@/components/Footer';

/** Webinar Session Detail — Figma frame 1:9642 */
export default function TrainingWebinarDetailPage() {
  return (
    <Page bg={"#f9f9ff"} height={2843} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={80} y={479} w={1280} h={1636}>
        <MainSection />
      </Section>
      <Section x={0} y={2199} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
