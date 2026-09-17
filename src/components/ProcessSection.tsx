"use client";

import { Compass, Palette, Cpu, Rocket } from "lucide-react";

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
    <section id="process" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#080b0f] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[350px] bg-orange-500/[0.04] blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
              <span>&mdash;</span>
              <span>CREATIVE PROCESS &amp; WORKFLOW</span>
              <span>&mdash;</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              From Raw Concept to <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Awwwards-Level Reality
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 max-w-md font-normal leading-relaxed">
            A systematic four-phase methodology combining aesthetic creative direction with rigorous software engineering to ship unforgettable digital products.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#0f1118] border border-white/[0.07] hover:border-orange-500/40 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
              >
                {/* Giant Watermark Step Number */}
                <div className="absolute -bottom-4 -right-2 font-mono text-7xl sm:text-8xl font-black text-white/[0.03] group-hover:text-orange-500/[0.07] transition-colors pointer-events-none select-none">
                  {step.number}
                </div>

                {/* Top: Phase tag, Icon */}
                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono font-semibold text-orange-400">
                      {step.phase}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#151722] border border-white/[0.08] flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverable Bullet Points */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-2 relative z-10">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/70" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
