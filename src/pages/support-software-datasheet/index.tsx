import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-software-datasheet/HeroSection';
import LeftSection from '@/pages/support-software-datasheet/LeftSection';
import MainSection from '@/pages/support-software-datasheet/MainSection';
import Footer from '@/components/Footer';

/** Software Datasheet — Figma frame 1:5713 */
export default function SupportSoftwareDatasheetPage() {
  return (
    <Page bg={"#f9f9ff"} height={1786} chrome={true}>
      <Section x={0} y={163} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={459} w={306} h={563}>
        <LeftSection />
      </Section>
      <Section x={402} y={459} w={966} h={208}>
        <MainSection />
      </Section>
      <Section x={0} y={1142} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
