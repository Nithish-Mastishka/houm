import { Link } from 'react-router-dom';
import imgd60e3b1ce6ec from '@/assets/d60e3b1ce6ec.svg';
import imgb3c1ed9a9cb9 from '@/assets/b3c1ed9a9cb9.svg';
import imgdec6e4b6cddb from '@/assets/dec6e4b6cddb.svg';
import imgc43611baec94 from '@/assets/c43611baec94.svg';
import imgc6556501a196 from '@/assets/c6556501a196.svg';
import img38a1f314b15d from '@/assets/38a1f314b15d.svg';
import img648b5cceb713 from '@/assets/648b5cceb713.svg';
import imgf7df915862bd from '@/assets/f7df915862bd.svg';

export default function OfferSection() {
  return (
    <>
      <div className="flex flex-col gap-[48px] items-start relative size-full">
        <div className="flex flex-col gap-[6px] items-center w-full">
          <div className="flex flex-col gap-[8px] items-center w-full">
            <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">What WE OFFER</p>
            <h2 className="font-['Roboto'] font-semibold text-[#111] text-[32px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}><span className="block leading-[1.2]">Everything you need.</span><span className="block leading-[1.2]">One support system.</span></h2>
          </div>
          <div className="font-['Inter'] font-normal pb-[0.595px] pt-[7.495px] text-[#5f6368] text-[16px] text-center whitespace-nowrap"><p className="leading-[1.5] mb-0">Whether you need help setting up your system, resolving an issue, checking</p><p className="leading-[1.5] mb-0">warranty coverage or finding a service centre, HOUM brings it all together in</p><p className="leading-[1.5]">one place.</p></div>
        </div>
        <div className="flex gap-[24px] items-stretch px-[72px] w-full">
          <Link to="/contact" className="group bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col items-start justify-between min-w-px p-[33px] relative rounded-[24px] self-stretch hover:border-[#fd022c] transition-colors">
        <div className="absolute h-[88.882px] left-[202px] top-[-1.09px] w-[103.14px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgd60e3b1ce6ec} /></div>
        <div className="flex flex-col gap-[16px] items-start pb-[24px] relative w-full"><div className="flex items-start px-[6px] py-[8px] relative shrink-0 size-[48px]"><div className="flex flex-1 items-start min-w-px overflow-clip p-[2px] relative aspect-square"><div className="aspect-square flex-1 min-w-px relative"><div className="absolute inset-[-6.25%]"><img alt="" className="block max-w-none size-full" src={imgb3c1ed9a9cb9} /></div></div></div></div><h3 className="font-['Inter'] font-medium leading-[1.2] pt-[7px] text-[#111] text-[18px] w-full">Product Assistance</h3><div className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><p className="leading-[1.5] mb-0">Questions about your HOUM system? Get</p><p className="leading-[1.5]">help with products, features, configuration.</p></div></div>
        <span className="font-['Inter'] font-medium leading-[24px] pr-[24px] py-[8px] text-[#fd022c] text-[16px] whitespace-nowrap group-hover:underline">Take to an Expert</span>
      </Link>
          <Link to="/training-feedback" className="group bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col items-start justify-between min-w-px p-[33px] relative rounded-[24px] self-stretch hover:border-[#fd022c] transition-colors">
        <div className="absolute h-[88.488px] right-[-1.14px] top-[-1.09px] w-[103.137px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgdec6e4b6cddb} /></div>
        <div className="flex flex-col gap-[16px] items-start pb-[24px] relative w-full"><div className="relative shrink-0 size-[48px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgc43611baec94} /></div><h3 className="font-['Inter'] font-medium leading-[1.2] pt-[7px] text-[#111] text-[18px] w-full">Feedback</h3><div className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><p className="leading-[1.5] mb-0">Your experience matters to us.</p><p className="leading-[1.5]">Tell us how your HOUM experience has been. Your feedback helps us improve our products, service, and support.</p></div></div>
        <span className="font-['Inter'] font-medium leading-[24px] pr-[24px] py-[8px] text-[#fd022c] text-[16px] whitespace-nowrap group-hover:underline">Share Your Feedback</span>
      </Link>
          <Link to="/support-warranty" className="group bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col items-start justify-between min-w-px p-[33px] relative rounded-[24px] self-stretch hover:border-[#fd022c] transition-colors">
        <div className="absolute h-[88.488px] right-0 top-0 w-[103.664px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgc6556501a196} /></div>
        <div className="flex flex-col gap-[16px] items-start pb-[24px] relative w-full"><div className="relative shrink-0 size-[48px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img38a1f314b15d} /></div><h3 className="font-['Inter'] font-medium leading-[1.2] pt-[7px] text-[#111] text-[18px] w-full">Warranty &amp; AMC</h3><div className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><p className="leading-[1.5] mb-0">Protection beyond the purchase. Check</p><p className="leading-[1.5] mb-0">warranty coverage and explore service</p><p className="leading-[1.5]">plans.</p></div></div>
        <span className="font-['Inter'] font-medium leading-[24px] pr-[24px] py-[8px] text-[#fd022c] text-[16px] whitespace-nowrap group-hover:underline">Explore Coverage</span>
      </Link>
          <Link to="/support-network" className="group bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col items-start justify-between min-w-px p-[33px] relative rounded-[24px] self-stretch hover:border-[#fd022c] transition-colors">
        <div className="absolute h-[88.488px] right-0 top-0 w-[104.602px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img648b5cceb713} /></div>
        <div className="flex flex-col gap-[16px] items-start pb-[24px] relative w-full"><div className="relative shrink-0 size-[48px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgf7df915862bd} /></div><h3 className="font-['Inter'] font-medium leading-[1.2] pt-[7px] text-[#111] text-[18px] w-full">Service Network</h3><div className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><p className="leading-[1.5] mb-0">HOUM support, wherever you are. Find</p><p className="leading-[1.5]">your nearest authorised service centre.</p></div></div>
        <span className="font-['Inter'] font-medium leading-[24px] pr-[24px] py-[8px] text-[#fd022c] text-[16px] whitespace-nowrap group-hover:underline">Find a Centre</span>
      </Link>
        </div>
      </div>
    </>
  );
}
