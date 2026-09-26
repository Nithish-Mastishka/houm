import { Fragment, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { MktChips } from '@/lib/mkt-chips';
import img1f3e86312f05 from '@/assets/1f3e86312f05.svg';
import img3b3d17426608 from '@/assets/3b3d17426608.svg';
import img000f0c6ee401 from '@/assets/000f0c6ee401.svg';
import imgd0dc55da1e94 from '@/assets/d0dc55da1e94.webp';
import imgd952506bf1fc from '@/assets/d952506bf1fc.png';
import img6339668fd36f from '@/assets/6339668fd36f.webp';
import img4605528af598 from '@/assets/4605528af598.svg';
import img55b478bce692 from '@/assets/55b478bce692.webp';
import imgf7e94b2d0cc4 from '@/assets/f7e94b2d0cc4.svg';
import img220144c53d67 from '@/assets/220144c53d67.svg';

const CATEGORIES = ['All News', 'Press Release', 'Product Launch', 'Events ', 'Awards', 'Partnerships', 'Industry Update'] as const;

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date used for sorting */
  date: string;
  card: ReactNode;
}

type SortOrder = 'newest' | 'oldest';

const NEWS: NewsItem[] = [
  {
    id: 0,
    title: 'How AI Is Changing Modern Video Surveillance',
    excerpt: 'Discover how AI-powered cameras are making surveillance smarter, faster and more proactive.',
    category: 'SECURITY INSIGHTS',
    date: '2026-08-18',
    card: (
            <Link to="/mkt-news-detail" className="group bg-white border border-[rgba(227,190,186,0.3)] border-solid content-stretch flex flex-col h-[440px] items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_28px_0px_rgba(0,0,0,0.1)] transition-shadow shrink-0 w-[416px]">
              <div className="h-[196px] shrink-0 relative w-full">
                <img alt="How AI Is Changing Modern Video Surveillance" className="absolute block inset-0 max-w-none size-full object-cover" src={imgd0dc55da1e94} />
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
                <div className="h-[29.826px] relative shrink-0 w-[62.857px]"><img alt="HOUM" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgd952506bf1fc} /></div>
              </div>
            </Link>
    ),
  },
  {
    id: 1,
    title: 'Choosing the Right Security Camera for Your Space',
    excerpt: 'From bullet and dome cameras to PTZ and smart cameras, understand what works best for every environment.',
    category: 'TIPS & GUIDES',
    date: '2023-09-28',
    card: (
            <Link to="/mkt-news-detail" className="group bg-white border border-[rgba(227,190,186,0.3)] border-solid content-stretch flex flex-col h-[440px] items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_28px_0px_rgba(0,0,0,0.1)] transition-shadow shrink-0 w-[416px]">
              <div className="h-[196px] shrink-0 relative w-full">
                <img alt="Choosing the Right Security Camera for Your Space" className="absolute block inset-0 max-w-none size-full object-cover" src={img6339668fd36f} />
              </div>
              <div className="flex-[1_0_0] min-h-px relative w-[414px]">
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full font-['Inter'] font-normal leading-[20px] not-italic text-[#fd022c] text-[14px] whitespace-nowrap">
                    <p>TIPS &amp; GUIDES</p>
                    <span className="bg-[#fd022c] relative rounded-[9999px] shrink-0 size-[4px]" />
                    <p>SEP 28, 2023</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <h3 className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[18px] w-full group-hover:text-[#fd022c] transition-colors">Choosing the Right Security Camera for Your Space</h3>
                    <p className="font-['Inter'] font-normal leading-[1.5] not-italic overflow-hidden text-[#5f6368] text-[16px] text-ellipsis w-full line-clamp-2">From bullet and dome cameras to PTZ and smart cameras, understand what works best for every environment.</p>
                  </div>
                  <span className="content-stretch flex gap-[8px] items-center pr-[24px] py-[8px] relative rounded-[9000px] shrink-0 font-['Inter'] font-medium leading-[24px] not-italic text-[#fd022c] text-[16px] whitespace-nowrap">Read More<span className="flex items-center justify-center relative shrink-0"><span className="-scale-y-100 flex-none rotate-180"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img4605528af598} /></span></span></span></span>
                </div>
              </div>
              <div className="absolute bg-[#111] left-[339.48px] rounded-[4px] top-[16px] flex items-center justify-center px-[2px]">
                <div className="h-[29.826px] relative shrink-0 w-[62.857px]"><img alt="HOUM" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgd952506bf1fc} /></div>
              </div>
            </Link>
    ),
  },
  {
    id: 2,
    title: 'Beyond Surveillance: Building Smarter, Safer Spaces',
    excerpt: 'See how integrated security solutions bring cameras, access control and monitoring together.',
    category: 'CUSTOMER STORIES',
    date: '2023-09-15',
    card: (
            <Link to="/mkt-news-detail" className="group bg-white border border-[rgba(227,190,186,0.3)] border-solid content-stretch flex flex-col h-[440px] items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_28px_0px_rgba(0,0,0,0.1)] transition-shadow shrink-0 w-[416px]">
              <div className="h-[196px] shrink-0 relative w-full">
                <img alt="Beyond Surveillance: Building Smarter, Safer Spaces" className="absolute block inset-0 max-w-none size-full object-cover" src={img55b478bce692} />
              </div>
              <div className="h-[240px] shrink-0 relative w-[414px]">
                <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full font-['Inter'] font-normal leading-[20px] not-italic text-[#b51f27] text-[14px] whitespace-nowrap">
                    <p>CUSTOMER STORIES</p>
                    <span className="bg-[#b51f27] relative rounded-[9999px] shrink-0 size-[4px]" />
                    <p>SEP 15, 2023</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <h3 className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[18px] w-full group-hover:text-[#fd022c] transition-colors">Beyond Surveillance: Building Smarter, Safer Spaces</h3>
                    <p className="font-['Inter'] font-normal leading-[1.5] not-italic overflow-hidden text-[#3f4347] text-[16px] text-ellipsis w-full line-clamp-2">See how integrated security solutions bring cameras, access control and monitoring together.</p>
                  </div>
                  <span className="content-stretch flex gap-[8px] items-center pr-[24px] py-[8px] relative rounded-[9000px] shrink-0 font-['Inter'] font-medium leading-[24px] not-italic text-[#fd022c] text-[16px] whitespace-nowrap">Read More</span>
                </div>
              </div>
              <div className="absolute bg-[#111] left-[339.48px] rounded-[4px] top-[16px] flex items-center justify-center px-[2px]">
                <div className="h-[29.826px] relative shrink-0 w-[62.857px]"><img alt="HOUM" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgd952506bf1fc} /></div>
              </div>
            </Link>
    ),
  },
];

export default function ListSection() {
  const [sort, setSort] = useState<SortOrder>('newest');
  const [query, setQuery] = useState('');
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = q
      ? NEWS.filter((n) => `${n.title} ${n.excerpt} ${n.category}`.toLowerCase().includes(q))
      : NEWS;
    return [...matches].sort((a, b) => (sort === 'newest' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
  }, [sort, query]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="content-stretch flex flex-col gap-[48px] items-start relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[4px] relative rounded-[8px] shrink-0">
              <label className="bg-[#f6f4fc] content-stretch flex gap-[3px] items-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer">
                <span className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative shrink-0 size-[24px]"><span className="block relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-[-3%] max-w-none" src={img1f3e86312f05} /></span></span>
                <select id="news-sort" aria-label="Sort news" value={sort} onChange={(e) => setSort(e.target.value as SortOrder)} className="appearance-none bg-transparent font-['Inter'] font-normal leading-[1.5] not-italic text-[#111] text-[16px] outline-none cursor-pointer pr-[2px]">
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
                <span className="block relative shrink-0 size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img3b3d17426608} /></span>
              </label>
              <form role="search" onSubmit={handleSearch} className="bg-[#f6f4fc] content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] shrink-0 w-[272px]">
                <input id="news-search" type="search" aria-label="Search news" placeholder="Search News.." value={query} onChange={(e) => setQuery(e.target.value)} className="bg-transparent flex-1 min-w-0 font-['Inter'] font-normal leading-[1.5] not-italic text-[#111] placeholder:text-[#5f6368] placeholder:opacity-70 text-[16px] outline-none" />
                <button type="submit" aria-label="Search" className="overflow-clip relative shrink-0 size-[24px] cursor-pointer">
                  <span className="absolute bottom-[25.01%] left-[16.67%] right-1/4 top-[16.67%]"><span className="absolute inset-[-5.36%_-5.35%_-5.37%_-5.36%]"><img alt="" className="block max-w-none size-full" src={img000f0c6ee401} /></span></span>
                </button>
              </form>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" role="group" aria-label="News categories">
      <MktChips labels={CATEGORIES} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      {visible.map((n) => (
        <Fragment key={n.id}>{n.card}</Fragment>
      ))}
      {visible.length === 0 && (
        <p className="font-['Inter'] font-normal leading-[1.5] not-italic text-[#5f6368] text-[16px]">No news matches your search.</p>
      )}
          </div>
      <nav aria-label="Pagination" className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <button type="button" aria-label="Previous page" className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer">
          <span className="flex-none rotate-90"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgf7e94b2d0cc4} /></span></span>
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
          <span className="-rotate-90 flex-none"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img220144c53d67} /></span></span>
        </button>
      </nav>
        </div>
      </section>
    </>
  );
}
