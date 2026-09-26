import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-news/HeaderSection';
import ListSection from '@/pages/mkt-news/ListSection';
import Footer from '@/components/Footer';

/** News — Figma frame 1:12819 */
export default function MktNewsPage() {
  return (
    <Page bg={"#f9f9ff"} height={1797} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={72} y={433} w={1296} h={672}>
        <ListSection />
      </Section>
      <Section x={0} y={1153} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
