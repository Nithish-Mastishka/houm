import { Link } from 'react-router-dom';
import img123c0e5973fc from '@/assets/123c0e5973fc.webp';

export default function HeaderSection() {
  return (
    <>
      <header className="content-stretch flex flex-col items-start px-[72px] py-[48px] relative size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[292.68%] left-[-0.03%] max-w-none top-[-46.31%] w-full" src={img123c0e5973fc} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <nav aria-label="Breadcrumb" className="[word-break:break-word] content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center not-italic pr-[11px] py-[8px] relative shrink-0 text-[16px] w-full whitespace-nowrap"><Link to="/" className="block leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc] hover:opacity-100 hover:underline">Home</Link>
      <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6] text-center">/</p>
      <Link to="/mkt-videos" className="block leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc] hover:opacity-100 hover:underline">Marketing</Link>
      <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6] text-center">/</p>
      <Link to="/mkt-case-studies" className="block leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc] hover:opacity-100 hover:underline">Others</Link>
      <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6] text-center">/</p>
      <p className="leading-[24px] relative shrink-0 text-white" aria-current="page">News</p></nav>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <h1 className="font-['Roboto'] font-semibold leading-[1.2] relative shrink-0 text-[#fff8f8] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>News</h1>
        <p className="font-['Inter'] font-normal leading-[1.5] not-italic opacity-90 relative shrink-0 text-[#fff8f8] text-[16px] w-full">Stay updated with the latest HOUM announcements, launches, events, and industry developments.</p>
      </div>
      </div>
      </header>
    </>
  );
}
