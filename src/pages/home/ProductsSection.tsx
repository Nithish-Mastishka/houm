import { Link } from 'react-router-dom';
import img9bd7cc87c743 from '@/assets/9bd7cc87c743.jpg';
import img0cb52f6ede1e from '@/assets/0cb52f6ede1e.jpg';
import imge7e11e304f26 from '@/assets/e7e11e304f26.jpg';
import img8a2caf3240d2 from '@/assets/8a2caf3240d2.jpg';

export default function ProductsSection() {
  return (
    <>
      <div className="flex flex-col gap-[48px] items-start justify-center relative size-full">
        <div className="flex flex-col gap-[16px] items-center justify-center w-full">
          <div className="flex flex-col gap-[8px] items-center w-full">
            <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">OUR PRODUCTS</p>
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] whitespace-nowrap">Built for Every Need</h2>
          </div>
          <p className="font-['Inter'] leading-[1.5] text-[#5f6368] text-[16px] text-center whitespace-nowrap">Explore our range of advanced security products.</p>
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-center w-full">
          <div className="content-center flex flex-wrap gap-[24px] items-center justify-center w-full">
            <Link to="/products" className="group bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[305.75px]">
              <div className="bg-white h-[304px] relative rounded-[24px] w-full overflow-hidden"><img alt="Outdoor bullet camera" className="absolute max-w-none object-contain size-full transition-transform duration-300 group-hover:scale-[1.04]" src={img9bd7cc87c743} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] whitespace-nowrap pb-[8px]">Outdoor Bullet Cameras</p>
                <p className="font-['Inter'] leading-[1.5] text-[#fd022c] text-[16px] group-hover:underline">Explore</p>
              </div>
            </Link>
            <Link to="/smart-wifi-dome-cameras" className="group bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[305.75px]">
              <div className="h-[304px] relative rounded-[24px] w-full overflow-hidden"><img alt="Dome camera" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-300 group-hover:scale-[1.04]" src={img0cb52f6ede1e} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] whitespace-nowrap pb-[8px]">Dome Cameras</p>
                <p className="font-['Inter'] leading-[1.5] text-[#fd022c] text-[16px] group-hover:underline">Explore</p>
              </div>
            </Link>
            <Link to="/products" className="group bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[305.75px]">
              <div className="bg-white h-[304px] relative rounded-[24px] w-full overflow-hidden"><img alt="PTZ camera" className="absolute max-w-none object-cover size-full transition-transform duration-300 group-hover:scale-[1.04]" src={imge7e11e304f26} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] whitespace-nowrap pb-[8px]">PTZ Cameras</p>
                <p className="font-['Inter'] leading-[1.5] text-[#fd022c] text-[16px] group-hover:underline">Explore</p>
              </div>
            </Link>
            <Link to="/products" className="group bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[305.75px]">
              <div className="bg-white h-[304px] relative rounded-[24px] w-full overflow-hidden"><img alt="Dual lens camera" className="absolute h-[109.86%] left-[-9.25%] max-w-none top-[-4.44%] w-[112.33%] transition-transform duration-300 group-hover:scale-[1.04]" src={img8a2caf3240d2} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] whitespace-nowrap pb-[8px]">Dual Lens Cameras</p>
                <p className="font-['Inter'] leading-[1.5] text-[#fd022c] text-[16px] group-hover:underline">Explore</p>
              </div>
            </Link>
          </div>
          <Link to="/products" className="flex items-center px-[40px] py-[16px] rounded-[5px] hover:bg-[#fff1f2] transition-colors">
            <span className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[18px] whitespace-nowrap">View all products</span>
          </Link>
        </div>
      </div>
    </>
  );
}
