"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3.0s smooth initialization
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 250);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07070a]"
        >
          {/* Subtle Ambient Orange Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#ff8a00]/15 blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center space-y-6">
            {/* Centered Custom "SK" Monogram Logo with Circular SVG Progress Ring */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Circular SVG Progress Ring */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-white/[0.08]"
                  strokeWidth="3"
                  fill="transparent"
                />
                {/* Animated Orange Progress Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[#ff8a00] transition-all duration-75 ease-out"
                  strokeWidth="3.5"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * progress) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              {/* Inner "SK" Monogram */}
              <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#111118] border border-white/10 flex items-center justify-center shadow-lg shadow-black/60">
                <span className="font-mono font-bold text-lg tracking-wider text-white">
                  S<span className="text-[#ff8a00]">K</span>
                </span>
              </div>
            </div>

            {/* Percentage Display */}
            <div className="font-mono text-xs tracking-widest text-[#ff8a00] font-semibold">
              {Math.round(progress)}%
            </div>

            {/* Subtitle */}
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gray-400">
              INITIALIZING EXPERIENCE...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
