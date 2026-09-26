import SolutionsCarousel, { type SolutionCard } from '@/lib/core-solutions-carousel';
import img9727dfdb1564 from '@/assets/9727dfdb1564.svg';
import img80db8d78a1e5 from '@/assets/80db8d78a1e5.webp';
import img4d909afc9203 from '@/assets/4d909afc9203.svg';
import imgff0654af5e18 from '@/assets/ff0654af5e18.jpg';
import img07b367c2c648 from '@/assets/07b367c2c648.jpg';
import img42a10d2d0359 from '@/assets/42a10d2d0359.webp';
import imge584432d9eaa from '@/assets/e584432d9eaa.jpg';
import img96050dbfb479 from '@/assets/96050dbfb479.webp';
import img0470de2a5a83 from '@/assets/0470de2a5a83.webp';
import img712942fd576e from '@/assets/712942fd576e.webp';
import imgb62f07f8eda4 from '@/assets/b62f07f8eda4.webp';
import img2854f51cdf51 from '@/assets/2854f51cdf51.jpg';
import img4130d9a0629d from '@/assets/4130d9a0629d.jpg';

const cards: SolutionCard[] = [
  { to: '/sol-banking', image: img80db8d78a1e5, title: 'Banking', text: 'Monitor branches, ATMs and high-value areas with connected surveillance built for visibility and control.' },
  { to: '/sol-hospitality', image: imgff0654af5e18, title: 'Hospitality & Healthcare', text: 'Support safer environments for guests, patients and staff with dependable monitoring across every critical space.' },
  { to: '/sol-industrial', image: img07b367c2c648, title: 'Industrial', text: 'Monitor facilities, production areas and warehouses while maintaining visibility across complex operations.' },
  { to: '/sol-campus', image: img42a10d2d0359, title: 'Campus', text: 'Create secure campuses with smarter monitoring across classrooms, entrances and shared spaces.' },
  { to: '/sol-real-estate', image: imge584432d9eaa, title: 'Real Estate', text: 'From construction sites to finished properties, keep every stage of your development visible.' },
  { to: '/sol-transport', image: img96050dbfb479, title: 'Transport', text: 'Extend surveillance across buses, fleets and transportation networks for better visibility on the move.' },
  { to: '/sol-oil-gas', image: img0470de2a5a83, title: 'Oil & Gas', text: 'Stay connected to remote facilities, assets and high-risk environments with intelligent surveillance.' },
  { to: '/sol-retail', image: img712942fd576e, title: 'Retail', text: 'Improve visibility across storefronts, checkout areas and customer spaces while helping reduce security risks.' },
  { to: '/sol-smart-traffic', image: imgb62f07f8eda4, title: 'Smart Traffic', text: 'Monitor roads, intersections and traffic flow with connected surveillance designed for growing cities.' },
  { to: '/sol-law-enforcement', image: img2854f51cdf51, title: 'Law Enforcement', text: 'Connected surveillance helps teams maintain awareness across public spaces, facilities and critical locations.' },
  { to: '/sol-safe-city', image: img4130d9a0629d, title: 'Safe City', text: 'Connect surveillance across public spaces to help create safer, more responsive urban environments.' },
];

export default function SolutionsSection() {
  return (
    <SolutionsCarousel
      rootClassName="flex flex-col gap-[48px] items-start justify-center px-[72px] relative size-full"
      scrollIcon={img9727dfdb1564}
      cardArrow={img4d909afc9203}
      cards={cards}
      header={
        <>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="w-full text-center font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">SECURITY, TAILORED TO YOU</p>
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] text-center w-full">Smart Solutions for Every Industry</h2>
          </div>
          <p className="font-['Inter'] leading-[1.5] text-[#5f6368] text-[16px] text-center w-full pb-[0.695px]">From heart care to pediatrics, discover trusted specialists and hospitals near you without the confusion.</p>
        </>
      }
    />
  );
}
