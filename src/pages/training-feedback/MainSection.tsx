import { useRef, useState, type FormEvent, type RefObject } from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation, type FormRules } from '@/lib/forms-validation';
import img1c7f05e6095f from '@/assets/1c7f05e6095f.svg';
import img26cefcbdcb31 from '@/assets/26cefcbdcb31.svg';

type FeedbackField = 'name' | 'company' | 'email' | 'phone';

const RULES: FormRules<FeedbackField> = {
  name: { required: 'Enter your full name.' },
  company: { required: 'Enter your company.' },
  email: { required: 'Enter your email address.', kind: 'email' },
  phone: { required: 'Enter your phone number.', kind: 'phone10' },
};

const STAR_VALUES = [1, 2, 3, 4, 5];

/** Overall rating labels; only the two ends are visible in the design. */
const OVERALL_LABELS = [
  { label: 'Very Poor', shown: true },
  { label: 'Poor', shown: false },
  { label: 'Average', shown: false },
  { label: 'Good', shown: false },
  { label: 'Excellent', shown: true },
];

const TOPICS = ['Product Quality', 'Service / Maintenance', 'Installation', 'Other', 'App / Software', 'Customer Support'];

interface Aspect {
  name: string;
  /** right padding from the design so each label wraps like the Figma frame */
  pad: string;
  lines: string[];
}

const ASPECTS: Aspect[] = [
  { name: 'Initial Contact', pad: '', lines: ['Initial Contact – How was your initial contact with HOUM?'] },
  { name: 'Responsiveness', pad: 'pr-[30.26px]', lines: ['Responsiveness – How did you rate our responsiveness to your', 'needs?'] },
  { name: 'Professionalism', pad: 'pr-[16.54px]', lines: ['Professionalism – How do you rate our professionalism in dealing', 'with you?'] },
  { name: 'Technical Support', pad: 'pr-[5.31px]', lines: ['Technical Support – How did you rate the technical competence of', 'our engineers?'] },
  { name: 'Product Quality', pad: 'pr-[37.26px]', lines: ['Product Quality – How do you rate our products, did they meet', 'your expectations?'] },
  { name: 'Service', pad: 'pr-[34.29px]', lines: ['Service – How do you rate our service on performance and our', 'commitment to meet your expectations?'] },
];

interface StarProps {
  value: number;
  label: string;
  rating: number;
  onRate: (value: number) => void;
  icon: string;
  size: string;
  buttonRef?: RefObject<HTMLButtonElement | null>;
}

function Star({ value, label, rating, onRate, icon, size, buttonRef }: StarProps) {
  const filled = value <= rating;
  return (
    <button ref={buttonRef} type="button" aria-pressed={filled} aria-label={label} onClick={() => onRate(value)} className={`star ${size} relative cursor-pointer hover:scale-110 transition-transform`}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
      <svg aria-hidden="true" viewBox="0 0 24 24" className={`absolute inset-0 size-full transition-opacity ${filled ? 'opacity-100' : 'opacity-0'}`}><polygon points="12,1.5 15.1,8 22.3,8.9 17,13.9 18.4,21 12,17.5 5.6,21 7,13.9 1.7,8.9 8.9,8" fill="#fd022c" /></svg>
    </button>
  );
}

export default function MainSection() {
  const form = useFormValidation(RULES, { consent: true });
  const { errors, field, borderStyle, status, setStatus, consent } = form;
  const [overall, setOverall] = useState(0);
  const [ratingError, setRatingError] = useState('');
  const [aspects, setAspects] = useState<Record<string, number>>({});
  const [topics, setTopics] = useState<string[]>(['Product Quality']);
  const [more, setMore] = useState('');
  const overallFirstStar = useRef<HTMLButtonElement>(null);

  const rateOverall = (value: number) => {
    setOverall(value);
    setRatingError('');
  };

  const toggleTopic = (topic: string) =>
    setTopics((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!overall) {
      e.preventDefault();
      setStatus('');
      setRatingError('Please rate your overall experience.');
      overallFirstStar.current?.focus();
      return;
    }
    setRatingError('');
    form.handleSubmit((_values, formEl) => {
      setStatus('Thank you for your feedback. It helps us serve you better.');
      formEl.reset();
      setOverall(0);
      setAspects({});
      setMore('');
    })(e);
  };

  return (
    <>
      <form noValidate className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[32px] items-start p-[24px] relative size-full" onSubmit={onSubmit}>
        <section className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Tell us about your experience</h2>
          <p className="font-['Inter'] font-normal leading-[1.5] text-[#3f4347] text-[16px] w-full">How would you rate your overall experience with HOUM?</p>
          <div className="rate rate-overall flex items-center justify-between max-w-[384px] pt-[8px] w-[384px]" role="group" aria-label="Overall experience rating">{OVERALL_LABELS.map((o, idx) => (
            <div key={o.label} className="flex flex-col gap-[7px] items-center">
              <Star value={idx + 1} label={o.label} rating={overall} onRate={rateOverall} icon={img1c7f05e6095f} size="h-[25.333px] w-[26.667px]" buttonRef={idx === 0 ? overallFirstStar : undefined} />
              <span className={`pb-[0.8px] font-['Inter'] font-medium leading-[16.8px] text-[12px] tracking-[0.12px] whitespace-nowrap ${o.shown ? 'text-[#605e5e]' : 'text-[transparent]'}`}>{o.label}</span>
            </div>
          ))}</div>
          <p className="rerr -mt-[8px] font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{ratingError}</p>
        </section>
        <div className="flex flex-wrap gap-[24px] items-start w-full">
          <div className="fld flex flex-col gap-[8px] items-start w-[608px]"><label htmlFor="fb-name" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Full Name *</label><input id="fb-name" type="text" {...field('name')} style={borderStyle('name')} placeholder="Enter your Full Name" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.name}</p></div>
          <div className="fld flex flex-col gap-[8px] items-start w-[608px]"><label htmlFor="fb-company" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Company *</label><input id="fb-company" type="text" {...field('company')} style={borderStyle('company')} placeholder="Enter your Company" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.company}</p></div>
          <div className="fld flex flex-col gap-[8px] items-start w-[608px]"><label htmlFor="fb-email" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Email *</label><input id="fb-email" type="email" {...field('email')} style={borderStyle('email')} placeholder="Enter your Email" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.email}</p></div>
          <div className="fld flex flex-col gap-[8px] items-start w-[608px]"><label htmlFor="fb-phone" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Phone Number *</label><div className="flex items-start w-full"><span className="bg-[#f6f4fc] flex h-[50px] items-center pl-[16px] pr-[12px] rounded-bl-[8px] rounded-tl-[8px] shrink-0 font-['Inter'] text-[16px] text-[#5f6368] leading-[1.5]">+91</span><input id="fb-phone" type="tel" inputMode="numeric" maxLength={10} {...field('phone')} style={borderStyle('phone')} placeholder="Enter your Phone Number" className="bx flex-[1_0_0] min-w-px bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-br-[8px] rounded-tr-[8px] font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /></div><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.phone}</p></div>
        </div>
        <section className="flex flex-col gap-[16px] items-start pt-px w-full">
          <h3 className="flex items-baseline gap-[4px] font-['Inter'] font-medium text-[#1a1c1c] text-[18px] leading-[1.2] whitespace-nowrap">What is your feedback about? <span className="font-['Inter'] font-normal text-[#605e5e] text-[14px] leading-[20px]">(Select all that apply)</span></h3>
          <div className="flex gap-[32px] items-center w-full">{TOPICS.map((t) => (
            <button key={t} type="button" aria-pressed={topics.includes(t)} onClick={() => toggleTopic(t)} className="border border-[#e5e5e5] border-solid flex items-center px-[17px] py-[13px] rounded-[8px] shrink-0 cursor-pointer hover:border-[#fd022c] aria-pressed:bg-[#fff8f8] aria-pressed:border-[#fd022c] font-['Inter'] font-medium leading-[19.6px] text-[#111] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">{t}</button>
          ))}</div>
        </section>
        <section className="flex flex-col gap-[16px] items-start w-full">
          <h3 className="font-['Inter'] font-medium leading-[1.2] text-[#1a1c1c] text-[18px] whitespace-nowrap h-[28.8px]">Please rate your experience with HOUM </h3>
          <div className="flex flex-col gap-[12px] items-start w-full">{ASPECTS.map((a) => (
            <div key={a.name} className="bg-white border border-[#d1d1d1] border-solid flex items-center justify-between p-[17px] rounded-[4px] w-full">
              <p className={`${a.pad} font-['Inter'] font-medium text-[#111] text-[16px] whitespace-nowrap`} role="group">{a.lines.map((l) => <span key={l} className="leading-[1.2] block">{l}</span>)}</p>
              <div className="rate flex gap-[8px] items-center" role="group" aria-label={`${a.name} rating`}>{STAR_VALUES.map((v) => (
                <Star key={v} value={v} label={`${v} ${v === 1 ? 'star' : 'stars'}`} rating={aspects[a.name] ?? 0} onRate={(n) => setAspects((prev) => ({ ...prev, [a.name]: n }))} icon={img26cefcbdcb31} size="h-[22.167px] w-[23.333px]" />
              ))}</div>
            </div>
          ))}</div>
        </section>
        <section className="flex flex-col gap-[16px] items-start w-full">
          <label htmlFor="fb-more" className="pb-[0.8px] font-['Inter'] font-medium leading-[1.2] text-[#1a1c1c] text-[18px] w-full">Please tell us more about your experience</label>
          <div className="pb-[6px] relative w-full">
            <textarea id="fb-more" maxLength={1000} placeholder="Share your feedback, suggestions or concerns..." value={more} onChange={(e) => setMore(e.target.value)} className="bg-white border border-[#d1d1d1] border-solid min-h-[160px] pb-[40px] pt-[17px] px-[17px] rounded-[4px] w-full resize-y font-['Inter'] text-[16px] leading-[24px] text-[#111] placeholder:text-[#605e5e] outline-none focus:border-[#fd022c] block" />
            <span className="cnt absolute bottom-[16px] right-[16px] font-['Inter'] font-medium leading-[16.8px] text-[#605e5e] text-[12px] tracking-[0.12px]">{more.length}/1000</span>
          </div>
        </section>
        <div className="border-[rgba(229,189,186,0.2)] border-solid border-t flex flex-col gap-[32px] items-start pt-[33px] w-[519px]">
          <div className="w-full"><label className="flex gap-[12px] items-start justify-center w-full cursor-pointer"><input type="checkbox" ref={consent.ref} className="consent appearance-none shrink-0 size-[20px] m-[2px] bg-white border border-[#bfc3c8] rounded-[4px] checked:bg-[#fd022c] checked:border-[#fd022c] cursor-pointer" /><span className="flex-[1_0_0] min-w-px font-['Inter'] font-normal text-[14px] leading-[20px] py-px text-[#5f6368]">I consent to HOUM collecting and processing my details to contact me regarding my inquiry. I have read and agree to the Privacy Policy and <Link to="/support-warranty" className="text-[#fd022c] hover:underline">Terms of Service</Link><span className="text-[#5c403d]">.</span></span></label><p className="cerr pl-[36px] pt-[4px] font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{consent.error}</p></div>
          <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px]  font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Submit</button>
          <p className="ok font-['Inter'] font-medium text-[#127a3a] text-[15px] leading-[1.4] empty:hidden" aria-live="polite">{status}</p>
        </div>
      </form>
    </>
  );
}
