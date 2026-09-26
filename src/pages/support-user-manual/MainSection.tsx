import { DownloadArea } from '@/lib/downloads-note';
import { SeeAllHeading, ManualTable } from '@/lib/downloads-tables';
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

const sections: { title: string; rows: ManualRow[] }[] = [
  { title: 'Blank', rows: [manual, datasheet, manual, manual, manual, manual] },
  { title: 'Orange', rows: [manual, datasheet, manual] },
  { title: 'CarKam', rows: [manual, datasheet, manual, manual] },
  { title: 'Vedaan', rows: [manual, datasheet, manual] },
];

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      {sections.map((s) => (
        <section key={s.title} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <SeeAllHeading title={s.title} to="/support-user-manual-extended" />
          <ManualTable rows={s.rows} />
        </section>
      ))}
    </DownloadArea>
  );
}
