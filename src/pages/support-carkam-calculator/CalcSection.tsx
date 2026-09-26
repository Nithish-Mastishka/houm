import { useMemo, useState, type FormEvent } from 'react';
import { ChipGroup, type ChipOption } from '@/lib/tools-chips';
import { calcCarkam, formatCarkamHours } from '@/lib/tools-calculators';
import img1527676b9046 from '@/assets/1527676b9046.jpg';
import img60d102631a12 from '@/assets/60d102631a12.svg';
import img76cff0b85175 from '@/assets/76cff0b85175.svg';

const GROUP_CLASS = 'content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full';
const DEVICE_CHIP_CLASS =
  'chip cursor-pointer bg-white border border-[#e5e7eb] border-solid flex flex-col gap-[8px] items-center justify-center px-[25px] py-[17px] rounded-[12px] shrink-0 size-[138px] text-[#5f6368] hover:border-[#fd022c] [&.on]:border-2 [&.on]:border-[#fd022c] [&.on]:px-[24px] [&.on]:py-[16px] [&.on]:text-[#111]';

const SENSOR: ChipOption<string>[] = ['1/2.7', '1/2.5', '1/2.', '1/1.8', '2/3', '1/3', '1/4', '4/3'].map((v) => ({
  label: <>{v}&rdquo;</>,
  value: `${v}\u201D`,
}));

function DeviceLabel({ model }: { model: string }) {
  return (
    <>
      <span className="flex-1 min-h-px relative rounded-[8px] w-full"><img alt={`${model} dashcam`} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img1527676b9046} /></span>
      <span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap">{model}</span>
    </>
  );
}

const DEVICE: ChipOption<string>[] = ['CP-W22', 'CP-G41', 'CP-G41', 'CP-G41', 'CP-G41', 'CP-G41', 'CP-G41', 'CP-G41'].map((m) => ({
  label: <DeviceLabel model={m} />,
  value: m,
}));

/** Channel count. */
const CH: ChipOption<number>[] = [1, 2, 3, 4, 5, 6, 7].map((c) => ({ label: `CH ${c}`, value: c }));

/** Resolution → stream bitrate (Mbps). */
const RES: ChipOption<number>[] = [
  { label: '2MP', value: 1.35 },
  { label: '3MP', value: 2 },
  { label: '5MP+2MP', value: 4.5 },
  { label: '4MP', value: 2.5 },
  { label: '8MP', value: 5 },
  { label: '2MP+2MP', value: 3 },
  { label: '2MP+2MP+2MP', value: 4.5 },
  { label: '2K', value: 2 },
  { label: '4K', value: 5 },
  { label: '2K+2MP+2MP', value: 5 },
  { label: '4K+2MP+2MP', value: 8 },
  { label: '2K+2MP', value: 3.5 },
  { label: '4K+2MP', value: 6.5 },
];

/** Card size (GB). */
const DISK: ChipOption<number>[] = [
  { label: '32 GB', value: 32 },
  { label: '64GB', value: 64 },
  { label: '128GB', value: 128 },
  { label: '256GB', value: 256 },
  { label: '512GB', value: 512 },
  { label: '1TB', value: 1024 },
];

export default function CalcSection() {
  const [sensor, setSensor] = useState(0);
  const [device, setDevice] = useState(0);
  const [ch, setCh] = useState(0);
  const [res, setRes] = useState(0);
  const [disk, setDisk] = useState(0);

  const result = useMemo(
    () => calcCarkam({ mbps: RES[res].value, channels: CH[ch].value, diskGB: DISK[disk].value }),
    [res, ch, disk],
  );
  return (
    <>
      <div className="drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start px-[72px] relative size-full">
       <form className="flex flex-col gap-[48px] items-start w-full" onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Camera &amp; Installation Details</h2>
          <p className="font-['Inter'] font-normal leading-[1.5] max-w-[576px] text-[#3f4347] text-[16px] w-full">Please fill the form to register for Training.</p>
        </div>
        <div className="flex flex-col gap-[24px] items-start justify-center w-full">
          <div className="flex flex-col gap-[8px] items-center w-full">
            <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Device</p>
            <ChipGroup options={SENSOR} selected={sensor} onSelect={setSensor} className={GROUP_CLASS} />
            <ChipGroup options={DEVICE} selected={device} onSelect={setDevice} className={'content-center flex flex-wrap gap-[16px] items-center w-full'} chipClassName={DEVICE_CHIP_CLASS} />
          </div>
          <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[1216px]"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Channel</p><ChipGroup options={CH} selected={ch} onSelect={setCh} className={GROUP_CLASS} /></div>
          <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[1216px]"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Resolution *</p><ChipGroup options={RES} selected={res} onSelect={setRes} className={GROUP_CLASS} /></div>
          <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[1216px]"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Disk Size *</p><ChipGroup options={DISK} selected={disk} onSelect={setDisk} className={GROUP_CLASS} /></div>
        </div>
        <div className="flex flex-col gap-[24px] items-start w-full" aria-live="polite">
          <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Result</h2>
          <div className="flex gap-[48px] items-stretch">
            <div className="bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col gap-[8px] items-start justify-center p-[25px] rounded-[12px] shrink-0 ">
        <div className="bg-[#fff1f2] flex items-center justify-center rounded-[9999px] shrink-0 size-[48px]"><div className="relative shrink-0 size-[20px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img60d102631a12} /></div></div>
        <p className="font-['Inter'] font-medium leading-[24px] text-[#111] text-[16px] whitespace-nowrap">Regular Recording Hours</p>
        <p className="flex gap-[10px] items-baseline pl-[16px] whitespace-nowrap"><span id="ck-reg" className="font-['Roboto'] font-semibold leading-[1.2] text-[#0a1128] text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>{formatCarkamHours(result.regularHours)}</span><span className="font-['Inter'] font-medium leading-[1.2] text-[#5f6368] text-[16px]">Hours</span></p>
      </div>
            <div className="bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col gap-[8px] items-start justify-center p-[25px] rounded-[12px] shrink-0 w-[302px]">
        <div className="bg-[#fff1f2] flex items-center justify-center rounded-[9999px] shrink-0 size-[48px]"><div className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img76cff0b85175} /></div></div>
        <p className="font-['Inter'] font-medium leading-[24px] text-[#111] text-[16px] whitespace-nowrap">Event Recording Hours</p>
        <p className="flex gap-[10px] items-baseline pl-[16px] whitespace-nowrap"><span id="ck-evt" className="font-['Roboto'] font-semibold leading-[1.2] text-[#0a1128] text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>{result.eventHours.toFixed(2)}</span><span className="font-['Inter'] font-medium leading-[1.2] text-[#5f6368] text-[16px]">Hours</span></p>
      </div>
          </div>
        </div>
       </form>
      </div>
    </>
  );
}
