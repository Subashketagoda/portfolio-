"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const KINETIC_WORDS = [
  { text: "FULL-STACK ARCHITECT", step: "[ 01/05 ]", status: "INITIALIZING DISTRIBUTED RUNTIMES" },
  { text: "SYSTEMS ENGINEER", step: "[ 02/05 ]", status: "SYNCHRONIZING CLOUD & POS ENGINES" },
  { text: "PERFORMANCE OPTIMIZER", step: "[ 03/05 ]", status: "CALIBRATING 120HZ RENDER PIPELINE" },
  { text: "CREATIVE TECHNOLOGIST", step: "[ 04/05 ]", status: "HYDRATING 3D LIQUID GLASS CANVAS" },
  { text: "SUBHASH KETAGODA", step: "[ 05/05 ]", status: "ALL PROTOCOLS ONLINE & VERIFIED" },
];

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
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
    setActiveWordIndex(KINETIC_WORDS.length - 1);
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

    // Unmount after all 5 shutter slats complete sliding off-screen
    // Column 4 has 200ms delay + 450ms duration = 650ms
    setTimeout(() => {
      setIsFinished(true);
      unlockScroll();
      onComplete?.();
    }, 700);
  }, [unlockScroll, onComplete]);

  useEffect(() => {
    // If the visitor already experienced the intro during this browser session, skip immediately
    if (typeof window !== "undefined") {
      try {
        if (sessionStorage.getItem("subhash_intro_seen") === "1") {
          setIsFinished(true);
          unlockScroll();
          onComplete?.();
          return;
        }
      } catch {
        // ignore
      }
    }

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
      if (touchStartY - touchEndY > 40) {
        handleFinish();
      }
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Snappy, high-octane pacing: 1.2s on mobile for instant feel, 1.6s on desktop
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || navigator.maxTouchPoints > 1);
    const duration = isMobile ? 1200 : 1600;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Smooth cubic easing: swift acceleration with sleek settle
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const current = Math.min(Math.round(eased * 100), 100);

      setProgress(current);

      // Determine kinetic word index based on percentage
      if (current < 20) {
        setActiveWordIndex(0);
      } else if (current < 42) {
        setActiveWordIndex(1);
      } else if (current < 65) {
        setActiveWordIndex(2);
      } else if (current < 86) {
        setActiveWordIndex(3);
      } else {
        setActiveWordIndex(4);
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        handleFinish();
      }
    }, 16);

    // Hard fallback: unconditionally unlock and finish within 2.2s under all circumstances
    const safetyTimeout = setTimeout(() => {
      clearInterval(interval);
      handleFinish();
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      unlockScroll();
    };
  }, [handleFinish, unlockScroll]);

  if (isFinished) {
    return null;
  }

  const currentWord = KINETIC_WORDS[activeWordIndex];

  return (
    <div
      onClick={handleFinish}
      className="fixed inset-0 z-[120] pointer-events-auto select-none overflow-hidden cursor-pointer touch-none"
    >
      {/* ========================================================================= */}
      {/* 5-COLUMN VERTICAL SHUTTER SLATS (Awwwards Staggered Wipe)                 */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 flex w-full h-full pointer-events-none">
        {[0, 1, 2, 3, 4].map((index) => {
          // Snappy staggered delay for each column (left-to-right cascade)
          const delays = [
            "delay-[0ms]",
            "delay-[50ms]",
            "delay-[100ms]",
            "delay-[150ms]",
            "delay-[200ms]",
          ];

          return (
            <div
              key={index}
              style={{ willChange: "transform" }}
              className={`relative h-full w-1/5 bg-[#06070a] border-r border-white/[0.04] transition-transform duration-[450ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
                delays[index]
              } ${isRevealing ? "-translate-y-full" : "translate-y-0"}`}
            >
              {/* Subtle vertical laser grid line inside each slat */}
              <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-orange-500/10 to-transparent" />
              
              {/* Discrete column identifier index */}
              <div className="absolute bottom-4 left-3 font-mono text-[8px] tracking-widest text-white/[0.07] uppercase hidden md:block">
                SLAT_0{index + 1} // CH
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* AMBIENT LIGHT & GLOW (Fades gracefully on reveal)                         */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 z-1 pointer-events-none transition-opacity duration-300 ${
          isRevealing ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[680px] h-[300px] sm:h-[500px] md:h-[680px] rounded-full bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent blur-[80px] sm:blur-[130px] transition-all duration-300"
          style={{
            transform: `translate(-50%, -50%) scale(${0.85 + (progress / 100) * 0.3})`,
            opacity: 0.3 + (progress / 100) * 0.7,
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* FOREGROUND HUD & KINETIC CONTENT                                          */}
      {/* ========================================================================= */}
      <div
        className={`relative z-10 flex flex-col justify-between h-full w-full p-5 sm:p-8 md:p-14 text-white transition-all duration-300 ease-out ${
          isRevealing ? "opacity-0 scale-98 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        {/* --- TOP TELEMETRY BAR --- */}
        <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] tracking-wider uppercase text-gray-400">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="text-white font-semibold tracking-[0.25em]">
              SUBHASH KETAGODA
            </span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="hidden sm:inline text-gray-400 tracking-[0.2em]">
              SYS.ID // 2024.V2
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Animated Equalizer Bars */}
            <div className="flex items-end gap-[3px] h-3.5">
              <span className="w-[2px] bg-orange-400/80 rounded-full animate-pulse h-2" />
              <span className="w-[2px] bg-amber-400 rounded-full animate-bounce h-3.5" style={{ animationDelay: "150ms" }} />
              <span className="w-[2px] bg-orange-500 rounded-full animate-pulse h-2.5" style={{ animationDelay: "300ms" }} />
              <span className="w-[2px] bg-amber-500/60 rounded-full animate-bounce h-1.5" style={{ animationDelay: "450ms" }} />
            </div>
            <span className="text-gray-400 tracking-[0.2em] hidden md:inline">
              6.9271° N, 79.8612° E
            </span>
          </div>
        </div>

        {/* --- CENTER: KINETIC TYPOGRAPHY CYCLER & LUXURY COUNTER --- */}
        <div className="my-auto flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 md:space-y-8 px-4">
          
          {/* Kinetic Step Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-mono text-[9px] sm:text-xs tracking-[0.3em] uppercase text-orange-400 font-semibold">
              {currentWord.step}
            </span>
            <span className="text-white/20">/</span>
            <span className="font-mono text-[9px] sm:text-xs tracking-[0.2em] uppercase text-gray-400">
              {currentWord.status}
            </span>
          </div>

          {/* Kinetic Word Viewport */}
          <div className="relative h-16 sm:h-24 md:h-32 flex items-center justify-center overflow-hidden w-full max-w-4xl">
            {KINETIC_WORDS.map((item, idx) => {
              const isActive = idx === activeWordIndex;
              const isPast = idx < activeWordIndex;

              return (
                <div
                  key={item.text}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-100 filter blur-0"
                      : isPast
                      ? "opacity-0 -translate-y-8 scale-95 filter blur-sm pointer-events-none"
                      : "opacity-0 translate-y-8 scale-95 filter blur-sm pointer-events-none"
                  }`}
                >
                  <h1 className="font-sans text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/60 drop-shadow-[0_10px_30px_rgba(255,138,0,0.2)] select-none">
                    {item.text}
                  </h1>
                </div>
              );
            })}
          </div>

          {/* Monogram / Signature Watermark with warm halo */}
          <div className="relative w-40 sm:w-56 md:w-64 h-10 sm:h-14 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full bg-orange-500/25 blur-[35px] pointer-events-none transition-all duration-300"
              style={{
                transform: `scale(${0.9 + (progress / 100) * 0.3})`,
                opacity: 0.3 + (progress / 100) * 0.7,
              }}
            />
            <img
              src="/images/subhash-signature.png"
              alt="Subhash Ketagoda Signature"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_2px_14px_rgba(255,138,0,0.6)] select-none transition-opacity duration-200"
              style={{
                opacity: 0.4 + (progress / 100) * 0.6,
              }}
            />
          </div>

          {/* Luxury Large Telemetry Counter */}
          <div className="flex items-baseline gap-1.5 sm:gap-2.5 pt-2">
            <span className="font-mono text-5xl sm:text-7xl md:text-8xl font-light tracking-tighter text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
              {String(progress).padStart(2, "0")}
            </span>
            <span className="font-mono text-lg sm:text-2xl md:text-3xl font-medium text-orange-400">
              %
            </span>
          </div>
        </div>

        {/* --- BOTTOM TELEMETRY BAR & PROGRESS LINE --- */}
        <div className="space-y-3 sm:space-y-4">
          {/* Laser-Accented Hairline Progress Bar */}
          <div className="relative w-full h-[2px] bg-white/[0.08] overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-300 transition-all duration-75 relative rounded-full"
              style={{ width: `${progress}%` }}
            >
              {/* Blazing Laser Point at the Head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 sm:w-6 h-[4px] bg-white shadow-[0_0_12px_#ff8a00,0_0_24px_#ff8a00] rounded-full" />
            </div>
          </div>

          {/* Footer Metadata & Skip Trigger */}
          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wider text-gray-300">
                {progress < 25
                  ? "SYSTEM_BOOT // INITIALIZING..."
                  : progress < 55
                  ? "ALLOCATING MEMORY & GRAPHICS..."
                  : progress < 85
                  ? "CONFIGURING REACT FIBER MESH..."
                  : "READY // LAUNCHING WORKSPACE"}
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleFinish();
              }}
              className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors tracking-[0.2em] uppercase cursor-pointer py-1 px-2.5 rounded-md hover:bg-white/[0.05]"
            >
              <span>[ SKIP INTRO</span>
              <span className="text-orange-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              <span>]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
