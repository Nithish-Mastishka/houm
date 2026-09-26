import { Link } from 'react-router-dom';
import { useFormValidation, type FormRules } from '@/lib/forms-validation';
import imgd45f832ca090 from '@/assets/d45f832ca090.svg';
import imga965a4bb262b from '@/assets/a965a4bb262b.webp';
import imgf3ead9230e02 from '@/assets/f3ead9230e02.svg';
import imgc4d500a3f866 from '@/assets/c4d500a3f866.svg';
import imgba3f6d6ac257 from '@/assets/ba3f6d6ac257.svg';
import img78560d0e5b0e from '@/assets/78560d0e5b0e.svg';
import img307ccd82d02c from '@/assets/307ccd82d02c.svg';
import imgec17f0e76517 from '@/assets/ec17f0e76517.svg';
import imgf9e32ac40fcf from '@/assets/f9e32ac40fcf.svg';
import img0451ae7fbd74 from '@/assets/0451ae7fbd74.svg';
import img84f76de5801f from '@/assets/84f76de5801f.svg';
import img88274e3a2303 from '@/assets/88274e3a2303.svg';
import imgb6d59a219d3d from '@/assets/b6d59a219d3d.svg';
import img0b58de177c1b from '@/assets/0b58de177c1b.svg';

type FormField = 'name' | 'company' | 'email' | 'phone' | 'pay';

const RULES: FormRules<FormField> = {
  name: { required: 'Enter your full name.' },
  company: { required: 'Enter your company.' },
  email: { required: 'Enter your email address.', kind: 'email' },
  phone: { required: 'Enter your phone number.', kind: 'phone10' },
  pay: { required: 'Select a payment mode.' },
};

export default function MainSection() {
  const form = useFormValidation(RULES, { consent: true });
  const { errors, field, borderStyle, status, setStatus, consent } = form;

  const onSubmit = form.handleSubmit((_values, formEl) => {
    setStatus('Thank you. Your registration for Mission Tech Level 2 is received. We will email the payment and joining details.');
    formEl.reset();
  });

  return (
    <>
      <div className="flex flex-wrap items-start px-[72px] relative size-full">
        <div className="flex flex-[1_0_0] items-start min-w-px">
          <section className="flex flex-col gap-[24px] items-start shrink-0 w-[856px]">
            <h2 className="pb-[8px] font-['Poppins'] leading-[1.2] text-[#111] text-[24px] whitespace-nowrap">Mission Tech Level 2</h2>
            <div className="flex items-start"><Link to="/mkt-brochures" className="flex flex-col items-start justify-center px-[8px] py-[4px] rounded-[8px] shrink-0 hover:bg-[#fff1f2]"><span className="flex gap-[8px] items-center justify-center py-[12px]"><span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgd45f832ca090} /></span><span className="font-['Inter'] font-medium leading-[24px] text-[#fd022c] text-[16px] whitespace-nowrap">E- Brochure Mission Tech Level 2</span></span></Link></div>
            <div className="bg-white border border-[#e5e5e5] border-solid h-[1013px] overflow-clip p-px relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full">
              <div className="absolute inset-px overflow-hidden rounded-[16px]"><img alt="Mission Tech 2.0 Level II poster: a three day advanced certification program on Video Surveillance Project Management, 09 to 11 September 2026, Kochi, Kerala" className="absolute h-[117.69%] left-[-1.2%] max-w-none top-[0.02%] w-[104.49%]" src={imga965a4bb262b} /></div>
            </div>
          </section>
        </div>
        <form noValidate className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[32px] items-start p-[24px] shrink-0 w-[421px]" onSubmit={onSubmit}>
          <div className="flex flex-col gap-[48px] items-start w-full">
            <div className="flex flex-col gap-[12px] items-center w-full">
              <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Register for Training</h2>
              <p className="font-['Inter'] font-normal leading-[1.5] text-[#3f4347] text-[16px] w-full">Please fill the form to register for Training.</p>
            </div>
            <div className="bg-[rgba(254,242,242,0.5)] flex flex-col gap-[12px] items-start p-[20px] rounded-[8px] w-full">
              <div className="flex gap-[8px] h-full items-start shrink-0 pr-[16px]"><span className="relative shrink-0 size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgf3ead9230e02} /></span><div className="flex flex-col items-end"><p className="font-['Inter'] font-medium leading-[1.2] text-[#3f4347] text-[14px] whitespace-nowrap">22 May 2025 - 26 May 2025</p></div></div>
              <div className="flex gap-[8px] h-full items-start shrink-0 w-[151px]"><span className="bg-white flex items-center justify-center overflow-clip p-[2px] rounded-[3000px] shrink-0 size-[16px]"><span className="aspect-[38.4/48] h-full relative shrink-0"><span className="absolute inset-[-2.08%_-2.6%_-3.19%_-2.6%]"><img alt="" className="block max-w-none size-full" src={imgc4d500a3f866} /></span></span></span><div className="flex flex-col items-start"><p className="font-['Inter'] font-medium leading-[1.2] text-[#3f4347] text-[14px] whitespace-nowrap">Kerala- Malayalam</p></div></div>
            </div>
            <div className="flex flex-wrap gap-[24px] items-start w-full">
              <div className="fld flex flex-col gap-[8px] items-start w-[373px]"><label htmlFor="ptm-name" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Full Name *</label><input id="ptm-name" type="text" {...field('name')} style={borderStyle('name')} placeholder="Enter your Name" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.name}</p></div>
              <div className="fld flex flex-col gap-[8px] items-start w-[373px]"><label htmlFor="ptm-company" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Company *</label><input id="ptm-company" type="text" {...field('company')} style={borderStyle('company')} placeholder="Enter your Company" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.company}</p></div>
              <div className="fld flex flex-col gap-[8px] items-start w-[373px]"><label htmlFor="ptm-email" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Email *</label><input id="ptm-email" type="email" {...field('email')} style={borderStyle('email')} placeholder="Enter your Email" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.email}</p></div>
              <div className="fld flex flex-col gap-[8px] items-start w-[373px]"><label htmlFor="ptm-phone" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Phone Number *</label><div className="flex items-start w-full"><span className="bg-[#f6f4fc] flex h-[50px] items-center pl-[16px] pr-[12px] rounded-bl-[8px] rounded-tl-[8px] shrink-0 font-['Inter'] text-[16px] text-[#5f6368] leading-[1.5]">+91</span><input id="ptm-phone" type="tel" inputMode="numeric" maxLength={10} {...field('phone')} style={borderStyle('phone')} placeholder="Enter your Phone Number" className="bx flex-[1_0_0] min-w-px bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-br-[8px] rounded-tr-[8px] font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /></div><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.phone}</p></div>
              <div className="fld flex flex-col gap-[8px] items-start w-[373px]"><label htmlFor="ptm-state" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">State</label><div className="bx relative bg-white border border-[#e5e5e5] border-solid h-[50px] rounded-[8px] w-full focus-within:border-[#fd022c]"><select id="ptm-state" className="appearance-none bg-transparent size-full pl-[17px] pr-[44px] font-['Inter'] text-[16px] text-[#5f6368] outline-none cursor-pointer"><option value="">Select State</option><option>Delhi</option><option>Gujarat</option><option>Karnataka</option><option>Kerala</option><option>Maharashtra</option><option>Tamil Nadu</option><option>Telangana</option><option>Uttar Pradesh</option><option>West Bengal</option></select><span className="absolute right-[17px] top-[13px] size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgba3f6d6ac257} /></span></div><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite" /></div>
              <div className="fld flex flex-col gap-[8px] items-start w-[373px]"><label htmlFor="ptm-pay" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Payment Mode*</label><div className="bx relative bg-white border border-[#e5e5e5] border-solid h-[50px] rounded-[8px] w-full focus-within:border-[#fd022c]" style={borderStyle('pay')}><select id="ptm-pay" {...field('pay')} className="appearance-none bg-transparent size-full pl-[17px] pr-[44px] font-['Inter'] text-[16px] text-[#5f6368] outline-none cursor-pointer"><option value="">Select Payment Mode</option><option>Online (UPI / Card / Net Banking)</option><option>Bank Transfer (NEFT / RTGS)</option><option>Cheque / Demand Draft</option></select><span className="absolute right-[17px] top-[13px] size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img78560d0e5b0e} /></span></div><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.pay}</p></div>
            </div>
          </div>
          <div className="border-[rgba(229,189,186,0.2)] border-solid border-t flex flex-col gap-[32px] items-center pt-[33px] w-full">
            <div className="w-full"><label className="flex gap-[12px] items-start justify-center w-full cursor-pointer"><input type="checkbox" ref={consent.ref} className="consent appearance-none shrink-0 size-[20px] m-[2px] bg-white border border-[#bfc3c8] rounded-[4px] checked:bg-[#fd022c] checked:border-[#fd022c] cursor-pointer" /><span className="flex-[1_0_0] min-w-px font-['Inter'] font-normal text-[14px] leading-[20px] py-px text-[#5f6368]">I consent to HOUM collecting and processing my details to contact me regarding my inquiry. I have read and agree to the Privacy Policy and <Link to="/support-warranty" className="text-[#fd022c] hover:underline">Terms of Service</Link><span className="text-[#5c403d]">.</span></span></label><p className="cerr pl-[36px] pt-[4px] font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{consent.error}</p></div>
            <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px] w-full font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Register Now</button>
            <p className="ok font-['Inter'] font-medium text-[#127a3a] text-[15px] leading-[1.4] empty:hidden" aria-live="polite">{status}</p>
          </div>
          <div className="bg-white border border-[#e5e5e5] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start p-[25px] relative rounded-[16px] shrink-0 w-[394.67px]">
        <h3 className="border-[#fd022c] border-b-2 border-solid pb-[6px] font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] whitespace-nowrap">Get in Touch</h3>
        <ul className="flex flex-col gap-[16px] items-start w-full font-['Inter'] font-normal text-[#3f4347] text-[16px] leading-[1.5]">
          <li className="flex gap-[8px] items-start w-full"><span className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img307ccd82d02c} /></span><a href="mailto:training@houmsecurity.com" className="hover:text-[#fd022c]">training@houmsecurity.com</a></li>
          <li className="flex gap-[8px] items-start w-full"><span className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgec17f0e76517} /></span><a href="tel:1800120455566" className="hover:text-[#fd022c]">1800 120 455566</a></li>
          <li className="flex gap-[8px] items-start w-full"><span className="relative shrink-0 size-[32px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgec17f0e76517} /></span><a href="tel:+918800952952" className="hover:text-[#fd022c]">+91 88009 52952</a></li>
          <li className="flex gap-[8px] items-start w-full"><span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgf9e32ac40fcf} /></span><span>Mon - Sat | 10:00 AM - 06:00 PM</span></li>
        </ul>
      </div>
          <Link to="/training-request" className="bg-[#fff1f2] hover:bg-[#ffe5e5] transition-colors flex items-start p-[24px] rounded-[16px] shrink-0 w-full">
        <span className="pr-[16px] shrink-0 block"><span className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start p-[8px] rounded-[12px] shrink-0">
        <span className="overflow-clip relative shrink-0 size-[32px] block">
          <span className="absolute inset-[23.38%_13.36%_30.06%_13.36%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img0451ae7fbd74} /></span>
          <span className="absolute inset-[16.7%_0]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img84f76de5801f} /></span>
          <span className="absolute inset-[51.77%_40.08%_45.09%_55.11%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img88274e3a2303} /></span>
          <span className="absolute inset-[51.77%_20.04%_45.09%_63.47%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgb6d59a219d3d} /></span>
          <span className="absolute inset-[58.46%_23.38%_38.41%_63.47%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img0b58de177c1b} /></span>
          <span className="absolute inset-[58.46%_40.08%_38.41%_55.11%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img88274e3a2303} /></span>
        </span>
      </span></span>
        <span className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px">
          <span className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px]">Can&apos;t find what you&apos;re looking for?</span>
          <span className="pb-[8px] font-['Inter'] font-normal text-[#5f6368] text-[14px] block"><p className="leading-[20px]">Request a customized training session for your team.</p></span>
          <span className="bg-[#fd022c] flex items-center justify-center px-[24px] py-[8px] rounded-[9000px] font-['Inter'] font-medium leading-[24px] text-[16px] text-white whitespace-nowrap">Register Now</span>
        </span>
      </Link>
        </form>
      </div>
    </>
  );
}
