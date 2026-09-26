import img6e78fe21ff1a from '@/assets/6e78fe21ff1a.svg';
import img7916319feaef from '@/assets/7916319feaef.svg';
import img39edb6f4cfb2 from '@/assets/39edb6f4cfb2.svg';
import imgd104833c7706 from '@/assets/d104833c7706.svg';

export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col gap-[48px] items-start relative size-full">
        <div className="flex flex-col gap-[24px] items-center w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="w-full text-center font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase">ABOUT HOUM EXPERIENCE CENTER</p>
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Where Innovation Meets Assurance</h2>
          </div>
          <div className="font-['Inter'] font-normal text-[#5f6368] text-[14px] text-center w-full"><p className="leading-[20px] mb-0">HOUM Experience Centers bring security technology closer to you. From advanced surveillance</p><p className="leading-[20px] mb-0"> solutions to intelligent monitoring systems, explore our products in a real-world </p><p className="leading-[20px]">environment and understand how they work before making your choice.</p></div>
        </div>
        <div className="flex flex-wrap gap-[24px] items-start justify-center w-full">
          <div className="bg-white drop-shadow-[0px_24.183px_7.859px_rgba(0,0,0,0.04),0px_9.852px_3.941px_rgba(0,0,0,0.03),0px_2.239px_1.903px_rgba(0,0,0,0.02)] flex flex-col h-[219.384px] items-start p-[24px] rounded-[24px] shrink-0 w-[306px]">
        <div className="flex flex-col gap-[9.673px] items-start w-full">
          <span className="relative shrink-0 size-[55.511px] block"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img6e78fe21ff1a} /></span>
          <h3 className="font-['Inter'] font-medium text-[#111] text-[18px] w-[233px]"><span className="block leading-[1.2]">Live Demonstrations</span></h3>
          <p className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><span className="block leading-[1.5]">See HOUM security solutions in action.</span></p>
        </div>
      </div>
          <div className="bg-white drop-shadow-[0px_24.183px_7.859px_rgba(0,0,0,0.04),0px_9.852px_3.941px_rgba(0,0,0,0.03),0px_2.239px_1.903px_rgba(0,0,0,0.02)] flex flex-col h-[219.384px] items-start p-[24px] rounded-[24px] shrink-0 w-[306px]">
        <div className="flex flex-col gap-[9.673px] items-start w-full">
          <span className="relative shrink-0 size-[58.038px] block"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img7916319feaef} /></span>
          <h3 className="font-['Inter'] font-medium text-[#111] text-[18px] w-[233px]"><span className="block leading-[1.2]">Hands-on Experience</span></h3>
          <p className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><span className="block leading-[1.5]">Test products and explore features up close.</span></p>
        </div>
      </div>
          <div className="bg-white drop-shadow-[0px_24.183px_7.859px_rgba(0,0,0,0.04),0px_9.852px_3.941px_rgba(0,0,0,0.03),0px_2.239px_1.903px_rgba(0,0,0,0.02)] flex flex-col h-[219.384px] items-start p-[24px] rounded-[24px] shrink-0 w-[306px]">
        <div className="flex flex-col gap-[9.673px] items-start w-full">
          <span className="flex items-center justify-center overflow-clip px-[6.046px] shrink-0 size-[58.038px]"><span className="relative shrink-0 size-[41.11px] block"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img39edb6f4cfb2} /></span></span>
          <h3 className="font-['Inter'] font-medium text-[#111] text-[18px] w-[233px]"><span className="block leading-[1.2]">Future-Ready Solutions</span></h3>
          <p className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><span className="block leading-[1.5]">Experience technology built for tomorrow&rsquo;s security challenges.</span></p>
        </div>
      </div>
          <div className="bg-white drop-shadow-[0px_24.183px_7.859px_rgba(0,0,0,0.04),0px_9.852px_3.941px_rgba(0,0,0,0.03),0px_2.239px_1.903px_rgba(0,0,0,0.02)] flex flex-col h-[219.384px] items-start p-[24px] rounded-[24px] shrink-0 w-[306px]">
        <div className="flex flex-col gap-[9.673px] items-start w-full">
          <span className="relative shrink-0 size-[58.038px] block"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgd104833c7706} /></span>
          <h3 className="font-['Inter'] font-medium text-[#111] text-[18px] w-[233px]"><span className="block leading-[1.2]">Expert Guidance</span></h3>
          <p className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><span className="block leading-[1.5]">Get personalized support from our technical experts.</span></p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}
