import React, { useEffect, useRef, useState } from 'react';

export const ScrollVideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      setIsLoaded(true);
      return;
    }

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {});
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);

    // Safety fallback timer for instant preloader hide
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateScrollVideo = () => {
      if (!video.duration || isNaN(video.duration)) return;

      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));

      targetTimeRef.current = scrollFraction * video.duration;
    };

    window.addEventListener('scroll', updateScrollVideo, { passive: true });
    window.addEventListener('wheel', updateScrollVideo, { passive: true });
    window.addEventListener('touchmove', updateScrollVideo, { passive: true });

    // LERP loop for smooth video scrubbing on scroll
    const loop = () => {
      try {
        if (video && video.duration && !isNaN(video.duration) && video.readyState >= 2) {
          const diff = targetTimeRef.current - currentTimeRef.current;
          if (Math.abs(diff) > 0.005) {
            currentTimeRef.current += diff * 0.15;
            const targetTime = Math.max(0, Math.min(video.duration - 0.05, currentTimeRef.current));
            if (isFinite(targetTime) && !isNaN(targetTime)) {
              video.currentTime = targetTime;
            }
          }
        }
      } catch (e) {
        // Ignore video seek exceptions
      }
      animationFrameIdRef.current = requestAnimationFrame(loop);
    };

    animationFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', updateScrollVideo);
      window.removeEventListener('wheel', updateScrollVideo);
      window.removeEventListener('touchmove', updateScrollVideo);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#03131a] transition-opacity duration-700 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative w-24 h-24 flex items-center justify-center mb-4">
          <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-xs uppercase tracking-widest text-teal-400/80 font-medium">Loading Video Experience...</p>
      </div>

      {/* Fixed Full-Screen Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#03131a]">
        <video
          ref={videoRef}
          src="/background.mp4"
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          className="w-full h-full object-cover opacity-90 filter brightness-105 contrast-105"
        />
        {/* Deep Sea-Blue Ambient Gradient & Radial Teal Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03131a]/60 via-[#03131a]/30 to-[#03131a]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-[#03131a]/60 pointer-events-none" />
      </div>
    </>
  );
};
