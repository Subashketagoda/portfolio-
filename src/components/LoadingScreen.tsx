"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  { threshold: 0, text: "INITIALIZING DIGITAL ARCHITECTURE" },
  { threshold: 24, text: "LOADING BESPOKE UI/UX DESIGN SYSTEM" },
  { threshold: 48, text: "SYNCHRONIZING NEXT.JS FULL-STACK ENGINES" },
  { threshold: 72, text: "CALIBRATING 60FPS MOTION CHOREOGRAPHY" },
  { threshold: 92, text: "FINALIZING LIGHTHOUSE 100 OPTIMIZATION" },
  { threshold: 100, text: "WELCOME • SUBHASH KETAGODA" },
];

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(phases[0].text);

  const handleFinish = useCallback(() => {
    setProgress(100);
    setTimeout(() => {
      setIsFinished(true);
      onComplete?.();
    }, 350);
  }, [onComplete]);

  // Keyboard shortcut to skip intro (Esc, Space, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleFinish]);

  useEffect(() => {
    // 2.0s silky-smooth cubic-bezier counter
    const startTime = Date.now();
    const duration = 2000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Smooth cubic easeOut curve: 1 - (1-t)^3
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.min(Math.round(eased * 100), 100);

      setProgress(current);

      // Update Phase text dynamically
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
    }, 25);

    return () => clearInterval(interval);
  }, [handleFinish]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[120] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-[#06070a] select-none overflow-hidden"
        >
          {/* Cyber Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.14]"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Ambient Glowing Nebulae */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-orange-500/20 via-amber-500/10 to-transparent blur-[160px] pointer-events-none animate-pulse-subtle" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/[0.08] blur-[150px] pointer-events-none" />

          {/* TOP HUD ROW */}
          <div className="relative z-10 flex items-start justify-between text-xs font-mono">
            {/* Top-Left: Brand & Role */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                <span>SUBHASH KETAGODA</span>
              </div>
              <div className="text-[10px] text-gray-400 tracking-widest uppercase">
                WEB DESIGNER &amp; CREATIVE TECHNOLOGIST
              </div>
            </div>

            {/* Top-Right: Location & Coordinates */}
            <div className="text-right space-y-1 hidden sm:block">
              <div className="text-gray-300 font-semibold tracking-wider">
                COLOMBO, SRI LANKA
              </div>
              <div className="text-[10px] text-orange-400/80 tracking-widest">
                6.9271° N, 79.8612° E
              </div>
            </div>
          </div>

          {/* CENTERPIECE: Glowing Signature + Orbital Gyroscope + Counter */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-8">
            {/* Concentric Rotating Orbital Gyroscope */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              {/* Outer Slow Rotating Dashed Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/25 animate-spin-slow" />

              {/* Middle Counter-Rotating Track with Glow Dot */}
              <div
                className="absolute inset-4 rounded-full border border-white/[0.08]"
                style={{ animation: "spin 18s linear infinite reverse" }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />
              </div>

              {/* Inner Circular Progress SVG */}
              <svg className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] -rotate-90" viewBox="0 0 100 100">
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

              {/* Core Signature Badge */}
              <div className="relative z-10 w-36 sm:w-40 h-20 flex items-center justify-center p-2">
                <img
                  src="/images/subhash-signature.png"
                  alt="Subhash Ketagoda"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_14px_rgba(249,115,22,0.5)] select-none transition-transform duration-300 group-hover:scale-105"
                  style={{
                    opacity: 0.2 + (progress / 100) * 0.8,
                  }}
                />
              </div>
            </div>

            {/* Giant Luxury Digital Percentage Readout */}
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400 tracking-tighter">
                {String(progress).padStart(2, "0")}
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-orange-500">
                %
              </span>
            </div>

            {/* Dynamic Status Phase Pill */}
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12141d]/90 border border-white/10 shadow-lg backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-gray-300 uppercase font-medium">
                {currentPhase}
              </span>
            </div>

            {/* High-Precision Progress Bar with Glowing Laser Head */}
            <div className="w-64 sm:w-80 h-1 rounded-full bg-white/10 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-400 rounded-full transition-all duration-75 relative"
                style={{ width: `${progress}%` }}
              >
                {/* Glowing laser head */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#f97316]" />
              </div>
            </div>
          </div>

          {/* BOTTOM HUD ROW */}
          <div className="relative z-10 flex items-end justify-between text-[11px] font-mono text-gray-400">
            {/* Bottom-Left: System Info */}
            <div className="space-y-0.5">
              <div className="text-gray-300 font-semibold tracking-wider">
                CORE_ENGINE: ACTIVE
              </div>
              <div className="text-[10px] text-gray-400">
                FRAMEWORK: NEXT.JS 14 • REACT 18
              </div>
            </div>

            {/* Bottom-Right: Skip Prompt */}
            <button
              onClick={handleFinish}
              className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 text-[10px] text-gray-400 hover:text-white transition-all tracking-widest uppercase cursor-pointer"
            >
              [ PRESS ESC TO ENTER ]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
