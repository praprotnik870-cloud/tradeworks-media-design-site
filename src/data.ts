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
  { label: 'Reviews', view: 'reviews' },
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

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  accent: 'blue' | 'orange' | 'green';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Michael Chen',
    role: 'CEO, TechFlow',
    content:
      'TradeWorks completely transformed our online presence. The AI integration alone has saved us dozens of hours in customer support.',
    rating: 5,
    initials: 'MC',
    accent: 'blue',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Owner, Artisan Bakery',
    content:
      'The design is breathtaking. I never thought my website could look this professional and perform this well on Google.',
    rating: 5,
    initials: 'SJ',
    accent: 'orange',
  },
  {
    name: 'Jacob Myers',
    role: 'Director, Myers Construction',
    content:
      'Our leads tripled within the first month. The automation and design quality are leagues ahead of anything else we saw.',
    rating: 5,
    initials: 'JM',
    accent: 'green',
  },
  {
    name: 'Mike Crews',
    role: 'Founder, Crews Painting & Design',
    content:
      'The custom animations make our site stand out in a crowded market. TradeWorks delivered a premium product that actually converts.',
    rating: 5,
    initials: 'MC',
    accent: 'blue',
  },
];

export const STATS = [
  { value: '5.0', label: 'Client Rating' },
  { value: '100+', label: 'Campaigns Launched' },
  { value: '3x', label: 'Avg. Lead Increase' },
  { value: '24/7', label: 'AI Support Ready' },
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
