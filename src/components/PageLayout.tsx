import type { CSSProperties, ReactElement, ReactNode } from 'react';

/** Height of the shared top bar (72px) + navbar (75px). Section y values are measured from the Figma frame top. */
export const CHROME_HEIGHT = 147;

interface PageProps {
  /** Page background (Figma frame fill). */
  bg: string;
  /** Figma frame height; any space below the last section is kept as bottom padding. */
  height?: number | null;
  /** false for full-screen pages without top bar and navbar (log in, register, …). */
  chrome: boolean;
  children: ReactNode;
}

interface SectionProps {
  /** Position and size of the section in the 1440px Figma frame. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Let the height follow the content instead of the Figma height. */
  auto?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Sections are laid out in normal document flow: each one gets a top margin equal to the gap
 * to the previous section in the Figma frame, so the page reproduces the design's spacing.
 */
export function Page({ bg, height, chrome, children }: PageProps) {
  const sections = (Array.isArray(children) ? children : [children]).filter(Boolean) as ReactElement<SectionProps>[];
  let prevBottom = chrome ? CHROME_HEIGHT : 0;
  const laidOut = sections.map((el, i) => {
    const { x, y, w, h, auto, style } = el.props;
    const gap = y - prevBottom;
    prevBottom = y + h;
    return (
      <div
        key={i}
        style={{ position: 'relative', marginTop: gap, marginLeft: x, width: w, height: auto ? 'auto' : h, ...style }}
      >
        {el.props.children}
      </div>
    );
  });
  const tail = height ? Math.max(0, height - prevBottom) : 0;
  return (
    <div style={{ background: bg, paddingBottom: tail, display: 'flow-root' }}>
      {laidOut}
    </div>
  );
}

/** Marker component: rendered by <Page>, which positions its children. */
export function Section(props: SectionProps) {
  return <>{props.children}</>;
}
