import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/career/HeroSection';
import JobsSection from '@/pages/career/JobsSection';
import Footer from '@/components/Footer';

/** Careers — Figma frame 1:11704 */
export default function CareerPage() {
  return (
    <Page bg={"#f9f9ff"} height={2077} chrome={true}>
      <Section x={0} y={147} w={1440} h={274}>
        <HeroSection />
      </Section>
      <Section x={0} y={541} w={1440} h={772}>
        <JobsSection />
      </Section>
      <Section x={0} y={1433} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
