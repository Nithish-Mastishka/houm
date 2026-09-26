import { InlineNote, InlineNoteButton, MKT_DOWNLOAD_NOTE, useInlineNote } from '@/lib/mkt-inline-note';
import img82968389538f from '@/assets/82968389538f.webp';
import img21ab4c41b0fb from '@/assets/21ab4c41b0fb.svg';
import img454797fbac08 from '@/assets/454797fbac08.svg';
import imgdbce6db1b2fc from '@/assets/dbce6db1b2fc.svg';

interface Logo {
  id: number;
  title: string;
  size: string;
}

const LOGOS: Logo[] = Array.from({ length: 6 }, (_, id) => ({ id, title: 'Making For RJS', size: '89.41 KB' }));

function DownloadCard({ item }: { item: Logo }) {
  const note = useInlineNote();
  return (
    <div className="dl-card  content-stretch flex gap-[16px] h-[184px] items-center relative shrink-0 w-[416px]">
      <div className="h-[184px] relative rounded-[16px] shrink-0 w-[196px] overflow-hidden">
        <img alt="Making For RJS preview" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img82968389538f} />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0 w-[187px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <h2 className="font-['Inter'] font-medium leading-[1.2] not-italic relative shrink-0 text-[#111] text-[16px] w-full">{item.title}</h2>
          <p className="font-['Inter'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#5f6368] text-[16px] whitespace-nowrap">{item.size}</p>
        </div>
        <InlineNoteButton note={note} message={MKT_DOWNLOAD_NOTE} className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative rounded-[9000px] shrink-0 cursor-pointer hover:opacity-80"><span className="block relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img21ab4c41b0fb} /></span><span className="font-['Inter'] font-medium leading-[24px] not-italic relative shrink-0 text-[#fd022c] text-[16px] text-center whitespace-nowrap">Download Logo</span></InlineNoteButton>
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
      {LOGOS.map((item) => (
        <DownloadCard key={item.id} item={item} />
      ))}
      </div>
      <nav aria-label="Pagination" className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <button type="button" aria-label="Previous page" className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer">
          <span className="flex-none rotate-90"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img454797fbac08} /></span></span>
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
          <span className="-rotate-90 flex-none"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgdbce6db1b2fc} /></span></span>
        </button>
      </nav>
      </div>
    </>
  );
}
