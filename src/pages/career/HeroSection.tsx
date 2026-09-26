import { Link } from 'react-router-dom';
import img12fa0ec41487 from '@/assets/12fa0ec41487.webp';

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-start justify-center px-[72px] py-[48px] relative size-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12fa0ec41487} />
        <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center pr-[11px] py-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
            <Link to="/" className="block cursor-pointer leading-[24px] opacity-90 text-[#f6f4fc] hover:opacity-100">Home</Link>
            <p className="leading-[24px] opacity-80 text-[#c4c4d6]">/</p>
            <Link to="/working-with-us" className="block cursor-pointer leading-[24px] opacity-90 text-[#f6f4fc] hover:opacity-100">Working with us</Link>
            <p className="leading-[24px] opacity-80 text-[#c4c4d6]">/</p>
            <p className="leading-[24px] text-white">Career</p>
          </div>
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px] whitespace-nowrap">Career</h1>
            <p className="opacity-90 font-['Inter'] font-normal leading-[1.5] text-[#fff8f8] text-[16px] w-full">Join a team shaping smarter, safer security solutions through technology, innovation, and real-world impact.</p>
          </div>
        </div>
      </div>
    </>
  );
}
