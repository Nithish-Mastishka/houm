import { DownloadArea } from '@/lib/downloads-note';
import { SeeAllHeading, FirmwareTable } from '@/lib/downloads-tables';
import type { FirmwareRow } from '@/lib/downloads-tables';

const firmware: FirmwareRow = {
  model: 'HM-UNC-TA21L6C-Q',
  description: ['4MP Network IR', 'Bullet Camera'],
  version: '1.057.043_0034',
  uploaded: 'Mar 17, 2026',
};

const sections: { title: string; rows: FirmwareRow[] }[] = [
  { title: 'Blank', rows: Array<FirmwareRow>(5).fill(firmware) },
  { title: 'Orange', rows: Array<FirmwareRow>(5).fill(firmware) },
  { title: 'CarKam', rows: Array<FirmwareRow>(5).fill(firmware) },
  { title: 'Vedaan', rows: Array<FirmwareRow>(5).fill(firmware) },
];

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      {sections.map((s) => (
        <section key={s.title} className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <SeeAllHeading title={s.title} to="/support-firmware-extended" />
          <FirmwareTable rows={s.rows} />
        </section>
      ))}
    </DownloadArea>
  );
}
