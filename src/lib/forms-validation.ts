import { useCallback, useRef, useState, type CSSProperties, type FormEvent } from 'react';

/**
 * Typed replacement for the legacy `window.hv(form, done)` validator shared by the
 * login / register / training forms.
 *
 * Every field is registered with `field(name)` (spread onto the input/select/textarea).
 * `validate()` walks the fields in rule order, writes one message per field into `errors`,
 * focuses the first invalid field and returns whether the form passed.
 */

export type FieldKind = 'email' | 'phone' | 'phone10' | 'pw' | 'match' | 'code' | 'pin';

export interface FieldRule<K extends string = string> {
  /** Message shown when the field is empty (legacy `data-req`). */
  required: string;
  /** Extra format check (legacy `data-type`). */
  kind?: FieldKind;
  /** For `kind: 'match'` — the field whose value must be equal. */
  match?: K;
  /** For `kind: 'code'` — the expected code (compared case-insensitively). */
  code?: string;
  /** Overrides the default format message of `kind`. */
  invalid?: string;
}

export type FormRules<K extends string> = Record<K, FieldRule<K>>;
export type FormErrors<K extends string> = Partial<Record<K, string>>;
export type FormValues<K extends string> = Record<K, string>;

type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/** Props returned by `field(name)` — spread onto the input/select/textarea. */
export interface FieldProps {
  ref: (el: FieldElement | null) => void;
}

const DEFAULT_INVALID: Record<FieldKind, string> = {
  email: 'Enter a valid email address, like name@company.com.',
  phone: 'Enter a valid mobile number, digits only.',
  phone10: 'Enter a valid 10-digit mobile number.',
  pw: 'Use at least 8 characters.',
  match: 'Passwords do not match.',
  code: 'The code does not match. Try again.',
  pin: 'Enter a 6-digit pincode.',
};

/** Border colour the legacy validator put on an invalid field (or its `.bx` wrapper). */
export const INVALID_BORDER: CSSProperties = { borderColor: '#fd022c' };

const CONSENT_MESSAGE = 'Please accept the Privacy Policy and Terms of Service.';

function isValid<K extends string>(rule: FieldRule<K>, value: string, values: FormValues<K>): boolean {
  switch (rule.kind) {
    case 'email':
      return /^\S+@\S+\.\S+$/.test(value);
    case 'phone':
      return /^\+?[\d\s-]{8,}$/.test(value);
    case 'phone10':
      return /^[6-9]\d{9}$/.test(value);
    case 'pw':
      return value.length >= 8;
    case 'match':
      // legacy compared against the other field's raw (untrimmed) value
      return rule.match === undefined || value === values[rule.match];
    case 'code':
      return value.toUpperCase() === (rule.code ?? '').toUpperCase();
    case 'pin':
      return /^\d{6}$/.test(value);
    default:
      return true;
  }
}

/** Pure check of one value — exported for callers that validate outside the hook. */
export function checkField<K extends string>(rule: FieldRule<K>, raw: string, values: FormValues<K>): string {
  const value = raw.trim();
  if (!value) return rule.required;
  if (!rule.kind || isValid(rule, value, values)) return '';
  return rule.invalid ?? DEFAULT_INVALID[rule.kind];
}

export interface FormValidationOptions<K extends string> {
  /** Errors to show on first render (e.g. the "error state" design). */
  initialErrors?: FormErrors<K>;
  /** Require the consent checkbox (registered with `consent.ref`) after the fields pass. */
  consent?: boolean;
  initialConsentError?: string;
}

export function useFormValidation<K extends string>(rules: FormRules<K>, options: FormValidationOptions<K> = {}) {
  const [errors, setErrors] = useState<FormErrors<K>>(options.initialErrors ?? {});
  const [consentError, setConsentError] = useState(options.initialConsentError ?? '');
  const [status, setStatus] = useState('');

  const rulesRef = useRef(rules);
  rulesRef.current = rules;
  const elements = useRef(new Map<K, FieldElement>());
  const consentEl = useRef<HTMLInputElement | null>(null);

  const field = useCallback(
    (name: K): FieldProps => ({
      ref: (el: FieldElement | null) => {
        if (el) elements.current.set(name, el);
        else elements.current.delete(name);
      },
    }),
    [],
  );

  const values = useCallback((): FormValues<K> => {
    const out = {} as FormValues<K>;
    for (const name of Object.keys(rulesRef.current) as K[]) {
      out[name] = elements.current.get(name)?.value ?? '';
    }
    return out;
  }, []);

  const setError = useCallback((name: K, message: string) => {
    setErrors((prev) => ({ ...prev, [name]: message }));
  }, []);

  /** Runs every rule; returns true when all fields (and consent, if enabled) pass. */
  const validate = useCallback((): boolean => {
    const current = values();
    const next: FormErrors<K> = {};
    let first: K | undefined;
    for (const name of Object.keys(rulesRef.current) as K[]) {
      const message = checkField(rulesRef.current[name], current[name], current);
      if (message) {
        next[name] = message;
        first ??= name;
      }
    }
    setErrors(next);
    const consentBox = consentEl.current;
    if (first !== undefined) {
      elements.current.get(first)?.focus();
      if (consentBox?.checked) setConsentError('');
      return false;
    }
    if (options.consent && consentBox && !consentBox.checked) {
      setConsentError(CONSENT_MESSAGE);
      consentBox.focus();
      return false;
    }
    setConsentError('');
    return true;
  }, [options.consent, values]);

  /** `onSubmit` handler: prevents default, clears the status line, validates, then calls `onValid`. */
  const handleSubmit = useCallback(
    (onValid: (values: FormValues<K>, form: HTMLFormElement) => void) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus('');
      if (validate()) onValid(values(), e.currentTarget);
    },
    [validate, values],
  );

  /** Empties every registered field and the consent box (legacy "value = ''" reset). */
  const clear = useCallback(() => {
    elements.current.forEach((el) => {
      el.value = '';
    });
    if (consentEl.current) consentEl.current.checked = false;
  }, []);

  /** Inline style for the element that carries the field's border. */
  const borderStyle = (name: K): CSSProperties | undefined => (errors[name] ? INVALID_BORDER : undefined);

  return {
    errors,
    setError,
    field,
    values,
    validate,
    handleSubmit,
    clear,
    borderStyle,
    status,
    setStatus,
    consent: {
      ref: (el: HTMLInputElement | null) => {
        consentEl.current = el;
      },
      error: consentError,
    },
  };
}
