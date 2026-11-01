import type { ReactNode } from 'react';

// Closing call-to-action block: brushed graphite with corner brackets.
export default function CtaPanel({ children }: { children: ReactNode }) {
  return (
    <div className="reveal corner-frame surface-metal relative border border-brand-silver/15 p-8 text-center sm:p-12 md:p-16">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M700 0 L1000 260" stroke="#C4C9CE" strokeOpacity="0.07" vectorEffect="non-scaling-stroke" />
        <path d="M800 0 L1000 175" stroke="#C4C9CE" strokeOpacity="0.05" vectorEffect="non-scaling-stroke" />
        <path d="M0 230 L190 400" stroke="#C4C9CE" strokeOpacity="0.05" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
