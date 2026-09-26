import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-user-manual-extended/HeroSection';
import LeftSection from '@/pages/support-user-manual-extended/LeftSection';
import MainSection from '@/pages/support-user-manual-extended/MainSection';
import Footer from '@/components/Footer';

/** User Manual (Extended) — Figma frame 1:5904 */
export default function SupportUserManualExtendedPage() {
  return (
    <Page bg={"#f9f9ff"} height={2522} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={443} w={306} h={727}>
        <LeftSection />
      </Section>
      <Section x={402} y={443} w={966} h={1315}>
        <MainSection />
      </Section>
      <Section x={0} y={1878} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
