import { useRef, useState, type FormEvent } from 'react';
import img66467de08ea5 from '@/assets/66467de08ea5.webp';

interface NewsletterStatus {
  text: string;
  color: string;
}

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<NewsletterStatus | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus({ text: 'Enter a valid email address, like name@company.com.', color: '#ffb3bd' });
      inputRef.current?.focus();
      return;
    }
    setStatus({ text: 'Subscribed. Watch your inbox for the next issue.', color: '#fff' });
    setEmail('');
  };

  return (
    <>
      <div className="flex gap-[156px] items-center pl-[200px] pr-[180px] py-[48px] relative rounded-[48px] size-full" style={{ backgroundImage: "linear-gradient(56.58deg, rgb(10, 6, 7) 1.41%, rgb(60, 0, 8) 98.31%)" }}>
        <div className="flex flex-col gap-[16px] items-center relative shrink-0 w-[736px]">
          <div className="flex flex-col gap-[16px] items-start w-full">
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[32px] text-white w-full">Stay in the loop</h2>
            <div className="opacity-90 font-['Inter'] text-[16px] text-white w-full">
              <p className="leading-[1.5] mb-0">Sign up for our newsletter to receive the latest product news,</p>
              <p className="leading-[1.5]">security tips, and exclusive offers.</p>
            </div>
          </div>
          <form className="flex items-center pt-[16px] w-full" onSubmit={handleSubmit}>
            <div className="bg-[rgba(79,76,76,0.3)] border border-[#de2832] border-solid flex gap-[24px] items-center p-[8px] rounded-[80px] shrink-0">
              <label className="sr-only" htmlFor="nl-email">Email address</label>
              <input ref={inputRef} id="nl-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="bg-[rgba(79,76,76,0.3)] h-[50px] px-[16px] py-[8px] rounded-[80px] w-[322px] font-['Inter'] text-[16px] text-white placeholder:text-white outline-none focus:ring-2 focus:ring-[#fd022c]" />
              <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] cursor-pointer flex items-center justify-center px-[32px] py-[12px] rounded-[9000px] font-['Inter'] font-medium leading-[24px] text-[16px] text-white whitespace-nowrap">Subscribe</button>
            </div>
            <p className="nl-msg pointer-events-none absolute bottom-[14px] left-[208px] font-['Inter'] text-[14px]" aria-live="polite" style={status ? { color: status.color } : undefined}>{status?.text}</p>
          </form>
        </div>
        <div className="absolute h-[375px] left-[785.5px] top-[-100.42px] w-[523px] pointer-events-none">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute left-[0.29%] max-w-none size-full top-[5.39%]" src={img66467de08ea5} /></div>
        </div>
      </div>
    </>
  );
}
