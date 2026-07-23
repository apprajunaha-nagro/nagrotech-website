import React from 'react';
import { FOUNDER_INFO } from '../data/agencyData';
import { ActivePage } from '../types';
import { Zap, Phone, Mail, MapPin, ArrowUp, Code2 } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800/80 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-teal-500/20">
                N
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                NAGRO<span className="text-teal-400">TECH</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premier web development & digital growth agency based in Dhanbad, Jharkhand. Building sub-second React applications, local SEO dominance, and high-converting web portals for ambitious companies.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 font-medium">
                <Zap className="w-3.5 h-3.5 text-teal-400" />
                Sub-Second Speed Standard
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onPageChange('home')} className="hover:text-teal-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('services')} className="hover:text-teal-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('work')} className="hover:text-teal-400 transition-colors">
                  Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('pricing')} className="hover:text-teal-400 transition-colors">
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('about')} className="hover:text-teal-400 transition-colors">
                  About Founder
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive Tools */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Web Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onPageChange('audit-tool')} className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <span>Speed & ROI Calculator</span>
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('compare-us')} className="hover:text-teal-400 transition-colors">
                  Agency Comparison Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('process')} className="hover:text-teal-400 transition-colors">
                  4-Step Development Process
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('contact')} className="hover:text-teal-400 transition-colors">
                  Instant WhatsApp Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Head Office</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Dhanbad, Jharkhand 826001, India</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${FOUNDER_INFO.phone}`} className="hover:text-white transition-colors">
                  {FOUNDER_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:text-white transition-colors">
                  {FOUNDER_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Nagrotech Digital Services. Engineered with React 19 & Tailwind CSS v4.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onPageChange('all')}
              className="hover:text-teal-400 transition-colors text-slate-400 flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5 text-teal-400" />
              <span>View All Sections Continuous</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 transition-all"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
