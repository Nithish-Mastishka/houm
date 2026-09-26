import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/partner-case-study/HeroSection';
import ArticleSection from '@/pages/partner-case-study/ArticleSection';
import Footer from '@/components/Footer';

/** Detailed Case Study — Figma frame 1:4235 */
export default function PartnerCaseStudyPage() {
  return (
    <Page bg={"#f9f9ff"} height={2759} chrome={true}>
      <Section x={0} y={147} w={1440} h={270}>
        <HeroSection />
      </Section>
      <Section x={0} y={501} w={1440} h={1494}>
        <ArticleSection />
      </Section>
      <Section x={0} y={2115} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
