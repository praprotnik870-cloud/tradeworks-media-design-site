import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, SERVICES, CONTACT } from '../data';
import { btnPrimary, btnSm } from '../ui';
import BrandMark from './BrandMark';
import type { PageView } from '../types';

interface FooterProps {
  navigate: (to: PageView) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="safe-bottom safe-x relative overflow-hidden border-t border-brand-silver/10 bg-ink pt-14 md:pt-20">
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/70 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandMark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-muted">
              A St. Louis digital marketing agency specializing in trade-related industries, with
              personalized marketing and sales systems backed by advertising, SEO, content, and web
              design.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-fg">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.view}>
                  <button
                    onClick={() => navigate(item.view)}
                    className="text-sm font-medium text-fg-muted transition-colors hover:text-brand-cyan"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-fg">Services</h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => navigate('services')}
                    className="text-left text-sm font-medium text-fg-muted transition-colors hover:text-brand-cyan"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-fg">Get in Touch</h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  <Phone size={16} className="text-brand-cyan" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  target={CONTACT.emailNewTab ? '_blank' : undefined}
                  rel={CONTACT.emailNewTab ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 break-all text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  <Mail size={16} className="shrink-0 text-brand-cyan" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-fg-muted">
                <MapPin size={16} className="text-brand-cyan" />
                {CONTACT.location}
              </li>
            </ul>

            <button
              onClick={() => navigate('contact')}
              className={`${btnPrimary} ${btnSm} mt-6 uppercase tracking-[0.12em]`}
            >
              Free Quote
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-silver/10 py-8 sm:flex-row">
          <p className="text-xs font-medium text-fg-subtle">
            © {year} TradeWorks Media &amp; Design. All rights reserved.
          </p>
          <p className="text-xs font-medium text-fg-subtle">
            Digital marketing agency · St. Louis, MO
          </p>
        </div>
      </div>
    </footer>
  );
}
