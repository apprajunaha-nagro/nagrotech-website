import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { ActivePage } from '../types';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Code2,
  Layers,
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  activePage,
  onPageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; pageId: ActivePage; href: string }[] = [
    { name: 'Home', pageId: 'home', href: '#hero' },
    { name: 'Speed Audit', pageId: 'audit-tool', href: '#audit-tool' },
    { name: 'Services', pageId: 'services', href: '#services' },
    { name: 'Why Us', pageId: 'why-us', href: '#why-us' },
    { name: 'Compare Us', pageId: 'compare-us', href: '#compare-us' },
    { name: 'Process', pageId: 'process', href: '#process' },
    { name: 'Work', pageId: 'work', href: '#work' },
    { name: 'About', pageId: 'about', href: '#about' },
    { name: 'Contact', pageId: 'contact', href: '#contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    pageId: ActivePage,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href && href.startsWith('#')) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#03131a]/95 backdrop-blur-md border-b border-teal-500/20 py-3 shadow-2xl shadow-black/50'
          : 'bg-[#03131a]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'home', '#hero')}
            className="group flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-300 via-emerald-400 to-cyan-500 p-[1px] shadow-lg shadow-teal-500/20 group-hover:shadow-teal-400/40 transition-all duration-300">
              <div className="w-full h-full bg-[#03131a] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-teal-300 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold font-heading tracking-tight text-white flex items-center gap-1">
                {AGENCY_INFO.name}
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-teal-300/80 block font-semibold">
                Dhanbad • India
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-0.5 bg-[#06202c]/90 border border-teal-500/20 rounded-full px-3 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activePage === link.pageId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.pageId, link.href)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-teal-400 text-black shadow-md shadow-teal-400/20'
                      : 'text-teal-100/80 hover:text-teal-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <button
              onClick={() => {
                onPageChange('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              title="View All Sections on One Page"
              className={`text-xs font-semibold px-2.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                activePage === 'all'
                  ? 'bg-emerald-400 text-black font-extrabold'
                  : 'text-teal-300/70 hover:text-teal-300'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Full Page</span>
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(AGENCY_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-200"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-black rounded-full bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-400 hover:from-teal-200 hover:to-cyan-300 shadow-md shadow-teal-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black animate-spin" style={{ animationDuration: '6s' }} />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-black bg-teal-400 rounded-full cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg bg-[#082836] border border-teal-500/20 cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#03131a]/98 border-b border-teal-500/20 backdrop-blur-xl px-6 py-6 shadow-2xl transition-all max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.pageId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.pageId, link.href)}
                  className={`flex items-center justify-between text-sm font-medium py-2.5 px-3 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-teal-400 text-black border-teal-300 font-bold'
                      : 'text-teal-100/90 border-white/5 hover:border-teal-500/30'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-teal-500" />
                </a>
              );
            })}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPageChange('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-between text-sm font-bold py-2.5 px-3 rounded-xl border border-teal-400/40 bg-teal-500/10 text-teal-300"
            >
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                View Full Continuous Landing
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-black bg-teal-400 hover:bg-teal-300 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Instant Cost Estimator</span>
              </button>

              <a
                href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(AGENCY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+91 7979783404)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

