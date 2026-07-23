import React from 'react';
import { Zap, ArrowRight, ShieldCheck, Gauge } from 'lucide-react';

export const BeforeAfterShowcase: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950/70 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Gauge className="w-3.5 h-3.5" />
            <span>Speed Benchmark Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Before & After <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Nagrotech Engine</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See the concrete transformation when replacing heavy WordPress setups with Nagrotech's custom React 19 architecture.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* BEFORE CARD */}
          <div className="glass-card p-8 rounded-3xl border border-red-500/20 relative overflow-hidden bg-red-950/10">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase">
              Typical WordPress Site
            </div>
            
            <h3 className="text-2xl font-bold text-slate-200 mb-6">Before Optimization</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 text-sm">Mobile Load Time</span>
                <span className="text-red-400 font-extrabold text-lg">4.8s (Slow)</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 text-sm">Google Lighthouse Speed Score</span>
                <span className="text-red-400 font-extrabold text-lg">34 / 100</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 text-sm">Mobile Visitor Bounce Rate</span>
                <span className="text-red-400 font-extrabold text-lg">68% Bounce</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 text-sm">Google Maps Search Ranking</span>
                <span className="text-slate-400 font-medium text-sm">Unranked / Page 3</span>
              </div>
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="glass-card p-8 rounded-3xl border border-teal-500/40 relative overflow-hidden bg-teal-950/20 shadow-2xl shadow-teal-500/10">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              Nagrotech React Engine
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">After Nagrotech Delivery</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/90 border border-teal-500/30">
                <span className="text-slate-300 text-sm font-medium">Mobile Load Time</span>
                <span className="text-teal-400 font-black text-lg">0.6s (Sub-Second)</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/90 border border-teal-500/30">
                <span className="text-slate-300 text-sm font-medium">Google Lighthouse Speed Score</span>
                <span className="text-cyan-400 font-black text-lg">99 / 100</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/90 border border-teal-500/30">
                <span className="text-slate-300 text-sm font-medium">Mobile Visitor Bounce Rate</span>
                <span className="text-teal-400 font-black text-lg">&lt; 14% Bounce</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-900/90 border border-teal-500/30">
                <span className="text-slate-300 text-sm font-medium">Google Maps Search Ranking</span>
                <span className="text-teal-300 font-bold text-sm">#1 Local Pack Rank</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
