export type ActivePage =
  | 'home'
  | 'services'
  | 'why-us'
  | 'compare-us'
  | 'process'
  | 'work'
  | 'pricing'
  | 'about'
  | 'contact'
  | 'audit-tool'
  | 'all';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  startingPrice: string;
  category: 'web' | 'seo' | 'maintenance' | 'design' | 'growth';
  badge?: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  clientName: string;
  location: string;
  category: string;
  image: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
  year: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  subtitle: string;
  popular: boolean;
  idealFor: string;
  ctaText: string;
  features: string[];
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  businessName: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
  iconName: string;
}

export interface USPItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface QuoteCalculatorOption {
  id: string;
  label: string;
  category: 'type' | 'seo' | 'features' | 'maintenance';
  priceINR: number;
  desc: string;
}
