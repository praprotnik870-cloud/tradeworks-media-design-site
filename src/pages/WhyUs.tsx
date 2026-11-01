import { ArrowRight, Flag } from 'lucide-react';
import { COMMITMENTS } from '../data';
import { btnPrimary, btnLg, revealDelay } from '../ui';
import PageHero from '../components/PageHero';
import IconTile from '../components/IconTile';
import CtaPanel from '../components/CtaPanel';
import type { PageView } from '../types';

interface WhyUsProps {
  navigate: (to: PageView) => void;
}

export default function WhyUs({ navigate }: WhyUsProps) {
  return (
    <div>
      <PageHero
        eyebrow="Why TradeWorks"
        title={
          <>
            What You Can <span className="text-brand-cyan">Expect</span>
          </>
        }
      >
        We're a growing agency, and we'd rather show you how we work than make claims we can't
        support. Here's what you can count on from the first conversation onward.
      </PageHero>

      {/* Commitments */}
      <section className="pb-8 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {COMMITMENTS.map((c, i) => (
              <div
                key={c.title}
                className="panel panel-hover reveal p-6 md:p-7"
                style={revealDelay(i, 60)}
              >
                <IconTile icon={c.icon} />
                <h3 className="mt-5 text-lg font-bold text-fg sm:text-xl">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-muted sm:text-base">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding-client invitation */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <CtaPanel>
            <div className="mb-6 flex justify-center">
              <IconTile icon={Flag} size="lg" />
            </div>
            <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-fg sm:text-4xl">
              Be One of Our Early Clients
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              We're building our client list carefully. Early clients get close collaboration,
              direct access to the people doing the work, and a team with every reason to earn a
              long-term relationship.
            </p>
            <button
              onClick={() => navigate('contact')}
              className={`${btnPrimary} ${btnLg} mt-8`}
            >
              Start Your Project
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </button>
          </CtaPanel>
        </div>
      </section>
    </div>
  );
}
