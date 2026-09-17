"use client";

import { Compass, Palette, Cpu, Rocket, ArrowRight, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "PHASE 01",
    title: "Discovery & Strategy",
    icon: Compass,
    description:
      "Deep dive into your brand proposition, competitive landscape, and user psychology. Defining clear architectural milestones and conversion goals.",
    points: ["Proposition & Brand Strategy", "User Flow Mapping", "Technical Feasibility"],
  },
  {
    number: "02",
    phase: "PHASE 02",
    title: "UI/UX & Creative Direction",
    icon: Palette,
    description:
      "Crafting high-fidelity, bespoke digital designs. Establishing dark luxury visual hierarchy, editorial typography, design systems, and responsive Figma prototypes.",
    points: ["Design System & Tokens", "Interactive Prototyping", "Micro-Interactions"],
  },
  {
    number: "03",
    phase: "PHASE 03",
    title: "Precision Engineering",
    icon: Cpu,
    description:
      "Translating designs into production-ready Next.js & React architectures. Building custom POS engines, billing funnels, and clean modular code.",
    points: ["Next.js App Router", "Custom POS Engines", "Clean TypeScript"],
  },
  {
    number: "04",
    phase: "PHASE 04",
    title: "Optimization & Launch",
    icon: Rocket,
    description:
      "Rigorous Lighthouse speed audits, local SEO schema implementation, cross-device responsiveness checks, and deploying to global edge networks.",
    points: ["100/100 Lighthouse Speed", "Local SEO Dominance", "Frictionless Deployment"],
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0a0a0f] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 w-[350px] sm:w-[500px] lg:w-[650px] h-[300px] sm:h-[400px] bg-orange-500/[0.05] blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] bg-amber-500/[0.04] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
              <span>CREATIVE PROCESS &amp; WORKFLOW</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              From Raw Concept to <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Awwwards-Level Reality
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-400 max-w-md font-normal leading-relaxed">
            A systematic four-phase methodology combining aesthetic creative direction with rigorous software engineering to ship unforgettable digital products.
          </p>
        </div>

        {/* 4 Process Cards with Connected Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-gradient-to-b from-[#131622]/90 to-[#0c0e15]/95 border border-white/[0.09] hover:border-orange-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/15 overflow-hidden"
              >
                {/* Top laser accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent group-hover:via-orange-400 transition-all duration-300" />

                {/* Giant Watermark Step Number */}
                <div className="absolute -bottom-4 -right-2 font-mono text-7xl sm:text-8xl font-black text-white/[0.03] group-hover:text-orange-500/[0.08] transition-colors pointer-events-none select-none">
                  {step.number}
                </div>

                {/* Top: Phase tag, Icon */}
                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[11px] font-mono font-bold text-orange-400">
                      {step.phase}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#181c2b] to-[#10131e] border border-white/[0.1] flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Points Checklist */}
                  <div className="pt-3 space-y-1.5 border-t border-white/[0.06]">
                    {step.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Step Indicator */}
                <div className="relative z-10 pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono font-semibold text-gray-500 group-hover:text-orange-400 transition-colors">
                  <span>STEP // 0{idx + 1} OF 04</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
