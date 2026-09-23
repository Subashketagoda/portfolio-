"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Terminal,
  Cpu,
  Code2,
  Layers,
  ShieldCheck,
  Globe,
  Server,
  Database,
} from "lucide-react";

interface HeroCardProps {
  className?: string;
  defaultTab?: "profile" | "code" | "architecture";
  showTilt?: boolean;
}

export default function HeroCard({
  className = "",
  defaultTab = "profile",
  showTilt = true,
}: HeroCardProps) {
  const [activeTab, setActiveTab] = useState<"profile" | "code" | "architecture">(defaultTab);
  const [mousePos, setMousePos] = useState<{ tiltX: number; tiltY: number }>({
    tiltX: 0,
    tiltY: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showTilt) return;
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((x - centerX) / centerX) * 4;
    const tiltY = -((y - centerY) / centerY) * 4;
    setMousePos({ tiltX, tiltY });
  };

  const handleMouseLeave = () => {
    setMousePos({ tiltX: 0, tiltY: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[530px] mx-auto rounded-2xl liquid-glass-card overflow-hidden transition-transform duration-300 relative group shadow-2xl ${className}`}
      style={{
        transform:
          mousePos.tiltX || mousePos.tiltY
            ? `perspective(1200px) rotateY(${mousePos.tiltX * 0.6}deg) rotateX(${mousePos.tiltY * 0.6}deg)`
            : undefined,
      }}
    >
      {/* Subtle Glass Top Rim */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30" />

      {/* macOS / Linux Terminal Window Header */}
      <div className="relative z-10 px-2.5 py-2 sm:px-3.5 sm:py-2.5 lg:px-4 lg:py-3 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500/80 inline-block shadow-sm" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
          <span className="ml-1 font-mono text-[9px] sm:text-[11px] lg:text-xs text-gray-300 font-medium flex items-center gap-1.5 truncate">
            <Terminal className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-orange-400 shrink-0" />
            <span className="truncate">subhash-terminal</span>
          </span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-1.5 font-mono text-[8px] sm:text-[10px] lg:text-[11px] text-emerald-400 font-medium shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          <span>main (clean)</span>
        </div>
      </div>

      {/* Interactive Tabs Switcher */}
      <div className="relative z-10 flex border-b border-white/[0.06] bg-transparent px-1.5 pt-1 sm:px-2 sm:pt-1.5 lg:px-3 lg:pt-2 gap-1 text-[10px] sm:text-xs lg:text-xs font-mono overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className={`px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3.5 lg:py-1.5 rounded-t-lg flex items-center gap-1 sm:gap-1.5 transition-all min-h-[32px] sm:min-h-0 shrink-0 cursor-pointer text-[10px] xs:text-[11px] sm:text-xs ${
            activeTab === "profile"
              ? "bg-white/[0.06] text-orange-400 border-t-2 border-orange-500 shadow-sm font-medium"
              : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
          }`}
        >
          <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
          <span>portrait</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("code")}
          className={`px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3.5 lg:py-1.5 rounded-t-lg flex items-center gap-1 sm:gap-1.5 transition-all min-h-[32px] sm:min-h-0 shrink-0 cursor-pointer text-[10px] xs:text-[11px] sm:text-xs ${
            activeTab === "code"
              ? "bg-white/[0.06] text-orange-400 border-t-2 border-orange-500 shadow-sm font-medium"
              : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
          }`}
        >
          <Code2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" />
          <span>engineer.ts</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("architecture")}
          className={`px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3.5 lg:py-1.5 rounded-t-lg flex items-center gap-1 sm:gap-1.5 transition-all min-h-[32px] sm:min-h-0 shrink-0 cursor-pointer text-[10px] xs:text-[11px] sm:text-xs ${
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
        <div className="relative z-10 p-2 sm:p-4 lg:p-6 flex flex-col items-center justify-center min-h-[250px] xs:min-h-[270px] sm:min-h-[300px] lg:min-h-[430px] xl:min-h-[470px] bg-transparent">
          {/* Subtle Amber Portrait Rim Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 xs:w-44 sm:w-56 lg:w-72 xl:w-80 h-36 xs:h-44 sm:h-56 lg:h-72 xl:h-80 rounded-full bg-orange-500/10 blur-[50px] sm:blur-[60px] pointer-events-none" />

          {/* Subhash Hero Cutout Image */}
          <div className="relative w-[150px] h-[200px] xs:w-[170px] xs:h-[220px] sm:w-[220px] sm:h-[270px] lg:w-[320px] lg:h-[390px] xl:w-[360px] xl:h-[440px] z-10 flex items-end justify-center">
            <Image
              src="/images/subash-hero.png"
              alt="Subhash Ketagoda - Senior Full-Stack Engineer"
              fill
              priority
              sizes="(max-width: 640px) 170px, (max-width: 1024px) 220px, 360px"
              className="object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)] filter contrast-[1.04]"
            />
          </div>

          {/* Compact Top-Right Badge HUD */}
          <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 lg:top-3.5 lg:right-3.5 z-20 px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[7px] xs:text-[8px] sm:text-[10px] lg:text-xs text-orange-300 flex items-center gap-1.5 shadow-md backdrop-blur-sm">
            <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-emerald-400 shrink-0" />
            <span className="tracking-wide">PRODUCTION READY</span>
          </div>

          {/* Compact Bottom Badges Dock */}
          <div className="absolute bottom-2 inset-x-2 sm:bottom-2.5 sm:inset-x-2.5 lg:bottom-3.5 lg:inset-x-3.5 flex items-center justify-between gap-1.5 z-20 pointer-events-none">
            <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-black/60 border border-white/10 font-mono text-[7px] xs:text-[8px] sm:text-[9px] lg:text-[11px] text-gray-200 flex items-center gap-1 shadow-md backdrop-blur-sm truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="tracking-wide truncate">POS SPECIALIST</span>
            </div>

            <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-black/60 border border-white/10 font-mono text-[7px] xs:text-[8px] sm:text-[9px] lg:text-[11px] text-gray-200 flex items-center gap-1 shadow-md backdrop-blur-sm truncate">
              <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-cyan-400 shrink-0" />
              <span className="tracking-wide truncate">GLOBAL EDGE</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Live Code Inspector View (engineer.ts) */}
      {activeTab === "code" && (
        <div className="relative z-10 p-2.5 xs:p-3 sm:p-5 lg:p-7 font-mono text-[9px] xs:text-[10px] sm:text-xs lg:text-[13px] xl:text-sm text-gray-200 leading-relaxed overflow-x-auto min-h-[250px] xs:min-h-[270px] sm:min-h-[300px] lg:min-h-[430px] xl:min-h-[470px] bg-transparent">
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
          <div className="pl-4 sm:pl-7 lg:pl-9 text-cyan-300 font-medium">&quot;Next.js 15 &amp; React 19&quot;,</div>
          <div className="pl-4 sm:pl-7 lg:pl-9 text-cyan-300 font-medium">&quot;POS Engines &amp; Billing APIs&quot;,</div>
          <div className="pl-4 sm:pl-7 lg:pl-9 text-cyan-300 font-medium">&quot;PostgreSQL &amp; Distributed Stacks&quot;,</div>
          <div className="pl-2.5 sm:pl-4 lg:pl-5">],</div>
          <div className="pl-2.5 sm:pl-4 lg:pl-5">
            status: <span className="text-orange-400 font-semibold">&quot;AVAILABLE_FOR_CONTRACT&quot;</span>,
          </div>
          <div>{"};"}</div>

          <div className="mt-3 lg:mt-8 pt-2 border-t border-white/10 text-emerald-400 flex items-center gap-1.5 text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>// Build passed: 0 errors (0.28s)</span>
          </div>
        </div>
      )}

      {/* Tab 3: Architecture Matrix View (system.json) */}
      {activeTab === "architecture" && (
        <div className="relative z-10 p-2 xs:p-2.5 sm:p-4 lg:p-6 font-mono text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs text-gray-200 leading-snug overflow-x-auto min-h-[250px] xs:min-h-[270px] sm:min-h-[300px] lg:min-h-[430px] xl:min-h-[470px] bg-transparent space-y-1.5 sm:space-y-2.5 lg:space-y-3">
          <div className="p-2 sm:p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-0.5 hover:border-orange-500/30 transition-all shadow-sm">
            <div className="text-orange-400 font-semibold flex items-center gap-1.5 text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs">
              <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 shrink-0" />
              <span>01. FRONTEND ARCHITECTURE</span>
            </div>
            <div className="text-gray-400 text-[8px] xs:text-[8.5px] sm:text-[9px] lg:text-[11px] leading-relaxed">
              Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Core Web Vitals 99+.
            </div>
          </div>

          <div className="p-2 sm:p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-0.5 hover:border-cyan-500/30 transition-all shadow-sm">
            <div className="text-cyan-400 font-semibold flex items-center gap-1.5 text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs">
              <Server className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 shrink-0" />
              <span>02. BACKEND &amp; POS ENGINES</span>
            </div>
            <div className="text-gray-400 text-[8px] xs:text-[8.5px] sm:text-[9px] lg:text-[11px] leading-relaxed">
              Node.js, Custom POS Billing Engines, Micro-APIs, JWT Auth, WebSockets.
            </div>
          </div>

          <div className="p-2 sm:p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-0.5 hover:border-emerald-500/30 transition-all shadow-sm">
            <div className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs">
              <Database className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 shrink-0" />
              <span>03. DATA &amp; INFRASTRUCTURE</span>
            </div>
            <div className="text-gray-400 text-[8px] xs:text-[8.5px] sm:text-[9px] lg:text-[11px] leading-relaxed">
              PostgreSQL, MongoDB, Redis Caching, Docker, AWS Cloudflare Edge.
            </div>
          </div>
        </div>
      )}

      {/* Console Footer Status Bar */}
      <div className="relative z-10 px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[7px] xs:text-[8px] sm:text-[10px] lg:text-xs font-mono text-gray-400">
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
  );
}
