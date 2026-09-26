import { Link } from 'react-router-dom';
import JobBoard, { type JobPosting } from '@/lib/core-job-board';
import img834d5bd6af16 from '@/assets/834d5bd6af16.svg';
import img6e2613212014 from '@/assets/6e2613212014.svg';
import img870947276369 from '@/assets/870947276369.svg';

const JOBS: JobPosting[] = [
  { title: 'Software Engineer', location: 'Noida, India', experience: '2 - 4 Years' },
  { title: 'DevOps Engineer', location: 'Noida, India', experience: '3 - 5 Years' },
  { title: 'Backend Developer', location: 'Noida, India', experience: '2 - 4 Years' },
];

const CARD_CLASS = "group bg-white border border-[#e5e7eb] border-solid hover:border-[#fd022c] transition-colors flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[200px] pb-[33px] pt-[25px] px-[25px] relative rounded-[12px]";

export default function JobsSection() {
  return (
    <>
      <div className="jobs flex flex-col items-start px-[72px] py-[120px] relative size-full">
        <div className="flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full">
          <p className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">Find your place</p>
          <JobBoard
            jobs={JOBS}
            cardTo="/career"
            cardClassName={CARD_CLASS}
            icons={{ location: img834d5bd6af16, experience: img6e2613212014, arrow: img870947276369 }}
          />
          <div className="flex items-start justify-center pt-[8px] relative shrink-0 w-full">
            <Link to="/career" className="cursor-pointer flex items-center px-[40px] py-[16px] rounded-[5px] shrink-0 hover:bg-[#fff1f2] transition-colors">
              <span className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[18px] text-center whitespace-nowrap">View All Openings</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
