import { ArrowRight, Target, CheckCircle2 } from 'lucide-react';
import { VALUES, STATS } from '../data';
import type { PageView } from '../types';

interface AboutProps {
  navigate: (to: PageView) => void;
}

export default function About({ navigate }: AboutProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
            About Us
          </span>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-white text-glow sm:text-6xl md:text-7xl">
            We Build Growth Engines for Real Businesses
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            TradeWorks Media &amp; Design is a St. Louis–based marketing and web studio. We help
            service businesses turn ad spend into booked appointments with high-converting websites,
            smart funnels, and Meta ad campaigns built to scale.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-white/10 bg-slate-900/40 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-bluelight sm:text-sm">
              Our Mission
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Marketing That Actually Moves the Needle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              Too many businesses pour money into marketing that looks busy but does nothing. We
              exist to change that. Every campaign we run and every site we build is engineered
              around a single question: will this bring you more customers?
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Transparent reporting — you always know what your money is doing',
                'Senior talent on every project, not junior hand-offs',
                'A partner invested in your long-term growth',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-200 sm:text-base">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-7 py-3.5 text-base font-black text-white shadow-xl shadow-orange-500/25 transition-all hover:bg-brand-orangedark active:scale-95"
            >
              Work With Us
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-brand-blue/10 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur"
                >
                  <div className="text-3xl font-black text-white sm:text-4xl">{s.value}</div>
                  <div className="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
              What We Stand For
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white text-glow sm:text-4xl md:text-5xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-brand-blue/25 bg-brand-blue/10 p-4 text-brand-bluelight">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-black text-white sm:text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-orange/20 via-slate-900 to-brand-blue/20 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 grid-shimmer opacity-20" />
            <div className="relative z-10">
              <div className="mb-5 flex justify-center">
                <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/10 p-4 text-brand-orange">
                  <Target size={28} />
                </div>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                Let's Grow Your Business Together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Book a free strategy call and see exactly how we'd bring you more booked
                appointments.
              </p>
              <button
                onClick={() => navigate('contact')}
                className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition-all hover:bg-brand-orangedark active:scale-95 sm:text-lg"
              >
                Get a Free Quote
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
