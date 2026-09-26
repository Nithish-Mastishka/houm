import { Link } from 'react-router-dom';
import imgf29acd373af1 from '@/assets/f29acd373af1.webp';

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col gap-[10px] items-start justify-center px-[72px] py-[48px] relative size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[292.68%] left-[-0.03%] max-w-none top-[-46.31%] w-full" src={imgf29acd373af1} /></div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
        <nav aria-label="Breadcrumb" className="content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center pr-[11px] py-[8px] relative text-[16px] text-center w-full whitespace-nowrap"><Link to="/" className="block leading-[24px] opacity-90 text-[#f6f4fc] hover:text-white">Home</Link><p className="leading-[24px] opacity-80 text-[#c4c4d6]">/</p><p className="leading-[24px] opacity-90 text-[#f6f4fc]">Support</p><p className="leading-[24px] opacity-80 text-[#c4c4d6]">/</p><p className="leading-[24px] opacity-90 text-[#f6f4fc]">Tools</p><p className="leading-[24px] opacity-80 text-[#c4c4d6]">/</p><p className="leading-[24px] text-white">HDD &amp; Bandwidth Calculator</p></nav>
        <div className="flex flex-col gap-[16px] items-start relative w-full">
          <h1 className="flex flex-col font-['Roboto'] font-semibold justify-center text-[#fff8f8] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}><p className="leading-[1.2]">HDD &amp; Bandwidth Calculator</p></h1>
          <div className="flex flex-col items-start opacity-90 w-full"><div className="flex flex-col font-['Inter'] font-normal justify-center text-[#fff8f8] text-[16px] w-[528px]"><p className="leading-[1.5] mb-0">Plan your surveillance system with the right storage capacity</p><p className="leading-[1.5]">and network bandwidth.</p></div></div>
        </div>
      </div>
    </>
  );
}
