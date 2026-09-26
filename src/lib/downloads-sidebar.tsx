import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import imgSearch from '@/assets/f414403b0fb1.svg';
import imgChevronDown from '@/assets/629c9738e513.svg';
import imgChevron from '@/assets/a9369eac02e6.svg';
import imgPhone from '@/assets/76e80b2263bc.svg';
import imgMail from '@/assets/8b753f114614.svg';
import imgChat from '@/assets/23bd1491f04c.svg';

interface CategoryLink {
  to: string;
  label: string;
}

interface CategoryGroup {
  label: string;
  /** The first group uses a plain chevron and centre alignment; the others a flipped chevron. */
  first?: boolean;
  links: CategoryLink[];
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    label: 'Download',
    first: true,
    links: [
      { to: '/support-user-manual', label: 'User Manual / QIG' },
      { to: '/support-firmware', label: 'Firmware' },
      { to: '/support-software', label: 'Software' },
      { to: '/support-software-datasheet', label: 'Software Datasheet' },
      { to: '/support-certificate', label: 'Certificate' },
      { to: '/support-sira-certificate', label: 'SIRA Certificate' },
    ],
  },
  {
    label: 'Tools',
    links: [
      { to: '/support-lens-calculator', label: 'Lens Calculator' },
      { to: '/support-hdd-calculator', label: 'HDD & Bandwidth Calculator' },
      { to: '/support-carkam-calculator', label: 'CarKam Storage Calculator' },
    ],
  },
  {
    label: 'Others',
    links: [
      { to: '/support-service', label: 'Service' },
      { to: '/support-warranty', label: 'Warranty Document' },
      { to: '/support-network', label: 'Service Network' },
      { to: '/support-faqs', label: 'FAQs' },
      { to: '/support-technical-videos', label: 'Technical Videos' },
      { to: '/support-compatibility', label: 'Compatibility List' },
      { to: '/support-troubleshooting', label: 'Troubleshooting' },
      { to: '/support-security-advisories', label: 'Security Advisories' },
    ],
  },
];

const LINK_BASE = "block rounded-[6px] px-[12px] py-[8px] font-['Inter'] font-medium text-[15px] leading-[20px]";

function ModelSearch({ inputId }: { inputId: string }) {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = value.trim();
    setMessage(v ? `Searching for “${v}” will be available on the live site.` : 'Please enter a model number.');
  };

  return (
    <form onSubmit={onSubmit} className="bg-white border border-[rgba(0,0,0,0.1)] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <label htmlFor={inputId} className="sr-only">Model number</label>
          <input id={inputId} type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your model no. .." className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] relative rounded-[8px] shrink-0 w-full font-['Inter'] font-normal text-[16px] leading-[1.5] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
        </div>
        <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[9000px] shrink-0">
          <span className="overflow-clip relative shrink-0 size-[24px]">
            <span className="absolute bottom-1/4 left-[16.67%] right-1/4 top-[16.67%]">
              <span className="absolute inset-[-5.36%_-5.35%_-5.36%_-5.36%]"><img alt="" className="block max-w-none size-full" src={imgSearch} /></span>
            </span>
          </span>
          <span className="font-['Inter'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Search</span>
        </button>
      </div>
      <p className="absolute left-0 top-[calc(100%+4px)] z-20 w-full bg-white border border-[#f2d3d0] rounded-[8px] px-[12px] py-[8px] text-[13px] leading-[1.4] text-[#3f4347] font-['Inter'] font-normal shadow-[0px_4px_12px_rgba(0,0,0,0.08)]" style={{ display: message ? 'block' : 'none' }} role="status">{message}</p>
    </form>
  );
}

function Categories({ active }: { active: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[8px] shrink-0 w-[306px] z-10">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="border-[rgba(0,0,0,0.1)] border-b border-solid content-stretch flex items-center justify-center pb-[16px] relative shrink-0 w-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins'] leading-[1.2] min-w-px not-italic relative text-[#111] text-[24px]">Categories</p>
        </div>
        {CATEGORY_GROUPS.map((group, i) => {
          const open = openIndex === i;
          return (
            <div key={group.label} className="relative shrink-0 w-full">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : i)}
                className={`content-stretch cursor-pointer flex gap-[4px] ${group.first ? 'items-center' : 'items-start'} relative w-[144px]`}
              >
                <span className="[word-break:break-word] font-['Inter'] font-medium leading-[24px] not-italic relative shrink-0 text-[#111] text-[16px] text-left whitespace-nowrap">{group.label}</span>
                {group.first ? (
                  <span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} /></span>
                ) : (
                  <span className="flex items-center justify-center relative shrink-0"><span className="-scale-y-100 flex-none rotate-180"><span className="block relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} /></span></span></span>
                )}
              </button>
              <div className="absolute left-[-8px] top-[30px] z-30 w-[274px] bg-white border border-[#e5e5e5] rounded-[8px] p-[6px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)]" style={{ display: open ? 'block' : 'none' }}>
                {group.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={link.to === active ? `${LINK_BASE} text-[#fd022c] bg-[#fff1f2]` : `${LINK_BASE} text-[#3f4347] hover:bg-[#fff1f2] hover:text-[#fd022c]`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CARD = 'bg-white border border-[#f2d3d0] border-solid content-stretch flex gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full hover:shadow-[0px_4px_12px_rgba(0,0,0,0.06)] transition-shadow';
const CARD_TITLE = "font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[14px] whitespace-nowrap";
const CARD_FOOT = "pt-[2px] font-['Inter'] font-normal leading-[1.5] not-italic text-[#5f6368] text-[12px] whitespace-nowrap";

function ContactCards() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full">
      <a href="tel:1800120455566" className={CARD} aria-label="Call us">
        <span className="relative shrink-0 size-[40px]"><span className="absolute inset-[-2.5%_-5%_-7.5%_-5%]"><img alt="" className="block max-w-none size-full" src={imgPhone} /></span></span>
        <span className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
          <span className={CARD_TITLE}>Call Us</span>
          <span className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#fd022c] text-[18px] whitespace-nowrap">1800 120 455566</span>
          <span className={CARD_FOOT}>Mon - Sat | 10:00 AM - 06:00 PM</span>
        </span>
      </a>
      <a href="mailto:support@houmsecurity.com" className={CARD} aria-label="Email support">
        <span className="relative shrink-0 size-[40px]"><span className="absolute inset-[-2.5%_-5%_-7.5%_-5%]"><img alt="" className="block max-w-none size-full" src={imgMail} /></span></span>
        <span className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
          <span className={CARD_TITLE}>Email Support</span>
          <span className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#3f4347] text-[14px] whitespace-nowrap">support@houmsecurity.com</span>
          <span className={CARD_FOOT}>We reply within 24 hours</span>
        </span>
      </a>
      <Link to="/support-service" className={CARD} aria-label="Live chat">
        <span className="bg-white border border-[#fee2e2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"><span className="relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChat} /></span></span>
        <span className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
          <span className={CARD_TITLE}>Live Chat</span>
          <span className="font-['Inter'] font-normal leading-[20px] not-italic text-[#5f6368] text-[14px] whitespace-nowrap">Chat with our support team</span>
          <span className={CARD_FOOT}>Available on website</span>
        </span>
      </Link>
    </div>
  );
}

interface SupportSidebarProps {
  /** Route of the current page; its link in the Download dropdown is highlighted. */
  active: string;
  /** id of the model-number input. Omit to hide the search box. */
  searchId?: string;
  /** How many times the contact card stack is repeated (the design repeats it on some pages). */
  contactBlocks?: number;
}

/** Left panel of the support download pages: model search, Categories dropdowns, contact cards. */
export function SupportSidebar({ active, searchId, contactBlocks = 1 }: SupportSidebarProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full">
      {searchId && <ModelSearch inputId={searchId} />}
      <Categories active={active} />
      {Array.from({ length: contactBlocks }, (_, i) => <ContactCards key={i} />)}
    </div>
  );
}
