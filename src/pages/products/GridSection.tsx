import { Link } from 'react-router-dom';
import img70cd3db65aff from '@/assets/70cd3db65aff.jpg';
import img40ad8538e6b9 from '@/assets/40ad8538e6b9.png';
import imgfb224adcf550 from '@/assets/fb224adcf550.jpg';
import img556d6fa16865 from '@/assets/556d6fa16865.jpg';
import imgbf0736c5fc12 from '@/assets/bf0736c5fc12.jpg';
import imgd3e3b172fd7b from '@/assets/d3e3b172fd7b.jpg';
import imgf390d1aa34f6 from '@/assets/f390d1aa34f6.jpg';
import img9d8666ff66d8 from '@/assets/9d8666ff66d8.jpg';
import img103ed9428f98 from '@/assets/103ed9428f98.png';
import imgd47cb13db8dc from '@/assets/d47cb13db8dc.jpg';

export default function GridSection() {
  return (
    <>
      <div className="flex flex-col gap-[48px] items-center relative size-full">
      <section className="flex flex-col gap-[16px] items-start w-full">
      <div className="flex items-end justify-between w-full min-h-[61px]">
        <div className="flex flex-col items-start py-[16px]">
          <h2 className="font-['Poppins'] font-medium leading-[1.2] text-[#111] text-[24px] whitespace-nowrap"> Camera</h2>
        </div>
        <Link to="/smart-fixed-camera" className="flex items-center px-[40px] py-[16px] rounded-[5px] shrink-0 hover:bg-[#fff1f2] transition-colors">
          <span className="font-['Inter'] font-medium leading-[24px] text-[#fd022c] text-[16px] whitespace-nowrap">View All Products</span>
        </Link>
      </div>
      <div className="flex flex-wrap gap-[24px] items-start justify-center w-full">
      <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
        <div className="h-[304px] relative rounded-[24px] w-full overflow-hidden">
            <img alt="HOUM-K261 2MP Smart Fixed Camera" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]" src={img70cd3db65aff} />
        </div>
        <div className="flex flex-col items-start p-[24px] w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">HOUM-K261</p>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] w-full">2MP Smart Fixed Camera</p>
            <div className="flex gap-[8px] items-start">
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">5m IR</span>
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Wi-Fi</span>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
        <div className="h-[304px] relative rounded-[24px] w-full overflow-hidden">
            <img alt="HOUM-G09 4MP Dual Lens Camera" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]" src={img40ad8538e6b9} />
            <img alt="HOUM-G09 4MP Dual Lens Camera" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]" src={imgfb224adcf550} />
        </div>
        <div className="flex flex-col items-start p-[24px] w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">HOUM-G09</p>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] w-full">4MP Dual Lens Camera</p>
            <div className="flex gap-[8px] items-start">
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">4 MP</span>
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Wi-Fi</span>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
        <div className="h-[304px] relative rounded-[24px] w-full overflow-hidden">
            <img alt="HOUM-P165 2MP Smart Fixed Camera" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]" src={img556d6fa16865} />
        </div>
        <div className="flex flex-col items-start p-[24px] w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">HOUM-P165</p>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] w-full">2MP Smart Fixed Camera</p>
            <div className="flex gap-[8px] items-start">
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">5m IR</span>
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Wi-Fi</span>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
        <div className="h-[304px] relative rounded-[24px] w-full overflow-hidden">
            <img alt="HOUM-K220 2MP Smart Fixed Camera" className="absolute h-[100.05%] left-[3.66%] top-[-0.05%] w-[92.68%] max-w-none transition-transform duration-300 group-hover:scale-[1.04]" src={imgbf0736c5fc12} />
        </div>
        <div className="flex flex-col items-start p-[24px] w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">HOUM-K220</p>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] w-full">2MP Smart Fixed Camera</p>
            <div className="flex gap-[8px] items-start">
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">5m IR</span>
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Wi-Fi</span>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
        <div className="h-[304px] relative rounded-[24px] w-full overflow-hidden">
            <img alt="HOUM-K218 2MP Smart Fixed Camera" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]" src={imgd3e3b172fd7b} />
        </div>
        <div className="flex flex-col items-start p-[24px] w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">HOUM-K218</p>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] w-full">2MP Smart Fixed Camera</p>
            <div className="flex gap-[8px] items-start">
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">5m IR</span>
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Wi-Fi</span>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
        <div className="h-[304px] relative rounded-[24px] w-full overflow-hidden">
            <img alt="HOUM-K221 2MP Smart Fixed Camera" className="absolute h-[90.2%] left-[5.84%] top-[9.87%] w-[88.49%] max-w-none transition-transform duration-300 group-hover:scale-[1.04]" src={imgf390d1aa34f6} />
        </div>
        <div className="flex flex-col items-start p-[24px] w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">HOUM-K221</p>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] w-full">2MP Smart Fixed Camera</p>
            <div className="flex gap-[8px] items-start">
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">5m IR</span>
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Wi-Fi</span>
            </div>
          </div>
        </div>
      </Link>
      </div>
      </section>
      <section className="flex flex-col gap-[16px] items-start w-full">
      <div className="flex items-end justify-between w-full min-h-[61px]">
        <div className="flex flex-col items-start py-[16px]">
          <h2 className="font-['Poppins'] font-medium leading-[1.2] text-[#111] text-[24px] whitespace-nowrap">Smart Plugs</h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-[24px] items-start  w-full">
      <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
        <div className="bg-white h-[304px] relative rounded-[24px] w-full overflow-hidden">
            <img alt="HOUM-T2 smart plug" className="absolute h-full left-[6.39%] top-[5.57%] w-[87.47%] max-w-none transition-transform duration-300 group-hover:scale-[1.04]" src={img9d8666ff66d8} />
        </div>
        <div className="flex flex-col items-start p-[24px] w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">HOUM-T2</p>
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="flex gap-[8px] items-start">
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Wifi+BT</span>
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">50/60 hertz</span>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
        <div className="bg-white h-[304px] relative rounded-[24px] w-full overflow-hidden">
            <img alt="HOUM-F3 smart plug" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]" src={img103ed9428f98} />
            <img alt="HOUM-F3 smart plug" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]" src={imgd47cb13db8dc} />
        </div>
        <div className="flex flex-col items-start p-[24px] w-full">
          <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">HOUM-F3</p>
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="flex gap-[8px] items-start">
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Wifi+BT</span>
              <span className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">50/60 hertz</span>
            </div>
          </div>
        </div>
      </Link>
      </div>
      </section>
      </div>
    </>
  );
}
