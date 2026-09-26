import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormValidation, type FormRules } from '@/lib/forms-validation';
import imgae46c387a625 from '@/assets/ae46c387a625.svg';
import imgca01156b5bae from '@/assets/ca01156b5bae.svg';
import img8541fc5e31cf from '@/assets/8541fc5e31cf.webp';

type RegisterField = 'mobile' | 'email' | 'pass' | 'pass2';

const RULES: FormRules<RegisterField> = {
  mobile: { required: 'Enter your mobile number.', kind: 'phone' },
  email: { required: 'Enter your email address.', kind: 'email' },
  pass: { required: 'Create a password.', kind: 'pw' },
  pass2: { required: 'Confirm your password.', kind: 'match', match: 'pass' },
};

const STRONG_CHARS = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%';

function strongPassword(): string {
  let s = '';
  for (let k = 0; k < 14; k++) s += STRONG_CHARS[Math.floor(Math.random() * STRONG_CHARS.length)];
  return s;
}

export default function ScreenSection() {
  const navigate = useNavigate();
  const form = useFormValidation(RULES);
  const { errors, field, borderStyle } = form;
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const generateStrong = () => {
    const s = strongPassword();
    setPass(s);
    setPass2(s);
    setShowPass(true);
    setShowPass2(true);
  };

  const onSubmit = form.handleSubmit(() => navigate('/register-2'));

  return (
    <>
      <div className="relative size-full" style={{ backgroundImage: "linear-gradient(94.2566244374355deg, rgb(60, 0, 8) 0.1324%, rgb(162, 0, 22) 185.6%)" }}>
      <div className="-translate-y-1/2 absolute flex flex-col gap-[48px] items-center left-[808px] top-1/2 w-[544px]">
        <nav aria-label="Registration steps" className="flex items-center justify-center w-full"><div className="flex gap-[16px] items-center"><div aria-current="step" className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] font-['Geist'] font-bold text-[14px] leading-[20px] text-white">1</span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-white">Account Info</span></div><div className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#ffe5e5] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] font-['Geist'] font-bold text-[14px] leading-[20px] text-[#b51f27]">2</span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-[#e5e5e5]">Verification</span></div><div className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#ffe5e5] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] font-['Geist'] font-bold text-[14px] leading-[20px] text-[#b51f27]">3</span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-[#e5e5e5]">Complete</span></div></div></nav>
        <form noValidate className="bg-white flex flex-col gap-[29px] items-start p-[48px] rounded-[24px] shrink-0 w-[491px]" onSubmit={onSubmit}>
          <div className="flex flex-col gap-[13px] items-start w-full">
            <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#202020] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Register Here</h1>
            <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] w-full">Provide your details.</p>
          </div>
          <div className="flex flex-col gap-[13px] items-start w-full">
            <div className="fld flex flex-col gap-[8px] items-start w-full">
        <label htmlFor="reg-mobile" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Mobile Number *</label>
        <input id="reg-mobile" type="tel" {...field('mobile')} style={borderStyle('mobile')} placeholder="Enter your Mobile Number" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.mobile}</p>
      </div>
            <div className="fld flex flex-col gap-[8px] items-start w-full">
        <label htmlFor="reg-email" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Email Address*</label>
        <input id="reg-email" type="email" {...field('email')} style={borderStyle('email')} placeholder="Enter your Email Address" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.email}</p>
      </div>
            <div className="fld flex flex-col gap-[8px] items-start w-full">
        <div className="flex gap-[8px] items-end w-full">
          <label htmlFor="reg-pass" className="flex-[1_0_0] min-w-px font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px]">New Password *</label>
          <button type="button" onClick={generateStrong} className="flex gap-[4px] items-center cursor-pointer hover:underline">
            <span className="h-[8px] relative shrink-0 w-[15.333px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgae46c387a625} /></span>
            <span className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[12px] text-center whitespace-nowrap">Generate Strong</span>
          </button>
        </div>
        <div className="bx bg-white border border-[#e5e5e5] border-solid flex h-[50px] items-center pl-[17px] pr-[9px] rounded-[8px] w-full focus-within:border-[#fd022c]" style={borderStyle('pass')}>
          <input id="reg-pass" type={showPass ? 'text' : 'password'} {...field('pass')} value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter your password" className="flex-1 min-w-0 bg-transparent font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none" />
          <button type="button" aria-label="Show password" onClick={() => setShowPass((v) => !v)} className="opacity-60 flex items-center justify-center p-[4px] shrink-0 size-[32px] cursor-pointer">
            <span className="h-[15px] relative shrink-0 w-[22px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgca01156b5bae} /></span>
          </button>
        </div>
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.pass}</p>
      </div>
            <div className="fld flex flex-col gap-[8px] items-start w-full">
        <label htmlFor="reg-pass2" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Confirm Password *</label>
        <div className="bx bg-white border border-[#e5e5e5] border-solid flex h-[50px] items-center pl-[17px] pr-[9px] rounded-[8px] w-full focus-within:border-[#fd022c]" style={borderStyle('pass2')}>
          <input id="reg-pass2" type={showPass2 ? 'text' : 'password'} {...field('pass2')} value={pass2} onChange={(e) => setPass2(e.target.value)} placeholder="Enter Confirm password" className="flex-1 min-w-0 bg-transparent font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none" />
          <button type="button" aria-label="Show password" onClick={() => setShowPass2((v) => !v)} className="opacity-60 flex items-center justify-center p-[4px] shrink-0 size-[32px] cursor-pointer">
            <span className="h-[15px] relative shrink-0 w-[22px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgca01156b5bae} /></span>
          </button>
        </div>
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.pass2}</p>
      </div>
            <div className="font-['Inter'] font-medium text-[#3f4347] text-[16px] leading-[24px] w-full">
              <p className="mb-0">By signing up I agree to the <Link to="/support-warranty" className="text-[#fd022c] hover:underline">terms &amp; conditions</Link> and</p>
              <p><Link to="/support-warranty" className="text-[#fd022c] hover:underline">privacy policy</Link></p>
            </div>
          </div>
          <div className="flex flex-col gap-[29px] items-center w-full">
            <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] w-[395px]"><span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Next</span></button>
            <p className="font-['Inter'] font-normal text-[16px] text-center whitespace-nowrap leading-[1.5] text-[#3f4347]">Back to <Link to="/login" className="text-[#fd022c] hover:underline">Login Page</Link></p>
          </div>
        </form>
      </div>
      <div className="absolute flex h-[936px] items-center justify-center left-0 top-0 w-[721.45px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[936px] relative w-[721.45px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Glowing red security shield with a padlock on a circuit board" className="absolute h-full left-[-67.42%] max-w-none top-[-0.03%] w-[194.61%]" src={img8541fc5e31cf} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
