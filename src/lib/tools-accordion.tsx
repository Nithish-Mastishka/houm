import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import imgSearch from '@/assets/63764519bdcf.svg';
import imgChevron from '@/assets/3854d369df23.svg';

/** Case-insensitive "contains" match used by the support search filters; an empty query matches everything. */
export function matchesQuery(text: string, query: string): boolean {
  const q = query.trim().toLowerCase();
  return !q || text.toLowerCase().includes(q);
}

/** One-open-at-a-time accordion state: clicking the open item closes it, clicking another opens it instead. */
export function useSingleOpen(initial: number | null) {
  const [open, setOpen] = useState<number | null>(initial);
  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));
  return [open, toggle] as const;
}

interface SupportSearchFormProps {
  /** Input id, e.g. `faq-list-q`. */
  id: string;
  query: string;
  onQueryChange: (q: string) => void;
  /** Show the "No matching questions found." note. */
  empty: boolean;
}

/** Sidebar search box of the FAQ / troubleshooting / compatibility pages. Filters live while typing. */
export function SupportSearchForm({ id, query, onQueryChange, empty }: SupportSearchFormProps) {
  return (
    <form className="flex flex-col gap-[16px] items-start w-full" onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
      <input id={id} type="search" placeholder="Search your problem..." aria-label="Search your problem" value={query} onChange={(e: ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)} className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] font-normal text-[#111] text-[16px] leading-[1.5] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
      <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[9000px] shrink-0">
        <span className="overflow-clip relative shrink-0 size-[24px]"><span className="absolute bottom-1/4 left-[16.67%] right-1/4 top-[16.67%]"><span className="absolute inset-[-5.36%_-5.35%_-5.36%_-5.36%]"><img alt="" className="block max-w-none size-full" src={imgSearch} /></span></span></span>
        <span className="font-['Inter'] font-medium leading-[24px] text-[16px] text-center text-white whitespace-nowrap">Search</span>
      </button>
      <p className={`${empty ? '' : 'hidden '}font-['Inter'] text-[#5f6368] text-[12px] leading-[1.5]`}>No matching questions found.</p>
    </form>
  );
}

interface AccordionItemProps {
  /** The first item has no top border. */
  first: boolean;
  open: boolean;
  onToggle: () => void;
  question: string;
  children: ReactNode;
}

/** FAQ-style accordion row; the `open` class drives the `[.open_&]` styles. */
export function AccordionItem({ first, open, onToggle, question, children }: AccordionItemProps) {
  const base = first
    ? 'acc-item py-[20px] flex flex-col items-start relative shrink-0 w-full'
    : 'acc-item border-[#f3f4f6] border-solid border-t pt-[21px] pb-[20px] flex flex-col items-start relative shrink-0 w-full';
  return (
    <div className={open ? `${base} open` : base}>
      <button type="button" aria-expanded={open} onClick={onToggle} className="cursor-pointer flex items-center justify-between w-full text-left group">
        <span className="acc-q font-['Inter'] font-medium leading-[24px] text-[#3f4347] text-[16px] [.open_&]:text-[#b51f27] group-hover:text-[#b51f27]">{question}</span>
        <span className="flex flex-col h-[24px] items-start pl-[16px] shrink-0 w-[40px]"><span className="bg-[#fff1f2] flex items-center justify-center rounded-[9999px] shrink-0 size-[24px] transition-transform [.open_&]:rotate-180"><span className="h-[5px] relative shrink-0 w-[8.75px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevron} /></span></span></span>
      </button>
      <div className="acc-a hidden [.open_&]:flex flex-col gap-[16px] items-start pl-[16px] pr-[32px] pt-[14.75px] w-full">{children}</div>
    </div>
  );
}
