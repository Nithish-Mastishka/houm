import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { ChipGroup, type ChipOption } from '@/lib/tools-chips';
import { calcHdd, calcHddBitrate, type HddMode } from '@/lib/tools-calculators';
import img3d56be112a25 from '@/assets/3d56be112a25.svg';
import imgbd4283e19ef9 from '@/assets/bd4283e19ef9.svg';
import img2028574b6153 from '@/assets/2028574b6153.svg';
import imgaf90b77f968d from '@/assets/af90b77f968d.svg';
import imgb14d44d4f01e from '@/assets/b14d44d4f01e.svg';
import img272585ed37eb from '@/assets/272585ed37eb.svg';

const GROUP_CLASS = 'content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full';

const DEVICE: ChipOption<string>[] = [
  { label: 'DVR', value: 'DVR' },
  { label: 'NVR', value: 'NVR' },
  { label: 'IPC', value: 'IPC' },
];

const COMP: ChipOption<number>[] = [
  { label: 'H.264', value: 1 },
  { label: 'H.265', value: 0.5 },
  { label: 'H.264+', value: 0.6 },
  { label: 'InstaStream', value: 0.4 },
  { label: '8MP', value: 1 },
  { label: '12MP', value: 1 },
];

const QUALITY: ChipOption<number>[] = [
  { label: 'High', value: 1 },
  { label: 'Medium', value: 0.75 },
  { label: 'Low', value: 0.5 },
];

const RES: ChipOption<number>[] = [
  { label: 'CIF', value: 512 },
  { label: 'D1', value: 1024 },
  { label: '1MP', value: 2048 },
  { label: '1.3MP', value: 2560 },
  { label: '2MP', value: 4096 },
  { label: '3MP', value: 5120 },
  { label: '4MP', value: 6144 },
  { label: '5MP', value: 8192 },
  { label: '8MP', value: 12288 },
  { label: '12MP', value: 16384 },
];

const FPS: ChipOption<string>[] = [
  { label: 'CIF', value: 'CIF' },
  { label: 'D1', value: 'D1' },
  { label: '1MP', value: '1MP' },
  { label: '1.3MP', value: '1.3MP' },
  { label: '2MP', value: '2MP' },
  { label: '3MP', value: '3MP' },
  { label: '4MP', value: '4MP' },
  { label: '5MP', value: '5MP' },
  { label: '8MP', value: '8MP' },
  { label: '12MP', value: '12MP' },
];

const MOTION: ChipOption<number>[] = [
  { label: '10%', value: 10 },
  { label: '20%', value: 20 },
  { label: '25%', value: 25 },
  { label: '50%', value: 50 },
  { label: '75%', value: 75 },
  { label: '100%', value: 100 },
];

const CAP: ChipOption<number>[] = [
  { label: '1TB', value: 1 },
  { label: '2TB', value: 2 },
  { label: '3TB', value: 3 },
  { label: '8TB', value: 8 },
];

interface Mode {
  value: HddMode;
  title: string;
  description: string;
  icon: string;
  iconClass: string;
}

const MODES: Mode[] = [
  { value: 'disk', title: 'Disk Size', description: 'Calculate recording days based on available disk size.', icon: img3d56be112a25, iconClass: 'h-[17.5px] relative shrink-0 w-[25px]' },
  { value: 'days', title: 'Recording Days', description: 'Calculate required disk size based on desired days.', icon: imgbd4283e19ef9, iconClass: 'h-[25px] relative shrink-0 w-[22.5px]' },
];

const MODE_CLASS =
  'chip group/m cursor-pointer bg-[#f6f4fc] border border-[#e5e5e5] border-solid flex flex-1 items-center justify-between min-w-[480px] p-[17px] rounded-[12px] text-left [&.on]:bg-[rgba(255,218,215,0.1)] [&.on]:border-2 [&.on]:border-[#fd022c] [&.on]:p-[16px]';

function ModeOption({ option, on, onSelect }: { option: Mode; on: boolean; onSelect: (mode: HddMode) => void }) {
  return (
    <button type="button" aria-pressed={on} onClick={() => onSelect(option.value)} className={on ? `${MODE_CLASS} on` : MODE_CLASS}>
      <span className="flex items-center"><span className="bg-[rgba(250,247,247,0.4)] border border-[#c4c4d6] border-solid rounded-[9999px] shrink-0 size-[20px] group-[.on]/m:bg-white group-[.on]/m:border-4 group-[.on]/m:border-[#fd022c]" /><span className="flex flex-col items-start pl-[12px]"><span className="font-['Manrope'] font-bold leading-[24px] text-[#111] text-[16px] whitespace-nowrap group-[.on]/m:text-[#fd022c]">{option.title}</span><span className="font-['Inter'] font-normal leading-[1.5] text-[#3f4347] text-[12px]">{option.description}</span></span></span>
      <span className={option.iconClass}><img alt="" className="absolute block inset-0 max-w-none size-full" src={option.icon} /></span>
    </button>
  );
}

interface CameraConfig {
  device: number;
  comp: number;
  quality: number;
  res: number;
  fps: number;
  audio: boolean;
}

export default function CalcSection() {
  const [cfg, setCfg] = useState<CameraConfig>({ device: 0, comp: 0, quality: 0, res: 0, fps: 0, audio: true });
  const [bitrate, setBitrate] = useState('2026');
  const [cams, setCams] = useState('1');
  const [motion, setMotion] = useState(0);
  const [mode, setMode] = useState<HddMode>('disk');
  const [n, setN] = useState('');
  const [cap, setCap] = useState(0);
  const dayMode = mode === 'days';

  /** Any camera-configuration change re-derives the bitrate field (legacy houmHddCfg). */
  const updateCfg = (next: CameraConfig) => {
    setCfg(next);
    setBitrate(
      String(
        calcHddBitrate({
          resolutionKbps: RES[next.res].value,
          compression: COMP[next.comp].value,
          quality: QUALITY[next.quality].value,
          audio: next.audio,
        }),
      ),
    );
  };

  const result = useMemo(
    () =>
      calcHdd({
        bitrateKbps: parseFloat(bitrate),
        cameras: parseInt(cams, 10),
        motionPercent: MOTION[motion].value,
        mode,
        n: parseInt(n, 10),
        diskTB: CAP[cap].value,
      }),
    [bitrate, cams, motion, mode, n, cap],
  );
  const r1 = !result ? '--' : result.mode === 'days' ? result.storageTB.toFixed(2) : String(result.recordingDays);
  return (
    <>
      <form className="flex flex-col gap-[48px] items-start relative size-full" onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <div className="content-start flex flex-wrap gap-[24px] items-start w-full">
          <div className="flex flex-1 flex-col gap-[32px] items-start min-w-[480px]">
            <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Camera Configuration</h2>
            <div className="flex flex-col gap-[24px] items-start w-full">
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Device Type</p><ChipGroup options={DEVICE} selected={cfg.device} onSelect={(i) => updateCfg({ ...cfg, device: i })} className={GROUP_CLASS} /></div>
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Compression</p><ChipGroup options={COMP} selected={cfg.comp} onSelect={(i) => updateCfg({ ...cfg, comp: i })} className={GROUP_CLASS} /></div>
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Image Quality</p><ChipGroup options={QUALITY} selected={cfg.quality} onSelect={(i) => updateCfg({ ...cfg, quality: i })} className={GROUP_CLASS} /></div>
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Resolution</p><ChipGroup options={RES} selected={cfg.res} onSelect={(i) => updateCfg({ ...cfg, res: i })} className={GROUP_CLASS} /></div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[32px] items-start min-w-[480px]">
            <div className="h-[29px] w-full" />
            <div className="flex flex-col gap-[24px] items-start w-full">
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">FPS</p><ChipGroup options={FPS} selected={cfg.fps} onSelect={(i) => updateCfg({ ...cfg, fps: i })} className={GROUP_CLASS} /></div>
              <div className="flex flex-col gap-[8px] items-start w-full">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Audio</p>
                <div className="flex gap-[16px] h-[50px] items-center">
                  <div className="bg-white border border-[#f6f4fc] border-solid flex gap-[24px] h-[50px] items-center px-[17px] py-[9px] rounded-[12px] shrink-0">
                    <span id="hdd-audio-l" className="font-['Inter'] font-normal leading-[20px] text-[#111] text-[14px] whitespace-nowrap">Enable Audio</span>
                    <button id="hdd-audio" type="button" role="switch" aria-checked={cfg.audio} aria-labelledby="hdd-audio-l" onClick={() => updateCfg({ ...cfg, audio: !cfg.audio })} className="bg-[#c4c4d6] aria-checked:bg-[#2d78d9] cursor-pointer flex h-[24px] items-center justify-start aria-checked:justify-end px-[4px] rounded-[9999px] shrink-0 w-[48px] transition-colors"><span className="bg-white rounded-[9999px] shrink-0 size-[18px]" /></button>
                  </div>
                  <label className="bg-white border border-[#f6f4fc] border-solid flex gap-[12px] h-[50px] items-center px-[17px] rounded-[12px] shrink-0"><span className="font-['Inter'] font-normal leading-[20px] text-[#111] text-[14px] whitespace-nowrap">No. of Cameras</span><input id="hdd-cams" type="number" min="1" value={cams} onChange={(e: ChangeEvent<HTMLInputElement>) => setCams(e.target.value)} className="border border-[#e5e5e5] border-solid font-['Inter'] h-[32px] outline-none focus:border-[#fd022c] px-[8px] rounded-[6px] text-[#111] text-[14px] w-[72px]" /></label>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start w-full">
                <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full"><label htmlFor="hdd-bitrate">Bitrate (kbps)</label></p>
                <input id="hdd-bitrate" type="number" min="1" value={bitrate} onChange={(e: ChangeEvent<HTMLInputElement>) => setBitrate(e.target.value)} className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] font-['Inter'] font-normal text-[#111] text-[16px] outline-none focus:border-[#fd022c] placeholder:text-[#5f6368] w-[584px]" />
              </div>
              <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Motion Activity</p><ChipGroup options={MOTION} selected={motion} onSelect={setMotion} className={GROUP_CLASS} /></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] items-start w-full">
          <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Camera Configuration</h2>
          <div className="flex flex-col gap-[40px] items-start w-full">
            <div className="flex flex-col gap-[24px] items-start w-[1296px]">
              <div role="group" className="content-start flex flex-wrap gap-[24px] items-start pr-[6px] w-full">
                {MODES.map((m) => (
                  <ModeOption key={m.value} option={m} on={mode === m.value} onSelect={setMode} />
                ))}
              </div>
              <div className="content-start flex flex-wrap gap-[24px] items-start w-full">
                <div className="flex flex-1 flex-col gap-[8px] items-start min-w-[480px]">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full"><label id="hdd-n-l" htmlFor="hdd-n">{dayMode ? 'Recording Days' : 'Disk (Number)'}</label></p>
                  <div className="bg-white border border-[#e5e5e5] border-solid flex h-[50px] items-center overflow-clip px-[17px] rounded-[8px] w-full focus-within:border-[#fd022c]">
                    <input id="hdd-n" type="number" min="1" placeholder={dayMode ? 'Enter no. of days' : 'Enter No. of disk '} value={n} onChange={(e: ChangeEvent<HTMLInputElement>) => setN(e.target.value)} className="flex-1 min-w-px font-['Inter'] font-normal leading-[1.5] outline-none text-[#111] text-[16px] placeholder:text-[#5f6368] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none" />
                    <span className="relative shrink-0 size-[24px]"><span className="absolute h-[12px] left-[4px] top-[6px] w-[16px] pointer-events-none"><span className="absolute inset-[0_-18.75%]"><img alt="" className="block max-w-none size-full" src={img2028574b6153} /></span></span><button type="button" aria-label="Increase" onClick={() => setN(String((parseInt(n, 10) || 0) + 1))} className="absolute cursor-pointer h-[12px] left-0 top-0 w-full" /><button type="button" aria-label="Decrease" onClick={() => setN(String(Math.max(1, (parseInt(n, 10) || 1) - 1)))} className="absolute bottom-0 cursor-pointer h-[12px] left-0 w-full" /></span>
                  </div>
                </div>
                <div id="hdd-cap-wrap" className="flex flex-1 flex-col gap-[8px] items-start min-w-[480px]" style={dayMode ? { opacity: 0.4 } : undefined}>
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Available Disk Capacity</p>
                  <ChipGroup options={CAP} selected={cap} onSelect={setCap} className={'content-center flex flex-wrap gap-[8px] items-center w-full'} />
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between w-full">
              <div className="flex flex-col gap-[24px] items-start" aria-live="polite">
                <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Result</h2>
                <div className="flex gap-[48px] items-start">
                  <div className="bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex items-center p-[25px] rounded-[12px] shrink-0 min-w-[190px]">
                    <div className="bg-[#fff1f2] flex items-center justify-center rounded-[9999px] shrink-0 size-[48px]"><div className="relative shrink-0 size-[20px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgaf90b77f968d} /></div></div>
                    <div className="flex flex-col items-start pl-[16px]"><p className="flex gap-[8px] items-baseline whitespace-nowrap"><span id="hdd-r1" className="font-['Roboto'] font-semibold leading-[1.2] text-[#0a1128] text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>{r1}</span><span id="hdd-r1u" className="font-['Inter'] font-medium leading-[1.2] text-[#5f6368] text-[16px]">{dayMode ? 'TB' : 'Days'}</span></p><p id="hdd-r1l" className="font-['Inter'] font-normal leading-[1.5] opacity-80 text-[#5f6368] text-[12px] whitespace-nowrap">{dayMode ? 'Storage Required' : 'Total Recording Days'}</p></div>
                  </div>
                  <div className="bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex items-center p-[25px] rounded-[12px] shrink-0 w-[302px]">
                    <div className="bg-[#fff1f2] flex items-center justify-center rounded-[9999px] shrink-0 size-[48px]"><div className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgb14d44d4f01e} /></div></div>
                    <div className="flex flex-col items-start pl-[16px]"><p className="flex gap-[8px] items-baseline whitespace-nowrap"><span id="hdd-r2" className="font-['Roboto'] font-semibold leading-[1.2] text-[#0a1128] text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>{result ? result.bandwidthMbps.toFixed(2) : '--'}</span><span className="font-['Inter'] font-medium leading-[1.2] text-[#5f6368] text-[16px]">Mbps</span></p><p className="font-['Inter'] font-normal leading-[1.5] opacity-80 text-[#5f6368] text-[12px] whitespace-nowrap">Bandwidth Required</p></div>
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex gap-[8px] h-[56px] items-center justify-center px-[40px] py-[16px] rounded-[9000px] shrink-0">
                <span className="font-['Manrope'] font-bold leading-[24px] text-[16px] text-center text-white whitespace-nowrap">Calculate Storage &amp; Bandwidth</span>
                <span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img272585ed37eb} /></span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
