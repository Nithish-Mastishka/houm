import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormValidation, type FormRules } from '@/lib/forms-validation';
import img7bdf2f474f2b from '@/assets/7bdf2f474f2b.webp';

type LoginField = 'user' | 'pass' | 'code';

const RULES: FormRules<LoginField> = {
  user: { required: 'Enter your user ID.' },
  pass: { required: 'Enter your password.' },
  code: { required: 'Enter the verification code shown.', kind: 'code', code: '12345' },
};

export default function ScreenSection() {
  const navigate = useNavigate();
  const form = useFormValidation(RULES);
  const { errors, field, borderStyle, status, setStatus } = form;
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (!signedIn) return;
    const timer = window.setTimeout(() => navigate('/'), 1200);
    return () => window.clearTimeout(timer);
  }, [signedIn, navigate]);

  const onSubmit = form.handleSubmit(() => {
    setStatus('Signed in. Taking you to the homepage...');
    setSignedIn(true);
  });

  return (
    <>
      <div className="relative size-full" style={{ backgroundImage: "linear-gradient(94.2566244374355deg, rgb(60, 0, 8) 0.1324%, rgb(162, 0, 22) 185.6%)" }}>
      <form noValidate className="absolute bg-white flex flex-col gap-[29px] items-start left-[834px] p-[48px] rounded-[24px] top-[182.5px] w-[491px]" onSubmit={onSubmit}>
        <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#202020] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Login</h1>
        <div className="flex flex-col gap-[13px] items-start w-full">
          <div className="fld flex flex-col gap-[8px] items-start w-full">
        <label htmlFor="login-user" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">User ID *</label>
        <input id="login-user" type="text" {...field('user')} style={borderStyle('user')} placeholder="Enter your user ID" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.user}</p>
      </div>
          <div className="fld flex flex-col gap-[8px] items-start w-full">
        <label htmlFor="login-pass" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Password *</label>
        <input id="login-pass" type="password" {...field('pass')} style={borderStyle('pass')} placeholder="Enter your password" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.pass}</p>
      </div>
          <div className="fld flex flex-col gap-[8px] w-full">
            <div className="flex gap-[8px] items-start w-full">
              <div className="bg-white border border-[#e5e5e5] border-solid flex flex-col h-[50px] items-start justify-center overflow-clip px-[17px] py-[15px] rounded-[8px] shrink-0 select-none" aria-hidden="true">
                <p className="opacity-60 font-['Poppins'] leading-[1.2] text-[#111] text-[24px] tracking-[11.52px] whitespace-nowrap">12345</p>
              </div>
              <label htmlFor="login-code" className="sr-only">Verification code (type the digits 12345 shown)</label>
              <input id="login-code" inputMode="numeric" {...field('code')} style={borderStyle('code')} placeholder="Enter  verification code" className="bx flex-1 min-w-px bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
            </div>
            <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.code}</p>
          </div>
          <div className="flex gap-[116px] items-center">
            <label className="flex gap-[8px] items-center cursor-pointer">
              <input type="checkbox" id="login-remember" className="appearance-none bg-white border border-[#bfc3c8] border-solid rounded-[5px] shrink-0 size-[22px] checked:bg-[#fd022c] checked:border-[#fd022c] cursor-pointer" />
              <span className="font-['Inter'] font-medium leading-[24px] text-[#202020] text-[16px] whitespace-nowrap">Remember me</span>
            </label>
            <Link to="/forgot-password" className="font-['Inter'] font-medium leading-[24px] text-[#cd684a] text-[16px] whitespace-nowrap hover:underline">Forgot Password?</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[29px] items-center w-full">
          <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] w-full"><span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Login</span></button>
          <p className="ok font-['Inter'] font-medium text-[#127a3a] text-[15px] leading-[1.4] text-center empty:hidden" aria-live="polite">{status}</p>
          <p className="font-['Inter'] font-normal leading-[1.5] text-[16px] text-center whitespace-nowrap"><span className="text-[#3f4347]">New to HOUM? </span><Link to="/register" className="text-[#fd022c] hover:underline"> Register here</Link></p>
        </div>
      </form>
      <div className="absolute flex h-[936px] items-center justify-center left-0 top-0 w-[721.45px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[936px] relative w-[721.45px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Glowing red security shield with a padlock on a circuit board" className="absolute h-full left-[-67.42%] max-w-none top-[-0.03%] w-[194.61%]" src={img7bdf2f474f2b} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
