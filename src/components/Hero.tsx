import React from 'react';
import { FOUNDER_INFO } from '../data/agencyData';
import { Zap, ShieldCheck, ArrowRight, Award, MessageSquare } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-teal-300 text-xs sm:text-sm font-semibold tracking-wide border border-teal-500/30 shadow-lg shadow-teal-500/10 animate-pulse">
          <Award className="w-4 h-4 text-teal-400" />
          <span>Dhanbad’s Premier Tech & Web Engineering Agency</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200">Sub-Second</span> React Web Experiences
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
          High-performance React 19 web applications, Google Maps local SEO ranking, and lightning-fast digital solutions designed for high conversion. Built directly by Founder <span className="text-teal-400 font-semibold">{FOUNDER_INFO.founder}</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* Primary CTA */}
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-teal-500/25 flex items-center justify-center gap-3 group"
          >
            <span>Estimate Project Cost</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary WhatsApp CTA */}
          <a
            href={`https://wa.me/${FOUNDER_INFO.whatsappNumber}?text=Hello%20Raju,%20I%20want%20to%20discuss%20a%20new%20website%20project%20for%20my%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 text-white border border-slate-700/80 font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 text-teal-400" />
            <span>Chat on WhatsApp</span>
          </a>

        </div>

        {/* Value Metrics Row */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          
          <div className="glass-card p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-black text-teal-400">
              <AnimatedCounter end={0.6} decimals={1} suffix="s" />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Avg Load Time</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">
              <AnimatedCounter end={99} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Google Speed Score</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-black text-teal-400">
              <AnimatedCounter end={7} suffix=" Days" />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Fast Delivery</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Founder Supervision</div>
          </div>

        </div>

      </div>
    </section>
  );
};
