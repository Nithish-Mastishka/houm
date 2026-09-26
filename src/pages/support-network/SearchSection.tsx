import { useState, type ChangeEvent, type FormEvent } from 'react';
import imgfb1d9f1da2d1 from '@/assets/fb1d9f1da2d1.svg';

interface SearchSectionProps {
  /** Called with the pincode and city after a valid search. */
  onSearch: (pin: string, city: string) => void;
}

export default function SearchSection({ onSearch }: SearchSectionProps) {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const p = pin.trim();
    if (!state || !city || !/^\d{6}$/.test(p)) {
      setMsg('Please select a state and city and enter a 6-digit pincode.');
      return;
    }
    setMsg('');
    onSearch(p, city);
  };

  return (
    <>
      <div className="flex flex-col gap-[16px] items-start relative size-full">
        <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] whitespace-nowrap">FIND YOUR NEAREST SERVICE PARTNER</h2>
        <form className="flex flex-col items-start p-[32px] relative rounded-[24px] shrink-0 w-[1296px]" style={{ backgroundImage: "linear-gradient(109.22962099323206deg, rgb(60, 0, 8) 0.10347%, rgb(162, 0, 22) 99.471%)" }} onSubmit={handleSubmit} noValidate>
          <div className="flex gap-[24px] items-end w-full">
            <div className="flex flex-1 gap-[24px] items-start min-w-px">
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px"><label htmlFor="net-company" className="font-['Inter'] font-medium leading-[1.2] text-[14px] text-white w-full">Company *</label><input id="net-company" type="text" placeholder="Enter your Company" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] font-normal text-[#111] text-[16px] outline-none focus:border-[#fd022c] placeholder:text-[#5f6368] placeholder:opacity-60" /></div>
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px"><label htmlFor="net-state" className="font-['Inter'] font-medium leading-[1.2] text-[14px] text-white w-full">State*</label><div className="relative w-full"><select id="net-state" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] font-normal text-[#111] text-[16px] outline-none focus:border-[#fd022c] placeholder:text-[#5f6368] appearance-none cursor-pointer pr-[48px] invalid:text-[#5f6368]" required value={state} onChange={(e: ChangeEvent<HTMLSelectElement>) => setState(e.target.value)}><option value="">Select State</option><option>Delhi</option><option>Haryana</option><option>Karnataka</option><option>Maharashtra</option><option>Tamil Nadu</option><option>Telangana</option><option>Uttar Pradesh</option><option>West Bengal</option></select><span className="absolute pointer-events-none right-[17px] size-[24px] top-[13px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgfb1d9f1da2d1} /></span></div></div>
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px"><label htmlFor="net-city" className="font-['Inter'] font-medium leading-[1.2] text-[14px] text-white w-full">City*</label><div className="relative w-full"><select id="net-city" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] font-normal text-[#111] text-[16px] outline-none focus:border-[#fd022c] placeholder:text-[#5f6368] appearance-none cursor-pointer pr-[48px] invalid:text-[#5f6368]" required value={city} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCity(e.target.value)}><option value="">Select City</option><option>New Delhi</option><option>Gurugram</option><option>Noida</option><option>Bengaluru</option><option>Mumbai</option><option>Pune</option><option>Chennai</option><option>Hyderabad</option><option>Kolkata</option></select><span className="absolute pointer-events-none right-[17px] size-[24px] top-[13px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgfb1d9f1da2d1} /></span></div></div>
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px"><label htmlFor="net-pin" className="font-['Inter'] font-medium leading-[1.2] text-[14px] text-white w-full">Pincode*</label><input id="net-pin" type="text" inputMode="numeric" maxLength={6} value={pin} onChange={(e: ChangeEvent<HTMLInputElement>) => setPin(e.target.value)} placeholder="Enter Pincode" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] font-normal text-[#111] text-[16px] outline-none focus:border-[#fd022c] placeholder:text-[#5f6368]" /></div>
            </div>
            <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] shrink-0 font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Search Service Centers</button>
          </div>
          <p id="net-msg" role="status" className="absolute bottom-[8px] font-['Inter'] left-[32px] text-[12px] text-white/90">{msg}</p>
        </form>
      </div>
    </>
  );
}
