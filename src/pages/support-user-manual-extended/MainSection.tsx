import { DownloadArea } from '@/lib/downloads-note';
import { BackHeading, ManualTable } from '@/lib/downloads-tables';
import type { ManualRow } from '@/lib/downloads-tables';

const manual: ManualRow = {
  model: 'HM-UNC-TA21L6C-Q',
  description: ['4MP Network IR', 'Bullet Camera'],
  category: 'Network Cameras',
  docType: 'User Manual',
  language: ['English'],
  updated: 'Mar 17, 2026',
  size: '2.4MB',
};
const datasheet: ManualRow = { ...manual, docType: 'Datasheet', language: ['Multi-', 'language'] };

const rows: ManualRow[] = [manual, datasheet, ...Array<ManualRow>(12).fill(manual)];

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <section className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <BackHeading title="Blank" to="/support-user-manual" />
        <ManualTable rows={rows} />
      </section>
    </DownloadArea>
  );
}
