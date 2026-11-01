import { ArrowRight, Check } from 'lucide-react';
import type { Service } from '../data';
import { btnPrimary, btnMd } from '../ui';
import IconTile from './IconTile';

interface FeaturedServiceCardProps {
  service: Service;
  onGetStarted: () => void;
}

// Full-width card for the core service, shown above the supporting services.
export default function FeaturedServiceCard({ service, onGetStarted }: FeaturedServiceCardProps) {
  return (
    <div className="panel corner-frame reveal grid gap-8 p-7 sm:p-9 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <IconTile icon={service.icon} size="lg" />
          <span className="border border-brand-cyan/30 bg-brand-cyan/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
            Core Service
          </span>
        </div>
        <div className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-cyan">
          {service.tagline}
        </div>
        <h3 className="mt-2 text-[26px] font-extrabold leading-tight tracking-tight text-fg sm:text-3xl md:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
          {service.description}
        </p>
        <button
          onClick={onGetStarted}
          className={`${btnPrimary} ${btnMd} mt-8 w-full sm:w-auto sm:self-start`}
        >
          Get Started
          <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <ul className="grid content-center gap-x-8 gap-y-3.5 border-t border-brand-silver/10 pt-7 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[15px] text-fg/90">
            <Check size={17} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand-cyan" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
