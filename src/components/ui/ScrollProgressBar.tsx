"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 transition-all duration-75 relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Luminous Glowing Leading Head */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[5px] bg-white rounded-full shadow-[0_0_12px_#ff8a00]" />
      </div>
    </div>
  );
}
