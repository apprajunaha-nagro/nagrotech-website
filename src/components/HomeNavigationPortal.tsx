import React from 'react';
import { ActivePage } from '../types';
import {
  Gauge,
  Briefcase,
  ShieldCheck,
  BarChart2,
  Workflow,
  FolderGit2,
  Tag,
  UserCheck,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface HomeNavigationPortalProps {
  onPageChange: (page: ActivePage) => void;
}

export const HomeNavigationPortal: React.FC<HomeNavigationPortalProps> = ({
  onPageChange,
}) => {
  const pages = [
    {
      id: 'audit-tool' as ActivePage,
      title: 'Speed & ROI Audit Tool',
      tagline: 'Analyze your live website performance & potential revenue growth.',
      icon: Gauge,
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300',
      badge: 'Interactive Tool',
    },
    {
      id: 'services' as ActivePage,
      title: 'Core Services & Tech Stack',
      tagline: 'Website design, custom development, Google Maps SEO & speed optimization.',
      icon: Briefcase,
      color: 'from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-300',
      badge: 'Full Suite',
    },
    {
      id: 'why-us' as ActivePage,
      title: 'Why Choose Nagrotech',
      tagline: 'Sub-second speed, zero bloat, founder-led engineering & local Dhanbad focus.',
      icon: ShieldCheck,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300',
      badge: 'Our Differentiator',
    },
    {
      id: 'compare-us' as ActivePage,
      title: 'Competitor Comparison',
      tagline: 'Side-by-side matrix vs. traditional agencies, freelancers & WordPress builders.',
      icon: BarChart2,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300',
      badge: 'Transparent Matrix',
    },
    {
      id: 'process' as ActivePage,
      title: '4-Step Agency Workflow',
      tagline: 'Discovery, prototype simulator, clean build, and 7-day fast launch guarantee.',
      icon: Workflow,
      color: 'from-sky-500/20 to-indigo-500/10 border-sky-500/30 text-sky-300',
      badge: 'Streamlined',
    },
    {
      id: 'work' as ActivePage,
      title: 'Portfolio & Client Work',
      tagline: 'Explore real business websites, e-commerce stores & performance case studies.',
      icon: FolderGit2,
      color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300',
      badge: 'Proven Results',
    },
    {
      id: 'pricing' as ActivePage,
      title: 'Price & Plans',
      tagline: 'Fixed transparent rates, custom quotes & no hidden maintenance fees.',
      icon: Tag,
      color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30 text-emerald-300',
      badge: 'Best Value',
    },
    {
      id: 'about' as ActivePage,
      title: 'About Founder & Agency',
      tagline: 'Meet Raju Naha, founder vision, Dhanbad office, and client commitment.',
      icon: UserCheck,
      color: 'from-teal-500/20 to-cyan-500/10 border-teal-500/30 text-teal-300',
      badge: 'Founder Spotlight',
    },
    {
      id: 'contact' as ActivePage,
      title: 'Contact & Head Office',
      tagline: 'Direct WhatsApp booking, office address, map location & inquiry form.',
      icon: Mail,
      color: 'from-amber-500/20 to-teal-500/10 border-teal-500/30 text-teal-300',
      badge: 'Fast Support',
    },
  ];

  return (
    <section className="py-16 bg-[#03131a]/40 backdrop-blur-sm relative border-t border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>App Navigation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Explore Nagrotech Sections
          </h2>
          <p className="text-sm text-gray-300">
            Click any section below to navigate directly to its standalone, feature-rich view.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => {
                  onPageChange(p.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${p.color} border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/30 text-white/90 border border-white/10">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    {p.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold text-teal-300 group-hover:text-white">
                  <span>Open Page</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
