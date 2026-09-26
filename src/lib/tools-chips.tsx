import type { ReactNode } from 'react';

/** Default single-select chip styling used by the support calculators. */
export const CHIP_CLASS =
  "chip cursor-pointer bg-white border border-[#e5e5e5] border-solid flex flex-col h-[50px] items-start justify-center overflow-clip px-[17px] rounded-[8px] shrink-0 font-['Inter'] font-medium leading-[24px] text-[#5f6368] text-[16px] whitespace-nowrap hover:border-[#fd022c] [&.on]:bg-[#fd022c] [&.on]:text-white";

export interface ChipOption<V> {
  label: ReactNode;
  value: V;
}

interface ChipGroupProps<V> {
  options: readonly ChipOption<V>[];
  /** Index of the selected chip (selection is by position: several chips may share a value). */
  selected: number;
  onSelect: (index: number) => void;
  className: string;
  chipClassName?: string;
}

/** Single-select chip row: the selected chip gets the `on` class and aria-pressed="true". */
export function ChipGroup<V>({ options, selected, onSelect, className, chipClassName = CHIP_CLASS }: ChipGroupProps<V>) {
  return (
    <div role="group" className={className}>
      {options.map((o, i) => (
        <button
          key={i}
          type="button"
          aria-pressed={i === selected}
          onClick={() => onSelect(i)}
          className={i === selected ? `${chipClassName} on` : chipClassName}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
