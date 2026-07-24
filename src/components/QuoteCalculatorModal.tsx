import React, { useState } from 'react';
import { FOUNDER_INFO } from '../data/agencyData';
import { X, Calculator, Check, MessageSquare, Zap } from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [pageCount, setPageCount] = useState<number>(5);
  const [needLocalSEO, setNeedLocalSEO] = useState<boolean>(true);
  const [needSpeedAudit, setNeedSpeedAudit] = useState<boolean>(true);
  const [needAMC, setNeedAMC] = useState<boolean>(false);
  const [needCustomApp, setNeedCustomApp] = useState<boolean>(false);

  // Math Estimation
  const baseCost = 8000;
  const pageCost = pageCount * 1000;
  const seoCost = needLocalSEO ? 4000 : 0;
  const speedCost = needSpeedAudit ? 2500 : 0;
  const amcCost = needAMC ? 3500 : 0;
  const appCost = needCustomApp ? 15000 : 0;

  const totalEstimatedCost = baseCost + pageCost + seoCost + speedCost + amcCost + appCost;

  const handleSendToWhatsApp = () => {
    const text = `Hello Raju Naha,\n\nI calculated a project quote on Nagrotech Estimator:\n\n- Pages: ${pageCount}\n- Google Maps Local SEO: ${needLocalSEO ? 'Yes' : 'No'}\n- Speed Optimization (100 Score): ${needSpeedAudit ? 'Yes' : 'No'}\n- Annual Maintenance (AMC): ${needAMC ? 'Yes' : 'No'}\n- Custom App Architecture: ${needCustomApp ? 'Yes' : 'No'}\n\nEstimated Total: ₹${totalEstimatedCost.toLocaleString('en-IN')}\n\nPlease confirm availability for a discussion.`;
    
    window.open(`https://wa.me/${FOUNDER_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl glass-card rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Instant Cost Calculator
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Configure Your Project</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Adjust features to receive an immediate market-rate cost breakdown.
          </p>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-xs sm:text-sm">
          
          {/* Slider for Pages */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center font-bold text-white">
              <span>Estimated Number of Pages:</span>
              <span className="text-teal-400 font-black text-base">{pageCount} Pages</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pageCount}
              onChange={(e) => setPageCount(parseInt(e.target.value))}
              className="w-full accent-teal-400 cursor-pointer"
            />
          </div>

          {/* Feature Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setNeedLocalSEO(!needLocalSEO)}
              className={`p-3 rounded-xl border text-left font-semibold flex items-center justify-between ${
                needLocalSEO ? 'bg-teal-500/20 border-teal-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <span>Google Maps Local SEO Suite</span>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needLocalSEO ? 'bg-teal-500 text-slate-950' : 'bg-slate-800'}`}>
                {needLocalSEO && <Check className="w-3.5 h-3.5 font-bold" />}
              </div>
            </button>

            <button
              onClick={() => setNeedSpeedAudit(!needSpeedAudit)}
              className={`p-3 rounded-xl border text-left font-semibold flex items-center justify-between ${
                needSpeedAudit ? 'bg-teal-500/20 border-teal-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <span>100/100 Speed Optimization</span>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needSpeedAudit ? 'bg-teal-500 text-slate-950' : 'bg-slate-800'}`}>
                {needSpeedAudit && <Check className="w-3.5 h-3.5 font-bold" />}
              </div>
            </button>

            <button
              onClick={() => setNeedAMC(!needAMC)}
              className={`p-3 rounded-xl border text-left font-semibold flex items-center justify-between ${
                needAMC ? 'bg-teal-500/20 border-teal-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <span>1 Year Annual AMC Support</span>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needAMC ? 'bg-teal-500 text-slate-950' : 'bg-slate-800'}`}>
                {needAMC && <Check className="w-3.5 h-3.5 font-bold" />}
              </div>
            </button>

            <button
              onClick={() => setNeedCustomApp(!needCustomApp)}
              className={`p-3 rounded-xl border text-left font-semibold flex items-center justify-between ${
                needCustomApp ? 'bg-teal-500/20 border-teal-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <span>Custom Backend / API Wiring</span>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needCustomApp ? 'bg-teal-500 text-slate-950' : 'bg-slate-800'}`}>
                {needCustomApp && <Check className="w-3.5 h-3.5 font-bold" />}
              </div>
            </button>
          </div>

        </div>

        {/* Estimated Price Display */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-950/40 to-slate-900 border border-teal-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">Total Estimated Investment</div>
            <div className="text-3xl sm:text-4xl font-black text-white">
              ₹{totalEstimatedCost.toLocaleString('en-IN')}
            </div>
            <div className="text-[10px] text-teal-400 font-semibold">Includes free domain setup & 1 year hosting</div>
          </div>

          <button
            onClick={handleSendToWhatsApp}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Estimate to WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
