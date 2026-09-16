"use client";

import { ArrowRight, Layout, Cpu, CreditCard, Sparkles, CheckCircle2 } from "lucide-react";

const servicesList = [
  {
    number: "01",
    title: "Bespoke Web & UI/UX Design",
    description:
      "Creating high-end digital aesthetics that captivate audiences. Specializing in dark luxury interfaces, editorial typography hierarchy, responsive Figma design systems, and fluid micro-interactions.",
    icon: Layout,
    deliverables: ["Dark Luxury & Editorial UI", "Design Systems & Component Tokens", "Interactive Figma Prototyping", "Mobile-First UX Architecture"],
  },
  {
    number: "02",
    title: "Full-Stack Next.js Architecture",
    description:
      "Engineering lightning-fast web applications with modern Next.js 14 App Router, React Server Components, TypeScript, and Tailwind CSS. Built for sub-second page loads and 100/100 Lighthouse performance.",
    icon: Cpu,
    deliverables: ["Next.js App Router Architecture", "Full Type-Safe Development", "API Routes & Server Actions", "Edge Network CDN Deployment"],
  },
  {
    number: "03",
    title: "Custom POS & Business Engines",
    description:
      "Developing bespoke Point of Sale (POS), inventory management, and automated billing software tailored for retail, restaurants, and hospitality businesses with WhatsApp ordering funnels.",
    icon: CreditCard,
    deliverables: ["Retail & Restaurant POS Systems", "Automated Billing & Inventory", "WhatsApp Takeaway Funnels", "Realtime Cloud Analytics"],
  },
  {
    number: "04",
    title: "Creative Direction & Local SEO",
    description:
      "Transforming websites into high-converting digital assets. Implementing structured Schema.org local SEO, organic search dominance in Colombo & Sri Lanka, and storytelling choreography that sells.",
    icon: Sparkles,
    deliverables: ["Local SEO & Schema Markup", "Conversion Rate Optimization", "Motion Choreography & GSAP", "Core Web Vitals Perfection"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-[#0c0c11] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/[0.04] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
            <span>&mdash;</span>
            <span>CAPABILITIES &amp; SPECIALTIES</span>
            <span>&mdash;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Comprehensive Digital Craftsmanship
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-normal leading-relaxed pt-1">
            Where art direction meets high-performance engineering. Every solution is custom-architected without bloated generic templates.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-7 flex flex-col justify-between bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
              >
                {/* Background Watermark Number */}
                <div className="absolute -bottom-3 -right-2 font-mono text-7xl font-black text-white/[0.03] group-hover:text-orange-500/[0.07] transition-colors pointer-events-none select-none">
                  {service.number}
                </div>

                <div className="relative z-10 space-y-5">
                  {/* Service Icon in Glowing rounded box */}
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:border-orange-500 transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-3 space-y-1.5 border-t border-white/[0.06]">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500/80 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 relative z-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 group-hover:text-orange-300 group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>START A PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
