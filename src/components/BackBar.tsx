import { ArrowLeft, Home } from 'lucide-react';
import type { PageView } from '../types';

interface BackBarProps {
  onBack: () => void;
  canGoBack: boolean;
  navigate: (to: PageView) => void;
}

export default function BackBar({ onBack, canGoBack, navigate }: BackBarProps) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 pt-5 sm:px-6 md:pt-6">
      <button
        onClick={canGoBack ? onBack : () => navigate('home')}
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur transition-colors hover:border-white/30 hover:text-white active:scale-95"
        aria-label="Go back to the previous page"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
        Back
      </button>
      <button
        onClick={() => navigate('home')}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur transition-colors hover:border-white/30 hover:text-white active:scale-95"
        aria-label="Go to the homepage"
      >
        <Home size={16} />
        Home
      </button>
    </div>
  );
}
