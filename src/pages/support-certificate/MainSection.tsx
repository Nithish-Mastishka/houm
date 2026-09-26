import { DownloadArea } from '@/lib/downloads-note';
import { FileCard, SeeAllHeading } from '@/lib/downloads-tables';
import type { FileItem } from '@/lib/downloads-tables';

const groups: { title: string; file: FileItem }[] = [
  { title: 'CE/FCC/RoHS Certificates', file: { name: 'HM-EBQ', size: '475 KB' } },
  { title: 'ISO', file: { name: 'ISO 27001: 2022 (ISMS)', size: '475 KB' } },
  { title: 'UL', file: { name: 'UL 2024-25', size: '475 KB' } },
  { title: 'IP Ratings/ IK10', file: { name: 'UNC (IP67/IK10)', size: '475 KB' } },
];

/** Each group shows the same certificate card four times, as in the design. */
const CARDS_PER_GROUP = 4;

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[48px] items-start relative size-full">
      {groups.map((g) => (
        <section key={g.title} className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <SeeAllHeading title={g.title} to="/support-sira-certificate" compact />
          <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
            {Array.from({ length: CARDS_PER_GROUP }, (_, i) => (
              <FileCard key={i} {...g.file} width="w-[469px]" />
            ))}
          </div>
        </section>
      ))}
    </DownloadArea>
  );
}
