import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DownloadButton } from '@/lib/downloads-note';
import imgProduct from '@/assets/3ded9d2d8a1f.svg';
import imgFile from '@/assets/23c407368bb4.svg';
import imgBack from '@/assets/a3b89639fa02.svg';

const H2 = "[word-break:break-word] font-['Poppins'] font-medium leading-[1.2] not-italic relative shrink-0 text-[#111] text-[24px] whitespace-nowrap";

/** Paragraph lines: every line but the last gets `mb-0`. */
function Lines({ lines, leading }: { lines: string[]; leading: string }) {
  return (
    <>
      {lines.map((line, i) => (
        <p key={i} className={i < lines.length - 1 ? `${leading} mb-0` : leading}>{line}</p>
      ))}
    </>
  );
}

/* ---------- Section headings ---------- */

/** Heading with a "See All" link on the right. `compact` drops the heading's bottom padding. */
export function SeeAllHeading({ title, to, compact = false }: { title: string; to: string; compact?: boolean }) {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full">
      <div className={compact ? 'content-stretch flex items-start relative shrink-0' : 'content-stretch flex items-start pb-[8px] relative shrink-0'}><h2 className={H2}>{title}</h2></div>
      <Link to={to} className="[word-break:break-word] font-['Inter'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#111] text-[16px] text-center whitespace-nowrap hover:text-[#fd022c]">See All</Link>
    </div>
  );
}

/** Heading with a back arrow on the left (the "See All" pages). */
export function BackHeading({ title, to }: { title: string; to: string }) {
  return (
    <div className="content-center flex flex-wrap gap-[0px_16px] items-center relative shrink-0 w-full">
      <Link to={to} aria-label="Back" className="relative shrink-0 size-[32px] hover:opacity-70"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBack} /></Link>
      <h2 className={H2}>{title}</h2>
    </div>
  );
}

/* ---------- Table shell ---------- */

function TableShell({ header, children }: { header: ReactNode; children: ReactNode }) {
  return (
    <div className="bg-white border border-[#e5e5e5] border-solid content-stretch flex flex-col items-start overflow-auto p-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="relative shrink-0 w-full"><div className="content-stretch flex flex-col items-start relative size-full">
        <div className="bg-[#fff0ef] border-[#e5e5e5] border-b border-solid content-stretch flex items-center mb-[-1px] pb-px pl-[8px] relative shrink-0 w-full">{header}</div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">{children}</div>
      </div></div>
    </div>
  );
}

function TableRow({ last, children }: { last: boolean; children: ReactNode }) {
  return <div className={last ? 'content-stretch flex items-center pl-[8px] relative shrink-0 w-full' : 'content-stretch flex items-center mb-[-1px] pl-[8px] relative shrink-0 w-full'}>{children}</div>;
}

const HEAD_TEXT = "[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[#111] text-[16px]";

/** Product icon + model name (+ optional grey description lines). `flexible` stretches the column. */
function ProductCell({ model, description, flexible = false }: { model: string; description?: string[]; flexible?: boolean }) {
  return (
    <div className={flexible ? 'flex flex-[1_0_0] flex-row items-center self-stretch' : 'flex flex-row items-center self-stretch'}><div className={flexible ? 'content-stretch flex gap-[12px] h-full items-center justify-center p-[16px] relative flex-[1_0_0] min-w-px' : 'content-stretch flex gap-[12px] h-full items-center justify-center p-[16px] relative shrink-0 w-[211.22px]'}>
      <div className="h-[20px] relative shrink-0 w-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProduct} /></div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"><p className="[word-break:break-word] font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[14px] w-full">{model}</p>{description && <div className="[word-break:break-word] font-['Inter'] font-normal not-italic text-[#5f6368] text-[12px] w-full"><Lines lines={description} leading="leading-[1.5]" /></div>}</div>
    </div></div>
  );
}

/* ---------- Fixed-width table (User Manual / QIG) ---------- */

export interface ManualRow {
  model: string;
  description: string[];
  category: string;
  docType: string;
  language: string[];
  updated: string;
  size: string;
}

interface ManualHead {
  width?: string;
  lines: string[];
  center?: boolean;
}

const MANUAL_HEAD: ManualHead[] = [
  { width: 'w-[211.22px]', lines: ['PRODUCT', 'MODEL/NAME'] },
  { lines: ['CATEGORY'] },
  { width: 'w-[136.36px]', lines: ['DOCUMENT', 'TYPE'] },
  { lines: ['LANGUAGE'] },
  { width: 'w-[118.58px]', lines: ['LAST', 'UPDATED'] },
  { width: 'w-[81.39px]', lines: ['FILE', 'SIZE'] },
  { width: 'w-[167px]', lines: ['ACTION'], center: true },
];

function FixedCell({ width, children }: { width: string; children: ReactNode }) {
  return <div className="flex flex-row items-center self-stretch"><div className={`content-stretch flex flex-col h-full items-center justify-center p-[16px] relative shrink-0 ${width}`}>{children}</div></div>;
}

const BODY_TEXT = "[word-break:break-word] flex flex-col font-['Inter'] font-normal justify-center not-italic relative shrink-0 text-[#5f6368] text-[16px]";

export function ManualTable({ rows }: { rows: ManualRow[] }) {
  const header = MANUAL_HEAD.map((h, i) => (
    <div key={i} className={h.width ? `relative shrink-0 ${h.width}` : 'relative shrink-0'}><div className={`content-stretch flex flex-col ${h.center ? 'items-center' : 'items-start'} justify-center p-[16px] relative size-full`}><div className={h.center ? `${HEAD_TEXT} text-center whitespace-nowrap` : `${HEAD_TEXT} whitespace-nowrap`}><Lines lines={h.lines} leading="leading-[24px]" /></div></div></div>
  ));
  return (
    <TableShell header={header}>
      {rows.map((r, i) => (
        <TableRow key={i} last={i === rows.length - 1}>
          <ProductCell model={r.model} description={r.description} />
          <FixedCell width="w-[119px]"><div className="[word-break:break-word] flex flex-col font-['Inter'] font-medium justify-center not-italic relative shrink-0 text-[#5f6368] text-[14px] text-center w-full"><p className="leading-[1.2]">{r.category}</p></div></FixedCell>
          <FixedCell width="w-[136.36px]"><div className="bg-[#fbdbd9] content-stretch flex items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0"><p className="font-['Inter'] font-semibold leading-[14px] not-italic text-[#b51f27] text-[12px] tracking-[1px] uppercase whitespace-nowrap">{r.docType}</p></div></FixedCell>
          <FixedCell width="w-[121px]"><div className={`${BODY_TEXT} whitespace-nowrap`}><Lines lines={r.language} leading="leading-[1.5]" /></div></FixedCell>
          <FixedCell width="w-[118.58px]"><div className={`${BODY_TEXT} whitespace-nowrap`}><p className="leading-[1.5]">{r.updated}</p></div></FixedCell>
          <FixedCell width="w-[81.39px]"><div className={`${BODY_TEXT} whitespace-nowrap`}><p className="leading-[1.5]">{r.size}</p></div></FixedCell>
          <FixedCell width="w-[167px]"><DownloadButton variant="label" /></FixedCell>
        </TableRow>
      ))}
    </TableShell>
  );
}

/* ---------- Flexible tables (Firmware, Software, SIRA) ---------- */

/** Header for flexible tables: first column fixed at 211.22px, the others share the rest. */
function FlexHeader({ columns }: { columns: string[][] }) {
  return (
    <>
      {columns.map((lines, i) =>
        i === 0 ? (
          <div key={i} className="flex flex-row items-center self-stretch"><div className="h-full relative shrink-0 w-[211.22px]"><div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full"><div className={`${HEAD_TEXT} whitespace-nowrap`}><Lines lines={lines} leading="leading-[24px]" /></div></div></div></div>
        ) : (
          <div key={i} className="flex flex-[1_0_0] flex-row items-center self-stretch"><div className="flex-[1_0_0] h-full min-w-px relative"><div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full"><div className={`${HEAD_TEXT} text-center whitespace-nowrap`}><Lines lines={lines} leading="leading-[24px]" /></div></div></div></div>
        ),
      )}
    </>
  );
}

function FlexCell({ children }: { children: ReactNode }) {
  return <div className="flex flex-[1_0_0] flex-row items-center self-stretch"><div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px p-[16px] relative">{children}</div></div>;
}

/** Grey body text in a flexible cell; `nowrap` keeps it on one line instead of filling the width. */
function FlexText({ text, nowrap = false }: { text: string; nowrap?: boolean }) {
  return <FlexCell><div className={nowrap ? `${BODY_TEXT} whitespace-nowrap` : `${BODY_TEXT} w-full`}><p className="leading-[1.5]">{text}</p></div></FlexCell>;
}

export interface FirmwareRow {
  model: string;
  description: string[];
  version: string;
  uploaded: string;
}

export function FirmwareTable({ rows }: { rows: FirmwareRow[] }) {
  return (
    <TableShell header={<FlexHeader columns={[['PRODUCT', 'MODEL/NAME'], ['VERSION'], ['UPLOADED', 'ON'], ['RELEASE NOTE'], ['DOWNLOAD']]} />}>
      {rows.map((r, i) => (
        <TableRow key={i} last={i === rows.length - 1}>
          <ProductCell model={r.model} description={r.description} />
          <FlexText text={r.version} />
          <FlexText text={r.uploaded} nowrap />
          <FlexCell><DownloadButton variant="release-note" /></FlexCell>
          <FlexCell><DownloadButton variant="icon" /></FlexCell>
        </TableRow>
      ))}
    </TableShell>
  );
}

export interface SoftwareRow {
  model: string;
  description: string[];
  version: string;
}

export function SoftwareTable({ rows }: { rows: SoftwareRow[] }) {
  return (
    <TableShell header={<FlexHeader columns={[['SOFTWARE NAME'], ['VERSION'], ['RELEASE NOTE'], ['DOWNLOAD']]} />}>
      {rows.map((r, i) => (
        <TableRow key={i} last={i === rows.length - 1}>
          <ProductCell model={r.model} description={r.description} flexible />
          <FlexText text={r.version} nowrap />
          <FlexCell><DownloadButton variant="release-note" /></FlexCell>
          <FlexCell><DownloadButton variant="icon" /></FlexCell>
        </TableRow>
      ))}
    </TableShell>
  );
}

export interface SiraRow {
  certificate: string;
  product: string;
  note: string;
}

export function SiraTable({ rows }: { rows: SiraRow[] }) {
  return (
    <TableShell header={<FlexHeader columns={[['Certificate'], ['Product'], ['Note'], ['DOWNLOAD']]} />}>
      {rows.map((r, i) => (
        <TableRow key={i} last={i === rows.length - 1}>
          <ProductCell model={r.certificate} flexible />
          <FlexText text={r.product} />
          <FlexText text={r.note} />
          <FlexCell><DownloadButton variant="icon" /></FlexCell>
        </TableRow>
      ))}
    </TableShell>
  );
}

/* ---------- File cards (Software Datasheet, Certificates) ---------- */

export interface FileItem {
  name: string;
  size: string;
}

/** Bordered card: file icon + name, size, Download. `width` is the card's Tailwind width class. */
export function FileCard({ name, size, width }: FileItem & { width: string }) {
  return (
    <div className={`bg-white border border-[#e5e5e5] border-solid content-stretch flex items-center pl-[8px] relative rounded-[8px] shrink-0 ${width}`}>
      <div className="flex flex-row items-center self-stretch"><div className="content-stretch flex gap-[12px] h-full items-center justify-center p-[16px] relative shrink-0">
        <div className="h-[20px] relative shrink-0 w-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFile} /></div>
        <p className="[word-break:break-word] font-['Inter'] font-medium leading-[1.2] not-italic text-[#111] text-[14px] w-[104px]">{name}</p>
      </div></div>
      <div className="flex flex-row items-center self-stretch"><div className="content-stretch flex flex-col h-full items-center justify-center p-[16px] relative shrink-0 w-[81.39px]"><p className="font-['Inter'] font-normal leading-[1.5] not-italic text-[#5f6368] text-[16px] whitespace-nowrap">{size}</p></div></div>
      <div className="flex flex-row items-center self-stretch"><div className="content-stretch flex flex-col h-full items-center justify-center p-[24px] relative shrink-0 w-[167px]"><DownloadButton variant="label" /></div></div>
    </div>
  );
}
