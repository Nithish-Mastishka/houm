import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useCaptcha, type FormStatus } from '@/lib/core-captcha';
import imgcc8016d72a5c from '@/assets/cc8016d72a5c.svg';

const REQUIRED_FIELDS = ['contact-name', 'contact-email', 'contact-phone'] as const;
type RequiredField = (typeof REQUIRED_FIELDS)[number];
const FIELD_NAMES: Record<RequiredField, string> = { 'contact-name': 'name', 'contact-email': 'email', 'contact-phone': 'phone' };
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const ERROR_COLOR = '#fd022c';

export default function FormSection() {
  const captcha = useCaptcha();
  const [help, setHelp] = useState('');
  const [invalid, setInvalid] = useState<ReadonlySet<RequiredField>>(new Set());
  const [status, setStatus] = useState<FormStatus | null>(null);

  const invalidStyle = (id: RequiredField) => (invalid.has(id) ? { borderColor: ERROR_COLOR } : undefined);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? '').trim();

    const bad: RequiredField[] = REQUIRED_FIELDS.filter((id) => !value(FIELD_NAMES[id]));
    if (!bad.length && !EMAIL_RE.test(value('email'))) bad.push('contact-email');
    setInvalid(new Set(bad));

    if (bad.length) {
      setStatus({ text: 'Please fill in all required fields with valid details.', color: ERROR_COLOR });
    } else if (!captcha.matches(value('captcha'))) {
      setStatus({ text: 'The captcha does not match. Please try again.', color: ERROR_COLOR });
    } else if (!data.has('consent')) {
      setStatus({ text: 'Please accept the consent statement to continue.', color: ERROR_COLOR });
    } else {
      setStatus({ text: 'Thank you! Your request has been sent. Our team will get back to you shortly.', color: '#138a36' });
      form.reset();
      setHelp('');
    }
  };

  return (
    <>
      <form id="contact-form" noValidate onSubmit={handleSubmit} className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <div className="min-w-[328px] relative shrink-0 w-full">
          <div className="flex flex-col gap-[48px] items-start relative size-full">
            <div className="flex flex-col gap-[12px] items-center relative w-full">
              <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] text-center w-full">Send us a message</h2>
              <p className="max-w-[576px] font-['Inter'] font-normal leading-[1.5] text-[#3f4347] text-[16px] text-center w-full">Please fill in the details below and we&rsquo;ll respond as soon as possible.</p>
            </div>
            <div className="flex flex-col gap-[40px] items-center relative w-full">
              <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <h3 className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">YOUR DETAILS</h3>
                <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start min-w-[328px] relative shrink-0 w-[612px]">
                    <label htmlFor="contact-name" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Full Name *</label>
                    <input id="contact-name" style={invalidStyle('contact-name')} name="name" type="text" required placeholder="Enter your Full Name" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start min-w-[328px] relative shrink-0 w-[612px]">
                    <label htmlFor="contact-email" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Work Email *</label>
                    <input id="contact-email" style={invalidStyle('contact-email')} name="email" type="email" required placeholder="Enter your Work Email" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start min-w-[328px] relative shrink-0 w-[612px]">
                    <label htmlFor="contact-phone" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Phone Number *</label>
                    <div className="flex items-start relative shrink-0 w-full">
                      <div className="bg-[#f6f4fc] flex h-[50px] items-center pl-[16px] pr-[12px] rounded-bl-[8px] rounded-tl-[8px] shrink-0">
                        <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] whitespace-nowrap">+91</p>
                      </div>
                      <input id="contact-phone" style={invalidStyle('contact-phone')} name="phone" type="tel" required placeholder="Enter your Phone Number" className="bg-white border border-[#e5e5e5] border-solid flex-[1_0_0] h-[50px] min-w-px px-[17px] py-[15px] rounded-br-[8px] rounded-tr-[8px] font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start min-w-[328px] relative shrink-0 w-[612px]">
                    <label htmlFor="contact-help" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">How Can We Help?</label>
                    <select id="contact-help" name="help" value={help} onChange={(e) => setHelp(e.target.value)} style={help ? { color: '#111' } : undefined} className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[rgba(95,99,104,0.6)] text-[16px] outline-none focus:border-[#fd022c] cursor-pointer">
                      <option value="" disabled={true}>Select</option>
                      <option value="sales">Sales Enquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partner">Partnership</option>
                      <option value="training">Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <h3 className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">YOUR REQUIREMENT</h3>
                <div className="flex flex-col gap-[8px] items-start pb-[6px] relative shrink-0 w-full">
                  <label htmlFor="contact-requirement" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Tell us about your requirement</label>
                  <textarea id="contact-requirement" name="requirement" rows={4} placeholder="Briefly describe your installation environment, specific feature needs, or timeline..." className="bg-white border border-[#e5e5e5] border-solid h-[100px] pt-[13px] px-[17px] rounded-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full resize-none font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] outline-none focus:border-[#fd022c]" />
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <h3 className="font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">YOUR Address</h3>
                <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[328px] relative shrink-0 w-full">
                  <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[612px]">
                    <label htmlFor="contact-country" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Your Country</label>
                    <input id="contact-country" name="country" type="text" placeholder="Enter your Country" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[612px]">
                    <label htmlFor="contact-state" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">State / Region</label>
                    <input id="contact-state" name="state" type="text" placeholder="Enter your State/ Region" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[612px]">
                    <label htmlFor="contact-pincode" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Pincode</label>
                    <input id="contact-pincode" name="pincode" type="text" inputMode="numeric" placeholder="Enter your Pincode" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[612px]">
                    <label htmlFor="contact-city" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">City</label>
                    <input id="contact-city" name="city" type="text" placeholder="Enter your  City" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]" />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-[612px]">
                    <label htmlFor="contact-captcha" className="w-[457px] font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px]">Captcha</label>
                    <div className="flex gap-[8px] items-center relative shrink-0 w-full">
                      <input id="contact-captcha" name="captcha" type="text" autoComplete="off" placeholder="Captcha" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] shrink-0 w-[184px] font-['Inter'] text-[#111] text-[16px] placeholder:text-[#5f6368] outline-none focus:border-[#fd022c]" />
                      <div className="bg-white border border-[#e5e5e5] border-solid flex flex-col h-[50px] items-start justify-center px-[17px] rounded-[8px] shrink-0 w-[184px] select-none">
                        <p id="contact-captcha-code" className="font-['Inter'] font-extrabold leading-[1.2] text-[#111] text-[20px] w-full">{captcha.code}</p>
                      </div>
                      <button type="button" aria-label="Refresh captcha" onClick={captcha.refresh} className="bg-white border border-[#e5e5e5] border-solid flex flex-col items-center justify-center overflow-clip rounded-[8px] shrink-0 size-[50px] cursor-pointer hover:border-[#fd022c]">
                        <span className="relative shrink-0 size-[24px] overflow-clip">
                          <span className="absolute inset-[12.49%_12.5%_12.5%_12.5%]">
                            <span className="absolute inset-[-4.17%]"><img alt="" className="block max-w-none size-full" src={imgcc8016d72a5c} /></span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[rgba(229,189,186,0.2)] border-solid border-t relative shrink-0 w-full">
          <div className="flex flex-col gap-[32px] items-center pt-[33px] relative size-full">
            <label htmlFor="contact-consent" className="flex gap-[12px] items-start justify-center relative w-full cursor-pointer">
              <input id="contact-consent" name="consent" type="checkbox" className="shrink-0 size-[24px] accent-[#fd022c] cursor-pointer" />
              <span className="flex flex-[1_0_0] flex-col font-['Inter'] font-normal items-start min-w-px py-px text-[14px]">
                <span className="block text-[#5f6368] text-center w-full leading-[20px]">I consent to HOUM collecting and processing my details to contact me<br />regarding my inquiry. I have read and agree to the Privacy Policy and </span>
                <Link to="/support-warranty" className="block text-[#fd022c] text-center w-full leading-[20px] hover:underline">Terms of Service</Link>
                <span className="block text-[#5c403d] w-full leading-[22.75px]">.</span>
              </span>
            </label>
            <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] shrink-0">
              <span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Submit Request</span>
            </button>
            <p id="contact-msg" role="status" aria-live="polite" className="absolute top-[calc(100%+8px)] left-0 w-full text-center font-['Inter'] font-medium text-[14px] leading-[20px]" style={status ? { color: status.color } : undefined}>{status?.text}</p>
          </div>
        </div>
      </form>
    </>
  );
}
