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

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm font-medium">
        <span className="text-gray-300">{name}</span>
        <span className="text-[#ff8a00] font-mono text-xs font-semibold">
          {percentage}%
        </span>
      </div>

      {/* Dark Track with Orange Glow Fill */}
      <div className="h-2 w-full bg-[#161620] rounded-full overflow-hidden border border-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-[#ff8a00] to-[#ffa534] rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(255,138,0,0.45)]"
          style={{ width: isVisible ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}
