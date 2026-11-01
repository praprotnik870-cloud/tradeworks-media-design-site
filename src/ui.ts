import type { CSSProperties } from 'react';

// Shared Tailwind class sets so buttons look identical everywhere.
export const btnBase =
  'group inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-colors duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60';

export const btnSm = 'px-4 py-2.5 text-[13px]';
export const btnMd = 'px-6 py-3.5 text-[15px]';
export const btnLg = 'px-8 py-4 text-base';

export const btnPrimary = `${btnBase} bg-brand-cyan text-ink hover:bg-brand-cyanhi`;
export const btnSecondary = `${btnBase} border border-brand-silver/25 bg-white/[0.03] text-fg hover:border-brand-cyan/60 hover:bg-white/[0.06]`;

// Staggers .reveal items in a grid.
export const revealDelay = (index: number, step = 80): CSSProperties =>
  ({ '--reveal-delay': `${index * step}ms` }) as CSSProperties;
