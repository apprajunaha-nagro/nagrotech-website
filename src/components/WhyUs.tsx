import React from 'react';
import { Zap, ShieldCheck, Clock, Award, Code2, HeartHandshake } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    {
      icon: Zap,
      title: "Sub-Second Speed Standard",
      description: "Our websites load in 0.5s to 0.8s, keeping visitors engaged and boosting Google search ranking."
    },
    {
      icon: Award,
      title: "Direct Founder Supervision",
      description: "Every line of code is reviewed and architected by Raju Naha. Zero low-quality junior outsourcing."
    },
    {
      icon: ShieldCheck,
      title: "Google Maps Local SEO",
      description: "Custom local schema and citation engineering to ensure your business dominates Dhanbad local search."
    },
    {
      icon: Clock,
      title: "7-Day Fast Delivery",
      description: "Structured workflow ensuring your production-ready website goes live within 7 business days."
    },
    {
      icon: Code2,
      title: "React 19 & TypeScript",
      description: "Built using modern React 19, TypeScript, and Vite for maximum security, stability, and scale."
    },
    {
      icon: HeartHandshake,
      title: "Zero Hidden Lock-in",
      description: "You retain 100% full source code and domain ownership with no monthly proprietary theme fees."
    }
  ];

  return (
    <section id="why-us" className="py-20 relative bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Built Different</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Ambitious Companies <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Choose Nagrotech</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-teal-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
