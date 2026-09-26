import { Page, Section } from '@/components/PageLayout';
import ScreenSection from '@/pages/login/ScreenSection';

/** Log In — Figma frame 1:9335 */
export default function LoginPage() {
  return (
    <Page bg={"linear-gradient(94.2566244374355deg, rgb(60, 0, 8) 0.1324%, rgb(162, 0, 22) 185.6%)"} height={936} chrome={false}>
      <Section x={0} y={0} w={1440} h={936}>
        <ScreenSection />
      </Section>
    </Page>
  );
}
