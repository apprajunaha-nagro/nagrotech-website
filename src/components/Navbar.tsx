import React, { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { Menu, X, Phone, MessageSquare, Calculator, Zap, ChevronRight } from 'lucide-react';
import { FOUNDER_INFO } from '../data/agencyData';

interface NavbarProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onPageChange,
  onOpenQuoteModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'compare-us', label: 'Compare Us' },
    { id: 'process', label: 'Process' },
    { id: 'work', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About Founder' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                NAGRO<span className="text-teal-400">TECH</span>
              </div>
              <div className="text-[10px] text-teal-300 font-semibold tracking-wider uppercase">
                Digital Services • Dhanbad
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activePage === item.id
                    ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-extrabold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 hover:bg-teal-500/20 text-teal-300 font-bold text-xs flex items-center gap-2 transition-all"
            >
              <Calculator className="w-4 h-4 text-teal-400" />
              <span>Get Quote</span>
            </button>

            <a
              href={`https://wa.me/${FOUNDER_INFO.whatsapp}?text=Hello%20Raju,%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-xs flex items-center gap-2 transition-all shadow-md shadow-teal-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400"
              title="Quote Estimator"
            >
              <Calculator className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between ${
                  activePage === item.id
                    ? 'bg-teal-500 text-slate-950'
                    : 'bg-slate-900/80 text-slate-200 border border-slate-800'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenQuoteModal();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-300 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-teal-400" />
              <span>Interactive Price Calculator</span>
            </button>

            <a
              href={`https://wa.me/${FOUNDER_INFO.whatsapp}?text=Hello%20Raju,%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-teal-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Chat (+91 7979783404)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
