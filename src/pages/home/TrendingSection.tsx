import { Link } from 'react-router-dom';
import imge59adc95c7ea from '@/assets/e59adc95c7ea.webp';
import img2ece9f16e2ba from '@/assets/2ece9f16e2ba.jpg';
import img8f5fbc1bb1db from '@/assets/8f5fbc1bb1db.jpg';
import img601ab45961e2 from '@/assets/601ab45961e2.webp';
import img3abc69b25f9d from '@/assets/3abc69b25f9d.jpg';
import imgf6c78af1c3df from '@/assets/f6c78af1c3df.jpg';

export default function TrendingSection() {
  return (
    <>
      <div className="flex flex-col gap-[48px] items-start justify-center px-[72px] py-[80px] relative size-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imge59adc95c7ea} />
        <div className="flex flex-col gap-[8px] items-center relative w-[1296px]">
          <p className="font-['Inter'] font-bold leading-[20px] text-[14px] text-white tracking-[1.4px] uppercase whitespace-nowrap">WHAT&rsquo;S IN DEMAND</p>
          <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[32px] text-center text-white">Popular. Reliable. In Demand.</h2>
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-center relative w-full">
          <div className="content-center flex flex-wrap gap-[24px] items-center justify-center w-full">
            <Link to="/smart-fixed-camera" className="group bg-white border border-[#fff1f2] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col h-[368px] items-start p-px relative rounded-[24px] shrink-0 w-[240px] transition-transform hover:-translate-y-1">
              <div className="bg-white h-[272px] relative rounded-[24px] w-full overflow-hidden"><img alt="Smart fixed camera HOUM-K261" className="absolute h-[115.16%] left-[-7.85%] max-w-none top-[-4.23%] w-[124.31%]" src={img2ece9f16e2ba} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">Smart Fixed Camera</p>
                <p className="font-['Inter'] leading-[1.5] text-[#3f4347] text-[16px] h-[24px]">HOUM-K261</p>
              </div>
            </Link>
            <Link to="/products" className="group bg-white border border-[#fff1f2] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col h-[370px] items-start p-px relative rounded-[24px] shrink-0 w-[240px] transition-transform hover:-translate-y-1">
              <div className="bg-white h-[272px] relative rounded-[24px] w-full overflow-hidden"><img alt="Dual lens camera HOUM-P165" className="absolute h-[108.68%] left-[-17.04%] max-w-none top-[-4.23%] w-[134.06%]" src={img8f5fbc1bb1db} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">Dual Lens Camera</p>
                <p className="font-['Inter'] leading-[1.5] text-[#3f4347] text-[16px] h-[24px]">HOUM-P165</p>
              </div>
            </Link>
            <Link to="/products" className="group bg-white border border-[#fff1f2] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col h-[370px] items-start p-px relative rounded-[24px] shrink-0 w-[240px] transition-transform hover:-translate-y-1">
              <div className="bg-white h-[272px] relative rounded-[24px] w-full overflow-hidden"><img alt="Smart bulb camera HOUM-K218" className="absolute h-[89.63%] left-[6.97%] max-w-none top-[5.18%] w-[86.45%]" src={img601ab45961e2} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full whitespace-pre">Smart  Bulb Camera</p>
                <p className="font-['Inter'] leading-[1.5] text-[#3f4347] text-[16px] h-[24px]">HOUM-K218</p>
              </div>
            </Link>
            <Link to="/smart-fixed-camera" className="group bg-white border border-[#fff1f2] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col h-[370px] items-start p-px relative rounded-[24px] shrink-0 w-[240px] transition-transform hover:-translate-y-1">
              <div className="bg-white h-[272px] relative rounded-[24px] w-full overflow-hidden"><img alt="Smart fixed camera HOUM-K220" className="absolute max-w-none object-contain size-full" src={img3abc69b25f9d} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">Smart Fixed Camera</p>
                <p className="font-['Inter'] leading-[1.5] text-[#3f4347] text-[16px] h-[24px]">HOUM-K220</p>
              </div>
            </Link>
            <Link to="/smart-fixed-camera" className="group bg-white border border-[#fff1f2] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col h-[370px] items-start p-px relative rounded-[24px] shrink-0 w-[240px] transition-transform hover:-translate-y-1">
              <div className="bg-white h-[272px] relative rounded-[24px] w-full overflow-hidden"><img alt="Smart fixed camera HOUM-K261" className="absolute max-w-none object-cover size-full" src={imgf6c78af1c3df} /></div>
              <div className="bg-[#fff8f8] rounded-bl-[24px] rounded-br-[24px] w-full flex flex-col items-start p-[24px]">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">Smart Fixed Camera</p>
                <p className="font-['Inter'] leading-[1.5] text-[#3f4347] text-[16px] h-[24px]">HOUM-K261</p>
              </div>
            </Link>
          </div>
          <Link to="/products" className="bg-white border border-[#fd022c] border-solid flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] hover:bg-[#fff1f2] transition-colors">
            <span className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[18px] whitespace-nowrap">View all products</span>
          </Link>
        </div>
      </div>
    </>
  );
}
