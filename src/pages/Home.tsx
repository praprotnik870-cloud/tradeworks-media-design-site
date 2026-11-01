import { ArrowRight, MapPin, MessageSquare, CheckCircle2, Check, Link2 } from 'lucide-react';
import { VALUE_PROPS, STATS, PROCESS, SERVICES, CONTACT } from '../data';
import { btnPrimary, btnSecondary, btnLg, revealDelay } from '../ui';
import Backdrop from '../components/Backdrop';
import SectionHeading from '../components/SectionHeading';
import IconTile from '../components/IconTile';
import CtaPanel from '../components/CtaPanel';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import type { PageView } from '../types';

interface HomeProps {
  navigate: (to: PageView) => void;
}

const coreService = SERVICES.find((s) => s.featured);
const supportServices = SERVICES.filter((s) => !s.featured);

// Hairline dividers for the 2x2 (mobile) / 4-across (sm+) stats strip.
const statBorders = (i: number) =>
  [
    i % 2 === 0 ? 'border-r' : '',
    i === 1 ? 'sm:border-r' : '',
    i === 2 ? 'sm:border-r' : '',
    i < 2 ? 'border-b sm:border-b-0' : '',
  ].join(' ');

export default function Home({ navigate }: HomeProps) {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-brand-silver/10">
        <Backdrop variant="hero" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pb-16 pt-10 text-center sm:px-6 sm:pt-14 md:pb-24 md:pt-16">
          {/* logo feature */}
          <img
            src="/logo-full.webp"
            alt="TradeWorks Media & Design"
            className="mb-8 h-auto w-[210px] sm:w-[250px] md:mb-10 md:w-[290px]"
            width={896}
            height={752}
          />

          <span className="eyebrow eyebrow-both">Digital Marketing Agency</span>

          <h1 className="mt-5 max-w-4xl text-[38px] font-extrabold leading-[1.04] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            Marketing Built for <span className="text-brand-cyan">the Trades</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg md:text-xl">
            We specialize in trade-related industries, designing personalized marketing and sales
            systems that turn interest into <span className="text-fg">paying customers</span>.
          </p>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <button
              onClick={() => navigate('contact')}
              className={`${btnPrimary} ${btnLg} w-full sm:w-auto`}
            >
              Get a Free Quote
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate('services')}
              className={`${btnSecondary} ${btnLg} w-full sm:w-auto`}
            >
              View Services
            </button>
          </div>

          {/* trust strip — honest, no fabricated metrics */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-12 sm:gap-x-8">
            <span className="flex items-center gap-2 text-sm font-medium text-fg-muted">
              <CheckCircle2 size={16} className="text-brand-cyan" />
              Free, no-obligation quote
            </span>
            <span className="hidden h-4 w-px bg-brand-silver/20 sm:block" />
            <span className="flex items-center gap-2 text-sm font-medium text-fg-muted">
              <MapPin size={16} className="text-brand-silver" />
              Based in St. Louis, MO
            </span>
            <span className="hidden h-4 w-px bg-brand-silver/20 sm:block" />
            <span className="flex items-center gap-2 text-sm font-medium text-fg-muted">
              <MessageSquare size={16} className="text-brand-cyan" />
              Clear, jargon-free reporting
            </span>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="surface-metal border-b border-brand-silver/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`border-brand-silver/10 px-4 py-8 text-center md:py-10 ${statBorders(i)}`}
            >
              <div className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-muted sm:text-xs sm:tracking-[0.2em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== VALUE PROPS ===== */}
      <section className="relative overflow-hidden py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-12 md:mb-16">
            <SectionHeading
              eyebrow="What We Do"
              title="Strategy, Systems, and the Marketing Behind Them"
            >
              Good advertising is only part of the job. We start with a plan built for your
              business, set up the systems that turn attention into customers, and support it with
              advertising, SEO, content, and web design.
            </SectionHeading>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {VALUE_PROPS.map((prop, i) => (
              <div
                key={prop.title}
                className="panel panel-hover reveal group p-7 md:p-8"
                style={revealDelay(i)}
              >
                <span className="absolute -left-px -top-px h-[2px] w-12 bg-brand-cyan transition-all duration-500 group-hover:w-[calc(100%+2px)]" />
                <IconTile icon={prop.icon} />
                <h3 className="mt-6 text-xl font-bold text-fg sm:text-[22px]">{prop.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted sm:text-base">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="surface-metal relative overflow-hidden border-y border-brand-silver/10 py-16 md:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div className="mb-8 flex justify-center md:mb-10">
            <IconTile icon={Link2} size="lg" />
          </div>
          <h2 className="reveal text-[28px] font-extrabold leading-tight tracking-tight text-fg sm:text-4xl md:text-5xl">
            Where Most Marketing <span className="text-brand-cyan">Breaks Down</span>
          </h2>
          <div className="reveal mt-8 space-y-6 text-base leading-relaxed text-fg-muted sm:text-xl md:mt-10 md:text-[22px] md:leading-relaxed">
            <p>
              A customer finds you through an ad, a search, or a referral. Then they need a fast
              response, a clear next step, and consistent follow-up. When those steps are handled by
              different people, or not at all,{' '}
              <span className="text-fg">opportunities are lost at every stage.</span>
            </p>
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
            <p>
              We design and manage the whole sequence as one personalized system, so you can see{' '}
              <span className="text-brand-cyan">what your marketing actually produces</span> and
              spend your time on the work your customers pay you for.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-12 md:mb-16">
            <SectionHeading eyebrow="How It Works" title="Plan, Launch, Improve" />
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.number} className="panel reveal p-7 md:p-8" style={revealDelay(i)}>
                <span className="text-outline absolute right-6 top-5 font-display text-5xl font-extrabold md:text-6xl">
                  {step.number}
                </span>
                <IconTile icon={step.icon} />
                <h3 className="mt-6 text-xl font-bold text-fg sm:text-[22px]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="border-y border-brand-silver/10 bg-ink-900/70 py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end md:mb-14">
            <SectionHeading eyebrow="Our Services" title="Built Around Your Sales System" align="left" />
            <button
              onClick={() => navigate('services')}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-cyan transition-colors hover:text-brand-cyanhi"
            >
              View All Services
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {coreService && (
            <div className="mb-5 md:mb-6">
              <FeaturedServiceCard service={coreService} onGetStarted={() => navigate('contact')} />
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {supportServices.map((service, i) => (
              <div
                key={service.title}
                className="panel panel-hover reveal group flex flex-col p-6 md:p-7"
                style={revealDelay(i, 60)}
              >
                <span className="absolute -left-px -top-px h-[2px] w-10 bg-brand-cyan transition-all duration-500 group-hover:w-[calc(100%+2px)]" />
                <IconTile icon={service.icon} size="sm" />
                <h3 className="mt-5 text-lg font-bold text-fg sm:text-xl">{service.title}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-fg-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-brand-silver/10 pt-4">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-fg/85">
                      <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <CtaPanel>
            <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-fg sm:text-4xl md:text-5xl">
              Let's Talk About Your Goals
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              Tell us about your business and what you want to achieve. We'll reply within one
              business day with a clear recommendation and a free quote.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => navigate('contact')}
                className={`${btnPrimary} ${btnLg} w-full sm:w-auto`}
              >
                Get a Free Quote
                <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a href={CONTACT.phoneHref} className={`${btnSecondary} ${btnLg} w-full sm:w-auto`}>
                Call {CONTACT.phone}
              </a>
            </div>
          </CtaPanel>
        </div>
      </section>
    </div>
  );
}
