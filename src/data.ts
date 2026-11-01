import {
  BarChart3,
  Megaphone,
  MousePointerClick,
  Briefcase,
  MapPin,
  PenTool,
  Globe,
  Cpu,
  Search,
  Target,
  Workflow,
  Layers,
  ShieldCheck,
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
  featured?: boolean;
}

// The first (featured) entry is the core offering; the rest support it.
export const SERVICES: Service[] = [
  {
    title: 'Marketing & Sales Systems',
    tagline: 'Personalized strategy & systems',
    description:
      'We design a marketing and sales system around your business: how you attract the right prospects, follow up, book appointments, and close. You get the strategy and the working system that carries it out.',
    features: [
      'Personalized marketing and sales strategy',
      'Sales process and funnel design',
      'Landing pages and lead capture',
      'Automated email and SMS follow-up',
      'Appointment booking and reminders',
      'CRM setup and integration',
      'Qualification call scripts',
      'Performance tracking and reporting',
    ],
    icon: Workflow,
    featured: true,
  },
  {
    title: 'Meta Advertising',
    tagline: 'Facebook & Instagram',
    description:
      'Campaign strategy, creative, and targeting for Facebook and Instagram, managed day to day and measured against the results that matter to your business.',
    features: [
      'Ad creative and copywriting',
      'Audience research and targeting',
      'Structured A/B testing',
      'Pixel and conversion tracking',
      'Weekly performance reports',
    ],
    icon: Megaphone,
  },
  {
    title: 'Google Ads',
    tagline: 'Search advertising',
    description:
      'Google campaigns that reach people when they are actively searching for what you offer, with keywords and budgets managed against real results.',
    features: [
      'Keyword research and campaign structure',
      'Ad copywriting',
      'Conversion tracking',
      'Bid and budget management',
      'Weekly performance reports',
    ],
    icon: MousePointerClick,
  },
  {
    title: 'LinkedIn Ads',
    tagline: 'B2B advertising',
    description:
      'LinkedIn campaigns that reach decision-makers by industry, company, and job title, well suited to commercial and B2B offers.',
    features: [
      'Targeting by role, company, and industry',
      'Ad creative and copywriting',
      'Lead gen form setup',
      'Conversion tracking',
      'Performance reporting',
    ],
    icon: Briefcase,
  },
  {
    title: 'Google Business Profile',
    tagline: 'Local visibility',
    description:
      'Ongoing management of your Google Business Profile so your business shows up accurately and competitively in local search and Maps.',
    features: [
      'Profile setup and optimization',
      'Regular posts and photo updates',
      'Review monitoring and responses',
      'Service and category updates',
      'Profile performance insights',
    ],
    icon: MapPin,
  },
  {
    title: 'SEO',
    tagline: 'Search visibility',
    description:
      'Search optimization that helps the right customers find your business on Google, built on a sound technical foundation and content that matches what people search for.',
    features: [
      'Keyword and competitor research',
      'On-page optimization',
      'Technical SEO fixes',
      'Local search visibility',
      'Ranking and traffic reporting',
    ],
    icon: Search,
  },
  {
    title: 'Content Creation & Management',
    tagline: 'Social & web content',
    description:
      'Content created for your brand, plus the planning and publishing that keep your social channels and website consistent.',
    features: [
      'Content planning and calendar',
      'Social media graphics and posts',
      'Short-form video content',
      'Blog and website copy',
      'Scheduling and publishing',
    ],
    icon: PenTool,
  },
  {
    title: 'Basic Website',
    tagline: 'Professional presence',
    description:
      'A fast, well-structured website for businesses that need a credible online presence without a large build.',
    features: [
      'SEO-friendly structure',
      'Conversion-focused layout',
      'Custom design with refined motion',
      '1–5 custom pages',
      'Fully responsive on every device',
    ],
    icon: Globe,
  },
  {
    title: 'Advanced Website',
    tagline: 'AI-powered build',
    description:
      'A larger custom website with AI-powered tools and integrations, for businesses that need more than a standard site.',
    features: [
      'Everything in Basic, plus:',
      'AI chat assistant integration',
      'AI design visualization tool',
      'Advanced performance optimization',
      'Custom API integrations',
    ],
    icon: Cpu,
  },
];

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Personalized Strategy',
    description:
      'A marketing and sales plan built around your margins, your market, and how your customers buy, not a template reused from another client.',
    icon: Target,
  },
  {
    title: 'Sales & Follow-Up Systems',
    description:
      'Lead capture, follow-up, booking, and CRM workflows designed around your sales process, so interested prospects become customers.',
    icon: Workflow,
  },
  {
    title: 'Marketing Channels',
    description:
      'Meta, Google, and LinkedIn ads, SEO, Google Business Profile, content, and websites that bring the right people into your system.',
    icon: Megaphone,
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
    title: 'Discovery & Strategy',
    description:
      "We learn how your business makes money, who your best customers are, and what has or hasn't worked before, then build a plan around it.",
    icon: Target,
  },
  {
    number: '02',
    title: 'Build & Launch',
    description:
      'We build your sales and follow-up system, produce the content and creative, set up tracking, and launch your marketing channels.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Measure & Refine',
    description:
      "We review results every week, fix what isn't working, and invest more in what is. You get clear reporting throughout.",
    icon: TrendingUp,
  },
];

// Genuine commitments — how we work, not claimed results. Honest for a new studio.
export interface Commitment {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const COMMITMENTS: Commitment[] = [
  {
    title: 'Responsive Communication',
    description: 'We reply to every message within one business day, so you are never left waiting.',
    icon: Clock,
  },
  {
    title: 'Plain English',
    description:
      "No buzzwords or runaround. We explain what we're doing and why, in terms that make sense.",
    icon: MessageSquare,
  },
  {
    title: 'The Right Metrics',
    description:
      'We report on inquiries, appointments, and revenue, not likes, impressions, or other vanity numbers.',
    icon: Target,
  },
  {
    title: 'Full Transparency',
    description:
      "You'll always know what we're working on, what it costs, and how it's performing.",
    icon: BarChart3,
  },
  {
    title: 'No-Pressure Quotes',
    description:
      "Your quote is free and our advice is honest. If we're not the right fit, we'll tell you.",
    icon: Handshake,
  },
  {
    title: 'Direct Access',
    description:
      "You work directly with the people doing the work, with no hand-offs to someone you've never met.",
    icon: Users,
  },
];

// Honest "what we do" highlights — factual service pillars, no fabricated metrics.
export const STATS = [
  { value: 'Systems', label: 'Marketing & Sales' },
  { value: 'Ads', label: 'Meta, Google & LinkedIn' },
  { value: 'Search', label: 'SEO & Google Business' },
  { value: 'Web', label: 'Sites & Content' },
];

export const VALUES = [
  {
    title: 'Outcomes Over Activity',
    description:
      'We judge our work by inquiries, appointments, and revenue, not by how busy the marketing looks.',
    icon: TrendingUp,
  },
  {
    title: 'Purposeful Design',
    description: 'Every page, ad, and email has a defined job, and we design it to do that job well.',
    icon: Target,
  },
  {
    title: 'Reliable Partnership',
    description:
      'Clear communication, realistic timelines, and a team that treats your budget like its own.',
    icon: ShieldCheck,
  },
];
