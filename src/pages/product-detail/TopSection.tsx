import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imga3c45c5ffd2e from '@/assets/a3c45c5ffd2e.svg';
import img1a8ca68a11a9 from '@/assets/1a8ca68a11a9.svg';
import imgfe8e367c83ae from '@/assets/fe8e367c83ae.svg';
import img81b6649e99bf from '@/assets/81b6649e99bf.svg';
import img01b26f7c6c7e from '@/assets/01b26f7c6c7e.svg';
import img4ee815bd14b5 from '@/assets/4ee815bd14b5.svg';
import imgd01a678e82dc from '@/assets/d01a678e82dc.svg';
import imgd4c38ff5d537 from '@/assets/d4c38ff5d537.svg';
import img70ecfd2c79e7 from '@/assets/70ecfd2c79e7.svg';
import imgbc469031c422 from '@/assets/bc469031c422.jpg';
import imga9a9a4fd5ebe from '@/assets/a9a9a4fd5ebe.webp';
import img4e23da1ea5aa from '@/assets/4e23da1ea5aa.webp';
import imgfe6c47a85e93 from '@/assets/fe6c47a85e93.webp';
import img52f08004ec11 from '@/assets/52f08004ec11.webp';
import img38cb8d277ba8 from '@/assets/38cb8d277ba8.svg';

interface GalleryThumb {
  src: string;
  imgClassName: string;
}

const THUMB_IMG = 'absolute inset-0 max-w-none object-contain pointer-events-none rounded-[12px] size-full';
const THUMBS: GalleryThumb[] = [
  { src: imga9a9a4fd5ebe, imgClassName: THUMB_IMG },
  { src: img4e23da1ea5aa, imgClassName: THUMB_IMG },
  { src: imgfe6c47a85e93, imgClassName: THUMB_IMG },
  { src: img52f08004ec11, imgClassName: 'absolute h-[92.79%] left-[19.67%] max-w-none top-[3.93%] w-[61.86%] pointer-events-none' },
];
const INITIAL_ACTIVE_THUMB = 3;
const COPIED_NOTE_MS = 1800;

export default function TopSection() {
  const [mainSrc, setMainSrc] = useState(imgbc469031c422);
  const [fromThumb, setFromThumb] = useState(false);
  const [activeThumb, setActiveThumb] = useState(INITIAL_ACTIVE_THUMB);
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(copiedTimer.current), []);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    setCopied(true);
    window.clearTimeout(copiedTimer.current);
    copiedTimer.current = window.setTimeout(() => setCopied(false), COPIED_NOTE_MS);
  };

  const selectThumb = (index: number) => {
    setMainSrc(THUMBS[index].src);
    setFromThumb(true);
    setActiveThumb(index);
  };

  return (
    <>
      <div className="flex flex-wrap gap-[24px] items-start relative size-full">
        <div className="flex flex-col gap-[48px] items-start shrink-0 w-[746px]">
          <div className="flex flex-col gap-[48px] items-start w-full">
            <div className="flex flex-col gap-[32px] items-start w-full">
              <div className="flex flex-col gap-[12px] items-start w-full">
                <div className="flex gap-[16px] items-center pr-[24px] w-full">
                  <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px">
                    <p className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[14px] w-full">4G Outdoor Camera</p>
                    <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] w-full">HOUM-P168</h1>
                  </div>
                  <div className="relative shrink-0">
                    <button type="button" aria-label="Share" onClick={handleShare} className="block cursor-pointer relative size-[40px] hover:scale-110 transition-transform">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imga3c45c5ffd2e} />
                    </button>
                    <span role="status" className={`${copied ? '' : 'hidden '}absolute right-0 top-[44px] bg-[#111] text-white text-[12px] font-['Inter'] px-[8px] py-[4px] rounded-[4px] whitespace-nowrap`}>Link copied</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] items-start w-full">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">Smart 4G Outdoor Camera</p>
                  <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] w-full">Wide-area coverage. Remote monitoring. Smarter outdoor security.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-[24px_16px] items-start w-full">
                <div className="flex gap-[12px] h-[40px] items-center shrink-0 w-[188.433px]">
                  <div className="bg-[#fff1f2] flex items-center justify-center rounded-[8px] shrink-0 size-[40px]"><div className="relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img1a8ca68a11a9} /></div></div>
                  <div className="flex flex-col items-start">
                    <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">2 MP</p>
                    <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[12px] whitespace-nowrap">Full HD Resolution</p>
                  </div>
                </div>
                <div className="flex gap-[12px] h-[40px] items-center shrink-0 w-[188.433px]">
                  <div className="bg-[#fff1f2] flex items-center justify-center rounded-[8px] shrink-0 size-[40px]"><div className="overflow-clip relative size-[32px]"><div className="absolute inset-[8.54%_20.83%_8.33%_20.83%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgfe8e367c83ae} /></div></div></div>
                  <div className="flex flex-col items-start">
                    <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">4G LTE</p>
                    <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[12px] whitespace-nowrap">Remote Connectivity</p>
                  </div>
                </div>
                <div className="flex gap-[12px] h-[40px] items-center shrink-0 w-[188.433px]">
                  <div className="bg-[#fff1f2] flex items-center justify-center rounded-[8px] shrink-0 size-[40px]"><div className="h-[15.938px] relative w-[15.918px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img81b6649e99bf} /></div></div>
                  <div className="flex flex-col items-start">
                    <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">Smart Night Vision</p>
                    <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[12px] whitespace-nowrap">Colorful Night Vision</p>
                  </div>
                </div>
                <div className="flex gap-[12px] h-[40px] items-center shrink-0 w-[188.433px]">
                  <div className="bg-[#fff1f2] flex items-center justify-center rounded-[8px] shrink-0 size-[40px]"><div className="overflow-clip relative size-[24px]"><div className="absolute inset-[16.67%_12.5%]"><div className="absolute inset-[-4.69%_-4.17%_-4.69%_-4.18%]"><img alt="" className="block max-w-none size-full" src={img01b26f7c6c7e} /></div></div></div></div>
                  <div className="flex flex-col items-start">
                    <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">355&deg; / 90&deg;</p>
                    <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[12px] w-[121px]">Pan / Tilt Coverage</p>
                  </div>
                </div>
                <div className="flex gap-[12px] h-[40px] items-center shrink-0 w-[188.433px]">
                  <div className="bg-[#fff1f2] flex items-center justify-center rounded-[8px] shrink-0 size-[40px]"><div className="relative size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img4ee815bd14b5} /></div></div>
                  <div className="flex flex-col items-start">
                    <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">Moving Tracking</p>
                    <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[12px] w-[116px]">Smart Tracking</p>
                  </div>
                </div>
                <div className="flex gap-[12px] h-[40px] items-center shrink-0 w-[188.433px]">
                  <div className="bg-[#fff1f2] flex items-center justify-center rounded-[8px] shrink-0 size-[40px]"><div className="relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgd01a678e82dc} /></div></div>
                  <div className="flex flex-col items-start">
                    <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">256 GB</p>
                    <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[12px] whitespace-nowrap">TF Card Storage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-[25px] items-center w-[750px]">
              <Link to="/support-software-datasheet" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors flex gap-[8px] h-[56px] items-center justify-center px-[40px] py-[16px] rounded-[9000px] shrink-0">
                <span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-white whitespace-nowrap">Download Datasheet</span>
                <span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgd4c38ff5d537} /></span>
              </Link>
              <Link to="/support-user-manual" className="bg-white hover:bg-[#fff1f2] transition-colors border border-[#fd022c] border-solid flex gap-[8px] h-[56px] items-center justify-center px-[40px] py-[16px] rounded-[9000px] shrink-0">
                <span className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[18px] whitespace-nowrap">User Manual</span>
                <span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img70ecfd2c79e7} /></span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-start pb-[24px] w-full">
            <h2 className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] whitespace-nowrap">Key Features</h2>
            <div className="flex flex-col gap-[24px] items-start text-[14px] w-full">
              <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] w-full">Built for flexible outdoor surveillance, HOUM-P168 combines 4G connectivity, wide-area movement and intelligent monitoring in one camera.</p>
              <div className="flex flex-col gap-[16px] items-start w-full">
                <div className="flex flex-col gap-[8px] items-start">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] w-full">2 MP Full HD</p>
                  <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] w-full">Capture clear 1920 &times; 1080P video for reliable day-to-day outdoor monitoring.</p>
                </div>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] w-full">355&deg; Pan &amp; 90&deg; Tilt</p>
                  <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] w-full">Cover a wide surveillance area with 355&deg; horizontal rotation and 90&deg; vertical movement.</p>
                </div>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] w-full">4G Remote Connectivity</p>
                  <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] w-full">Stay connected to remote locations with 4G connectivity and mobile remote viewing/control.</p>
                </div>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] w-full">Smart Tracking &amp; Night Vision</p>
                  <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] w-full">Monitor activity with motion detection and moving tracking, supported by smart/colorful night vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[48px] items-center min-w-[450px] overflow-clip rounded-[32px] shrink-0 w-[522px]">
          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="h-[516.4px] relative rounded-[24px] w-full">
              <div className="absolute bg-[#fefafa] inset-0 rounded-[24px]" />
              <img id="pd-main" alt="HOUM-P168 4G outdoor camera" className={`absolute inset-0 max-w-none ${fromThumb ? 'object-contain' : 'object-cover'} rounded-[24px] size-full`} src={mainSrc} />
            </div>
            <div className="pd-thumbs flex gap-[16px] items-center py-[8px] w-full">
              {THUMBS.map((thumb, i) => (
                <button
                  key={thumb.src}
                  type="button"
                  aria-label={`View image ${i + 1}`}
                  aria-pressed={i === activeThumb}
                  onClick={() => selectThumb(i)}
                  className={`th aspect-square border-2 ${i === activeThumb ? 'border-[#fd022c]' : 'border-transparent'} border-solid cursor-pointer flex-1 min-w-px relative rounded-[12px] overflow-hidden`}
                >
                  <img alt="" className={thumb.imgClassName} src={thumb.src} />
                </button>
              ))}
              <Link to="/support-technical-videos" className="flex flex-1 flex-col h-[86.04px] justify-end min-w-px">
                <span className="border border-[#e5e5e5] border-solid flex flex-1 gap-[13.58px] items-center justify-center pb-[4.5px] pl-px pr-[10.59px] pt-[3.5px] rounded-[8px] w-full hover:border-[#fd022c] transition-colors">
                  <span className="relative shrink-0 size-[14.625px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img38cb8d277ba8} /></span>
                  <span className="font-['Manrope'] font-semibold leading-[16px] text-[#2d2d2d] text-[12px] text-center">Watch<br />Video</span>
                </span>
              </Link>
            </div>
          </div>
          <button type="button" onClick={() => window.open(mainSrc, '_blank', 'noreferrer')} className="bg-white hover:bg-[#fff1f2] transition-colors border border-[#fd022c] border-solid cursor-pointer flex gap-[8px] h-[54px] items-center justify-center px-[40px] py-[16px] rounded-[9000px] shrink-0">
            <span className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[18px] whitespace-nowrap">Click to see full image </span>
          </button>
        </div>
      </div>
    </>
  );
}
