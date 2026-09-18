"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Subhash delivered an exceptional web application that exceeded our expectations. His attention to detail, architectural precision, and technical expertise in Next.js and custom POS systems are truly outstanding.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Working with Subhash was a fantastic experience. He's professional, communicates clearly at every sprint milestone, and delivers high-performance, fault-tolerant code on time. Highly recommended.",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Subhash transformed our business concept into a lightning-fast digital engine. His problem-solving skills, clean schema modeling, and dark luxury design execution gave our brand an instant competitive edge.",
    name: "Emily Rodriguez",
    role: "Product Director",
    company: "GrowthCo Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[300px] sm:h-[400px] bg-orange-500/[0.04] blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.12)]">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>CLIENT REVIEWS &amp; ENDORSEMENTS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Trusted by Founders &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Technical Leaders
            </span>
          </h2>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-gradient-to-b from-[#131622]/95 to-[#0b0e15]/95 border border-white/[0.09] hover:border-orange-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/10 shadow-xl overflow-hidden group"
            >
              {/* Top laser highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent group-hover:via-orange-400 transition-all duration-300" />

              {/* Quote Mark & Rating */}
              <div className="flex items-center justify-between mb-5">
                <Quote className="w-8 h-8 text-orange-500/30 group-hover:text-orange-500/60 transition-colors" />
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-8 relative z-10">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-orange-500/30 p-0.5 shrink-0 shadow-md">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-tight flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </h4>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      {item.role}, {item.company}
                    </p>
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
