import {
  ArrowRight,
  MapPin,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { VALUE_PROPS, STATS, PROCESS, SERVICES, CONTACT } from '../data';
import type { PageView } from '../types';

interface HomeProps {
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
const accentBar: Record<string, string> = {
  blue: 'from-brand-bluelight to-brand-blue',
  orange: 'from-brand-orange to-brand-orangedark',
  green: 'from-brand-green to-emerald-600',
};
const accentHoverBorder: Record<string, string> = {
  blue: 'hover:border-brand-bluelight/60',
  orange: 'hover:border-brand-orange/60',
  green: 'hover:border-brand-green/60',
};

export default function Home({ navigate }: HomeProps) {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* glow blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-brand-blue/20 blur-[120px] animate-float" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-[32rem] w-[32rem] rounded-full bg-violet-600/15 blur-[140px] animate-float-slow" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-brand-orange/10 blur-[120px] animate-float" />
        <div className="pointer-events-none absolute inset-0 grid-shimmer opacity-20" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pb-16 pt-12 text-center sm:px-6 sm:pt-16 md:pb-24 md:pt-20">
          {/* logo feature */}
          <div className="relative mb-7 md:mb-9">
            <div className="absolute inset-0 rounded-3xl bg-brand-orange/25 blur-2xl" />
            <img
              src="/logo.png"
              alt="TradeWorks Media & Design"
              className="relative h-24 w-24 rounded-2xl object-cover shadow-2xl sm:h-28 sm:w-28"
              width={112}
              height={112}
            />
          </div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-brand-green">
            <Sparkles size={15} />
            <span className="text-[11px] font-black uppercase tracking-widest sm:text-xs">
              Premium Digital Marketing
            </span>
          </div>

          <h1 className="text-[40px] font-black leading-[0.95] tracking-tight text-white text-glow sm:text-6xl md:text-7xl lg:text-8xl">
            Ads That{' '}
            <span className="bg-gradient-to-r from-brand-bluelight via-violet-400 to-brand-orange bg-clip-text text-transparent">
              Scale Fast
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-300 sm:mt-7 sm:text-xl md:text-2xl">
            We run the ads. We generate the leads.{' '}
            <span className="text-brand-green">We book the appointments.</span> You just close the
            deals.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <button
              onClick={() => navigate('contact')}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition-all hover:bg-brand-orangedark active:scale-95 sm:w-auto sm:text-lg"
            >
              Get a Free Quote
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate('services')}
              className="w-full rounded-2xl border-2 border-white/15 bg-white/5 px-8 py-4 text-base font-black text-white backdrop-blur transition-all hover:border-brand-bluelight/60 active:scale-95 sm:w-auto sm:text-lg"
            >
              Explore Services
            </button>
          </div>

          {/* trust strip — honest, no fabricated metrics */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-12 sm:gap-x-8">
            <span className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <CheckCircle2 size={16} className="text-brand-green" />
              Free, no-pressure quote
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <MapPin size={16} className="text-brand-orange" />
              Based in St. Louis, MO
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <MessageSquare size={16} className="text-brand-bluelight" />
              Straightforward, no jargon
            </span>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-y border-white/10 bg-slate-950/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-0 sm:grid-cols-4">
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

      {/* ===== VALUE PROPS ===== */}
      <section className="relative overflow-hidden py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white text-glow sm:text-4xl md:text-5xl">
              A Complete Growth Engine
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              From the first ad click to a booked appointment on your calendar — we handle the entire
              pipeline so you can focus on closing deals.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {VALUE_PROPS.map((prop) => {
              const Icon = prop.icon;
              return (
                <div
                  key={prop.title}
                  className={`group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 md:p-8 ${accentHoverBorder[prop.accent]}`}
                >
                  <div
                    className={`mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r ${accentBar[prop.accent]} transition-all duration-500 group-hover:w-20`}
                  />
                  <div
                    className={`mb-5 inline-flex rounded-2xl border p-4 transition-transform duration-300 group-hover:scale-110 ${accentSoftBg[prop.accent]} ${accentText[prop.accent]}`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-white sm:text-2xl">{prop.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="relative overflow-hidden border-y border-white/10 bg-slate-900/40 py-16 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div className="mb-7 flex justify-center md:mb-10">
            <div className="rounded-3xl border border-brand-blue/30 bg-brand-blue/10 p-5 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
              <ShieldCheck size={44} className="text-brand-bluelight" />
            </div>
          </div>
          <h2 className="text-2xl font-black leading-tight tracking-tight text-white text-glow sm:text-4xl md:text-5xl">
            The Bridge Between <span className="text-brand-orange">Stress</span> and{' '}
            <span className="text-brand-green">Success</span>
          </h2>
          <div className="mt-8 space-y-6 text-base font-medium italic leading-relaxed text-slate-300 sm:text-xl md:mt-10 md:text-2xl">
            <p>
              "We understand how overwhelming digital marketing can feel. You're great at running
              your <span className="text-brand-bluelight">business</span> — but running ads and
              chasing leads is a whole different world."
            </p>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
            <p>
              "So we take it off your plate. We handle the ads, the funnels, and the follow-up — all
              built to turn scattered effort into{' '}
              <span className="text-brand-green">booked appointments</span> — so you can focus on the
              work you do best."
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-bluelight sm:text-sm">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white text-glow sm:text-4xl md:text-5xl">
              Three Steps to More Bookings
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {PROCESS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
                >
                  <span className="absolute right-6 top-5 text-5xl font-black text-white/5 md:text-6xl">
                    {step.number}
                  </span>
                  <div className="mb-5 inline-flex rounded-2xl border border-brand-orange/25 bg-brand-orange/10 p-4 text-brand-orange">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-black text-white sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="border-y border-white/10 bg-slate-950/60 py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end md:mb-14">
            <div className="max-w-xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
                Our Services
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white text-glow sm:text-4xl md:text-5xl">
                Everything You Need to Grow
              </h2>
            </div>
            <button
              onClick={() => navigate('services')}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-black uppercase tracking-wide text-brand-orange"
            >
              View All Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 md:p-7 ${accentHoverBorder[service.accent]}`}
                >
                  <div
                    className={`mb-5 inline-flex w-fit rounded-2xl border p-3.5 ${accentSoftBg[service.accent]} ${accentText[service.accent]}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-black text-white sm:text-xl">{service.title}</h3>
                  <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 shrink-0 ${accentText[service.accent]}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-blue/20 via-slate-900 to-brand-orange/20 p-8 text-center sm:p-12 md:p-16">
            <div className="pointer-events-none absolute inset-0 grid-shimmer opacity-20" />
            <div className="relative z-10">
              <h2 className="text-2xl font-black leading-tight tracking-tight text-white text-glow sm:text-4xl md:text-5xl">
                Ready to Fill Your Calendar?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Let's build a marketing engine that brings you booked appointments on autopilot. Get
                your free, no-pressure quote today.
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
