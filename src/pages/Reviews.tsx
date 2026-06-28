import { Star, Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, STATS } from '../data';
import type { PageView } from '../types';

interface ReviewsProps {
  navigate: (to: PageView) => void;
}

const avatarBg: Record<string, string> = {
  blue: 'bg-brand-blue/20 text-brand-bluelight',
  orange: 'bg-brand-orange/20 text-brand-orange',
  green: 'bg-brand-green/20 text-brand-green',
};

export default function Reviews({ navigate }: ReviewsProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-green/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
            Client Results
          </span>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-white text-glow sm:text-6xl md:text-7xl">
            Don't Take Our Word for It
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-base font-bold text-slate-300 sm:text-lg">
              5.0 average from happy clients
            </span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="pb-8 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 md:gap-7">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <Quote
                  size={48}
                  className="absolute right-6 top-6 text-white/5"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <div className="mb-4 flex text-amber-400">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="relative z-10 flex-grow text-base leading-relaxed text-slate-200 sm:text-lg">
                  "{t.content}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-black ${avatarBg[t.accent]}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-base font-black text-white">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-white/10 bg-slate-950/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-0 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white/[0.02] px-4 py-8 text-center md:py-10">
              <div className="text-3xl font-black text-white sm:text-4xl md:text-5xl">{s.value}</div>
              <div className="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-green/15 via-slate-900 to-brand-blue/20 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 grid-shimmer opacity-20" />
            <div className="relative z-10">
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-4xl">
                Become Our Next Success Story
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Join the businesses already growing with TradeWorks. Your free quote is one click
                away.
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
