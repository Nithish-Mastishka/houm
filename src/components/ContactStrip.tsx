import img77d3259d0e5e from '@/assets/77d3259d0e5e.svg';
import img8bb6ee8d1c67 from '@/assets/8bb6ee8d1c67.svg';
import imgc09bce1f20aa from '@/assets/c09bce1f20aa.svg';

export default function ContactStrip() {
  return (
    <>
      <div className="content-stretch flex items-start overflow-clip p-[48px] relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(105.57deg, rgb(60, 0, 8) 0.1%, rgb(162, 0, 22) 99.47%)" }}>
        <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-w-px overflow-clip relative">
          <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px overflow-clip relative">
            <div className="relative shrink-0 size-[64px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img77d3259d0e5e} /></div>
            <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
              <p className="font-['Poppins'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-white w-[280px]">hello@houm.com</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px overflow-clip relative">
            <div className="relative shrink-0 size-[64px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={img8bb6ee8d1c67} /></div>
            <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
              <p className="font-['Poppins'] font-medium leading-[1.2] relative shrink-0 text-[24px] text-white w-[280px]">+91 123 456 7890</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-w-px overflow-clip relative">
            <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[3px] py-[5px] relative rounded-[500px] shrink-0 size-[64px]">
              <div className="h-[32px] relative shrink-0 w-[25.6px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgc09bce1f20aa} /></div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
              <div className="font-['Poppins'] font-medium relative shrink-0 text-[24px] text-white w-[280px]">
                <p className="leading-[1.2] mb-0">0123 Add Your Location</p>
                <p className="leading-[1.2]">CityName, IN 123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
