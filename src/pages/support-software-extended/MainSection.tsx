import { DownloadArea } from '@/lib/downloads-note';
import { BackHeading, SoftwareTable } from '@/lib/downloads-tables';
import type { SoftwareRow } from '@/lib/downloads-tables';

const software: SoftwareRow = {
  model: 'HM-UNC-TA21L6C-Q',
  description: ['4MP Network IR', 'Bullet Camera'],
  version: '1.057.043_0034',
};

const rows: SoftwareRow[] = Array<SoftwareRow>(5).fill(software);

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <section className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <BackHeading title="Blank" to="/support-software" />
        <SoftwareTable rows={rows} />
      </section>
    </DownloadArea>
  );
}
