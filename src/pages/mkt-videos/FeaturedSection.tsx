import { InlineNote, InlineNoteButton, MKT_VIDEO_NOTE, useInlineNote } from '@/lib/mkt-inline-note';
import img12840d9e23a5 from '@/assets/12840d9e23a5.webp';
import img0af05d7b7e3c from '@/assets/0af05d7b7e3c.svg';
import imgd8dc4ba9e6b3 from '@/assets/d8dc4ba9e6b3.svg';
import img982122b47cbd from '@/assets/982122b47cbd.svg';

export default function FeaturedSection() {
  const note = useInlineNote();
  return (
    <>
      <section className="vid content-stretch flex gap-[21px] items-center relative size-full">
        <div className="h-[336px] relative rounded-[24px] shrink-0 w-[639px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[24px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={img12840d9e23a5} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[631px]">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter'] font-bold leading-[20px] not-italic text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">FEATURED CAMPAIGN</p>
              <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Smarter Security.<br />Stronger Protection. Always.</h2>
            </div>
            <p className="font-['Inter'] font-normal leading-[1.5] not-italic text-[#5f6368] text-[16px] whitespace-nowrap">HOUM delivers intelligent security solutions that protect what matters most.</p>
            <div className="content-stretch flex gap-[23px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <span className="block relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img0af05d7b7e3c} /></span>
                <p className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#3f4347] text-[16px] whitespace-nowrap">Brand Campaign</p>
              </div>
              <span className="block relative shrink-0 size-[8px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgd8dc4ba9e6b3} /></span>
              <p className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#3f4347] text-[16px] whitespace-nowrap">02:18</p>
            </div>
          </div>
          <InlineNoteButton note={note} message={MKT_VIDEO_NOTE} className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors content-stretch flex items-center justify-center px-[40px] py-[16px] relative rounded-[9000px] shrink-0 cursor-pointer font-['Inter'] font-medium leading-[1.2] not-italic text-[18px] text-center text-white whitespace-nowrap">Watch Video</InlineNoteButton>
          <InlineNote note={note} className="dl-note absolute bottom-[-24px] left-0 font-['Inter'] text-[12px] leading-[16px] text-[#b51f27] opacity-0 transition-opacity" />
        </div>
        <InlineNoteButton note={note} message={MKT_VIDEO_NOTE} aria-label="Play video" className="absolute left-[272px] size-[96px] top-[120px] cursor-pointer hover:scale-105 transition-transform">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img982122b47cbd} />
        </InlineNoteButton>
      </section>
    </>
  );
}
