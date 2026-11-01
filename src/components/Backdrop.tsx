interface BackdropProps {
  variant?: 'hero' | 'page';
}

// Static architectural line work + a soft cyan light. Echoes the roofline in the logo.
export default function Backdrop({ variant = 'page' }: BackdropProps) {
  const hero = variant === 'hero';
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background: hero
            ? 'radial-gradient(ellipse 55% 50% at 50% 30%, rgba(0, 209, 199, 0.08), transparent 70%)'
            : 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(0, 209, 199, 0.05), transparent 70%)',
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id={`bd-cyan-${variant}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#00D1C7" stopOpacity="0" />
            <stop offset="0.55" stopColor="#00D1C7" stopOpacity="0.45" />
            <stop offset="1" stopColor="#00D1C7" stopOpacity="0" />
          </linearGradient>
        </defs>
        {hero ? (
          <>
            <path d="M-120 760 L720 120 L1560 760" stroke="#C4C9CE" strokeOpacity="0.07" />
            <path d="M40 860 L720 342 L1400 860" stroke="#C4C9CE" strokeOpacity="0.045" />
            <path d="M150 556 L560 244" stroke={`url(#bd-cyan-${variant})`} strokeWidth="1.25" />
            <path d="M1236 140 V800 M1268 196 V800 M1300 252 V800" stroke="#C4C9CE" strokeOpacity="0.035" />
          </>
        ) : (
          <>
            <path d="M860 -40 L1520 460" stroke="#C4C9CE" strokeOpacity="0.06" />
            <path d="M980 -40 L1520 370" stroke="#C4C9CE" strokeOpacity="0.04" />
            <path d="M-80 600 L460 -40" stroke="#C4C9CE" strokeOpacity="0.045" />
            <path d="M1040 60 L1380 318" stroke={`url(#bd-cyan-${variant})`} strokeWidth="1.25" />
          </>
        )}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink/60" />
    </div>
  );
}
