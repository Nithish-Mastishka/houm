import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-warranty/HeroSection';
import ViewerSection from '@/pages/support-warranty/ViewerSection';
import Footer from '@/components/Footer';

/** Warranty Document — Figma frame 1:8806 */
export default function SupportWarrantyPage() {
  return (
    <Page bg={"#ffffff"} height={2031} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={0} y={443} w={1440} h={896}>
        <ViewerSection />
      </Section>
      <Section x={0} y={1387} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
