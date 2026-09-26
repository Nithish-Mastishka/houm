import { ProductFilters, ProductGridSection, type ProductCardData } from '@/lib/core-product-filters';
import img351fd684b213 from '@/assets/351fd684b213.svg';
import img08807e07b691 from '@/assets/08807e07b691.svg';
import img16949eeab311 from '@/assets/16949eeab311.svg';
import img689873cd9fd8 from '@/assets/689873cd9fd8.svg';
import img15f514c6bdd0 from '@/assets/15f514c6bdd0.svg';
import imgf977166e508b from '@/assets/f977166e508b.jpg';
import img8e4006216692 from '@/assets/8e4006216692.jpg';
import img2491b5dbb222 from '@/assets/2491b5dbb222.jpg';
import imgbf0736c5fc12 from '@/assets/bf0736c5fc12.jpg';
import imgd3e3b172fd7b from '@/assets/d3e3b172fd7b.jpg';

const PRODUCTS: ProductCardData[] = [
  { model: 'HOUM-K268', description: '4MP Wi-Fi Dome Camera', images: [{ src: imgf977166e508b, className: 'absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]' }], tags: ['4 MP', 'IR 30m', 'Wi-Fi'] },
  { model: 'HOUM-P168', description: '4MP Wi-Fi Dome Camera', images: [{ src: img8e4006216692, className: 'absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]' }], tags: ['4 MP', 'IR 30m', 'Wi-Fi'] },
  { model: 'HOUM-P170', description: '4MP Wi-Fi Dome Camera', images: [{ src: img2491b5dbb222, className: 'absolute h-full left-[-11.32%] top-[-0.11%] w-[111.45%] max-w-none transition-transform duration-300 group-hover:scale-[1.04]' }], tags: ['4 MP', 'IR 30m', 'Wi-Fi'] },
];

const MORE_PRODUCTS: ProductCardData[] = [
  { model: 'HOUM-K268', description: '4MP Wi-Fi Dome Camera', images: [{ src: imgf977166e508b, className: 'absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]' }], tags: ['4 MP', 'IR 30m', 'Wi-Fi'] },
  { model: 'HOUM-K220', description: '2MP Smart Fixed Camera', images: [{ src: imgbf0736c5fc12, className: 'absolute h-[100.05%] left-[3.66%] top-[-0.05%] w-[92.68%] max-w-none transition-transform duration-300 group-hover:scale-[1.04]' }], tags: ['5m IR', 'Wi-Fi'] },
  { model: 'HOUM-K218', description: '2MP Smart Fixed Camera', images: [{ src: imgd3e3b172fd7b, className: 'absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24px] size-full transition-transform duration-300 group-hover:scale-[1.04]' }], tags: ['5m IR', 'Wi-Fi'] },
];

const FILTER_ICONS = { found: img351fd684b213, filter: img08807e07b691, chevron: img16949eeab311, remove: img689873cd9fd8, clear: img15f514c6bdd0 };

export default function GridSection() {
  return (
    <>
      <div className="flex flex-col gap-[48px] items-start relative size-full">
        <ProductFilters countLabel="3 Product Found" initialChips={['Dome', 'Motion Detection', '10 m']} icons={FILTER_ICONS} />
        <ProductGridSection title="Smart Wi-Fi Dome Cameras" products={PRODUCTS} />
        <ProductGridSection title="Explore More Cameras" products={MORE_PRODUCTS} showViewAll />
      </div>
    </>
  );
}
