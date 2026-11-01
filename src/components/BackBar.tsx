import { ArrowLeft, Home } from 'lucide-react';
import type { PageView } from '../types';

interface BackBarProps {
  onBack: () => void;
  canGoBack: boolean;
  navigate: (to: PageView) => void;
}

const barBtn =
  'group inline-flex items-center gap-2 rounded-sm border border-brand-silver/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-fg-muted backdrop-blur transition-colors hover:border-brand-cyan/50 hover:text-fg';

export default function BackBar({ onBack, canGoBack, navigate }: BackBarProps) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 pt-5 sm:px-6 md:pt-6">
      <button
        onClick={canGoBack ? onBack : () => navigate('home')}
        className={barBtn}
        aria-label="Go back to the previous page"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        Back
      </button>
      <button
        onClick={() => navigate('home')}
        className={barBtn}
        aria-label="Go to the homepage"
      >
        <Home size={16} />
        Home
      </button>
    </div>
  );
}
