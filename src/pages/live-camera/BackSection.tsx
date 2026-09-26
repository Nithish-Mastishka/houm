import type { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img389e6e0bbf5e from '@/assets/389e6e0bbf5e.svg';

export default function BackSection() {
  const navigate = useNavigate();

  const handleBack = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.history.length > 1) {
      e.preventDefault();
      navigate(-1);
    }
  };

  return (
    <>
      <Link to="/" onClick={handleBack} className="group cursor-pointer flex gap-[16px] items-center px-[24px] py-[8px] relative size-full">
        <span className="pb-[2.614px] font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] group-hover:text-[#fd022c] transition-colors">Back</span>
        <span className="flex items-center justify-center relative shrink-0">
          <span className="-scale-y-100 flex-none rotate-180">
            <span className="relative block size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img389e6e0bbf5e} /></span>
          </span>
        </span>
      </Link>
    </>
  );
}
