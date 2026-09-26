import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img693e2f0633ce from '@/assets/693e2f0633ce.svg';
import img97bcacb3bc56 from '@/assets/97bcacb3bc56.svg';

interface CameraCategory {
  label: string;
  to: string;
}

const CAMERA_CATEGORIES: CameraCategory[] = [
  { label: 'Smart Fixed Cameras', to: '/smart-fixed-camera' },
  { label: 'Dual-Lens Cameras', to: '/products' },
  { label: 'Smart Bulb Cameras', to: '/products' },
  { label: 'Smart Wi-Fi PT Cameras', to: '/products' },
  { label: 'PTZ Cameras', to: '/products' },
  { label: 'Smart Battery Cameras', to: '/products' },
  { label: 'Doorbell Cameras', to: '/products' },
  { label: 'Outdoor Lantern Cameras', to: '/products' },
  { label: 'Outdoor Floodlight Cameras', to: '/products' },
  { label: 'Outdoor Bullet Cameras', to: '/products' },
  { label: 'Smart Wi-Fi Dome Cameras', to: '/smart-wifi-dome-cameras' },
  { label: 'Low-Power Intelligent Wi-Fi Cameras', to: '/products' },
  { label: '4G Outdoor Cameras', to: '/products' },
];

interface ProductPanelProps {
  /** Route of the category page currently shown (highlighted in the list). */
  current?: string;
  /** Whether the "Cameras" category list starts expanded. */
  defaultOpen?: boolean;
}

/** Products sidebar: model-number search + collapsible categories (Products, Smart Fixed, Smart Wi-Fi Dome). */
export default function ProductPanel({ current, defaultOpen = false }: ProductPanelProps) {
  const navigate = useNavigate();
  const [model, setModel] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(defaultOpen);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!model.trim()) {
      setError('Please enter a model number.');
      return;
    }
    navigate('/product-detail');
  };

  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid flex flex-col gap-[32px] items-start p-[24px] relative rounded-[24px] w-full min-h-full">
      <form className="flex flex-col gap-[16px] items-start w-full" onSubmit={handleSearch}>
        <div className="flex flex-col gap-[4px] items-start w-full">
          <label htmlFor="model-search" className="font-['Inter'] font-normal leading-[1.5] text-[#5f6368] text-[16px]">Product</label>
          <input
            id="model-search"
            type="text"
            placeholder="Enter Model No."
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
              setError('');
            }}
            className="bg-white border border-[#e5e5e5] border-solid h-[50px] px-[17px] py-[15px] rounded-[8px] w-full font-['Inter'] text-[16px] text-[#111] placeholder:text-[#5f6368] placeholder:opacity-60 outline-none focus:border-[#fd022c]"
          />
          <p className={`msg ${error ? '' : 'hidden '}font-['Inter'] text-[#fd022c] text-[12px] leading-[1.5]`}>{error}</p>
        </div>
        <button type="submit" className="bg-[#fd022c] hover:bg-[#e0001f] transition-colors flex gap-[8px] items-center justify-center px-[24px] py-[8px] rounded-[9000px] cursor-pointer">
          <span className="overflow-clip relative shrink-0 size-[24px]">
            <span className="absolute bottom-1/4 left-[16.67%] right-1/4 top-[16.67%]">
              <span className="absolute inset-[-5.36%_-5.35%_-5.36%_-5.36%]"><img alt="" className="block max-w-none size-full" src={img693e2f0633ce} /></span>
            </span>
          </span>
          <span className="font-['Inter'] font-medium leading-[24px] text-[16px] text-white whitespace-nowrap">Search</span>
        </button>
      </form>
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="border-[rgba(0,0,0,0.1)] border-b border-solid flex items-center pb-[16px] w-full">
          <h2 className="flex-1 font-['Poppins'] font-medium leading-[1.2] text-[#111] text-[24px]">Categories</h2>
        </div>
        <div className="flex flex-col gap-[8px] items-start w-full">
          <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="cursor-pointer flex items-start justify-between w-full hover:text-[#fd022c]">
            <span className="font-['Inter'] font-medium leading-[24px] text-[16px] text-left whitespace-nowrap">Cameras</span>
            <span className={`chev flex-none rotate-180 ${open ? '' : '-scale-y-100 '}transition-transform relative size-[24px]`}><img alt="" className="absolute block inset-0 max-w-none size-full" src={img97bcacb3bc56} /></span>
          </button>
          <div className={`flex flex-col gap-[8px] items-start pl-[8px] text-[16px] w-full${open ? '' : ' hidden'}`}>
            {CAMERA_CATEGORIES.map((c) =>
              c.to === current ? (
                <Link key={c.label} to={c.to} aria-current="page" className="font-['Inter'] font-medium leading-[1.2] text-[#fd022c] w-full">{c.label}</Link>
              ) : (
                <Link key={c.label} to={c.to} className="font-['Inter'] font-normal leading-[1.5] text-[#111] w-full hover:text-[#fd022c] transition-colors">{c.label}</Link>
              ),
            )}
          </div>
        </div>
        <Link to="/products" className="font-['Inter'] font-medium leading-[24px] text-[#111] text-[16px] w-full hover:text-[#fd022c] transition-colors">Smart Plugs</Link>
      </div>
    </div>
  );
}
