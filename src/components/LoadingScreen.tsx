"use client";

import { useEffect, useState, useCallback } from "react";

const phases = [
  { threshold: 0, text: "INITIALIZING DIGITAL ARCHITECTURE" },
  { threshold: 20, text: "LOADING BESPOKE UI/UX DESIGN SYSTEM" },
  { threshold: 42, text: "SYNCHRONIZING FULL-STACK WEB ENGINES" },
  { threshold: 65, text: "CALIBRATING 60FPS MOTION CHOREOGRAPHY" },
  { threshold: 85, text: "FINALIZING LIGHTHOUSE 100 OPTIMIZATION" },
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

    // Unlock body scrolling smoothly
    if (typeof document !== "undefined") {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    // Clean unmount after smooth 500ms fade transition
    setTimeout(() => {
      setIsFinished(true);
      onComplete?.();
    }, 500);
  }, [onComplete]);

  useEffect(() => {
    setMounted(true);

    // Lock body scroll during the entire 3 seconds so the page cannot scroll underneath
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

    // Exactly 3.0 seconds (3000ms) silky smooth loading experience
    const startTime = Date.now();
    const duration = 3000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Cinematic cubic ease-out curve
      const eased = 1 - Math.pow(1 - t, 2.8);
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

  if (!mounted || isFinished) {
    return null;
  }

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-[120] flex flex-col justify-between p-5 sm:p-8 md:p-12 bg-[#050608] text-white select-none overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
        isFading ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"
      }`}
    >
      {/* 1. Cyber Ambient Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.16]"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* 2. Radiant Core Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] h-[340px] sm:h-[580px] rounded-full bg-gradient-to-tr from-orange-500/25 via-amber-500/15 to-transparent blur-[80px] sm:blur-[140px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/4 -right-16 w-80 h-80 rounded-full bg-indigo-600/[0.08] blur-[100px] pointer-events-none" />

      {/* 3. High-Tech Corner Brackets */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 font-mono text-[10px] text-orange-400/40 pointer-events-none select-none">
        ┌ [SYS_CORE: 60FPS]
      </div>
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 font-mono text-[10px] text-orange-400/40 pointer-events-none select-none hidden sm:block">
        [LK • 6.92°N, 79.86°E] ┐
      </div>
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 font-mono text-[10px] text-orange-400/40 pointer-events-none select-none hidden sm:block">
        └ [ENGINE: NEXT.JS 14]
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 font-mono text-[10px] text-orange-400/40 pointer-events-none select-none hidden sm:block">
        [STATUS: 100% OPTIMIZED] ┘
      </div>

      {/* TOP HUD BAR */}
      <div className="relative z-10 flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 shadow-[0_0_10px_#ff8a00]"></span>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] font-mono text-white flex items-center gap-2">
              <span>SUBHASH KETAGODA</span>
              <span className="text-orange-500 text-[10px] px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/30">
                PRO
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] text-gray-400 tracking-widest uppercase font-mono">
              CREATIVE WEB DESIGNER &amp; TECHNOLOGIST
            </div>
          </div>
        </div>

        {/* Live Frequency Wave Bars */}
        <div className="flex items-end gap-1 h-4 sm:h-5">
          {[40, 75, 100, 60, 85, 45, 90, 65, 30].map((h, idx) => (
            <span
              key={idx}
              className="w-1 bg-gradient-to-t from-orange-600 to-amber-400 rounded-full transition-all duration-200"
              style={{
                height: `${Math.max(20, (h * progress) / 100)}%`,
                opacity: 0.4 + (progress / 100) * 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* CENTERPIECE SPECTACLE: Orbital Gyroscope + Holographic Signature + Giant Digital Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-6 sm:space-y-8">
        {/* Luxury Orbital Gyroscope */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
          {/* Outer Dashed Rotating Gear */}
          <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/30 animate-spin-slow" />

          {/* Precision Tick Ring */}
          <div
            className="absolute inset-3 sm:inset-4 rounded-full border border-white/[0.08]"
            style={{ animation: "spin 22s linear infinite reverse" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_12px_#ff8a00]" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#ffad42]" />
          </div>

          {/* SVG Circular Laser Progress Track */}
          <svg className="absolute inset-5 sm:inset-6 w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)] h-[calc(100%-2.5rem)] sm:h-[calc(100%-3rem)] -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-white/[0.05]"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-orange-500 transition-all duration-75 ease-out"
              strokeWidth="3.5"
              strokeDasharray={276}
              strokeDashoffset={276 - (276 * progress) / 100}
              strokeLinecap="round"
              fill="transparent"
              filter="drop-shadow(0 0 10px rgba(255, 138, 0, 0.8))"
            />
          </svg>

          {/* Holographic Glowing Signature Card */}
          <div className="relative z-10 w-32 sm:w-44 h-18 sm:h-22 flex items-center justify-center p-2 rounded-2xl bg-[#0d0f17]/60 border border-orange-500/20 shadow-2xl backdrop-blur-md">
            <img
              src="/images/subhash-signature.png"
              alt="Subhash Ketagoda Signature"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_18px_rgba(255,138,0,0.65)] select-none transition-all duration-300"
              style={{
                opacity: 0.3 + (progress / 100) * 0.7,
                transform: `scale(${0.92 + (progress / 100) * 0.08})`,
              }}
            />
          </div>
        </div>

        {/* Giant Luxury Digital Percentage Counter */}
        <div className="flex flex-col items-center">
          <div className="flex items-baseline gap-1.5 sm:gap-3">
            <span className="font-mono text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400 tracking-tighter drop-shadow-[0_0_30px_rgba(255,138,0,0.3)]">
              {String(progress).padStart(2, "0")}
            </span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-orange-500">
              %
            </span>
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-orange-400/70 uppercase -mt-1 font-semibold">
            SYSTEM CALIBRATION
          </div>
        </div>

        {/* Dynamic Status Phase Pill */}
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#11131e]/90 border border-orange-500/30 shadow-xl shadow-orange-500/10 backdrop-blur-md max-w-[92vw]">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0 shadow-[0_0_8px_#ff8a00]" />
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-gray-200 uppercase font-semibold truncate text-center">
            {currentPhase}
          </span>
        </div>

        {/* Laser Progress Bar with Glowing Head and Scale Markers */}
        <div className="w-60 sm:w-80 md:w-96 space-y-1.5">
          <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden relative p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-400 rounded-full transition-all duration-75 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_14px_#ff8a00]" />
            </div>
          </div>
          {/* Progress scale ticks */}
          <div className="flex justify-between font-mono text-[8px] sm:text-[9px] text-gray-500 tracking-wider">
            <span>00</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span className="text-orange-400 font-bold">100</span>
          </div>
        </div>
      </div>

      {/* BOTTOM HUD ROW: Live OS info & Tap-to-Enter prompt */}
      <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-mono text-gray-400 pt-2 border-t border-white/[0.06]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-300 font-medium tracking-wider">
            PORTFOLIO_OS v3.2
          </span>
          <span className="text-gray-600 hidden sm:inline">•</span>
          <span className="text-gray-500 hidden sm:inline">ALL SYSTEMS GO</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFinish();
          }}
          className="px-3.5 sm:px-5 py-2 rounded-xl border border-orange-500/50 bg-gradient-to-r from-orange-500/15 to-amber-500/10 hover:border-orange-500 hover:bg-orange-500/25 active:scale-95 text-xs text-orange-300 hover:text-white transition-all tracking-wider font-mono font-semibold shadow-lg shadow-orange-500/10 cursor-pointer"
        >
          [ TAP TO ENTER ✦ ]
        </button>
      </div>
    </div>
  );
}
