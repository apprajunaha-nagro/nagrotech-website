import React, { useState } from 'react';
import { Gauge, Calculator, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export const SpeedRoiAudit: React.FC = () => {
  const [currentSpeedSeconds, setCurrentSpeedSeconds] = useState<number>(4.5);
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(3000);
  const [avgCustomerValueINR, setAvgCustomerValueINR] = useState<number>(2500);

  // Conversion loss math (Industry benchmark: Every 1s delay reduces conversions by 7%)
  const excessDelaySeconds = Math.max(0, currentSpeedSeconds - 0.8);
  const conversionLossPercent = Math.min(60, excessDelaySeconds * 7.5);
  const estimatedLostVisitors = Math.round(monthlyVisitors * (conversionLossPercent / 100));
  const estimatedLostRevenueINR = Math.round(estimatedLostVisitors * 0.05 * avgCustomerValueINR);

  return (
    <section id="audit" className="py-20 relative bg-slate-950/90 backdrop-blur-xl border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Gauge className="w-3.5 h-3.5" />
            <span>Interactive ROI Audit Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How Much Revenue is Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">Slow Website</span> Losing?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A 1-second delay in page load time reduces conversions by 7%. Calculate your business's lost revenue in real time.
          </p>
        </div>

        {/* Audit Tool Interface Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Speed Slider */}
            <div>
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-200 mb-2">
                <span>Current Website Load Time:</span>
                <span className="text-red-400 font-extrabold text-base">{currentSpeedSeconds.toFixed(1)}s</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="10.0"
                step="0.1"
                value={currentSpeedSeconds}
                onChange={(e) => setCurrentSpeedSeconds(parseFloat(e.target.value))}
                className="w-full accent-red-400 cursor-pointer"
              />
            </div>

            {/* Visitors Slider */}
            <div>
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-200 mb-2">
                <span>Estimated Monthly Visitors:</span>
                <span className="text-teal-400 font-extrabold text-base">{monthlyVisitors.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(parseInt(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>

            {/* Customer Value Slider */}
            <div>
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-200 mb-2">
                <span>Average Order / Lead Value:</span>
                <span className="text-cyan-400 font-extrabold text-base">₹{avgCustomerValueINR.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={avgCustomerValueINR}
                onChange={(e) => setAvgCustomerValueINR(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center space-y-4 shadow-xl">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              Estimated Monthly Revenue Loss
            </div>

            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">
              ₹{estimatedLostRevenueINR.toLocaleString('en-IN')} / mo
            </div>

            <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
              Your website's extra {excessDelaySeconds.toFixed(1)}s load delay causes roughly <span className="text-white font-bold">{conversionLossPercent.toFixed(1)}%</span> of prospective buyers to bounce before seeing your offer.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-teal-500/20"
              >
                <span>Fix Speed to Sub-0.8s Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
