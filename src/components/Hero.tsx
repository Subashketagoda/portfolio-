"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("Full-Stack Developer");
  const [showCursor, setShowCursor] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, tiltX: 0, tiltY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((x - centerX) / centerX) * 3;
    const tiltY = -((y - centerY) / centerY) * 3;
    setMousePos({ x, y, tiltX, tiltY });
  };

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
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative pt-20 md:pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-[#080b0f]"
    >
      {/* Interactive Cursor Spotlight Glow (Smooth tracking on desktop) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x || 600}px ${mousePos.y || 400}px, rgba(249, 115, 22, 0.08), transparent 75%)`,
        }}
      />

      {/* Top Horizon Line with Center Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/35 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-[2px] pointer-events-none" />

      {/* 1. Dynamic Angled Chevron Stripes (Inspired by reference, matching brand colors) */}
      <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[48%] pointer-events-none overflow-hidden z-0">
        <svg
          className="w-full h-full opacity-65 sm:opacity-75 object-cover"
          viewBox="0 0 600 850"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="chevGrad1" x1="100%" y1="0%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#ff8a00" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#ea580c" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="chevGrad2" x1="100%" y1="0%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#c2410c" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#431407" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="chevGrad3" x1="100%" y1="0%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#c2410c" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#1c0a04" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Innermost Dynamic Chevron */}
          <path
            d="M 450 -20 L 150 425 L 450 870"
            stroke="url(#chevGrad1)"
            strokeWidth="80"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* Animated Electric Energy Tracer along Chevron 1 */}
          <path
            d="M 450 -20 L 150 425 L 450 870"
            stroke="rgba(255, 173, 66, 0.9)"
            strokeWidth="3"
            strokeDasharray="90 350"
            className="animate-laser-pulse"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 8px #ff8a00)" }}
          />

          {/* Middle Dynamic Chevron */}
          <path
            d="M 630 -20 L 330 425 L 630 870"
            stroke="url(#chevGrad2)"
            strokeWidth="95"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* Animated Electric Energy Tracer along Chevron 2 */}
          <path
            d="M 630 -20 L 330 425 L 630 870"
            stroke="rgba(255, 138, 0, 0.75)"
            strokeWidth="2.5"
            strokeDasharray="75 420"
            className="animate-laser-pulse"
            style={{ animationDelay: "1.4s", animationDuration: "3.6s", filter: "drop-shadow(0 0 6px #ea580c)" }}
            strokeLinecap="round"
          />

          {/* Outer Dynamic Chevron */}
          <path
            d="M 810 -20 L 510 425 L 810 870"
            stroke="url(#chevGrad3)"
            strokeWidth="110"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>

        {/* Seamless edge fade into black background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080b0f] via-transparent to-[#080b0f]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-[#080b0f]/40 pointer-events-none" />
      </div>

      {/* 2. Primary Radiant Orange Aura behind the portrait */}
      <div className="absolute -top-12 right-0 sm:right-12 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-orange-500/26 via-amber-500/15 to-transparent blur-[130px] pointer-events-none hidden md:block animate-pulse-subtle" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-500/18 blur-[50px] pointer-events-none md:hidden" />

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

      {/* 8. Precision Geometric HUD Vectors (Desktop only) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.16] hidden md:block" viewBox="0 0 1440 900" fill="none">
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

      {/* 10. Floating Ambient Luminous Dust & Ember Sparks (Desktop & Tablet) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-orange-400/70 blur-[0.5px] animate-float shadow-[0_0_10px_#ff8a00]" />
        <div
          className="absolute top-1/2 right-1/3 w-2.5 h-2.5 rounded-full bg-amber-400/60 blur-[1px] animate-float-slow shadow-[0_0_12px_#ffa534]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-orange-300/65 blur-[0.5px] animate-float shadow-[0_0_8px_#ff8a00]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-amber-300/60 blur-[0.5px] animate-float shadow-[0_0_9px_#ffa534]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-2/3 right-1/5 w-1.5 h-1.5 rounded-full bg-orange-400/70 blur-[0.5px] animate-float-slow shadow-[0_0_8px_#ff8a00]"
          style={{ animationDelay: "3.5s" }}
        />
        <div
          className="absolute bottom-1/5 left-1/6 w-1.5 h-1.5 rounded-full bg-amber-400/50 blur-[0.5px] animate-float shadow-[0_0_6px_#ffa534]"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Heading, Subtitle, Bio, CTAs, Status, Socials */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
            <span>&mdash;</span>
            <span>HELLO, I&apos;M</span>
            <span>&mdash;</span>
          </div>

          {/* Main Title: Subhash Ketagoda - Large, bold, commanding editorial scale with Animated Shimmer */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.85rem] font-black tracking-tight text-white leading-[1.0] drop-shadow-sm">
            Subhash{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_40px_rgba(255,138,0,0.35)]">
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

          {/* CTA Buttons matching reference 1:1 with Glow & Shimmer Sheen */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xs sm:text-sm tracking-wider hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/45 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none" />
              <span className="relative z-10">HIRE ME</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#121218]/90 border border-white/10 text-gray-200 font-semibold text-xs sm:text-sm tracking-wider hover:border-orange-500/50 hover:text-white hover:bg-[#1a1a24] hover:scale-[1.02] transition-all duration-300 shadow-md"
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
              className="w-10 h-10 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 hover:bg-orange-500/10 hover:scale-110 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 hover:bg-orange-500/10 hover:scale-110 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="w-10 h-10 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 hover:bg-orange-500/10 hover:scale-110 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 shadow-sm"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:subhashketagoda@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-xl bg-[#121218] border border-white/[0.08] hover:border-orange-500/50 hover:bg-orange-500/10 hover:scale-110 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Technologies I work with (Matching reference image 1:1 with Hover Glow) */}
          <div className="pt-2 space-y-2.5">
            <p className="text-xs font-mono text-gray-400 tracking-wider">
              Technologies I work with:
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {/* React */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b] border border-white/[0.08] text-cyan-400 text-xs font-semibold hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:scale-105 transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-4 h-4" viewBox="0 0 115.3 100">
                  <circle cx="57.7" cy="50" r="10" fill="currentColor" />
                  <ellipse cx="57.7" cy="50" rx="50" ry="18.5" fill="none" stroke="currentColor" strokeWidth="5" />
                  <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(60 57.7 50)" fill="none" stroke="currentColor" strokeWidth="5" />
                  <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(120 57.7 50)" fill="none" stroke="currentColor" strokeWidth="5" />
                </svg>
                <span className="text-gray-200">React</span>
              </div>

              {/* JavaScript */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b] border border-white/[0.08] text-yellow-400 text-xs font-semibold hover:border-yellow-500/50 hover:shadow-[0_0_12px_rgba(234,179,8,0.25)] hover:scale-105 transition-all duration-200 cursor-default shadow-sm">
                <span className="w-4 h-4 rounded bg-yellow-400 text-black font-black text-[10px] flex items-center justify-center">JS</span>
                <span className="text-gray-200">JavaScript</span>
              </div>

              {/* TypeScript */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b] border border-white/[0.08] text-blue-400 text-xs font-semibold hover:border-blue-500/50 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] hover:scale-105 transition-all duration-200 cursor-default shadow-sm">
                <span className="w-4 h-4 rounded bg-blue-600 text-white font-black text-[10px] flex items-center justify-center">TS</span>
                <span className="text-gray-200">TypeScript</span>
              </div>

              {/* Node.js */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b] border border-white/[0.08] text-emerald-400 text-xs font-semibold hover:border-emerald-500/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] hover:scale-105 transition-all duration-200 cursor-default shadow-sm">
                <span className="text-emerald-400 font-bold text-sm leading-none">⬡</span>
                <span className="text-gray-200">Node.js</span>
              </div>

              {/* Next.js */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b] border border-white/[0.08] text-white text-xs font-semibold hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200 cursor-default shadow-sm">
                <span className="w-4 h-4 rounded-full bg-white text-black font-black text-[9px] flex items-center justify-center">N</span>
                <span className="text-gray-200">Next.js</span>
              </div>

              {/* MongoDB */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b] border border-white/[0.08] text-green-400 text-xs font-semibold hover:border-green-500/50 hover:shadow-[0_0_12px_rgba(34,197,94,0.25)] hover:scale-105 transition-all duration-200 cursor-default shadow-sm">
                <span className="text-green-400 text-sm">🍃</span>
                <span className="text-gray-200">MongoDB</span>
              </div>

              {/* Tailwind */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b] border border-white/[0.08] text-cyan-400 text-xs font-semibold hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:scale-105 transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
                <span className="text-gray-200">Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Hero Cutout Portrait with Cinematic Breathing Rim Light & Parallax */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-[340px] h-[480px] sm:w-[440px] sm:h-[580px] lg:w-[480px] lg:h-[620px] flex items-center justify-center">

            {/* Deep Warm Cinematic Breathing Rim Spotlight behind Subhash */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] pointer-events-none animate-pulse-slow">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600/40 via-orange-500/26 to-amber-500/12 blur-[105px]" />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-amber-500/30 blur-[60px]" />
            </div>

            {/* Seamless Cutout Portrait of Subash Ketagoda (Interactive subtle parallax depth) */}
            <div
              className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.tiltX}deg) rotateX(${mousePos.tiltY}deg)`,
              }}
            >
              <Image
                src="/images/subash-hero.png"
                alt="Subash Ketagoda - Full-Stack Developer"
                fill
                priority
                sizes="(max-width: 768px) 340px, (max-width: 1200px) 440px, 480px"
                className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.92)] filter contrast-[1.05] brightness-[1.02]"
              />

              {/* Soft Bottom Shadow & Fade into background */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080b0f] via-[#080b0f]/60 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badges & Achievement Chips Around Portrait (Restored by user request) */}

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
