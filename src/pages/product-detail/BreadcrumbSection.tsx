import { Link } from 'react-router-dom';

export default function BreadcrumbSection() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="flex font-['Inter'] font-medium gap-[10px] items-center pr-[11px] py-[8px] size-full text-[16px] whitespace-nowrap">
        <Link to="/" className="leading-[24px] opacity-90 text-[#3f4347] hover:text-[#fd022c]">Home</Link>
        <span className="leading-[24px] opacity-80 text-[#c4c4d6]">/</span>
        <Link to="/products" className="leading-[24px] opacity-90 text-[#3f4347] hover:text-[#fd022c]">Product </Link>
        <span className="leading-[24px] opacity-90 text-[#3f4347]">/</span>
        <Link to="/smart-wifi-dome-cameras" className="leading-[24px] opacity-90 text-[#3f4347] hover:text-[#fd022c]">Smart Wi-Fi Dome Cameras</Link>
        <span className="leading-[24px] opacity-90 text-[#3f4347]">/</span>
        <span className="leading-[1.2] text-[#111]">HOUM-P168</span>
      </nav>
    </>
  );
}
