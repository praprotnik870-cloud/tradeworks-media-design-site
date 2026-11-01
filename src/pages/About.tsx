import { ArrowRight, Target, Check } from 'lucide-react';
import { VALUES, STATS } from '../data';
import { btnPrimary, btnMd, btnLg, revealDelay } from '../ui';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import IconTile from '../components/IconTile';
import CtaPanel from '../components/CtaPanel';
import type { PageView } from '../types';

interface AboutProps {
  navigate: (to: PageView) => void;
}

export default function About({ navigate }: AboutProps) {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Strategy, Systems, and Marketing{' '}
            <span className="text-brand-cyan">Under One Roof</span>
          </>
        }
      >
        TradeWorks Media &amp; Design is a St. Louis–based digital marketing agency specializing in
        trade-related industries. We design personalized marketing and sales systems and support
        them with advertising, SEO, content, and web design. We also bring the same approach to{' '}
        <span className="whitespace-nowrap">e-commerce</span>, engineering, and other professional
        firms.
      </PageHero>

      {/* Mission */}
      <section className="surface-metal border-y border-brand-silver/10 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <span className="eyebrow">Our Mission</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-fg sm:text-4xl md:text-5xl">
              Marketing That Works as a System
            </h2>
            <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
              Most businesses have marketing pieces that don't connect: ads in one place, a website
              in another, and follow-up that depends on someone remembering. Our mission is to
              replace that with one personalized marketing and sales system, from first contact to
              closed sale, built around how your business actually sells.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'A strategy and sales system designed for your business, not a template',
                'Ads, SEO, content, and your website all working toward the same goal',
                'Clear reporting and direct access to the people doing the work',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-fg/90 sm:text-base">
                  <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand-cyan" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('contact')}
              className={`${btnPrimary} ${btnMd} mt-8`}
            >
              Work With Us
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="panel reveal p-6 text-center sm:p-8"
                style={revealDelay(i)}
              >
                <div className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-12 md:mb-16">
            <SectionHeading eyebrow="What We Stand For" title="How We Operate" />
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {VALUES.map((value, i) => (
              <div key={value.title} className="panel reveal p-7 md:p-8" style={revealDelay(i)}>
                <IconTile icon={value.icon} />
                <h3 className="mt-6 text-xl font-bold text-fg sm:text-[22px]">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <CtaPanel>
            <div className="mb-6 flex justify-center">
              <IconTile icon={Target} size="lg" />
            </div>
            <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-fg sm:text-4xl">
              Start With a Conversation
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              Book a free strategy call. We'll talk through your goals and outline how we would
              approach them.
            </p>
            <button
              onClick={() => navigate('contact')}
              className={`${btnPrimary} ${btnLg} mt-8`}
            >
              Get a Free Quote
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </button>
          </CtaPanel>
        </div>
      </section>
    </div>
  );
}
