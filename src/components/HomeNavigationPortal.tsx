import React from 'react';
import { ActivePage } from '../types';
import { ArrowRight, Code2, ShieldCheck, Zap, Layers, Sparkles, UserCheck } from 'lucide-react';

interface HomeNavigationPortalProps {
  onPageChange: (page: ActivePage) => void;
}

export const HomeNavigationPortal: React.FC<HomeNavigationPortalProps> = ({ onPageChange }) => {
  const portalCards = [
    {
      page: 'services' as ActivePage,
      title: 'Core Digital Services',
      subtitle: 'React web design, Google Maps local SEO, and speed optimization.',
      icon: Code2,
      badge: 'Full Suite'
    },
    {
      page: 'why-us' as ActivePage,
      title: 'Why Choose Nagrotech',
      subtitle: 'Sub-second speed architecture and direct founder supervision.',
      icon: Zap,
      badge: 'Zero Bloat'
    },
    {
      page: 'compare-us' as ActivePage,
      title: 'Competitor Comparison',
      subtitle: 'Side-by-side technical matrix against traditional options.',
      icon: ShieldCheck,
      badge: 'Matrix'
    },
    {
      page: 'process' as ActivePage,
      title: '4-Step Process',
      subtitle: 'From discovery to fast 7-day delivery workflow.',
      icon: Layers,
      badge: 'Fast Launch'
    },
    {
      page: 'work' as ActivePage,
      title: 'Portfolio & Proof',
      subtitle: 'Explore 7 live client projects with speed benchmarks.',
      icon: Sparkles,
      badge: 'Live Demos'
    },
    {
      page: 'about' as ActivePage,
      title: 'About Founder',
      subtitle: 'Meet Lead Architect Raju Naha and agency vision.',
      icon: UserCheck,
      badge: 'Leadership'
    }
  ];

  return (
    <section className="py-12 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portalCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <button
              key={idx}
              onClick={() => onPageChange(card.page)}
              className="text-left glass-card p-5 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 group flex items-start justify-between"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 text-[10px] font-bold uppercase tracking-wider">
                  {card.badge}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
