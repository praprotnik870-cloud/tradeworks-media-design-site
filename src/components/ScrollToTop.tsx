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
      className="safe-bottom fixed bottom-4 left-4 z-40 rounded-full border border-white/10 bg-slate-900/90 p-3 text-white shadow-xl backdrop-blur transition-all hover:bg-brand-orange active:scale-90"
    >
      <ArrowUp size={20} />
    </button>
  );
}
