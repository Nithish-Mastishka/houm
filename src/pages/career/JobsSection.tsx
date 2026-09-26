import JobBoard, { type JobPosting } from '@/lib/core-job-board';
import img465bb1574973 from '@/assets/465bb1574973.svg';
import img716f9c4e0f6c from '@/assets/716f9c4e0f6c.svg';
import imge5c3a2d059d5 from '@/assets/e5c3a2d059d5.svg';

const JOBS: JobPosting[] = [
  { title: 'Software Engineer', location: 'Noida, India', experience: '2 - 4 Years' },
  { title: 'DevOps Engineer', location: 'Noida, India', experience: '3 - 5 Years' },
  ...Array.from({ length: 10 }, (): JobPosting => ({ title: 'Backend Developer', location: 'Noida, India', experience: '2 - 4 Years' })),
];

const CARD_CLASS = "group bg-white border border-[#e5e7eb] border-solid hover:border-[#fd022c] transition-colors flex flex-col gap-[16px] items-start min-w-[200px] pb-[33px] pt-[25px] px-[25px] relative rounded-[12px] shrink-0 w-[calc((100%-48px)/3)]";

export default function JobsSection() {
  return (
    <>
      <div className="jobs flex flex-col items-start overflow-clip px-[72px] relative size-full">
        <div className="flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full">
          <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[612px]">
            <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">Find your place</p>
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] w-full">Build the Future of Security</h2>
          </div>
          <JobBoard
            jobs={JOBS}
            cardTo="/contact"
            cardClassName={CARD_CLASS}
            icons={{ location: img465bb1574973, experience: img716f9c4e0f6c, arrow: imge5c3a2d059d5 }}
          />
        </div>
      </div>
    </>
  );
}
