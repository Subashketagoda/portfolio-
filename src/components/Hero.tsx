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
import HeroBackground from "./HeroBackground";

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
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((x - centerX) / centerX) * 3;
    const tiltY = -((y - centerY) / centerY) * 3;
    setMousePos({ x, y, tiltX, tiltY });
  };

  const copyCommand = () => {
    navigator.clipboard.writeText("npx subhash-ketagoda");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-transparent"
    >
      {/* Interactive High-Tech Cyber Hero Background & Effects */}
      <HeroBackground mousePos={{ x: mousePos.x, y: mousePos.y }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center lg:items-start relative z-10">
        {/* =========================================================================
            LEFT COLUMN: Commanding Senior Developer Identity, Telemetry & Actions
           ========================================================================= */}
        <div className="lg:col-span-7 min-w-0 w-full space-y-5 sm:space-y-6">
          {/* Main Title & Eyebrow Group with tight, compact spacing */}
          <div className="flex flex-col gap-0 sm:gap-0.5">
            {/* Clean Prominent Eyebrow */}
            <div className="flex items-center gap-2 text-orange-500 font-mono text-base sm:text-lg md:text-xl font-bold tracking-[0.22em] uppercase leading-none">
              <span className="text-orange-400 font-black text-lg sm:text-xl leading-none">&mdash;</span>
              <span className="tracking-[0.22em] leading-none">HELLO, I&apos;M</span>
              <span className="text-orange-400 font-black text-lg sm:text-xl leading-none">&mdash;</span>
            </div>

            {/* Main Title: Bold, Majestic, Larger on Mobile */}
            <h1 className="text-[2.65rem] xs:text-[2.85rem] sm:text-5xl md:text-6xl lg:text-[5.2rem] font-black tracking-tight text-white leading-[1.02] sm:leading-[1.0] break-words mt-0">
              Subhash{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Ketagoda
              </span>
            </h1>
          </div>
            {/* Dynamic Typewriter Subtitle with blinking orange cursor */}
            <div className="min-h-[2.25rem] sm:min-h-[2.75rem] flex items-center">
              <span className="text-base sm:text-2xl md:text-3xl font-semibold text-gray-200 font-mono tracking-tight flex items-center flex-wrap break-words max-w-full">
                <span className="text-orange-400 mr-2 font-bold shrink-0">//</span>
                <span className="break-all sm:break-normal">{typedTitle}</span>
                <span className={`text-orange-500 font-normal ml-1 shrink-0 ${showCursor ? "opacity-100" : "opacity-0"}`}>
                  |
                </span>
              </span>
            </div>

          {/* Senior Bio Paragraph */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            Engineering fault-tolerant web applications, enterprise POS billing engines, and high-performance digital platforms. Focused on clean architecture, sub-second latency, and scalable systems built with Next.js, TypeScript, and modern distributed stacks.
          </p>

          {/* Developer Telemetry Grid (Real Engineering Metrics) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-1">
            <div className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-b from-[#141824]/90 to-[#0c0e16]/95 border border-white/[0.09] hover:border-orange-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.18)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl sm:text-3xl font-bold font-mono text-white group-hover:text-orange-400 group-hover:scale-105 transition-all">
                  6<span className="text-orange-500">+</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                Years Experience
              </div>
            </div>

            <div className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-b from-[#141824]/90 to-[#0c0e16]/95 border border-white/[0.09] hover:border-orange-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.18)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl sm:text-3xl font-bold font-mono text-white group-hover:text-orange-400 group-hover:scale-105 transition-all">
                  40<span className="text-orange-500">+</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                Production Shipped
              </div>
            </div>

            <div className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-b from-[#141824]/90 to-[#0c0e16]/95 border border-white/[0.09] hover:border-emerald-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.18)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl sm:text-3xl font-bold font-mono text-emerald-400 group-hover:scale-105 transition-all">
                  99.9<span className="text-emerald-300">%</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                Uptime &amp; SLA
              </div>
            </div>

            <div className="relative p-3 sm:p-4 rounded-xl bg-gradient-to-b from-[#141824]/90 to-[#0c0e16]/95 border border-white/[0.09] hover:border-amber-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.18)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              <div className="flex items-center justify-between mb-1">
                <span className="text-xl sm:text-3xl font-bold font-mono text-amber-400 group-hover:scale-105 transition-all">
                  &lt;45<span className="text-xs text-gray-400">ms</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                P99 Edge Latency
              </div>
            </div>
          </div>

          {/* Action CTAs + Interactive Terminal Quick Command */}
          <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#booking"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-[length:200%_auto] hover:bg-right text-white font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_45px_rgba(249,115,22,0.55)] active:scale-98 sm:hover:scale-[1.02] transition-all duration-500 w-full sm:w-auto text-center cursor-pointer"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>BOOK A CALL / HIRE</span>
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-xl bg-[#121520]/80 backdrop-blur-md border border-white/12 text-gray-200 font-semibold text-xs sm:text-sm tracking-wider hover:border-orange-500/60 hover:text-white hover:bg-[#191e2e] transition-all duration-300 shadow-md hover:shadow-orange-500/15 w-full sm:w-auto text-center group"
              >
                <span>EXPLORE SYSTEMS</span>
                <ExternalLink className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Interactive Developer CLI Prompt with Copy Feature */}
            <div className="inline-flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3.5 px-4 py-2.5 rounded-xl bg-[#0c0f18]/95 border border-orange-500/20 text-[11px] sm:text-xs font-mono text-gray-300 max-w-full overflow-hidden shadow-inner shadow-orange-500/5">
              <div className="flex items-center gap-2 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <Terminal className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span className="text-gray-500 shrink-0">$</span>
                <span className="text-orange-200 font-semibold truncate">npx subhash-ketagoda</span>
              </div>
              <button
                onClick={copyCommand}
                aria-label="Copy npx command"
                className="ml-1 sm:ml-2 p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0 bg-white/5 border border-white/5"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Socials & Tech Dock */}
          <div className="pt-1 sm:pt-2 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-3">
            {/* Social Icons Row */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://github.com/Subashketagoda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#12141c] border border-white/[0.08] hover:border-orange-500/50 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-all shadow-sm"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#12141c] border border-white/[0.08] hover:border-orange-500/50 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-all shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="mailto:subhashketagoda@gmail.com"
                aria-label="Send Email"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#12141c] border border-white/[0.08] hover:border-orange-500/50 hover:text-orange-400 flex items-center justify-center text-gray-400 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.fiverr.com/apexgendigital/design-and-develop-a-modern-premium-business-website"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr Gig"
                title="Order on Fiverr"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#12141c] border border-white/[0.08] hover:border-[#1dbf73]/60 hover:text-[#1dbf73] flex items-center justify-center text-gray-400 transition-all shadow-sm group"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M23.002 12c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11zm-5.04-3.667h-2.12v-.785c0-.528.273-.787.82-.787h1.3v-2.02h-1.92c-1.932 0-2.88 1.058-2.88 3.125v.467h-1.428v2.02h1.428v6.905h2.68v-6.905h1.868l.252-2.02zm-8.828 0h-2.68v8.925h2.68V8.333zm-1.34-1.442c.86 0 1.558-.698 1.558-1.558 0-.86-.698-1.558-1.558-1.558-.86 0-1.558.698-1.558 1.558 0 .86.698 1.558 1.558 1.558z" />
                </svg>
              </a>

              <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />
            </div>

            {/* CORE chips: wrap neatly on mobile and desktop so all technologies are visible */}
            <div className="w-full min-w-0 py-0.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 flex-wrap">
                <span className="text-gray-500 uppercase text-[9px] font-bold tracking-wider shrink-0 mr-0.5">CORE:</span>

              {/* Next.js 15 */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-white/30 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" viewBox="0 0 180 180" fill="none">
                  <mask height="180" id="mask-next-core" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
                    <circle cx="90" cy="90" fill="black" r="90" />
                  </mask>
                  <g mask="url(#mask-next-core)">
                    <circle cx="90" cy="90" fill="black" stroke="white" strokeWidth="6" r="87" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#grad-next-1)" />
                    <rect fill="url(#grad-next-2)" height="72" width="12" x="115" y="54" />
                  </g>
                  <defs>
                    <linearGradient id="grad-next-1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad-next-2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">Next.js 15</span>
              </div>

              {/* React 19 */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#61DAFB] shrink-0" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                  <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                  <g stroke="#61DAFB" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">React 19</span>
              </div>

              {/* TypeScript */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(49,120,198,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 rounded-sm" viewBox="0 0 128 128">
                  <rect width="128" height="128" rx="16" fill="#3178C6" />
                  <path d="M72.2 87.8c2.8 3.5 6.8 5.7 11.5 5.7 6.4 0 10.4-3.3 10.4-8.2 0-5.1-4.2-7.3-11.8-10.6-10.8-4.6-17.7-10.1-17.7-20.9 0-11.4 8.9-19.8 22.8-19.8 9 0 16 3.1 20.9 8.6l-6.8 7.7c-3.1-3.6-7.5-5.5-13.8-5.5-6.5 0-9.6 3.1-9.6 7.1 0 4.6 3.8 6.7 12 10.3 11.6 5 17.6 10.8 17.6 21.6 0 12.8-9.9 20.9-24.6 20.9-11.2 0-19.9-4.1-25.2-11.1l7.3-8.8zm-43.7 14.7V46.5H12v-9.5h43.1v9.5H38.5v56H28.5z" fill="#FFF" />
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">TypeScript</span>
              </div>

              {/* Node.js */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(104,160,99,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1.5L21.5 7v10L12 22.5 2.5 17V7L12 1.5z" fill="#539E43" />
                  <path d="M12 1.5L21.5 7v4.5L12 6.5 2.5 11.5V7L12 1.5z" fill="#68A063" />
                  <path d="M12 14.2c-2.3 0-3.8-1.2-3.8-2.9 0-2.5 2.5-2.9 4.4-3.2 1.5-.2 2.2-.5 2.2-1.2 0-.8-.7-1.3-1.7-1.3-1.3 0-2 .5-2.2 1.5L9 6.2c.5-1.8 2.1-2.7 4.7-2.7 2.3 0 4.1 1.1 4.1 3.1 0 2.3-2.2 2.8-4.1 3.1-1.6.2-2.5.5-2.5 1.3 0 .8.8 1.2 1.8 1.2 1.4 0 2.4-.6 2.7-1.7l2.4 1.1c-.7 1.7-2.3 2.6-4.1 2.6z" fill="#FFF" />
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">Node.js</span>
              </div>

              {/* PostgreSQL */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-[#4169E1]/40 hover:shadow-[0_0_12px_rgba(65,105,225,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" viewBox="0 0 256 264" fill="none">
                  <path d="M125.6 0C59.8 0 8.7 48.7 1.2 113.1c-2.3 20 2 37.6 12.8 52.8 9.7 13.6 24.3 22.4 41.5 24.9 3.2.5 6.4.7 9.5.7 1.5 0 3-.1 4.5-.2 0 1.2-.1 2.5-.1 3.7 0 37.9 30.7 68.6 68.6 68.6 15.6 0 30-5.2 41.6-14 11.2-8.5 19.3-20.7 22.9-34.7 17.5-3.5 31.8-14.7 39.5-30.8 7.3-15.3 7.8-32.9 1.3-49.8-3.7-9.5-9.6-17.9-17.3-24.8-1.5-1.3-3-2.6-4.6-3.7-.4-12.7-4.4-25-11.7-35.6C193.3 27 161.7 0 125.6 0z" fill="#336791" />
                  <path d="M141.5 18.2c28.2 2.5 52.6 22.5 60.1 50.1 4.7 17.2 2.4 34.7-6.2 50.1-2.2 3.9-4.8 7.5-7.8 10.7-3.4 3.7-7.2 6.9-11.4 9.6-1.5 1-3 1.9-4.6 2.8-1.7.9-3.4 1.8-5.2 2.5-3.3 1.3-6.8 2.2-10.4 2.8-2 .3-4 .5-6 .5-1.3 0-2.6-.1-3.9-.2-2.1-.3-4.2-.8-6.1-1.6-4.7-1.8-8.8-4.8-11.8-8.7-2.6-3.4-4.2-7.5-4.6-11.8-.4-4.2.4-8.5 2.2-12.3 2.1-4.4 5.5-8 9.8-10.2 3.8-2 8.1-2.9 12.5-2.6 3.6.3 7.1 1.3 10.2 3 1.3.7 2.5 1.5 3.6 2.5 4.7-5.5 8.1-12 9.9-19 3.2-12.3 2.3-24.8-2.6-36.1-6.1-14.2-17.6-25-31.9-29.6-4.9-1.6-10.1-2.4-15.4-2.4-1.4 0-2.8.1-4.2.2z" fill="#FFF" opacity="0.9" />
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">PostgreSQL</span>
              </div>

              {/* MongoDB */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(34,197,94,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M12.001 0C11.666 0.17 10.518 1.493 9.98 2.345 6.993 6.953 5.485 11.238 6.012 15.688c0.643 5.372 4.417 8.106 5.989 8.312 1.572-0.206 5.346-2.94 5.989-8.312 0.527-4.45-0.981-8.735-3.968-13.343C13.484 1.493 12.336 0.17 12.001 0z" fill="#47A248" />
                  <path d="M12.001 0.443v23.114c1.47-.215 4.885-2.736 5.48-7.702 0.493-4.156-.917-8.158-3.706-12.463C13.385 1.836 12.31 0.598 12.001 0.443z" fill="#499D4A" />
                  <path d="M12.001 23.557c-1.47-.215-4.885-2.736-5.48-7.702-0.493-4.156 0.917-8.158 3.706-12.463 0.39-0.556 1.465-1.794 1.774-1.949v22.114z" fill="#3FA037" />
                  <path d="M11.968 18.236c-.021-.013-.042-.027-.062-.041-1.393-.94-1.737-2.72-1.758-2.833-.213-1.127.17-2.146.591-2.871.378-.65 1.01-1.405 1.229-2.492.015 1.087.647 1.842 1.025 2.492.421.725.804 1.744.591 2.871-.021.113-.365 1.893-1.758 2.833-.02.014-.041.028-.062.041z" fill="#FFF" opacity="0.9" />
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">MongoDB</span>
              </div>

              {/* Tailwind CSS */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#06B6D4] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.577 1.618 2.938 3 5.912 3 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C4.337 20.582 2.976 19.2 0.001 19.2z" />
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">Tailwind</span>
              </div>

              {/* Docker */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(36,150,237,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2496ED] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.184.186v1.888c0 .102.082.185.184.185m21.737-1.428c-.371-.263-1.228-.386-2.164-.268-.152-.614-.492-1.183-.984-1.636l-.372-.345-.33.385c-.476.554-.785 1.25-.907 1.996-.54.218-1.207.56-1.782.984l-.538.396.444.498c.677.761 1.216 1.624 1.603 2.565.347.842.529 1.745.54 2.686.012 1.05-.183 2.087-.58 3.084-.396.996-.983 1.905-1.746 2.7l-.376.393.438.321c1.821 1.332 4.022 2.046 6.279 2.038 3.992-.014 7.625-2.222 9.479-5.761.164-.313.308-.636.432-.966.368-.985.553-2.023.55-3.093-.004-1.298-.288-2.585-.838-3.79-.55-1.205-1.347-2.28-2.348-3.19z" />
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">Docker</span>
              </div>

              {/* AWS */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-amber-500/40 hover:shadow-[0_0_12px_rgba(255,153,0,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF9900] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M6.864 12.353c0 .545-.091.954-.318 1.227-.227.273-.591.409-1.045.409-.364 0-.682-.136-.909-.364-.227-.227-.364-.591-.364-1.045 0-.5.136-.909.364-1.182.227-.273.545-.409.909-.409.455 0 .818.136 1.045.409.227.273.318.636.318 1.045zm1.59 0c0-.818-.273-1.5-.773-2.045-.5-.545-1.227-.818-2.182-.818-.909 0-1.636.273-2.182.818-.545.545-.818 1.227-.818 2.045 0 .864.273 1.545.818 2.091.545.545 1.273.818 2.182.818.955 0 1.682-.273 2.182-.818.5-.545.773-1.227.773-2.091zm4.954 2.773l-1.591-6.136H9.953l1.864 6.772c.182.636.318 1.273.455 1.864h.045c.136-.591.273-1.227.455-1.864l1.864-6.772h-1.864l-1.364 6.136zm5.818-.864c-.318.455-.773.682-1.364.682-.455 0-.818-.136-1.045-.409-.227-.273-.318-.636-.318-1.091 0-.5.136-.909.409-1.182.273-.273.682-.409 1.227-.409.364 0 .682.045.955.182v2.227zm1.545.591v-4.818c0-.682-.227-1.227-.636-1.591-.409-.364-1.045-.545-1.909-.545-.909 0-1.682.227-2.273.682l.636 1.136c.455-.318.955-.5 1.545-.5.5 0 .864.091 1.091.318.227.227.318.545.318.955v.364c-.364-.091-.818-.136-1.318-.136-1.045 0-1.864.227-2.455.727-.591.5-.864 1.182-.864 2.045 0 .864.273 1.545.864 2.045.591.5 1.364.727 2.273.727.818 0 1.5-.318 2.045-.955h.045v.818h1.682zm-12.773 6.091c5.227 2.545 11.273 1.773 15.364-.818l.409.545c-4.455 2.818-10.955 3.636-16.5.864l.727-.591z"/>
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">AWS</span>
              </div>

              {/* Redis */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-red-500/40 hover:shadow-[0_0_12px_rgba(220,56,45,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DC382D] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M2.38 5.615l8.77-5.064c.527-.305 1.173-.305 1.7 0l8.77 5.064c.527.305.85.864.85 1.473v10.128c0 .609-.323 1.168-.85 1.473l-8.77 5.064c-.527.305-1.173.305-1.7 0L2.38 18.69c-.527-.305-.85-.864-.85-1.473V7.088c0-.609.323-1.168.85-1.473zm9.62 1.475v4.544l4.03-2.327-4.03-2.217zm-1.7 0l-4.03 2.217 4.03 2.327V7.09zm0 6.273l-4.03-2.327v4.435l4.03-2.108zm1.7 0v2.108l4.03 2.108v-4.435l-4.03 2.327z" />
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">Redis</span>
              </div>

              {/* REST APIs */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#10131d] border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span className="text-gray-200 text-[11px] sm:text-xs font-semibold font-sans">REST APIs</span>
              </div>

              {/* Custom POS */}
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-[0_0_12px_rgba(255,138,0,0.25)] transition-all duration-200 cursor-default shadow-sm">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="2" y1="8" x2="22" y2="8" />
                  <rect x="5" y="11" width="3" height="2" fill="currentColor" />
                  <rect x="10" y="11" width="3" height="2" fill="currentColor" />
                  <circle cx="17" cy="12" r="1" fill="currentColor" />
                  <path d="M7 21h10" />
                  <path d="M12 17v4" />
                </svg>
                <span className="text-orange-300 text-[11px] sm:text-xs font-semibold font-sans">Custom POS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* =========================================================================
            RIGHT COLUMN: The Senior Developer Bento Workstation / Interactive IDE Console
           ========================================================================= */}
        <div className="lg:col-span-5 min-w-0 flex items-center justify-center relative w-full mt-3 lg:-mt-5 xl:-mt-9 lg:self-start">
          <div
            className="w-full max-w-full sm:max-w-[360px] lg:max-w-[480px] xl:max-w-[530px] mx-auto rounded-2xl liquid-glass-card overflow-hidden transition-transform duration-300 relative group"
            style={{
              transform:
                mousePos.tiltX || mousePos.tiltY
                  ? `perspective(1200px) rotateY(${mousePos.tiltX * 0.5}deg) rotateX(${mousePos.tiltY * 0.5}deg)`
                  : undefined,
            }}
          >
            {/* Subtle Glass Top Rim */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30" />

            {/* macOS / Linux Terminal Window Header */}
            <div className="relative z-10 px-3 py-2 sm:px-3.5 sm:py-2.5 lg:px-4 lg:py-3 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                <span className="ml-1 font-mono text-[9px] sm:text-[11px] lg:text-xs text-gray-300 font-medium flex items-center gap-1.5">
                  <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-orange-400" />
                  subhash-terminal ~ zsh
                </span>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-1.5 font-mono text-[8px] sm:text-[10px] lg:text-[11px] text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                <span>main (clean)</span>
              </div>
            </div>

            {/* Interactive Tabs Switcher */}
            <div className="relative z-10 flex border-b border-white/[0.06] bg-transparent px-1.5 pt-1 sm:px-2 sm:pt-1.5 lg:px-3 lg:pt-2 gap-1 text-[10px] sm:text-xs lg:text-xs font-mono overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3.5 lg:py-1.5 rounded-t-lg flex items-center gap-1 sm:gap-1.5 transition-all min-h-[34px] sm:min-h-0 shrink-0 ${
                  activeTab === "profile"
                    ? "bg-white/[0.06] text-orange-400 border-t-2 border-orange-500 shadow-sm font-medium"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
                }`}
              >
                <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
                <span>portrait</span>
              </button>

              <button
                onClick={() => setActiveTab("code")}
                className={`px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3.5 lg:py-1.5 rounded-t-lg flex items-center gap-1 sm:gap-1.5 transition-all min-h-[34px] sm:min-h-0 shrink-0 ${
                  activeTab === "code"
                    ? "bg-white/[0.06] text-orange-400 border-t-2 border-orange-500 shadow-sm font-medium"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
                }`}
              >
                <Code2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
                <span>engineer.ts</span>
              </button>

              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3.5 lg:py-1.5 rounded-t-lg flex items-center gap-1 sm:gap-1.5 transition-all min-h-[34px] sm:min-h-0 shrink-0 ${
                  activeTab === "architecture"
                    ? "bg-white/[0.06] text-orange-400 border-t-2 border-orange-500 shadow-sm font-medium"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
                }`}
              >
                <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
                <span>system.json</span>
              </button>
            </div>

            {/* Tab 1: Profile View (Portrait + Compact Telemetry HUD) */}
            {activeTab === "profile" && (
              <div className="relative z-10 p-2.5 sm:p-4 lg:p-6 flex flex-col items-center justify-center min-h-[210px] sm:min-h-[280px] lg:min-h-[430px] xl:min-h-[470px] bg-transparent">
                {/* Subtle Amber Portrait Rim Halo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-52 lg:w-72 xl:w-80 h-40 sm:h-52 lg:h-72 xl:h-80 rounded-full bg-orange-500/10 blur-[60px] pointer-events-none" />

                {/* Subhash Hero Cutout Image */}
                <div className="relative w-[140px] h-[190px] sm:w-[200px] sm:h-[260px] lg:w-[320px] lg:h-[390px] xl:w-[360px] xl:h-[440px] z-10 flex items-end justify-center">
                  <Image
                    src="/images/subash-hero.png"
                    alt="Subhash Ketagoda - Senior Full-Stack Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, (max-width: 1280px) 320px, 360px"
                    className="object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] filter contrast-[1.04]"
                  />
                </div>

                {/* Compact Top-Right Badge HUD */}
                <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 lg:top-3.5 lg:right-3.5 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5 rounded-lg bg-black/40 border border-white/10 font-mono text-[8px] sm:text-[10px] lg:text-xs text-orange-300 flex items-center gap-1.5 shadow-md backdrop-blur-sm">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-emerald-400" />
                  <span className="tracking-wide">PRODUCTION READY</span>
                </div>

                {/* Compact Bottom Badges Dock */}
                <div className="absolute bottom-2 inset-x-2 sm:bottom-2.5 sm:inset-x-2.5 lg:bottom-3.5 lg:inset-x-3.5 flex items-center justify-between gap-1.5 z-20 pointer-events-none">
                  <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-lg bg-black/40 border border-white/10 font-mono text-[8px] sm:text-[9px] lg:text-[11px] text-gray-200 flex items-center gap-1.5 shadow-md backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span className="tracking-wide">POS SPECIALIST</span>
                  </div>

                  <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-lg bg-black/40 border border-white/10 font-mono text-[8px] sm:text-[9px] lg:text-[11px] text-gray-200 flex items-center gap-1.5 shadow-md backdrop-blur-sm">
                    <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-cyan-400" />
                    <span className="tracking-wide">GLOBAL EDGE</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Live Code Inspector View (engineer.ts) */}
            {activeTab === "code" && (
              <div className="relative z-10 p-3 sm:p-5 lg:p-7 font-mono text-[10px] sm:text-xs lg:text-[13px] xl:text-sm text-gray-200 leading-relaxed overflow-x-auto min-h-[230px] sm:min-h-[280px] lg:min-h-[430px] xl:min-h-[470px] bg-transparent">
                <div className="text-gray-500 italic">// Enterprise TypeScript Profile</div>
                <div className="mt-1.5">
                  <span className="text-purple-400 font-semibold">export const</span> <span className="text-blue-300 font-semibold">Developer</span> = {"{"}
                </div>
                <div className="pl-2.5 sm:pl-4 lg:pl-5">
                  name: <span className="text-emerald-300 font-medium">&quot;Subhash Ketagoda&quot;</span>,
                </div>
                <div className="pl-2.5 sm:pl-4 lg:pl-5">
                  role: <span className="text-emerald-300 font-medium">&quot;Senior Full-Stack Architect&quot;</span>,
                </div>
                <div className="pl-2.5 sm:pl-4 lg:pl-5">
                  location: <span className="text-emerald-300 font-medium">&quot;Colombo, LK&quot;</span>,
                </div>
                <div className="pl-2.5 sm:pl-4 lg:pl-5">
                  specialties: [
                </div>
                <div className="pl-5 sm:pl-7 lg:pl-9 text-cyan-300 font-medium">&quot;Next.js 15 &amp; React 19&quot;,</div>
                <div className="pl-5 sm:pl-7 lg:pl-9 text-cyan-300 font-medium">&quot;POS Engines &amp; Billing APIs&quot;,</div>
                <div className="pl-5 sm:pl-7 lg:pl-9 text-cyan-300 font-medium">&quot;PostgreSQL &amp; Distributed Stacks&quot;,</div>
                <div className="pl-2.5 sm:pl-4 lg:pl-5">],</div>
                <div className="pl-2.5 sm:pl-4 lg:pl-5">
                  status: <span className="text-orange-400 font-semibold">&quot;AVAILABLE_FOR_CONTRACT&quot;</span>,
                </div>
                <div>{"};"}</div>

                <div className="mt-4 lg:mt-8 pt-2.5 border-t border-white/10 text-emerald-400 flex items-center gap-1.5 text-[9px] sm:text-[10px] lg:text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>// Build passed: 0 errors (0.28s)</span>
                </div>
              </div>
            )}

            {/* Tab 3: Architecture Matrix View (system.json) */}
            {activeTab === "architecture" && (
              <div className="relative z-10 p-2.5 sm:p-4 lg:p-6 font-mono text-[9px] sm:text-[10px] lg:text-xs text-gray-200 leading-snug overflow-x-auto min-h-[230px] sm:min-h-[280px] lg:min-h-[430px] xl:min-h-[470px] bg-transparent space-y-2 sm:space-y-2.5 lg:space-y-3">
                <div className="p-2.5 sm:p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1 hover:border-orange-500/30 transition-all shadow-sm">
                  <div className="text-orange-400 font-semibold flex items-center gap-1.5 text-[9px] sm:text-[10px] lg:text-xs">
                    <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
                    <span>01. FRONTEND ARCHITECTURE</span>
                  </div>
                  <div className="text-gray-400 text-[8px] sm:text-[9px] lg:text-[11px] leading-relaxed">
                    Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Core Web Vitals 99+.
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1 hover:border-cyan-500/30 transition-all shadow-sm">
                  <div className="text-cyan-400 font-semibold flex items-center gap-1.5 text-[9px] sm:text-[10px] lg:text-xs">
                    <Server className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
                    <span>02. BACKEND &amp; POS ENGINES</span>
                  </div>
                  <div className="text-gray-400 text-[8px] sm:text-[9px] lg:text-[11px] leading-relaxed">
                    Node.js, Custom POS Billing Engines, Micro-APIs, JWT Auth, WebSockets.
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1 hover:border-emerald-500/30 transition-all shadow-sm">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[9px] sm:text-[10px] lg:text-xs">
                    <Database className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
                    <span>03. DATA &amp; INFRASTRUCTURE</span>
                  </div>
                  <div className="text-gray-400 text-[8px] sm:text-[9px] lg:text-[11px] leading-relaxed">
                    PostgreSQL, MongoDB, Redis Caching, Docker, AWS Cloudflare Edge.
                  </div>
                </div>
              </div>
            )}

            {/* Console Footer Status Bar */}
            <div className="relative z-10 px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[8px] sm:text-[10px] lg:text-xs font-mono text-gray-400">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="text-orange-400 font-semibold">UTF-8</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
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
