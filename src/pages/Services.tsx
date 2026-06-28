import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { SERVICES, CONTACT } from '../data';
import type { PageView } from '../types';

interface ServicesProps {
  navigate: (to: PageView) => void;
}

const accentText: Record<string, string> = {
  blue: 'text-brand-bluelight',
  orange: 'text-brand-orange',
  green: 'text-brand-green',
};
const accentSoftBg: Record<string, string> = {
  blue: 'bg-brand-blue/10 border-brand-blue/25',
  orange: 'bg-brand-orange/10 border-brand-orange/25',
  green: 'bg-brand-green/10 border-brand-green/25',
};
const accentHoverBorder: Record<string, string> = {
  blue: 'hover:border-brand-bluelight/60',
  orange: 'hover:border-brand-orange/60',
  green: 'hover:border-brand-green/60',
};

export default function Services({ navigate }: ServicesProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-orange/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
            Our Services
          </span>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-white text-glow sm:text-6xl md:text-7xl">
            Built to Bring You Customers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            From ads and funnels to premium websites — everything we offer is engineered to turn
            attention into booked appointments and revenue.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-8 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 md:p-8 ${accentHoverBorder[service.accent]}`}
                >
                  {service.featured && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-brand-orange/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-brand-orange">
                      <Star size={11} fill="currentColor" strokeWidth={0} />
                      Popular
                    </span>
                  )}
                  <div
                    className={`mb-5 inline-flex w-fit rounded-2xl border p-4 ${accentSoftBg[service.accent]} ${accentText[service.accent]}`}
                  >
                    <Icon size={28} />
                  </div>
                  <div className={`text-[11px] font-black uppercase tracking-widest ${accentText[service.accent]}`}>
                    {service.tagline}
                  </div>
                  <h3 className="mt-1 text-2xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <CheckCircle2
                          size={17}
                          className={`mt-0.5 shrink-0 ${accentText[service.accent]}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('contact')}
                    className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-3.5 text-sm font-black text-white transition-all hover:bg-brand-orange hover:border-brand-orange active:scale-95"
                  >
                    Get Started
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-blue/20 via-slate-900 to-brand-orange/20 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 grid-shimmer opacity-20" />
            <div className="relative z-10">
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                Not Sure Which Service Fits?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Tell us about your business and we'll recommend the right plan — no pressure, no
                jargon.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <button
                  onClick={() => navigate('contact')}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition-all hover:bg-brand-orangedark active:scale-95 sm:w-auto sm:text-lg"
                >
                  Get a Free Quote
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href={CONTACT.phoneHref}
                  className="w-full rounded-2xl border-2 border-white/15 bg-white/5 px-8 py-4 text-center text-base font-black text-white backdrop-blur transition-all hover:border-white/40 active:scale-95 sm:w-auto sm:text-lg"
                >
                  Call {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
