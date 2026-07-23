import type {
  FooterColumnData,
  HeroContent,
  ModelCardData,
  NavLink,
} from '../types';

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { label: 'Research', href: '#research' },
  { label: 'Product', href: '#product' },
  { label: 'Company', href: '#company' },
  { label: 'Careers', href: '#careers' },
];

export const HERO_CONTENT: HeroContent = {
  headlineSegments: [
    { text: 'AI research and products that put ' },
    { text: 'safety', emphasized: true },
    { text: ' at the frontier.' },
  ],
  subheadline:
    'We are an AI safety and research company, working to build reliable, interpretable, and steerable AI systems.',
  actions: [
    { label: 'Meet Claude 3', href: '#product', variant: 'primary' },
    { label: 'Read our research', href: '#research', variant: 'secondary' },
  ],
};

export const MODEL_CARDS: ReadonlyArray<ModelCardData> = [
  {
    name: 'Haiku',
    tier: 'FAST',
    tagline: 'Light and fast',
    description:
      'The fastest model of the family — near-instant responsiveness for seamless, human-like interactions at scale.',
    href: '#product',
  },
  {
    name: 'Sonnet',
    tier: 'BALANCED',
    tagline: 'Hard-working',
    description:
      'The ideal balance of intelligence and speed, engineered for enterprise workloads and dependable throughput.',
    href: '#product',
  },
  {
    name: 'Opus',
    tier: 'FRONTIER',
    tagline: 'Powerful',
    description:
      'Our most intelligent model, delivering state-of-the-art performance on highly complex, open-ended tasks.',
    href: '#product',
  },
];

export const FOOTER_COLUMNS: ReadonlyArray<FooterColumnData> = [
  {
    title: 'Research',
    links: [
      { label: 'Publications', href: '#research' },
      { label: 'Interpretability', href: '#research' },
      { label: 'Alignment', href: '#research' },
      { label: 'Policy', href: '#research' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Claude', href: '#product' },
      { label: 'API', href: '#product' },
      { label: 'Pricing', href: '#product' },
      { label: 'Trust & Safety', href: '#product' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#company' },
      { label: 'Careers', href: '#careers' },
      { label: 'News', href: '#company' },
      { label: 'Contact', href: '#company' },
    ],
  },
];

export const COPYRIGHT = '© 2026 Anthropic — a front-end design study.';
