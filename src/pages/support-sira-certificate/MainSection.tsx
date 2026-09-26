import { DownloadArea } from '@/lib/downloads-note';
import { BackHeading, FileCard } from '@/lib/downloads-tables';
import type { FileItem } from '@/lib/downloads-tables';

const files: FileItem[] = Array<FileItem>(12).fill({ name: 'HM-EBQ', size: '475 KB' });

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <section className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <BackHeading title="CE/FCC/RoHS Certificates" to="/support-certificate" />
        <div className="bg-white border border-[#e5e5e5] border-solid content-stretch flex flex-col items-start overflow-auto p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
          <div className="content-start flex flex-wrap gap-[24px] items-start relative w-full">
            {files.map((f, i) => (
              <FileCard key={i} {...f} width="w-[469px]" />
            ))}
          </div>
        </div>
      </section>
    </DownloadArea>
  );
}
