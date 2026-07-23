import React, { useState } from 'react';
import { FOUNDER_INFO } from '../data/agencyData';
import { Send, Phone, Mail, MapPin, MessageSquare, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = 'Website Design & Development' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Construct WhatsApp Redirect
    const messageText = `Hello Raju Naha,\n\nNew Lead Inquiry from Nagrotech Website:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequested Service: ${formData.service}\nDetails: ${formData.message}`;
    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${FOUNDER_INFO.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Start Your Project Today</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Exceptional</span>
              </h2>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Have a project in mind or want to optimize your existing website? Contact Founder & Lead Architect <span className="text-teal-400 font-semibold">{FOUNDER_INFO.name}</span> directly.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/${FOUNDER_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-teal-500/30 flex items-center gap-4 hover:border-teal-500/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct WhatsApp Chat</div>
                  <div className="text-base font-extrabold text-white">{FOUNDER_INFO.phone}</div>
                </div>
              </a>

              <a
                href={`tel:${FOUNDER_INFO.phone}`}
                className="p-4 rounded-2xl glass-card border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Call</div>
                  <div className="text-base font-extrabold text-white">{FOUNDER_INFO.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${FOUNDER_INFO.email}`}
                className="p-4 rounded-2xl glass-card border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Inquiry</div>
                  <div className="text-base font-extrabold text-white">{FOUNDER_INFO.email}</div>
                </div>
              </a>

              <div className="p-4 rounded-2xl glass-card border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Headquarters</div>
                  <div className="text-base font-extrabold text-white">{FOUNDER_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Sent Successfully!</h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm">
                  Thank you! We have opened WhatsApp to connect you directly with Raju Naha. You will receive a response within 1 hour.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-teal-400 font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Request Fast Project Proposal</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Amit Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Primary Requirement</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:outline-none focus:border-teal-500 text-sm"
                  >
                    <option value="Website Design & Development">Website Design & React Development</option>
                    <option value="Google Maps Local SEO">Google Maps Local SEO & Business Ranking</option>
                    <option value="Speed Optimization Audit">Website Speed & Core Web Vitals Fix</option>
                    <option value="Custom E-Commerce / App">Custom Web App / Portal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Details / Goals</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your business, timeline, or current website URL..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-teal-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
