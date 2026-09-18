"use client";

import { ArrowRight, Layout, Cpu, CreditCard, Sparkles, CheckCircle2, Zap } from "lucide-react";

const servicesList = [
  {
    number: "01",
    title: "Bespoke Web & UI/UX Design",
    description:
      "Creating high-end digital aesthetics that captivate audiences. Specializing in dark luxury interfaces, editorial typography hierarchy, responsive Figma design systems, and fluid micro-interactions.",
    icon: Layout,
    accent: "from-orange-500/20 via-amber-500/10 to-transparent",
    iconColor: "text-orange-400",
    deliverables: ["Dark Luxury & Editorial UI", "Design Systems & Component Tokens", "Interactive Figma Prototyping", "Mobile-First UX Architecture"],
  },
  {
    number: "02",
    title: "Full-Stack Next.js Architecture",
    description:
      "Engineering lightning-fast web applications with modern Next.js 15 App Router, React Server Components, TypeScript, and Tailwind CSS. Built for sub-second page loads and 100/100 Lighthouse performance.",
    icon: Cpu,
    accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconColor: "text-cyan-400",
    deliverables: ["Next.js App Router Architecture", "Full Type-Safe Development", "API Routes & Server Actions", "Edge Network CDN Deployment"],
  },
  {
    number: "03",
    title: "Custom POS & Business Engines",
    description:
      "Developing bespoke Point of Sale (POS), inventory management, and automated billing software tailored for retail, restaurants, and hospitality businesses with WhatsApp ordering funnels.",
    icon: CreditCard,
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconColor: "text-amber-400",
    deliverables: ["Retail & Restaurant POS Systems", "Automated Billing & Inventory", "WhatsApp Takeaway Funnels", "Realtime Cloud Analytics"],
  },
  {
    number: "04",
    title: "Creative Direction & Local SEO",
    description:
      "Transforming websites into high-converting digital assets. Implementing structured Schema.org local SEO, organic search dominance in Colombo & Sri Lanka, and storytelling choreography that sells.",
    icon: Sparkles,
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconColor: "text-emerald-400",
    deliverables: ["Local SEO & Schema Markup", "Conversion Rate Optimization", "Motion Choreography & GSAP", "Core Web Vitals Perfection"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Precision cyber grid & ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] h-[350px] sm:h-[450px] bg-orange-500/[0.06] blur-[170px] pointer-events-none rounded-full animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header with Glowing Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.15)]">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            <span>CAPABILITIES &amp; SPECIALTIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Comprehensive Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Craftsmanship
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto font-normal leading-relaxed">
            Where luxury art direction converges with rock-solid software engineering. Every system is bespoke-architected from scratch.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-b from-[#131622]/90 to-[#0c0e15]/95 border border-white/[0.09] hover:border-orange-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/15 overflow-hidden"
              >
                {/* Top laser accent highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent group-hover:via-orange-400 transition-all duration-500" />

                {/* Subtle Hover Radial Aura inside card */}
                <div className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${service.accent} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Background Watermark Number */}
                <div className="absolute -bottom-3 -right-2 font-mono text-6xl sm:text-7xl font-black text-white/[0.03] group-hover:text-orange-500/[0.08] transition-colors pointer-events-none select-none">
                  {service.number}
                </div>

                <div className="relative z-10 space-y-4 sm:space-y-5">
                  {/* Service Icon in Glowing glass box */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/15 to-transparent border border-orange-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/25 group-hover:border-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/10">
                      <Icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-500 group-hover:text-orange-400 transition-colors">
                      // {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-3 space-y-2 border-t border-white/[0.06]">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Arrow */}
                <div className="relative z-10 pt-5 mt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono font-semibold text-gray-400 group-hover:text-orange-400 transition-colors">
                  <span>DISCUSS PROJECT</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
