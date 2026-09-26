import { Link } from 'react-router-dom';
import { useFormValidation, type FormRules } from '@/lib/forms-validation';
import img573c6c041832 from '@/assets/573c6c041832.svg';

type FormField = 'name' | 'company' | 'email' | 'phone' | 'state' | 'city';

const RULES: FormRules<FormField> = {
  name: { required: 'Enter your name.' },
  company: { required: 'Enter your company.' },
  email: { required: 'Enter your email address.', kind: 'email' },
  phone: { required: 'Enter your phone number.', kind: 'phone10' },
  state: { required: 'Select your state.' },
  city: { required: 'Select your city.' },
};

export default function MainSection() {
  const form = useFormValidation(RULES, { consent: true });
  const { errors, field, borderStyle, status, setStatus, consent } = form;

  const onSubmit = form.handleSubmit((_values, formEl) => {
    setStatus('Thank you. Your training request is submitted. Our training team will contact you within 2 working days.');
    formEl.reset();
  });

  return (
    <>
      <form noValidate className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[32px] items-start p-[24px] relative size-full" onSubmit={onSubmit}>
        <div className="flex flex-col gap-[48px] items-start w-full">
          <div className="flex flex-col gap-[12px] items-start w-full">
            <h2 className="font-['Poppins'] leading-[1.2] text-[#111] text-[24px] w-full">Register for Training</h2>
            <p className="font-['Inter'] font-normal leading-[1.5] text-[#3f4347] text-[16px] w-full">Please fill the form to register for Training.</p>
          </div>
          <div className="flex flex-wrap gap-[24px] items-start w-full">
            <div className="fld flex flex-col gap-[8px] items-start w-[608px]"><label htmlFor="rq-name" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Name *</label><input id="rq-name" type="text" {...field('name')} style={borderStyle('name')} placeholder="Enter your Name" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.name}</p></div>
            <div className="fld flex flex-col gap-[8px] items-start w-[608px]"><label htmlFor="rq-company" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Company *</label><input id="rq-company" type="text" {...field('company')} style={borderStyle('company')} placeholder="Enter your Company" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.company}</p></div>
            <div className="fld flex flex-col gap-[8px] items-start w-[608px]"><label htmlFor="rq-email" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Email *</label><input id="rq-email" type="email" {...field('email')} style={borderStyle('email')} placeholder="Enter your Email" className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.email}</p></div>
            <div className="fld flex flex-col gap-[8px] items-start w-[608px]"><label htmlFor="rq-phone" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Phone Number *</label><div className="flex items-start w-full"><span className="bg-[#f6f4fc] flex h-[50px] items-center pl-[16px] pr-[12px] rounded-bl-[8px] rounded-tl-[8px] shrink-0 font-['Inter'] text-[16px] text-[#5f6368] leading-[1.5]">+91</span><input id="rq-phone" type="tel" inputMode="numeric" maxLength={10} {...field('phone')} style={borderStyle('phone')} placeholder="Enter your Phone Number" className="bx flex-[1_0_0] min-w-px bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] rounded-br-[8px] rounded-tr-[8px] font-['Inter'] text-[16px] text-[#111] placeholder:text-[rgba(95,99,104,0.6)] outline-none focus:border-[#fd022c]" /></div><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.phone}</p></div>
            <div className="fld flex flex-col gap-[8px] items-start w-[396px]"><label htmlFor="rq-state" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">State*</label><div className="bx relative bg-white border border-[#e5e5e5] border-solid h-[50px] rounded-[8px] w-full focus-within:border-[#fd022c]" style={borderStyle('state')}><select id="rq-state" {...field('state')} className="appearance-none bg-transparent size-full pl-[17px] pr-[44px] font-['Inter'] text-[16px] text-[#5f6368] outline-none cursor-pointer"><option value="">Select State</option><option>Delhi</option><option>Gujarat</option><option>Karnataka</option><option>Kerala</option><option>Maharashtra</option><option>Tamil Nadu</option><option>Telangana</option><option>Uttar Pradesh</option><option>West Bengal</option></select><span className="absolute right-[17px] top-[13px] size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img573c6c041832} /></span></div><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.state}</p></div>
            <div className="fld flex flex-col gap-[8px] items-start w-[396px]"><label htmlFor="rq-city" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">City*</label><div className="bx relative bg-white border border-[#e5e5e5] border-solid h-[50px] rounded-[8px] w-full focus-within:border-[#fd022c]" style={borderStyle('city')}><select id="rq-city" {...field('city')} className="appearance-none bg-transparent size-full pl-[17px] pr-[44px] font-['Inter'] text-[16px] text-[#5f6368] outline-none cursor-pointer"><option value="">Select City</option><option>Ahmedabad</option><option>Bengaluru</option><option>Chennai</option><option>Hyderabad</option><option>Kochi</option><option>Kolkata</option><option>Mumbai</option><option>New Delhi</option><option>Noida</option><option>Pune</option></select><span className="absolute right-[17px] top-[13px] size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img573c6c041832} /></span></div><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{errors.city}</p></div>
            <div className="fld flex flex-col gap-[8px] items-start w-[396px]"><label htmlFor="rq-type" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Training Type</label><div className="bx relative bg-white border border-[#e5e5e5] border-solid h-[50px] rounded-[8px] w-full focus-within:border-[#fd022c]"><select id="rq-type" className="appearance-none bg-transparent size-full pl-[17px] pr-[44px] font-['Inter'] text-[16px] text-[#5f6368] outline-none cursor-pointer"><option value="">Select </option><option>Mission Tech Level 1</option><option>Mission Tech Level 2</option><option>Hands-on Workshop</option><option>Partners&rsquo; Meet &amp; Training</option><option>Product Webinar</option></select><span className="absolute right-[17px] top-[13px] size-[24px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img573c6c041832} /></span></div><p className="err font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite" /></div>
            <div className="flex flex-col gap-[8px] items-start pb-[6px] w-[1248px]">
              <label htmlFor="rq-comment" className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[14px] w-full">Comment</label>
              <textarea id="rq-comment" rows={3} placeholder="Comment Here...." className="bg-white border border-[#e5e5e5] border-solid h-[74px] pt-[13px] px-[17px] rounded-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full resize-y font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] outline-none focus:border-[#fd022c]" />
            </div>
          </div>
        </div>
        <div className="border-[rgba(229,189,186,0.2)] border-solid border-t flex flex-col gap-[32px] items-start pt-[33px] w-[519px]">
          <div className="w-full"><label className="flex gap-[12px] items-start justify-center w-full cursor-pointer"><input type="checkbox" ref={consent.ref} className="consent appearance-none shrink-0 size-[20px] m-[2px] bg-white border border-[#bfc3c8] rounded-[4px] checked:bg-[#fd022c] checked:border-[#fd022c] cursor-pointer" /><span className="flex-[1_0_0] min-w-px font-['Inter'] font-normal text-[14px] leading-[20px] py-px text-[#5f6368]">I consent to HOUM collecting and processing my details to contact me regarding my inquiry. I have read and agree to the Privacy Policy and <Link to="/support-warranty" className="text-[#fd022c] hover:underline">Terms of Service</Link><span className="text-[#5c403d]">.</span></span></label><p className="cerr pl-[36px] pt-[4px] font-['Inter'] text-[#f22f38] text-[12px] leading-[1.5] empty:hidden" aria-live="polite">{consent.error}</p></div>
          <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors cursor-pointer flex items-center justify-center px-[40px] py-[16px] rounded-[9000px]  font-['Inter'] font-medium leading-[1.2] text-[18px] text-center text-white whitespace-nowrap">Register Now</button>
          <p className="ok font-['Inter'] font-medium text-[#127a3a] text-[15px] leading-[1.4] empty:hidden" aria-live="polite">{status}</p>
        </div>
      </form>
    </>
  );
}
