"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials, Testimonial } from "@/data/portfolioData";

export default function TestimonialsSection() {
  const [activeDot, setActiveDot] = useState(1);

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-[#0c0c11] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Left-aligned header matching reference */}
        <div className="mb-12 space-y-3">
          <div className="text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            What Clients Say
          </h2>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item: Testimonial, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#13131b] border border-white/[0.08] hover:border-orange-500/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 shadow-md"
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
                  {[...Array(item.rating || 5)].map((_: unknown, sIdx: number) => (
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

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-10">
          {[0, 1, 2].map((dotIdx: number) => (
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
