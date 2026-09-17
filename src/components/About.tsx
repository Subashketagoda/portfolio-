"use client";

import { Download, User, Mail, MapPin, Clock } from "lucide-react";

function WorldMapBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* High-Definition Vector World Map with Built-in Colombo Radar */}
      <img
        src="/images/world-map.svg"
        alt="World Map"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover opacity-75 filter brightness-110 contrast-125"
      />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0c0c11] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Heading, Bio, Stats & Download Resume */}
          <div className="lg:col-span-7 min-w-0 space-y-6 sm:space-y-7">
            {/* Tag matching reference: ABOUT ME — */}
            <div className="flex items-center gap-2 text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
              <span>ABOUT ME &mdash;</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Engineering Scalable Systems That Drive Real Technical &amp; Business Impact
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              With 6+ years of full-stack software engineering experience, I specialize in architecting production-grade web applications, custom transactional POS billing engines, and high-performance APIs. From schema modeling and ACID integrity in PostgreSQL/MongoDB to edge-cached Next.js architectures, I build resilient, secure, and lightning-fast digital solutions.
            </p>

            {/* 4 Stat Boxes (Senior Engineering Telemetry) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2">
              <div className="p-3 sm:p-4 rounded-xl bg-[#14141c] border border-white/[0.07] hover:border-orange-500/30 transition-all duration-300">
                <div className="text-xl sm:text-3xl font-bold font-mono text-orange-500 mb-1">
                  6+ YRS
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-snug">
                  Production Experience
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#14141c] border border-white/[0.07] hover:border-orange-500/30 transition-all duration-300">
                <div className="text-xl sm:text-3xl font-bold font-mono text-orange-400 mb-1">
                  40+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-snug">
                  Deployed Systems
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#14141c] border border-white/[0.07] hover:border-orange-500/30 transition-all duration-300">
                <div className="text-xl sm:text-3xl font-bold font-mono text-orange-400 mb-1">
                  120K+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-snug">
                  Reqs / Mo Served
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-[#14141c] border border-white/[0.07] hover:border-orange-500/30 transition-all duration-300">
                <div className="text-xl sm:text-3xl font-bold font-mono text-emerald-400 mb-1">
                  99.9%
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-snug">
                  Fault-Tolerant Uptime
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#14141b] border border-white/10 text-gray-200 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 font-semibold text-xs tracking-wider transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-4 h-4 text-orange-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Information Card with World Map & Gold Signature */}
          <div className="lg:col-span-5 min-w-0 space-y-6">
            <div className="relative rounded-2xl bg-[#13131b] border border-white/[0.08] p-5 sm:p-8 overflow-hidden shadow-2xl">
              {/* High-Tech World Map Background with pulsing Sri Lanka/Colombo radar pin */}
              <WorldMapBackground />

              <div className="relative z-10 space-y-4 sm:space-y-5">
                {/* Name */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.06]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Name:</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate">Subhash Ketagoda</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.06]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Email:</div>
                    <a
                      href="mailto:subhashketagoda@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors break-all block"
                    >
                      subhashketagoda@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.06]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Location:</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">Colombo, Sri Lanka</div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Availability:</div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>Available for Freelance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentic Handwritten Signature */}
            <div className="pt-2 pl-2">
              <img
                src="/images/subhash-signature.png"
                alt="Subhash Ketagoda Signature"
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain select-none drop-shadow-[0_4px_16px_rgba(249,115,22,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
