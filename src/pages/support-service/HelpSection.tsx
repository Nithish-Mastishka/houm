import { Link } from 'react-router-dom';
import img4fc83e257d8b from '@/assets/4fc83e257d8b.webp';

export default function HelpSection() {
  return (
    <>
      <div className="flex gap-[156px] items-center pl-[200px] pr-[180px] py-[48px] relative rounded-[48px] size-full" style={{ backgroundImage: "linear-gradient(57.103064335009954deg, rgb(10, 6, 7) 1.4144%, rgb(60, 0, 8) 98.314%)" }}>
        <div className="flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[416px] z-[1]">
          <div className="flex flex-col gap-[16px] items-start">
            <p className="font-['Inter'] font-bold leading-[20px] text-[14px] text-white tracking-[1.4px] uppercase whitespace-nowrap">Something not right</p>
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[32px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>We&rsquo;re here to Help</h2>
            <div className="font-['Inter'] font-normal opacity-90 text-[16px] text-white w-full"><p className="leading-[1.5] mb-0">Tell us what&rsquo;s happening and we&rsquo;ll help you</p><p className="leading-[1.5]">find the right solution.</p></div>
          </div>
          <Link to="/contact" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] shrink-0 font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Contact an Expert</Link>
        </div>
        <div className="absolute h-[346px] left-[724px] top-[-42.88px] w-[435px] pointer-events-none"><div className="absolute inset-0 overflow-hidden"><img alt="Red HOUM support headset" className="absolute left-[-12.3%] max-w-none size-full top-[5.39%]" src={img4fc83e257d8b} /></div></div>
      </div>
    </>
  );
}
