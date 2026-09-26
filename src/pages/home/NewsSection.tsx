import { Link } from 'react-router-dom';
import img8e0ac20e5cef from '@/assets/8e0ac20e5cef.webp';
import imga524b1cb4ab9 from '@/assets/a524b1cb4ab9.png';
import imgff3faf18e990 from '@/assets/ff3faf18e990.webp';
import imge7acb2d27ac8 from '@/assets/e7acb2d27ac8.svg';
import img96366c03a9ae from '@/assets/96366c03a9ae.webp';

export default function NewsSection() {
  return (
    <>
      <div className="bg-[#fff1f2] flex flex-col gap-[48px] items-start justify-center px-[72px] py-[80px] relative rounded-[24px] size-full">
        <div className="flex flex-col gap-[16px] items-center w-full">
          <div className="flex flex-col gap-[8px] items-center w-full">
            <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase">NEWS</p>
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] text-center whitespace-nowrap">Ideas, Stories &amp; What&apos;s Happening</h2>
          </div>
          <p className="font-['Inter'] leading-[1.5] text-[#5f6368] text-[16px] text-center w-full pb-[0.695px]">From heart care to pediatrics, discover trusted specialists and hospitals near you without the confusion.</p>
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-center w-full">
          <div className="content-center flex flex-wrap gap-[24px] items-center justify-center">
            <Link to="/mkt-news-detail" className="group bg-white border border-[rgba(227,190,186,0.3)] border-solid flex flex-col h-[440px] items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-[416px] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-shadow">
              <div className="h-[196px] relative w-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img8e0ac20e5cef} /></div>
              <div className="flex flex-col gap-[16px] items-start p-[24px] w-[414px] flex-1">
                <div className="flex gap-[16px] items-center w-full font-['Inter'] leading-[20px] text-[#b51f27] text-[14px] whitespace-nowrap"><span>SECURITY INSIGHTS</span><span className="bg-[#b51f27] rounded-[9999px] size-[4px]" /><span>AUG 18, 2026</span></div>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">How AI Is Changing Modern Video Surveillance</p>
                  <p className="font-['Inter'] leading-[1.5] text-[#3f4347] text-[16px] w-full line-clamp-2">Discover how AI-powered cameras are making surveillance smarter, faster and more proactive.</p>
                </div>
                <span className="flex gap-[8px] items-center pr-[24px] py-[8px] font-['Inter'] font-medium leading-[24px] text-[#fd022c] text-[16px] group-hover:underline">Read More</span>
              </div>
              <div className="absolute backdrop-blur-[2px] bg-[#111] left-[339.48px] rounded-[4px] top-[16px] flex items-center justify-center px-[2px]"><img alt="HOUM" className="h-[29.826px] w-[62.857px] max-w-none object-cover" src={imga524b1cb4ab9} /></div>
            </Link>
            <Link to="/mkt-news-detail" className="group bg-white border border-[rgba(227,190,186,0.3)] border-solid flex flex-col h-[440px] items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-[416px] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-shadow">
              <div className="h-[196px] relative w-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgff3faf18e990} /></div>
              <div className="flex flex-col gap-[16px] items-start p-[24px] w-[411px] flex-1">
                <div className="flex gap-[16px] items-center w-full font-['Inter'] leading-[20px] text-[#fd022c] text-[14px] whitespace-nowrap"><span>TIPS &amp; GUIDES</span><span className="bg-[#fd022c] rounded-[9999px] size-[4px]" /><span>SEP 28, 2023</span></div>
                <div className="flex flex-col items-start w-full">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">Choosing the Right Security Camera for Your Space</p>
                  <p className="font-['Inter'] leading-[1.5] text-[#5f6368] text-[16px] w-full line-clamp-2">From bullet and dome cameras to PTZ and smart cameras, understand what works best for every environment.</p>
                </div>
                <span className="flex gap-[8px] items-center pr-[24px] py-[8px] font-['Inter'] font-medium leading-[24px] text-[#fd022c] text-[16px] group-hover:underline">Read More<img alt="" className="size-[24px] rotate-180 -scale-y-100" src={imge7acb2d27ac8} /></span>
              </div>
              <div className="absolute bg-[#111] left-[339.48px] rounded-[4px] top-[16px] flex items-center justify-center p-[2px]"><img alt="HOUM" className="h-[29.826px] w-[62.857px] max-w-none object-cover" src={imga524b1cb4ab9} /></div>
            </Link>
            <Link to="/mkt-news-detail" className="group bg-white border border-[rgba(227,190,186,0.3)] border-solid flex flex-col h-[440px] items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-[416px] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-shadow">
              <div className="h-[196px] relative w-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img96366c03a9ae} /></div>
              <div className="flex flex-col gap-[16px] items-start p-[24px] w-[414px] h-[240px]">
                <div className="flex gap-[16px] items-center w-full font-['Inter'] leading-[20px] text-[#b51f27] text-[14px] whitespace-nowrap"><span>CUSTOMER STORIES</span><span className="bg-[#b51f27] rounded-[9999px] size-[4px]" /><span>SEP 15, 2023</span></div>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">Beyond Surveillance: Building Smarter, Safer Spaces</p>
                  <p className="font-['Inter'] leading-[1.5] text-[#3f4347] text-[16px] w-full line-clamp-2">See how integrated security solutions bring cameras, access control and monitoring together.</p>
                </div>
                <span className="flex gap-[8px] items-center pr-[24px] py-[8px] font-['Inter'] font-medium leading-[24px] text-[#fd022c] text-[16px] group-hover:underline">Read More</span>
              </div>
              <div className="absolute bg-[#111] left-[339.48px] rounded-[4px] top-[16px] flex items-center justify-center p-[2px]"><img alt="HOUM" className="h-[29.826px] w-[62.857px] max-w-none object-cover" src={imga524b1cb4ab9} /></div>
            </Link>
          </div>
          <Link to="/mkt-news" className="flex items-center px-[40px] py-[16px] rounded-[5px] hover:bg-white transition-colors">
            <span className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[18px] whitespace-nowrap">View all News</span>
          </Link>
        </div>
      </div>
    </>
  );
}
