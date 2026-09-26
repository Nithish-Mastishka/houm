import imga67ec90693a5 from '@/assets/a67ec90693a5.webp';
import imgaae635a2119f from '@/assets/aae635a2119f.svg';
import imgb375ce5cef25 from '@/assets/b375ce5cef25.svg';

export default function WhySection() {
  return (
    <>
      <div className="content-stretch flex flex-col items-center relative size-full">
        <div className="bg-[#fff1f2] content-start flex flex-wrap items-start justify-center overflow-clip p-[72px] relative rounded-tr-[24px] shrink-0 w-[1440px]">
          <div className="content-center flex flex-[1_0_0] flex-wrap gap-[48px] items-center justify-center max-w-[1440px] min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[366px] items-start min-w-[450px] relative rounded-[24px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full">
                <div className="flex-[1_0_0] min-h-px relative rounded-[24px] w-full"><img alt="HOUM camera analysing highway traffic with AI detection overlay" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imga67ec90693a5} /></div>
                <div className="absolute border-4 border-[rgba(0,82,209,0.3)] border-solid inset-0 rounded-[20px]" />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-[450px] relative">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[612px]">
                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fd022c] text-[14px] tracking-[1.4px] uppercase w-[134px]"><p className="leading-[20px]">WHY HOUM</p></div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto'] font-semibold justify-center leading-[0] relative shrink-0 text-[#111] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}><h2 className="leading-[1.2]">Transform Video Streams into<br />Actionable Intelligence</h2></div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f6368] text-[16px] w-full"><p className="leading-[1.5]">Traditional traffic systems are reactive. HOUM uses advanced<br />edge computing and deep learning to instantly analyze video<br />feeds, identify patterns, and trigger automated responses before<br />congestion or safety incidents escalate.</p></div>
              </div>
              <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full">
                <div className="bg-white border border-[#e5e5e5] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[179.333px] items-start min-w-px p-[25px] relative rounded-[16px]">
                  <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"><div className="h-[23.333px] relative shrink-0 w-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgaae635a2119f} /></div></div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[18px] w-full"><h3 className="leading-[1.2]">Real-time Processing</h3></div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f6368] text-[16px] w-full"><p className="leading-[1.5]">Sub-second latency for<br />immediate incident detection<br />and response.</p></div>
                </div>
                <div className="bg-white border border-[#e5e5e5] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[179.333px] items-start min-w-px p-[25px] relative rounded-[16px]">
                  <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full"><div className="h-[18.667px] relative shrink-0 w-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgb375ce5cef25} /></div></div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[18px] w-full"><h3 className="leading-[1.2]">Edge + Cloud</h3></div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f6368] text-[16px] w-full"><p className="leading-[1.5]">Optimized architecture that<br />minimizes bandwidth while<br />maximizing analytics capability.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
