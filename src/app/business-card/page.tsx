"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  ArrowRight,
} from "lucide-react";

export default function BusinessCardPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Download .vcf file directly for phone address book
  const handleSaveContact = () => {
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
    <div className="min-h-screen w-full bg-[#080b0f] text-white selection:bg-orange-500 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-orange-500/20 via-amber-500/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-[-15%] w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[150px]" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-10 w-full max-w-md mx-auto px-3.5 xs:px-4 sm:px-6 pt-4 sm:pt-6 flex items-center justify-between">
        <Link
          href="/card"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-300 hover:text-white text-[11px] xs:text-xs font-mono transition-all active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>PORTAL HUB</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 hover:text-orange-300 text-[11px] xs:text-xs font-mono font-semibold transition-all shadow-[0_0_12px_rgba(249,115,22,0.15)] active:scale-95"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] mx-auto px-3 xs:px-4 py-4 sm:py-8 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-[10px] xs:text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
          <span>DIGITAL VCARD &bull; NFC</span>
        </div>

        <p className="text-gray-400 text-[11px] xs:text-xs sm:text-sm text-center mb-3 sm:mb-5">
          Tap card or click button below to flip front &amp; back.
        </p>

        {/* =========================================================================
            3D FLIPPABLE BUSINESS CARD CONTAINER
           ========================================================================= */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="perspective-1000 w-full cursor-pointer select-none group min-h-[450px] xs:min-h-[440px]"
        >
          <div
            className={`w-full relative transition-transform duration-700 transform-style-3d min-h-[450px] xs:min-h-[440px]`}
          >
            {/* =========================================================================
                FRONT SIDE OF THE CARD
               ========================================================================= */}
            <div className="backface-hidden w-full h-full min-h-[450px] xs:min-h-[440px] rounded-3xl bg-gradient-to-br from-[#161a29]/95 via-[#0e121d]/98 to-[#090b12] border border-white/[0.12] p-4 xs:p-5 sm:p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85)] relative overflow-hidden flex flex-col justify-between group-hover:border-orange-500/40 transition-colors duration-300">
              {/* Luxury Accent Glow Lines */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />
              <div className="absolute -top-24 -right-24 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Row: NFC Chip & Status Indicator */}
              <div className="flex items-center justify-between relative z-10">
                {/* Contactless / NFC Chip Graphic */}
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-6 rounded-md bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 p-[1px] shadow-sm shrink-0">
                    <div className="w-full h-full rounded-[5px] bg-[#1a1608] flex items-center justify-center">
                      <div className="w-5 h-3.5 border border-amber-400/40 rounded-sm grid grid-cols-2 gap-0.5 p-0.5">
                        <div className="bg-amber-400/30 rounded-xs" />
                        <div className="bg-amber-400/30 rounded-xs" />
                      </div>
                    </div>
                  </div>
                  {/* NFC Wave Icon */}
                  <svg
                    className="w-3.5 h-3.5 text-orange-400/80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8a6 6 0 0 1 0 8" />
                    <path d="M9 5a10 10 0 0 1 0 14" />
                    <path d="M12 2a14 14 0 0 1 0 20" />
                  </svg>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] xs:text-[10px] font-mono font-semibold shadow-sm shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>AVAILABLE FOR WORK</span>
                </div>
              </div>

              {/* Middle Section: Portrait & Identity */}
              <div className="flex items-center gap-3 xs:gap-3.5 my-3 relative z-10">
                {/* Glowing Avatar Portrait */}
                <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-22 sm:h-22 rounded-2xl p-[2px] bg-gradient-to-br from-orange-400 via-amber-400 to-transparent shrink-0 shadow-lg shadow-orange-500/15">
                  <div className="relative w-full h-full rounded-[14px] bg-[#0c0f18] overflow-hidden">
                    <Image
                      src="/images/subash-hero.png"
                      alt="Subhash Ketagoda"
                      fill
                      sizes="88px"
                      className="object-contain object-bottom pt-1"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[10px] xs:text-[11px] font-mono font-bold tracking-wider text-orange-400 uppercase truncate">
                    FULL-STACK ARCHITECT
                  </div>
                  <h2 className="text-lg xs:text-xl sm:text-2xl font-black text-white tracking-tight leading-tight truncate">
                    Subhash Ketagoda
                  </h2>
                  <div className="flex items-center gap-1 text-gray-400 text-[11px] xs:text-xs mt-1 truncate">
                    <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                    <span className="truncate">Colombo, Sri Lanka</span>
                  </div>
                  {/* Phone & WhatsApp direct trigger */}
                  <div className="flex items-center gap-1 text-emerald-400 text-[11px] xs:text-xs mt-0.5 truncate font-mono font-semibold">
                    <Phone className="w-3 h-3 shrink-0 text-emerald-400" />
                    <span>+94 78 965 6969</span>
                  </div>
                </div>
              </div>

              {/* Tech Specialties Badges */}
              <div className="space-y-1.5 relative z-10">
                <div className="flex flex-wrap gap-1 xs:gap-1.5">
                  {["Next.js 15", "React 19", "TypeScript", "POS Engines", "Node.js", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[9px] xs:text-[10px] font-mono text-gray-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Tap to Flip Guide */}
              <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] xs:text-[11px] font-mono text-gray-400 relative z-10">
                <div className="flex items-center gap-1.5 text-orange-400">
                  <RotateCw className="w-3 h-3 animate-reverse-spin shrink-0" />
                  <span>TAP CARD TO FLIP</span>
                </div>
                <span className="text-gray-500 font-mono text-[9px] xs:text-[10px]">ID: SK-2026</span>
              </div>
            </div>

            {/* =========================================================================
                BACK SIDE OF THE CARD
               ========================================================================= */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full min-h-[450px] xs:min-h-[440px] rounded-3xl bg-gradient-to-br from-[#161a29]/95 via-[#0e121d]/98 to-[#090b12] border border-white/[0.12] p-4 xs:p-5 sm:p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between group-hover:border-orange-500/40 transition-colors duration-300">
              {/* Luxury Accent Glow Lines */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
              <div className="absolute -top-24 -left-24 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Back Header */}
              <div className="flex items-center justify-between relative z-10">
                <img
                  src="/images/subhash-signature.png"
                  alt="Subhash Ketagoda Signature"
                  className="h-6 sm:h-7 w-auto object-contain drop-shadow-[0_2px_10px_rgba(249,115,22,0.4)]"
                />
                <span className="font-mono text-[9px] xs:text-[10px] text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 font-bold shrink-0">
                  DIRECT CHANNELS
                </span>
              </div>

              {/* Middle Section: QR Code + Quick Contact Channels */}
              <div className="flex items-center gap-2.5 xs:gap-3 my-2 relative z-10">
                {/* Built-in High-Contrast QR Code */}
                <div className="w-[95px] xs:w-[105px] sm:w-[115px] p-2 rounded-2xl bg-white flex flex-col items-center justify-center shrink-0 shadow-lg">
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
                    <rect x="48" y="44" width="8" height="8" rx="1" fill="#ea580c" />
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
                  <span className="text-[8px] xs:text-[9px] font-mono font-bold text-gray-800 mt-1 uppercase tracking-tight text-center">
                    SCAN TO CONNECT
                  </span>
                </div>

                {/* Direct Channel Action List */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  {/* WhatsApp Direct Chat */}
                  <a
                    href="https://wa.me/94789656969"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-[#25d366]/10 hover:bg-[#25d366]/20 active:bg-[#25d366]/30 border border-[#25d366]/30 flex items-center justify-between text-left text-[#25d366] transition-colors"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <MessageCircle className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
                      <span className="truncate text-[10px] xs:text-[11px] font-bold">WhatsApp Chat</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-[#25d366] shrink-0 ml-1" />
                  </a>

                  {/* Direct Phone Call */}
                  <a
                    href="tel:+94789656969"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/[0.08] flex items-center justify-between text-left transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-gray-300 min-w-0">
                      <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate text-[10px] xs:text-[11px] font-mono font-semibold">+94 78 965 6969</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="ml-1 p-0.5 hover:text-white text-gray-400"
                      title="Copy phone"
                    >
                      {copiedPhone ? (
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      ) : (
                        <Copy className="w-3 h-3 text-gray-500 shrink-0" />
                      )}
                    </button>
                  </a>

                  {/* Email Me */}
                  <a
                    href="mailto:subhashketagoda@gmail.com"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/[0.08] flex items-center justify-between text-left transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-gray-300 min-w-0">
                      <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate text-[10px] xs:text-[11px]">Email Message</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="ml-1 p-0.5 hover:text-white text-gray-400"
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      ) : (
                        <Copy className="w-3 h-3 text-gray-500 shrink-0" />
                      )}
                    </button>
                  </a>

                  {/* Fiverr Escrow */}
                  <a
                    href="https://www.fiverr.com/apexgendigital/design-and-develop-a-modern-premium-business-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-[#1dbf73]/10 hover:bg-[#1dbf73]/20 active:bg-[#1dbf73]/30 border border-[#1dbf73]/30 flex items-center justify-between text-left text-[#1dbf73] transition-colors"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M23.002 12c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11zm-5.04-3.667h-2.12v-.785c0-.528.273-.787.82-.787h1.3v-2.02h-1.92c-1.932 0-2.88 1.058-2.88 3.125v.467h-1.428v2.02h1.428v6.905h2.68v-6.905h1.868l.252-2.02zm-8.828 0h-2.68v8.925h2.68V8.333zm-1.34-1.442c.86 0 1.558-.698 1.558-1.558 0-.86-.698-1.558-1.558-1.558-.86 0-1.558.698-1.558 1.558 0 .86.698 1.558 1.558 1.558z" />
                      </svg>
                      <span className="truncate text-[10px] xs:text-[11px] font-semibold">Fiverr Escrow</span>
                    </div>
                    <ExternalLink className="w-3 h-3 shrink-0 ml-1" />
                  </a>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="flex items-center justify-around py-1.5 border-t border-white/[0.08] relative z-10">
                <a
                  href="https://wa.me/94789656969"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] active:bg-white/[0.15] text-[#25d366] transition-colors"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="tel:+94789656969"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] active:bg-white/[0.15] text-emerald-400 transition-colors"
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
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] active:bg-white/[0.15] text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] active:bg-white/[0.15] text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:subhashketagoda@gmail.com"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] active:bg-white/[0.15] text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <Link
                  href="/"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] active:bg-white/[0.15] text-orange-400 hover:text-orange-300 transition-colors"
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
                  <span>TAP CARD TO FLIP FRONT</span>
                </div>
                <span className="text-gray-500 font-mono text-[9px] xs:text-[10px]">VERIFIED</span>
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
              className="py-3 px-3 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/40 text-[#25d366] font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-[#25d366]/10"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP CHAT</span>
            </a>

            <a
              href="tel:+94789656969"
              className="py-3 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-emerald-500/10"
            >
              <Phone className="w-4 h-4" />
              <span>CALL DIRECT</span>
            </a>
          </div>

          {/* Primary Action: Save Contact (.vcf) */}
          <button
            type="button"
            onClick={handleSaveContact}
            className="w-full py-3.5 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:shadow-[0_0_35px_rgba(249,115,22,0.55)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>SAVE CONTACT TO PHONE (.VCF)</span>
          </button>

          {/* Secondary Action Grid: Flip Card + Share Card */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="py-2.5 sm:py-3 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/10 text-gray-200 hover:text-white font-mono text-[11px] xs:text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5 text-orange-400 shrink-0" />
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
                  <span className="text-emerald-300">COPIED</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SHARE</span>
                </>
              )}
            </button>
          </div>

          {/* Portfolio CTA Button */}
          <Link
            href="/"
            className="w-full py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[#121520]/80 backdrop-blur-md border border-white/10 hover:border-orange-500/50 text-gray-200 hover:text-white font-semibold text-[11px] xs:text-xs tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all group active:scale-[0.98]"
          >
            <Briefcase className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="truncate">EXPLORE FULL PORTFOLIO &amp; WORK</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-orange-400 transition-transform shrink-0" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-4 text-center text-gray-500 text-[10px] sm:text-xs font-mono border-t border-white/[0.06] px-4">
        <div>&copy; {new Date().getFullYear()} Subhash Ketagoda &bull; Digital NFC vCard</div>
      </footer>
    </div>
  );
}
