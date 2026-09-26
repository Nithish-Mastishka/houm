import { Link } from 'react-router-dom';
import imgacb7b237eefd from '@/assets/acb7b237eefd.webp';
import img1c0485961a72 from '@/assets/1c0485961a72.svg';

export default function HeaderSection() {
  return (
    <>
      <header className="content-stretch flex flex-col items-start px-[72px] py-[48px] relative size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[292.68%] left-[-0.03%] max-w-none top-[-46.31%] w-full" src={imgacb7b237eefd} />
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
      <Link to="/mkt-galleries" className="block leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc] hover:opacity-100 hover:underline">Galleries</Link>
      <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6] text-center">/</p>
      <p className="leading-[24px] relative shrink-0 text-white" aria-current="page">Galleries View</p></nav>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full font-['Inter'] font-normal leading-[20px] not-italic text-[#f6f4fc] text-[14px] whitespace-nowrap">
          <p>EVENTS</p><span className="bg-[#f6f4fc] relative rounded-[9999px] shrink-0 size-[4px]" /><p>SEP 15, 2023</p>
        </div>
        <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Galleries View</h1>
        <div className="content-stretch flex flex-col gap-[4px] items-start opacity-90 relative shrink-0 w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] not-italic text-[16px] text-white w-full">IFSEC India 2026</p>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
            <span className="block overflow-clip relative shrink-0 size-[24px]"><span className="absolute inset-1/4"><span className="absolute inset-[-4.17%]"><img alt="" className="block max-w-none size-full" src={img1c0485961a72} /></span></span></span>
            <p className="font-['Inter'] font-normal leading-[1.5] not-italic text-[16px] text-white whitespace-nowrap">24 Photos</p>
          </div>
        </div>
      </div>
      </div>
      </header>
    </>
  );
}
