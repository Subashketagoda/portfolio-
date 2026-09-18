"use client";

import { useState } from "react";
import { Download, User, Mail, MapPin, Clock, Copy, Check, Sparkles } from "lucide-react";

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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("subhashketagoda@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Atmospheric cyber grid & ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute top-1/2 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Heading, Bio, Stats & Download Resume */}
          <div className="lg:col-span-7 min-w-0 space-y-6 sm:space-y-7">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
              <span>ABOUT ME &mdash; SENIOR ARCHITECT</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering Scalable Systems That Drive Real{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Technical &amp; Business Impact
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              With 6+ years of full-stack software engineering experience, I specialize in architecting production-grade web applications, custom transactional POS billing engines, and high-performance APIs. From schema modeling and ACID integrity in PostgreSQL/MongoDB to edge-cached Next.js architectures, I build resilient, secure, and lightning-fast digital solutions.
            </p>

            {/* 4 Stat Boxes (Senior Engineering Telemetry) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="relative p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#141824]/90 to-[#0c0e16]/95 border border-white/[0.09] hover:border-orange-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400 mb-1 group-hover:scale-105 transition-transform">
                  6<span className="text-white">+</span>
                </div>
                <div className="text-[11px] text-gray-400 font-medium leading-snug">
                  Years Production Experience
                </div>
              </div>

              <div className="relative p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#141824]/90 to-[#0c0e16]/95 border border-white/[0.09] hover:border-orange-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-orange-400 mb-1 group-hover:scale-105 transition-transform">
                  40<span className="text-white">+</span>
                </div>
                <div className="text-[11px] text-gray-400 font-medium leading-snug">
                  Deployed Live Systems
                </div>
              </div>

              <div className="relative p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#141824]/90 to-[#0c0e16]/95 border border-white/[0.09] hover:border-orange-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400 mb-1 group-hover:scale-105 transition-transform">
                  120K<span className="text-white">+</span>
                </div>
                <div className="text-[11px] text-gray-400 font-medium leading-snug">
                  Reqs / Mo High-Volume
                </div>
              </div>

              <div className="relative p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#141824]/90 to-[#0c0e16]/95 border border-white/[0.09] hover:border-emerald-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 mb-1 group-hover:scale-105 transition-transform flex items-baseline gap-0.5">
                  99.9<span className="text-sm font-sans text-emerald-300">%</span>
                </div>
                <div className="text-[11px] text-gray-400 font-medium leading-snug">
                  Fault-Tolerant Uptime
                </div>
              </div>
            </div>

            {/* Download Resume Button & Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs sm:text-sm tracking-wider shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-98 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-4 h-4 text-white" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#131622] border border-white/10 text-gray-300 hover:text-white hover:border-orange-500/40 font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span>VIEW CAPABILITIES</span>
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Information Card with World Map & Gold Signature */}
          <div className="lg:col-span-5 min-w-0 space-y-6">
            <div className="relative rounded-2xl bg-[#11141e]/95 border border-white/[0.12] p-6 sm:p-8 overflow-hidden shadow-2xl shadow-orange-500/10 backdrop-blur-xl">
              {/* High-Tech World Map Background with pulsing Colombo radar pin */}
              <WorldMapBackground />

              <div className="relative z-10 space-y-4 sm:space-y-5">
                {/* Header Title inside card */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-orange-400 font-bold uppercase tracking-widest">
                    SYSTEM OPERATOR // BIO
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>

                {/* Name */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 shrink-0 shadow-md">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Name:</div>
                    <div className="text-sm sm:text-base font-bold text-white truncate">Subhash Ketagoda</div>
                  </div>
                </div>

                {/* Email with 1-click Copy button */}
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 shrink-0 shadow-md">
                      <Mail className="w-5 h-5" />
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
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 text-gray-400 hover:text-orange-400 transition-colors border border-white/10 shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Location:</div>
                    <div className="text-sm font-bold text-white">Colombo, Sri Lanka <span className="text-xs text-orange-400 font-mono">[79.86°E]</span></div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 shadow-md">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">Availability:</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available for Projects &amp; Consulting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentic Handwritten Signature */}
            <div className="pt-2 pl-2 flex items-center justify-between">
              <img
                src="/images/subhash-signature.png"
                alt="Subhash Ketagoda Signature"
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain select-none drop-shadow-[0_4px_16px_rgba(249,115,22,0.45)]"
              />
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                VERIFIED ARCHITECT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
