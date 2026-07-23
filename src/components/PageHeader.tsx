import React from 'react';
import { ActivePage } from '../types';
import { ArrowLeft, Calculator } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
  onOpenQuoteModal: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  onPageChange,
  onOpenQuoteModal
}) => {
  return (
    <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        <div className="space-y-3 max-w-3xl">
          <button
            onClick={() => onPageChange('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-teal-500/20"
          >
            <Calculator className="w-4 h-4" />
            <span>Instant Quote Calculator</span>
          </button>
        </div>

      </div>
    </div>
  );
};
