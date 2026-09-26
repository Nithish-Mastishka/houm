import WebinarRegistrationForm from '@/lib/forms-webinar-registration';
import imgc672ec0410fd from '@/assets/c672ec0410fd.svg';
import imga7336df205cc from '@/assets/a7336df205cc.svg';
import imgd03b16656f58 from '@/assets/d03b16656f58.jpg';
import imgae0cb34458d1 from '@/assets/ae0cb34458d1.svg';
import imgc440d65eb274 from '@/assets/c440d65eb274.svg';
import img49437059f679 from '@/assets/49437059f679.svg';
import img39adb9241c7c from '@/assets/39adb9241c7c.svg';
import img72faf433839a from '@/assets/72faf433839a.svg';

const HIGHLIGHTS = [
  'Introduction',
  'STQC (PPO) / BIS (CRO) Certification',
  'IPC Certified Product Range',
  'CTC Technology',
  'STQC IPC Initialization',
  'STQC IPC Configuration',
  'STQC IPC Connection',
  'Software Compatibility',
];

export default function MainSection() {
  return (
    <>
      <div className="content-start flex flex-wrap gap-[32px] items-start relative size-full">
      <article className="bg-white border border-[#f3f4f6] border-solid flex flex-col items-start overflow-clip p-px rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[800px]">
        <div className="flex flex-col gap-[24px] items-start p-[32px] w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-[12px] items-center"><span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgc672ec0410fd} /></span><p className="font-['Manrope'] font-medium leading-[24px] text-[#4b5563] text-[16px] whitespace-nowrap">Aug 28, 2025 to Oct 31, 2027</p></div>
            <div className="h-[54px] relative shrink-0 w-[78px]"><img alt="HOUM" className="absolute block inset-0 max-w-none size-full" src={imga7336df205cc} /></div>
          </div>
          <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>STQC Implications &amp; Installations</h2>
          <div className="bg-[#f9fafb] border border-[#f3f4f6] border-solid overflow-clip p-px rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full">
            <div className="h-[367px] relative w-full overflow-hidden"><img alt="Presenter at a HOUM expo booth demonstrating a touchscreen kiosk" className="absolute h-[108.69%] left-0 max-w-none top-[-4.34%] w-full" src={imgd03b16656f58} /></div>
          </div>
        </div>
        <section className="flex flex-col gap-[24px] items-start pb-[32px] px-[32px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <span className="bg-[#fef2f2] p-[8px] rounded-[8px] shrink-0"><span className="relative size-[24px] block"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgae0cb34458d1} /></span></span>
            <h3 className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] whitespace-nowrap">Session Highlights</h3>
          </div>
          <ul className="flex flex-col gap-[12px] items-start w-full">{HIGHLIGHTS.map((h) => (
            <li key={h} className="bg-[#f9fafb] flex gap-[16px] items-center p-[12px] rounded-[8px] w-full"><span className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgc440d65eb274} /></span><span className="font-['Inter'] font-medium leading-[1.2] text-[#3f4347] text-[16px] whitespace-nowrap">{h}</span></li>
          ))}</ul>
        </section>
      </article>
      <WebinarRegistrationForm idPrefix="wd" defaultBranch="Noida (HO), Delhi NCR">
        <div className="bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start p-[25px] relative rounded-[16px] shrink-0 w-[394.67px]">
        <h3 className="border-[#fd022c] border-b-2 border-solid pb-[6px] font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] whitespace-nowrap">Get in Touch</h3>
        <ul className="flex flex-col gap-[16px] items-start w-full font-['Inter'] font-normal text-[#3f4347] text-[16px] leading-[1.5]">
          <li className="flex gap-[8px] items-start w-full"><span className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img49437059f679} /></span><a href="mailto:training@houmsecurity.com" className="hover:text-[#fd022c]">training@houmsecurity.com</a></li>
          <li className="flex gap-[8px] items-start w-full"><span className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img39adb9241c7c} /></span><a href="tel:1800120455566" className="hover:text-[#fd022c]">1800 120 455566</a></li>
          <li className="flex gap-[8px] items-start w-full"><span className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img39adb9241c7c} /></span><a href="tel:+918800952952" className="hover:text-[#fd022c]">+91 88009 52952</a></li>
          <li className="flex gap-[8px] items-start w-full"><span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img72faf433839a} /></span><span>Mon - Sat | 10:00 AM - 06:00 PM</span></li>
        </ul>
      </div>
      </WebinarRegistrationForm>
      </div>
    </>
  );
}
