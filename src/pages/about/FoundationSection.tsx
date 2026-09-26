export default function FoundationSection() {
  return (
    <>
      <div className="content-start flex flex-wrap gap-y-[24px] items-start relative size-full">
        <div className="flex flex-[1_0_0] items-center justify-between min-w-px relative">
          <div className="flex flex-col gap-[32px] items-start pt-[2.5px] relative shrink-0 w-[746px]">
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">OUR FOUNDATION</p>
              <h2 className="pt-[1.5px] font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] w-full">Built on Nearly Two Decades Of Entrepreneurial Excellence.</h2>
            </div>
            <div className="flex flex-col font-['Inter'] font-normal gap-[4px] items-start not-italic relative shrink-0 text-[#5f6368] text-[16px] w-full">
              <p className="leading-[1.5]">With a legacy spanning nearly two decades, Yash Group of Companies is a diversified and professionally managed business group built on a strong foundation of quality, manufacturing excellence, innovation, and long-term relationships.</p>
              <p className="leading-[1.5]">From manufacturing to technology-driven businesses, the Group continues to build organisations designed for scale, trust, and long-term growth</p>
            </div>
          </div>
          <div className="border-[#e5e5e5] border-l border-solid flex flex-col items-start justify-center pl-[49px] pr-[64px] relative shrink-0 w-[416px]">
            <div className="flex flex-col gap-[8px] items-start pt-[8px] relative">
              <p className="font-['Inter'] font-bold leading-[20px] opacity-80 text-[#111] text-[16px] tracking-[1.4px] uppercase w-full">GROSS TURNOVER</p>
              <p className="font-['Roboto'] font-semibold leading-[1.2] text-[#fd022c] text-[64px] whitespace-nowrap">1,000 Cr+</p>
              <div className="flex flex-col gap-[4px] items-start pt-[8px] w-full font-['Inter'] font-medium text-[#3f4347] text-[18px]">
                <p className="leading-[1.2]">A legacy of trust.</p>
                <p className="leading-[1.2]">A future of possibilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
