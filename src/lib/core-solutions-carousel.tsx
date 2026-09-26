import { useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface SolutionCard {
  to: string;
  image: string;
  title: string;
  text: string;
}

interface SolutionsCarouselProps {
  rootClassName: string;
  header: ReactNode;
  scrollIcon: string;
  cardArrow: string;
  cards: SolutionCard[];
}

function SolutionCardLink({ card, arrow }: { card: SolutionCard; arrow: string }) {
  return (
    <Link to={card.to} className="group snap-start bg-[#fff8f8] border border-[rgba(227,190,186,0.3)] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col h-[390px] items-start p-px relative rounded-[24px] shrink-0 w-[306px]">
      <div className="h-[156px] relative rounded-[24px] w-full overflow-hidden"><img alt="" className="absolute max-w-none object-cover size-full" src={card.image} /><div className="absolute bg-gradient-to-b from-[rgba(255,87,87,0.06)] inset-0 to-[rgba(255,87,87,0.2)]" /></div>
      <div className="flex flex-col gap-[8px] items-end p-[24px] w-full flex-1">
        <div className="flex flex-col gap-[8px] items-start w-full"><p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">{card.title}</p><p className="font-['Inter'] leading-[1.5] text-[#5f6368] text-[16px] w-full">{card.text}</p></div>
        <img alt="" className="size-[48px] mt-auto rotate-180 -scale-y-100 transition-transform group-hover:translate-x-1" src={arrow} />
      </div>
    </Link>
  );
}

/** Solutions card carousel with the "scroll" button: advances one card, wraps to start at the end. */
export default function SolutionsCarousel({ rootClassName, header, scrollIcon, cardArrow, cards }: SolutionsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    const atEnd = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4;
    t.scrollBy({ left: atEnd ? -t.scrollWidth : 330, behavior: 'smooth' });
  };

  return (
    <div className={rootClassName}>
      <div className="content-end flex flex-wrap gap-[48px] items-end justify-center w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px">
          {header}
        </div>
        <button type="button" aria-label="Scroll solutions" onClick={handleScroll} className="block cursor-pointer relative shrink-0 size-[40px] -rotate-90 hover:scale-110 transition-transform">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={scrollIcon} />
        </button>
      </div>
      <div className="flex flex-col gap-[40px] items-center justify-center overflow-clip relative w-[1296px]">
        <div ref={trackRef} className="sol-track flex gap-[24px] items-center w-[1296px] overflow-x-auto snap-x [scrollbar-width:none] pb-[12px]">
          {cards.map((card) => <SolutionCardLink key={card.to} card={card} arrow={cardArrow} />)}
        </div>
      </div>
    </div>
  );
}
