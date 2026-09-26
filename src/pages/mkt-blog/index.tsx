import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-blog/HeaderSection';
import ListSection from '@/pages/mkt-blog/ListSection';
import Footer from '@/components/Footer';

/** Blog — Figma frame 1:12400 */
export default function MktBlogPage() {
  return (
    <Page bg={"#f9f9ff"} height={1725} chrome={true}>
      <Section x={0} y={147} w={1440} h={238}>
        <HeaderSection />
      </Section>
      <Section x={0} y={433} w={1440} h={600}>
        <ListSection />
      </Section>
      <Section x={0} y={1081} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
