import imgffa623b1a8fc from '@/assets/ffa623b1a8fc.webp';
import imgcf4b393fffb3 from '@/assets/cf4b393fffb3.svg';
import img35c2cf88cf40 from '@/assets/35c2cf88cf40.svg';
import img3bf894116c9f from '@/assets/3bf894116c9f.svg';
import img972947397627 from '@/assets/972947397627.svg';

export default function HeroSection() {
  return (
    <>
      <section className="absolute content-stretch flex flex-col h-[574px] items-start justify-center left-0 px-[72px] py-[80px] right-0 top-0">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgffa623b1a8fc} />
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[6px] relative rounded-tr-[9999px] shrink-0">
              <div className="h-[15px] relative shrink-0 w-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgcf4b393fffb3} /></div>
              <p className="font-['Inter'] font-medium leading-[1.2] text-[14px] text-white w-[297px] whitespace-nowrap">Security You Can See. Safety You Can Trust.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <h1 className="flex flex-col font-['Roboto'] font-semibold text-[64px] w-full">
                <span className="leading-[1.2] text-white">Smart Security.</span>
                <span className="leading-[1.2] text-[#fd022c]">Real Protection.</span>
              </h1>
              <p className="font-['Manrope'] font-normal leading-[24px] text-[16px] text-white w-[411px]">Advanced security solutions designed to protect what matters most - 24/7, everywhere.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-wrap gap-[24px] h-[40px] items-start relative shrink-0 w-full">
            <div className="flex gap-[8px] items-center self-stretch">
              <div className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] size-[40px]"><img alt="" className="size-[24px]" src={img35c2cf88cf40} /></div>
              <p className="font-['Inter'] font-medium leading-[14.4px] text-[12px] text-white whitespace-nowrap">High Definition</p>
            </div>
            <div className="flex gap-[8px] items-center self-stretch">
              <div className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] size-[40px]"><img alt="" className="size-[24px]" src={img3bf894116c9f} /></div>
              <p className="font-['Inter'] font-medium leading-[14.4px] text-[12px] text-white whitespace-nowrap">Smart Detection</p>
            </div>
            <div className="flex gap-[8px] items-center self-stretch">
              <div className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] size-[40px]"><img alt="" className="size-[18px]" src={img972947397627} /></div>
              <p className="font-['Inter'] font-medium leading-[14.4px] text-[12px] text-white whitespace-nowrap">Cloud Storage</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
