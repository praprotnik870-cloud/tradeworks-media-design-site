import { ArrowRight, Sparkles } from 'lucide-react';
import { COMMITMENTS } from '../data';
import type { PageView } from '../types';

interface WhyUsProps {
  navigate: (to: PageView) => void;
}

const accentClasses: Record<string, string> = {
  blue: 'border-brand-blue/25 bg-brand-blue/10 text-brand-bluelight',
  orange: 'border-brand-orange/25 bg-brand-orange/10 text-brand-orange',
  green: 'border-brand-green/25 bg-brand-green/10 text-brand-green',
};

export default function WhyUs({ navigate }: WhyUsProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-green/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
            Why TradeWorks
          </span>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-white text-glow sm:text-6xl md:text-7xl">
            Our Promise to You
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            We're a growing St. Louis studio, so we won't pretend to have a wall of five-star reviews
            yet. Instead, here's exactly what you can expect the moment you work with us — in plain
            terms, no fine print.
          </p>
        </div>
      </section>

      {/* Commitments */}
      <section className="pb-8 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {COMMITMENTS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 md:p-7"
                >
                  <div className={`mb-5 inline-flex rounded-2xl border p-3.5 ${accentClasses[c.accent]}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-black text-white sm:text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founding-client invitation */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-green/15 via-slate-900 to-brand-blue/20 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 grid-shimmer opacity-20" />
            <div className="relative z-10">
              <div className="mb-5 flex justify-center">
                <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/10 p-4 text-brand-orange">
                  <Sparkles size={28} />
                </div>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                Be One of Our First
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Being early in our journey works in your favor: you get a team that's hungry to prove
                itself and determined to earn its reputation on your results. We'd be honored to make
                your business one of our first success stories.
              </p>
              <button
                onClick={() => navigate('contact')}
                className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition-all hover:bg-brand-orangedark active:scale-95 sm:text-lg"
              >
                Start Your Project
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
