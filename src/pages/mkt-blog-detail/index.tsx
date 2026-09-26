import { Page, Section } from '@/components/PageLayout';
import ArticleSection from '@/pages/mkt-blog-detail/ArticleSection';
import Footer from '@/components/Footer';

/** Blog Detail — Figma frame 1:12451 */
export default function MktBlogDetailPage() {
  return (
    <Page bg={"#f9f9ff"} height={2447} chrome={true}>
      <Section x={0} y={147} w={1440} h={1536}>
        <ArticleSection />
      </Section>
      <Section x={0} y={1803} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
