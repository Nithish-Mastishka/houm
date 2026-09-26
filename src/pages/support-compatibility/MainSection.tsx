import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SupportSearchForm, matchesQuery } from '@/lib/tools-accordion';
import img682c1d5da875 from '@/assets/682c1d5da875.svg';
import img46ed48ef26dd from '@/assets/46ed48ef26dd.svg';
import imgb20f693b7a7b from '@/assets/b20f693b7a7b.svg';
import imge63391a1c03e from '@/assets/e63391a1c03e.svg';
import imgbe15c76cf36f from '@/assets/be15c76cf36f.svg';
import img5277f1e3be62 from '@/assets/5277f1e3be62.svg';

const VALUES = [
  { title: 'Innovation', text: 'Smart technology designed for evolving security needs.' },
  { title: 'Reliability', text: 'Dependable solutions built for continuous protection.' },
  { title: 'Intelligence', text: 'Connected systems that turn security data into meaningful insights.' },
  { title: 'Trust', text: 'Solutions designed around people, privacy and long-term partnerships.' },
];

export default function MainSection() {
  const [query, setQuery] = useState('');
  const visible = useMemo(() => VALUES.filter((v) => matchesQuery(`${v.title}${v.text}`, query)), [query]);

  return (
    <>
      <div className="flex gap-[24px] items-start px-[72px] relative size-full">
      <div className="flex flex-col gap-[10px] items-start justify-center relative shrink-0">
        <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid flex flex-col gap-[32px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[306px]">
          <SupportSearchForm id="compat-list-q" query={query} onQueryChange={setQuery} empty={visible.length === 0} />
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
      <div id="compat-list" className="flex flex-col gap-[8px] items-start relative shrink-0 w-[966px]">
        <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase w-full">About HOUM</p>
        <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Building a Safer, Smarter World</h2>
        <div className="font-['Inter'] font-normal pt-[16px] text-[#5f6368] text-[16px] w-full">
          <p className="leading-[1.5] mb-0">Security is an ongoing process. The HOUM Security Advisory Center keeps customers, partners, and security professionals informed about important security findings that may affect HOUM products, software, or connected technologies.</p>
          <p className="leading-[1.5]">Our advisories are intended to make complex security information easier to understand and act upon. Depending on the issue, an advisory may provide:</p>
        </div>
        <ul className="flex flex-col gap-[24px] items-start py-[24px] w-full">{visible.map((v) => (
            <li key={v.title} className="flex items-start w-full"><span className="flex items-center justify-center shrink-0 size-[24px]"><span className="border-[#fd022c] border-[1.5px] border-solid flex items-center justify-center p-[1.5px] rounded-[9999px] shrink-0 size-[20px]"><span className="relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img5277f1e3be62} /></span></span></span><span className="flex gap-[8px] items-center pl-[16px] text-[16px] whitespace-nowrap"><span className="font-['Inter'] font-medium leading-[1.2] text-[#111]">{v.title}</span><span className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368]">{v.text}</span></span></li>
          ))}</ul>
      </div>
      </div>
    </>
  );
}
