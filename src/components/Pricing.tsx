import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/agencyData';
import { FOUNDER_INFO } from '../data/agencyData';
import { Check, Zap, Calculator } from 'lucide-react';

interface PricingProps {
  onOpenQuoteModal: () => void;
  onSelectTier: (tierName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenQuoteModal, onSelectTier }) => {
  const [showDeliverables, setShowDeliverables] = useState<boolean>(false);

  return (
    <section id="pricing" className="py-20 relative bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>2026 Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Clear Packages & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Upfront Pricing</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No lock-in contracts, no hidden surprise fees. You own 100% of your source code and domain.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full glass-card border border-slate-800">
            <button
              onClick={() => setShowDeliverables(false)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                !showDeliverables ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400'
              }`}
            >
              Features Included
            </button>
            <button
              onClick={() => setShowDeliverables(true)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                showDeliverables ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400'
              }`}
            >
              What You Receive
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`glass-card rounded-3xl p-6 border flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'border-teal-500/60 shadow-2xl shadow-teal-500/15 bg-gradient-to-b from-teal-950/20 to-slate-950'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{tier.subtitle}</p>
                </div>

                {/* Price Block */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-white">{tier.price}</div>
                  <div className="text-[10px] text-teal-400 font-semibold mt-1">{tier.priceNote}</div>
                  <div className="text-xs text-slate-400 mt-2 italic">{tier.idealFor}</div>
                </div>

                {/* Features or Deliverables List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {showDeliverables ? 'Deliverables:' : "What's Included:"}
                  </div>
                  {(showDeliverables ? tier.deliverables : tier.features).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6">
                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3.5 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 shadow-xl shadow-teal-500/25'
                      : 'bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Quote Calculator Banner */}
        <div className="mt-16 glass-card p-6 sm:p-8 rounded-3xl border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Calculator className="w-5 h-5 text-teal-400" />
              <span>Need a Custom Quote or Complex Web App?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Use our interactive price estimator to configure custom feature modules and generate an instant WhatsApp quote.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs sm:text-sm shrink-0 shadow-lg shadow-teal-500/20"
          >
            Launch Quote Calculator
          </button>
        </div>

      </div>
    </section>
  );
};
