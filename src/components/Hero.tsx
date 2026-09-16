"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Terminal,
  Copy,
  Check,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Server,
  Database,
  Globe,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"profile" | "code" | "architecture">("profile");
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, tiltX: 0, tiltY: 0 });
  const [typedTitle, setTypedTitle] = useState("Full-Stack Developer");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = [
      "Full-Stack Developer",
      "Next.js & React Architect",
      "Senior Software Engineer",
      "Creative Web Developer",
      "MERN Stack Specialist",
      "Custom POS & Billing Engineer",
      "Digital Systems Architect",
      "TypeScript & API Specialist",
      "UI/UX Design Technologist",
      "Distributed Systems Engineer",
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    let typingTimer: NodeJS.Timeout;

    const tick = () => {
      const currentTitle = titles[titleIndex];

      if (!isDeleting) {
        setTypedTitle(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          typingTimer = setTimeout(tick, 1800);
          return;
        }
        typingTimer = setTimeout(tick, 85);
      } else {
        setTypedTitle(currentTitle.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          typingTimer = setTimeout(tick, 400);
          return;
        }
        typingTimer = setTimeout(tick, 45);
      }
    };

    typingTimer = setTimeout(tick, 400);

    return () => {
      clearTimeout(typingTimer);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((x - centerX) / centerX) * 4;
    const tiltY = -((y - centerY) / centerY) * 4;
    setMousePos({ x, y, tiltX, tiltY });
  };

  const copyCommand = () => {
    navigator.clipboard.writeText("npx subhash-ketagoda");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-[#080b0f]"
    >
      {/* 1. Precision Cyber Grid Background with Radial Mask */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 80%)",
        }}
      />

      {/* 2. Ambient Studio Rim Light behind work area */}
      <div className="absolute top-1/4 right-1/12 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-orange-500/18 via-amber-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full bg-orange-600/[0.06] blur-[150px] pointer-events-none" />

      {/* 3. High-Tech Precision Vector Crosshairs & Telemetry */}
      <div className="absolute top-24 left-8 sm:left-14 font-mono text-[10px] text-orange-400/40 select-none pointer-events-none hidden sm:flex items-center gap-2 tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>SYS_STATUS: LIVE IN PRODUCTION [79.86°E : COLOMBO]</span>
      </div>
      <div className="absolute top-24 right-8 sm:right-16 font-mono text-[10px] text-orange-400/40 select-none pointer-events-none hidden sm:flex items-center gap-2 tracking-widest">
        <span>ARCH: NEXT.JS 15 // TS 5 // DISTRIBUTED</span>
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* =========================================================================
            LEFT COLUMN: Commanding Senior Developer Identity, Telemetry & Actions
           ========================================================================= */}
        <div className="lg:col-span-7 space-y-7">
          {/* Clean Minimal Eyebrow matching reference */}
          <div className="flex items-center gap-2 text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
            <span>&mdash;</span>
            <span>HELLO, I&apos;M</span>
            <span>&mdash;</span>
          </div>

          {/* Main Title: Bold, Sharp, Authority */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white leading-[1.0]">
              Subhash{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Ketagoda
              </span>
            </h1>
            {/* Dynamic Typewriter Subtitle with blinking orange cursor */}
            <div className="h-9 sm:h-12 flex items-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 font-mono tracking-tight flex items-center">
                <span className="text-orange-400 mr-2 font-bold">//</span>
                <span>{typedTitle}</span>
                <span className={`text-orange-500 font-normal ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
                  |
                </span>
              </span>
            </div>
          </div>

          {/* Senior Bio Paragraph */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Engineering fault-tolerant web applications, enterprise POS billing engines, and high-performance digital platforms. Focused on clean architecture, sub-second latency, and scalable systems built with Next.js, TypeScript, and modern distributed stacks.
          </p>

          {/* Developer Telemetry Grid (Real Engineering Metrics) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-[#0f1118] border border-white/[0.08] hover:border-orange-500/40 transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-orange-400 group-hover:scale-105 transition-transform">
                6+
              </div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">
                Years Experience
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0f1118] border border-white/[0.08] hover:border-orange-500/40 transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-orange-400 group-hover:scale-105 transition-transform">
                40+
              </div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">
                Production Shipped
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0f1118] border border-white/[0.08] hover:border-orange-500/40 transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 group-hover:scale-105 transition-transform">
                99.9%
              </div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">
                Uptime &amp; SLA
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0f1118] border border-white/[0.08] hover:border-orange-500/40 transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 group-hover:scale-105 transition-transform">
                &lt;45ms
              </div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">
                P99 Edge Latency
              </div>
            </div>
          </div>

          {/* Action CTAs + Interactive Terminal Quick Command */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xs sm:text-sm tracking-wider hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/45 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none" />
                <span className="relative z-10">HIRE SENIOR DEV</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#12141d] border border-white/10 text-gray-200 font-semibold text-xs sm:text-sm tracking-wider hover:border-orange-500/50 hover:text-white hover:bg-[#1a1c28] transition-all duration-300 shadow-md"
              >
                <span>EXPLORE SYSTEMS</span>
                <ExternalLink className="w-4 h-4 text-orange-400" />
              </a>
            </div>

            {/* Interactive Developer CLI Prompt with Copy Feature */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0c0e15] border border-white/[0.08] text-xs font-mono text-gray-300">
              <Terminal className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-gray-500">$</span>
              <span className="text-gray-200">npx subhash-ketagoda</span>
              <button
                onClick={copyCommand}
                aria-label="Copy npx command"
                className="ml-2 p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Socials & Tech Dock */}
          <div className="pt-2 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Subashketagoda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-[#12141c] border border-white/[0.08] hover:border-orange-500/50 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-[#12141c] border border-white/[0.08] hover:border-orange-500/50 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:subhashketagoda@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-[#12141c] border border-white/[0.08] hover:border-orange-500/50 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Clean, Refined Stack Chips with Authentic Logos */}
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 flex-wrap">
              <span className="text-gray-500 uppercase text-[10px] font-bold tracking-wider">CORE:</span>

              {/* Next.js 15 */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-white/30 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center text-black font-black text-[9px] leading-none shrink-0 shadow-sm">
                  N
                </div>
                <span className="text-gray-200 text-xs font-semibold font-sans">Next.js 15</span>
              </div>

              {/* React 19 */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 115.3 100" fill="currentColor">
                  <circle cx="57.7" cy="50" r="10" />
                  <ellipse cx="57.7" cy="50" rx="50" ry="18.5" fill="none" stroke="currentColor" strokeWidth="5" />
                  <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(60 57.7 50)" fill="none" stroke="currentColor" strokeWidth="5" />
                  <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(120 57.7 50)" fill="none" stroke="currentColor" strokeWidth="5" />
                </svg>
                <span className="text-gray-200 text-xs font-semibold font-sans">React 19</span>
              </div>

              {/* TypeScript */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(49,120,198,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded bg-[#3178C6] text-white font-black text-[9px] flex items-center justify-center leading-none shrink-0 shadow-sm">
                  TS
                </div>
                <span className="text-gray-200 text-xs font-semibold font-sans">TypeScript</span>
              </div>

              {/* Node.js */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(104,160,99,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded bg-[#68A063]/20 border border-[#68A063] text-[#68A063] font-bold text-[9px] flex items-center justify-center leading-none shrink-0 shadow-sm">
                  ⬡
                </div>
                <span className="text-gray-200 text-xs font-semibold font-sans">Node.js</span>
              </div>

              {/* PostgreSQL */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-[#4169E1]/40 hover:shadow-[0_0_12px_rgba(65,105,225,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded bg-[#4169E1]/20 border border-[#4169E1] text-[#4169E1] font-black text-[9px] flex items-center justify-center leading-none shrink-0 shadow-sm">
                  PG
                </div>
                <span className="text-gray-200 text-xs font-semibold font-sans">PostgreSQL</span>
              </div>

              {/* MongoDB */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(34,197,94,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded-full bg-[#47A248]/20 flex items-center justify-center text-[#47A248] text-[11px] leading-none shrink-0">
                  🍃
                </div>
                <span className="text-gray-200 text-xs font-semibold font-sans">MongoDB</span>
              </div>

              {/* Tailwind CSS */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3.5 h-3.5 text-cyan-400 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
                <span className="text-gray-200 text-xs font-semibold font-sans">Tailwind</span>
              </div>

              {/* Docker */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(36,150,237,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3.5 h-3.5 text-[#2496ED] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186" />
                </svg>
                <span className="text-gray-200 text-xs font-semibold font-sans">Docker</span>
              </div>

              {/* AWS */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-amber-500/40 hover:shadow-[0_0_12px_rgba(255,153,0,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded bg-[#FF9900]/20 border border-[#FF9900] text-[#FF9900] font-black text-[8px] flex items-center justify-center leading-none shrink-0 shadow-sm">
                  AWS
                </div>
                <span className="text-gray-200 text-xs font-semibold font-sans">AWS</span>
              </div>

              {/* Redis */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-red-500/40 hover:shadow-[0_0_12px_rgba(220,56,45,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded bg-[#DC382D]/20 border border-[#DC382D] text-[#DC382D] font-bold text-[8px] flex items-center justify-center leading-none shrink-0 shadow-sm">
                  RD
                </div>
                <span className="text-gray-200 text-xs font-semibold font-sans">Redis</span>
              </div>

              {/* REST APIs */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded bg-emerald-500/20 border border-emerald-500 text-emerald-400 font-bold text-[8px] flex items-center justify-center leading-none shrink-0 shadow-sm">
                  API
                </div>
                <span className="text-gray-200 text-xs font-semibold font-sans">REST APIs</span>
              </div>

              {/* Custom POS */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-[0_0_12px_rgba(255,138,0,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <div className="w-3.5 h-3.5 rounded bg-orange-500/20 border border-orange-500 text-orange-400 font-bold text-[8px] flex items-center justify-center leading-none shrink-0 shadow-sm">
                  POS
                </div>
                <span className="text-orange-300 text-xs font-semibold font-sans">Custom POS</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: The Senior Developer Bento Workstation / Interactive IDE Console
           ========================================================================= */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div
            className="w-full max-w-[500px] rounded-2xl bg-[#0e1017]/95 border border-white/[0.12] shadow-2xl shadow-orange-500/5 backdrop-blur-xl overflow-hidden transition-all duration-300"
            style={{
              transform: `perspective(1200px) rotateY(${mousePos.tiltX}deg) rotateX(${mousePos.tiltY}deg)`,
            }}
          >
            {/* macOS / Linux Terminal Window Header */}
            <div className="px-4 py-3 bg-[#131520] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-gray-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-orange-400" />
                  subhash-terminal ~ zsh
                </span>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>main (clean)</span>
              </div>
            </div>

            {/* Interactive Tabs Switcher */}
            <div className="flex border-b border-white/[0.08] bg-[#0c0e14] px-2 pt-2 gap-1 text-xs font-mono">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-3 py-1.5 rounded-t-lg flex items-center gap-1.5 transition-all ${
                  activeTab === "profile"
                    ? "bg-[#0e1017] text-orange-400 border-t-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>portrait.view</span>
              </button>

              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1.5 rounded-t-lg flex items-center gap-1.5 transition-all ${
                  activeTab === "code"
                    ? "bg-[#0e1017] text-orange-400 border-t-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>engineer.ts</span>
              </button>

              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-3 py-1.5 rounded-t-lg flex items-center gap-1.5 transition-all ${
                  activeTab === "architecture"
                    ? "bg-[#0e1017] text-orange-400 border-t-2 border-orange-500"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>architecture.json</span>
              </button>
            </div>

            {/* Tab 1: Profile View (Portrait + Telemetry HUD) */}
            {activeTab === "profile" && (
              <div className="relative p-6 flex flex-col items-center justify-center min-h-[440px]">
                {/* Subtle Amber Portrait Rim Halo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-orange-500/15 blur-[65px] pointer-events-none" />

                {/* Subhash Hero Cutout Image */}
                <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] z-10 flex items-end justify-center">
                  <Image
                    src="/images/subash-hero.png"
                    alt="Subhash Ketagoda - Senior Full-Stack Engineer"
                    fill
                    priority
                    sizes="320px"
                    className="object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] filter contrast-[1.04]"
                  />
                  {/* Subtle fade at the bottom into card */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0e1017] to-transparent pointer-events-none" />
                </div>

                {/* Docked High-Tech Badge HUD Overlay (Top-Right) */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-[#141724]/90 border border-orange-500/30 font-mono text-[11px] text-orange-300 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PRODUCTION TESTED</span>
                </div>

                {/* Docked High-Tech Badge HUD Overlay (Bottom-Left) */}
                <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-[#141724]/90 border border-white/10 font-mono text-[11px] text-gray-200 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>CUSTOM POS SPECIALIST</span>
                </div>

                {/* Docked High-Tech Badge HUD Overlay (Bottom-Right) */}
                <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-[#141724]/90 border border-white/10 font-mono text-[11px] text-gray-200 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GLOBAL EDGE DEPLOY</span>
                </div>
              </div>
            )}

            {/* Tab 2: Live Code Inspector View (engineer.ts) */}
            {activeTab === "code" && (
              <div className="p-5 font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto min-h-[440px] bg-[#090b10]">
                <div className="text-gray-500">// TypeScript Enterprise Profile Definition</div>
                <div className="mt-2">
                  <span className="text-purple-400">interface</span> <span className="text-yellow-300">StaffEngineer</span> {"{"}
                </div>
                <div className="pl-4 text-gray-300">
                  name: <span className="text-emerald-300">&quot;Subhash Ketagoda&quot;</span>;
                </div>
                <div className="pl-4 text-gray-300">
                  role: <span className="text-emerald-300">&quot;Senior Full-Stack &amp; Digital Architect&quot;</span>;
                </div>
                <div className="pl-4 text-gray-300">
                  location: <span className="text-emerald-300">&quot;Colombo, Sri Lanka [Remote Worldwide]&quot;</span>;
                </div>
                <div className="pl-4 text-gray-300">
                  specialization: <span className="text-blue-400">string</span>[];
                </div>
                <div className="pl-4 text-gray-300">
                  status: <span className="text-orange-400">&quot;AVAILABLE_FOR_CONTRACT&quot;</span>;
                </div>
                <div>{"}"}</div>

                <div className="mt-4">
                  <span className="text-purple-400">export const</span> <span className="text-blue-300">Subhash</span>: <span className="text-yellow-300">StaffEngineer</span> = {"{"}
                </div>
                <div className="pl-4">
                  name: <span className="text-emerald-300">&quot;Subhash Ketagoda&quot;</span>,
                </div>
                <div className="pl-4">
                  role: <span className="text-emerald-300">&quot;Senior Full-Stack &amp; Digital Architect&quot;</span>,
                </div>
                <div className="pl-4">
                  location: <span className="text-emerald-300">&quot;Colombo, Sri Lanka&quot;</span>,
                </div>
                <div className="pl-4">
                  specialization: [
                </div>
                <div className="pl-8 text-cyan-300">&quot;Next.js 15 App Router &amp; Server Actions&quot;,</div>
                <div className="pl-8 text-cyan-300">&quot;Distributed REST &amp; GraphQL Architectures&quot;,</div>
                <div className="pl-8 text-cyan-300">&quot;High-Volume Custom POS Billing Engines&quot;,</div>
                <div className="pl-8 text-cyan-300">&quot;Database Optimization (Postgres &amp; Mongo)&quot;,</div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  status: <span className="text-orange-400">&quot;AVAILABLE_FOR_CONTRACT&quot;</span>,
                </div>
                <div>{"};"}</div>

                <div className="mt-4 pt-3 border-t border-white/10 text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>// Build passed: 0 errors, 0 warnings (0.34s)</span>
                </div>
              </div>
            )}

            {/* Tab 3: Architecture Matrix View (architecture.json) */}
            {activeTab === "architecture" && (
              <div className="p-5 font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto min-h-[440px] bg-[#090b10] space-y-3">
                <div className="text-gray-500">// System Architecture &amp; Production Stack</div>

                <div className="p-3 rounded-lg bg-[#11141e] border border-white/[0.08] space-y-1">
                  <div className="text-orange-400 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>01. FRONTEND ARCHITECTURE</span>
                  </div>
                  <div className="text-gray-400 text-[11px]">
                    Next.js 15 (App Router, Server Actions), React 19, TypeScript, Tailwind CSS, Framer Motion, Core Web Vitals (99+ score).
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#11141e] border border-white/[0.08] space-y-1">
                  <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    <span>02. BACKEND &amp; TRANSACTION ENGINES</span>
                  </div>
                  <div className="text-gray-400 text-[11px]">
                    Node.js, Express, Microservices, Custom POS Billing &amp; Inventory Engines, Secure JWT/OAuth2 Auth, WebSockets.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#11141e] border border-white/[0.08] space-y-1">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>03. DATA LAYER &amp; STORAGE</span>
                  </div>
                  <div className="text-gray-400 text-[11px]">
                    PostgreSQL, MongoDB, Redis In-Memory Caching, ACID compliance for financial POS operations, Prisma ORM.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#11141e] border border-white/[0.08] space-y-1">
                  <div className="text-purple-400 font-semibold flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>04. INFRASTRUCTURE &amp; CI/CD</span>
                  </div>
                  <div className="text-gray-400 text-[11px]">
                    Docker, AWS S3/EC2, Vercel Edge Network, GitHub Actions, Automated Testing, Cloudflare CDN.
                  </div>
                </div>
              </div>
            )}

            {/* Console Footer Status Bar */}
            <div className="px-4 py-2 bg-[#0c0e14] border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-orange-400">UTF-8</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>P99: 24ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Down Indicator */}
      <div className="pt-10 flex flex-col items-center justify-center relative z-20">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors cursor-pointer"
          aria-label="Scroll down to Explore section"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-400 group-hover:text-orange-400 transition-colors">
            EXPLORE ARCHITECTURE &amp; WORK
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-orange-500/60 flex items-start justify-center p-1.5 transition-colors">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
