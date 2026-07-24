import React from 'react';
import { FOUNDER_INFO } from '../data/agencyData';
import { MapPin, Phone, Mail, Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const founderSkills = [
  'React 19 & TypeScript', 'Vite & Next.js', 'Tailwind CSS & UI Systems',
  'Core Web Vitals Optimization', 'Local SEO & Google Maps', 'Node.js & REST APIs',
  'Vercel & Cloud Deployment', 'Razorpay & UPI Integration'
];

const founderBio = `Raju Naha is the founder and lead engineer of Nagrotech Digital Services based in Dhanbad, Jharkhand. With hands-on expertise in modern React architecture, local SEO strategy, and e-commerce integration, Raju personally oversees every client project from discovery to launch. His philosophy: no bloat, no middlemen — just premium web engineering that drives real business results.`;

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Founder & Engineering Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Meet the Architect Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Nagrotech</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Direct founder accountability, zero middlemen, and world-class software engineering tailored for businesses in Dhanbad & pan-India.
          </p>
        </div>

        {/* Founder Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-card p-6 sm:p-10 rounded-3xl border border-slate-800">
          
          {/* Left Column: Avatar & Quick Info */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img
                src={FOUNDER_INFO.founderImage}
                alt={FOUNDER_INFO.founder}
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover border-2 border-teal-500/40 shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
              {FOUNDER_INFO.founder}
            </h3>
            <p className="text-teal-400 font-medium text-sm sm:text-base mt-1">
              {FOUNDER_INFO.role}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{FOUNDER_INFO.location}</span>
            </div>

            {/* Direct Contact Links */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 w-full">
              <a
                href={`https://wa.me/${FOUNDER_INFO.whatsappNumber}?text=Hello%20Raju,%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-teal-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${FOUNDER_INFO.email}`}
                className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email Direct</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <span>Engineering Philosophy</span>
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {founderBio}
              </p>
            </div>

            {/* Core Tech Skills */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Engineering Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {founderSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/40 to-slate-900 border border-teal-500/30 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-white">Direct Founder Supervision Guarantee</h5>
                <p className="text-xs text-slate-300 mt-0.5">
                  Every project at Nagrotech is architected, code-reviewed, and deployed directly by Raju Naha. No junior outsourcing, no delayed communication.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
