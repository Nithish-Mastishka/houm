import { Link } from 'react-router-dom';
import img3ccce3c5628b from '@/assets/3ccce3c5628b.svg';

export default function HeroButtonSection() {
  return (
    <>
      <Link to="/products" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors drop-shadow-[0px_4px_8px_rgba(0,0,0,0.24)] flex items-center justify-center px-[24px] relative rounded-[100px] size-full">
        <span className="flex gap-[24px] items-center">
          <span className="overflow-clip relative rounded-[32px] shrink-0 size-[30px]">
            <span className="absolute bottom-[19.79%] left-[16.67%] right-1/4 top-[21.88%]">
              <span className="absolute inset-[-4.29%]"><img alt="" className="block max-w-none size-full" src={img3ccce3c5628b} /></span>
            </span>
          </span>
          <span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-white whitespace-nowrap">Explore Products</span>
        </span>
      </Link>
    </>
  );
}
