import { useState } from 'react';
import { Link } from 'react-router-dom';
import img190a3481b10e from '@/assets/190a3481b10e.svg';
import imga95a9d94901b from '@/assets/a95a9d94901b.jpg';
import img9b7060e5aea0 from '@/assets/9b7060e5aea0.svg';
import imgba50eea6972d from '@/assets/ba50eea6972d.svg';
import img62ac62dfe57d from '@/assets/62ac62dfe57d.svg';
import imgcd312ece16a9 from '@/assets/cd312ece16a9.svg';
import imgbc38174a989b from '@/assets/bc38174a989b.svg';

interface WarrantyDoc {
  name: string;
  version: string;
  date: string;
  heading: string;
}

const DOCS: WarrantyDoc[] = [
  { name: 'Warranty Policy', version: 'Version 2.1 (Apr 2024)', date: 'Apr 2024', heading: 'SERVICE WARRANTY POLICY' },
  { name: 'Extended Coverage', version: 'Version 1.4 (Jan 2023)', date: 'Jan 2023', heading: 'EXTENDED COVERAGE TERMS' },
];

const PAGES = [1, 2, 3];
const BASE_ZOOM = 61;
const MIN_ZOOM = 31;
const MAX_ZOOM = 101;
const ZOOM_STEP = 10;

const DOC_CLASS =
  'wdoc cursor-pointer bg-white border border-[#e5e5e5] border-solid flex items-start justify-between p-[25px] rounded-[16px] shrink-0 text-left w-full drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:border-[#fd022c] [&.on]:border-[#fd022c] [&.on]:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]';
const THUMB_CLASS =
  'wthumb cursor-pointer aspect-[1/1.4] bg-white border border-[rgba(68,71,72,0.3)] border-solid opacity-50 relative rounded-[4px] shrink-0 w-full hover:opacity-80 [&.on]:border-2 [&.on]:border-[#c4021c] [&.on]:opacity-100';

function DocButton({ doc, on, onSelect }: { doc: WarrantyDoc; on: boolean; onSelect: () => void }) {
  return (
    <button type="button" onClick={onSelect} className={on ? `${DOC_CLASS} on` : DOC_CLASS} aria-pressed={on}>
      <span className="flex flex-col gap-[10px] items-start"><span className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[16px] whitespace-nowrap">{doc.name}</span><span className="font-['Inter'] font-normal leading-[20px] opacity-80 text-[#111] text-[14px] whitespace-nowrap">{doc.version}</span></span>
      <span className="h-[20px] relative shrink-0 w-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img190a3481b10e} /></span>
    </button>
  );
}

export default function ViewerSection() {
  const [docIndex, setDocIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(BASE_ZOOM);
  const [note, setNote] = useState(false);
  const doc = DOCS[docIndex];

  /** Switching documents goes back to page 1 (legacy houmWDoc). */
  const selectDoc = (i: number) => {
    setDocIndex(i);
    setPage(1);
  };
  const zoomBy = (delta: number) => setZoom((z) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z + delta)));

  return (
    <>
      <div className="flex items-start overflow-clip px-[72px] py-[32px] relative rounded-[24px] size-full">
        <div className="border-[rgba(68,71,72,0.2)] border-r border-solid flex flex-col h-full items-start justify-between pr-px shrink-0 w-[320px]">
          <div className="border-[rgba(68,71,72,0.1)] border-b border-solid pb-[25px] pt-[24px] px-[24px] w-full"><h2 className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">Warranty Document</h2></div>
          <div className="flex flex-1 flex-col gap-[16px] items-start min-h-px overflow-auto p-[16px] w-full">
            {DOCS.map((d, i) => (
              <DocButton key={d.name} doc={d} on={i === docIndex} onSelect={() => selectDoc(i)} />
            ))}
          </div>
          <div className="p-[16px] w-full">
            <div className="border border-[rgba(68,71,72,0.2)] border-solid flex flex-col items-center overflow-clip p-[25px] relative rounded-[8px] w-full">
              <div className="absolute bg-gradient-to-b from-[#ba0013] inset-[-0.41px_-1px_0.41px_1px] rounded-[24px] to-[#540009]" />
              <div className="absolute inset-0 mix-blend-overlay opacity-40 overflow-hidden pointer-events-none"><img alt="" className="absolute h-[130.62%] left-0 max-w-none top-0 w-[179.65%]" src={imga95a9d94901b} /></div>
              <div className="flex flex-col items-center relative w-full">
                <div className="pb-[12px]"><div className="h-[24px] relative w-[26.667px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img9b7060e5aea0} /></div></div>
                <h3 className="font-['Inter'] font-medium leading-[1.2] pb-[12px] text-[16px] text-center text-white whitespace-nowrap">Need Assistance?</h3>
                <div className="font-['Inter'] font-normal pb-[16px] text-[#f6f4fc] text-[14px] text-center whitespace-nowrap"><p className="leading-[20px] mb-0">Our security specialists are ready</p><p className="leading-[20px]">to help clarify any terms.</p></div>
                <Link to="/contact" className="border border-solid border-white flex items-center justify-center px-[24px] py-[8px] rounded-[9000px] shrink-0 hover:bg-white/10 font-['Inter'] font-medium leading-[24px] text-[16px] text-center text-white whitespace-nowrap">Contact Support</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#121413] flex flex-1 flex-col h-full items-start min-w-px relative rounded-[6px]">
          <div className="bg-[#333534] border-[rgba(68,71,72,0.2)] border-b border-solid flex h-[64px] items-center justify-between pb-px px-[24px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full font-['Inter'] font-normal leading-[21px] text-[#c4c7c7] text-[14px] whitespace-nowrap">
            <div className="flex items-center">
              <p id="w-page">Page {page} of 5</p>
              <span className="bg-[#444748] h-[16px] ml-[16px] w-px" />
              <div className="flex items-center pl-[16px]">
                <button type="button" aria-label="Zoom out" onClick={() => zoomBy(-ZOOM_STEP)} className="cursor-pointer flex items-center justify-center p-[4px] hover:opacity-70"><span className="h-[1.167px] relative w-[8.167px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgba50eea6972d} /></span></button>
                <p id="w-zoom" className="pl-[8px]">{zoom}%</p>
                <button type="button" aria-label="Zoom in" onClick={() => zoomBy(ZOOM_STEP)} className="cursor-pointer flex items-center justify-center ml-[8px] p-[4px] hover:opacity-70"><span className="relative size-[8.167px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img62ac62dfe57d} /></span></button>
              </div>
            </div>
            <div className="flex items-center">
              <button type="button" onClick={() => setNote(true)} className="cursor-pointer flex items-center hover:text-white"><span className="relative size-[9.333px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgcd312ece16a9} /></span><span className="pl-[4px]">Download</span></button>
              <button type="button" onClick={() => setNote(true)} className="cursor-pointer flex items-center ml-[16px] hover:text-white"><span className="h-[10.5px] relative w-[11.667px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgbc38174a989b} /></span><span className="pl-[4px]">Print</span></button>
              {note && <span className="ml-[12px] text-[12px] text-white">Available on the live site.</span>}
            </div>
          </div>
          <div className="flex flex-1 items-start min-h-px overflow-auto p-[24px] w-full">
            <div className="flex flex-col gap-[16px] h-full items-start shrink-0 w-[128px]">
              {PAGES.map((n) => (
                <button key={n} type="button" aria-label={`Page ${n}`} onClick={() => setPage(n)} className={n === page ? `${THUMB_CLASS} on` : THUMB_CLASS}>
                  {n === 1 && <span className="absolute bg-[#d1d5db] h-[4px] left-[8px] top-[8px] w-[16px]" />}
                </button>
              ))}
            </div>
            <div className="flex flex-1 flex-col h-full items-start justify-center min-w-px pb-[48px] pl-[24px]">
              <div id="w-canvas" className="bg-white flex flex-1 flex-col gap-[24px] items-start max-w-[768px] min-h-px overflow-hidden p-[48px] relative rounded-[2px] w-full origin-top transition-transform" style={zoom === BASE_ZOOM ? undefined : { transform: `scale(${zoom / BASE_ZOOM})` }}>
                <div className="absolute inset-0 rounded-[2px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] pointer-events-none" />
                <div className="border-[#f3f4f6] border-b-2 border-solid flex items-start justify-between pb-[34px] w-full">
                  <p className="font-['Hanken_Grotesk',Inter,sans-serif] font-bold leading-[31.2px] text-[#111827] text-[24px] tracking-[-1.2px] whitespace-nowrap">HOUM</p>
                  <div className="flex flex-col gap-[4px] items-end"><p className="font-['Inter'] font-normal leading-[15px] text-[#6b7280] text-[10px] text-right whitespace-nowrap">EFFECTIVE DATE</p><p id="w-date" className="font-['Inter'] font-medium leading-[20px] text-[14px] text-black text-right whitespace-nowrap">{doc.date}</p></div>
                </div>
                <h3 id="w-title" className="font-['Hanken_Grotesk',Inter,sans-serif] font-normal leading-[32px] pt-[8px] text-[#111827] text-[24px] uppercase w-full">{doc.heading}</h3>
                <div className="bg-[#c4021c] h-[4px] shrink-0 w-[64px]" />
                <div className="flex flex-col gap-[14.8px] items-start pt-[7px] w-full font-['Inter'] text-[14px]">
                  <p className="font-['Inter'] font-medium leading-[22.75px] text-[#111827] w-full">1. Standard Limited Warranty Overview</p>
                  <div className="font-normal text-[#374151] w-full"><p className="leading-[22.75px] mb-0">HOUM warrants that its physical hardware products will be free from material</p><p className="leading-[22.75px] mb-0">defects in materials and workmanship for a period of twenty-four (24) months</p><p className="leading-[22.75px]">from the date of original retail purchase.</p></div>
                  <p className="font-['Inter'] font-medium leading-[22.75px] pt-[32.2px] text-[#111827] w-full">2. Exclusions and Limitations</p>
                  <div className="font-normal text-[#374151] w-full"><p className="leading-[22.75px] mb-0">This warranty does not cover damage resulting from improper installation,</p><p className="leading-[22.75px] mb-0">misuse, unauthorized modification, or environmental conditions beyond the</p><p className="leading-[22.75px]">specified operating parameters detailed in the technical documentation.</p></div>
                  <div className="flex flex-col gap-[8px] items-start opacity-30 pt-[1.2px] w-full"><div className="bg-[#9ca3af] h-[8px] rounded-[4px] w-full" /><div className="bg-[#9ca3af] h-[8px] rounded-[4px] w-[445px]" /><div className="bg-[#9ca3af] h-[8px] rounded-[4px] w-[356px]" /></div>
                </div>
                <div aria-hidden="true" className="absolute flex inset-0 items-center justify-center opacity-5 pointer-events-none"><p className="-rotate-45 font-['Hanken_Grotesk',Inter,sans-serif] font-bold leading-[128px] text-[128px] text-black whitespace-nowrap">HOUM</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
