import React from 'react';
import { FOUNDER_INFO } from '../data/agencyData';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${FOUNDER_INFO.whatsappNumber}?text=Hello%20Raju,%20I%20want%20to%20discuss%20a%20website%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
      title="Direct WhatsApp Chat with Raju Naha"
    >
      <MessageSquare className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-extrabold ml-0 group-hover:ml-2">
        Chat with Founder
      </span>
    </a>
  );
};
