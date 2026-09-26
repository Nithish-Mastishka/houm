import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AccordionItem, SupportSearchForm, matchesQuery, useSingleOpen } from '@/lib/tools-accordion';
import img682c1d5da875 from '@/assets/682c1d5da875.svg';
import img46ed48ef26dd from '@/assets/46ed48ef26dd.svg';
import imgb20f693b7a7b from '@/assets/b20f693b7a7b.svg';
import imge63391a1c03e from '@/assets/e63391a1c03e.svg';
import imgbe15c76cf36f from '@/assets/be15c76cf36f.svg';

const POPULAR = ['Press Release', 'Product Launch', 'Events', 'Awards', 'Partnerships', 'Industry Update'];
const POPULAR_CLASS =
  "border border-[#e5e5e5] border-solid cursor-pointer flex items-center justify-center px-[16px] py-[8px] rounded-[9999px] shrink-0 hover:border-[#fd022c] hover:text-[#fd022c] font-['Inter'] font-normal leading-[1.5] text-[#111] text-[16px] whitespace-nowrap";

const ANSWER_LINES = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis',
  'natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,',
  'pellentesque eu',
];

function Answer() {
  return (
    <div className="font-['Inter'] font-normal text-[#5f6368] text-[14px] w-full">
      {ANSWER_LINES.map((line, i) => (
        <p key={i} className={i < ANSWER_LINES.length - 1 ? 'leading-[20px] mb-0' : 'leading-[20px]'}>{line}</p>
      ))}
    </div>
  );
}

const FAQS = [
  '1. Which HOUM products are suitable for homes and small businesses?',
  '2. How do I choose the right HOUM security camera for my space?',
  '3. Can HOUM cameras be installed indoors and outdoors?',
  '4. What should I consider before installing a surveillance system?',
  '5. Do HOUM cameras support night-time monitoring?',
  '6. Can I install a HOUM camera myself?',
  '7. Which HOUM cameras support AI-based detection?',
  '8. What infrastructure is required for an IP camera system?',
  '9. How long can surveillance footage be retained?',
].map((q, i) => ({ i, q, text: `${q} ${ANSWER_LINES.join(' ')}` }));

export default function MainSection() {
  const [query, setQuery] = useState('');
  const [open, toggle] = useSingleOpen(1);
  const visible = useMemo(() => FAQS.filter((f) => matchesQuery(f.text, query)), [query]);

  return (
    <>
      <div className="flex gap-[24px] items-start px-[72px] relative size-full">
      <div className="flex flex-col gap-[10px] items-start justify-center relative shrink-0">
        <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid flex flex-col gap-[32px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[306px]">
          <SupportSearchForm id="faq-list-q" query={query} onQueryChange={setQuery} empty={visible.length === 0} />
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
        <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>What are you looking for?</h2>
        <div className="content-center flex flex-wrap gap-[16px] items-center w-full">
          <p className="font-['Inter'] font-normal leading-[1.5] text-[#111] text-[16px] whitespace-nowrap">Popular:</p>
          {POPULAR.map((t) => (
            <button key={t} type="button" onClick={() => setQuery(t)} className={POPULAR_CLASS}>{t}</button>
          ))}
        </div>
        <div className="bg-white border border-[#f3f4f6] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start p-[41px] relative rounded-[8px] shrink-0 w-[886.05px]">
          <div id="faq-list" className="flex flex-col items-start w-full">
            {visible.map((f) => (
              <AccordionItem key={f.i} first={f.i === 0} open={open === f.i} onToggle={() => toggle(f.i)} question={f.q}>
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
