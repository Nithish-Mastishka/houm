import { Link } from 'react-router-dom';
import img62d3509e9a12 from '@/assets/62d3509e9a12.webp';

export default function HeaderSection() {
  return (
    <>
      <div className="flex flex-col gap-[10px] h-[248px] items-start justify-center px-[72px] py-[48px] relative w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[292.68%] left-[-0.03%] max-w-none top-[-46.31%] w-full" src={img62d3509e9a12} /></div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
        <nav aria-label="Breadcrumb" className="flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center pr-[11px] py-[8px] relative text-[16px] text-center w-full whitespace-nowrap"><Link to="/" className="leading-[24px] opacity-90 text-[#f6f4fc] hover:underline">Home</Link><span className="leading-[24px] opacity-80 text-[#c4c4d6]">/</span><Link to="/training-webinars" className="leading-[24px] opacity-90 text-[#f6f4fc] hover:underline">Training</Link><span className="leading-[24px] opacity-80 text-[#c4c4d6]">/</span><span aria-current="page" className="leading-[24px] text-white">PTM Sessions</span></nav>
        <div className="flex flex-col gap-[16px] items-start relative w-full">
          <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>HOUM Partners&rsquo; Meet &amp; Training (PMT)</h1>
          <div className="opacity-90 font-['Inter'] font-normal text-[#fff8f8] text-[16px] w-[528px]"><p className="leading-[1.5] mb-0">Explore upcoming PMT sessions, connect with experts,</p><p className="leading-[1.5]">and grow your business with HOUM.</p></div>
        </div>
      </div>
    </>
  );
}
