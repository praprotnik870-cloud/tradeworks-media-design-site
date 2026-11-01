import type { ReactNode } from 'react';
import Backdrop from './Backdrop';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}

// Shared intro block for the inner pages.
export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <Backdrop />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
        <span className="eyebrow eyebrow-both">{eyebrow}</span>
        <h1 className="mt-4 text-[34px] font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg md:text-xl">
          {children}
        </p>
      </div>
    </section>
  );
}
