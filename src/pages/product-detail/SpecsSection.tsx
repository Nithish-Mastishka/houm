import { useState } from 'react';
import img3a2e2a0d3554 from '@/assets/3a2e2a0d3554.svg';
import img7ca8c0798fed from '@/assets/7ca8c0798fed.svg';
import img7b7e96943474 from '@/assets/7b7e96943474.svg';
import img9f201a3f972a from '@/assets/9f201a3f972a.svg';
import img0fc7de1bac4b from '@/assets/0fc7de1bac4b.svg';
import img8c1778bbec91 from '@/assets/8c1778bbec91.svg';
import imga06a408b7b19 from '@/assets/a06a408b7b19.svg';
import imgcf569de60723 from '@/assets/cf569de60723.svg';
import img16c09726a30e from '@/assets/16c09726a30e.svg';

interface SpecTab {
  label: string;
  icon: string;
  iconClassName: string;
}

interface SpecRow {
  name: string;
  detail: string;
}

interface SpecPanel {
  className: string;
  tabs: SpecTab[];
  rows: SpecRow[];
}

const PANELS: SpecPanel[] = [
  {
    className: 'flex gap-[16px] items-start p-[8px] rounded-[10px] w-[636px]',
    tabs: [
      { label: 'Image Performance', icon: img7b7e96943474, iconClassName: 'relative h-[15px] w-[16.25px]' },
      { label: 'Lens & Illumination', icon: img9f201a3f972a, iconClassName: 'relative size-[24px]' },
      { label: 'Video & Audio', icon: img0fc7de1bac4b, iconClassName: 'relative h-[16.25px] w-[18.125px]' },
      { label: 'Smart Features', icon: img8c1778bbec91, iconClassName: 'relative h-[15.625px] w-[18.75px]' },
    ],
    rows: [
      { name: 'Camera Type', detail: '4G Outdoor Camera' },
      { name: 'Resolution', detail: '2MP \u2014 1920 \u00d7 1080P' },
      { name: 'Image Quality', detail: 'Full HD' },
      { name: 'Day / Night', detail: 'Smart Light / Colorful Night Vision' },
      { name: 'Motion Detection', detail: 'Supported' },
      { name: 'Moving Tracking', detail: 'Supported' },
    ],
  },
  {
    className: 'flex gap-[16px] items-start p-[8px] rounded-[10px] w-[636px] self-stretch',
    tabs: [
      { label: 'Network & Storage', icon: imga06a408b7b19, iconClassName: 'relative h-[13.75px] w-[15px]' },
      { label: 'General', icon: imgcf569de60723, iconClassName: 'relative size-[16.367px]' },
      { label: '4G', icon: img16c09726a30e, iconClassName: 'relative h-[12.728px] w-[18px]' },
    ],
    rows: [
      { name: '4G Connectivity', detail: 'Yes' },
      { name: 'Wi-Fi', detail: 'Supported' },
      { name: 'Bluetooth Pairing', detail: 'Supported' },
      { name: 'QR Code Setup', detail: 'Supported' },
      { name: 'TF Card Storage', detail: 'Up to 256GB' },
      { name: 'Cloud Storage', detail: 'Supported' },
      { name: 'Remote Viewing', detail: 'Supported' },
      { name: 'Remote Control', detail: 'Supported' },
    ],
  },
];

const TAB_BASE = 'tb border-l-4 border-solid cursor-pointer flex gap-[12px] items-center pl-[20px] pr-[16px] py-[16px] rounded-[4px] w-full text-left';
const TAB_ACTIVE = 'bg-[#fff8f8] border-[#fd022c] text-[#fd022c]';
const TAB_IDLE = 'bg-white border-transparent text-[#5f6368] hover:text-[#111]';

function SpecPanelView({ panel }: { panel: SpecPanel }) {
  const [active, setActive] = useState(0);
  return (
    <div className={panel.className}>
      <nav className="border border-[#e5e5e5] border-solid flex flex-col gap-[8px] items-start p-[9px] rounded-[8px] self-stretch shrink-0 w-[240px]">
        {panel.tabs.map((tab, i) => (
          <button key={tab.label} type="button" aria-pressed={i === active} onClick={() => setActive(i)} className={`${TAB_BASE} ${i === active ? TAB_ACTIVE : TAB_IDLE}`}>
            <span className="relative shrink-0 size-[24px] flex items-center justify-center"><span className={tab.iconClassName}><img alt="" className="absolute block inset-0 max-w-none size-full" src={tab.icon} /></span></span>
            <span className="font-['Inter'] font-medium leading-[1.2] text-[14px] whitespace-nowrap">{tab.label}</span>
          </button>
        ))}
      </nav>
      <div className="border border-[#e5e5e5] border-solid flex flex-1 flex-col items-start min-w-px p-px rounded-[8px] self-start bg-[#f9f9ff]">
        <div className="border-[#e5e5e5] border-b border-solid flex items-center pl-[8px] w-full">
          <div className="px-[24px] py-[16px] w-[155.5px] shrink-0 font-['Inter'] font-medium leading-[1.2] text-[#3f4347] text-[16px] whitespace-nowrap">Specification</div>
          <div className="px-[24px] py-[16px] flex-1 font-['Inter'] font-medium leading-[1.2] text-[#3f4347] text-[16px] whitespace-nowrap">Details</div>
        </div>
        {panel.rows.map((row, i) => (
          <div key={row.name} className={`${i ? 'border-[#e5e5e5] border-t border-solid ' : ''}flex items-center px-[8px] w-full`}>
            <div className="px-[24px] py-[16px] w-[155.5px] shrink-0 font-['Inter'] font-medium leading-[1.2] text-[#3f4347] text-[14px] whitespace-nowrap">{row.name}</div>
            <div className="px-[24px] py-[16px] flex-1 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px]">{row.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpecsSection() {
  return (
    <>
      <div className="flex flex-col items-start relative size-full">
        <div className="flex flex-col gap-[8px] items-start w-full">
          <h2 className="h-[17.386px] relative w-[207.219px]"><img alt="Technical Specifications" className="absolute block inset-0 max-w-none size-full" src={img3a2e2a0d3554} /></h2>
          <p className="h-[15.453px] relative w-[332.099px]"><img alt="Explore detailed specifications and features." className="absolute block inset-0 max-w-none size-full" src={img7ca8c0798fed} /></p>
        </div>
        <div className="flex gap-[24px] h-[541px] items-start py-[24px]">
          {PANELS.map((panel) => <SpecPanelView key={panel.tabs[0].label} panel={panel} />)}
        </div>
      </div>
    </>
  );
}
