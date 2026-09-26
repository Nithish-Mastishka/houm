import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/contact/HeroSection';
import ContactStrip from '@/components/ContactStrip';
import FormSection from '@/pages/contact/FormSection';
import MapSection from '@/pages/contact/MapSection';
import Footer from '@/components/Footer';

/** Contact Us — Figma frame 1:251 */
export default function ContactPage() {
  return (
    <Page bg={"#ffffff"} height={3431} chrome={true}>
      <Section x={0} y={147} w={1440} h={262}>
        <HeroSection />
      </Section>
      <Section x={72} y={529} w={1296} h={174}>
        <ContactStrip />
      </Section>
      <Section x={72} y={823} w={1296} h={1208}>
        <FormSection />
      </Section>
      <Section x={72} y={2151} w={1296} h={471}>
        <MapSection />
      </Section>
      <Section x={0} y={2787} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
