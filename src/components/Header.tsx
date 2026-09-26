import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/shared-logo.png';
import arrowWhite from '@/assets/shared-ic-down-white.svg';
import arrowTop from '@/assets/shared-ic-down-top.svg';
import { routeBySlug } from '@/routes';
import { NAV_MENUS, type NavMenu } from './navigation';

const toPath = (slug: string) => routeBySlug[slug]?.path ?? '/';

interface HeaderProps {
  activeGroup?: string;
  onOpenChat: () => void;
}

/** Top bar (72px) + navbar (75px) with click-to-open mega menus. */
export default function Header({ activeGroup, onOpenChat }: HeaderProps) {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => setOpen(null), [location.pathname]);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const menu = NAV_MENUS.find((m) => m.label === open);
  const navItem = 'flex items-center px-4 py-2 text-[16px] leading-[21px] whitespace-nowrap text-white hover:text-houm-red focus-visible:outline-2 focus-visible:outline-houm-red rounded-md';

  return (
    <header ref={ref} className="relative z-50">
      <div className="flex h-[72px] items-center justify-between bg-houm-maroon px-[72px] py-3">
        <button type="button" className="flex h-8 w-[230px] items-center justify-between rounded-lg bg-white/20 px-4 text-[16px] leading-6 text-[#fff8f8]">
          English <img src={arrowTop} alt="" width={24} height={24} />
        </button>
        <nav aria-label="Utility" className="flex w-[363px] justify-center gap-6 text-[14px] leading-5 text-[#fff8f8]">
          <Link to="/working-with-us" className="pb-2 hover:underline underline-offset-4">Working With Us</Link>
          <button type="button" onClick={onOpenChat} className="pb-2 hover:underline underline-offset-4">Live Chat</button>
          <Link to="/register" className="pb-2 hover:underline underline-offset-4">Register</Link>
        </nav>
      </div>

      <div className="flex h-[75px] items-center gap-6 bg-houm-ink px-[72px] py-1.5">
        <div className="flex flex-1 items-center gap-4">
          <Link to="/" aria-label="HOUM home" className="flex w-[121px] justify-center">
            <img src={logo} alt="HOUM" className="h-[63px] w-[132px] max-w-none object-cover" />
          </Link>
          <nav aria-label="Main" className="flex flex-1 items-center justify-center">
            <NavLink to="/about" className={({ isActive }) => `${navItem} ${isActive ? 'text-houm-red' : ''}`}>About</NavLink>
            {NAV_MENUS.map((m) => (
              <button
                key={m.label}
                type="button"
                aria-expanded={open === m.label}
                onClick={() => setOpen(open === m.label ? null : m.label)}
                className={`${navItem} ${open === m.label || activeGroup === m.group ? 'text-houm-red' : ''}`}
              >
                {m.label}
                <img src={arrowWhite} alt="" width={24} height={24} className={`transition-transform ${open === m.label ? 'rotate-180' : ''}`} />
              </button>
            ))}
            <NavLink to="/contact" className={({ isActive }) => `${navItem} ${isActive ? 'text-houm-red' : ''}`}>Contact Us</NavLink>
          </nav>
        </div>
        <div className="flex w-40 justify-center">
          <Link to="/login" className="rounded-[9000px] bg-houm-red px-10 py-4 text-[18px] font-medium leading-[1.2] text-white hover:bg-[#d9001f]">Login</Link>
        </div>
      </div>

      {menu && <MegaMenu menu={menu} />}
    </header>
  );
}

function MegaMenu({ menu }: { menu: NavMenu }) {
  const isProduct = !!menu.categories;
  return (
    <div role="menu" className="absolute left-1/2 top-[147px] flex -translate-x-1/2 gap-4 rounded-3xl bg-white p-8 shadow-[0_24px_60px_rgba(17,17,17,0.18)]">
      {menu.categories && (
        <div className="flex w-[179px] flex-col gap-2 border-r border-[#e5e5e5] pr-2.5">
          {menu.categories.map((c) => (
            <span key={c.label} className={c.active ? 'text-[16px] font-medium leading-[1.2] text-houm-red' : 'text-[16px] leading-[1.5] text-houm-ink'}>{c.label}</span>
          ))}
        </div>
      )}
      {menu.columns.map((col, i) => (
        <div key={i} className={`flex flex-col gap-2 ${isProduct ? 'w-[177px] px-4' : 'w-[191px] p-4'}`}>
          {col.heading && <h4 className="text-[16px] font-medium leading-6 text-houm-ink">{col.heading}</h4>}
          <div className="flex flex-col gap-1">
            {col.links.map((ln) => (
              <Link key={ln.label} to={toPath(ln.to)} className="text-[14px] leading-5 text-[#3f4347] hover:text-houm-red">{ln.label}</Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
