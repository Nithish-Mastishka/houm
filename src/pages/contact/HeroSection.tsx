import { Link } from 'react-router-dom';
import imgd351944bf3ce from '@/assets/d351944bf3ce.webp';

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-start px-[72px] py-[48px] relative size-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[292.68%] left-[-0.03%] max-w-none top-[-46.31%] w-full" src={imgd351944bf3ce} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
        <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="content-center flex flex-wrap font-['Inter'] font-medium gap-[10px] items-center pr-[11px] py-[8px] relative shrink-0 text-[16px] w-full whitespace-nowrap">
            <Link to="/" className="block cursor-pointer leading-[24px] opacity-90 text-[#f6f4fc] hover:opacity-100">Home</Link>
            <p className="leading-[24px] opacity-80 text-[#c4c4d6] text-center">/</p>
            <p className="leading-[24px] text-white">Contact Us</p>
          </div>
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px] whitespace-nowrap">Contact Us</h1>
            <p className="opacity-90 font-['Inter'] font-normal leading-[1.5] text-[#fff8f8] text-[16px] w-full">Have questions, need support, or want to work with us?<br />Fill out the form and our team will get back to you.</p>
          </div>
        </div>
      </div>
    </>
  );
}
