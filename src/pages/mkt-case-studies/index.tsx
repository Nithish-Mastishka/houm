import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-case-studies/HeaderSection';
import ListSection from '@/pages/mkt-case-studies/ListSection';
import Footer from '@/components/Footer';

/** Case Studies — Figma frame 1:12503 */
export default function MktCaseStudiesPage() {
  return (
    <Page bg={"#f9f9ff"} height={2703} chrome={true}>
      <Section x={0} y={147} w={1440} h={266}>
        <HeaderSection />
      </Section>
      <Section x={0} y={461} w={1440} h={1550}>
        <ListSection />
      </Section>
      <Section x={0} y={2059} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
