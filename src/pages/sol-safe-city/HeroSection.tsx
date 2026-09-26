import { Link } from 'react-router-dom';
import imgc2a032ed9c93 from '@/assets/c2a032ed9c93.webp';

export default function HeroSection() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[10px] items-center px-[72px] py-[48px] relative size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgc2a032ed9c93} />
          <div className="absolute bg-gradient-to-r from-[#3c0008] inset-0 to-[rgba(60,0,8,0)] via-1/2 via-[rgba(60,0,8,0.8)]" />
        </div>
        <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center not-italic pr-[11px] py-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
          <Link to="/" className="block cursor-pointer leading-[0] opacity-90 relative shrink-0 text-[#f6f4fc] hover:underline"><p className="leading-[24px]">Home</p></Link>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <p className="leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc]">Solutions</p>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <p className="leading-[24px] relative shrink-0 text-white">Safe City</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto'] font-semibold justify-center leading-[0] relative shrink-0 text-[#fff8f8] text-[32px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}><p className="leading-[1.2] mb-0">Intelligent Surveillance </p><p className="leading-[1.2]">for Safer, Smarter Cities</p></div>
          <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full"><div className="[word-break:break-word] flex flex-col justify-center leading-[0] not-italic relative shrink-0 font-['Inter'] font-normal text-[#fff8f8] text-[16px] w-[528px]"><p className="leading-[1.5]">HOUM empowers city administrators with integrated surveillance, AI-driven traffic intelligence, and centralized command platforms to improve public safety and ensure rapid response.</p></div></div>
        </div>
      </div>
    </>
  );
}
