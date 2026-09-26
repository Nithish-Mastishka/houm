import { DownloadArea } from '@/lib/downloads-note';
import { BackHeading, FirmwareTable } from '@/lib/downloads-tables';
import type { FirmwareRow } from '@/lib/downloads-tables';

const firmware: FirmwareRow = {
  model: 'HM-UNC-TA21L6C-Q',
  description: ['4MP Network IR', 'Bullet Camera'],
  version: '1.057.043_0034',
  uploaded: 'Mar 17, 2026',
};

const rows: FirmwareRow[] = Array<FirmwareRow>(5).fill(firmware);

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <section className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <BackHeading title="Blank" to="/support-firmware" />
        <FirmwareTable rows={rows} />
      </section>
    </DownloadArea>
  );
}
