import React, { useEffect, useRef } from 'react';

export const ScrollVideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleScroll = () => {
      if (!video.duration) return;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
      
      video.currentTime = scrollFraction * video.duration;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <video
      ref={videoRef}
      src="/background.mp4"
      muted
      playsInline
      preload="auto"
      className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-40 brightness-75 contrast-125"
    />
  );
};
