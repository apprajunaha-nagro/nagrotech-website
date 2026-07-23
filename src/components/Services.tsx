import React from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { Code2, TrendingUp, Zap, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
  onOpenQuoteModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenQuoteModal }) => {

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-teal-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-teal-300" />;
      default:
        return <Code2 className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="services" className="py-20 relative bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>High-Impact Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Engineering Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Engineered for speed, built with React 19, and optimized to dominate Google search results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`glass-card rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-1 ${
                service.popular
                  ? 'border-teal-500/50 shadow-2xl shadow-teal-500/10 bg-gradient-to-b from-teal-950/20 to-slate-950'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-teal-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                  Most Requested Choice
                </div>
              )}

              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-teal-400 font-semibold mt-1">
                      <Clock className="w-3 h-3" />
                      <span>Delivery in {service.deliverableTime}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Features:</div>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-8 space-y-3">
                <button
                  onClick={() => {
                    onSelectService(service.title);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
                >
                  <span>Select & Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
