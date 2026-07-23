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
  category: 'web-dev' | 'seo-growth' | 'design-cro';
  description: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  deliverableTime: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  category: 'web-dev' | 'seo-growth' | 'design-cro';
  description: string;
  image: string;
  liveUrl: string;
  metrics: {
    speedBefore: string;
    speedAfter: string;
    trafficIncrease: string;
    conversionBoost: string;
  };
  technologies: string[];
  challenge: string;
  solution: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceINR: number;
  amcCostINR?: number;
  deliveryTime: string;
  popular?: boolean;
  features: string[];
  bestFor: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  location: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'process' | 'tech' | 'support';
}

export interface FounderInfo {
  name: string;
  role: string;
  location: string;
  whatsapp: string;
  phone: string;
  email: string;
  bio: string;
  avatar: string;
  skills: string[];
}
