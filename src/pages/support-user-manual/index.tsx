import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-user-manual/HeroSection';
import LeftSection from '@/pages/support-user-manual/LeftSection';
import MainSection from '@/pages/support-user-manual/MainSection';
import Footer from '@/components/Footer';

/** User Manual / QIG — Figma frame 1:4286 */
export default function SupportUserManualPage() {
  return (
    <Page bg={"#f9f9ff"} height={3223} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={443} w={306} h={727}>
        <LeftSection />
      </Section>
      <Section x={402} y={443} w={966} h={2016}>
        <MainSection />
      </Section>
      <Section x={0} y={2579} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
