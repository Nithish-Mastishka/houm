import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/about/HeroSection';
import FoundationSection from '@/pages/about/FoundationSection';
import CeoSection from '@/pages/about/CeoSection';
import StatsSection from '@/pages/about/StatsSection';
import GroupSection from '@/pages/about/GroupSection';
import ManufacturingSection from '@/pages/about/ManufacturingSection';
import TrustedSection from '@/pages/about/TrustedSection';
import LeadershipSection from '@/pages/about/LeadershipSection';
import BuiltSection from '@/pages/about/BuiltSection';
import SolutionsSection from '@/pages/about/SolutionsSection';
import Footer from '@/components/Footer';

/** About Us — Figma frame 1:11471 */
export default function AboutPage() {
  return (
    <Page bg={"#f9f9ff"} height={6242} chrome={true}>
      <Section x={0} y={147} w={1440} h={437}>
        <HeroSection />
      </Section>
      <Section x={72} y={704} w={1296} h={264}>
        <FoundationSection />
      </Section>
      <Section x={72} y={1088} w={1296} h={529}>
        <CeoSection />
      </Section>
      <Section x={72} y={1737} w={1296} h={200}>
        <StatsSection />
      </Section>
      <Section x={72} y={2057} w={1296} h={445}>
        <GroupSection />
      </Section>
      <Section x={72} y={2621} w={1296} h={573}>
        <ManufacturingSection />
      </Section>
      <Section x={72} y={3314} w={1296} h={196}>
        <TrustedSection />
      </Section>
      <Section x={72} y={3630} w={1296} h={468}>
        <LeadershipSection />
      </Section>
      <Section x={72} y={4218} w={1296} h={533}>
        <BuiltSection />
      </Section>
      <Section x={72} y={4871} w={1296} h={607}>
        <SolutionsSection />
      </Section>
      <Section x={0} y={5598} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
