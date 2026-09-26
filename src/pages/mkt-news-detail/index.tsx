import { Page, Section } from '@/components/PageLayout';
import ArticleSection from '@/pages/mkt-news-detail/ArticleSection';
import Footer from '@/components/Footer';

/** News Detail — Figma frame 1:12884 */
export default function MktNewsDetailPage() {
  return (
    <Page bg={"#f9f9ff"} height={2536} chrome={true}>
      <Section x={0} y={147} w={1440} h={1625}>
        <ArticleSection />
      </Section>
      <Section x={0} y={1892} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
