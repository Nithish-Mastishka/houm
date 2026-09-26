import { Link } from 'react-router-dom';
import img0ebf192e64aa from '@/assets/0ebf192e64aa.png';
import img7ac80cbddb98 from '@/assets/7ac80cbddb98.svg';
import imgeb7f83734980 from '@/assets/eb7f83734980.svg';
import img506a01db0f93 from '@/assets/506a01db0f93.svg';
import img99ae971224d1 from '@/assets/99ae971224d1.svg';
import img0fc3505e0195 from '@/assets/0fc3505e0195.svg';
import img36ed9b2a1fab from '@/assets/36ed9b2a1fab.svg';
import imgcacc04f2e53a from '@/assets/cacc04f2e53a.svg';
import img9f09c64953e8 from '@/assets/9f09c64953e8.svg';
import img7ef16ef7e11c from '@/assets/7ef16ef7e11c.svg';
import img41cfc7898ea7 from '@/assets/41cfc7898ea7.svg';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#3c0008] content-stretch flex flex-col items-center pt-[48px] px-[72px] relative size-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start pr-[32px] relative shrink-0 w-[264px]">
              <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
                <Link to="/" className="content-stretch flex items-center justify-center relative shrink-0 w-[121px]">
                  <div className="h-[63px] relative shrink-0 w-[132px]">
                    <img alt="HOUM" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img0ebf192e64aa} />
                  </div>
                </Link>
                <div className="font-['Inter'] font-normal not-italic relative shrink-0 text-[#fff1f2] text-[16px] w-full">
                  <p className="leading-[24px] mb-0">See more.</p>
                  <p className="leading-[24px]">Stay connected.</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0">
                <div className="relative shrink-0 size-[40px]"><img alt="Facebook" className="absolute block inset-0 max-w-none size-full" src={img7ac80cbddb98} /></div>
                <div className="relative shrink-0 size-[40px]"><img alt="WhatsApp" className="absolute block inset-0 max-w-none size-full" src={imgeb7f83734980} /></div>
                <div className="bg-[#4e1018] overflow-clip relative rounded-[500px] shrink-0 size-[40px]">
                  <div className="absolute inset-[29.61%_27.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.844px] mask-size-[18px_18px]" style={{ maskImage: `url(${img506a01db0f93})` }}>
                    <img alt="X" className="absolute block inset-0 max-w-none size-full" src={img99ae971224d1} />
                  </div>
                </div>
                <div className="bg-[#4e1018] overflow-clip relative rounded-[500px] shrink-0 size-[40px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2">
                    <img alt="Instagram" className="absolute block inset-0 max-w-none size-full" src={img0fc3505e0195} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img36ed9b2a1fab} /></div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter'] leading-[1.5] min-w-px relative text-[16px] text-white">HOUMCANERAS@gmail.com</p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgcacc04f2e53a} /></div>
                  <p className="flex-[1_0_0] font-['Inter'] leading-[1.5] min-w-px relative text-[16px] text-white">+91 123 456 7890</p>
                </div>
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <div className="bg-[#fd022c] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[5.333px] relative rounded-[333.333px] shrink-0 size-[32px]">
                    <div className="aspect-[38.4/48] flex-[1_0_0] min-w-px relative"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img9f09c64953e8} /></div>
                  </div>
                  <div className="flex-[1_0_0] font-['Inter'] min-w-px relative text-[16px] text-white">
                    <p className="leading-[1.5] mb-0">0123 Add Your Location</p>
                    <p className="leading-[1.5]">CityName, IN 123456</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-start flex flex-[1_0_0] flex-wrap gap-0 items-start min-w-px relative text-[16px]">
              <div className="flex flex-col gap-[16px] h-[500px] items-start pb-[32px] pl-[24px] pr-[32px] relative shrink-0 w-[200px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#fff8f8] pb-[0.8px]">PRODUCTS</p>
                <Link to="/products" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Cameras</Link>
                <Link to="/products" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Smart Rings</Link>
                <Link to="/products" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Accessories</Link>
                <Link to="/products" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Smart Plugs</Link>
                <Link to="/products" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Smart Locks</Link>
              </div>
              <div className="flex flex-col gap-[16px] h-[500px] items-start pb-[32px] pl-[24px] pr-[32px] relative shrink-0 w-[200px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#fff8f8] pb-[0.8px]">MARKETING</p>
                <Link to="/mkt-advertisement" className="flex items-start justify-between w-full font-['Inter'] font-medium leading-[24px] text-white whitespace-nowrap">Channel Marketing<img alt="" className="size-[24px] rotate-180 -scale-y-100" src={img7ef16ef7e11c} /></Link>
                <Link to="/mkt-corporate-logo" className="flex items-start justify-between w-full font-['Inter'] font-medium leading-[24px] text-white whitespace-nowrap">Corporate Marketing<img alt="" className="size-[24px] rotate-180 -scale-y-100" src={img7ef16ef7e11c} /></Link>
                <Link to="/mkt-news" className="flex gap-[4px] items-start w-full font-['Inter'] font-medium leading-[24px] text-white">Other<img alt="" className="size-[24px] rotate-180 -scale-y-100" src={img7ef16ef7e11c} /></Link>
              </div>
              <div className="flex flex-col gap-[16px] h-[500px] items-start pb-[32px] pl-[24px] pr-[32px] relative shrink-0 w-[200px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#fff8f8] pb-[0.8px]">SOLUTIONS</p>
                <Link to="/sol-banking" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Banking</Link>
                <Link to="/sol-campus" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Campus</Link>
                <Link to="/sol-hospitality" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Hospitality</Link>
                <Link to="/sol-industrial" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Industrial</Link>
                <Link to="/sol-law-enforcement" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Law Enforcement</Link>
                <Link to="/sol-oil-gas" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Oil &amp; Gas</Link>
                <Link to="/sol-real-estate" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Real Estate</Link>
                <Link to="/sol-retail" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Retail</Link>
                <Link to="/sol-safe-city" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Safe City</Link>
                <Link to="/sol-smart-traffic" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Smart Traffic</Link>
                <Link to="/sol-transport" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Transport</Link>
              </div>
              <div className="flex flex-col gap-[16px] h-[500px] items-start pb-[32px] pl-[24px] pr-[32px] relative shrink-0 w-[200px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#fff8f8] pb-[0.8px] whitespace-nowrap">SUPPORT</p>
                <Link to="/support-firmware" className="flex gap-[4px] items-start w-full font-['Inter'] font-medium leading-[24px] text-white">Download<img alt="" className="size-[24px]" src={img41cfc7898ea7} /></Link>
                <Link to="/support-lens-calculator" className="flex gap-[4px] items-start w-full font-['Inter'] font-medium leading-[24px] text-white">Tools<img alt="" className="size-[24px] rotate-180 -scale-y-100" src={img7ef16ef7e11c} /></Link>
                <Link to="/support-service" className="font-['Inter'] font-medium leading-[24px] text-[#f6f4fc]">Service</Link>
                <Link to="/support-faqs" className="flex gap-[4px] items-start w-full font-['Inter'] font-medium leading-[24px] text-white">Others<img alt="" className="size-[24px] rotate-180 -scale-y-100" src={img7ef16ef7e11c} /></Link>
              </div>
              <div className="flex flex-col h-[500px] items-start pb-[32px] pl-[24px] pr-[32px] relative shrink-0 w-[200px]">
                <div className="flex flex-col gap-[16px] items-start pb-[43.6px] pr-[32px] relative shrink-0 w-[176.667px]">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#fff8f8] pb-[0.8px]">TRAINING</p>
                  <Link to="/training-webinars" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">HOUM Webinars &ndash; Online Sessions</Link>
                  <Link to="/training-programme" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">HOUM Mission Tech Training Programme</Link>
                  <Link to="/training-workshops" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">HOUM Hands-on Workshops</Link>
                  <Link to="/training-ptm" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">HOUM Partners&rsquo; Meet &amp; Training (PMT)</Link>
                </div>
                <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-[176.667px]">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#fff8f8] pb-[0.8px]">PARTNER CONNECT</p>
                  <Link to="/partner-experience-center" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Experience Center</Link>
                  <Link to="/partner-galaxy-store" className="font-['Inter'] leading-[1.5] text-[#f6f4fc] hover:text-white">Galaxy Store</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start justify-between px-[121px] py-[32px] relative shrink-0 w-full">
            <div className="flex font-normal gap-[8px] h-[32px] items-center relative shrink-0 text-[14px] text-white whitespace-nowrap">
              <p className="font-['Inter'] leading-[20px]">Terms &amp; Conditions</p>
              <p className="font-['Manrope'] leading-[24px]">|</p>
              <p className="font-['Inter'] leading-[20px]">Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
