"use client";

import { useState } from "react";
import { skillsProgress, techGrid, SkillProgress, TechItem } from "@/data/skills";
import SkillBar from "./ui/SkillBar";

function TechIcon({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "react":
      return (
        <svg className="w-7 h-7" viewBox="0 0 115.3 100" fill={color}>
          <circle cx="57.7" cy="50" r="10" />
          <ellipse cx="57.7" cy="50" rx="50" ry="18.5" fill="none" stroke={color} strokeWidth="6" />
          <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(60 57.7 50)" fill="none" stroke={color} strokeWidth="6" />
          <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(120 57.7 50)" fill="none" stroke={color} strokeWidth="6" />
        </svg>
      );
    case "nextjs":
      return (
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black font-black text-xs">
          N
        </div>
      );
    case "nodejs":
      return (
        <div className="w-7 h-7 rounded bg-[#68A063]/20 border border-[#68A063] flex items-center justify-center text-[#68A063] font-bold text-xs">
          N
        </div>
      );
    case "express":
      return (
        <div className="w-7 h-7 rounded bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-xs">
          ex
        </div>
      );
    case "pos":
      return (
        <div className="w-7 h-7 rounded bg-orange-500/20 border border-orange-500 flex items-center justify-center text-orange-400 font-bold text-xs">
          POS
        </div>
      );
    case "rest":
      return (
        <div className="w-7 h-7 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-xs">
          API
        </div>
      );
    case "typescript":
      return (
        <div className="w-7 h-7 rounded bg-[#3178C6] flex items-center justify-center text-white font-bold text-xs shadow-sm">
          TS
        </div>
      );
    case "javascript":
      return (
        <div className="w-7 h-7 rounded bg-[#F7DF1E] flex items-center justify-center text-black font-black text-xs shadow-sm">
          JS
        </div>
      );
    case "tailwind":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill={color}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case "mongodb":
      return (
        <div className="w-7 h-7 rounded-full bg-[#47A248]/20 flex items-center justify-center text-[#47A248] text-base">
          🍃
        </div>
      );
    case "postgresql":
      return (
        <div className="w-7 h-7 rounded bg-[#4169E1]/20 border border-[#4169E1] flex items-center justify-center text-[#4169E1] font-bold text-xs">
          PG
        </div>
      );
    case "redis":
      return (
        <div className="w-7 h-7 rounded bg-[#DC382D]/20 border border-[#DC382D] flex items-center justify-center text-[#DC382D] font-bold text-xs">
          RD
        </div>
      );
    case "git":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill={color}>
          <path d="M2.6 10.6L10.6 2.6c.8-.8 2.1-.8 2.8 0l8 8c.8.8.8 2.1 0 2.8l-8 8c-.8.8-2.1.8-2.8 0l-8-8c-.8-.7-.8-2 0-2.8zm11.7 4.7c0-.6-.3-1.1-.7-1.4l1.3-1.3c.3.1.6.1.9.1 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5c0 .3.1.6.1.9l-1.3 1.3c-.3-.4-.8-.7-1.4-.7-.9 0-1.6.6-1.9 1.4l-1.5-.9v-.3c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5c.6 0 1.1-.2 1.5-.6l1.5.9c-.1.3-.1.5-.1.8 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5z" />
        </svg>
      );
    case "docker":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill={color}>
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186" />
        </svg>
      );
    case "aws":
      return (
        <div className="w-7 h-7 rounded bg-[#FF9900]/20 flex items-center justify-center text-[#FF9900] font-black text-[11px]">
          AWS
        </div>
      );
    case "vercel":
      return (
        <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-white font-black text-xs">
          ▲
        </div>
      );
    case "firebase":
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill={color}>
          <path d="M4.65 17.78l2.67-16.48c.08-.49.7-.68.99-.3l3.29 4.38-6.95 12.4zm15.63-2.97L17.8 3.51a.63.63 0 00-1.16-.14l-2.73 5.22 6.37 6.22zM13.2 9.07l-2.58-4.9c-.24-.46-.91-.43-1.11.05l-6.9 13.06 9.85 5.51a1.2 1.2 0 001.18 0l8.77-4.91L13.2 9.07z" />
        </svg>
      );
    case "graphql":
      return (
        <div className="w-7 h-7 rounded bg-[#E10098]/20 flex items-center justify-center text-[#E10098] font-bold text-xs">
          GQL
        </div>
      );
    case "redux":
      return (
        <div className="w-7 h-7 rounded bg-[#764ABC]/20 flex items-center justify-center text-[#764ABC] font-bold text-xs">
          RDX
        </div>
      );
    case "figma":
      return (
        <div className="w-7 h-7 rounded bg-[#F24E1E]/20 flex items-center justify-center text-[#F24E1E] font-bold text-xs">
          🎨
        </div>
      );
    default:
      return <div className="w-7 h-7 rounded bg-orange-500/20" />;
  }
}

const techCategories = ["ALL", "Frontend", "Backend", "Database", "Cloud & DevOps"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredTech = techGrid.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, Heading, 8 Progress Bars */}
          <div className="lg:col-span-5 min-w-0 space-y-6 sm:space-y-7">
            <div className="space-y-3">
              <div className="text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
                <span>&mdash;</span>
                <span>TECHNICAL EXPERTISE</span>
                <span>&mdash;</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Skills &amp; Engineering Disciplines
              </h2>
              <p className="text-xs text-gray-400">
                Specialized in architecting high-converting web platforms, custom billing systems, and responsive full-stack applications.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-1">
              {skillsProgress.map((skill: SkillProgress) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Tech Stack Cards Grid with Category Filter */}
          <div className="lg:col-span-7 min-w-0 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-white/[0.06]">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400">
                STACK &amp; TOOLS (20 TECHNOLOGIES)
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {techCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all min-h-[32px] flex items-center ${
                      activeCategory === cat
                        ? "bg-orange-500 text-white"
                        : "bg-[#14141c] text-gray-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5 sm:gap-3.5">
              {filteredTech.map((tech: TechItem) => (
                <div
                  key={tech.name}
                  className="rounded-xl bg-[#13131b] border border-white/[0.07] hover:border-orange-500/50 p-3.5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group shadow-md"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <TechIcon type={tech.iconType} color={tech.color} />
                  </div>
                  <div className="space-y-0.5 w-full">
                    <div className="text-xs font-semibold text-gray-200 group-hover:text-white transition-colors truncate">
                      {tech.name}
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 group-hover:text-orange-400 transition-colors truncate">
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
