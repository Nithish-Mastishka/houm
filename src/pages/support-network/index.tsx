import { useState } from 'react';
import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/support-network/HeroSection';
import SearchSection from '@/pages/support-network/SearchSection';
import ResultsSection from '@/pages/support-network/ResultsSection';
import Footer from '@/components/Footer';

/** Service Network — Figma frame 1:8931 */
export default function SupportNetworkPage() {
  const [near, setNear] = useState('Showing service partners near 110011, Delhi');
  return (
    <Page bg={"#ffffff"} height={1961} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeroSection />
      </Section>
      <Section x={72} y={443} w={1296} h={184}>
        <SearchSection onSearch={(pin, city) => setNear(`Showing service partners near ${pin}, ${city}`)} />
      </Section>
      <Section x={0} y={675} w={1440} h={594}>
        <ResultsSection near={near} />
      </Section>
      <Section x={0} y={1317} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
