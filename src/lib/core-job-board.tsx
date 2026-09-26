import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface JobPosting {
  title: string;
  location: string;
  experience: string;
}

export interface JobBoardIcons {
  location: string;
  experience: string;
  arrow: string;
}

const JOB_TEAMS = ['Engineering', 'Sales', 'Marketing', 'Operations', 'Support', 'Corporate'] as const;
type JobTeam = (typeof JOB_TEAMS)[number];

/** Only the Engineering team has open positions; other tabs show the empty note. */
const TEAM_WITH_OPENINGS: JobTeam = 'Engineering';

const TAB_BASE = "job-tab hover:text-[#fd022c] cursor-pointer flex flex-col items-center justify-center px-[32px] py-[12px] rounded-[28px] shrink-0 font-['Inter'] font-medium leading-[1.2] text-[14px] text-center whitespace-nowrap transition-colors";

interface JobBoardProps {
  jobs: JobPosting[];
  cardTo: string;
  cardClassName: string;
  icons: JobBoardIcons;
}

function JobCard({ job, to, className, icons }: { job: JobPosting; to: string; className: string; icons: JobBoardIcons }) {
  return (
    <Link to={to} className={className}>
      <h4 className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] w-full">{job.title}</h4>
      <div className="content-center flex flex-wrap gap-[24px] items-center relative w-full font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] whitespace-nowrap">
        <span className="flex gap-[8px] items-center"><span className="relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icons.location} /></span>{job.location}</span>
        <span className="flex gap-[8px] items-center"><span className="relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icons.experience} /></span>{job.experience}</span>
      </div>
      <span className="absolute bottom-[calc(41.8%-0.16px)] opacity-0 group-hover:opacity-100 transition-opacity right-[24px] top-[calc(41.8%-0.16px)]"><span className="relative block size-[20px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icons.arrow} /></span></span>
    </Link>
  );
}

/** Team tab bar + job cards box (shared by Career and Working With Us). */
export default function JobBoard({ jobs, cardTo, cardClassName, icons }: JobBoardProps) {
  const [team, setTeam] = useState<JobTeam>(TEAM_WITH_OPENINGS);
  const hasOpenings = team === TEAM_WITH_OPENINGS;

  return (
    <>
      <div className="border-[#e5e5e5] border-b border-solid flex items-start pb-[17px] relative shrink-0 w-full" role="tablist">
        {JOB_TEAMS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={t === team}
            onClick={() => setTeam(t)}
            className={`${TAB_BASE} ${t === team ? 'bg-[#f22f38] text-white' : 'text-[#5f6368]'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="border border-[#e5e5e5] border-solid relative shrink-0 w-full py-[16px]">
        {hasOpenings ? (
          <div className="job-cards content-start flex flex-wrap gap-[24px] items-start justify-center w-full">
            {jobs.map((job, i) => <JobCard key={i} job={job} to={cardTo} className={cardClassName} icons={icons} />)}
          </div>
        ) : (
          <p className="job-empty font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] text-center py-[32px]">No open positions in this team right now. Check back soon.</p>
        )}
      </div>
    </>
  );
}
