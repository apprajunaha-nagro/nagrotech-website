import React from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Zap, CheckCircle2, Globe, ShieldCheck } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-slate-800 p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header info */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">
            {project.industry} Case Study
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Client: {project.clientName}</p>
        </div>

        {/* Image Preview */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Speed Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div>
            <div className="text-[10px] text-slate-400">Previous Speed</div>
            <div className="text-sm font-bold text-red-400">{project.metrics.speedBefore}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400">Nagrotech Speed</div>
            <div className="text-sm font-black text-teal-400">{project.metrics.speedAfter}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400">Traffic Gain</div>
            <div className="text-sm font-bold text-cyan-400">{project.metrics.trafficIncrease}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400">Conversion Boost</div>
            <div className="text-sm font-bold text-teal-300">{project.metrics.conversionBoost}</div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 className="font-bold text-white mb-1">The Technical Challenge</h4>
            <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
          </div>

          <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30">
            <h4 className="font-bold text-white mb-1 flex items-center gap-1.5 text-teal-400">
              <Zap className="w-4 h-4" />
              <span>Nagrotech Solution</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-teal-300 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-800">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
          >
            <Globe className="w-4 h-4" />
            <span>Visit Live Website ({project.liveUrl})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
