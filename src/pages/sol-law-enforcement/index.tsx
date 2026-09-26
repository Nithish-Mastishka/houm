import { Page, Section } from '@/components/PageLayout';
import MainSection from '@/pages/sol-law-enforcement/MainSection';
import Footer from '@/components/Footer';

/** Law Enforcement — Figma frame 1:1205 */
export default function SolLawEnforcementPage() {
  return (
    <Page bg={"#f9f9ff"} height={6681} chrome={true}>
      <Section x={0} y={147} w={1440} h={5770}>
        <MainSection />
      </Section>
      <Section x={0} y={6037} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
