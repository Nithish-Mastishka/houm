import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-webinar-detail-error/HeaderSection';
import MainSection from '@/pages/training-webinar-detail-error/MainSection';
import Footer from '@/components/Footer';

/** Webinar Detail (Form Errors) — Figma frame 1:9800 */
export default function TrainingWebinarDetailErrorPage() {
  return (
    <Page bg={"#f9f9ff"} height={2725} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={80} y={479} w={1280} h={1518}>
        <MainSection />
      </Section>
      <Section x={0} y={2081} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
