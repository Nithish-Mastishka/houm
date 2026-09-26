import { Link } from 'react-router-dom';
import img520fcf436d89 from '@/assets/520fcf436d89.webp';

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-start px-[72px] py-[48px] relative size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[292.68%] left-[-0.03%] max-w-none top-[-46.31%] w-full" src={img520fcf436d89} /></div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
        <div className="flex flex-col gap-[32px] items-center relative w-full">
          <nav aria-label="Breadcrumb" className="flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center pr-[11px] py-[8px] text-[16px] text-center w-full whitespace-nowrap">
            <Link to="/" className="leading-[24px] opacity-90 text-[#f6f4fc] hover:underline">Home</Link><span className="leading-[24px] opacity-80 text-[#c4c4d6]">/</span><span className="leading-[24px] opacity-90 text-[#f6f4fc]">Partner Connect</span><span className="leading-[24px] opacity-80 text-[#c4c4d6]">/</span><span aria-current="page" className="leading-[24px] text-white">Galaxy Store</span>
          </nav>
          <div className="flex flex-col gap-[16px] items-start w-full">
            <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>HOUM Galaxy Store</h1>
            <div className="opacity-90 max-w-[500px] pr-[32px] w-full"><p className="font-['Inter'] font-normal leading-[1.5] text-[#fff8f8] text-[16px]">Explore HOUM security solutions through our growing network of Galaxy Stores. From everyday protection to intelligent surveillance, experience the technology, get expert guidance, and find the right solution for your space.</p></div>
          </div>
        </div>
      </div>
    </>
  );
}
