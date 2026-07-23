import { ServiceItem, ProjectItem, PricingTier, TestimonialItem, FAQItem, FounderInfo } from '../types';

export const FOUNDER_INFO: FounderInfo = {
  name: "Raju Naha",
  role: "Founder & Lead Software Architect",
  location: "Dhanbad, Jharkhand, India",
  whatsapp: "+917979783404",
  phone: "+91 7979783404",
  email: "app.rajunaha@gmail.com",
  bio: "Full-stack software engineer with expertise in React 19, TypeScript, speed optimization, and high-performance Web APIs. Dedicated to elevating regional businesses in Dhanbad and Jharkhand with world-class, sub-second web applications.",
  avatar: "/raju-naha.jpg",
  skills: ["React 19 / Vite", "TypeScript", "Tailwind CSS v4", "Google Maps Local SEO", "Sub-Second Performance Optimization", "Full-Stack Web Architecture"]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    title: "High-Performance Web Design & React Apps",
    category: "web-dev",
    description: "Custom-coded, lightning-fast React 19 web applications designed for maximum conversion and zero lag.",
    iconName: "Code2",
    features: [
      "Sub-second load times under 0.8s",
      "Full mobile & desktop responsiveness",
      "Modern Tailwind CSS v4 aesthetic",
      "Interactive component animations"
    ],
    deliverables: [
      "Production ready source code",
      "Free Vercel/Netlify deployment setup",
      "Domain & SSL configuration",
      "1 Year complimentary bug fixes"
    ],
    deliverableTime: "3 to 7 Days",
    popular: true
  },
  {
    id: "seo-growth",
    title: "Google Maps Local SEO & Business Ranking",
    category: "seo-growth",
    description: "Dominate local search results in Dhanbad & Jharkhand. Rank #1 on Google Maps for local buyer intent keywords.",
    iconName: "TrendingUp",
    features: [
      "Google Business Profile optimization",
      "Local citation building & audit",
      "Review management automation",
      "Targeted local keyword targeting"
    ],
    deliverables: [
      "Optimized Google Business Profile",
      "50+ verified local directory citations",
      "Monthly keyword ranking progress report",
      "Competitor search analysis"
    ],
    deliverableTime: "Ongoing (Results in 14 Days)"
  },
  {
    id: "speed-cro",
    title: "Speed Optimization & Core Web Vitals Fix",
    category: "design-cro",
    description: "Turn slow, sluggish websites into 95+ score Google Lighthouse speed demons. Reduce bounce rates instantly.",
    iconName: "Zap",
    features: [
      "100/100 Core Web Vitals target",
      "Next-gen WebP/AVIF image compression",
      "Script deferral & bundle minification",
      "Server caching & CDN configuration"
    ],
    deliverables: [
      "Before & After Lighthouse audit report",
      "Minified CSS/JS asset bundle",
      "Optimized media pipeline",
      "Server compression setup"
    ],
    deliverableTime: "24 to 48 Hours"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "addiction-gym",
    title: "Addiction Gym Dhanbad",
    clientName: "Addiction Gym",
    industry: "Fitness & Wellness",
    category: "web-dev",
    description: "Ultra-modern fitness membership portal with interactive trainer booking, pricing calculator, and Google Maps integration.",
    image: "/screenshots/addiction-gym.jpg",
    liveUrl: "https://darkslateblue-toad-871981.hostingersite.com/",
    metrics: {
      speedBefore: "4.2s",
      speedAfter: "0.6s",
      trafficIncrease: "+240%",
      conversionBoost: "+180%"
    },
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    challenge: "Original site loaded in 4.2 seconds on mobile with zero mobile-responsive layout, causing lost walk-in inquiries.",
    solution: "Rebuilt from scratch with React 19, glassmorphic UI elements, and instant WhatsApp booking integration."
  },
  {
    id: "buddy-rental",
    title: "Buddy Rental Dhanbad",
    clientName: "Buddy Rental",
    industry: "Vehicle Rental",
    category: "web-dev",
    description: "Fast bike & car rental booking application featuring instant availability check and WhatsApp direct reservation.",
    image: "/screenshots/buddy-rental.jpg",
    liveUrl: "https://darkslateblue-toad-871981.hostingersite.com/",
    metrics: {
      speedBefore: "5.1s",
      speedAfter: "0.5s",
      trafficIncrease: "+310%",
      conversionBoost: "+210%"
    },
    technologies: ["React 19", "Vite", "Tailwind CSS", "Lucide Icons"],
    challenge: "High customer bounce rate due to slow mobile photo loads during peak weekend rental searches.",
    solution: "Engineered sub-second WebP frame loading and a 1-tap WhatsApp booking workflow."
  },
  {
    id: "ca-dhanbad",
    title: "CA Audit & Tax Firm Dhanbad",
    clientName: "CA Dhanbad",
    industry: "Financial & Tax Consultancy",
    category: "seo-growth",
    description: "Authoritative corporate web portal for Chartered Accountants offering tax audit, GST return, and business registration services.",
    image: "/screenshots/ca-dhanbad.jpg",
    liveUrl: "https://ca-dhanbad.vercel.app/",
    metrics: {
      speedBefore: "3.8s",
      speedAfter: "0.7s",
      trafficIncrease: "+190%",
      conversionBoost: "+145%"
    },
    technologies: ["React 19", "TypeScript", "Vercel Edge API"],
    challenge: "Low local search visibility on Google Maps for corporate GST audit keywords.",
    solution: "Implemented local schema markup, structured JSON-LD data, and sub-second React rendering."
  },
  {
    id: "coaching-iit",
    title: "IIT & NEET Coaching Dhanbad",
    clientName: "Coaching IIT",
    industry: "Education & Coaching",
    category: "web-dev",
    description: "Premier academic institute portal featuring batch schedules, online demo class registration, and scholarship test signups.",
    image: "/screenshots/coaching.jpg",
    liveUrl: "https://coaching-iit.vercel.app/",
    metrics: {
      speedBefore: "4.5s",
      speedAfter: "0.6s",
      trafficIncrease: "+280%",
      conversionBoost: "+195%"
    },
    technologies: ["React 19", "TypeScript", "Tailwind CSS"],
    challenge: "Heavy student traffic crashed previous WordPress site during admission result announcements.",
    solution: "Deployed static SPA architecture on Vercel global CDN with zero server downtime."
  },
  {
    id: "emical-online",
    title: "FinCal Suite - EMI & Investment Calculator",
    clientName: "FinCal Suite",
    industry: "Fintech & Web Tools",
    category: "web-dev",
    description: "High-precision financial tool suite calculating loan EMIs, SIP wealth projections, and tax schedules in real time.",
    image: "/screenshots/emical.jpg",
    liveUrl: "https://emical.online/",
    metrics: {
      speedBefore: "3.2s",
      speedAfter: "0.4s",
      trafficIncrease: "+420%",
      conversionBoost: "+300%"
    },
    technologies: ["React 19", "Canvas Charts", "Tailwind CSS"],
    challenge: "Calculation lag and delayed graph updates on mobile devices.",
    solution: "Built zero-dependency math calculation hooks with instantaneous Canvas chart updates."
  },
  {
    id: "nagro-in",
    title: "Nagro Official Website",
    clientName: "Nagro Industrial",
    industry: "Industrial & Clean Energy",
    category: "web-dev",
    description: "Corporate portal for Nagro CBG clean energy initiative showcasing plant architecture and investor metrics.",
    image: "/screenshots/nagro.jpg",
    liveUrl: "https://www.nagro.in/",
    metrics: {
      speedBefore: "3.9s",
      speedAfter: "0.5s",
      trafficIncrease: "+175%",
      conversionBoost: "+160%"
    },
    technologies: ["React 19", "TypeScript", "Motion"],
    challenge: "Complex industrial documentation was difficult to navigate on mobile devices.",
    solution: "Designed clean tabbed documentation architecture with smooth scroll animations."
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Business Web",
    tagline: "Ideal for small local businesses needing a fast, professional online presence.",
    priceINR: 11999,
    amcCostINR: 2499,
    deliveryTime: "3 to 5 Days",
    features: [
      "5-Page Hand-Coded React Website",
      "Sub-Second Mobile Load Speed (< 0.8s)",
      "Direct WhatsApp & Call Click Buttons",
      "Google Maps Business Listing Setup",
      "Free SSL Certificate & Hosting Setup",
      "1 Year Basic Technical Maintenance"
    ],
    bestFor: "Local Stores, Gyms, Clinics, Restaurants"
  },
  {
    id: "pro-growth",
    name: "Pro Growth & Local SEO",
    tagline: "For growing companies looking to dominate Google search and generate leads daily.",
    priceINR: 24999,
    amcCostINR: 4999,
    deliveryTime: "5 to 7 Days",
    popular: true,
    features: [
      "Up to 10 Custom React / Vite Pages",
      "Full Google Maps Local SEO Ranking Suite",
      "Interactive Quote / Lead Calculator Modal",
      "Custom Micro-Animations & Motion Design",
      "100/100 Core Web Vitals Target Score",
      "Priority WhatsApp & Phone Support"
    ],
    bestFor: "Coaching Centers, CA Firms, Real Estate, Service Businesses"
  },
  {
    id: "enterprise",
    name: "Custom Web Application",
    tagline: "Full-scale custom Web Applications, E-Commerce, or API-integrated portals.",
    priceINR: 49999,
    amcCostINR: 9999,
    deliveryTime: "10 to 14 Days",
    features: [
      "Unlimited Custom Pages & Admin Dashboard",
      "Custom Backend / Database Integration",
      "Payment Gateway & SMS API Wiring",
      "High-Traffic Server Infrastructure",
      "Dedicated Project Manager (Raju Naha)",
      "24/7 Priority Emergency Support"
    ],
    bestFor: "Fintech, E-Commerce, Multi-Branch Enterprises"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Amit Sharma",
    role: "Managing Director",
    company: "Addiction Gym Dhanbad",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "Nagrotech completely revamped our web presence. Within 2 weeks of launching our new site, walk-in inquiries increased by 180%. The load speed is ridiculously fast on mobile!",
    rating: 5,
    location: "Dhanbad",
    projectType: "Web Design & Speed"
  },
  {
    id: "t2",
    name: "Priya Verma",
    role: "Founder & Principal",
    company: "Coaching IIT Dhanbad",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    quote: "Raju Naha and his team delivered our coaching portal in just 5 days. Parents love the instant batch schedule check and online admission request feature.",
    rating: 5,
    location: "Dhanbad",
    projectType: "Full Web Portal"
  },
  {
    id: "t3",
    name: "Rajesh Kumar",
    role: "Senior Partner",
    company: "CA Tax Audit Firm",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "Our local Google search traffic surged after Nagrotech optimized our local SEO profile and rebuilt our website with sub-second speeds. Highly recommended!",
    rating: 5,
    location: "Dhanbad",
    projectType: "Local SEO & Web Dev"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "Why should I choose Nagrotech over traditional WordPress agencies?",
    answer: "Traditional WordPress sites rely on heavy plugins that cause 3s+ load delays. Nagrotech builds zero-bloat, custom React 19 websites that load in under 0.8 seconds, ranking higher on Google and converting more visitors into buyers.",
    category: "tech"
  },
  {
    id: "faq2",
    question: "How long does it take to deliver a completed website?",
    answer: "Starter websites are delivered in 3 to 5 business days. Pro Growth packages take 5 to 7 days, and custom web applications take 10 to 14 days from initial requirement confirmation.",
    category: "process"
  },
  {
    id: "faq3",
    question: "Are there any hidden recurring fees after delivery?",
    answer: "No hidden fees whatsoever. You own 100% of your source code. Optional Annual Maintenance Contracts (AMC) are available if you want us to handle ongoing domain renewals, hosting, and content updates.",
    category: "pricing"
  },
  {
    id: "faq4",
    question: "Can I manage or update site content after launch?",
    answer: "Yes! We provide intuitive admin controls or simple file configurations so you can update text, images, and prices effortlessly. We also offer free maintenance support for the first year.",
    category: "support"
  }
];
