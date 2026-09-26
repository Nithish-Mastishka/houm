import SolutionsCarousel, { type SolutionCard } from '@/lib/core-solutions-carousel';
import imge70279e5d5f3 from '@/assets/e70279e5d5f3.svg';
import imgb4fe14e71f02 from '@/assets/b4fe14e71f02.webp';
import img0c266e3d2a18 from '@/assets/0c266e3d2a18.svg';
import img8c072694616c from '@/assets/8c072694616c.jpg';
import img2c8eedf25dc3 from '@/assets/2c8eedf25dc3.jpg';
import img608a23739cbe from '@/assets/608a23739cbe.webp';
import img4a85326e869a from '@/assets/4a85326e869a.jpg';
import imgfc4cce1ce6a5 from '@/assets/fc4cce1ce6a5.webp';
import img9c577d3461ed from '@/assets/9c577d3461ed.webp';
import img324cf7564a87 from '@/assets/324cf7564a87.webp';
import img0d8b31c52a0d from '@/assets/0d8b31c52a0d.webp';
import imge825113a14f7 from '@/assets/e825113a14f7.jpg';
import img9f5e1ee98224 from '@/assets/9f5e1ee98224.jpg';

const cards: SolutionCard[] = [
  { to: '/sol-banking', image: imgb4fe14e71f02, title: 'Banking', text: 'Monitor branches, ATMs and high-value areas with connected surveillance built for visibility and control.' },
  { to: '/sol-hospitality', image: img8c072694616c, title: 'Hospitality & Healthcare', text: 'Support safer environments for guests, patients and staff with dependable monitoring across every critical space.' },
  { to: '/sol-industrial', image: img2c8eedf25dc3, title: 'Industrial', text: 'Monitor facilities, production areas and warehouses while maintaining visibility across complex operations.' },
  { to: '/sol-campus', image: img608a23739cbe, title: 'Campus', text: 'Create secure campuses with smarter monitoring across classrooms, entrances and shared spaces.' },
  { to: '/sol-real-estate', image: img4a85326e869a, title: 'Real Estate', text: 'From construction sites to finished properties, keep every stage of your development visible.' },
  { to: '/sol-transport', image: imgfc4cce1ce6a5, title: 'Transport', text: 'Extend surveillance across buses, fleets and transportation networks for better visibility on the move.' },
  { to: '/sol-oil-gas', image: img9c577d3461ed, title: 'Oil & Gas', text: 'Stay connected to remote facilities, assets and high-risk environments with intelligent surveillance.' },
  { to: '/sol-retail', image: img324cf7564a87, title: 'Retail', text: 'Improve visibility across storefronts, checkout areas and customer spaces while helping reduce security risks.' },
  { to: '/sol-smart-traffic', image: img0d8b31c52a0d, title: 'Smart Traffic', text: 'Monitor roads, intersections and traffic flow with connected surveillance designed for growing cities.' },
  { to: '/sol-law-enforcement', image: imge825113a14f7, title: 'Law Enforcement', text: 'Connected surveillance helps teams maintain awareness across public spaces, facilities and critical locations.' },
  { to: '/sol-safe-city', image: img9f5e1ee98224, title: 'Safe City', text: 'Connect surveillance across public spaces to help create safer, more responsive urban environments.' },
];

export default function SolutionsSection() {
  return (
    <SolutionsCarousel
      rootClassName="flex flex-col gap-[48px] items-start justify-center overflow-clip relative size-full"
      scrollIcon={imge70279e5d5f3}
      cardArrow={img0c266e3d2a18}
      cards={cards}
      header={
        <>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="w-full text-center font-['Inter'] font-bold leading-[20px] text-[#fd022c] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">SOLUTIONS THAT PROTECT</p>
            <h2 className="font-['Roboto'] font-semibold leading-[1.2] text-[#111] text-[32px] text-center w-full">Comprehensive Solutions.<br />Endless Possibilities.</h2>
          </div>
          <p className="font-['Inter'] leading-[1.5] text-[#5f6368] text-[16px] text-center w-full pb-[0.695px]">We offer a wide range of security solutions designed to meet the unique needs of<br />different industries and environments.</p>
        </>
      }
    />
  );
}
