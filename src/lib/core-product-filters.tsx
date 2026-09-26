import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FilterGroup {
  label: string;
  wrapperClassName: string;
  options: string[];
}

const FILTER_GROUPS: FilterGroup[] = [
  {
    label: 'Product Series',
    wrapperClassName: 'relative shrink-0',
    options: [
      'Smart Fixed Camera', 'Dual Lens Camera', 'Smart Bulb Camera', 'Smart Wi-Fi P/T Indoor Camera', 'Smart Wi-Fi PTZ Indoor Camera',
      'Smart Battery Camera', 'Doorbell', 'Outdoor Lantern Camera', 'Outdoor Floodlight Camera', 'Outdoor Bullet Camera',
      'Smart Wi-Fi Dome Camera', 'Low-Power Intelligent Wi-Fi Camera', '4G Outdoor Camera', '4G Battery Outdoor Camera',
    ],
  },
  { label: 'Connectivity', wrapperClassName: 'relative shrink-0 w-[144px]', options: ['Wi-Fi', '4G'] },
  {
    label: 'Camera Type',
    wrapperClassName: 'relative shrink-0 w-[144px]',
    options: ['Fixed', 'PT', 'PTZ', 'Bullet', 'Dome', 'Dual Lens', 'Bulb', 'Doorbell', 'Battery', 'Floodlight', 'Lantern'],
  },
  { label: 'Resolution', wrapperClassName: 'relative shrink-0 w-[144px]', options: ['2 MP', '3 MP', '4 MP', '5 MP'] },
  { label: 'IR', wrapperClassName: 'relative shrink-0 w-[144px]', options: ['5 m', '10 m', '20 m', '30 m'] },
  {
    label: 'Features',
    wrapperClassName: 'relative shrink-0 w-[144px]',
    options: ['Motion Detection', 'Two-Way Audio', 'Night Vision', 'Auto Tracking', 'Cloud Storage', 'TF Card'],
  },
];

export interface FilterIcons {
  found: string;
  filter: string;
  chevron: string;
  remove: string;
  clear: string;
}

interface ProductFiltersProps {
  countLabel: string;
  initialChips: string[];
  icons: FilterIcons;
}

const OPTION_BASE = "cursor-pointer text-left w-full font-['Inter'] font-normal leading-[20px] text-[14px] hover:text-[#fd022c]";

/** Filter bar: dropdowns toggle chips (one open at a time), chips removable, "Clear all". */
export function ProductFilters({ countLabel, initialChips, icons }: ProductFiltersProps) {
  const [chips, setChips] = useState<string[]>(initialChips);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleOption = (value: string) => {
    setChips((cur) => (cur.includes(value) ? cur.filter((c) => c !== value) : [...cur, value]));
    setOpenGroup(null);
  };
  const removeChip = (value: string) => setChips((cur) => cur.filter((c) => c !== value));

  return (
    <div className="flt flex flex-col gap-[16px] items-start w-full">
      <div className="bg-white flex gap-[3px] items-center p-[8px] rounded-[8px]">
        <span className="flex items-center justify-center p-[8px] size-[32px]"><span className="relative size-[16px]"><span className="absolute inset-[-6.25%]"><img alt="" className="block max-w-none size-full" src={icons.found} /></span></span></span>
        <p className="font-['Inter'] font-medium leading-[24px] text-[#111] text-[16px]">{countLabel}</p>
      </div>
      <div className="bg-white flex items-start p-[24px] rounded-[16px] w-full">
        <div className="flex flex-1 flex-col items-start min-w-px">
          <div className="border-[#e5e5e5] border-b border-solid flex items-start justify-between pb-[16px] w-full">
            <div className="bg-white flex gap-[3px] h-[42px] items-center p-[8px] rounded-[8px] shrink-0 w-[130px]">
              <span className="flex items-center justify-center p-[8px] size-[32px]"><span className="relative size-[16px]"><span className="absolute inset-[-3%]"><img alt="" className="block max-w-none size-full" src={icons.filter} /></span></span></span>
              <p className="font-['Inter'] font-medium leading-[24px] text-[#111] text-[16px]">Filter:</p>
            </div>
            <div className="flex flex-1 flex-wrap gap-[8px] items-start min-w-px">
              {FILTER_GROUPS.map((group) => {
                const isOpen = openGroup === group.label;
                return (
                  <div key={group.label} className={group.wrapperClassName}>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpenGroup(isOpen ? null : group.label)} className="border border-[rgba(0,0,0,0.1)] border-solid flex gap-[4px] items-start p-[8px] rounded-[4px] w-full cursor-pointer hover:border-[#fd022c] bg-white">
                      <span className="font-['Inter'] font-medium leading-[24px] text-[#3f4347] text-[16px] whitespace-nowrap">{group.label}</span>
                      <span className="-scale-y-100 flex-none rotate-180 relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icons.chevron} /></span>
                    </button>
                    <div className={`pf-dd ${isOpen ? '' : 'hidden '}absolute left-0 top-[calc(100%+4px)] z-20 bg-white border border-[rgba(0,0,0,0.1)] border-solid rounded-[4px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] flex flex-col gap-[4px] p-[8px] min-w-full w-max max-w-[280px] text-[#3f4347]`}>
                      {group.options.map((option) => (
                        <button key={option} type="button" aria-pressed={chips.includes(option)} onClick={() => toggleOption(option)} className={chips.includes(option) ? `${OPTION_BASE} text-[#fd022c]` : OPTION_BASE}>{option}</button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between pt-[8px] w-full">
            <div className="chips bg-white flex flex-wrap gap-[24px] items-center p-[8px] rounded-[8px] min-h-[46px]">
              {chips.map((chip) => (
                <span key={chip} data-v={chip} className="border border-[rgba(0,0,0,0.1)] border-solid flex gap-[4px] items-center p-[4px] rounded-[4px] shrink-0">
                  <span className="font-['Inter'] font-normal leading-[20px] text-[#3f4347] text-[14px] whitespace-nowrap">{chip}</span>
                  <button type="button" aria-label="Remove filter" onClick={() => removeChip(chip)} className="cursor-pointer relative shrink-0 size-[12px] hover:opacity-60"><span className="absolute inset-[20.33%_20.34%_20.33%_20.33%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icons.remove} /></span></button>
                </span>
              ))}
            </div>
            <button type="button" onClick={() => setChips([])} className="flex gap-[8px] items-center justify-center py-[8px] rounded-[9000px] cursor-pointer hover:opacity-80">
              <span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icons.clear} /></span>
              <span className="font-['Inter'] font-medium leading-[24px] text-[#fd022c] text-[16px] whitespace-nowrap">Clear all</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface ProductCardImage {
  src: string;
  className: string;
}

export interface ProductCardData {
  model: string;
  description: string;
  images: ProductCardImage[];
  tags: string[];
}

export function ProductCard({ product }: { product: ProductCardData }) {
  const alt = `${product.model} ${product.description}`;
  return (
    <Link to="/product-detail" className="group bg-[#fbfaff] border border-[#e5e5e5] border-solid drop-shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex flex-col items-start p-px relative rounded-[24px] shrink-0 w-[306px] hover:border-[#fd022c] transition-colors">
      <div className="h-[304px] relative rounded-[24px] w-full overflow-hidden">
        {product.images.map((img, i) => <img key={i} alt={alt} className={img.className} src={img.src} />)}
      </div>
      <div className="flex flex-col items-start p-[24px] w-full">
        <p className="font-['Inter'] font-medium leading-[1.2] text-[#111] text-[18px] pb-[4px] group-hover:text-[#fd022c] transition-colors">{product.model}</p>
        <div className="flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] w-full">{product.description}</p>
          <div className="flex gap-[8px] items-start">
            {product.tags.map((tag) => (
              <span key={tag} className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-[4px] py-[2px] rounded-[4px] shrink-0 font-['Inter'] font-normal leading-[20px] text-[#5f6368] text-[14px] whitespace-nowrap">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

/** A titled product grid section, optionally with the "View All Products" link. */
export function ProductGridSection({ title, products, showViewAll = false }: { title: string; products: ProductCardData[]; showViewAll?: boolean }) {
  return (
    <section className="flex flex-col gap-[16px] items-start w-full">
      <div className="flex items-end justify-between w-full min-h-[61px]">
        <div className="flex flex-col items-start py-[16px]">
          <h2 className="font-['Poppins'] font-medium leading-[1.2] text-[#111] text-[24px] whitespace-nowrap">{title}</h2>
        </div>
        {showViewAll && (
          <Link to="/products" className="flex items-center px-[40px] py-[16px] rounded-[5px] shrink-0 hover:bg-[#fff1f2] transition-colors">
            <span className="font-['Inter'] font-medium leading-[24px] text-[#fd022c] text-[16px] whitespace-nowrap">View All Products</span>
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-[24px] items-start  w-full">
        {products.map((p, i) => <ProductCard key={`${p.model}-${i}`} product={p} />)}
      </div>
    </section>
  );
}
