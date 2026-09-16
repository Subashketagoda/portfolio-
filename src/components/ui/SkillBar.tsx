"use client";

import { useEffect, useState, useRef } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTier = (pct: number) => {
    if (pct >= 95) return "STAFF / LEAD";
    if (pct >= 90) return "ENTERPRISE";
    return "PRODUCTION";
  };

  return (
    <div
      ref={ref}
      className="space-y-2 p-2.5 rounded-lg bg-[#10121a] border border-white/[0.05] hover:border-orange-500/30 transition-all duration-200"
    >
      <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
        <span className="text-gray-200 font-mono text-xs">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-semibold">
            {getTier(percentage)}
          </span>
          <span className="text-[#ff8a00] font-mono text-xs font-semibold">
            {percentage}%
          </span>
        </div>
      </div>

      {/* High-Precision Track with Glow Fill */}
      <div className="h-1.5 w-full bg-[#161822] rounded-full overflow-hidden border border-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-[#ff8a00] via-[#ffa534] to-[#ff8a00] rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,138,0,0.45)]"
          style={{ width: isVisible ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}
