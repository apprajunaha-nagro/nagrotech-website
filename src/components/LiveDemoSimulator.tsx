import React, { useState } from 'react';
import { Smartphone, Monitor, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react';

export const LiveDemoSimulator: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedDemo, setSelectedDemo] = useState<string>('addiction');

  const demos = [
    {
      id: 'addiction',
      name: 'Addiction Gym',
      url: 'https://darkslateblue-toad-871981.hostingersite.com/',
      speed: '0.6s'
    },
    {
      id: 'ca',
      name: 'CA Tax Audit Firm',
      url: 'https://ca-dhanbad.vercel.app/',
      speed: '0.7s'
    },
    {
      id: 'coaching',
      name: 'IIT Coaching',
      url: 'https://coaching-iit.vercel.app/',
      speed: '0.6s'
    },
    {
      id: 'emical',
      name: 'EMI Calculator',
      url: 'https://emical.online/',
      speed: '0.4s'
    }
  ];

  const current = demos.find((d) => d.id === selectedDemo) || demos[0];

  return (
    <section className="py-20 relative bg-slate-950/70 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Interactive Live Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Preview Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Client Projects</span>
          </h2>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 glass-card p-4 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {demos.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDemo(d.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedDemo === d.id
                    ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800'
                }`}
              >
                {d.name} ({d.speed})
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1 font-bold ${
                device === 'desktop'
                  ? 'bg-teal-500/20 border-teal-500 text-teal-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">Desktop</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1 font-bold ${
                device === 'mobile'
                  ? 'bg-teal-500/20 border-teal-500 text-teal-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Mobile</span>
            </button>

            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 text-xs flex items-center gap-1 font-semibold"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Viewport Frame */}
        <div className="flex justify-center">
          <div
            className={`transition-all duration-500 glass-card rounded-2xl overflow-hidden border border-slate-800 shadow-2xl ${
              device === 'mobile' ? 'w-[360px] h-[640px]' : 'w-full h-[580px]'
            }`}
          >
            <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800 text-xs text-slate-400">
              <span className="truncate">{current.url}</span>
              <span className="text-teal-400 font-bold">Speed: {current.speed}</span>
            </div>
            <iframe
              src={current.url}
              title={current.name}
              className="w-full h-full border-none bg-slate-950"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
