import { useCallback, useState } from 'react';

const CAPTCHA_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
/** Code shown on first render (matches the approved design). */
export const INITIAL_CAPTCHA = 'Y6BV77';

export function randomCaptcha(length = 6): string {
  let s = '';
  for (let i = 0; i < length; i++) s += CAPTCHA_CHARS.charAt(Math.floor(Math.random() * CAPTCHA_CHARS.length));
  return s;
}

/** Simple client-side captcha: current code, a refresh action, and a case-insensitive matcher. */
export function useCaptcha() {
  const [code, setCode] = useState(INITIAL_CAPTCHA);
  const refresh = useCallback(() => setCode(randomCaptcha()), []);
  const matches = useCallback((input: string) => input.trim().toUpperCase() === code, [code]);
  return { code, refresh, matches };
}

export interface FormStatus {
  text: string;
  color: string;
}
