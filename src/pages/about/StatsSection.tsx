export default function StatsSection() {
  return (
    <>
      <div className="content-start flex flex-wrap gap-0 items-start overflow-clip p-[48px] relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(103.62717413914183deg, rgb(60, 0, 8) 0.10347%, rgb(162, 0, 22) 99.471%)" }}>
        <div className="absolute bg-gradient-to-r from-[#0a0a0a] inset-0 opacity-50 to-[rgba(138,0,10,0.2)]" />
        <div className="content-center flex flex-[1_0_0] flex-wrap items-center justify-between max-w-[1280px] min-w-px relative">
          <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[410.66px]">
            <p className="font-['Inter'] font-bold leading-[20px] text-[14px] text-white tracking-[1.4px] uppercase whitespace-nowrap">OUR IMPACT</p>
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#fff8f8] text-[32px] w-full">Built on Trust.<br />Proven by Numbers.</h2>
          </div>
          <div className="content-start flex flex-wrap gap-[16px] items-start justify-center min-w-[328px] relative shrink-0 w-[764px] text-white text-center">
            <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px">
              <p className="pt-[4px] font-['Roboto'] font-semibold leading-[1.2] text-[32px] whitespace-nowrap">20+</p>
              <p className="font-['Inter'] font-normal leading-[1.5] text-[12px] whitespace-nowrap">Years of Entrepreneurial<br />Excellence</p>
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px">
              <p className="pt-[4px] font-['Roboto'] font-semibold leading-[1.2] text-[32px] w-full">&#8377;1,000 Cr+</p>
              <p className="font-['Inter'] font-normal leading-[1.5] text-[12px] whitespace-nowrap">Gross Turnover</p>
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px">
              <p className="pt-[4px] font-['Roboto'] font-semibold leading-[1.2] text-[32px] whitespace-nowrap">2</p>
              <p className="font-['Inter'] font-normal leading-[1.5] text-[12px] w-full">Manufacturing Locations</p>
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px">
              <p className="pt-[4px] font-['Roboto'] font-semibold leading-[1.2] text-[32px] whitespace-nowrap">5+</p>
              <p className="font-['Inter'] font-normal leading-[1.5] text-[12px] whitespace-nowrap">Business Verticals</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
