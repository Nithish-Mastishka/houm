import { useEffect, useRef, useState, type FormEvent } from 'react';
import chatIcon from '@/assets/shared-chat.svg';

interface Message {
  from: 'bot' | 'me';
  text: string;
}

const AUTO_REPLY = 'Thanks! Our team will get back to you shortly. You can also reach us at hello@houm.com or +91 123 456 7890.';

interface ChatWidgetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Floating "Icons/Chat support" button with a simple chat panel. Wire `send` to your chat backend. */
export default function ChatWidget({ open, onOpenChange }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: 'Hi! How can we help you with your HOUM cameras today?' }]);
  const [draft, setDraft] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [messages]);

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'me', text }, { from: 'bot', text: AUTO_REPLY }]);
    setDraft('');
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open live chat"
        onClick={() => onOpenChange(!open)}
        className="fixed bottom-6 right-6 z-[60] size-16 rounded-full hover:scale-105"
      >
        <img src={chatIcon} alt="" className="-mb-5 -ml-4 -mr-4 -mt-3 block size-24 max-w-none" />
      </button>
      {open && (
        <div role="dialog" aria-label="Live chat" className="fixed bottom-[100px] right-6 z-[61] w-[min(320px,calc(100vw-32px))] overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(17,17,17,0.2)]">
          <div className="flex items-center justify-between bg-houm-maroon px-5 py-4 text-[16px] text-white">
            <strong>HOUM Support</strong>
            <button type="button" aria-label="Close chat" onClick={() => onOpenChange(false)} className="text-2xl leading-none">×</button>
          </div>
          <div ref={bodyRef} className="flex h-[260px] flex-col gap-2 overflow-y-auto bg-houm-bg p-4">
            {messages.map((m, i) => (
              <p
                key={i}
                className={
                  m.from === 'me'
                    ? 'max-w-[85%] self-end rounded-[16px_16px_4px_16px] border border-houm-red bg-houm-red px-3 py-2.5 text-[14px] leading-5 text-white'
                    : 'max-w-[85%] rounded-[16px_16px_16px_4px] border border-[#e5e5e5] bg-white px-3 py-2.5 text-[14px] leading-5 text-[#3f4347]'
                }
              >
                {m.text}
              </p>
            ))}
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-[#e5e5e5] p-3">
            <label htmlFor="chat-input" className="sr-only-text">Message</label>
            <input
              id="chat-input"
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your message"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-[#e5e5e5] px-3.5 py-2.5 text-[14px] focus:outline-2 focus:outline-houm-red"
            />
            <button type="submit" className="rounded-full bg-houm-red px-4 text-[14px] font-medium text-white">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
