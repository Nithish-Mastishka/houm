import { DownloadArea } from '@/lib/downloads-note';
import { SeeAllHeading, SoftwareTable } from '@/lib/downloads-tables';
import type { SoftwareRow } from '@/lib/downloads-tables';

const software: SoftwareRow = {
  model: 'HM-UNC-TA21L6C-Q',
  description: ['4MP Network IR', 'Bullet Camera'],
  version: '1.057.043_0034',
};

const sections: { title: string; rows: SoftwareRow[] }[] = [
  { title: 'Blank', rows: Array<SoftwareRow>(5).fill(software) },
  { title: 'Orange', rows: Array<SoftwareRow>(5).fill(software) },
  { title: 'CarKam', rows: Array<SoftwareRow>(5).fill(software) },
  { title: 'Vedaan', rows: Array<SoftwareRow>(5).fill(software) },
];

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      {sections.map((s) => (
        <section key={s.title} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <SeeAllHeading title={s.title} to="/support-software-extended" />
          <SoftwareTable rows={s.rows} />
        </section>
      ))}
    </DownloadArea>
  );
}
