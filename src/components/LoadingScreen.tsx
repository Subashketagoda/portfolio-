"use client";

import { useEffect, useState, useCallback } from "react";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleFinish = useCallback(() => {
    setProgress(100);
    setIsRevealing(true);

    // Unlock body scroll smoothly
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    // Unmount after curtain slides up
    setTimeout(() => {
      setIsFinished(true);
      onComplete?.();
    }, 750);
  }, [onComplete]);

  useEffect(() => {
    // If mobile device or touch viewport (<768px or touch <1024px), bypass preloader entirely so mobile loads instantly with zero freeze
    if (
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || ("ontouchstart" in window && window.innerWidth < 1024))
    ) {
      setIsFinished(true);
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
      onComplete?.();
      return;
    }

    setMounted(true);

    // Prevent body scrolling ONLY on desktop while loading screen is active
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }

    // Keyboard shortcut to skip intro
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Exactly 3.0s (3000ms) luxury smooth easing counter
    const startTime = Date.now();
    const duration = 3000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // High-end editorial cubic-bezier easing: slow start, swift glide, gentle settling
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const current = Math.min(Math.round(eased * 100), 100);

      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(interval);
        handleFinish();
      }
    }, 20);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      if (typeof document !== "undefined") {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };
  }, [handleFinish, onComplete]);

  if (!mounted || isFinished) {
    return null;
  }

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-[120] hidden md:flex flex-col justify-between p-6 sm:p-12 md:p-16 bg-[#07070a] text-white select-none overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isRevealing ? "-translate-y-full pointer-events-none" : "translate-y-0 pointer-events-auto"
      }`}
    >
      {/* Subtle Warm Amber Atmosphere Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent blur-[110px] pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: 0.4 + (progress / 100) * 0.6,
        }}
      />

      {/* TOP EDITORIAL ROW */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-gray-400">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
          <span className="text-white font-semibold tracking-[0.3em]">SUBHASH KETAGODA</span>
        </div>
        <div className="hidden sm:block text-gray-400 tracking-[0.25em]">
          CREATIVE TECHNOLOGIST &mdash; &apos;24
        </div>
      </div>

      {/* CENTERPIECE: Signature Unveiling & Soft Golden Light */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-6 sm:space-y-8">
        {/* Signature Container with Liquid Gold Reveal Effect */}
        <div className="relative w-64 sm:w-84 md:w-96 h-28 sm:h-36 md:h-44 flex items-center justify-center">
          {/* Ambient Signature Backlight Pulse */}
          <div
            className="absolute inset-0 rounded-full bg-orange-500/20 blur-[50px] sm:blur-[70px] pointer-events-none transition-all duration-300"
            style={{
              transform: `scale(${0.8 + (progress / 100) * 0.4})`,
              opacity: 0.2 + (progress / 100) * 0.8,
            }}
          />

          {/* Authentic Signature Graphic */}
          <img
            src="/images/subhash-signature.png"
            alt="Subhash Ketagoda Signature"
            className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_4px_24px_rgba(255,138,0,0.55)] transition-all duration-200 select-none"
            style={{
              opacity: 0.15 + (progress / 100) * 0.85,
              transform: `scale(${0.94 + (progress / 100) * 0.06})`,
              filter: `drop-shadow(0 0 ${12 + (progress / 100) * 16}px rgba(255, 138, 0, ${
                0.3 + (progress / 100) * 0.5
              }))`,
            }}
          />
        </div>

        {/* Minimal Editorial Title */}
        <div className="text-center space-y-1">
          <div className="font-mono text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gray-400 font-medium">
            WEB DESIGNER &amp; FULL-STACK DEVELOPER
          </div>
        </div>

        {/* Sleek Minimalist Percentage Display */}
        <div className="flex items-baseline gap-2 pt-2">
          <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tighter">
            {String(progress).padStart(2, "0")}
          </span>
          <span className="font-mono text-base sm:text-xl font-medium text-orange-400">
            %
          </span>
        </div>
      </div>

      {/* BOTTOM AREA: Hairline Progress Line & Editorial Meta */}
      <div className="relative z-10 space-y-4 pt-4">
        {/* Full-width Razor-Thin Hairline Progress Bar */}
        <div className="w-full h-[1.5px] bg-white/[0.08] relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 transition-all duration-75 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Glowing laser head on the edge */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[3px] bg-white shadow-[0_0_10px_#ff8a00]" />
          </div>
        </div>

        {/* Footer info: Coordinates / Skip prompt */}
        <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="tracking-wider">EXPERIENCE LOADING</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFinish();
            }}
            className="text-gray-400 hover:text-white transition-colors tracking-widest uppercase cursor-pointer"
          >
            [ SKIP INTRO &rarr; ]
          </button>
        </div>
      </div>
    </div>
  );
}
