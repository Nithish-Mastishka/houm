import { Link } from 'react-router-dom';
import { DownloadArea } from '@/lib/downloads-note';
import { SiraTable } from '@/lib/downloads-tables';
import type { SiraRow } from '@/lib/downloads-tables';

const SIRA_PAGES = [
  { to: '/support-sira-camera-hd', label: 'Camera HD' },
  { to: '/support-sira-camera-ip', label: 'Camera IP' },
  { to: '/support-sira-camera-ip-ptz', label: 'Camera IP PTZ' },
  { to: '/support-sira-camera-thermal', label: 'Camera Thermal' },
  { to: '/support-sira-recorder-hd', label: 'Recorder HD' },
  { to: '/support-sira-recorder-ip', label: 'Recorder IP' },
];

/** Main area of a SIRA category page: category nav on the left, certificate table on the right. */
export function SiraCategoryMain({ active, rows }: { active: string; rows: SiraRow[] }) {
  const title = SIRA_PAGES.find((p) => p.to === active)?.label ?? '';
  return (
    <DownloadArea className="content-stretch flex flex-col items-center px-[72px] relative size-full">
      <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full">
        <nav aria-label="SIRA categories" className="bg-white border border-[#f3f4f6] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col h-[453px] items-start min-w-px p-[17px] relative rounded-[8px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            {SIRA_PAGES.map((p) =>
              p.to === active ? (
                <Link key={p.to} to={p.to} aria-current="page" className="bg-[#fff1f2] border-[#fff1f2] border-l-4 border-solid content-stretch flex flex-col items-start pl-[20px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 w-full"><span className="flex items-center justify-center px-[16px] py-[8px] relative"><span className="font-['Inter'] font-medium leading-[24px] not-italic text-[#fd022c] text-[16px] whitespace-nowrap">{p.label}</span></span></Link>
              ) : (
                <Link key={p.to} to={p.to} className="border-[rgba(0,0,0,0)] border-l-4 border-solid content-stretch cursor-pointer flex flex-col items-start pl-[20px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 w-full hover:bg-[#fff1f2]"><span className="flex items-center justify-center px-[16px] py-[8px] relative"><span className="font-['Inter'] font-medium leading-[24px] not-italic text-[#3f4347] text-[16px] text-left whitespace-nowrap hover:text-[#fd022c]">{p.label}</span></span></Link>
              ),
            )}
          </div>
        </nav>
        <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[966px] min-w-[550px] relative shrink-0 w-[966px]">
          <div className="content-center flex flex-wrap items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex items-start pb-[8px] relative shrink-0"><h2 className="font-['Poppins'] font-medium leading-[1.2] not-italic text-[#111] text-[24px] whitespace-nowrap">{title}</h2></div>
          </div>
          <SiraTable rows={rows} />
        </div>
      </div>
    </DownloadArea>
  );
}
