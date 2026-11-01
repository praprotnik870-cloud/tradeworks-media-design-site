import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'center',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={`reveal ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
      <span className={`eyebrow ${centered ? 'eyebrow-both' : ''}`}>{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}
