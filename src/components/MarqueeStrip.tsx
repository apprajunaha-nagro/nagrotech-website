import React from 'react';
import { FOUNDER_INFO } from '../data/agencyData';

export const MarqueeStrip: React.FC = () => {
  const items = [
    "Sub-Second React 19 Engine",
    "Google Maps Local SEO Dominance",
    "100/100 Core Web Vitals",
    "Founder Supervised Architecture",
    "Fast 7-Day Launch",
    "Dhanbad & Pan-India Tech Partner"
  ];

  return (
    <div className="py-4 bg-teal-500/10 border-y border-teal-500/20 overflow-hidden relative z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-6 text-xs sm:text-sm font-extrabold text-teal-300 tracking-wider uppercase">
            <span>•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
