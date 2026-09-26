import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-service/HeroSection';
import OfferSection from '@/pages/support-service/OfferSection';
import ContactStrip from '@/components/ContactStrip';
import CommitmentSection from '@/pages/support-service/CommitmentSection';
import HelpSection from '@/pages/support-service/HelpSection';
import Footer from '@/components/Footer';

/** Service — Figma frame 1:9026 */
export default function SupportServicePage() {
  return (
    <Page bg={"#ffffff"} height={3087} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={0} y={515} w={1440} h={598}>
        <OfferSection />
      </Section>
      <Section x={70} y={1233} w={1300} h={174}>
        <ContactStrip />
      </Section>
      <Section x={0} y={1527} w={1440} h={372}>
        <CommitmentSection />
      </Section>
      <Section x={72} y={2019} w={1296} h={304}>
        <HelpSection />
      </Section>
      <Section x={0} y={2443} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
