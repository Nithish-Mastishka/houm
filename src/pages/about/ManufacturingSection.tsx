import img71a5becb20fd from '@/assets/71a5becb20fd.webp';
import img265e6b702ec9 from '@/assets/265e6b702ec9.webp';
import img2678618127aa from '@/assets/2678618127aa.webp';

export default function ManufacturingSection() {
  return (
    <>
      <div className="bg-[#fff1f2] flex gap-[48px] items-start px-[48px] py-[72px] relative rounded-[24px] size-full">
        <div className="border border-[#d1d1d1] border-solid h-[429px] relative rounded-[24px] shrink-0 w-[401px]">
          <img alt="Manufacturing floor" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={img71a5becb20fd} />
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch">
          <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">MANUFACTURING STRENGTH</p>
              <h2 className="pb-[0.585px] font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] w-full">Built At Scale.<br />Backed By Quality.</h2>
            </div>
            <div className="pb-[16px] w-[532px]">
              <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] w-full">Yash Group&apos;s manufacturing capabilities are supported by robust infrastructure and a strong focus on quality, operational excellence, and continuous improvement.</p>
            </div>
          </div>
          <div className="flex gap-[24px] items-start justify-end relative shrink-0">
            <div className="flex gap-[13px] items-center relative shrink-0">
              <div className="drop-shadow-[-19px_-1px_2px_rgba(242,242,242,0.25)] flex h-[171px] items-center overflow-clip relative rounded-[16px] shrink-0 w-[238px]">
                <div className="flex-[1_0_0] h-full min-w-px overflow-clip relative rounded-[16px]">
                  <img alt="Hyderabad manufacturing facility" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img265e6b702ec9} />
                  <div className="absolute bg-gradient-to-b flex flex-col from-[rgba(119,118,118,0.3)] h-[88px] items-start justify-center left-0 p-[24px] to-[85.185%] to-[rgba(26,0,0,0.3)] top-[83px] w-[279px]">
                    <p className="font-['Poppins'] leading-[1.2] text-[24px] text-white whitespace-nowrap">Hyderabad</p>
                    <p className="font-['Inter'] font-semibold leading-[1.5] text-[12px] text-white whitespace-nowrap">MANUFACTURING FACILITY</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[171px] items-start overflow-clip relative rounded-[16px] shrink-0 w-[236px]">
                <div className="flex-[1_0_0] min-h-px overflow-clip relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full">
                  <img alt="Baddi manufacturing facility" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2678618127aa} />
                  <div className="absolute bg-gradient-to-b flex flex-col from-[rgba(119,118,118,0.3)] h-[81px] items-start justify-center left-0 p-[24px] to-[85.185%] to-[rgba(26,0,0,0.3)] top-[90px] w-[277px]">
                    <p className="font-['Poppins'] leading-[1.2] text-[24px] text-white whitespace-nowrap">Baddi</p>
                    <p className="font-['Inter'] font-semibold leading-[1.5] text-[12px] text-white whitespace-nowrap">MANUFACTURING FACILITY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[rgba(255,153,158,0.5)] border-l border-solid flex flex-col items-start justify-center pl-[33px] py-[32px] relative shrink-0 w-[231px]">
              <div className="flex flex-col gap-[12px] items-start w-full font-['Inter'] font-medium text-[#3f4347] text-[14px] uppercase whitespace-nowrap">
                <p className="leading-[1.2]">Robust Infrastructure</p>
                <p className="leading-[1.2]">Operational Excellence</p>
                <p className="leading-[1.2]">Quality Focus</p>
                <p className="leading-[1.2]">Trusted Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
