"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Hero3DCanvas from "@/components/ui/Hero3DCanvas";

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("Full-Stack Developer");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = [
      "Full-Stack Developer",
      "Creative Web Developer",
      "MERN & Next.js Specialist",
      "UI/UX Technologist",
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const timer = setInterval(() => {
      const currentTitle = titles[titleIndex];
      if (!isDeleting) {
        setTypedTitle(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          // pause before deleting
          clearInterval(timer);
          setTimeout(() => {
            // start next tick
            startDeleting();
          }, 1800);
        }
      }
    }, 90);

    const startDeleting = () => {
      const delTimer = setInterval(() => {
        const currentTitle = titles[titleIndex];
        setTypedTitle(currentTitle.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          clearInterval(delTimer);
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          setTimeout(() => {
            // restart typing
            startTyping();
          }, 400);
        }
      }, 50);
    };

    const startTyping = () => {
      const typeTimer = setInterval(() => {
        const currentTitle = titles[titleIndex];
        setTypedTitle(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentTitle.length) {
          clearInterval(typeTimer);
          setTimeout(startDeleting, 1800);
        }
      }, 90);
    };

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative pt-20 md:pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-[#080b0f]">
      {/* Interactive 3D Canvas Background Animation */}
      <Hero3DCanvas />

      {/* Top Horizon Line with Center Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/35 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-[2px] pointer-events-none" />

      {/* 1. Volumetric God-Rays / Angled Luminous Light Beams */}
      <div className="absolute -top-40 right-1/4 w-[480px] h-[850px] bg-gradient-to-b from-orange-500/16 via-amber-500/[0.04] to-transparent -rotate-[28deg] blur-3xl pointer-events-none" />
      <div className="absolute -top-52 right-12 w-[340px] h-[720px] bg-gradient-to-b from-amber-400/12 via-orange-500/[0.02] to-transparent -rotate-[38deg] blur-2xl pointer-events-none hidden sm:block" />

      {/* 2. Primary Radiant Orange Aura behind the portrait */}
      <div className="absolute -top-12 right-0 sm:right-12 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-orange-500/22 via-amber-500/12 to-transparent blur-[130px] pointer-events-none hidden md:block animate-pulse-subtle" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-500/15 blur-[45px] pointer-events-none md:hidden" />

      {/* 3. Deep Indigo / Violet Nebula on the left for chromatic luxury depth */}
      <div className="absolute top-1/4 -left-28 w-[560px] h-[560px] rounded-full bg-indigo-600/[0.08] blur-[160px] pointer-events-none hidden md:block" />

      {/* 4. Giant Luxury Editorial Watermark Typography */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-[13vw] font-black uppercase text-transparent tracking-tighter select-none pointer-events-none whitespace-nowrap opacity-[0.032] -rotate-2 overflow-hidden leading-none"
        style={{ WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.7)" }}
      >
        SUBHASH KETAGODA
      </div>

      {/* 5. Subtle Warm Floor Grounding Reflection */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-orange-500/[0.06] via-amber-500/[0.015] to-transparent pointer-events-none" />

      {/* 6. High-Tech Cyber Dot Matrix with Radial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 20%, transparent 80%)",
        }}
      />

      {/* 7. Subtle Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] hidden sm:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "84px 84px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* 8. Precision Geometric Constellation Vectors (Desktop only) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.16] hidden md:block" viewBox="0 0 1440 900" fill="none">
        <circle cx="1120" cy="450" r="280" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="0.8" strokeDasharray="4 8" />
        <circle cx="1120" cy="450" r="340" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
        <line x1="160" y1="180" x2="480" y2="180" stroke="rgba(249, 115, 22, 0.25)" strokeWidth="0.8" strokeDasharray="2 6" />
        <line x1="160" y1="180" x2="160" y2="340" stroke="rgba(249, 115, 22, 0.25)" strokeWidth="0.8" strokeDasharray="2 6" />
        <circle cx="160" cy="180" r="3" fill="#ff8a00" />
        <circle cx="480" cy="180" r="2" fill="#ffa534" />
      </svg>

      {/* 9. Precision HUD Coordinate Crosshairs */}
      <div className="absolute top-28 left-8 sm:left-14 font-mono text-[10px] text-orange-400/30 select-none pointer-events-none hidden sm:flex items-center gap-1.5 tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
        <span>+ 01 / 79.86°E [COLOMBO]</span>
      </div>
      <div className="absolute top-28 right-8 sm:right-16 font-mono text-[10px] text-orange-400/30 select-none pointer-events-none hidden sm:flex items-center gap-1.5 tracking-widest">
        <span>+ 02 / 6.92°N [DEV]</span>
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
      </div>
      <div className="absolute bottom-16 left-8 sm:left-14 font-mono text-[10px] text-orange-400/25 select-none pointer-events-none hidden sm:block tracking-widest">
        + BESPOKE ARCHITECTURE
      </div>

      {/* 10. Floating Ambient Luminous Dust Particles (Desktop only) */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-orange-400/60 blur-[0.5px] animate-float pointer-events-none hidden md:block shadow-[0_0_10px_#ff8a00]" />
      <div
        className="absolute top-1/2 right-1/3 w-2.5 h-2.5 rounded-full bg-amber-400/50 blur-[1px] animate-float pointer-events-none hidden md:block shadow-[0_0_12px_#ffa534]"
        style={{ animationDelay: "2s", animationDuration: "7s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-orange-300/55 blur-[0.5px] animate-float pointer-events-none hidden md:block"
        style={{ animationDelay: "4s", animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-amber-300/50 blur-[0.5px] animate-float pointer-events-none hidden md:block"
        style={{ animationDelay: "1s", animationDuration: "6.5s" }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Heading, Subtitle, Bio, CTAs, Status, Socials */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
            <span>&mdash;</span>
            <span>HELLO, I&apos;M</span>
            <span>&mdash;</span>
          </div>

          {/* Main Title: Subhash Ketagoda - Large, bold, commanding editorial scale */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.85rem] font-black tracking-tight text-white leading-[1.0] drop-shadow-sm">
            Subhash{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 drop-shadow-[0_0_40px_rgba(255,138,0,0.3)]">
              Ketagoda
            </span>
          </h1>

          {/* Typing Subtitle with blinking orange cursor */}
          <div className="h-9 sm:h-11 flex items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200">
              {typedTitle}
              <span className={`text-orange-500 font-normal ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
                |
              </span>
            </span>
          </div>

          {/* Bio Description */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            I build exceptional digital experiences with modern technologies. Passionate about clean code, scalable solutions, and turning ideas into reality.
          </p>

          {/* CTA Buttons matching reference 1:1 */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xs sm:text-sm tracking-wider hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              <span>HIRE ME</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#121218]/90 border border-white/10 text-gray-200 font-semibold text-xs sm:text-sm tracking-wider hover:border-orange-500/50 hover:text-white hover:bg-[#1a1a24] transition-all duration-300 shadow-md"
            >
              <span>VIEW MY WORK</span>
              <ExternalLink className="w-4 h-4 text-orange-400" />
            </a>
          </div>

          {/* Available for freelance status */}
          <div className="flex items-center gap-2.5 pt-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-gray-400 font-medium">
              AVAILABLE FOR FREELANCE
            </span>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3 pt-3">
            <a
              href="https://github.com/Subashketagoda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="w-10 h-10 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 shadow-sm"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:subhashketagoda@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Seamless Cutout Portrait with Orbital Rings & Floating Badges */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-[340px] h-[480px] sm:w-[440px] sm:h-[580px] lg:w-[480px] lg:h-[620px] flex items-center justify-center">

            {/* Glowing Orange Orbital System BEHIND the cutout */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] pointer-events-none">
              {/* Outer soft ambient orange aura */}
              <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-[80px]" />

              {/* Outer Thin Concentric Orbital Ring */}
              <div className="absolute inset-0 rounded-full border border-orange-500/20" />

              {/* Dashed Orbital Track */}
              <div className="absolute inset-6 rounded-full border border-dashed border-orange-500/25 animate-spin-slow" />

              {/* Glowing High-Intensity Orange Arc (Desktop only, avoids mobile SVG filter CPU stalling) */}
              <svg className="absolute inset-0 w-full h-full animate-pulse-subtle hidden md:block" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff8a00" stopOpacity="1" />
                    <stop offset="50%" stopColor="#ffa534" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ff8a00" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 20,50 A 30,30 0 0,1 80,50"
                  fill="none"
                  stroke="url(#orbitGlow)"
                  strokeWidth="1.2"
                  filter="url(#glowFilter)"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="50" r="1.5" fill="#ff8a00" filter="url(#glowFilter)" />
                <circle cx="80" cy="50" r="1.5" fill="#ffa534" filter="url(#glowFilter)" />
              </svg>
            </div>

            {/* Seamless Cutout Portrait of Subash Ketagoda (NO box, NO rectangle border!) */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/images/subash-hero.png"
                alt="Subash Ketagoda - Full-Stack Developer"
                fill
                priority
                sizes="(max-width: 768px) 340px, (max-width: 1200px) 440px, 480px"
                className="object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] filter contrast-[1.04] brightness-[1.02]"
              />

              {/* Soft Bottom Shadow & Fade into background */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080b0f] via-[#080b0f]/60 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badges & Achievement Chips Around Portrait */}

            {/* 1. Top-Left: 6+ Years Experience Achievement Card */}
            <div
              className="absolute -top-3 -left-2 sm:-left-8 z-20 flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-2xl bg-[#0f1118]/95 border border-orange-500/40 shadow-xl shadow-orange-500/10 backdrop-blur-md animate-float"
              style={{ animationDuration: "6s" }}
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                ⭐
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider leading-none">
                  EXPERIENCE
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  6+ Years Pro
                </div>
              </div>
            </div>

            {/* 2. Top-Right: React.js Badge */}
            <div
              className="absolute top-2 right-0 sm:right-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121218]/90 border border-cyan-500/30 shadow-lg backdrop-blur-md animate-float"
              style={{ animationDelay: "1s", animationDuration: "5.5s" }}
            >
              <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 115.3 100">
                <circle cx="57.7" cy="50" r="10" fill="currentColor" />
                <ellipse cx="57.7" cy="50" rx="50" ry="18.5" fill="none" stroke="currentColor" strokeWidth="4" />
                <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(60 57.7 50)" fill="none" stroke="currentColor" strokeWidth="4" />
                <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(120 57.7 50)" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
              <span className="text-xs font-semibold text-gray-200">React.js</span>
            </div>

            {/* 3. Top-Center-Right: Next.js Pill */}
            <div
              className="absolute top-14 right-1/4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121218]/90 border border-white/20 shadow-lg backdrop-blur-md animate-float"
              style={{ animationDelay: "3s", animationDuration: "7s" }}
            >
              <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-black font-black text-[9px]">
                N
              </div>
              <span className="text-xs font-semibold text-gray-200">Next.js 14</span>
            </div>

            {/* 4. Mid-Left: Node.js Badge */}
            <div
              className="absolute top-1/3 -left-3 sm:-left-8 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121218]/90 border border-green-500/30 shadow-lg backdrop-blur-md animate-float"
              style={{ animationDelay: "2s", animationDuration: "6.5s" }}
            >
              <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500 flex items-center justify-center text-[9px] font-bold text-green-400">
                ⬡
              </div>
              <span className="text-xs font-semibold text-gray-200">Node.js</span>
            </div>

            {/* 5. Mid-Right: Custom POS Engines Badge */}
            <div
              className="absolute top-[38%] -right-3 sm:-right-8 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121218]/95 border border-orange-500/35 shadow-xl shadow-orange-500/10 backdrop-blur-md animate-float"
              style={{ animationDelay: "1.5s", animationDuration: "6.2s" }}
            >
              <div className="w-4 h-4 rounded bg-orange-500/20 border border-orange-500 flex items-center justify-center text-[9px] font-bold text-orange-400">
                POS
              </div>
              <span className="text-xs font-semibold text-orange-300">Custom POS</span>
            </div>

            {/* 6. Lower-Left: TypeScript Badge */}
            <div
              className="absolute bottom-24 -left-2 sm:-left-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121218]/90 border border-blue-500/30 shadow-lg backdrop-blur-md animate-float"
              style={{ animationDelay: "2.5s", animationDuration: "5.8s" }}
            >
              <div className="w-3.5 h-3.5 rounded-sm bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white">
                TS
              </div>
              <span className="text-xs font-semibold text-gray-200">TypeScript</span>
            </div>

            {/* 7. Lower-Right: MongoDB Badge */}
            <div
              className="absolute bottom-28 -right-2 sm:-right-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121218]/90 border border-emerald-500/30 shadow-lg backdrop-blur-md animate-float"
              style={{ animationDelay: "3.5s", animationDuration: "7.2s" }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-600/20 flex items-center justify-center text-[10px] text-emerald-400">
                🍃
              </div>
              <span className="text-xs font-semibold text-gray-200">MongoDB</span>
            </div>

            {/* 8. Bottom-Left Lower: 40+ Projects Shipped Pill */}
            <div
              className="absolute bottom-6 left-1 sm:left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1017]/95 border border-amber-500/30 shadow-lg backdrop-blur-md animate-float"
              style={{ animationDelay: "4s", animationDuration: "6s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[11px] font-bold text-amber-300">40+ Projects</span>
            </div>

            {/* 9. Bottom-Right Lower: Tailwind CSS Badge */}
            <div
              className="absolute bottom-8 right-2 sm:right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121218]/90 border border-cyan-500/30 shadow-lg backdrop-blur-md animate-float"
              style={{ animationDelay: "2s", animationDuration: "6.8s" }}
            >
              <svg className="w-3.5 h-3.5 text-cyan-400 fill-current" viewBox="0 0 24 24">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <span className="text-[11px] font-semibold text-gray-200">Tailwind</span>
            </div>

          </div>
        </div>
      </div>

      {/* Animated Scroll Down Prompt */}
      <div className="pt-8 sm:pt-12 flex flex-col items-center justify-center relative z-20">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-semibold text-gray-400 group-hover:text-orange-400 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-orange-500/60 flex items-start justify-center p-1.5 transition-colors">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
