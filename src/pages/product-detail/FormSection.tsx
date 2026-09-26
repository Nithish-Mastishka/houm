import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useCaptcha, type FormStatus } from '@/lib/core-captcha';
import imgb92b09089d5f from '@/assets/b92b09089d5f.svg';

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const ERROR_COLOR = '#fd022c';

export default function FormSection() {
  const captcha = useCaptcha();
  const [status, setStatus] = useState<FormStatus | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? '').trim();
    const error = (text: string) => setStatus({ text, color: ERROR_COLOR });

    if (!value('pd-name') || !value('pd-email') || !value('pd-phone')) {
      error('Please fill in all required fields (*).');
    } else if (!EMAIL_RE.test(value('pd-email'))) {
      error('Please enter a valid work email.');
    } else if (!captcha.matches(value('pd-captcha'))) {
      error('Captcha does not match. Please try again.');
    } else if (!data.has('pd-consent')) {
      error('Please accept the consent to continue.');
    } else {
      setStatus({ text: 'Thank you! Our security experts will get in touch shortly.', color: '#1a7f37' });
      form.reset();
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[48px] items-center relative size-full">
        <div className="flex flex-col gap-[12px] items-center w-full">
          <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] text-center w-full">Interested in this camera?</h2>
          <p className="font-['Inter'] font-normal leading-[1.5] text-[#3f4347] text-[16px] text-center max-w-[576px] w-full">Provide your details below and our security experts will get in<br />touch to discuss your specific requirements.</p>
        </div>
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-[40px] items-center w-full">
          <div className="flex flex-col gap-[24px] items-start w-full">
            <h3 className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[14px] whitespace-nowrap">YOUR DETAILS</h3>
            <div className="flex flex-wrap gap-[24px] items-start w-full">
        <div className="flex flex-col gap-[8px] items-start min-w-[328px] shrink-0 w-[636px]">
          <label htmlFor="pd-name" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Full Name *</label>
          <input id="pd-name" name="pd-name" type="text" placeholder="Email address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
        </div>
        <div className="flex flex-col gap-[8px] items-start min-w-[328px] shrink-0 w-[636px]">
          <label htmlFor="pd-email" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Work Email *</label>
          <input id="pd-email" name="pd-email" type="email" placeholder="Email address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
        </div>
        <div className="flex flex-col gap-[8px] items-start min-w-[328px] shrink-0 w-[636px]">
          <label htmlFor="pd-phone" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Phone Number *</label>
          <div className="flex items-start w-full">
            <span className="bg-[#f6f4fc] flex h-[50px] items-center pl-[16px] pr-[12px] rounded-bl-[8px] rounded-tl-[8px] shrink-0 font-['Inter'] leading-[1.5] text-[#5f6368] text-[16px]">+91</span>
            <input id="pd-phone" name="pd-phone" type="tel" placeholder="Email address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-br-[8px] rounded-tr-[8px] flex-1 min-w-px font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start min-w-[328px] shrink-0 w-[636px]">
          <label htmlFor="pd-company" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Company / Organization</label>
          <input id="pd-company" name="pd-company" type="text" placeholder="Email address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
        </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] items-start w-full">
            <h3 className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[14px] whitespace-nowrap">YOUR REQUIREMENT</h3>
            <div className="flex flex-col gap-[8px] h-[218px] items-start pb-[6px] w-full">
              <label htmlFor="pd-req" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Tell us about your requirement</label>
              <textarea id="pd-req" name="pd-req" placeholder="Briefly describe your installation environment, specific feature needs, or timeline..." className="bg-white border border-[#e5e5e5] border-solid flex-1 w-full pt-[13px] px-[17px] rounded-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] resize-none outline-none focus:border-[#fd022c]" />
            </div>
          </div>
          <div className="flex flex-col gap-[24px] items-start w-full">
            <h3 className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[14px] whitespace-nowrap">YOUR Address</h3>
            <div className="flex flex-wrap gap-[24px] items-start w-full">
        <div className="flex flex-col gap-[8px] items-start min-w-[328px] shrink-0 w-[636px]">
          <label htmlFor="pd-country" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Your Country</label>
          <input id="pd-country" name="pd-country" type="text" placeholder="Email address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
        </div>
        <div className="flex flex-col gap-[8px] items-start min-w-[328px] shrink-0 w-[636px]">
          <label htmlFor="pd-state" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">State</label>
          <input id="pd-state" name="pd-state" type="text" placeholder="Email address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
        </div>
        <div className="flex flex-col gap-[8px] items-start min-w-[328px] shrink-0 w-[636px]">
          <label htmlFor="pd-city" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">City</label>
          <input id="pd-city" name="pd-city" type="text" placeholder="Email address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
        </div>
              <div className="flex flex-col gap-[8px] items-start min-w-[328px] shrink-0">
                <label htmlFor="pd-captcha" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full w-[457px]">Captcha</label>
                <div className="flex gap-[8px] items-start w-[457px]">
                  <input id="pd-captcha" name="pd-captcha" type="text" autoComplete="off" placeholder="captcha" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-[184px] font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] outline-none focus:border-[#fd022c]" />
                  <div className="bg-white border border-[#e5e5e5] border-solid flex h-[50px] items-center px-[17px] rounded-[8px] w-[184px] select-none">
                    <span id="pd-code" className="font-['Inter'] font-extrabold leading-[1.2] text-[#111] text-[20px] tracking-[1px]">{captcha.code}</span>
                  </div>
                  <button type="button" aria-label="Refresh captcha" onClick={captcha.refresh} className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-[8px] shrink-0 size-[50px] cursor-pointer hover:border-[#fd022c]">
                    <span className="relative size-[24px] overflow-clip"><span className="absolute inset-[12.49%_12.5%_12.5%_12.5%]"><span className="absolute inset-[-4.17%]"><img alt="" className="block max-w-none size-full" src={imgb92b09089d5f} /></span></span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[rgba(229,189,186,0.2)] border-solid border-t flex flex-col gap-[32px] items-center pt-[33px] w-full">
            <label htmlFor="pd-consent" className="flex gap-[12px] items-start justify-center w-full cursor-pointer">
              <input id="pd-consent" name="pd-consent" type="checkbox" className="shrink-0 size-[20px] mt-[2px] accent-[#fd022c] cursor-pointer" />
              <span className="flex flex-col font-['Inter'] font-normal items-center py-px text-[14px] w-[466px] text-center">
                <span className="leading-[20px] text-[#5f6368]">I consent to HOUM collecting and processing my details to contact me<br />regarding my inquiry. I have read and agree to the Privacy Policy and </span>
                <Link to="/support-warranty" className="leading-[20px] text-[#fd022c] hover:underline">Terms of Service</Link>
              </span>
            </label>
            <p className="fmsg font-['Inter'] text-[14px] min-h-[20px]" role="status" style={status ? { color: status.color } : undefined}>{status?.text}</p>
            <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px]">
              <span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-white whitespace-nowrap">Submit Request</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
