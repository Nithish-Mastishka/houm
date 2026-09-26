import { useRef, type ReactNode } from 'react';
import img0c05663f4521 from '@/assets/0c05663f4521.svg';
import imga63e20a5deb2 from '@/assets/a63e20a5deb2.svg';
import img6cf2f3eb6a06 from '@/assets/6cf2f3eb6a06.svg';
import imgad8567b3dc29 from '@/assets/ad8567b3dc29.svg';
import img9f44d857f8d6 from '@/assets/9f44d857f8d6.svg';
import img60a5cd9c0d31 from '@/assets/60a5cd9c0d31.svg';

const FEED_BASE = 'feed group bg-[#1f1f1f] border border-[#2a2a2a] border-solid overflow-clip relative rounded-[8px]';
const CONTROL_BTN = 'backdrop-blur-[2px] bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.75)] border border-[rgba(255,255,255,0.2)] border-solid flex items-center justify-center p-px relative rounded-[2px] shrink-0 cursor-pointer';
const TIMESTAMP = '25 May 2025 | 10:24:32 PM';

/** A camera tile; its render-prop child receives a fullscreen toggle bound to this tile. */
function Feed({ className, children }: { className: string; children: (toggleFullscreen: () => void) => ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      ref.current?.requestFullscreen?.().catch(() => {});
    }
  };
  return <div ref={ref} className={`${FEED_BASE} ${className}`}>{children(toggleFullscreen)}</div>;
}

interface FeedControlsProps {
  className: string;
  large?: boolean;
  onFullscreen: () => void;
}

function FeedControls({ className, large = false, onFullscreen }: FeedControlsProps) {
  return (
    <div className={`absolute ${className} flex gap-[8px] items-start opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity z-10`}>
      <button type="button" aria-label="Take snapshot" className={`${CONTROL_BTN} ${large ? 'size-[32px]' : 'size-[28px]'}`}>
        <span className={`relative block shrink-0 ${large ? 'h-[13.5px] w-[15px]' : 'h-[12px] w-[13.333px]'}`}><img alt="" className="absolute block inset-0 max-w-none size-full" src={large ? img0c05663f4521 : imgad8567b3dc29} /></span>
      </button>
      <button type="button" aria-label="Toggle fullscreen" onClick={onFullscreen} className={`${CONTROL_BTN} ${large ? 'size-[32px]' : 'size-[28px]'}`}>
        <span className={`relative block shrink-0 ${large ? 'size-[13.5px]' : 'size-[12px]'}`}><img alt="" className="absolute block inset-0 max-w-none size-full" src={large ? imga63e20a5deb2 : img9f44d857f8d6} /></span>
      </button>
    </div>
  );
}

function SmallFeedHeader({ label }: { label: string }) {
  return (
    <div className="absolute flex items-start justify-between left-0 p-[12px] right-0 top-0">
      <div className="flex flex-col gap-[2px] items-start relative shrink-0">
        <div className="flex gap-[6px] items-center relative shrink-0 w-full">
          <div className="bg-[#ff5540] relative rounded-[12px] shrink-0 size-[6px] animate-pulse" />
          <p className="font-['Inter'] font-bold leading-[15px] text-[10px] text-white tracking-[0.5px] uppercase whitespace-nowrap">LIVE</p>
        </div>
        <p className="font-['Inter'] font-normal leading-[1.5] text-[12px] text-white whitespace-nowrap">{label}</p>
      </div>
      <p className="font-['Inter'] font-normal leading-[15px] text-[10px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">{TIMESTAMP}</p>
    </div>
  );
}

function SmallLogo({ className }: { className: string }) {
  return (
    <div className={`absolute bg-white ${className} flex items-center justify-center rounded-[6px] w-[85px]`}><div className="h-[47px] relative shrink-0 w-[67px]"><img alt="HOUM" className="absolute block inset-0 max-w-none size-full" src={img60a5cd9c0d31} /></div></div>
  );
}

interface SmallFeedSpec {
  label: string;
  feedClassName: string;
  logoClassName: string;
}

const SIDE_FEEDS: SmallFeedSpec[] = [
  { label: 'CAM 02 | Lobby', feedClassName: 'flex-[1_0_0] min-h-px w-full', logoClassName: 'left-[318px] top-[214px] h-[47px]' },
  { label: 'CAM 04 | Parking - B1', feedClassName: 'flex-[1_0_0] min-h-px w-full', logoClassName: 'right-0 top-[213.5px]' },
];

const BOTTOM_FEEDS: SmallFeedSpec[] = [
  { label: 'CAM 03 | 2nd Floor Corridor', feedClassName: 'h-full shrink-0 w-[616px]', logoClassName: 'bottom-0 right-0' },
  { label: 'CAM 05 | Perimeter - West', feedClassName: 'h-full shrink-0 w-[616px]', logoClassName: 'bottom-0 right-0' },
];

function SmallFeed({ spec }: { spec: SmallFeedSpec }) {
  return (
    <Feed className={spec.feedClassName}>
      {(toggleFullscreen) => (
        <>
          <SmallFeedHeader label={spec.label} />
          <FeedControls className="bottom-[12px] right-[12px]" onFullscreen={toggleFullscreen} />
          <SmallLogo className={spec.logoClassName} />
        </>
      )}
    </Feed>
  );
}

export default function GridSection() {
  return (
    <>
      <div className="bg-[#e5e5e5] flex flex-col items-start justify-center p-[24px] relative size-full">
        <div className="flex-[1_0_0] min-h-[800px] relative w-full">
          <div className="absolute flex flex-col gap-[16px] h-[829px] items-start left-0 top-0 w-[1248px]">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <Feed className="h-[541px] shrink-0 w-[826.667px]">
                {(toggleFullscreen) => (
                  <>
                    <div className="absolute flex items-start justify-between left-0 p-[16px] right-[-0.66px] top-0">
                      <div className="flex flex-col gap-[4px] items-start relative shrink-0">
                        <div className="flex gap-[8px] items-center relative shrink-0 w-full">
                          <div className="bg-[#ff5540] relative rounded-[12px] shrink-0 size-[8px] animate-pulse" />
                          <p className="font-['Inter'] font-medium leading-[1.2] text-[16px] text-white whitespace-nowrap">LIVE</p>
                        </div>
                        <p className="shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-['Inter'] font-normal leading-[20px] text-[14px] text-white whitespace-nowrap">CAM 01 | Main Entrance</p>
                      </div>
                      <p className="font-['Inter'] font-normal leading-[16.5px] text-[11px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">{TIMESTAMP}</p>
                    </div>
                    <FeedControls className="bottom-[16px] right-[15.34px]" large onFullscreen={toggleFullscreen} />
                    <div className="absolute bg-white bottom-0 flex items-center justify-center right-[-0.33px] rounded-[7px] w-[101px]"><div className="h-[55.847px] relative shrink-0 w-[79.612px]"><img alt="HOUM" className="absolute block inset-0 max-w-none size-full" src={img6cf2f3eb6a06} /></div></div>
                  </>
                )}
              </Feed>
              <div className="flex flex-col gap-[16px] h-[541px] items-start relative shrink-0 w-[405px]">
                {SIDE_FEEDS.map((spec) => <SmallFeed key={spec.label} spec={spec} />)}
              </div>
            </div>
            <div className="flex flex-[1_0_0] items-center justify-between min-h-px relative w-full">
              {BOTTOM_FEEDS.map((spec) => <SmallFeed key={spec.label} spec={spec} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
