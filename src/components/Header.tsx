import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, CONTACT } from '../data';
import { btnPrimary, btnSm, btnLg } from '../ui';
import BrandMark from './BrandMark';
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
          ? 'border-b border-brand-silver/10 bg-ink/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-ink/50 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[84px]">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="rounded-sm transition-opacity hover:opacity-90"
          aria-label="TradeWorks Media & Design — home"
        >
          <BrandMark />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => navigate(item.view)}
                aria-current={active ? 'page' : undefined}
                className={`relative whitespace-nowrap px-3.5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors xl:px-4 ${
                  active ? 'text-fg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-brand-cyan transition-opacity xl:left-4 xl:right-4 ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
          <a
            href={CONTACT.phoneHref}
            className="ml-3 hidden items-center gap-2 whitespace-nowrap rounded-sm border border-brand-silver/15 px-4 py-2.5 text-[13px] font-semibold text-fg transition-colors hover:border-brand-cyan/50 xl:flex"
          >
            <Phone size={15} className="text-brand-cyan" />
            {CONTACT.phone}
          </a>
          <button
            onClick={() => navigate('contact')}
            className={`${btnPrimary} ${btnSm} ml-2 whitespace-nowrap uppercase tracking-[0.12em]`}
          >
            Free Quote
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-sm border border-brand-silver/15 bg-white/[0.03] px-3 py-2 text-fg transition-colors hover:border-brand-cyan/50 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
            {open ? 'Close' : 'Menu'}
          </span>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="safe-bottom h-[calc(100dvh-72px)] overflow-y-auto border-t border-brand-silver/10 bg-ink/[0.98] px-4 pb-8 pt-4 backdrop-blur-xl md:h-[calc(100dvh-84px)]">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const active = currentView === item.view;
                return (
                  <button
                    key={item.view}
                    onClick={() => go(item.view)}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center justify-between border px-5 py-4 text-left transition-colors ${
                      active
                        ? 'border-brand-cyan/40 border-l-2 border-l-brand-cyan bg-brand-cyan/[0.06] text-fg'
                        : 'border-brand-silver/10 bg-white/[0.02] text-fg'
                    }`}
                  >
                    <span className="text-base font-semibold">{item.label}</span>
                    <ChevronRight
                      size={18}
                      className={active ? 'text-brand-cyan' : 'text-fg-subtle'}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-brand-silver/10 pt-4">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-between border border-brand-silver/10 bg-white/[0.02] px-5 py-4 text-fg"
              >
                <span className="flex items-center gap-3">
                  <span className="border border-brand-cyan/30 bg-brand-cyan/[0.08] p-2 text-brand-cyan">
                    <Phone size={16} />
                  </span>
                  <span className="text-base font-semibold">{CONTACT.phone}</span>
                </span>
                <ChevronRight size={16} className="text-fg-subtle" />
              </a>
              <button
                onClick={() => go('contact')}
                className={`${btnPrimary} ${btnLg} w-full uppercase tracking-[0.14em]`}
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
