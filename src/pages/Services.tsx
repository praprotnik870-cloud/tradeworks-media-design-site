import { ArrowRight, Check } from 'lucide-react';
import { SERVICES, CONTACT } from '../data';
import { btnBase, btnPrimary, btnSecondary, btnMd, btnLg, revealDelay } from '../ui';
import PageHero from '../components/PageHero';
import IconTile from '../components/IconTile';
import CtaPanel from '../components/CtaPanel';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import type { PageView } from '../types';

const coreService = SERVICES.find((s) => s.featured);
const supportServices = SERVICES.filter((s) => !s.featured);

interface ServicesProps {
  navigate: (to: PageView) => void;
}

export default function Services({ navigate }: ServicesProps) {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            From First Contact <span className="text-brand-cyan">to Closed Sale</span>
          </>
        }
      >
        Our core service is a personalized marketing and sales system built for your business.
        Advertising, SEO, content, and web design are available on their own or as part of that
        system.
      </PageHero>

      {/* Services grid */}
      <section className="pb-8 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          {coreService && (
            <div className="mb-5 md:mb-6">
              <FeaturedServiceCard service={coreService} onGetStarted={() => navigate('contact')} />
            </div>
          )}

          <div className="mb-6 mt-12 md:mt-16">
            <span className="eyebrow">Supporting Services</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {supportServices.map((service, i) => (
              <div
                key={service.title}
                className="panel panel-hover reveal group flex flex-col p-7 md:p-8"
                style={revealDelay(i, 60)}
              >
                <span className="absolute -left-px -top-px h-[2px] w-12 bg-brand-cyan transition-all duration-500 group-hover:w-[calc(100%+2px)]" />
                <IconTile icon={service.icon} />
                <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  {service.tagline}
                </div>
                <h3 className="mt-1.5 text-2xl font-bold text-fg xl:text-xl">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted sm:text-base">
                  {service.description}
                </p>
                <ul className="mt-6 flex-grow space-y-2.5 border-t border-brand-silver/10 pt-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-fg/90">
                      <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('contact')}
                  className={`${btnBase} ${btnMd} mt-7 w-full border border-brand-silver/20 bg-white/[0.03] text-fg hover:border-brand-cyan hover:bg-brand-cyan hover:text-ink`}
                >
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <CtaPanel>
            <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-fg sm:text-4xl">
              Not Sure Which Service Fits?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              Tell us about your business and we'll recommend what makes sense for your goals and
              budget.
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
