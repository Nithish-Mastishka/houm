import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from '@/lib/forms-validation';
import img249f4becf7b8 from '@/assets/249f4becf7b8.svg';
import img8c03aa8d756b from '@/assets/8c03aa8d756b.webp';

const CAPTCHA_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function randomCaptcha(): string {
  let s = '';
  for (let k = 0; k < 6; k++) s += CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)];
  return s;
}

export default function ScreenSection() {
  const [captcha, setCaptcha] = useState('Y6BV77');
  const form = useFormValidation({
    email: { required: 'Enter your email address.', kind: 'email' },
    captcha: { required: 'Enter the captcha shown.', kind: 'code', code: captcha },
  });
  const { errors, field, borderStyle, status, setStatus } = form;

  const onSubmit = form.handleSubmit((values) => {
    setStatus(`Check your inbox. We sent a password reset link to ${values.email.trim()}.`);
  });

  return (
    <>
      <div className="relative size-full" style={{ backgroundImage: "linear-gradient(94.2566244374355deg, rgb(60, 0, 8) 0.1324%, rgb(162, 0, 22) 185.6%)" }}>
      <form noValidate className="absolute bg-white flex flex-col gap-[29px] items-start left-[804px] p-[48px] rounded-[24px] top-[182.5px] w-[553px]" onSubmit={onSubmit}>
        <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#202020] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Forget Password</h1>
        <div className="flex flex-col gap-[13px] items-start w-full">
          <div className="fld flex flex-col gap-[8px] items-start w-full">
        <label htmlFor="fp-email" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Email Address*</label>
        <input id="fp-email" type="email" {...field('email')} style={borderStyle('email')} placeholder="Enter your Email Address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.email}</p>
      </div>
          <div className="fld flex flex-col gap-[8px] items-start w-full">
            <label htmlFor="fp-captcha" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Captcha</label>
            <div className="flex gap-[8px] items-start w-[457px]">
              <input id="fp-captcha" {...field('captcha')} style={borderStyle('captcha')} placeholder="Enter Captcha" className="bx bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-[184px] font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] outline-none focus:border-[#fd022c]" />
              <div className="bg-white border border-[#e5e5e5] border-solid flex flex-col h-[50px] items-start justify-center overflow-clip px-[17px] rounded-[8px] shrink-0 w-[184px] select-none">
                <p className="fp-cap font-['Inter'] font-extrabold leading-[1.2] text-[#111] text-[20px]">{captcha}</p>
              </div>
              <button type="button" aria-label="Get a new captcha" onClick={() => setCaptcha(randomCaptcha())} className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-[8px] shrink-0 size-[50px] cursor-pointer hover:border-[#fd022c]">
                <span className="relative shrink-0 size-[24px]"><span className="absolute inset-[12.49%_12.5%_12.5%_12.5%]"><span className="absolute inset-[-4.17%]"><img alt="" className="block max-w-none size-full" src={img249f4becf7b8} /></span></span></span>
              </button>
            </div>
            <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.captcha}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[29px] items-center w-full">
          <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] w-full"><span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Submit</span></button>
          <p className="ok font-['Inter'] font-medium text-[#127a3a] text-[15px] leading-[1.4] text-center empty:hidden" aria-live="polite">{status}</p>
          <p className="font-['Inter'] font-normal text-[16px] text-center whitespace-nowrap leading-[1.5] text-[#3f4347]">Back to <Link to="/login" className="text-[#fd022c] hover:underline">Login Page</Link></p>
        </div>
      </form>
      <div className="absolute flex h-[936px] items-center justify-center left-0 top-0 w-[721.45px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[936px] relative w-[721.45px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Glowing red security shield with a padlock on a circuit board" className="absolute h-full left-[-67.42%] max-w-none top-[-0.03%] w-[194.61%]" src={img8c03aa8d756b} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
