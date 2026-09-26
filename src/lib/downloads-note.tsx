import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import imgDownload from '@/assets/9853c6828506.svg';
import imgReleaseNote from '@/assets/0c4a8ce012aa.svg';

type ShowNote = (button: HTMLElement) => void;

const DownloadNoteContext = createContext<ShowNote>(() => {});

const NOTE_WIDTH = 340;
const NOTE_MS = 2800;

interface NoteState {
  visible: boolean;
  top: number;
  left: number;
}

/**
 * Wrapper for a block of download buttons. Renders the dark "Download will be available on the
 * live site" note and positions it above whichever DownloadButton inside it was clicked.
 */
export function DownloadArea({ className, children }: { className: string; children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const [note, setNote] = useState<NoteState>({ visible: false, top: 0, left: 0 });

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const show = useCallback<ShowNote>((button) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const r = button.getBoundingClientRect();
    const q = wrap.getBoundingClientRect();
    setNote({
      visible: true,
      top: Math.max(0, r.top - q.top - 40),
      left: Math.max(0, Math.min(r.left - q.left + r.width / 2 - NOTE_WIDTH / 2, q.width - NOTE_WIDTH)),
    });
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setNote((n) => ({ ...n, visible: false })), NOTE_MS);
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <p
        className="absolute z-30 w-[340px] bg-[#111] text-white text-[13px] leading-[1.4] font-['Inter'] font-medium px-[12px] py-[8px] rounded-[8px] text-center shadow-[0px_4px_12px_rgba(0,0,0,0.2)]"
        style={{ display: note.visible ? 'block' : 'none', top: note.top, left: note.left }}
        role="status"
      >
        Download will be available on the live site
      </p>
      <DownloadNoteContext.Provider value={show}>{children}</DownloadNoteContext.Provider>
    </div>
  );
}

export type DownloadButtonVariant = 'label' | 'icon' | 'release-note';

/**
 * Download action. `label`: icon + red "Download" text; `icon`: icon only; `release-note`: the
 * release-note document icon. All show the inline note of the enclosing DownloadArea.
 */
export function DownloadButton({ variant = 'label' }: { variant?: DownloadButtonVariant }) {
  const show = useContext(DownloadNoteContext);
  const onClick = (e: MouseEvent<HTMLButtonElement>) => show(e.currentTarget);

  if (variant === 'release-note') {
    return (
      <button type="button" aria-label="Release note" onClick={onClick} className="cursor-pointer overflow-clip relative shrink-0 size-[24px] hover:opacity-80">
        <span className="-translate-y-1/2 absolute h-[18px] left-1/4 right-[21.43%] top-1/2"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReleaseNote} /></span>
      </button>
    );
  }

  return (
    <button type="button" aria-label={variant === 'icon' ? 'Download' : undefined} onClick={onClick} className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center py-[8px] relative rounded-[9000px] shrink-0 hover:opacity-80">
      <span className="relative shrink-0 size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDownload} /></span>
      {variant === 'label' && (
        <span className="[word-break:break-word] font-['Inter'] font-medium leading-[24px] not-italic relative shrink-0 text-[#fd022c] text-[16px] text-center whitespace-nowrap">Download</span>
      )}
    </button>
  );
}
