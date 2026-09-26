import { InlineNote, InlineNoteButton, MKT_VIDEO_NOTE, useInlineNote } from '@/lib/mkt-inline-note';
import img3712d197fd9a from '@/assets/3712d197fd9a.webp';
import imgbac56c2726b1 from '@/assets/bac56c2726b1.svg';
import imgc2c7f686a42c from '@/assets/c2c7f686a42c.svg';
import img8d2454bb1221 from '@/assets/8d2454bb1221.svg';

interface Commercial {
  id: number;
  title: string;
  description: string;
}

const COMMERCIALS: Commercial[] = [
  { id: 0, title: 'Security That Feels Like Family', description: 'Because every family deserves a safer, more secure tomorrow.' },
  { id: 1, title: 'Innovation That Leads the Way', description: 'Discover how smarter technology is changing the way we experience security.' },
  { id: 2, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 3, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 4, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 5, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 6, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 7, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 8, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 9, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 10, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
  { id: 11, title: 'Smart Security for Modern Homes', description: 'Intelligent surveillance designed to protect your home, day and night.' },
];

function CommercialCard({ item }: { item: Commercial }) {
  const note = useInlineNote();
  return (
    <article className="vid bg-white border border-[rgba(227,190,186,0.3)] border-solid content-stretch drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col h-[487px] items-start p-px relative rounded-[24px] shrink-0 w-[416px]">
      <div className="h-[304px] relative rounded-[24px] shrink-0 w-full">
        <img alt={`${item.title} video thumbnail`} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={img3712d197fd9a} />
      </div>
      <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <h3 className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[18px] w-full">{item.title}</h3>
          </div>
          <p className="font-['Inter'] font-normal leading-[1.5] not-italic text-[#5f6368] text-[16px] w-full">{item.description}</p>
        </div>
      </div>
      <InlineNoteButton note={note} message={MKT_VIDEO_NOTE} aria-label={`Play ${item.title}`} className="absolute left-[171px] size-[72px] top-[116px] cursor-pointer hover:scale-105 transition-transform">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgbac56c2726b1} />
      </InlineNoteButton>
      <div className="absolute bg-[rgba(17,17,17,0.8)] right-[12px] rounded-[4px] top-[269px] flex items-center justify-center px-[4px] py-[2px]">
        <p className="font-['Inter'] font-medium leading-[1.2] not-italic text-[16px] text-white whitespace-nowrap">02:18</p>
      </div>
      <InlineNote note={note} className="dl-note absolute bottom-[12px] left-[24px] font-['Inter'] text-[12px] leading-[16px] text-[#b51f27] opacity-0 transition-opacity" />
    </article>
  );
}

export default function GridSection() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[72px] items-center relative size-full">
      <div className="content-center flex flex-wrap gap-[24px] items-center relative shrink-0 w-[1296px]">
      {COMMERCIALS.map((item) => (
        <CommercialCard key={item.id} item={item} />
      ))}
      </div>
      <nav aria-label="Pagination" className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <button type="button" aria-label="Previous page" className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer">
          <span className="flex-none rotate-90"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgc2c7f686a42c} /></span></span>
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
          <span className="-rotate-90 flex-none"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img8d2454bb1221} /></span></span>
        </button>
      </nav>
      </div>
    </>
  );
}
