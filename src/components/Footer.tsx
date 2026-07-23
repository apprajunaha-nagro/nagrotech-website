import React from 'react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';
import { ActivePage } from '../types';
import {
  Code2,
  ArrowUp,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Globe,
} from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, pageId: ActivePage) => {
    if (onPageChange) {
      e.preventDefault();
      onPageChange(pageId);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#020e13]/60 backdrop-blur-md text-white border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" onClick={(e) => handleLinkClick(e, 'home')} className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-400/20 border border-teal-400 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-teal-300" />
              </div>
              <span className="text-2xl font-extrabold font-heading text-white">
                {AGENCY_INFO.name}
              </span>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Nagrotech is a modern, founder-led web design and digital services agency in Dhanbad, Jharkhand. We craft ultra-fast websites, e-commerce platforms, and Google Map SEO rankings for ambitious businesses.
            </p>

            <div className="pt-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-2">Connect With Us</span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-pink-400 hover:bg-pink-500/20 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-sky-400 hover:bg-sky-500/20 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#hero" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="#audit-tool" onClick={(e) => handleLinkClick(e, 'audit-tool')} className="hover:text-teal-300 transition-colors">Speed & ROI Audit</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-teal-300 transition-colors">Services</a></li>
              <li><a href="#why-us" onClick={(e) => handleLinkClick(e, 'why-us')} className="hover:text-teal-300 transition-colors">Why Choose Us</a></li>
              <li><a href="#compare-us" onClick={(e) => handleLinkClick(e, 'compare-us')} className="hover:text-teal-300 transition-colors">Compare Us Matrix</a></li>
              <li><a href="#process" onClick={(e) => handleLinkClick(e, 'process')} className="hover:text-teal-300 transition-colors">Our Process</a></li>
              <li><a href="#work" onClick={(e) => handleLinkClick(e, 'work')} className="hover:text-teal-300 transition-colors">Portfolio & Showcase</a></li>
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')} className="hover:text-teal-300 transition-colors">Price & Plans</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-teal-300 transition-colors">About Founder</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-teal-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">Core Services</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-teal-300 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Regional Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">Dhanbad Head Office</h4>
            <div className="space-y-2 text-xs text-teal-100/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-300" />
                <span>Dhanbad, Jharkhand, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-300" />
                <span>+91 7979783404</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-300" />
                <span>app.rajunaha@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Serving Dhanbad, Bokaro, Ranchi & Pan-India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 <strong className="text-gray-300 font-semibold">{AGENCY_INFO.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Designed & Developed by <strong className="text-teal-300 font-semibold">Nagrotech</strong></span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-teal-400 hover:text-black border border-white/10 text-gray-300 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
