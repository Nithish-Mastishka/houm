import { DownloadArea } from '@/lib/downloads-note';
import { FileCard } from '@/lib/downloads-tables';
import type { FileItem } from '@/lib/downloads-tables';

const files: FileItem[] = [
  { name: 'AMS', size: '475 KB' },
  { name: 'EVMS Pro', size: '485 KB' },
];

export default function MainSection() {
  return (
    <DownloadArea className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      {files.map((f) => (
        <FileCard key={f.name} {...f} width="w-[420px]" />
      ))}
    </DownloadArea>
  );
}
