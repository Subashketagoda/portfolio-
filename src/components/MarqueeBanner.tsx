"use client";

interface MarqueeBannerProps {
  items?: string[];
  reversed?: boolean;
}

const defaultItems = [
  "BESPOKE WEB DESIGN",
  "FULL-STACK NEXT.JS",
  "CUSTOM POS ENGINES",
  "UI/UX CREATIVE DIRECTION",
  "6+ YEARS EXPERIENCE",
  "LIGHTHOUSE 100 SPEED",
  "INTERACTIVE MOTION",
  "LOCAL SEO DOMINANCE",
  "COLOMBO, SRI LANKA",
  "AVAILABLE FOR FREELANCE",
];

export default function MarqueeBanner({ items = defaultItems, reversed = false }: MarqueeBannerProps) {
  return (
    <div className="relative w-full overflow-hidden py-5 bg-[#0a0a0f] border-y border-white/[0.06] select-none">
      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#080b0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#080b0f] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className={`flex w-max ${reversed ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-gray-400 hover:text-white transition-colors duration-200">
              {text}
            </span>
            <span className="text-orange-500 text-xs sm:text-sm font-black animate-pulse">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
