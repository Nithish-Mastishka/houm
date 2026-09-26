import { MktChips } from '@/lib/mkt-chips';
import { InlineNote, InlineNoteButton, MKT_VIDEO_NOTE, useInlineNote } from '@/lib/mkt-inline-note';
import img24a4101b2a4c from '@/assets/24a4101b2a4c.webp';
import imgb7a47d22285b from '@/assets/b7a47d22285b.svg';

const CATEGORIES = ['All Videos', 'Product Campaigns', 'Brand Films', 'Advertisements', 'Events & Campaigns', 'Partnerships'] as const;

const VIDEO_IDS = Array.from({ length: 8 }, (_, id) => id);

function VideoCard() {
  const note = useInlineNote();
  return (
    <article className="vid bg-white border border-[rgba(227,190,186,0.3)] border-solid content-stretch drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col h-[487px] items-start p-px relative rounded-[24px] shrink-0 self-stretch">
      <div className="h-[304px] relative rounded-[24px] shrink-0 w-full">
        <img alt="Smarter Security.<br />Stronger Protection. Always. video thumbnail" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={img24a4101b2a4c} />
      </div>
      <div className="content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#fd022c] text-[14px] whitespace-nowrap">PRODUCT CAMPAIGN</p>
            <h3 className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[18px] w-full">Smarter Security.<br />Stronger Protection. Always.</h3>
          </div>
          <p className="font-['Inter'] font-normal leading-[1.5] not-italic text-[#5f6368] text-[16px] w-full">HOUM delivers intelligent security solutions that protect what matters most.</p>
        </div>
      </div>
      <InlineNoteButton note={note} message={MKT_VIDEO_NOTE} aria-label="Play Smarter Security. Stronger Protection. Always." className="absolute left-[171px] size-[72px] top-[116px] cursor-pointer hover:scale-105 transition-transform">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgb7a47d22285b} />
      </InlineNoteButton>
      <div className="absolute bg-[rgba(17,17,17,0.8)] right-[12px] rounded-[4px] top-[269px] flex items-center justify-center px-[4px] py-[2px]">
        <p className="font-['Inter'] font-medium leading-[1.2] not-italic text-[16px] text-white whitespace-nowrap">02:18</p>
      </div>
      <InlineNote note={note} className="dl-note absolute bottom-[12px] left-[24px] font-['Inter'] text-[12px] leading-[16px] text-[#b51f27] opacity-0 transition-opacity" />
    </article>
  );
}

export default function ListSection() {
  return (
    <>
      <section className="content-stretch flex flex-col gap-[48px] items-start justify-center relative size-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" role="group" aria-label="Video categories">
      <MktChips labels={CATEGORIES} />
        </div>
        <div className="gap-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] relative shrink-0 w-full">
      {VIDEO_IDS.map((id) => (
        <VideoCard key={id} />
      ))}
        </div>
      </section>
    </>
  );
}
