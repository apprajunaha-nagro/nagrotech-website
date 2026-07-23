import React from 'react';

export const BackgroundParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"></div>
    </div>
  );
};
