import img61988061ed52 from '@/assets/61988061ed52.webp';
import imgf08e87c4553a from '@/assets/f08e87c4553a.svg';
import img6e1b615a1900 from '@/assets/6e1b615a1900.webp';
import img19d4c6f7fd79 from '@/assets/19d4c6f7fd79.svg';
import img9523eeb18207 from '@/assets/9523eeb18207.webp';
import imgdabb2f346baf from '@/assets/dabb2f346baf.svg';

export default function ModesSection() {
  return (
    <>
      <div className="bg-[#f6f4fc] content-stretch flex flex-col items-center p-[72px] relative size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"><div className="content-stretch flex flex-col items-start relative shrink-0 w-[612px]"><div className="[word-break:break-word] flex flex-col font-['Roboto'] font-semibold justify-center leading-[0] relative shrink-0 text-[#111] text-[32px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}><h2 className="leading-[1.2]">Built For Every Mode of Transport</h2></div></div></div>
          <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] h-[320px] min-w-px overflow-clip relative rounded-[24px]">
              <div className="absolute inset-[0_-0.33px_0_0]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="Taxi sign at night" className="absolute h-full left-[-25.42%] max-w-none top-0 w-[150.83%]" src={img61988061ed52} /></div></div>
              <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(0,0,0,0.8)] inset-[0_-0.33px_0_0] items-start justify-end p-[24px] to-[rgba(0,0,0,0)]">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"><div className="relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgf08e87c4553a} /></div></div>
                  <div className="[word-break:break-word] flex flex-col font-['Poppins'] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap"><h3 className="leading-[1.2]">Public Taxi</h3></div>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] h-[320px] min-w-px overflow-clip relative rounded-[24px]">
              <div className="absolute inset-[0_-0.33px_0_0]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="City bus" className="absolute h-full left-[-25.42%] max-w-none top-0 w-[150.83%]" src={img6e1b615a1900} /></div></div>
              <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-black inset-[0_-0.33px_0_0] items-start justify-end p-[24px] to-[rgba(0,0,0,0)]">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"><div className="h-[19px] relative shrink-0 w-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img19d4c6f7fd79} /></div></div>
                  <div className="[word-break:break-word] flex flex-col font-['Poppins'] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap"><h3 className="leading-[1.2]">School &amp; City Buses</h3></div>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] h-[320px] min-w-px overflow-clip relative rounded-[24px]">
              <div className="absolute inset-[0_-0.34px_0_0]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="High-speed train" className="absolute h-full left-[-25.41%] max-w-none top-0 w-[150.83%]" src={img9523eeb18207} /></div></div>
              <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(0,0,0,0.8)] inset-[0_-0.34px_0_0] items-start justify-end p-[24px] to-[rgba(0,0,0,0)]">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"><div className="h-[19px] relative shrink-0 w-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgdabb2f346baf} /></div></div>
                  <div className="[word-break:break-word] flex flex-col font-['Poppins'] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap"><h3 className="leading-[1.2]">Trains / Metros</h3></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
