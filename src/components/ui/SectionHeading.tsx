"use client";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      }`}
    >
      <div className="inline-flex items-center gap-2 text-[#ff8a00] font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
        {align === "left" && <span>&mdash;</span>}
        <span>{eyebrow}</span>
        {align === "left" && <span>&mdash;</span>}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}{" "}
        {highlight && <span className="text-[#ff8a00]">{highlight}</span>}
      </h2>

      {description && (
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
