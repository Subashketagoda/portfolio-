"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Globe, Sparkles, Layers } from "lucide-react";
import { projects, Project } from "@/data/projects";

const categories = ["ALL", "LIVE PLATFORMS", "WEB APPS & POS", "LUXURY & LIFESTYLE"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "LIVE PLATFORMS") return project.isLive;
    if (activeFilter === "WEB APPS & POS")
      return (
        project.id === "69-studio" ||
        project.id === "cargo-pizzeria" ||
        project.id === "apex-house"
      );
    if (activeFilter === "LUXURY & LIFESTYLE")
      return (
        project.id === "velora" ||
        project.id === "noir-table" ||
        project.id === "dinepro-advisors"
      );
    return true;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[350px] sm:w-[550px] lg:w-[700px] h-[300px] sm:h-[450px] bg-orange-500/[0.05] blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] lg:w-[550px] h-[280px] sm:h-[400px] bg-amber-500/[0.04] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Glowing Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.12)]">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>FEATURED WORK &amp; CLIENT PLATFORMS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Real-World Digital Platforms <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Engineered for Impact
              </span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 shrink-0 min-h-[38px] flex items-center ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-[1.03]"
                    : "bg-[#141622] text-gray-400 hover:text-white hover:bg-[#1b1f30] border border-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-gradient-to-b from-[#131622]/90 to-[#0c0e15]/95 border border-white/[0.09] hover:border-orange-500/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/15 shadow-xl relative"
            >
              {/* Top laser highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent group-hover:via-orange-400 transition-all duration-300 z-20" />

              {/* Project Screenshot Container with Overlay & Badges */}
              <div className="relative w-full h-56 sm:h-64 bg-[#141724] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Subhash Ketagoda Project — ${project.title} (${project.category})`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-transparent to-black/35 pointer-events-none" />

                {/* Status Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  {project.isLive ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a0a0f]/95 border border-emerald-500/50 text-[11px] font-mono font-bold text-emerald-400 backdrop-blur-md shadow-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Live Platform
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0a0a0f]/95 border border-amber-500/40 text-[11px] font-mono font-bold text-amber-400 backdrop-blur-md shadow-md">
                      ✦ {project.badge}
                    </span>
                  )}
                </div>

                {/* Quick Link on Image Hover */}
                {project.liveUrl !== "#" && (
                  <div className="absolute bottom-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-lg shadow-orange-500/30 transition-all"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Card Body: Title, Subtitle, Description, Tech Stack */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                    // {project.category}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Action Row */}
                <div className="pt-3 border-t border-white/[0.06] space-y-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-[#161a28] border border-white/[0.08] text-[11px] font-medium text-gray-300 group-hover:border-orange-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {project.isLive ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Visit Live Site</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-gray-500">
                        Bespoke Architecture
                      </span>
                    )}

                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="w-8 h-8 rounded-lg bg-[#161a28] border border-white/10 hover:border-orange-500 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
