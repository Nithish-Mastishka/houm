import img9875f7bd25f6 from '@/assets/9875f7bd25f6.jpg';
import img593e645a5c51 from '@/assets/593e645a5c51.svg';

export default function CeoSection() {
  return (
    <>
      <div className="bg-[#fff1f2] flex flex-col items-start px-[48px] py-[72px] relative rounded-[24px] size-full">
        <div className="flex items-center relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[48px] items-start min-w-px relative">
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">CEO VISION</p>
              <h2 className="pb-[0.585px] w-[652px] font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] whitespace-nowrap">Building a Safer, Smarter Tomorrow</h2>
            </div>
            <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full">
              <div className="border-[0.436px] border-[rgba(212,212,212,0.7)] border-solid h-[190.216px] relative rounded-[10.471px] shadow-[0px_0.436px_0.873px_0px_rgba(0,0,0,0.05)] shrink-0 w-[178px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10.471px]">
                  <img alt="Portrait of the CEO of HOUM" className="absolute h-[122.67%] left-[-0.84%] max-w-none top-[-2.46%] w-[101.96%]" src={img9875f7bd25f6} />
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="pb-[8px] w-full">
                    <p className="font-['Inter'] italic leading-[1.5] text-[16px] text-[#5f6368]">&ldquo;Our vision is to create technology driven solutions that make people&apos;s lives safer, simpler, and more connected.&rdquo;</p>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start w-full font-['Inter'] font-normal text-[#5f6368] text-[16px]">
                    <p className="leading-[1.5]">As we enter the technology and surveillance space, our focus is on combining our experience in manufacturing, quality, and innovation with emerging technologies to create products and solutions that deliver real value.</p>
                    <p className="leading-[1.5]">We believe in building trusted brands, nurturing long-term relationships, and creating businesses that are ready for the future.</p>
                  </div>
                </div>
                <div className="border-[rgba(255,153,158,0.3)] border-solid border-t flex flex-col gap-[2px] items-start pt-[17px] relative shrink-0 w-full">
                  <p className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Name Here</p>
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#5f6368] text-[12px] w-full">CEO, HOUM</p>
                </div>
              </div>
              <div className="border-[rgba(255,153,158,0.3)] border-l border-solid flex flex-col items-start justify-center pl-[25px] py-[8px] relative shrink-0 w-[264px]">
                <div className="flex flex-col gap-[12px] items-start w-full font-['Inter'] font-medium text-[#3f4347] text-[14px] whitespace-nowrap">
                  <p className="leading-[1.2]">INNOVATION</p>
                  <p className="leading-[1.2]">PEOPLE</p>
                  <p className="leading-[1.2]">TRUST</p>
                  <p className="leading-[1.2]">A SAFER TOMORROW</p>
                </div>
              </div>
            </div>
            <div className="absolute h-[82.701px] left-[936px] top-0 w-[83.244px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={img593e645a5c51} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
