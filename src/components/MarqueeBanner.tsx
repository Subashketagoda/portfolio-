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

const glyphs = ["⚡", "✦", "❖", "◈"];

export default function MarqueeBanner({ items = defaultItems, reversed = false }: MarqueeBannerProps) {
  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-5 bg-gradient-to-r from-[#07090e] via-[#0d101a] to-[#07090e] border-y border-orange-500/15 select-none shadow-[0_0_25px_rgba(249,115,22,0.05)]">
      {/* Laser highlight top edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      {/* Side Fade Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 md:w-48 bg-gradient-to-r from-[#080b0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 md:w-48 bg-gradient-to-l from-[#080b0f] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className={`flex w-max items-center ${reversed ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items, ...items].map((text, idx) => {
          const glyph = glyphs[idx % glyphs.length];
          const isHighlighted = idx % 2 === 0;

          return (
            <div key={idx} className="flex items-center gap-3 sm:gap-5 px-3 sm:px-5">
              <span
                className={`font-mono text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.26em] uppercase transition-all duration-300 flex items-center gap-2 ${
                  isHighlighted
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 drop-shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{text}</span>
              </span>
              <span className="text-orange-500 text-xs sm:text-sm font-black animate-pulse drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]">
                {glyph}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
