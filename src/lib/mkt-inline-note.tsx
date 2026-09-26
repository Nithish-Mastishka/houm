import { useCallback, useState, type ReactNode } from 'react';

export const MKT_DOWNLOAD_NOTE = 'Download unavailable in this preview.';
export const MKT_VIDEO_NOTE = 'Video playback is unavailable in this preview.';

export interface InlineNoteState {
  text: string;
  show: (message: string) => void;
}

/** Holds the text of a card's small inline note ("Download unavailable…"). */
export function useInlineNote(): InlineNoteState {
  const [text, setText] = useState('');
  const show = useCallback((message: string) => setText(message), []);
  return { text, show };
}

interface InlineNoteProps {
  note: InlineNoteState;
  /** Original `dl-note` classes (starts at opacity-0; becomes visible once a message is set). */
  className: string;
}

/** The small note span; stays invisible until `note.show()` is called. */
export function InlineNote({ note, className }: InlineNoteProps) {
  return (
    <span className={className} style={note.text ? { opacity: 1 } : undefined} aria-live="polite">
      {note.text}
    </span>
  );
}

interface InlineNoteButtonProps {
  note: InlineNoteState;
  message: string;
  className: string;
  'aria-label'?: string;
  children: ReactNode;
}

/** A button that reveals `message` in the card's InlineNote when clicked. */
export function InlineNoteButton({ note, message, className, children, ...rest }: InlineNoteButtonProps) {
  return (
    <button type="button" aria-label={rest['aria-label']} onClick={() => note.show(message)} className={className}>
      {children}
    </button>
  );
}
