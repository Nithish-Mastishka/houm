import { useState } from 'react';

const CHIP_BASE =
  "border border-solid flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 cursor-pointer font-['Inter'] font-normal leading-[1.5] not-italic text-[16px] text-center whitespace-nowrap";
const CHIP_ACTIVE = `chip bg-[#fd022c] text-white border-[#fd022c] ${CHIP_BASE}`;
const CHIP_IDLE = `chip border-[#e5e5e5] text-[#111] ${CHIP_BASE}`;

interface MktChipsProps {
  labels: readonly string[];
}

/** Category tab chips: the clicked chip is highlighted (red) and marked aria-pressed. Render inside the role="group" container. */
export function MktChips({ labels }: MktChipsProps) {
  const [active, setActive] = useState(0);
  return (
    <>
      {labels.map((label, i) => (
        <button
          key={label}
          type="button"
          aria-pressed={i === active}
          onClick={() => setActive(i)}
          className={i === active ? CHIP_ACTIVE : CHIP_IDLE}
        >
          {label}
        </button>
      ))}
    </>
  );
}
