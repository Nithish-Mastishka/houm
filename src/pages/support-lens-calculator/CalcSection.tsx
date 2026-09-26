import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { ChipGroup, type ChipOption } from '@/lib/tools-chips';
import { calcLens } from '@/lib/tools-calculators';
import img175072bdd0d3 from '@/assets/175072bdd0d3.svg';
import img8ecc95ab2f3a from '@/assets/8ecc95ab2f3a.webp';
import img6d04c7ad4a55 from '@/assets/6d04c7ad4a55.svg';
import img42a6b91d79ef from '@/assets/42a6b91d79ef.svg';
import img6fac695e0d89 from '@/assets/6fac695e0d89.svg';
import img883582287c97 from '@/assets/883582287c97.svg';

const GROUP_CLASS = 'content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full';
const INPUT_CLASS = "bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] font-['Inter'] font-normal text-[#111] text-[16px] outline-none focus:border-[#fd022c] placeholder:text-[#5f6368] flex-1 min-w-px";
const UNIT_CLASS = "bg-[#f6f4fc] border border-[#e5e5e5] border-solid flex h-[50px] items-center px-[17px] rounded-[8px] shrink-0 font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px]";

/** Sensor format → sensor width (mm). */
const SENSORS: ChipOption<number>[] = [
  { label: <>1/2.7&rdquo;</>, value: 5.37 },
  { label: <>1/2.5&rdquo;</>, value: 5.76 },
  { label: <>1/2.&rdquo;</>, value: 6.4 },
  { label: <>1/1.8&rdquo;</>, value: 7.18 },
  { label: <>2/3&rdquo;</>, value: 8.8 },
  { label: <>1/3&rdquo;</>, value: 4.8 },
  { label: <>1/4&rdquo;</>, value: 3.6 },
  { label: <>4/3&rdquo;</>, value: 17.3 },
];

/** Resolution → horizontal pixels. */
const RESOLUTIONS: ChipOption<number>[] = [
  { label: '1MP', value: 1280 },
  { label: '2MP', value: 1920 },
  { label: '3MP', value: 2304 },
  { label: '4MP', value: 2560 },
  { label: '5MP', value: 2592 },
  { label: '6MP', value: 3072 },
  { label: '8MP', value: 3840 },
  { label: '12MP', value: 4000 },
];

const WIDTHS = Array.from({ length: 20 }, (_, i) => String((i + 1) * 5));

export default function CalcSection() {
  const [sensor, setSensor] = useState(0);
  const [res, setRes] = useState(0);
  const [distance, setDistance] = useState('50');
  const [height, setHeight] = useState('15');
  const [width, setWidth] = useState('30');

  const result = useMemo(
    () =>
      calcLens({
        sensorWidth: SENSORS[sensor].value,
        resolutionPx: RESOLUTIONS[res].value,
        distance: parseFloat(distance),
        height: parseFloat(height),
        sceneWidth: parseFloat(width),
      }),
    [sensor, res, distance, height, width],
  );

  return (
    <>
      <div className="drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[32px] items-start px-[72px] relative size-full">
       <div className="flex gap-[24px] items-start relative w-full">
        <form className="flex flex-1 flex-col gap-[48px] items-start min-w-px" onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
          <div className="flex flex-col gap-[12px] items-start w-full">
            <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Camera &amp; Installation Details</h2>
            <p className="font-['Inter'] font-normal leading-[1.5] max-w-[576px] text-[#3f4347] text-[16px] w-full">Please fill the form to register for Training.</p>
          </div>
          <div className="flex flex-col gap-[24px] items-start w-[638px]">
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[608px]"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Image Sensor *</p><ChipGroup options={SENSORS} selected={sensor} onSelect={setSensor} className={GROUP_CLASS} /></div>
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[608px]"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Resolution *</p><ChipGroup options={RESOLUTIONS} selected={res} onSelect={setRes} className={GROUP_CLASS} /></div>
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full"><label htmlFor="lens-dist"> Distance Between Camera and Object *</label></p><div className="flex gap-[4px] items-start w-full"><input id="lens-dist" type="number" min="1" value={distance} onChange={(e: ChangeEvent<HTMLInputElement>) => setDistance(e.target.value)} className={INPUT_CLASS} /><div className={UNIT_CLASS}>ft</div></div></div>
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full"><label htmlFor="lens-h">Height of Camera from Ground *</label></p><div className="flex gap-[8px] items-start w-full"><input id="lens-h" type="number" min="0" value={height} onChange={(e: ChangeEvent<HTMLInputElement>) => setHeight(e.target.value)} className={INPUT_CLASS} /><div className={UNIT_CLASS}>ft</div></div></div>
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full"><label htmlFor="lens-w">Width of Field of View *</label></p><div className="relative w-full"><select id="lens-w" value={width} onChange={(e: ChangeEvent<HTMLSelectElement>) => setWidth(e.target.value)} className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] font-['Inter'] font-normal text-[#111] text-[16px] outline-none focus:border-[#fd022c] placeholder:text-[#5f6368] appearance-none cursor-pointer pr-[48px] w-full"><option value="" disabled={true}>Select State</option>{WIDTHS.map((w) => <option key={w} value={w}>{w} ft</option>)}</select><span className="absolute pointer-events-none right-[17px] size-[24px] top-[13px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img175072bdd0d3} /></span></div></div>
          </div>
        </form>
        <div className="flex flex-1 flex-col gap-[32px] items-start min-w-px">
          <div className="bg-white border-[#f3f4f6] border-[1.125px] border-solid h-[609.25px] overflow-clip relative rounded-[16px] shadow-[0px_4.5px_6.75px_-1.125px_rgba(0,0,0,0.05),0px_2.25px_4.5px_-1.125px_rgba(0,0,0,0.03)] shrink-0 w-full">
            <h3 className="absolute font-['Inter'] font-medium leading-[1.2] left-[27px] text-[#3f4347] text-[18px] top-[27px] whitespace-nowrap">Field of View Preview</h3>
            <div className="absolute flex h-[553.5px] items-center justify-center left-[27px] right-[27px] top-[76.5px]">
              <div className="h-[311px] relative shrink-0 w-[572px]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="Diagram: camera mounted on a pole, its field of view spanning the distance to a tree" className="absolute left-[-0.04%] max-w-none size-full top-[-6.96%]" src={img8ecc95ab2f3a} /></div></div>
            </div>
          </div>
          <div className="bg-white border-[#f3f4f6] border-[1.125px] border-solid flex flex-col items-start p-[28.125px] relative rounded-[16px] shadow-[0px_4.5px_6.75px_-1.125px_rgba(0,0,0,0.05),0px_2.25px_4.5px_-1.125px_rgba(0,0,0,0.03)] shrink-0 w-full" aria-live="polite">
            <div className="flex items-start justify-center w-full">
              <div className="flex flex-col gap-[3.938px] items-start shrink-0 w-[191.196px]">
                <h3 className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[16px] whitespace-nowrap">Your Calculated Lens</h3>
                <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[12px] whitespace-nowrap">FOCAL LENGTH</p>
                <p className="flex gap-[4.5px] items-baseline text-[#fd022c] whitespace-nowrap"><span id="lens-f" className="font-['Roboto'] font-semibold leading-[1.2] text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>{result ? result.focalLength.toFixed(2) : '--'}</span><span className="font-['Poppins'] leading-[1.2] text-[24px]">mm</span></p>
              </div>
              <div className="border-[#e5e5e5] border-l-[1.125px] border-solid flex items-stretch pl-[9.125px] pr-[8px] shrink-0">
                <div className="flex flex-col gap-[4.5px] items-center justify-center px-[16px] text-center whitespace-nowrap">
                  <p className="font-['Inter'] font-medium leading-[1.2] text-[#5f6368] text-[16px]">PPF</p>
                  <p id="lens-ppf" className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px]">{result ? result.ppf : '--'}</p>
                  <div className="font-['Inter'] font-normal opacity-80 text-[#5f6368] text-[12px]"><p className="leading-[1.5] mb-0">(Pixels Per</p><p className="leading-[1.5]">Foot)</p></div>
                </div>
                <div className="border-[#e5e5e5] border-l-[1.125px] border-solid flex flex-col gap-[8px] items-center justify-center pl-[1.125px] text-center whitespace-nowrap">
                  <div className="font-['Inter'] font-medium px-[16px] text-[#5f6368] text-[16px]"><p className="leading-[1.2] mb-0">Field of View</p><p className="leading-[1.2]">(Width)</p></div>
                  <p id="lens-fov" className="font-['Poppins'] leading-[1.2] px-[16px] text-[#111] text-[24px]">{result ? `${result.fovWidth} ft` : '--'}</p>
                </div>
                <div className="border-[#e5e5e5] border-l-[1.125px] border-solid flex flex-col gap-[8px] items-center justify-center pl-[17.125px] pr-[16px] text-center whitespace-nowrap">
                  <p className="font-['Inter'] font-medium leading-[1.2] px-[10.114px] text-[#5f6368] text-[16px]">Lens Type</p>
                  <p id="lens-type" className="font-['Poppins'] leading-[1.2] px-[4px] text-[#111] text-[24px]">{result ? result.lensType : '--'}</p>
                  <p className="font-['Inter'] font-normal leading-[1.5] opacity-80 text-[#5f6368] text-[12px]">Recommended</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className="bg-white border-[#f6f4fc] border-[1.125px] border-solid h-[277.188px] relative rounded-[13.5px] shadow-[0px_4.5px_6.75px_-1.125px_rgba(0,0,0,0.05),0px_2.25px_4.5px_-1.125px_rgba(0,0,0,0.03)] shrink-0 w-full">
        <div className="flex gap-[24px] items-center p-[37.125px] relative size-full">
          <div className="flex flex-col gap-[12.234px] items-start relative shrink-0 w-[260.595px]">
            <div className="flex gap-[13.5px] items-center w-full"><div className="bg-[#fff8f8] flex items-center justify-center rounded-[11248.875px] shrink-0 size-[36px]"><div className="relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img6d04c7ad4a55} /></div></div><h3 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] whitespace-nowrap">How does it work?</h3></div>
            <div className="font-['Inter'] font-normal text-[#5f6368] text-[16px] w-full"><p className="leading-[1.5] mb-0">Our Lens Calculator helps you</p><p className="leading-[1.5]">determine the ideal focal length for your camera by considering the camera sensor size, resolution, installation height, distance to the object and the desired field of view.</p></div>
          </div>
          <div className="flex-1 min-w-px relative">
            <div className="flex items-start justify-between px-[18px] relative w-full">
              <div className="absolute border-[#5f6368] border-dashed border-t-[1.125px] h-[1.125px] left-[54px] right-[54.28px] top-[71px]" />
              <div className="flex flex-1 flex-col items-center min-w-px relative">
        <div className="flex flex-col h-[36px] items-start pb-[9px] w-[27px]"><div className="bg-[#f6f4fc] flex items-center justify-center rounded-[11248.875px] shrink-0 size-[27px] font-['Manrope'] font-bold leading-[18px] text-[#5f6368] text-[13.5px]">1</div></div>
        <div className="flex flex-col h-[85.5px] items-start pb-[13.5px] w-[72px]"><div className="bg-[#fff1f2] border-[#fff8f8] border-[1.125px] border-solid drop-shadow-[0px_1.125px_1.125px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-[11248.875px] shrink-0 size-[72px]"><div className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img42a6b91d79ef} /></div></div></div>
        <div className="flex flex-col items-center px-[9px] font-['Inter'] font-normal text-[#5f6368] text-[14px] text-center whitespace-nowrap"><p className="leading-[20px] mb-0">Enter your camera &amp;</p><p className="leading-[20px]">installation details</p></div>
      </div>
              <div className="flex flex-1 flex-col items-center min-w-px relative">
        <div className="flex flex-col h-[36px] items-start pb-[9px] w-[27px]"><div className="bg-[#f6f4fc] flex items-center justify-center rounded-[11248.875px] shrink-0 size-[27px] font-['Manrope'] font-bold leading-[18px] text-[#5f6368] text-[13.5px]">2</div></div>
        <div className="flex flex-col h-[85.5px] items-start pb-[13.5px] w-[72px]"><div className="bg-[#fff1f2]  flex items-center justify-center rounded-[11248.875px] shrink-0 size-[72px]"><div className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img6fac695e0d89} /></div></div></div>
        <div className="flex flex-col items-center px-[9px] font-['Inter'] font-normal text-[#5f6368] text-[14px] text-center whitespace-nowrap"><p className="leading-[20px] mb-0">We calculate the ideal</p><p className="leading-[20px]">focal length</p></div>
      </div>
              <div className="flex flex-1 flex-col items-center min-w-px relative">
        <div className="flex flex-col h-[36px] items-start pb-[9px] w-[27px]"><div className="bg-[#f6f4fc] flex items-center justify-center rounded-[11248.875px] shrink-0 size-[27px] font-['Manrope'] font-bold leading-[18px] text-[#5f6368] text-[13.5px]">3</div></div>
        <div className="flex flex-col h-[85.5px] items-start pb-[13.5px] w-[72px]"><div className="bg-[#fff1f2]  flex items-center justify-center rounded-[11248.875px] shrink-0 size-[72px]"><div className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img883582287c97} /></div></div></div>
        <div className="flex flex-col items-center px-[9px] font-['Inter'] font-normal text-[#5f6368] text-[14px] text-center whitespace-nowrap"><p className="leading-[20px] mb-0">Get the best field of</p><p className="leading-[20px] mb-0">view</p><p className="leading-[20px]">for your setup</p></div>
      </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
