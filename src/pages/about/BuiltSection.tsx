import { Link } from 'react-router-dom';
import imgd18548e1aba8 from '@/assets/d18548e1aba8.webp';

export default function BuiltSection() {
  return (
    <>
      <div className="flex items-center justify-center relative size-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full h-full">
          <div className="flex flex-col items-end justify-center overflow-clip pb-[72px] pt-[120px] relative rounded-[24px] w-full h-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
              <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                <img alt="" className="absolute h-full left-[-1.36%] max-w-none top-[0.04%] w-[109.63%]" src={imgd18548e1aba8} />
              </div>
              <div className="absolute inset-0 rounded-[24px]" style={{ backgroundImage: "linear-gradient(89.6369429088142deg, rgba(36, 6, 9, 0.3) 0%, rgba(86, 2, 4, 0.195) 30.741%, rgba(255, 157, 157, 0.09) 51.333%)" }} />
            </div>
            <div className="flex items-center justify-center relative shrink-0 w-full">
              <div className="-scale-y-100 flex-none rotate-180 w-full">
                <div className="content-center flex flex-wrap items-center justify-end px-[68px] relative w-full">
                  <div className="flex flex-col gap-[40px] items-start pr-[112px] relative shrink-0">
                    <div className="flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[433px]">
                      <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter'] font-bold leading-[20px] text-[14px] text-white tracking-[1.4px] uppercase whitespace-nowrap">ENTERING THE FUTURE</p>
                        <h2 className="pb-[0.8px] font-['Poppins'] leading-[1.2] text-[24px] text-white w-full">From Manufacturing Excellence to Intelligent Security</h2>
                      </div>
                      <div className="font-['Inter'] font-normal text-white w-full">
                        <p className="mb-0 text-[16px]">
                          <span className="leading-[1.5]">The next chapter of Yash Group&apos;s journey takes us into the world of </span>
                          <span className="font-['Inter'] font-bold leading-[1.5]">IP and Surveillance Cameras</span>
                          <span className="leading-[1.5]">.</span>
                        </p>
                        <p className="leading-[1.5] text-[16px]">HOUM brings together the Group&apos;s experience in manufacturing, quality, scale, and trusted partnerships with a new focus on technology-driven security solutions.</p>
                      </div>
                    </div>
                    <Link to="/products" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] relative rounded-[9000px] shrink-0">
                      <span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Explore Our Products</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
