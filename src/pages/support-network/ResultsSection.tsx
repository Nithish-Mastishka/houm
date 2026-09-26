import { useState } from 'react';
import img2e337cb00973 from '@/assets/2e337cb00973.svg';
import img6bdbde91547c from '@/assets/6bdbde91547c.svg';
import img320795696cfd from '@/assets/320795696cfd.webp';
import imged60fc4f9671 from '@/assets/ed60fc4f9671.svg';
import imgea56f208304d from '@/assets/ea56f208304d.svg';
import img442869595d8d from '@/assets/442869595d8d.svg';

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

interface ResultsSectionProps {
  /** "Showing service partners near …" line. */
  near: string;
}

export default function ResultsSection({ near }: ResultsSectionProps) {
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const zoomBy = (delta: number) =>
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + delta)));

  return (
    <>
      <div className="flex gap-[24px] items-end px-[72px] relative size-full">
        <div className="flex flex-col gap-[16px] items-start overflow-auto shrink-0 w-[620px]">
          <div className="flex flex-col items-start w-full"><h2 className="font-['Poppins'] leading-[1.2] pb-[8px] text-[#111] text-[24px] w-full">Service Partners Near You</h2><p id="net-near" className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] whitespace-nowrap">{near}</p></div>
          <div className="bg-white border border-[#e5e5e5] border-solid flex flex-col gap-[8px] items-start p-[25px] rounded-[24px] shrink-0 w-full hover:border-[#fd022c] transition-colors">
        <span className="bg-[rgba(75,116,254,0.1)] px-[8px] py-[4px] rounded-[24px] font-['Inter'] font-medium leading-[1.2] text-[#0a1128] text-[12px] whitespace-nowrap">6.02 km Away</span>
        <h3 className="font-['Hanken_Grotesk',Inter,sans-serif] font-medium leading-[31.2px] pr-[16px] pt-[4px] text-[#111] text-[24px] w-full">HOUM Authorised Service Partner</h3>
        <div className="flex gap-[10px] items-start w-full"><span className="h-[13.333px] mt-[3.33px] ml-[2.67px] relative shrink-0 w-[10.667px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img2e337cb00973} /></span><div className="font-['Inter'] font-normal text-[#5f6368] text-[14px] whitespace-nowrap"><p className="leading-[20px] mb-0">C-46, Industrial Area, Okhla Phase 1, New</p><p className="leading-[20px]">Delhi, Delhi 110020</p></div></div>
        <a href="tel:8929810820" className="flex gap-[8px] items-center pt-[8px] hover:text-[#fd022c] text-[#111]"><span className="relative shrink-0 size-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img6bdbde91547c} /></span><span className="font-['Inter'] font-normal leading-[20px] text-[14px] whitespace-nowrap">8929810820</span></a>
        <a href="https://www.google.com/maps/search/?api=1&query=HOUM+Authorised+Service+Partner+C-46,+Industrial+Area,+Okhla+Phase+1,+New+Delhi,+Delhi+110020" target="_blank" rel="noreferrer" className="font-['Inter'] font-medium leading-[24px] pr-[24px] py-[8px] text-[#fd022c] text-[16px] whitespace-nowrap hover:underline">See Directions</a>
      </div>
          <div className="bg-white border border-[#e5e5e5] border-solid flex flex-col gap-[8px] items-start p-[25px] rounded-[24px] shrink-0 w-full hover:border-[#fd022c] transition-colors">
        <span className="bg-[rgba(75,116,254,0.1)] px-[8px] py-[4px] rounded-[24px] font-['Inter'] font-medium leading-[1.2] text-[#0a1128] text-[12px] whitespace-nowrap">7.20 km Away</span>
        <h3 className="font-['Hanken_Grotesk',Inter,sans-serif] font-medium leading-[31.2px] pr-[16px] pt-[4px] text-[#111] text-[24px] w-full">RANA MOTORS PVT. LTD.</h3>
        <div className="flex gap-[10px] items-start w-full"><span className="h-[13.333px] mt-[3.33px] ml-[2.67px] relative shrink-0 w-[10.667px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img2e337cb00973} /></span><div className="font-['Inter'] font-normal text-[#111] text-[14px] whitespace-nowrap"><p className="leading-[21px] mb-0">B-242, Okhla Industrial Area Phase-1, New</p><p className="leading-[21px]">Delhi 110020</p></div></div>
        <a href="tel:8929538339" className="flex gap-[8px] items-center pt-[8px] hover:text-[#fd022c] text-[#111]"><span className="relative shrink-0 size-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img6bdbde91547c} /></span><span className="font-['Inter'] font-normal leading-[20px] text-[14px] whitespace-nowrap">8929538339</span></a>
        <a href="https://www.google.com/maps/search/?api=1&query=RANA+MOTORS+PVT.+LTD.+B-242,+Okhla+Industrial+Area+Phase-1,+New+Delhi+110020" target="_blank" rel="noreferrer" className="font-['Inter'] font-medium leading-[24px] pr-[24px] py-[8px] text-[#fd022c] text-[16px] whitespace-nowrap hover:underline">See Directions</a>
      </div>
        </div>
        <div className="bg-[#1a1c1b] border border-[rgba(68,71,72,0.2)] border-solid flex flex-1 flex-col h-full items-start justify-center min-w-px overflow-clip p-px relative rounded-[8px]">
          <div className="flex-1 min-h-px overflow-hidden relative w-full"><img id="net-map" alt="Map of New Delhi showing service partner locations" className="absolute h-[125.4%] left-0 max-w-none top-[-12.7%] w-full transition-transform origin-center" src={img320795696cfd} style={zoom === MIN_ZOOM ? undefined : { transform: `scale(${zoom})` }} /></div>
          <div className="absolute flex flex-col gap-[8px] right-[16.09px] top-[16px]">
            <button type="button" aria-label="Zoom in" onClick={() => zoomBy(ZOOM_STEP)} className="bg-[#1e201f] border border-[rgba(68,71,72,0.5)] border-solid cursor-pointer flex items-center justify-center rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#333534] size-[40px]"><span className="relative size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imged60fc4f9671} /></span></button>
            <button type="button" aria-label="Zoom out" onClick={() => zoomBy(-ZOOM_STEP)} className="bg-[#1e201f] border border-[rgba(68,71,72,0.5)] border-solid cursor-pointer flex items-center justify-center rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#333534] size-[40px]"><span className="h-[2px] relative w-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgea56f208304d} /></span></button>
          </div>
          <a href="https://www.google.com/maps/@28.6139,77.209,12z/data=!3m1!1e3" target="_blank" rel="noreferrer" className="bg-[#1e201f] border border-[rgba(68,71,72,0.5)] border-solid cursor-pointer flex items-center justify-center rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#333534] absolute bottom-[16px] gap-[8px] px-[17px] py-[9px] right-[16.09px]"><span className="relative size-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img442869595d8d} /></span><span className="font-['Inter'] font-semibold leading-[12px] text-[#e2e3e1] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">SATELLITE VIEW</span></a>
          <div className="absolute bg-[#444748] h-full left-[374.46px] opacity-20 top-0 w-px pointer-events-none" />
        </div>
      </div>
    </>
  );
}
