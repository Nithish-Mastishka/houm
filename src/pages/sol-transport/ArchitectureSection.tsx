import img600f08f10d8e from '@/assets/600f08f10d8e.webp';

export default function ArchitectureSection() {
  return (
    <>
      <div className="content-stretch flex items-end relative size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-center min-w-px relative">
          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full"><div className="[word-break:break-word] flex flex-col font-['Inter'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fd022c] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap"><p className="leading-[20px]">Safe city architecture</p></div></div>
            <div className="[word-break:break-word] flex flex-col font-['Roboto'] font-semibold justify-center leading-[0] relative shrink-0 text-[#111] text-[32px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}><h2 className="leading-[1.2]">Unified, Intelligent, Future Ready</h2></div>
          </div>
          <div className="bg-[rgba(255,255,255,0)] border border-[rgba(194,198,214,0.5)] border-solid content-stretch flex flex-col h-[940px] items-center justify-center overflow-clip p-px relative rounded-[24px] shadow-[0px_8px_30px_0px_rgba(11,31,58,0.08)] shrink-0 w-[1296px]">
            <div className="flex-[1_0_0] min-h-px relative w-full"><img alt="Transport system architecture: onboard cameras, MDVR, 4G/5G router, secure cloud, control center and fleet apps" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img600f08f10d8e} /></div>
          </div>
        </div>
      </div>
    </>
  );
}
