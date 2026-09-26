import { useState, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation, type FormRules } from '@/lib/forms-validation';
import imgf27050b383d5 from '@/assets/f27050b383d5.svg';
import img86b1a09501bb from '@/assets/86b1a09501bb.svg';
import imge2f04e622cc2 from '@/assets/e2f04e622cc2.webp';

type DetailsField = 'name' | 'company' | 'state' | 'city';

const RULES: FormRules<DetailsField> = {
  name: { required: 'Enter your full name.' },
  company: { required: 'Enter your company name.' },
  state: { required: 'Select your state.' },
  city: { required: 'Select your city.' },
};

export default function ScreenSection() {
  const form = useFormValidation(RULES);
  const { errors, field, borderStyle, status, setStatus } = form;
  const [pinError, setPinError] = useState('');

  const onPinInput = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setPinError(v && !/^[0-9]{0,6}$/.test(v) ? 'Use digits only.' : '');
  };

  const onSubmit = form.handleSubmit(() => {
    setStatus('Registration submitted. We will email you once your account is approved.');
  });

  return (
    <>
      <div className="relative size-full" style={{ backgroundImage: "linear-gradient(93.49700795244676deg, rgb(60, 0, 8) 0.1324%, rgb(162, 0, 22) 185.6%)" }}>
      <div className="-translate-y-1/2 absolute flex flex-col gap-[48px] items-center left-[810px] top-[calc(50%-18.5px)] w-[544px]">
        <nav aria-label="Registration steps" className="flex items-center justify-center w-full"><div className="flex gap-[16px] items-center"><Link to="/register" className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px]"><span className="h-[7.015px] relative shrink-0 w-[9.508px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgf27050b383d5} /></span></span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-[#fd022c]">Account Info</span></Link><Link to="/register-2" className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px]"><span className="h-[7.015px] relative shrink-0 w-[9.508px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgf27050b383d5} /></span></span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-[#fd022c]">Verification</span></Link><div aria-current="step" className="flex gap-[8px] items-center px-[16px] py-[8px] rounded-[9000px] shrink-0"><span className="bg-[#fd022c] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] font-['Geist'] font-bold text-[14px] leading-[20px] text-white">3</span><span className="font-['Inter'] font-medium leading-[24px] text-[16px] whitespace-nowrap text-[#fd022c]">Complete</span></div></div></nav>
        <form noValidate className="bg-white flex flex-col gap-[29px] min-h-[809px] items-start justify-between p-[48px] rounded-[24px] shrink-0 w-[491px]" onSubmit={onSubmit}>
          <div className="flex flex-col gap-[13px] items-start w-full">
            <h1 className="font-['Roboto'] font-semibold leading-[1.2] text-[#202020] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>Enter Your Details</h1>
            <p className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px] w-full">Provide your details.</p>
          </div>
          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="fld flex flex-col gap-[8px] items-start w-full">
        <label htmlFor="r3-name" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Full Name *</label>
        <input id="r3-name" type="text" {...field('name')} style={borderStyle('name')} placeholder="Enter your Full Name" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.name}</p>
      </div>
            <div className="fld flex flex-col gap-[8px] items-start w-full">
        <label htmlFor="r3-company" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Company *</label>
        <input id="r3-company" type="text" {...field('company')} style={borderStyle('company')} placeholder="Enter your Company" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" />
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.company}</p>
      </div>
            <div className="fld flex flex-col gap-[8px] items-start w-[396px]">
        <label htmlFor="r3-state" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">State*</label>
        <div className="bx relative bg-white border border-[#e5e5e5] border-solid h-[50px] rounded-[8px] w-full focus-within:border-[#fd022c]" style={borderStyle('state')}>
          <select id="r3-state" {...field('state')} className="appearance-none bg-transparent size-full pl-[17px] pr-[48px] font-['Inter'] text-[16px] text-[#5f6368] outline-none cursor-pointer"><option value="">Select State</option><option>Andhra Pradesh</option><option>Delhi</option><option>Gujarat</option><option>Karnataka</option><option>Maharashtra</option><option>Tamil Nadu</option><option>Telangana</option><option>Uttar Pradesh</option><option>West Bengal</option></select>
          <span className="absolute right-[17px] top-[13px] size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img86b1a09501bb} /></span>
        </div>
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.state}</p>
      </div>
            <div className="fld flex flex-col gap-[8px] items-start w-[396px]">
        <label htmlFor="r3-city" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">City*</label>
        <div className="bx relative bg-white border border-[#e5e5e5] border-solid h-[50px] rounded-[8px] w-full focus-within:border-[#fd022c]" style={borderStyle('city')}>
          <select id="r3-city" {...field('city')} className="appearance-none bg-transparent size-full pl-[17px] pr-[48px] font-['Inter'] text-[16px] text-[#5f6368] outline-none cursor-pointer"><option value="">Select City</option><option>Ahmedabad</option><option>Bengaluru</option><option>Chennai</option><option>Hyderabad</option><option>Kolkata</option><option>Lucknow</option><option>Mumbai</option><option>New Delhi</option><option>Pune</option></select>
          <span className="absolute right-[17px] top-[13px] size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img86b1a09501bb} /></span>
        </div>
        <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{errors.city}</p>
      </div>
            <div className="fld flex flex-col gap-[8px] items-start w-[396px]">
              <label htmlFor="r3-pin" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Pincode</label>
              <input id="r3-pin" inputMode="numeric" maxLength={6} placeholder="Enter Pincode" onChange={onPinInput} className="bx bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] outline-none focus:border-[#fd022c]" />
              <p className="err font-['Inter'] text-[#fd022c] text-[13px] leading-[1.3] empty:hidden" aria-live="polite">{pinError}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[29px] items-center w-full">
            <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] w-[395px]"><span className="font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Submit Registration</span></button>
            <p className="ok font-['Inter'] font-medium text-[#127a3a] text-[15px] leading-[1.4] text-center empty:hidden" aria-live="polite">{status}</p>
            <p className="font-['Inter'] font-normal text-[16px] text-center whitespace-nowrap leading-[1.5] text-[#3f4347]">Back to <Link to="/login" className="text-[#fd022c] hover:underline">Login Page</Link></p>
          </div>
        </form>
      </div>
      <div className="absolute flex h-[936px] items-center justify-center left-0 top-0 w-[721.45px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[936px] relative w-[721.45px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Glowing red security shield with a padlock on a circuit board" className="absolute h-full left-[-67.42%] max-w-none top-[-0.03%] w-[194.61%]" src={imge2f04e622cc2} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
