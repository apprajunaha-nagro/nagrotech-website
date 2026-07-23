import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/agencyData';
import { ProjectItem } from '../types';
import { ExternalLink, Zap, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface PortfolioProps {
  onOpenProjectDetail: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenProjectDetail }) => {
  const [filter, setFilter] = useState<'all' | 'web-dev' | 'seo-growth' | 'design-cro'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="work" className="py-20 relative bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Proven Client Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Case Studies</span> & Live Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real client transformations delivered in Dhanbad & pan-India. Click any project to inspect technical architecture and live links.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Live Projects' },
            { id: 'web-dev', label: 'React Web Apps' },
            { id: 'seo-growth', label: 'Local SEO & Growth' },
            { id: 'design-cro', label: 'Speed Optimization' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback visual background if local image missing
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Fallback Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-4">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-[10px] font-bold uppercase tracking-wider">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Load Speed</div>
                    <div className="text-sm font-extrabold text-teal-400">{project.metrics.speedAfter}</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Traffic Boost</div>
                    <div className="text-sm font-extrabold text-cyan-400">{project.metrics.trafficIncrease}</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenProjectDetail(project)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-teal-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Case Study</span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 transition-colors"
                    title="Open Live Website"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
