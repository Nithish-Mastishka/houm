import { Link } from 'react-router-dom';
import img3b358fd36768 from '@/assets/3b358fd36768.webp';

export default function TrustedSection() {
  return (
    <>
      <div className="flex flex-col items-start relative rounded-[24px] size-full overflow-hidden">
        <img alt="HOUM PTZ camera mounted on a modern house" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={img3b358fd36768} />
        <div className="flex-1 relative w-full flex items-center">
          <div className="flex flex-col gap-[48px] items-start p-[48px] relative">
            <div className="flex flex-col gap-[4px] items-start w-full">
              <p className="font-['Inter'] font-bold leading-[20px] text-[#111] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">FIND THE RIGHT CAMERA FOR YOUR SPACE</p>
              <div className="flex flex-col gap-[16px] items-start w-full">
                <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] whitespace-pre-wrap">Smarter Security<br /> for Every Space</h2>
                <p className="font-['Inter'] font-normal leading-[1.5] text-[#111] text-[16px] w-[372px]">Indoor or outdoor, home or business &mdash; we have the right camera for your needs.</p>
              </div>
            </div>
            <Link to="/products" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors flex items-center justify-center px-[40px] py-[16px] rounded-[9000px]">
              <span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-white whitespace-nowrap">Explore All Cameras</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
