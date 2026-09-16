"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#13131b]/90 border border-white/10 hover:border-[#ff8a00] hover:bg-[#ff8a00]/15 flex items-center justify-center text-gray-400 hover:text-[#ff8a00] shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
