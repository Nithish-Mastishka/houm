import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation, type FieldProps, type FormErrors, type FormRules } from '@/lib/forms-validation';
import imgSelectArrow from '@/assets/546ccd8d4a47.svg';
import imgSmallArrow from '@/assets/a73ee87c9bc6.svg';
import imgddeaead784b8 from '@/assets/ddeaead784b8.svg';
import img26f40ba9873e from '@/assets/26f40ba9873e.svg';
import img3bfb59c4474b from '@/assets/3bfb59c4474b.svg';
import imgbb90405ee7e3 from '@/assets/bb90405ee7e3.svg';
import img6355a1260133 from '@/assets/6355a1260133.svg';

/** "Register for Training" form shared by /training-webinar-detail and its error-state variant. */

export type WebinarField = 'branch' | 'date' | 'time' | 'name' | 'company' | 'email' | 'phone' | 'state';

export const WEBINAR_RULES: FormRules<WebinarField> = {
  branch: { required: 'Please select branch' },
  date: { required: 'Please select date' },
  time: { required: 'Please select time' },
  name: { required: 'Please enter your full name' },
  company: { required: 'Please enter your company' },
  email: { required: 'Please enter your valid email address', kind: 'email' },
  phone: { required: 'Please enter your valid 10 digir phone number', kind: 'phone10', invalid: 'Please enter your valid 10 digir phone number' },
  state: { required: 'Please select state' },
};

/** Every field's "required" message — the error-state design shows all of them. */
export const WEBINAR_ALL_ERRORS: FormErrors<WebinarField> = Object.fromEntries(
  Object.entries(WEBINAR_RULES).map(([k, r]) => [k, r.required]),
) as FormErrors<WebinarField>;

const BRANCHES = ['Noida (HO), Delhi NCR', 'Mumbai', 'Bengaluru', 'Chennai', 'Kolkata', 'Hyderabad'];
const DATES = ['28 Aug 2025', '25 Sep 2025', '30 Oct 2025', '27 Nov 2025'];
const TIMES = ['11:00 AM', '02:00 PM', '04:00 PM'];
const STATES = ['Delhi', 'Gujarat', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'];

const LABEL = "font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full";
const ERROR = "err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden";
const INPUT =
  "bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]";

interface SelectFieldProps {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  arrow: string;
  wrapClass: string;
  reg: FieldProps;
  error?: string;
  style?: CSSProperties;
  defaultValue?: string;
}

function SelectField({ id, label, placeholder, options, arrow, wrapClass, reg, error, style, defaultValue }: SelectFieldProps) {
  return (
    <div className={`fld flex flex-col gap-[8px] items-start ${wrapClass}`}>
      <label htmlFor={id} className={LABEL}>{label}</label>
      <div className="bx relative bg-white border border-[#e5e5e5] border-solid h-[50px] rounded-[8px] w-full focus-within:border-[#fd022c]" style={style}>
        <select id={id} {...reg} defaultValue={defaultValue} className="appearance-none bg-transparent size-full pl-[17px] pr-[44px] font-['Inter'] text-[16px] text-[#5f6368] outline-none cursor-pointer">
          <option value="">{placeholder}</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <span className="absolute right-[17px] top-[13px] size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={arrow} /></span>
      </div>
      <p className={ERROR} aria-live="polite">{error}</p>
    </div>
  );
}

interface TextFieldProps {
  id: string;
  label: string;
  type: 'text' | 'email';
  placeholder: string;
  reg: FieldProps;
  error?: string;
  style?: CSSProperties;
}

function TextField({ id, label, type, placeholder, reg, error, style }: TextFieldProps) {
  return (
    <div className="fld flex flex-col gap-[8px] items-start w-[373px]">
      <label htmlFor={id} className={LABEL}>{label}</label>
      <input id={id} type={type} {...reg} placeholder={placeholder} className={INPUT} style={style} />
      <p className={ERROR} aria-live="polite">{error}</p>
    </div>
  );
}

export interface WebinarRegistrationFormProps {
  /** Prefix of the input ids (`wd`, `we`). */
  idPrefix: string;
  /** Errors to show on load (error-state page). */
  initialErrors?: FormErrors<WebinarField>;
  initialConsentError?: string;
  defaultBranch?: string;
  /** Rendered between the submit block and the "Can't find" card. */
  children?: ReactNode;
}

export default function WebinarRegistrationForm({ idPrefix, initialErrors, initialConsentError, defaultBranch, children }: WebinarRegistrationFormProps) {
  const form = useFormValidation(WEBINAR_RULES, { consent: true, initialErrors, initialConsentError });
  const { errors, field, borderStyle, status, setStatus, consent } = form;
  const id = (name: WebinarField) => `${idPrefix}-${name}`;

  const onSubmit = form.handleSubmit((values) => {
    setStatus(`Thank you. Your seat is reserved. We will email the joining details to ${values.email.trim()}.`);
    form.clear();
  });

  return (
    <form noValidate className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[32px] items-start p-[24px] rounded-[24px] shrink-0 w-[421px]" onSubmit={onSubmit}>
      <div className="flex flex-col gap-[48px] items-start w-full">
        <div className="flex flex-col gap-[12px] items-center w-full">
          <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Register for Training</h2>
          <p className="font-['Inter'] font-normal leading-[1.5] text-[#3f4347] text-[16px] w-full">Please fill the form to register for Training.</p>
        </div>
        <div className="flex flex-wrap gap-[24px] items-start w-[373px] self-center">
          <SelectField id={id('branch')} label="Branch*" placeholder="Select Branch" options={BRANCHES} arrow={imgSelectArrow} wrapClass="w-[373px]" reg={field('branch')} error={errors.branch} style={borderStyle('branch')} defaultValue={defaultBranch} />
          <div className="flex flex-[1_0_0] gap-[24px] items-start min-w-px">
            <SelectField id={id('date')} label="Date*" placeholder="Select Date" options={DATES} arrow={imgSmallArrow} wrapClass="flex-[1_0_0] min-w-px" reg={field('date')} error={errors.date} style={borderStyle('date')} />
            <SelectField id={id('time')} label="Time*" placeholder="Select Time" options={TIMES} arrow={imgSmallArrow} wrapClass="flex-[1_0_0] min-w-px" reg={field('time')} error={errors.time} style={borderStyle('time')} />
          </div>
          <TextField id={id('name')} label="Full Name *" type="text" placeholder="Enter your Name" reg={field('name')} error={errors.name} style={borderStyle('name')} />
          <TextField id={id('company')} label="Company *" type="text" placeholder="Enter your Company" reg={field('company')} error={errors.company} style={borderStyle('company')} />
          <TextField id={id('email')} label="Email *" type="email" placeholder="Enter your Email" reg={field('email')} error={errors.email} style={borderStyle('email')} />
          <div className="fld flex flex-col gap-[8px] items-start w-[373px]">
            <label htmlFor={id('phone')} className={LABEL}>Phone Number *</label>
            <div className="flex items-start w-full">
              <span className="bg-[#fd022c] flex h-[50px] items-center pl-[16px] pr-[12px] rounded-bl-[8px] rounded-tl-[8px] shrink-0 font-['Inter'] text-[16px] text-white leading-[1.5]">+91</span>
              <input id={id('phone')} type="tel" inputMode="numeric" maxLength={10} {...field('phone')} style={borderStyle('phone')} placeholder="Enter your Phone Number" className="bx flex-[1_0_0] min-w-px bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-br-[8px] rounded-tr-[8px] font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
            </div>
            <p className={ERROR} aria-live="polite">{errors.phone}</p>
          </div>
          <SelectField id={id('state')} label="State" placeholder="Select State" options={STATES} arrow={imgSelectArrow} wrapClass="w-[373px]" reg={field('state')} error={errors.state} style={borderStyle('state')} />
        </div>
      </div>
      <div className="border-[rgba(229,189,186,0.2)] border-solid border-t flex flex-col gap-[32px] items-center pt-[33px] w-full">
        <div className="w-full">
          <label className="flex gap-[12px] items-start justify-center w-full cursor-pointer">
            <input type="checkbox" ref={consent.ref} className="consent appearance-none mt-[2px] shrink-0 size-[20px] m-[2px] bg-white border border-[#bfc3c8] rounded-[4px] checked:bg-[#fd022c] checked:border-[#fd022c] cursor-pointer" />
            <span className="flex-[1_0_0] min-w-px font-['Inter'] font-normal text-[14px] leading-[20px] py-px text-[#5f6368]">I consent to HOUM collecting and processing my details to contact me regarding my inquiry. I have read and agree to the Privacy Policy and <Link to="/support-warranty" className="text-[#fd022c] hover:underline">Terms of Service</Link><span className="text-[#5c403d]">.</span></span>
          </label>
          <p className="cerr pl-[36px] pt-[4px] font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{consent.error}</p>
        </div>
        <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] w-full font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Register Now</button>
        <p className="ok font-['Inter'] font-medium text-[#127a3a] text-[15px] leading-[1.4] text-center empty:hidden" aria-live="polite">{status}</p>
      </div>
      {children}
      <Link to="/training-request" className="bg-[#fff1f2] hover:bg-[#ffe5e5] transition-colors flex items-start p-[24px] rounded-[16px] shrink-0 w-full">
        <span className="pr-[16px] shrink-0 block"><span className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start p-[8px] rounded-[12px] shrink-0">
          <span className="overflow-clip relative shrink-0 size-[32px] block">
            <span className="absolute inset-[23.38%_13.36%_30.06%_13.36%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgddeaead784b8} /></span>
            <span className="absolute inset-[16.7%_0]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img26f40ba9873e} /></span>
            <span className="absolute inset-[51.77%_40.08%_45.09%_55.11%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img3bfb59c4474b} /></span>
            <span className="absolute inset-[51.77%_20.04%_45.09%_63.47%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgbb90405ee7e3} /></span>
            <span className="absolute inset-[58.46%_23.38%_38.41%_63.47%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img6355a1260133} /></span>
            <span className="absolute inset-[58.46%_40.08%_38.41%_55.11%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img3bfb59c4474b} /></span>
          </span>
        </span></span>
        <span className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px">
          <span className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px]">Can&apos;t find what you&apos;re looking for?</span>
          <span className="pb-[8px] font-['Inter'] font-normal text-[#5f6368] text-[14px] block"><p className="leading-[20px]">Request a customized training session for your team.</p></span>
          <span className="bg-[#fd022c] flex items-center justify-center px-[24px] py-[8px] rounded-[9000px] font-['Inter'] font-medium leading-[24px] text-[16px] text-white whitespace-nowrap">Register Now</span>
        </span>
      </Link>
    </form>
  );
}
