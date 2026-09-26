import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/mkt-case-study-detail/HeaderSection';
import ChallengeSection from '@/pages/mkt-case-study-detail/ChallengeSection';
import SolutionSection from '@/pages/mkt-case-study-detail/SolutionSection';
import ResultsSection from '@/pages/mkt-case-study-detail/ResultsSection';
import Footer from '@/components/Footer';

/** Case Study Detail — Figma frame 1:12939 */
export default function MktCaseStudyDetailPage() {
  return (
    <Page bg={"#f9f9ff"} height={4457} chrome={true}>
      <Section x={0} y={147} w={1440} h={284}>
        <HeaderSection />
      </Section>
      <Section x={72} y={515} w={1296} h={720}>
        <ChallengeSection />
      </Section>
      <Section x={72} y={1355} w={1296} h={1610}>
        <SolutionSection />
      </Section>
      <Section x={72} y={3085} w={1296} h={608}>
        <ResultsSection />
      </Section>
      <Section x={0} y={3813} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
