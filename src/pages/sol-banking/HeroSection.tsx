import { Link } from 'react-router-dom';
import img5b9ddde73e61 from '@/assets/5b9ddde73e61.webp';

export default function HeroSection() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[72px] py-[48px] relative size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[194.59%] left-[0.01%] max-w-none top-[-18.84%] w-full" src={img5b9ddde73e61} />
          </div>
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(89.06504745974544deg, rgb(60, 0, 8) 0.20878%, rgba(60, 0, 8, 0.8) 37.746%, rgba(0, 0, 0, 0) 99.818%)" }} />
        </div>
        <nav aria-label="Breadcrumb" className="content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center pr-[11px] py-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
          <Link to="/" className="block cursor-pointer leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc] hover:underline">Home</Link>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <p className="leading-[24px] opacity-90 relative shrink-0 text-[#f6f4fc]">Solutions </p>
          <p className="leading-[24px] opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
          <p className="leading-[24px] relative shrink-0 text-white"> Banking</p>
        </nav>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px] w-full">Banking Security Solutions</h1>
          <p className="opacity-90 font-['Inter'] font-normal leading-[1.5] text-[#fff8f8] text-[16px] w-[528px]">Intelligent, reliable and future-ready security solutions built for the banking sector. Protect people, assets and data while ensuring seamless operations and customer trust.</p>
        </div>
      </div>
    </>
  );
}
