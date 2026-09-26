import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img13496cc0f2c8 from '@/assets/13496cc0f2c8.svg';
import img2aa304734d37 from '@/assets/2aa304734d37.webp';

const OTP_LENGTH = 5;
const RESEND_SECONDS = 45;

export default function ScreenSection() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(() => Array<string>(OTP_LENGTH).fill(''));
  const [error, setError] = useState('');
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = window.setTimeout(() => setSeconds((n) => n - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [seconds]);

  const onDigit = (idx: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setDigits((prev) => prev.map((d, k) => (k === idx ? value : d)));
    if (value) inputs.current[idx + 1]?.focus();
  };

  const onDigitKey = (idx: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[idx]) inputs.current[idx - 1]?.focus();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (digits.join('').length < OTP_LENGTH) {
      setError('Enter all 5 digits of the code we sent you.');
      inputs.current[digits.findIndex((d) => !d)]?.focus();
      return;
    }
    setError('');
    navigate('/register-3');
  };

  const resendLabel = seconds > 0 ? `Resend Code in 00:${seconds < 10 ? '0' : ''}${seconds}` : 'Resend Code';

  return (
    <>
      <div className="relative size-full" style={{ backgroundImage: "linear-gradient(94.2566244374355deg, rgb(60, 0, 8) 0.1324%, rgb(162, 0, 22) 185.6%)" }}>
      <div className="-translate-y-1/2 absolute flex flex-col gap-[48px] h-[812px] items-center left-[808px] top-1/2 w-[544px]">
        <nav aria-label="Registration steps" className="flex items-center justify-center w-full"><div className="flex gap-[16px] items-center"><Link to="/register" className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px]"><span className="h-[7.015px] relative shrink-0 w-[9.508px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img13496cc0f2c8} /></span></span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-[#fd022c]">Account Info</span></Link><div aria-current="step" className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] font-['Geist'] font-bold text-[14px] leading-[20px] text-white">2</span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-white">Verification</span></div><div className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#ffe5e5] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] font-['Geist'] font-bold text-[14px] leading-[20px] text-[#b51f27]">3</span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-[#e5e5e5]">Complete</span></div></div></nav>
        <form noValidate className="bg-white flex flex-col gap-[29px] items-start p-[48px] rounded-[24px] shrink-0 w-[491px]" onSubmit={onSubmit}>
          <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#202020] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Verify Code</h1>
          <div className="flex flex-col gap-[16px] items-start justify-center py-[16px] w-full">
            <label htmlFor="otp-0" className="pb-[4px] font-['Inter'] font-medium leading-[1.2] text-[#fd022c] text-[14px] w-full">ENTER VERIFICATION CODE*</label>
            <div className="otp flex items-start justify-between w-full pb-[8px]">{digits.map((d, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputs.current[idx] = el;
                }}
                id={`otp-${idx}`}
                aria-label={`Digit ${idx + 1}`}
                inputMode="numeric"
                maxLength={1}
                autoComplete="one-time-code"
                value={d}
                onChange={(e) => onDigit(idx, e)}
                onKeyDown={(e) => onDigitKey(idx, e)}
                className="bg-[#fff1f2] border-2 border-[#e5e5e5] border-solid h-[64px] w-[48px] rounded-[48px] shrink-0 text-center font-['Inter'] text-[20px] text-black outline-none focus:border-[#fd022c] caret-[#fd022c]"
              />
            ))}</div>
            <div className="pb-[24px] w-full flex flex-col gap-[8px]">
              <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{error}</p>
              <p className="font-['Inter'] text-[#5f6368] text-[14px] leading-[20px]">Didn&apos;t receive the code? <button type="button" className="rs text-[#fd022c] cursor-pointer disabled:cursor-default" disabled={seconds > 0} onClick={() => setSeconds(RESEND_SECONDS)}>{resendLabel}</button></p>
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
              <img alt="Glowing red security shield with a padlock on a circuit board" className="absolute h-full left-[-67.42%] max-w-none top-[-0.03%] w-[194.61%]" src={img2aa304734d37} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
