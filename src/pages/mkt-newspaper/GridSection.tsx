import { InlineNote, InlineNoteButton, MKT_DOWNLOAD_NOTE, useInlineNote } from '@/lib/mkt-inline-note';
import img688cc3d1897d from '@/assets/688cc3d1897d.webp';
import imgee07801b87dd from '@/assets/ee07801b87dd.svg';
import img76f4007912d3 from '@/assets/76f4007912d3.svg';
import img243240c952bb from '@/assets/243240c952bb.svg';

interface Newspaper {
  id: number;
  title: string;
  size: string;
}

const NEWSPAPERS: Newspaper[] = Array.from({ length: 8 }, (_, id) => ({ id, title: 'Volume - IV (July 2026)', size: '89.41 KB' }));

function DownloadCard({ item }: { item: Newspaper }) {
  const note = useInlineNote();
  return (
    <div className="dl-card content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[306px]">
      <div className="h-[310px] relative rounded-[24.522px] shrink-0 w-full overflow-hidden">
        <img alt="HOUM Interface newsletter cover" className="absolute h-[113.86%] left-[0.05%] max-w-none top-[0.05%] w-[99.98%]" src={img688cc3d1897d} />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <h2 className="font-['Inter'] font-medium leading-[1.2] not-italic relative shrink-0 text-[#111] text-[16px] w-full">{item.title}</h2>
          <p className="font-['Inter'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#5f6368] text-[16px] whitespace-nowrap">{item.size}</p>
        </div>
        <InlineNoteButton note={note} message={MKT_DOWNLOAD_NOTE} className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative rounded-[9000px] shrink-0 cursor-pointer hover:opacity-80"><span className="block relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgee07801b87dd} /></span><span className="font-['Inter'] font-medium leading-[24px] not-italic relative shrink-0 text-[#fd022c] text-[16px] text-center whitespace-nowrap">Download</span></InlineNoteButton>
      </div>
      <InlineNote note={note} className="dl-note absolute bottom-[8px] right-[16px] font-['Inter'] text-[12px] leading-[16px] text-[#b51f27] opacity-0 transition-opacity pointer-events-none" />
    </div>
  );
}

export default function GridSection() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[72px] items-center relative size-full">
      <div className="content-center flex flex-wrap gap-[24px] items-center relative shrink-0 w-[1296px]">
      {NEWSPAPERS.map((item) => (
        <DownloadCard key={item.id} item={item} />
      ))}
      </div>
      <nav aria-label="Pagination" className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <button type="button" aria-label="Previous page" className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer">
          <span className="flex-none rotate-90"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img76f4007912d3} /></span></span>
        </button>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="bg-[#fff1f2] col-1 h-[32px] ml-0 mt-0 relative rounded-[90000px] row-1 w-[31px]" />
          <p className="col-1 font-['Inter'] font-medium leading-[1.2] ml-[12px] mt-[7px] not-italic relative row-1 text-[#fd022c] text-[16px] whitespace-nowrap" aria-current="page">1</p>
          <p className="col-1 font-['Inter'] font-medium leading-[1.2] ml-[47px] mt-[7px] not-italic opacity-40 relative row-1 text-[#5f6368] text-[16px] whitespace-nowrap">2</p>
          <p className="col-1 font-['Inter'] font-medium leading-[1.2] ml-[156px] mt-[7px] not-italic opacity-40 relative row-1 text-[#5f6368] text-[16px] whitespace-nowrap">10</p>
          <p className="col-1 font-['Inter'] font-medium leading-[1.2] ml-[82px] mt-[7px] not-italic opacity-40 relative row-1 text-[#5f6368] text-[16px] whitespace-nowrap">3</p>
          <p className="col-1 font-['Inter'] font-medium leading-[1.2] ml-[117px] mt-[7px] not-italic opacity-40 relative row-1 text-[#5f6368] text-[16px] whitespace-nowrap">...</p>
        </div>
        <button type="button" aria-label="Next page" className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer">
          <span className="-rotate-90 flex-none"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img243240c952bb} /></span></span>
        </button>
      </nav>
      </div>
    </>
  );
}
