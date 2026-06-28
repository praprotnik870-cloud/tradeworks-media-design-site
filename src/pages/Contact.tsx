import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT } from '../data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

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
      {/* Hero */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
            Get In Touch
          </span>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-white text-glow sm:text-6xl md:text-7xl">
            Let's Build Something That Converts
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            Tell us about your business and goals. We'll get back to you within one business day with
            a free, no-pressure quote.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-5 lg:gap-10">
          {/* Info column */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25">
                    <div className="rounded-xl border border-brand-orange/25 bg-brand-orange/10 p-3 text-brand-orange">
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                        {c.label}
                      </div>
                      <div className="truncate text-base font-bold text-white">{c.value}</div>
                    </div>
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

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="TradeWorks Media & Design location — St. Louis, MO"
                src="https://www.google.com/maps?q=St.%20Louis,%20MO&output=embed"
                className="h-56 w-full sm:h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-5 rounded-full border border-brand-green/30 bg-brand-green/10 p-5 text-brand-green">
                    <CheckCircle2 size={44} />
                  </div>
                  <h2 className="text-2xl font-black text-white sm:text-3xl">Message Sent!</h2>
                  <p className="mt-3 max-w-sm text-base text-slate-400">
                    Thanks for reaching out. We'll get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-7 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-black text-white transition-colors hover:border-white/40"
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
                    <label className="mb-1.5 block text-sm font-bold text-slate-300">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your business and what you're looking for..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                      Something went wrong. Please try again, or email us directly at {CONTACT.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-orange py-4 text-base font-black text-white shadow-xl shadow-orange-500/25 transition-all hover:bg-brand-orangedark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500">
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
      <label className="mb-1.5 block text-sm font-bold text-slate-300">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20"
      />
    </div>
  );
}
