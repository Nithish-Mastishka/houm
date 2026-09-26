import imgf28d857de32a from '@/assets/f28d857de32a.webp';

export default function GroupSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-end relative size-full">
        <div className="flex gap-[48px] items-center relative shrink-0 w-full">
          <div className="flex flex-col gap-[7px] items-start relative shrink-0 w-[632px] font-['Inter'] font-normal text-[#5f6368] text-[16px]">
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">YASH GROUP TODAY</p>
              <h2 className="pb-[0.585px] font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] w-full">A Diversified Group With<br />a Strong Tomorrow</h2>
            </div>
            <p className="leading-[1.5] w-full">Yash Group commands a gross turnover of &#8377;1,000+ Crores, with an established presence across Fans &amp; Appliances, Bullion Refining, Information Technology, E-commerce, and allied businesses.</p>
            <p className="leading-[1.5] w-full">Fans &amp; Appliances is the core business of Yash Group, with extensive manufacturing capabilities across a wide range of fans and  including electric kettles, induction cooktops, mixers, infrared cooktops, air fryers, rice cookers, and many more.</p>
            <p className="leading-[1.5] w-full">Yash Group is also a trusted OEM/ODM partner for leading brands including Crompton, Bajaj, Usha, Havells, and other prominent names in the electrical and consumer appliance industry.</p>
            <p className="leading-[1.5] w-full">As part of its growth and diversification strategy, the Group is now entering the IP and Surveillance Camera market, expanding further into technology-driven products and security solutions.</p>
          </div>
          <div className="border border-[#d1d1d1] border-solid h-[414px] relative rounded-[24px] shrink-0 w-[564px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
              <img alt="Yash Group facility" className="absolute h-[125.63%] left-[-62.05%] max-w-none top-[-9.9%] w-[165.99%]" src={imgf28d857de32a} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
