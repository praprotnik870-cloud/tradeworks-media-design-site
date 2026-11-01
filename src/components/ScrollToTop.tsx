import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="safe-bottom fixed bottom-4 left-4 z-40 rounded-sm border border-brand-silver/15 bg-ink-800/90 p-3 text-fg shadow-xl backdrop-blur transition-colors hover:border-brand-cyan hover:bg-brand-cyan hover:text-ink"
    >
      <ArrowUp size={20} />
    </button>
  );
}
