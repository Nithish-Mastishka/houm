import { Link } from 'react-router-dom';
import { MktChips } from '@/lib/mkt-chips';
import imgc30dc9c3ed70 from '@/assets/c30dc9c3ed70.webp';
import img9874282ccbf4 from '@/assets/9874282ccbf4.png';
import imgbaf1e41ea024 from '@/assets/baf1e41ea024.svg';
import imgc60d7a766ddf from '@/assets/c60d7a766ddf.svg';

const CATEGORIES = ['All ', 'Product Updates', 'Technologies', 'Industry Insights', 'Company News', 'Tips & Guides', 'Customer Stories'] as const;

const POST_IDS = Array.from({ length: 3 }, (_, id) => id);

function BlogCard() {
  return (
    <Link to="/mkt-blog-detail" className="group bg-white border border-[rgba(227,190,186,0.3)] border-solid content-stretch flex flex-col h-[440px] items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_28px_0px_rgba(0,0,0,0.1)] transition-shadow shrink-0 w-[416px]">
      <div className="h-[196px] shrink-0 relative w-full">
        <img alt="How AI Is Changing Modern Video Surveillance" className="absolute block inset-0 max-w-none size-full object-cover" src={imgc30dc9c3ed70} />
      </div>
      <div className="flex-[1_0_0] min-h-px relative w-[414px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full font-['Inter'] font-normal leading-[20px] not-italic text-[#b51f27] text-[14px] whitespace-nowrap">
            <p>SECURITY INSIGHTS</p>
            <span className="bg-[#b51f27] relative rounded-[9999px] shrink-0 size-[4px]" />
            <p>AUG 18, 2026</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <h3 className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[18px] w-full group-hover:text-[#fd022c] transition-colors">How AI Is Changing Modern Video Surveillance</h3>
            <p className="font-['Inter'] font-normal leading-[1.5] not-italic overflow-hidden text-[#3f4347] text-[16px] text-ellipsis w-full line-clamp-2">Discover how AI-powered cameras are making surveillance smarter, faster and more proactive.</p>
          </div>
          <span className="content-stretch flex gap-[8px] items-center pr-[24px] py-[8px] relative rounded-[9000px] shrink-0 font-['Inter'] font-medium leading-[24px] not-italic text-[#fd022c] text-[16px] whitespace-nowrap">Read More</span>
        </div>
      </div>
      <div className="absolute backdrop-blur-[2px] bg-[#111] left-[339.48px] rounded-[4px] top-[16px] flex items-center justify-center px-[2px]">
        <div className="h-[29.826px] relative shrink-0 w-[62.857px]"><img alt="HOUM" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9874282ccbf4} /></div>
      </div>
    </Link>
  );
}

export default function ListSection() {
  return (
    <>
      <section className="content-stretch flex flex-col gap-[48px] items-center relative size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" role="group" aria-label="Blog categories">
      <MktChips labels={CATEGORIES} />
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full">
      {POST_IDS.map((id) => (
        <BlogCard key={id} />
      ))}
          </div>
      <nav aria-label="Pagination" className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <button type="button" aria-label="Previous page" className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer">
          <span className="flex-none rotate-90"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgbaf1e41ea024} /></span></span>
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
          <span className="-rotate-90 flex-none"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgc60d7a766ddf} /></span></span>
        </button>
      </nav>
        </div>
      </section>
    </>
  );
}
