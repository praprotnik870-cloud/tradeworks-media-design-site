import {
  BarChart3,
  Zap,
  CalendarCheck,
  Globe,
  Cpu,
  Target,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Clock,
  MessageSquare,
  Handshake,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { NavItem } from './types';

export const CONTACT = {
  phone: '314-800-7106',
  phoneHref: 'tel:+13148007106',
  email: 'tradeworks.design@gmail.com',
  emailHref: 'mailto:tradeworks.design@gmail.com',
  location: 'St. Louis, MO',
  // Formspree endpoint (existing TradeWorks form)
  formEndpoint: 'https://formspree.io/f/mjgkaokg',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', view: 'home' },
  { label: 'About', view: 'about' },
  { label: 'Services', view: 'services' },
  { label: 'Why Us', view: 'reviews' },
  { label: 'Contact', view: 'contact' },
];

export interface Service {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  accent: 'blue' | 'orange' | 'green';
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    title: 'Meta Ads',
    tagline: 'Facebook & Instagram',
    description:
      'High-converting ad campaigns engineered to dominate your local market and put your offer in front of the right people.',
    features: [
      'Custom ad creative & copy',
      'Advanced audience targeting',
      'A/B split testing',
      'Pixel & conversion tracking',
      'Weekly performance reports',
    ],
    icon: BarChart3,
    accent: 'blue',
    featured: true,
  },
  {
    title: 'Lead Generation',
    tagline: 'Qualified, ready-to-buy',
    description:
      'Automated systems that capture, filter, and nurture leads until they are ready to talk to you.',
    features: [
      'High-converting landing pages',
      'Automated email & SMS follow-up',
      'Lead qualification funnels',
      'CRM integration',
      'Instant lead notifications',
    ],
    icon: Zap,
    accent: 'orange',
    featured: true,
  },
  {
    title: 'Appointment Setting',
    tagline: 'Calendar on autopilot',
    description:
      'We turn your leads into booked appointments on your calendar — automatically, so you can focus on closing.',
    features: [
      'Calendar system integration',
      'Automated booking reminders',
      'Lead nurture to appointment',
      'Qualification call scripts',
      'Seamless hand-off to sales',
    ],
    icon: CalendarCheck,
    accent: 'green',
    featured: true,
  },
  {
    title: 'Basic Website',
    tagline: 'Professional presence',
    description:
      'A streamlined, professional site for businesses that need high performance without the heavy lifting.',
    features: [
      'SEO optimized structure',
      'High-converting UX/UI',
      'Premium animations & design',
      '1–5 custom pages',
      'Fully responsive on every device',
    ],
    icon: Globe,
    accent: 'orange',
  },
  {
    title: 'Advanced Website',
    tagline: 'AI-powered flagship',
    description:
      'A powerhouse digital ecosystem with cutting-edge AI features and a robust, high-converting structure.',
    features: [
      'Everything in Basic, plus:',
      'AI-integrated chat system',
      'AI design studio visualization',
      'Enhanced performance optimization',
      'Custom API integrations',
    ],
    icon: Cpu,
    accent: 'blue',
  },
];

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: 'blue' | 'orange' | 'green';
}

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Meta Ads Strategy',
    description:
      "We don't just run ads — we build profit engines. Every campaign is architected for maximum ROI and scale.",
    icon: Target,
    accent: 'blue',
  },
  {
    title: 'Lead Generation',
    description:
      'Built with sales psychology at the core to turn cold traffic into qualified leads ready to talk.',
    icon: Zap,
    accent: 'orange',
  },
  {
    title: 'Booked Appointments',
    description:
      'Stop chasing leads. We automate the entire process from first click to a confirmed spot on your calendar.',
    icon: CalendarCheck,
    accent: 'green',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Strategy Call',
    description:
      'We learn your business, your goals, and your ideal customer, then map out a plan built for your market.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Build & Launch',
    description:
      'We design your assets, build your funnels, and launch campaigns engineered to convert from day one.',
    icon: Rocket,
  },
  {
    number: '03',
    title: 'Scale & Optimize',
    description:
      'We track every metric and continuously optimize so your cost per lead drops and your bookings climb.',
    icon: TrendingUp,
  },
];

// Genuine commitments — how we work, not claimed results. Honest for a new studio.
export interface Commitment {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: 'blue' | 'orange' | 'green';
}

export const COMMITMENTS: Commitment[] = [
  {
    title: 'Fast Replies',
    description:
      'We respond to every message within one business day — no black holes, no waiting around.',
    icon: Clock,
    accent: 'blue',
  },
  {
    title: 'Plain English',
    description:
      "No buzzwords or runaround. We explain what we're doing and why, in language that actually makes sense.",
    icon: MessageSquare,
    accent: 'orange',
  },
  {
    title: 'The Right Metrics',
    description:
      'We focus on booked appointments and revenue — not likes, impressions, or vanity numbers.',
    icon: Target,
    accent: 'green',
  },
  {
    title: 'Full Transparency',
    description:
      "You'll always know what we're working on, what it costs, and how it's performing.",
    icon: BarChart3,
    accent: 'blue',
  },
  {
    title: 'Zero Pressure',
    description:
      "Your quote is free and our advice is honest. If we're not the right fit, we'll tell you.",
    icon: Handshake,
    accent: 'orange',
  },
  {
    title: 'Direct Access',
    description:
      'You work directly with the people building your project — no junior hand-offs.',
    icon: Users,
    accent: 'green',
  },
];

// Honest "what we do" highlights — factual service pillars, no fabricated metrics.
export const STATS = [
  { value: 'Ads', label: 'Meta & Instagram' },
  { value: 'Leads', label: 'Funnels & Follow-Up' },
  { value: 'Sites', label: 'Custom-Built' },
  { value: 'AI', label: 'Chat & Automation' },
];

export const VALUES = [
  {
    title: 'Results First',
    description: 'We measure success by your booked appointments and revenue, not vanity metrics.',
    icon: TrendingUp,
  },
  {
    title: 'Built to Convert',
    description: 'Every pixel and every campaign is designed with one goal: turning visitors into customers.',
    icon: Target,
  },
  {
    title: 'Reliable Partner',
    description: 'Clear communication, fast turnarounds, and a team that treats your business like our own.',
    icon: ShieldCheck,
  },
];
