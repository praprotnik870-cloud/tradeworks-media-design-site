import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../data';
import { btnPrimary, btnSecondary, btnMd, btnLg } from '../ui';
import PageHero from '../components/PageHero';
import IconTile from '../components/IconTile';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-sm border border-brand-silver/15 bg-ink/70 px-4 py-3 text-base text-fg placeholder:text-fg-subtle outline-none transition-colors focus:border-brand-cyan/70 focus:ring-1 focus:ring-brand-cyan/40';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactCards = [
    { icon: Phone, label: 'Call Us', value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: 'Email Us', value: CONTACT.email, href: CONTACT.emailHref },
    { icon: MapPin, label: 'Based In', value: CONTACT.location, href: undefined },
  ];

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Tell Us About <span className="text-brand-cyan">Your Business</span>
          </>
        }
      >
        Share a few details about your business and goals. We'll reply within one business day
        with next steps and a free, no-obligation quote.
      </PageHero>

      {/* Form + info */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-5 lg:gap-10">
          {/* Info column */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactCards.map((c) => {
                const inner = (
                  <div
                    className={`panel flex items-center gap-4 p-5 ${c.href ? 'panel-hover' : ''}`}
                  >
                    <IconTile icon={c.icon} size="sm" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-subtle">
                        {c.label}
                      </div>
                      <div className="truncate text-base font-semibold text-fg">{c.value}</div>
                    </div>
                    {c.href && <ArrowUpRight size={18} className="shrink-0 text-brand-cyan" />}
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-4 overflow-hidden border border-brand-silver/10">
              <iframe
                title="TradeWorks Media & Design location — St. Louis, MO"
                src="https://www.google.com/maps?q=St.%20Louis,%20MO&output=embed"
                className="block h-56 w-full sm:h-64"
                style={{ filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="panel corner-frame p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-6">
                    <IconTile icon={CheckCircle2} size="lg" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-fg sm:text-3xl">Message Received</h2>
                  <p className="mt-3 max-w-sm text-base text-fg-muted">
                    Thanks for reaching out. We'll reply within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className={`${btnSecondary} ${btnMd} mt-7`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" name="name" type="text" placeholder="John Smith" required />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="(314) 555-0123"
                      required
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@business.com"
                    required
                  />
                  <Field
                    label="Business Name"
                    name="business"
                    type="text"
                    placeholder="Your Company LLC"
                  />
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg-muted">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your business and what you're looking for..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                      Something went wrong. Please try again, or email us directly at {CONTACT.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`${btnPrimary} ${btnLg} w-full`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={17} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-fg-subtle">
                    We respect your privacy. Your details are only used to contact you about your
                    inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

function Field({ label, name, type, placeholder, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-fg-muted">
        {label}
        {required && <span className="text-brand-cyan"> *</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
