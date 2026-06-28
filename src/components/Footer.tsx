import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, SERVICES, CONTACT } from '../data';
import type { PageView } from '../types';

interface FooterProps {
  navigate: (to: PageView) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="safe-bottom safe-x relative overflow-hidden border-t border-white/10 bg-slate-950 pt-14 md:pt-20">
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="TradeWorks Media & Design"
                className="h-12 w-12 rounded-lg object-cover"
                width={48}
                height={48}
              />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tight text-white">TradeWorks</span>
                <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.28em] text-brand-green">
                  Media &amp; Design
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              We run the ads, generate the leads, and book the appointments — so you can focus on
              closing deals and growing your business.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Navigate</h4>
            <ul className="mt-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.view}>
                  <button
                    onClick={() => navigate(item.view)}
                    className="text-sm font-medium text-slate-400 transition-colors hover:text-brand-orange"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => navigate('services')}
                    className="text-left text-sm font-medium text-slate-400 transition-colors hover:text-brand-orange"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                >
                  <Phone size={16} className="text-brand-orange" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-3 break-all text-sm font-medium text-slate-400 transition-colors hover:text-white"
                >
                  <Mail size={16} className="text-brand-orange" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-400">
                <MapPin size={16} className="text-brand-orange" />
                {CONTACT.location}
              </li>
            </ul>

            <button
              onClick={() => navigate('contact')}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-brand-orangedark active:scale-95"
            >
              Free Quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs font-medium text-slate-500">
            © {year} TradeWorks Media &amp; Design. All rights reserved.
          </p>
          <p className="text-xs font-medium text-slate-500">Built to convert. Based in St. Louis, MO.</p>
        </div>
      </div>
    </footer>
  );
}
