/**
 * Pure calculation functions for the support tools (lens, HDD & bandwidth, CarKam storage).
 * Formulas match the legacy HOUM site scripts exactly.
 */

/* ---------------- Lens calculator ---------------- */

export type LensType = 'Fixed' | 'Varifocal' | 'Auto-iris';

export interface LensInput {
  /** Sensor width in mm (from the image-sensor chip). */
  sensorWidth: number;
  /** Horizontal resolution in pixels (from the resolution chip). */
  resolutionPx: number;
  /** Distance between camera and object, ft. */
  distance: number;
  /** Camera height from ground, ft. */
  height: number;
  /** Width of the field of view, ft. */
  sceneWidth: number;
}

export interface LensResult {
  /** Focal length in mm. */
  focalLength: number;
  /** Pixels per foot. */
  ppf: number;
  /** Field-of-view width, ft. */
  fovWidth: number;
  lensType: LensType;
}

export function lensTypeFor(focalLength: number): LensType {
  return focalLength < 6 ? 'Fixed' : focalLength <= 22 ? 'Varifocal' : 'Auto-iris';
}

/** focal length = sensor width × √(distance² + height²) ÷ scene width. Returns null for invalid input. */
export function calcLens({ sensorWidth, resolutionPx, distance, height, sceneWidth }: LensInput): LensResult | null {
  if (!(distance > 0) || !(sceneWidth > 0)) return null;
  const h = height || 0;
  const slant = Math.sqrt(distance * distance + h * h);
  const focalLength = (sensorWidth * slant) / sceneWidth;
  return {
    focalLength,
    ppf: Math.round(resolutionPx / sceneWidth),
    fovWidth: sceneWidth,
    lensType: lensTypeFor(focalLength),
  };
}

/* ---------------- HDD & bandwidth calculator ---------------- */

export type HddMode = 'disk' | 'days';

export interface HddBitrateInput {
  /** Resolution base bitrate, kbps. */
  resolutionKbps: number;
  /** Compression factor (H.264 = 1, H.265 = 0.5, …). */
  compression: number;
  /** Image quality factor (High = 1, Medium = 0.75, Low = 0.5). */
  quality: number;
  audio: boolean;
}

/** Bitrate (kbps) suggested by the camera configuration; audio adds 64 kbps. */
export function calcHddBitrate({ resolutionKbps, compression, quality, audio }: HddBitrateInput): number {
  let kb = resolutionKbps * compression * quality;
  if (audio) kb += 64;
  return Math.round(kb);
}

export interface HddInput {
  bitrateKbps: number;
  cameras: number;
  /** Motion activity in percent (10–100). */
  motionPercent: number;
  mode: HddMode;
  /** Number of disks (disk mode) or recording days (days mode). */
  n: number;
  /** Capacity of one disk, TB (disk mode). */
  diskTB: number;
}

export type HddResult =
  | { mode: 'disk'; bandwidthMbps: number; recordingDays: number }
  | { mode: 'days'; bandwidthMbps: number; storageTB: number };

/** Returns null when the bitrate is not a positive number. */
export function calcHdd({ bitrateKbps, cameras, motionPercent, mode, n, diskTB }: HddInput): HddResult | null {
  if (!(bitrateKbps > 0)) return null;
  const cams = Math.max(1, Math.trunc(cameras) || 1);
  const disks = Math.trunc(n) || 1;
  const motion = motionPercent / 100;
  const mbps = (bitrateKbps * cams) / 1000; // peak bandwidth for all cameras
  const avg = mbps * (0.9 + 0.2 * motion); // VBR: busier scenes push the average up
  const gbPerDay = (avg * 86400) / 8 / 1000; // decimal GB per day
  if (mode === 'days') {
    return { mode, bandwidthMbps: mbps, storageTB: (gbPerDay * disks) / 1000 / 0.95 }; // ~5% lost to formatting
  }
  const cap = diskTB * 1000 * 0.95 * disks;
  return { mode, bandwidthMbps: mbps, recordingDays: Math.floor(cap / gbPerDay) };
}

/* ---------------- CarKam storage calculator ---------------- */

export interface CarkamInput {
  /** Stream bitrate for the chosen resolution, Mbps. */
  mbps: number;
  channels: number;
  /** Card size, GB. */
  diskGB: number;
}

export interface CarkamResult {
  regularHours: number;
  eventHours: number;
}

/** Usable card space ~95% of nominal; ~4% of the card is reserved for locked event clips. */
export function calcCarkam({ mbps, channels, diskGB }: CarkamInput): CarkamResult {
  const usableMb = diskGB * 1000 * 8 * 0.95;
  const perHourMb = mbps * channels * 3600;
  return {
    regularHours: (usableMb * 0.96) / perHourMb,
    eventHours: (usableMb * 0.04) / perHourMb,
  };
}

/** Regular hours display: whole number from 10 h up, one decimal below. */
export function formatCarkamHours(hours: number): string {
  return hours >= 10 ? String(Math.round(hours)) : hours.toFixed(1);
}
