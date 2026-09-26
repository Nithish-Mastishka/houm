import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-corporate-profile/HeaderSection';
import CommitmentSection from '@/pages/mkt-corporate-profile/CommitmentSection';
import Footer from '@/components/Footer';

/** Corporate Profile — Figma frame 1:12270 */
export default function MktCorporateProfilePage() {
  return (
    <Page bg={"#f9f9ff"} height={1665} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={449} w={966} h={410}>
        <CommitmentSection />
      </Section>
      <Section x={0} y={1021} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
