import { Page, Section } from '@/components/PageLayout';
import HeroSection from '@/pages/home/HeroSection';
import HeroButtonSection from '@/pages/home/HeroButtonSection';
import LiveSection from '@/pages/home/LiveSection';
import ProductsSection from '@/pages/home/ProductsSection';
import TrendingSection from '@/pages/home/TrendingSection';
import SolutionsSection from '@/pages/home/SolutionsSection';
import NewsletterSection from '@/pages/home/NewsletterSection';
import NewsSection from '@/pages/home/NewsSection';
import ContactStrip from '@/components/ContactStrip';
import Footer from '@/components/Footer';

/** Home — Figma frame 1:10902 */
export default function HomePage() {
  return (
    <Page bg={"#f9f9ff"} height={6276.4} chrome={true}>
      <Section x={0} y={147} w={1440} h={574}>
        <HeroSection />
      </Section>
      <Section x={563} y={689} w={314} h={64}>
        <HeroButtonSection />
      </Section>
      <Section x={72} y={841} w={1296} h={692}>
        <LiveSection />
      </Section>
      <Section x={0} y={1653} w={1440} h={656}>
        <ProductsSection />
      </Section>
      <Section x={0} y={2429} w={1440} h={738}>
        <TrendingSection />
      </Section>
      <Section x={-0.5} y={3287} w={1441} h={544.7}>
        <SolutionsSection />
      </Section>
      <Section x={72} y={3951.7} w={1296} h={298}>
        <NewsletterSection />
      </Section>
      <Section x={0} y={4369.7} w={1440} h={848.7}>
        <NewsSection />
      </Section>
      <Section x={72} y={5338.4} w={1296} h={174}>
        <ContactStrip />
      </Section>
      <Section x={0} y={5632.4} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
