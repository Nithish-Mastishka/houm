import { Link } from 'react-router-dom';
import img94d283c5c33d from '@/assets/94d283c5c33d.webp';

export default function HeroSection() {
  return (
    <>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex flex-col gap-[10px] h-[437px] items-start justify-center px-[72px] py-[48px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={img94d283c5c33d} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(89.96504218209141deg, rgba(24, 0, 0, 0.8) 0%, rgba(28, 1, 2, 0.52) 28.459%, rgba(188, 19, 23, 0.24) 56.908%)" }} />
          </div>
          <div className="[word-break:break-word] content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center leading-[24px] not-italic pr-[11px] py-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
            <Link to="/" className="opacity-90 relative shrink-0 text-[#f6f4fc]">Home</Link>
            <p className="opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
            <p className="relative shrink-0 text-white">About Us</p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto'] font-semibold justify-center leading-[0] relative shrink-0 text-[#fff8f8] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <h1 className="leading-[1.2]">A Stronger World Starts With a Safer Tomorrow</h1>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fff8f8] text-[16px] w-[528px]">
                  <p className="leading-[1.5]">At HOUM, we bring together technology, innovation, and purpose to create smarter, safer, and more connected environments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
