import { InlineNote, InlineNoteButton, MKT_DOWNLOAD_NOTE, useInlineNote } from '@/lib/mkt-inline-note';
import img7dbd39861160 from '@/assets/7dbd39861160.webp';
import img97fcaa23cff0 from '@/assets/97fcaa23cff0.svg';
import imgaf210cfbaa24 from '@/assets/af210cfbaa24.svg';
import img407f427c2cab from '@/assets/407f427c2cab.svg';

interface Brochure {
  id: number;
  title: string;
  size: string;
}

const BROCHURES: Brochure[] = Array.from({ length: 14 }, (_, id) => ({ id, title: 'Interactive Panel Brochure 2025-26', size: '89.41 KB' }));

function DownloadCard({ item }: { item: Brochure }) {
  const note = useInlineNote();
  return (
    <div className="dl-card bg-[#f6f4fc] rounded-[24px] content-stretch flex gap-[16px] h-[184px] items-center relative shrink-0 w-[416px]">
      <div className="h-[184px] relative rounded-[16px] shrink-0 flex-[1_0_0] min-w-px overflow-hidden">
        <img alt="Interactive Panel Brochure 2025-26 preview" className="absolute left-0 max-w-none size-full top-0" src={img7dbd39861160} />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative flex-[1_0_0] min-w-px">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <h2 className="font-['Inter'] font-medium leading-[1.2] not-italic relative shrink-0 text-[#111] text-[16px] w-full">{item.title}</h2>
          <p className="font-['Inter'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#5f6368] text-[16px] whitespace-nowrap">{item.size}</p>
        </div>
        <InlineNoteButton note={note} message={MKT_DOWNLOAD_NOTE} className="content-stretch flex gap-[0px] items-center justify-center py-[8px] relative rounded-[9000px] shrink-0 cursor-pointer hover:opacity-80"><span className="block relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img97fcaa23cff0} /></span><span className="font-['Inter'] font-medium leading-[1.2] not-italic relative shrink-0 text-[#fd022c] text-[14px] text-center whitespace-nowrap">Download Brochure</span></InlineNoteButton>
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
      {BROCHURES.map((item) => (
        <DownloadCard key={item.id} item={item} />
      ))}
      </div>
      <nav aria-label="Pagination" className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <button type="button" aria-label="Previous page" className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer">
          <span className="flex-none rotate-90"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgaf210cfbaa24} /></span></span>
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
          <span className="-rotate-90 flex-none"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img407f427c2cab} /></span></span>
        </button>
      </nav>
      </div>
    </>
  );
}
