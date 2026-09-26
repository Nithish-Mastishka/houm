import { Page, Section } from '@/components/PageLayout';
import HeaderSection from '@/pages/training-workshops/HeaderSection';
import MainSection from '@/pages/training-workshops/MainSection';
import Footer from '@/components/Footer';

/** Hands-on Workshops — Figma frame 1:10296 */
export default function TrainingWorkshopsPage() {
  return (
    <Page bg={"#f9f9ff"} height={2286} chrome={true}>
      <Section x={0} y={147} w={1440} h={248}>
        <HeaderSection />
      </Section>
      <Section x={72} y={479} w={1296} h={1079}>
        <MainSection />
      </Section>
      <Section x={0} y={1642} w={1440} h={644}>
        <Footer />
      </Section>
    </Page>
  );
}
