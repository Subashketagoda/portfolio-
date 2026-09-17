"use client";

import { useEffect, useState, useCallback, useRef } from "react";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const hasFinishedRef = useRef(false);

  const unlockScroll = useCallback(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, []);

  const handleFinish = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    setProgress(100);
    setIsRevealing(true);
    unlockScroll();

    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("subhash_intro_seen", "1");
      } catch {
        // ignore
      }
      window.scrollTo(0, 0);
    }

    // Unmount after curtain slides up
    setTimeout(() => {
      setIsFinished(true);
      unlockScroll();
      onComplete?.();
    }, 450);
  }, [unlockScroll, onComplete]);

  useEffect(() => {
    setMounted(true);

    // Prevent body scrolling while loading screen is active
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

    // Touch swipe-up to skip intro on mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        handleFinish();
      }
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Smooth swift 1.2s counter (1200ms) - snappy & responsive on both mobile and PC
    const startTime = Date.now();
    const duration = 1200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // High-end editorial cubic-bezier easing: swift glide, gentle settling
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const current = Math.min(Math.round(eased * 100), 100);

      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(interval);
        handleFinish();
      }
    }, 20);

    // Hard fallback: unconditionally unlock and finish within 1.8s under all circumstances
    const safetyTimeout = setTimeout(() => {
      clearInterval(interval);
      handleFinish();
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      unlockScroll();
    };
  }, [handleFinish, unlockScroll]);

  if (!mounted || isFinished) {
    return null;
  }

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-[120] flex flex-col justify-between p-5 sm:p-10 md:p-16 bg-[#07070a] text-white select-none overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isRevealing ? "-translate-y-full pointer-events-none" : "translate-y-0 pointer-events-auto"
      }`}
    >
      {/* Subtle Warm Amber Atmosphere Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] md:w-[540px] h-[280px] sm:h-[450px] md:h-[540px] rounded-full bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent blur-[70px] sm:blur-[110px] pointer-events-none transition-opacity duration-700"
        style={{
          opacity: 0.4 + (progress / 100) * 0.6,
        }}
      />

      {/* TOP EDITORIAL ROW */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] sm:text-xs tracking-wider sm:tracking-[0.25em] uppercase text-gray-400">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
          <span className="text-white font-semibold tracking-wider sm:tracking-[0.3em]">SUBHASH KETAGODA</span>
        </div>
        <div className="hidden sm:block text-gray-400 tracking-[0.25em]">
          CREATIVE TECHNOLOGIST &mdash; &apos;24
        </div>
      </div>

      {/* CENTERPIECE: Signature Unveiling & Soft Golden Light */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-4 sm:space-y-6 md:space-y-8">
        {/* Signature Container with Liquid Gold Reveal Effect */}
        <div className="relative w-48 sm:w-72 md:w-96 h-16 sm:h-32 md:h-44 flex items-center justify-center">
          {/* Ambient Signature Backlight Pulse */}
          <div
            className="absolute inset-0 rounded-full bg-orange-500/20 blur-[40px] sm:blur-[70px] pointer-events-none transition-all duration-300"
            style={{
              transform: `scale(${0.8 + (progress / 100) * 0.4})`,
              opacity: 0.2 + (progress / 100) * 0.8,
            }}
          />

          {/* Authentic Signature Graphic */}
          <img
            src="/images/subhash-signature.png"
            alt="Subhash Ketagoda Signature"
            className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_4px_20px_rgba(255,138,0,0.55)] transition-all duration-200 select-none"
            style={{
              opacity: 0.2 + (progress / 100) * 0.8,
              transform: `scale(${0.95 + (progress / 100) * 0.05})`,
              filter: `drop-shadow(0 0 ${8 + (progress / 100) * 14}px rgba(255, 138, 0, ${
                0.3 + (progress / 100) * 0.5
              }))`,
            }}
          />
        </div>

        {/* Minimal Editorial Title */}
        <div className="text-center space-y-1 px-2">
          <div className="font-mono text-[9px] sm:text-xs tracking-wider sm:tracking-[0.35em] uppercase text-gray-400 font-medium">
            WEB DESIGNER &amp; FULL-STACK DEVELOPER
          </div>
        </div>

        {/* Sleek Minimalist Percentage Display */}
        <div className="flex items-baseline gap-1.5 sm:gap-2 pt-1 sm:pt-2">
          <span className="font-mono text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tighter">
            {String(progress).padStart(2, "0")}
          </span>
          <span className="font-mono text-sm sm:text-xl font-medium text-orange-400">
            %
          </span>
        </div>
      </div>

      {/* BOTTOM AREA: Hairline Progress Line & Editorial Meta */}
      <div className="relative z-10 space-y-3 sm:space-y-4 pt-2 sm:pt-4">
        {/* Full-width Razor-Thin Hairline Progress Bar */}
        <div className="w-full h-[1.5px] bg-white/[0.08] relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 transition-all duration-75 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Glowing laser head on the edge */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 sm:w-4 h-[3px] bg-white shadow-[0_0_10px_#ff8a00]" />
          </div>
        </div>

        {/* Footer info: Coordinates / Skip prompt */}
        <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-gray-400">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="tracking-wider">EXPERIENCE LOADING</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFinish();
            }}
            className="text-gray-400 hover:text-white transition-colors tracking-widest uppercase cursor-pointer py-1 px-2"
          >
            [ SKIP INTRO &rarr; ]
          </button>
        </div>
      </div>
    </div>
  );
}
