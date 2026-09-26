import { Link } from 'react-router-dom';
import img7f7a200ed59a from '@/assets/7f7a200ed59a.webp';

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-start justify-center px-[72px] py-[48px] relative size-full overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[292.68%] left-[-0.03%] max-w-none top-[-46.31%] w-full" src={img7f7a200ed59a} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
        <div className="flex flex-col gap-[24px] items-start relative w-[800px]">
          <nav aria-label="Breadcrumb" className="flex font-['Inter'] font-medium gap-[10px] items-center pr-[11px] py-[8px] text-[16px] whitespace-nowrap">
            <Link to="/" className="leading-[24px] opacity-90 text-[#f6f4fc] hover:text-white hover:underline">Home</Link>
            <span className="leading-[24px] opacity-80 text-[#c4c4d6]">/</span>
            <Link to="/products" className="leading-[24px] opacity-90 text-[#f6f4fc] hover:text-white hover:underline">Product </Link>
            <span className="leading-[24px] opacity-80 text-[#c4c4d6]">/</span>
            <span className="leading-[24px] text-white">Smart Wi-Fi Dome Cameras</span>
          </nav>
          <div className="flex flex-col gap-[16px] items-start w-full">
            <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px]">Smart Wi-Fi Dome Cameras</h1>
            <p className="font-['Inter'] font-normal leading-[1.5] opacity-90 text-[#fff8f8] text-[16px]">Explore our complete range of advanced security solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
