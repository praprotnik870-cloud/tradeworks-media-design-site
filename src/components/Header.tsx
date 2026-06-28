import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, CONTACT } from '../data';
import type { PageView } from '../types';

interface HeaderProps {
  currentView: PageView;
  navigate: (to: PageView) => void;
}

export default function Header({ currentView, navigate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (to: PageView) => {
    navigate(to);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 safe-x transition-colors duration-300 ${
        scrolled || open
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10'
          : 'bg-slate-950/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[84px]">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-3 rounded-xl outline-none transition-transform active:scale-95"
          aria-label="TradeWorks Media & Design — home"
        >
          <img
            src="/logo.png"
            alt="TradeWorks Media & Design"
            className="h-12 w-12 rounded-lg object-cover sm:h-14 sm:w-14"
            width={56}
            height={56}
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight text-white sm:text-xl">
              TradeWorks
            </span>
            <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.28em] text-brand-green sm:text-[10px]">
              Media &amp; Design
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => navigate(item.view)}
                className={`rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                  active
                    ? 'text-brand-bluelight'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href={CONTACT.phoneHref}
            className="ml-2 flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white transition-colors hover:border-white/30"
          >
            <Phone size={15} />
            {CONTACT.phone}
          </a>
          <button
            onClick={() => navigate('contact')}
            className="ml-1 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-brand-orangedark active:scale-95"
          >
            Free Quote
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white active:scale-90 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="text-[11px] font-black uppercase tracking-widest">
            {open ? 'Close' : 'Menu'}
          </span>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="safe-bottom max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-slate-950/98 px-4 pb-8 pt-4 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const active = currentView === item.view;
                return (
                  <button
                    key={item.view}
                    onClick={() => go(item.view)}
                    className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all active:scale-[0.98] ${
                      active
                        ? 'border-brand-bluelight/50 bg-brand-blue/10 text-brand-bluelight'
                        : 'border-white/10 bg-white/5 text-white'
                    }`}
                  >
                    <span className="text-base font-bold">{item.label}</span>
                    <ChevronRight
                      size={18}
                      className={active ? 'text-brand-bluelight' : 'text-slate-500'}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white active:scale-[0.98]"
              >
                <span className="flex items-center gap-3">
                  <span className="rounded-lg bg-brand-orange p-2 text-white">
                    <Phone size={16} />
                  </span>
                  <span className="text-base font-bold">{CONTACT.phone}</span>
                </span>
                <ChevronRight size={16} className="text-slate-500" />
              </a>
              <button
                onClick={() => go('contact')}
                className="w-full rounded-2xl bg-brand-orange py-4 text-base font-black uppercase tracking-widest text-white shadow-lg shadow-orange-500/25 active:scale-95"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
