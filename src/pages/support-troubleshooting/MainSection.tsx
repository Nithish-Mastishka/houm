import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AccordionItem, SupportSearchForm, matchesQuery, useSingleOpen } from '@/lib/tools-accordion';
import img682c1d5da875 from '@/assets/682c1d5da875.svg';
import img46ed48ef26dd from '@/assets/46ed48ef26dd.svg';
import imgb20f693b7a7b from '@/assets/b20f693b7a7b.svg';
import imge63391a1c03e from '@/assets/e63391a1c03e.svg';
import imgbe15c76cf36f from '@/assets/be15c76cf36f.svg';
import img12c82bfcbdd3 from '@/assets/12c82bfcbdd3.svg';
import img33d5d66722c2 from '@/assets/33d5d66722c2.svg';

const ANSWER_TEXT =
  'HOUM DVRs support TVI, CVI, AHD, CVBS, and IP cameras. Select the required signal type from the DVR\u2019s Camera/Channel Settings. For detailed setup instructions, refer to the device manual. Download Manual';

function Answer() {
  return (
    <>
      <div className="font-['Inter'] font-normal text-[#5f6368] text-[14px] w-full"><p className="leading-[20px] mb-0">HOUM DVRs support TVI, CVI, AHD, CVBS, and IP cameras. Select the required signal type from the DVR&rsquo;s Camera/Channel Settings.</p><p className="leading-[20px]">For detailed setup instructions, refer to the device manual.</p></div>
      <Link to="/support-user-manual" className="flex gap-[8px] items-center justify-center py-[8px] rounded-[9000px] shrink-0 hover:opacity-80"><span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img33d5d66722c2} /></span><span className="font-['Inter'] font-medium leading-[24px] text-[#fd022c] text-[16px] whitespace-nowrap">Download Manual</span></Link>
    </>
  );
}

const ITEMS = [
  '1. Why Is My USB Drive Not Detected?',
  '2. How to Configure Different Camera Signals on DVR?',
  '3. How to View and Search Recordings?',
  '4. How to Connect Audio to a DVR?',
  '5. How to Add an IP Camera to a DVR?',
  '6. How to Configure Email Notifications?',
  '7. How to Set Up Motion Detection Recording?',
  '8. How to Enable Motion Detection Alerts?',
].map((q, i) => ({ i, q, text: `${q} ${ANSWER_TEXT}` }));

export default function MainSection() {
  const [query, setQuery] = useState('');
  const [open, toggle] = useSingleOpen(1);
  const visible = useMemo(() => ITEMS.filter((t) => matchesQuery(t.text, query)), [query]);

  return (
    <>
      <div className="flex gap-[24px] items-start px-[72px] relative size-full">
      <div className="flex flex-col gap-[10px] items-start justify-center relative shrink-0">
        <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid flex flex-col gap-[32px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[306px]">
          <SupportSearchForm id="ts-list-q" query={query} onQueryChange={setQuery} empty={visible.length === 0} />
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="border-[rgba(0,0,0,0.1)] border-b border-solid flex items-center pb-[16px] w-full"><h2 className="flex-1 font-['Poppins'] leading-[1.2] text-[#111] text-[24px]">Categories</h2></div>
            <Link to="/support-firmware" className="flex gap-[4px] items-center relative shrink-0 w-[144px] hover:text-[#fd022c] text-[#111]"><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap">Download</span><span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img682c1d5da875} /></span></Link>
            <Link to="/support-lens-calculator" className="flex gap-[4px] items-center relative shrink-0 w-[144px] hover:text-[#fd022c] text-[#111]"><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap">Tools</span><span className="flex items-center justify-center relative shrink-0"><span className="-scale-y-100 flex-none rotate-180"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img46ed48ef26dd} /></span></span></span></Link>
            <Link to="/support-faqs" className="flex gap-[4px] items-center relative shrink-0 w-[96px] hover:text-[#fd022c] text-[#111]"><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap">Other</span><span className="flex items-center justify-center relative shrink-0"><span className="-scale-y-100 flex-none rotate-180"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img46ed48ef26dd} /></span></span></span></Link>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
          <a href="tel:1800120455566" className="bg-white border border-[#f2d3d0] border-solid flex gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full hover:border-[#fd022c] transition-colors"><div className="relative shrink-0 size-[40px]"><div className="absolute inset-[-2.5%_-5%_-7.5%_-5%]"><img alt="" className="block max-w-none size-full" src={imgb20f693b7a7b} /></div></div><div className="flex flex-col gap-[2px] items-start"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">Call Us</p><p className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[18px] whitespace-nowrap">1800 120 455566</p><p className="font-['Inter'] font-normal leading-[1.5] pt-[2px] text-[#5f6368] text-[12px] whitespace-nowrap">Mon - Sat | 10:00 AM - 06:00 PM</p></div></a>
          <a href="mailto:support@houmsecurity.com" className="bg-white border border-[#f2d3d0] border-solid flex gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full hover:border-[#fd022c] transition-colors"><div className="relative shrink-0 size-[40px]"><div className="absolute inset-[-2.5%_-5%_-7.5%_-5%]"><img alt="" className="block max-w-none size-full" src={imge63391a1c03e} /></div></div><div className="flex flex-col gap-[2px] items-start"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">Email Support</p><p className="font-['Inter'] font-medium leading-[1.2] text-[#3f4347] text-[14px] whitespace-nowrap">support@houmsecurity.com</p><p className="font-['Inter'] font-normal leading-[1.5] pt-[2px] text-[#5f6368] text-[12px] whitespace-nowrap">We reply within 24 hours</p></div></a>
          <div className="bg-white border border-[#f2d3d0] border-solid flex gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full hover:border-[#fd022c] transition-colors"><div className="bg-white border border-[#fee2e2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"><div className="relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgbe15c76cf36f} /></div></div><div className="flex flex-col gap-[2px] items-start"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] whitespace-nowrap">Live Chat</p><p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">Chat with our support team</p><p className="font-['Inter'] font-normal leading-[1.5] pt-[2px] text-[#5f6368] text-[12px] whitespace-nowrap">Available on website</p></div></div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-start relative shrink-0 w-[966px]">
        <div className="flex items-start justify-between w-full">
          <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Troubleshooting</h2>
          <label className="relative shrink-0 w-[272px]"><span className="sr-only">Category</span>
            <select id="ts-cat" className="appearance-none bg-white border border-[#e5e5e5] border-solid cursor-pointer h-[50px] pl-[17px] pr-[48px] rounded-[8px] w-full font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] outline-none focus:border-[#fd022c]">
              <option>All Categories</option><option>DVR</option><option>NVR</option><option>IP Camera</option><option>Storage</option>
            </select>
            <span className="absolute pointer-events-none right-[17px] size-[24px] top-[13px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img12c82bfcbdd3} /></span>
          </label>
        </div>
        <div className="bg-white border border-[#f3f4f6] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start p-[41px] relative rounded-[16px] shrink-0 w-full">
          <div id="ts-list" className="flex flex-col items-start w-full">
            {visible.map((t) => (
              <AccordionItem key={t.i} first={t.i === 0} open={open === t.i} onToggle={() => toggle(t.i)} question={t.q}>
                <Answer />
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
