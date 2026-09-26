import img9d8ca6ffb2e5 from '@/assets/9d8ca6ffb2e5.webp';
import imgbdca989ee686 from '@/assets/bdca989ee686.svg';
import img998fd2fdf7f2 from '@/assets/998fd2fdf7f2.png';
import imge56a982d7d70 from '@/assets/e56a982d7d70.jpg';

export default function TrustedSection() {
  return (
    <>
      <div className="flex flex-col items-start p-[48px] relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(103.89460504141239deg, rgb(60, 0, 8) 0.10347%, rgb(162, 0, 22) 99.471%)" }}>
        <div className="max-w-[1280px] relative shrink-0 w-full">
          <div className="flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
            <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-[308px]">
              <p className="font-['Inter'] font-bold leading-[20px] text-[14px] text-white tracking-[1.4px] uppercase whitespace-nowrap">Trusted by</p>
              <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[32px] text-white w-full">Partnering for<br />a Safer Future.</h2>
            </div>
            <div className="content-start flex flex-[1_0_0] flex-wrap gap-[20px] items-start min-w-px relative">
              <div className="h-[100px] relative rounded-[8px] shrink-0 w-[183.5px] bg-white overflow-hidden">
                <img alt="DLF logo" className="absolute h-[36.22%] left-[5.9%] max-w-none top-[31.35%] w-[88.07%]" src={img9d8ca6ffb2e5} />
              </div>
              <div className="bg-white h-[100px] overflow-clip relative rounded-[8px] shrink-0 w-[183.5px]">
                <div className="absolute h-[20px] left-[32.5px] overflow-clip top-[39.84px] w-[116px]">
                  <div className="absolute inset-[-0.01%_0.01%_-0.11%_0]">
                    <img alt="Havells logo" className="absolute block inset-0 max-w-none size-full" src={imgbdca989ee686} />
                  </div>
                </div>
              </div>
              <div className="h-[100px] relative rounded-[8px] shrink-0 w-[183.5px] bg-white overflow-hidden">
                <img alt="Partner logo" className="absolute h-[45.14%] left-[1.96%] max-w-none top-[27.43%] w-full" src={img998fd2fdf7f2} />
              </div>
              <div className="h-[100px] relative rounded-[8px] shrink-0 w-[183.5px] bg-white overflow-hidden">
                <img alt="Partner logo" className="absolute h-[80.19%] left-[30.97%] max-w-none top-[9.58%] w-[37.51%]" src={imge56a982d7d70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
