import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

export const CompetitorComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: "Average Mobile Load Time",
      nagrotech: "0.5s - 0.8s (Instant)",
      freelancer: "3.5s - 6.0s (Slow)",
      traditionalAgency: "2.5s - 4.5s (Bloated)",
    },
    {
      feature: "Underlying Tech Architecture",
      nagrotech: "React 19 + TypeScript + Vite",
      freelancer: "Template WordPress / Elementor",
      traditionalAgency: "Generic CMS Templates",
    },
    {
      feature: "Google Lighthouse Speed Score",
      nagrotech: "95 - 100 Grade A",
      freelancer: "30 - 50 Grade F",
      traditionalAgency: "50 - 70 Grade C",
    },
    {
      feature: "Direct Founder Supervision",
      nagrotech: "100% Raju Naha Lead Architect",
      freelancer: "Solo Junior / Inconsistent",
      traditionalAgency: "Outsourced to Junior Interns",
    },
    {
      feature: "Google Maps Local SEO Optimization",
      nagrotech: "Built-in Schema & Citation Suite",
      freelancer: "Extra Charge / Basic Title Tag",
      traditionalAgency: "Expensive Monthly Retainer",
    },
    {
      feature: "Hidden Code Lock-in / Licensing",
      nagrotech: "Zero - Full Source Ownership",
      freelancer: "Proprietary Theme Lock",
      traditionalAgency: "High Annual Renewal Fees",
    }
  ];

  return (
    <section id="compare-us" className="py-20 relative bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparent Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Nagrotech</span> Compares
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A side-by-side technical breakdown showing why ambitious businesses switch to Nagrotech.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="glass-card rounded-3xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="py-5 px-6 text-sm font-extrabold text-slate-200">Key Performance Metric</th>
                <th className="py-5 px-6 text-sm font-black text-teal-400 bg-teal-950/40 border-x border-teal-500/30">
                  Nagrotech Digital
                </th>
                <th className="py-5 px-6 text-sm font-semibold text-slate-400">Budget Freelancer</th>
                <th className="py-5 px-6 text-sm font-semibold text-slate-400">Traditional Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">{row.feature}</td>
                  <td className="py-4 px-6 font-extrabold text-teal-300 bg-teal-950/20 border-x border-teal-500/20">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-400 shrink-0" />
                      {row.nagrotech}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    <span className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      {row.freelancer}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    <span className="flex items-center gap-2">
                      <X className="w-4 h-4 text-orange-400 shrink-0" />
                      {row.traditionalAgency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
