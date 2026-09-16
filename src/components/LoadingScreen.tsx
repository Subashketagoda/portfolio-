"use client";

import { useEffect, useState, useCallback } from "react";

const phases = [
  { threshold: 0, text: "INITIALIZING DIGITAL ARCHITECTURE" },
  { threshold: 24, text: "LOADING BESPOKE UI/UX DESIGN SYSTEM" },
  { threshold: 48, text: "SYNCHRONIZING NEXT.JS FULL-STACK ENGINES" },
  { threshold: 72, text: "CALIBRATING 60FPS MOTION CHOREOGRAPHY" },
  { threshold: 92, text: "FINALIZING LIGHTHOUSE 100 OPTIMIZATION" },
  { threshold: 100, text: "WELCOME • SUBHASH KETAGODA" },
];

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(phases[0].text);

  const handleFinish = useCallback(() => {
    setProgress(100);
    setIsFading(true);

    // Unlock body scroll immediately so the page can be smoothly scrolled
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      try {
        sessionStorage.setItem("subhash_portfolio_intro", "seen");
      } catch {
        // ignore
      }
    }

    // Clean unmount after smooth 400ms fade
    setTimeout(() => {
      setIsFinished(true);
      onComplete?.();
    }, 450);
  }, [onComplete]);

  useEffect(() => {
    setMounted(true);

    // Check if user already viewed intro in this browser session
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem("subhash_portfolio_intro") === "seen") {
        setIsFinished(true);
        onComplete?.();
        return;
      }
    } catch {
      // ignore
    }

    // Lock body scroll while preloader is active so user cannot scroll underneath
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

    // Dynamic duration: 2.2s silky smooth on mobile and desktop
    const startTime = Date.now();
    const duration = 2200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Smooth cubic easeOut curve: 1 - (1-t)^3
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.min(Math.round(eased * 100), 100);

      setProgress(current);

      for (let i = phases.length - 1; i >= 0; i--) {
        if (current >= phases[i].threshold) {
          setCurrentPhase(phases[i].text);
          break;
        }
      }

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

  // Clean unmount when completed or before mount
  if (!mounted || isFinished) {
    return null;
  }

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-[120] flex flex-col justify-between p-5 sm:p-10 md:p-14 bg-[#06070a] select-none overflow-hidden cursor-pointer transition-opacity duration-500 ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient Glowing Nebulae */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] rounded-full bg-gradient-to-tr from-orange-500/20 via-amber-500/10 to-transparent blur-[80px] sm:blur-[160px] pointer-events-none" />

      {/* TOP HUD ROW */}
      <div className="relative z-10 flex items-start justify-between text-xs font-mono">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-white font-bold tracking-wider text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span>SUBHASH KETAGODA</span>
          </div>
          <div className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest uppercase">
            WEB DESIGNER &amp; CREATIVE TECHNOLOGIST
          </div>
        </div>

        <div className="text-right space-y-0.5 hidden sm:block">
          <div className="text-gray-300 font-semibold tracking-wider text-xs">
            COLOMBO, SRI LANKA
          </div>
          <div className="text-[10px] text-orange-400/80 tracking-widest">
            6.9271° N, 79.8612° E
          </div>
        </div>
      </div>

      {/* CENTERPIECE: Gyroscope, Signature, Luxury Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-6 sm:space-y-8">
        {/* Orbital Gyroscope */}
        <div className="relative w-44 h-44 sm:w-60 sm:h-60 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/25 animate-spin-slow" />
          <div
            className="absolute inset-3 sm:inset-4 rounded-full border border-white/[0.08]"
            style={{ animation: "spin 18s linear infinite reverse" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />
          </div>

          {/* Circular Progress Track */}
          <svg className="absolute inset-5 sm:inset-6 w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)] h-[calc(100%-2.5rem)] sm:h-[calc(100%-3rem)] -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-white/[0.06]"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-orange-500 transition-all duration-75 ease-out"
              strokeWidth="3"
              strokeDasharray={276}
              strokeDashoffset={276 - (276 * progress) / 100}
              strokeLinecap="round"
              fill="transparent"
              filter="drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))"
            />
          </svg>

          {/* Signature Badge */}
          <div className="relative z-10 w-28 sm:w-40 h-16 sm:h-20 flex items-center justify-center p-2">
            <img
              src="/images/subhash-signature.png"
              alt="Subhash Ketagoda"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_14px_rgba(249,115,22,0.5)] select-none"
              style={{
                opacity: 0.25 + (progress / 100) * 0.75,
              }}
            />
          </div>
        </div>

        {/* Digital Percentage Counter */}
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400 tracking-tighter">
            {String(progress).padStart(2, "0")}
          </span>
          <span className="font-mono text-lg sm:text-2xl font-bold text-orange-500">
            %
          </span>
        </div>

        {/* Dynamic Status Phase Pill */}
        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#12141d]/90 border border-white/10 shadow-lg backdrop-blur-md max-w-[90vw]">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shrink-0" />
          <span className="font-mono text-[9px] sm:text-xs tracking-[0.18em] text-gray-300 uppercase font-medium truncate text-center">
            {currentPhase}
          </span>
        </div>

        {/* Laser Progress Bar */}
        <div className="w-52 sm:w-72 md:w-80 h-1 rounded-full bg-white/10 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-400 rounded-full transition-all duration-75 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#f97316]" />
          </div>
        </div>
      </div>

      {/* BOTTOM HUD ROW */}
      <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400 pt-2">
        <div className="space-y-0.5">
          <div className="text-gray-300 font-semibold tracking-wider">
            CORE_ENGINE: ACTIVE
          </div>
          <div className="text-[9px] sm:text-[10px] text-gray-400 hidden xs:block">
            FRAMEWORK: NEXT.JS 14
          </div>
        </div>

        {/* Tap/Click to skip or enter */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFinish();
          }}
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-orange-500/40 bg-orange-500/10 hover:border-orange-500/70 hover:bg-orange-500/20 active:scale-95 text-[10px] sm:text-xs text-orange-300 hover:text-white transition-all tracking-wider font-mono cursor-pointer"
        >
          [ TAP TO ENTER ]
        </button>
      </div>
    </div>
  );
}
