import React from 'react';
import { CheckCircle2, Clock, ShieldCheck, Rocket, Code2 } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Blueprint",
      description: "We analyze your business goals, target keywords, and competitors to design a clean UX layout and component tree.",
      timeline: "Day 1",
      icon: Code2
    },
    {
      number: "02",
      title: "Sub-Second React Build",
      description: "Hand-coding your website using React 19, TypeScript, and Tailwind CSS v4 with zero heavy plugin bloat.",
      timeline: "Days 2 - 4",
      icon: Rocket
    },
    {
      number: "03",
      title: "Local SEO & Speed Tuning",
      description: "Integrating Google Maps business schema, 100/100 Core Web Vitals optimization, and mobile responsive checks.",
      timeline: "Day 5",
      icon: ShieldCheck
    },
    {
      number: "04",
      title: "Live Launch & Handover",
      description: "Deploying to Vercel/Netlify global CDN, configuring SSL & domain, and handing over complete source code ownership.",
      timeline: "Days 6 - 7",
      icon: Clock
    }
  ];

  return (
    <section id="process" className="py-20 relative bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Transparent Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our 4-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Fast Launch</span> Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From initial requirement confirmation to live domain deployment in 7 business days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                      {step.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 text-teal-400 text-[10px] font-bold border border-slate-800">
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-teal-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Verified Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
