import { Link } from 'react-router-dom';
import img6b666b0c4dc0 from '@/assets/6b666b0c4dc0.webp';

export default function HeroSection() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[72px] py-[48px] relative size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={img6b666b0c4dc0} />
          <div className="absolute bg-gradient-to-r from-[#3c0008] inset-0 to-[109.93%] to-[rgba(60,0,8,0)] via-[62.401%] via-[rgba(60,0,8,0.8)]" />
        </div>
        <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center not-italic pr-[11px] py-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
          <Link to="/" className="block cursor-pointer leading-[0] opacity-90 relative shrink-0 text-[#f6f4fc] hover:underline"><p className="leading-[24px]">Home</p></Link>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <p className="leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc]">Solution</p>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <p className="leading-[24px] relative shrink-0 text-white">Hospitality</p>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter'] font-bold justify-center leading-[0] min-w-px not-italic relative text-[#fd022c] text-[14px] tracking-[1.4px] uppercase"><p className="leading-[20px]">INDUSTRY SOLUTION</p></div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-['Roboto'] font-semibold justify-center leading-[0] relative shrink-0 text-[#fff8f8] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}><h1 className="leading-[1.2]">Hospitality /Health Care</h1></div>
            </div>
            <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fff8f8] text-[16px] w-[528px]">
                <p className="leading-[1.5] mb-0">Smart surveillance solutions that help hospitals and hospitality</p>
                <p className="leading-[1.5] mb-0">facilities create safer environments, improve operational efficiency</p>
                <p className="leading-[1.5]">and deliver better care and experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
