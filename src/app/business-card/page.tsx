"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  RotateCw,
  Download,
  Share2,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  Check,
  Copy,
  Sparkles,
  ShieldCheck,
  Briefcase,
  ArrowLeft,
  QrCode,
  CheckCircle2,
} from "lucide-react";

export default function BusinessCardPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Mouse / Touch 3D Tilt Coordinates
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt (max 10 degrees)
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  // Download .vcf file directly for phone address book + trigger luxury gold confetti
  const handleSaveContact = () => {
    // Fire celebratory gold & cyan confetti
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#ffd700", "#f59e0b", "#06b6d4", "#10b981", "#ffffff"],
      });
    } catch (e) {
      // Ignore if confetti fails
    }

    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Subhash Ketagoda",
      "N:Ketagoda;Subhash;;;",
      "TITLE:Senior Full-Stack Architect",
      "ORG:Subhash Ketagoda Tech",
      "TEL;TYPE=CELL,VOICE;VALUE=uri:tel:+94789656969",
      "TEL;TYPE=WORK,VOICE:+94789656969",
      "TEL;TYPE=WHATSAPP:+94789656969",
      "EMAIL;TYPE=INTERNET,WORK:subhashketagoda@gmail.com",
      "ADR;TYPE=WORK:;;Colombo;;;Sri Lanka",
      "URL:https://subhashketagoda.com",
      "URL;TYPE=GitHub:https://github.com/Subashketagoda",
      "URL;TYPE=Fiverr:https://www.fiverr.com/apexgendigital/design-and-develop-a-modern-premium-business-website",
      "NOTE:Senior Full-Stack Engineer specializing in Next.js 15, React 19, TypeScript, POS Billing Engines, and Cloud Distributed Architecture.",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Subhash-Ketagoda.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Copy or native share
  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://subhashketagoda.com/business-card";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Subhash Ketagoda - Digital Business Card",
          text: "Connect with Subhash Ketagoda, Senior Full-Stack Architect & Engineer.",
          url,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("subhashketagoda@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("+94789656969");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#06080c] text-white selection:bg-amber-500 selection:text-black flex flex-col justify-between relative overflow-x-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-[-15%] w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[150px]" />
        {/* Subtle Luxury Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-10 w-full max-w-md mx-auto px-3.5 xs:px-4 sm:px-6 pt-4 sm:pt-6 flex items-center justify-between">
        <Link
          href="/card"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-300 hover:text-white text-[11px] xs:text-xs font-mono transition-all active:scale-95 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
          <span>PORTAL HUB</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/15 to-orange-500/15 hover:from-amber-500/25 hover:to-orange-500/25 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-[11px] xs:text-xs font-mono font-semibold transition-all shadow-[0_0_15px_rgba(245,158,11,0.15)] active:scale-95"
          >
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>PORTFOLIO</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[430px] mx-auto px-3 xs:px-4 py-4 sm:py-6 flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-400/30 text-amber-300 font-mono text-[10px] xs:text-[11px] font-bold tracking-widest uppercase mb-2 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>BLACK TITANIUM NFC &bull; VCARD</span>
        </div>

        <p className="text-gray-400 text-[11px] xs:text-xs text-center mb-3 sm:mb-4">
          Interactive 3D Card &bull; Tap card or button to flip front/back
        </p>

        {/* =========================================================================
            3D FLIPPABLE BUSINESS CARD CONTAINER (TITANIUM LUXURY EDITION)
           ========================================================================= */}
        <div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onClick={() => setIsFlipped(!isFlipped)}
          className="perspective-1000 w-full cursor-pointer select-none group min-h-[460px] xs:min-h-[450px]"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <div
            className={`w-full relative transition-transform duration-700 transform-style-3d min-h-[460px] xs:min-h-[450px] ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* =========================================================================
                FRONT SIDE: OBSIDIAN TITANIUM & CHAMPAGNE GOLD
               ========================================================================= */}
            <div className="backface-hidden w-full h-full min-h-[460px] xs:min-h-[450px] rounded-[26px] p-[1.5px] bg-gradient-to-br from-amber-400/60 via-amber-600/20 to-cyan-400/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] relative overflow-hidden group-hover:from-amber-300/80 group-hover:to-cyan-300/70 transition-all duration-300">
              {/* Inner Surface with Brushed Carbon Pattern */}
              <div className="w-full h-full rounded-[24px] brushed-titanium-pattern p-4 xs:p-5 sm:p-5.5 relative overflow-hidden flex flex-col justify-between">
                {/* Dynamic Specular Glare Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[24px] transition-opacity duration-200"
                  style={{
                    background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 70%)`,
                  }}
                />

                {/* Subtle Guilloché / Laser Etched Security Accent in Corner */}
                <div className="absolute top-0 right-0 w-44 h-44 opacity-[0.06] pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-amber-300" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <circle cx="100" cy="0" r="20" />
                    <circle cx="100" cy="0" r="40" />
                    <circle cx="100" cy="0" r="60" />
                    <circle cx="100" cy="0" r="80" />
                    <circle cx="100" cy="0" r="100" />
                  </svg>
                </div>

                {/* Top Row: Authentic Gold EMV Chip, NFC Wave & Verified Status */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    {/* Realistic Gold EMV Smart Chip */}
                    <div className="w-10 h-7.5 rounded-md bg-gradient-to-br from-[#ffd700] via-[#f59e0b] to-[#b45309] p-[1px] shadow-md shadow-amber-500/20 shrink-0">
                      <div className="w-full h-full rounded-[5px] bg-[#1a1405] p-0.5 flex flex-col justify-between">
                        <div className="flex justify-between items-center px-0.5 pt-0.5">
                          <span className="w-2.5 h-1 border-t border-l border-amber-400/70" />
                          <span className="w-2.5 h-1 border-t border-r border-amber-400/70" />
                        </div>
                        {/* Center IC Core */}
                        <div className="self-center w-4 h-2.5 border border-amber-400/80 rounded-[2px] bg-gradient-to-r from-amber-500/30 to-amber-600/30 flex items-center justify-center">
                          <div className="w-2 h-1 border-y border-amber-300/80" />
                        </div>
                        <div className="flex justify-between items-center px-0.5 pb-0.5">
                          <span className="w-2.5 h-1 border-b border-l border-amber-400/70" />
                          <span className="w-2.5 h-1 border-b border-r border-amber-400/70" />
                        </div>
                      </div>
                    </div>

                    {/* Contactless Wave Logo */}
                    <div className="flex items-center text-amber-400/90 pl-0.5">
                      <svg
                        className="w-4 h-4 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9a5 5 0 0 1 0 6" />
                        <path d="M9 6a9 9 0 0 1 0 12" />
                        <path d="M12 3a13 13 0 0 1 0 18" />
                      </svg>
                    </div>
                  </div>

                  {/* VIP Hologram Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-amber-400/30 shadow-sm shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span className="font-mono text-[9px] xs:text-[10px] text-amber-200 tracking-wider font-bold">
                      VERIFIED PRO
                    </span>
                  </div>
                </div>

                {/* Middle Identity Block: Avatar & Name */}
                <div className="flex items-center gap-3.5 my-2.5 relative z-10">
                  {/* Luxury Circular Avatar Bezel with Gold Halo */}
                  <div className="relative w-18 h-18 xs:w-20 xs:h-20 sm:w-22 sm:h-22 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-amber-200 to-cyan-400 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                    <div className="relative w-full h-full rounded-full bg-[#0a0d14] overflow-hidden border border-black/40">
                      <Image
                        src="/images/subash-hero.png"
                        alt="Subhash Ketagoda"
                        fill
                        sizes="90px"
                        className="object-contain object-bottom pt-1 scale-105"
                      />
                    </div>
                    {/* Status jewel */}
                    <div className="absolute bottom-0 right-0 w-4.5 h-4.5 rounded-full bg-[#0a0d14] p-0.5 border border-amber-400/50 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[9px] xs:text-[10px] font-bold tracking-widest text-amber-400 uppercase truncate">
                      SENIOR ARCHITECT &bull; LEAD
                    </div>
                    <h2 className="text-xl xs:text-2xl font-black tracking-tight leading-none mt-0.5 gold-foil-text drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)] truncate">
                      Subhash Ketagoda
                    </h2>
                    <div className="flex items-center gap-1.5 text-gray-300 text-[11px] xs:text-xs mt-1 truncate">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">Colombo, Sri Lanka &bull; Remote</span>
                    </div>
                    {/* Direct phone pill */}
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 mt-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] xs:text-[11px] font-mono font-bold">
                      <Phone className="w-2.5 h-2.5 shrink-0" />
                      <span>+94 78 965 6969</span>
                    </div>
                  </div>
                </div>

                {/* VIP Embossed Card Number (Spaced Credit Card Style) */}
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.06] backdrop-blur-sm relative z-10">
                  <div className="flex items-center justify-between text-gray-400 text-[9px] font-mono tracking-widest uppercase mb-1">
                    <span>VIP ARCHITECT ID</span>
                    <span className="text-amber-400/80 font-bold">TIER: TITANIUM</span>
                  </div>
                  <div className="font-mono text-[13px] xs:text-sm sm:text-[15px] font-black tracking-[0.16em] sm:tracking-[0.2em] text-gray-200 silver-foil-text flex items-center justify-between select-all">
                    <span>4092</span>
                    <span>8820</span>
                    <span>9478</span>
                    <span className="text-amber-300">6969</span>
                  </div>
                  <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/[0.04] text-[8px] xs:text-[9px] font-mono text-gray-400">
                    <span>SINCE: 2018</span>
                    <span>EXPIRES: 12/30</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> ESCROW READY
                    </span>
                  </div>
                </div>

                {/* Tech Specialties */}
                <div className="relative z-10 my-1">
                  <div className="flex flex-wrap gap-1">
                    {["Next.js 15", "React 19", "TypeScript", "POS Engine", "PostgreSQL", "Cloud"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[9px] xs:text-[10px] font-mono text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Holographic Security Strip & Tap Guide */}
                <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px] xs:text-[11px] font-semibold">
                    <RotateCw className="w-3 h-3 animate-reverse-spin shrink-0" />
                    <span>TAP TO FLIP TO QR &amp; DIRECT CHAT</span>
                  </div>
                  {/* Prismatic Foil Seal */}
                  <div className="px-2 py-0.5 rounded holographic-shimmer border border-white/20 text-[8px] font-mono font-black text-white/90 tracking-widest uppercase shadow-sm">
                    SK SECURE
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                BACK SIDE: MAGNETIC STRIPE, REAL SIGNATURE, DIRECT CHANNELS & QR
               ========================================================================= */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full min-h-[460px] xs:min-h-[450px] rounded-[26px] p-[1.5px] bg-gradient-to-br from-cyan-400/60 via-amber-600/20 to-amber-400/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden group-hover:from-cyan-300/80 group-hover:to-amber-300/70 transition-all duration-300">
              {/* Inner Surface with Titanium Pattern */}
              <div className="w-full h-full rounded-[24px] brushed-titanium-pattern p-4 xs:p-5 relative overflow-hidden flex flex-col justify-between">
                {/* Dynamic Specular Glare Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[24px] transition-opacity duration-200"
                  style={{
                    background: `radial-gradient(circle 280px at ${100 - glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 70%)`,
                  }}
                />

                {/* 1. Real Magnetic Carbon Stripe Across Top */}
                <div className="-mx-4 xs:-mx-5 -mt-4 xs:-mt-5 h-9 bg-[#0b0c10] border-y border-white/[0.08] flex items-center px-4 justify-between relative overflow-hidden">
                  <div className="font-mono text-[7px] xs:text-[8px] tracking-[0.25em] text-white/30 truncate uppercase">
                    SUBHASH KETAGODA // HIGH-PERFORMANCE CLOUD ARCHITECTURE // POS SYSTEMS
                  </div>
                  <div className="w-10 h-3 bg-amber-400/10 rounded-sm border border-amber-400/20 shrink-0" />
                </div>

                {/* 2. Signature Panel & Security Code */}
                <div className="my-1.5 flex items-center gap-2">
                  {/* Signature Strip */}
                  <div className="flex-1 h-9 rounded-md bg-[#f4f1ea] px-3 flex items-center justify-between relative overflow-hidden shadow-inner border border-white/40">
                    <img
                      src="/images/subhash-signature.png"
                      alt="Subhash Ketagoda Signature"
                      className="h-7 w-auto object-contain brightness-0 contrast-200 mix-blend-multiply"
                    />
                    <span className="font-mono text-[8px] text-gray-500 uppercase font-semibold">
                      AUTHORIZED SIGNATURE
                    </span>
                  </div>
                  {/* CVV Security Block */}
                  <div className="h-9 px-2.5 rounded-md bg-black/60 border border-white/10 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[7px] font-mono text-gray-400">CVV</span>
                    <span className="font-mono text-xs font-bold text-amber-300">969</span>
                  </div>
                </div>

                {/* 3. Middle Section: QR Code + Quick Contact Channels */}
                <div className="flex items-center gap-3 my-1 relative z-10">
                  {/* Built-in High-Contrast QR Code in Gold Frame */}
                  <div className="w-[102px] xs:w-[110px] sm:w-[118px] p-2 rounded-2xl bg-white border-2 border-amber-400/70 flex flex-col items-center justify-center shrink-0 shadow-lg shadow-black/60">
                    <svg className="w-full h-auto aspect-square text-black" viewBox="0 0 100 100" fill="currentColor">
                      {/* Top-Left Corner Box */}
                      <rect x="10" y="10" width="24" height="24" rx="3" fill="black" />
                      <rect x="14" y="14" width="16" height="16" rx="2" fill="white" />
                      <rect x="18" y="18" width="8" height="8" rx="1" fill="black" />

                      {/* Top-Right Corner Box */}
                      <rect x="66" y="10" width="24" height="24" rx="3" fill="black" />
                      <rect x="70" y="14" width="16" height="16" rx="2" fill="white" />
                      <rect x="74" y="18" width="8" height="8" rx="1" fill="black" />

                      {/* Bottom-Left Corner Box */}
                      <rect x="10" y="66" width="24" height="24" rx="3" fill="black" />
                      <rect x="14" y="70" width="16" height="16" rx="2" fill="white" />
                      <rect x="18" y="74" width="8" height="8" rx="1" fill="black" />

                      {/* Data Points Matrix Pattern */}
                      <rect x="40" y="12" width="6" height="6" rx="1" fill="black" />
                      <rect x="52" y="12" width="6" height="6" rx="1" fill="black" />
                      <rect x="44" y="24" width="6" height="6" rx="1" fill="black" />
                      <rect x="52" y="28" width="6" height="6" rx="1" fill="black" />
                      <rect x="14" y="44" width="6" height="6" rx="1" fill="black" />
                      <rect x="26" y="44" width="6" height="6" rx="1" fill="black" />
                      <rect x="38" y="40" width="6" height="6" rx="1" fill="black" />
                      {/* Center Monogram Accent */}
                      <rect x="46" y="44" width="12" height="12" rx="2" fill="#d97706" />
                      <rect x="62" y="40" width="6" height="6" rx="1" fill="black" />
                      <rect x="74" y="44" width="6" height="6" rx="1" fill="black" />
                      <rect x="84" y="44" width="6" height="6" rx="1" fill="black" />
                      <rect x="40" y="58" width="6" height="6" rx="1" fill="black" />
                      <rect x="52" y="62" width="6" height="6" rx="1" fill="black" />
                      <rect x="64" y="56" width="6" height="6" rx="1" fill="black" />
                      <rect x="78" y="60" width="6" height="6" rx="1" fill="black" />
                      <rect x="42" y="74" width="6" height="6" rx="1" fill="black" />
                      <rect x="56" y="76" width="6" height="6" rx="1" fill="black" />
                      <rect x="68" y="72" width="6" height="6" rx="1" fill="black" />
                      <rect x="80" y="76" width="6" height="6" rx="1" fill="black" />
                      <rect x="48" y="86" width="6" height="6" rx="1" fill="black" />
                      <rect x="62" y="86" width="6" height="6" rx="1" fill="black" />
                      <rect x="76" y="86" width="6" height="6" rx="1" fill="black" />
                    </svg>
                    <span className="text-[8px] xs:text-[9px] font-mono font-extrabold text-amber-700 mt-1 uppercase tracking-tight text-center">
                      SCAN TO CONNECT
                    </span>
                  </div>

                  {/* Direct Action Capsules */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/94789656969"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/40 flex items-center justify-between text-left text-[#25d366] transition-all shadow-sm active:scale-95"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <MessageCircle className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
                        <span className="truncate text-[10px] xs:text-[11px] font-bold">WhatsApp Chat</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[#25d366] shrink-0 ml-1" />
                    </a>

                    {/* Direct Call */}
                    <a
                      href="tel:+94789656969"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/35 flex items-center justify-between text-left text-cyan-300 transition-all shadow-sm active:scale-95"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate text-[10px] xs:text-[11px] font-mono font-bold">+94 78 965 6969</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="ml-1 p-0.5 hover:text-white text-cyan-400"
                        title="Copy phone"
                      >
                        {copiedPhone ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-cyan-400" />
                        )}
                      </button>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:subhashketagoda@gmail.com"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] flex items-center justify-between text-left text-gray-200 transition-all shadow-sm active:scale-95"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate text-[10px] xs:text-[11px]">Email Message</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="ml-1 p-0.5 hover:text-white text-gray-400"
                        title="Copy email"
                      >
                        {copiedEmail ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-400" />
                        )}
                      </button>
                    </a>

                    {/* Fiverr Escrow */}
                    <a
                      href="https://www.fiverr.com/apexgendigital/design-and-develop-a-modern-premium-business-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-[#1dbf73]/15 hover:bg-[#1dbf73]/25 border border-[#1dbf73]/40 flex items-center justify-between text-left text-[#1dbf73] transition-all shadow-sm active:scale-95"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M23.002 12c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11zm-5.04-3.667h-2.12v-.785c0-.528.273-.787.82-.787h1.3v-2.02h-1.92c-1.932 0-2.88 1.058-2.88 3.125v.467h-1.428v2.02h1.428v6.905h2.68v-6.905h1.868l.252-2.02zm-8.828 0h-2.68v8.925h2.68V8.333zm-1.34-1.442c.86 0 1.558-.698 1.558-1.558 0-.86-.698-1.558-1.558-1.558-.86 0-1.558.698-1.558 1.558 0 .86.698 1.558 1.558 1.558z" />
                        </svg>
                        <span className="truncate text-[10px] xs:text-[11px] font-bold">Fiverr Escrow</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[#1dbf73] shrink-0 ml-1" />
                    </a>
                  </div>
                </div>

                {/* 4. Social Dock */}
                <div className="flex items-center justify-around py-2 border-t border-white/[0.08] relative z-10 bg-black/20 rounded-xl">
                  <a
                    href="https://wa.me/94789656969"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#25d366] transition-colors"
                    aria-label="WhatsApp"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+94789656969"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-cyan-400 transition-colors"
                    aria-label="Call"
                    title="Direct Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/Subashketagoda"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:subhashketagoda@gmail.com"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-amber-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <Link
                    href="/"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-orange-400 hover:text-orange-300 transition-colors"
                    aria-label="Portfolio"
                    title="Full Portfolio"
                  >
                    <Globe className="w-4 h-4" />
                  </Link>
                </div>

                {/* Bottom Row */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] xs:text-[11px] font-mono text-gray-400 relative z-10">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <RotateCw className="w-3 h-3 animate-reverse-spin shrink-0" />
                    <span>TAP TO FLIP FRONT</span>
                  </div>
                  <span className="text-amber-400 font-mono text-[9px] xs:text-[10px] font-bold">
                    EDITION // 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ACTION BUTTONS BELOW CARD
           ========================================================================= */}
        <div className="w-full mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
          {/* WhatsApp & Call Quick Actions */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <a
              href="https://wa.me/94789656969"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 rounded-2xl bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/40 text-[#25d366] font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-[#25d366]/10"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP CHAT</span>
            </a>

            <a
              href="tel:+94789656969"
              className="py-3 px-3 rounded-2xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-300 font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-cyan-500/10"
            >
              <Phone className="w-4 h-4" />
              <span>CALL DIRECT</span>
            </a>
          </div>

          {/* Primary Action: Save Contact (.vcf) with Gold Confetti Explosion */}
          <button
            type="button"
            onClick={handleSaveContact}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-black font-black text-xs sm:text-sm tracking-wide shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer uppercase"
          >
            <Download className="w-4 h-4 text-black stroke-[2.5]" />
            <span>SAVE CONTACT TO PHONE (.VCF)</span>
          </button>

          {/* Secondary Action Grid: Flip Card + Share Card */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="py-2.5 sm:py-3 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/10 text-gray-200 hover:text-white font-mono text-[11px] xs:text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>FLIP CARD</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="py-2.5 sm:py-3 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/10 text-gray-200 hover:text-white font-mono text-[11px] xs:text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">COPIED!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SHARE VCARD</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-md mx-auto px-4 py-4 text-center">
        <p className="font-mono text-[10px] text-gray-500">
          &copy; {new Date().getFullYear()} Subhash Ketagoda &bull; All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
