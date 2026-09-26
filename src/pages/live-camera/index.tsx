import { Page, Section } from '@/components/PageLayout';
import BackSection from '@/pages/live-camera/BackSection';
import GridSection from '@/pages/live-camera/GridSection';

/** Live Camera — Figma frame 1:11239 */
export default function LiveCameraPage() {
  return (
    <Page bg={"#ffffff"} height={1024} chrome={false}>
      <Section x={1213} y={22} w={131} h={40.6}>
        <BackSection />
      </Section>
      <Section x={72} y={72} w={1296} h={880}>
        <GridSection />
      </Section>
    </Page>
  );
}
