import { Link } from 'react-router-dom';
import { MktChips } from '@/lib/mkt-chips';
import img27cce24c8121 from '@/assets/27cce24c8121.webp';
import img3b6f8b99923d from '@/assets/3b6f8b99923d.png';
import imga3bd0d27dd18 from '@/assets/a3bd0d27dd18.svg';
import img276b74ecfd54 from '@/assets/276b74ecfd54.webp';
import img4eb338c82262 from '@/assets/4eb338c82262.webp';

const CATEGORIES = ['All ', 'Oil & Gas', 'Law Enforcement', 'Hospitality & Healthcare', 'Real Estate', 'Retail', 'Banking & Finance', 'Industrial', 'Safe City', 'Smart Traffic', 'Transport'] as const;

interface CaseStudyCardItem {
  id: number;
  image: string;
  imageWrapClass: string;
  linkHeight: string;
  bodyClass: string;
}

const CASE_STUDIES: CaseStudyCardItem[] = [
  { id: 0, image: img276b74ecfd54, imageWrapClass: 'flex-[1_0_0] min-h-px relative w-full', linkHeight: 'h-[440px]', bodyClass: 'flex-[1_0_0] min-h-px relative w-[414px]' },
  { id: 1, image: img4eb338c82262, imageWrapClass: 'h-[196px] shrink-0 relative w-full', linkHeight: 'h-[440px]', bodyClass: 'flex-[1_0_0] min-h-px relative w-[414px]' },
  { id: 2, image: img4eb338c82262, imageWrapClass: 'h-[196px] shrink-0 relative w-full', linkHeight: 'h-[440px]', bodyClass: 'flex-[1_0_0] min-h-px relative w-[414px]' },
  { id: 3, image: img4eb338c82262, imageWrapClass: 'h-[196px] shrink-0 relative w-full', linkHeight: 'h-[440px]', bodyClass: 'flex-[1_0_0] min-h-px relative w-[414px]' },
  { id: 4, image: img4eb338c82262, imageWrapClass: 'h-[196px] shrink-0 relative w-full', linkHeight: '', bodyClass: 'h-[242px] shrink-0 relative w-[414px]' },
  { id: 5, image: img4eb338c82262, imageWrapClass: 'h-[196px] shrink-0 relative w-full', linkHeight: 'h-[440px]', bodyClass: 'flex-[1_0_0] min-h-px relative w-[414px]' },
];

function CaseStudyCard({ item }: { item: CaseStudyCardItem }) {
  return (
    <Link to="/mkt-case-study-detail" className={`group bg-white border border-[rgba(227,190,186,0.3)] border-solid content-stretch flex flex-col ${item.linkHeight} items-start overflow-clip p-px relative rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_28px_0px_rgba(0,0,0,0.1)] transition-shadow shrink-0 w-[416px]`}>
      <div className={item.imageWrapClass}>
        <img alt="How AI Is Changing Modern Video Surveillance" className="absolute block inset-0 max-w-none size-full object-cover" src={item.image} />
      </div>
      <div className={item.bodyClass}>
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full font-['Inter'] font-normal leading-[20px] not-italic text-[#b51f27] text-[14px] whitespace-nowrap">
            <p>SECURITY INSIGHTS</p>
            <span className="bg-[#b51f27] relative rounded-[9999px] shrink-0 size-[4px]" />
            <p>AUG 18, 2026</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <h3 className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[18px] w-full group-hover:text-[#fd022c] transition-colors">How AI Is Changing Modern Video Surveillance</h3>
            <p className="font-['Inter'] font-normal leading-[1.5] not-italic overflow-hidden text-[#3f4347] text-[16px] text-ellipsis w-full line-clamp-2">Discover how AI-powered cameras are making surveillance smarter, faster and more proactive.</p>
          </div>
          <span className="content-stretch flex gap-[8px] items-center pr-[24px] py-[8px] relative rounded-[9000px] shrink-0 font-['Inter'] font-medium leading-[24px] not-italic text-[#fd022c] text-[16px] whitespace-nowrap">Read More</span>
        </div>
      </div>
      <div className="absolute backdrop-blur-[2px] bg-[#111] left-[339.48px] rounded-[4px] top-[16px] flex items-center justify-center px-[2px]">
        <div className="h-[29.826px] relative shrink-0 w-[62.857px]"><img alt="HOUM" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3b6f8b99923d} /></div>
      </div>
    </Link>
  );
}

export default function ListSection() {
  return (
    <>
      <section className="content-stretch flex flex-col gap-[120px] items-center px-[72px] relative size-full">
        <div className="content-center flex flex-wrap gap-[24px] items-center justify-center relative shrink-0 w-full">
          <div className="flex-[1_0_0] h-[336px] min-w-[416px] relative rounded-[24px]">
            <img alt="HOUM security cameras and control tablet" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={img27cce24c8121} />
          </div>
          <div className="absolute backdrop-blur-[2px] bg-[#111] content-stretch flex items-center justify-center left-[548px] px-[2px] rounded-[4px] top-[20px]">
            <div className="h-[29.826px] relative shrink-0 w-[62.857px]"><img alt="HOUM" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3b6f8b99923d} /></div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-[416px] relative">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Inter'] font-bold leading-[20px] not-italic text-[#fd022c] text-[14px] tracking-[1.4px] uppercase w-full">FEATURED CASE STUDY</p>
                <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Securing Critical Infrastructure with Intelligent Surveillance</h2>
              </div>
              <div className="content-center flex flex-wrap gap-[23px] items-center relative shrink-0 w-full font-['Inter'] font-medium leading-[1.2] not-italic text-[#3f4347] text-[16px] whitespace-nowrap">
                <p>Government</p>
                <span className="block relative shrink-0 size-[8px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imga3bd0d27dd18} /></span>
                <p>Large-Scale Deployment</p>
              </div>
              <p className="font-['Inter'] font-normal leading-[1.5] max-w-[672px] not-italic text-[#5f6368] text-[16px] w-full">A comprehensive HOUM surveillance ecosystem designed to improve visibility, strengthen monitoring, and protect critical assets.</p>
            </div>
            <Link to="/mkt-case-study-detail" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors content-stretch flex items-center justify-center px-[40px] py-[16px] relative rounded-[9000px] shrink-0 font-['Inter'] font-medium leading-[1.2] not-italic text-[18px] text-center text-white whitespace-nowrap">View Case Study</Link>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
          <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" role="group" aria-label="Industries">
      <MktChips labels={CATEGORIES} />
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
            <h2 className="font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[18px] w-full">All Case Studies</h2>
            <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full">
      {CASE_STUDIES.map((item) => (
        <CaseStudyCard key={item.id} item={item} />
      ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
