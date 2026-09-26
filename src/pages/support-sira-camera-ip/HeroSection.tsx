import { Link } from 'react-router-dom';
import imgdb244cf3921f from '@/assets/db244cf3921f.webp';

export default function HeroSection() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[72px] py-[48px] relative size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[292.68%] left-[-0.03%] max-w-none top-[-46.31%] w-full" src={imgdb244cf3921f} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
        <nav aria-label="Breadcrumb" className="[word-break:break-word] content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center not-italic pr-[11px] py-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
          <Link to="/" className="block cursor-pointer leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc] hover:text-white">Home</Link>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <Link to="/support-service" className="leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc] hover:text-white">Support</Link>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <Link to="/support-user-manual" className="leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc] hover:text-white">Download</Link>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <p className="leading-[24px] relative shrink-0 text-white">SIRA Certificate</p>
        </nav>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <h1 className="[word-break:break-word] font-['Roboto'] font-semibold leading-[1.2] relative shrink-0 text-[#fff8f8] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>SIRA Certificate</h1>
        </div>
      </div>
    </>
  );
}
