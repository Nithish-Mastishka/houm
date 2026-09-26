import imga64fdbc453ac from '@/assets/a64fdbc453ac.webp';

export default function ArchitectureSection() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[48px] items-center justify-center relative size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
          <div className="[word-break:break-word] flex flex-col justify-center leading-[0] not-italic relative shrink-0 font-['Inter'] font-bold text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap text-center"><p className="leading-[20px]">Safe city architecture</p></div>
          <div className="[word-break:break-word] flex flex-col font-['Roboto'] font-semibold justify-center leading-[0] relative shrink-0 text-[#111] text-[32px] w-full text-center" style={{ fontVariationSettings: "'wdth' 100" }}><p className="leading-[1.2]">Unified, Intelligent, Future Ready</p></div>
        </div>
        <div className="border border-[rgba(194,198,214,0.5)] border-solid h-[618px] overflow-clip p-px relative rounded-[16px] shadow-[0px_8px_30px_0px_rgba(11,31,58,0.08)] shrink-0 w-[928px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]"><img alt="HOUM Safe City platform architecture" className="absolute h-full left-[0.11%] max-w-none top-[0.06%] w-[99.89%]" src={imga64fdbc453ac} /></div>
        </div>
      </div>
    </>
  );
}
