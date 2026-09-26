import { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import ChatWidget from '@/components/ChatWidget';
import { routes, type SiteRoute } from '@/routes';

/** Scales the fixed 1440px design canvas to the viewport width. */
function useFitToViewport() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const fit = () => ref.current?.style.setProperty('--site-zoom', (document.documentElement.clientWidth / 1440).toFixed(5));
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return ref;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RoutePage({ route, onOpenChat }: { route: SiteRoute; onOpenChat: () => void }) {
  const Component = route.component;
  useEffect(() => {
    document.title = route.slug === 'home' ? 'HOUM – Smart Security. Real Protection.' : `${route.title} | HOUM`;
  }, [route]);
  return (
    <>
      {route.chrome && <Header activeGroup={route.group} onOpenChat={onOpenChat} />}
      <main>
        <Suspense fallback={<div className="min-h-[600px]" />}>
          <Component />
        </Suspense>
      </main>
    </>
  );
}

export default function App() {
  const canvas = useFitToViewport();
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div ref={canvas} className="site-canvas">
        <Routes>
          {routes.map((r) => (
            <Route key={r.slug} path={r.path} element={<RoutePage route={r} onOpenChat={() => setChatOpen(true)} />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <ChatWidget open={chatOpen} onOpenChange={setChatOpen} />
    </BrowserRouter>
  );
}
