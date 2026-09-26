import { Link } from 'react-router-dom';
import img2d647edec42a from '@/assets/2d647edec42a.webp';

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-start relative size-full">
        <div className="flex flex-col gap-[10px] h-[330px] items-start justify-center px-[72px] py-[48px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2d647edec42a} />
          <div className="content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center leading-[24px] pr-[11px] py-[8px] relative shrink-0 text-[16px] text-center w-full whitespace-nowrap">
            <Link to="/" className="opacity-90 relative shrink-0 text-[#f6f4fc] hover:opacity-100">Home</Link>
            <p className="opacity-80 relative shrink-0 text-[#c4c4d6]">/</p>
            <p className="relative shrink-0 text-white">Working With Us</p>
          </div>
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px] w-full">Work With Us</h1>
            <p className="opacity-90 font-['Inter'] font-normal leading-[1.5] text-[#fff8f8] text-[16px] w-full">Join a team shaping smarter security through technology, collaboration,<br />and ideas that make a real difference.</p>
          </div>
        </div>
      </div>
    </>
  );
}
