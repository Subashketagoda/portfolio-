"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

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
      "Subhash delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Working with Subhash was a fantastic experience. He's professional, communicates well, and delivers high-quality code on time.",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Subhash transformed our idea into a powerful application. His problem-solving skills and clean code approach are impressive.",
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "GrowthCo",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(1); // middle dot active matching screenshot

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0c0c11] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[250px] sm:h-[300px] bg-orange-500/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Left-aligned header matching screenshot */}
        <div className="mb-8 sm:mb-12 space-y-3">
          <div className="text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
            TESTIMONIALS
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            What Clients Say
          </h2>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#13131b] border border-white/[0.08] hover:border-orange-500/40 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 shadow-md"
            >
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots matching screenshot (middle dot active orange) */}
        <div className="flex items-center justify-center gap-2 pt-10">
          {[0, 1, 2].map((dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveDot(dotIdx)}
              aria-label={`Slide ${dotIdx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeDot === dotIdx
                  ? "w-6 bg-orange-500"
                  : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
