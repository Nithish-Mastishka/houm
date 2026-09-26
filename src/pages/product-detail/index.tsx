import { Page, Section } from '@/components/PageLayout';
import BreadcrumbSection from '@/pages/product-detail/BreadcrumbSection';
import TopSection from '@/pages/product-detail/TopSection';
import SpecsSection from '@/pages/product-detail/SpecsSection';
import FormSection from '@/pages/product-detail/FormSection';
import RelatedSection from '@/pages/product-detail/RelatedSection';
import Footer from '@/components/Footer';

/** Product Detail — Figma frame 1:10591 */
export default function ProductDetailPage() {
  return (
    <Page bg={"#f9f9ff"} height={4717} chrome={true}>
      <Section x={72} y={179} w={505} h={40}>
        <BreadcrumbSection />
      </Section>
      <Section x={72} y={243} w={1296} h={759}>
        <TopSection />
      </Section>
      <Section x={72} y={1050} w={1296} h={583}>
        <SpecsSection />
      </Section>
      <Section x={72} y={1681} w={1296} h={1159}>
        <FormSection />
      </Section>
      <Section x={72} y={2888} w={1296} h={1065}>
        <RelatedSection />
      </Section>
      <Section x={0} y={4073} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
