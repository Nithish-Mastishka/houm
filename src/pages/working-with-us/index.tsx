import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/working-with-us/HeroSection';
import WhySection from '@/pages/working-with-us/WhySection';
import CultureSection from '@/pages/working-with-us/CultureSection';
import JobsSection from '@/pages/working-with-us/JobsSection';
import Footer from '@/components/Footer';

/** Working With Us — Figma frame 1:11047 */
export default function WorkingWithUsPage() {
  return (
    <Page bg={"#f9f9ff"} height={3151} chrome={true}>
      <Section x={0} y={147} w={1440} h={330}>
        <HeroSection />
      </Section>
      <Section x={0} y={477} w={1440} h={588}>
        <WhySection />
      </Section>
      <Section x={0} y={1065} w={1440} h={814}>
        <CultureSection />
      </Section>
      <Section x={0} y={1879} w={1440} h={628}>
        <JobsSection />
      </Section>
      <Section x={0} y={2507} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
