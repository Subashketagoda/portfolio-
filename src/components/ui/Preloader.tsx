"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleFinish = useCallback(() => {
    setProgress(100);
    setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 700);
    }, 200);
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
    // Elegant cinematic counter (~2.2 seconds total duration)
    const startTime = Date.now();
    const duration = 2200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Smooth cubic-bezier easeOut curve
      const eased = 1 - Math.pow(1 - t, 3);
      const currentProgress = Math.min(Math.round(eased * 100), 100);

      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        handleFinish();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [handleFinish]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-[#060608] text-white select-none pointer-events-auto"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-gold-600/10 via-amber-500/10 to-transparent blur-[140px] pointer-events-none" />

          {/* Top Label & Coordinate + Skip Button */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px] md:text-xs tracking-widest text-muted uppercase">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse inline-block" />
              <span>SUBHASH KETAGODA • 2026</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-white/40">COLOMBO [6.9271° N, 79.8612° E]</span>
              <button
                type="button"
                onClick={handleFinish}
                className="px-3 py-1 rounded-full border border-white/15 bg-white/5 hover:bg-gold-400 hover:text-black hover:border-gold-400 text-white/70 transition-all font-mono text-[10px] tracking-wider cursor-pointer"
              >
                SKIP INTRO &rarr;
              </button>
            </div>
          </div>

          {/* Center Typographic Reveal */}
          <div className="relative z-10 my-auto max-w-5xl mx-auto w-full text-center py-8">
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-silver-gradient"
              >
                SUBHASH
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-gold-gradient"
              >
                KETAGODA
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-muted"
            >
              Digital Creator &middot; Web Developer &middot; Creative Technologist
            </motion.p>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="relative z-10 w-full max-w-4xl mx-auto space-y-3">
            <div className="flex items-baseline justify-between font-mono text-xs md:text-sm">
              <span className="text-muted tracking-wider flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
                INITIALIZING DIGITAL EXPERIENCE
              </span>
              <span className="text-gold-400 font-bold tracking-widest text-lg md:text-2xl">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>

            {/* Fine Metallic Progress Line */}
            <div className="h-[2px] md:h-[3px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-amber-200"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
