"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  RotateCw,
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
  Briefcase,
  ArrowLeft,
  X,
  Plus,
} from "lucide-react";

export default function BusinessCardPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

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

    // Smooth subtle Apple Card tilt
    const rotateX = -((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.4 });
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  // Download .vcf file directly for phone address book
  const handleSaveContact = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4", "#10b981", "#ffffff"],
      });
    } catch (e) {
      // Ignore
    }

    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Subhash Ketagoda",
      "N:Ketagoda;Subhash;;;",
      "TITLE:Senior Full-Stack Architect",
      "ORG:Subhash Ketagoda",
      "TEL;TYPE=CELL,VOICE;VALUE=uri:tel:+94789656969",
      "TEL;TYPE=WORK,VOICE:+94789656969",
      "TEL;TYPE=WHATSAPP:+94789656969",
      "EMAIL;TYPE=INTERNET,WORK:subhashketagoda@gmail.com",
      "ADR;TYPE=WORK:;;Colombo;;;Sri Lanka",
      "URL:https://subhashketagoda.com",
      "URL;TYPE=GitHub:https://github.com/Subashketagoda",
      "URL;TYPE=Fiverr:https://www.fiverr.com/apexgendigital/design-and-develop-a-modern-premium-business-website",
      "NOTE:Senior Full-Stack Engineer & Architect specializing in Next.js 15, React 19, TypeScript, POS Engines, and Cloud Distributed Systems.",
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

  // Native share or clipboard copy
  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://subhashketagoda.com/business-card";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Subhash Ketagoda - Apple Digital Card",
          text: "Connect with Subhash Ketagoda, Senior Full-Stack Architect.",
          url,
        });
        return;
      } catch (err) {
        // Fallback
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
    <div className="min-h-screen w-full bg-[#050608] text-white selection:bg-white selection:text-black flex flex-col justify-between relative overflow-x-hidden antialiased">
      {/* Cinematic Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-b from-white/[0.07] via-sky-500/[0.02] to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[160px]" />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-10 w-full max-w-md mx-auto px-4 sm:px-6 pt-5 sm:pt-7 flex items-center justify-between">
        <Link
          href="/card"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white/70 hover:text-white text-xs font-sans transition-all active:scale-95 backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-xs font-sans font-medium transition-all active:scale-95 backdrop-blur-md shadow-sm"
          >
            <Briefcase className="w-3.5 h-3.5 text-white/80" />
            <span>Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-[340px] xs:max-w-[370px] sm:max-w-[400px] mx-auto px-3 xs:px-4 py-4 sm:py-6 flex flex-col items-center">
        {/* Apple Style Section Tagline */}
        <div className="text-center mb-4 sm:mb-5">
          <span className="text-[11px] xs:text-xs font-sans text-white/50 tracking-wide font-medium">
            Apple Card &bull; Titanium Edition
          </span>
        </div>

        {/* =========================================================================
            APPLE CARD: WHITE TITANIUM WITH PASTEL SPECTRUM IRIDESCENCE
           ========================================================================= */}
        <div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onClick={() => setIsFlipped(!isFlipped)}
          className="perspective-1000 w-full cursor-pointer select-none group min-h-[460px] xs:min-h-[450px]"
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.15s cubic-bezier(0.2, 0, 0, 1)",
          }}
        >
          <div
            className={`w-full relative transition-transform duration-700 transform-style-3d min-h-[460px] xs:min-h-[450px] ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* =========================================================================
                FRONT SIDE: AUTHENTIC WHITE TITANIUM APPLE CARD
               ========================================================================= */}
            <div className="backface-hidden w-full h-full min-h-[460px] xs:min-h-[450px] rounded-[30px] p-[1.5px] bg-gradient-to-b from-white via-[#e8e9ee] to-[#c7c8cf] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(255,255,255,0.12)] relative overflow-hidden group-hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95),0_0_45px_rgba(255,255,255,0.2)] transition-all duration-300">
              {/* Inner White Titanium Matte Ceramic Body */}
              <div className="w-full h-full rounded-[28.5px] bg-gradient-to-br from-[#ffffff] via-[#f7f7fa] to-[#ececef] p-5 xs:p-6 sm:p-6.5 relative overflow-hidden flex flex-col justify-between">
                
                {/* Iconic Apple Card Pastel Iridescent Mesh Gradient */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[28.5px] opacity-55 group-hover:opacity-75 transition-opacity duration-500"
                  style={{
                    background: `
                      radial-gradient(circle at 10% 20%, rgba(254, 205, 165, 0.75) 0%, transparent 45%),
                      radial-gradient(circle at 85% 15%, rgba(254, 182, 199, 0.7) 0%, transparent 45%),
                      radial-gradient(circle at 80% 85%, rgba(199, 210, 254, 0.75) 0%, transparent 45%),
                      radial-gradient(circle at 20% 80%, rgba(186, 230, 253, 0.7) 0%, transparent 45%),
                      radial-gradient(circle at 50% 50%, rgba(254, 240, 138, 0.45) 0%, transparent 50%)
                    `,
                  }}
                />

                {/* Moving Specular Glare Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[28.5px] transition-opacity duration-200"
                  style={{
                    background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.25) 50%, transparent 80%)`,
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Top Row: Milled Silver EMV Chip & Contactless Icon */}
                <div className="flex items-center justify-between relative z-10">
                  {/* Precision-Milled Silver Titanium Chip */}
                  <div className="w-10 h-7.5 rounded-lg bg-gradient-to-br from-[#ffffff] via-[#e5e5ea] to-[#c7c7cc] border border-[#aeaeb2] p-1 flex flex-col justify-between shadow-sm">
                    <div className="flex justify-between items-center px-0.5">
                      <span className="w-2 h-0.5 bg-[#8e8e93] rounded-full" />
                      <span className="w-2 h-0.5 bg-[#8e8e93] rounded-full" />
                    </div>
                    <div className="self-center w-3.5 h-2 rounded-[2px] border border-[#8e8e93] flex items-center justify-center bg-white/40">
                      <div className="w-1.5 h-0.5 bg-[#636366]" />
                    </div>
                    <div className="flex justify-between items-center px-0.5">
                      <span className="w-2 h-0.5 bg-[#8e8e93] rounded-full" />
                      <span className="w-2 h-0.5 bg-[#8e8e93] rounded-full" />
                    </div>
                  </div>

                  {/* Laser-etched Contactless Wave & Status */}
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#6e6e73]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9a5 5 0 0 1 0 6" />
                      <path d="M9 6a9 9 0 0 1 0 12" />
                      <path d="M12 3a13 13 0 0 1 0 18" />
                    </svg>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                  </div>
                </div>

                {/* Center Identity Section: Portrait & Laser-Etched Typography */}
                <div className="my-auto py-2 text-center flex flex-col items-center relative z-10">
                  {/* Clean Circular Portrait with Titanium Hairline Rim */}
                  <div className="relative w-22 h-22 xs:w-24 xs:h-24 sm:w-26 sm:h-26 rounded-full p-[2px] bg-gradient-to-b from-white via-white/80 to-[#dcdde2] shadow-xl mb-3 border border-black/[0.06]">
                    <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#f2f2f5] to-[#e5e5ea] overflow-hidden">
                      <Image
                        src="/images/subash-hero.png"
                        alt="Subhash Ketagoda"
                        fill
                        sizes="105px"
                        priority
                        className="object-contain object-bottom pt-1 scale-105"
                      />
                    </div>
                  </div>

                  {/* Name in Apple Titanium Laser-Etched Graphite */}
                  <h2 className="text-2xl xs:text-3xl font-semibold tracking-tight text-[#1d1d1f] leading-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">
                    Subhash Ketagoda
                  </h2>

                  <p className="text-[#6e6e73] text-xs xs:text-sm font-sans tracking-wide mt-1 font-medium">
                    Senior Full-Stack Architect
                  </p>

                  <div className="flex items-center gap-1.5 text-[#86868b] text-[11px] xs:text-xs mt-1">
                    <MapPin className="w-3 h-3 text-[#86868b] shrink-0" />
                    <span>Colombo, Sri Lanka &bull; Remote</span>
                  </div>

                  {/* Phone Pill */}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/70 hover:bg-white border border-black/[0.08] text-[#1d1d1f] text-xs font-mono font-medium shadow-sm transition-colors">
                    <Phone className="w-3 h-3 text-emerald-600" />
                    <span>+94 78 965 6969</span>
                  </div>
                </div>

                {/* Specialties Clean Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 relative z-10 mb-2">
                  {["Next.js 15", "React 19", "TypeScript", "POS Engine", "Cloud"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-black/[0.04] border border-black/[0.06] text-[10px] font-sans font-medium text-[#424245]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Row: Laser-Engraved Cardholder Name & Flip Hint */}
                <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-sans text-[#6e6e73] relative z-10">
                  <span className="font-mono tracking-widest text-[9px] uppercase font-semibold text-[#1d1d1f]">
                    SUBHASH KETAGODA
                  </span>
                  <div className="flex items-center gap-1 text-[#6e6e73] group-hover:text-[#1d1d1f] transition-colors font-medium">
                    <RotateCw className="w-3 h-3 animate-reverse-spin" />
                    <span>Tap to flip</span>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                BACK SIDE: WHITE TITANIUM APPLE CARD BACK
               ========================================================================= */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full min-h-[460px] xs:min-h-[450px] rounded-[30px] p-[1.5px] bg-gradient-to-b from-white via-[#e8e9ee] to-[#c7c8cf] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(255,255,255,0.12)] overflow-hidden group-hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95),0_0_45px_rgba(255,255,255,0.2)] transition-all duration-300">
              {/* Inner White Titanium Body */}
              <div className="w-full h-full rounded-[28.5px] bg-gradient-to-br from-[#ffffff] via-[#f7f7fa] to-[#ececef] p-5 xs:p-6 relative overflow-hidden flex flex-col justify-between">
                
                {/* Pastel Glow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[28.5px] opacity-45 group-hover:opacity-65 transition-opacity duration-500"
                  style={{
                    background: `
                      radial-gradient(circle at 90% 20%, rgba(254, 205, 165, 0.65) 0%, transparent 45%),
                      radial-gradient(circle at 15% 15%, rgba(254, 182, 199, 0.6) 0%, transparent 45%),
                      radial-gradient(circle at 20% 85%, rgba(199, 210, 254, 0.65) 0%, transparent 45%),
                      radial-gradient(circle at 80% 80%, rgba(186, 230, 253, 0.6) 0%, transparent 45%)
                    `,
                  }}
                />

                {/* 1. Sleek Titanium Magnetic Stripe */}
                <div className="-mx-5 xs:-mx-6 -mt-5 xs:-mt-6 h-10 bg-[#1d1d1f] border-y border-[#121214] flex items-center px-5 justify-between relative z-10">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-white/50 uppercase">
                    AUTHENTIC EXECUTIVE VCARD // NFC
                  </span>
                  <span className="font-mono text-[8px] text-white/60">2026</span>
                </div>

                {/* 2. Signature Panel & Security Code */}
                <div className="my-1.5 flex items-center gap-2 relative z-10">
                  <div className="flex-1 h-8 rounded-lg bg-white/80 border border-black/[0.08] px-3 flex items-center justify-between shadow-sm">
                    <img
                      src="/images/subhash-signature.png"
                      alt="Subhash Ketagoda Signature"
                      className="h-6 w-auto object-contain opacity-90 brightness-50"
                    />
                    <span className="font-mono text-[8px] text-[#86868b] uppercase font-semibold">
                      SIGNATURE
                    </span>
                  </div>
                  <div className="h-8 px-2.5 rounded-lg bg-white/80 border border-black/[0.08] flex items-center justify-center shadow-sm">
                    <span className="font-mono text-[10px] text-[#1d1d1f] font-semibold">CVV 969</span>
                  </div>
                </div>

                {/* 3. Middle Section: QR Code + Direct Actions */}
                <div className="flex items-center gap-3 my-auto relative z-10">
                  {/* Clean Apple-style White Squircle QR Container (Tap to Enlarge) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowQrModal(true);
                    }}
                    className="w-[105px] xs:w-[115px] p-2.5 rounded-2xl bg-white border border-black/[0.08] flex flex-col items-center justify-center shrink-0 shadow-md transition-transform active:scale-95 cursor-zoom-in hover:shadow-lg"
                    title="Click to view full size"
                  >
                    <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src="/images/qr-code.png"
                        alt="Subhash Ketagoda Official QR Code"
                        width={100}
                        height={100}
                        priority
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <span className="text-[8px] font-sans font-semibold text-[#1d1d1f] mt-1 uppercase tracking-wider text-center">
                      Scan to Add
                    </span>
                  </div>

                  {/* Clean Direct Channels List */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/94789656969"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-3 py-1.5 rounded-xl bg-white/85 hover:bg-white border border-black/[0.08] flex items-center justify-between text-left text-[#1d1d1f] transition-all active:scale-95 shadow-sm"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate text-xs font-semibold">WhatsApp</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[#86868b] shrink-0" />
                    </a>

                    {/* Direct Call */}
                    <a
                      href="tel:+94789656969"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-3 py-1.5 rounded-xl bg-white/85 hover:bg-white border border-black/[0.08] flex items-center justify-between text-left text-[#1d1d1f] transition-all active:scale-95 shadow-sm"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="truncate text-xs font-mono font-medium">+94 78 965 6969</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="p-0.5 text-[#86868b] hover:text-[#1d1d1f]"
                        title="Copy phone"
                      >
                        {copiedPhone ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:subhashketagoda@gmail.com"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full px-3 py-1.5 rounded-xl bg-white/85 hover:bg-white border border-black/[0.08] flex items-center justify-between text-left text-[#1d1d1f] transition-all active:scale-95 shadow-sm"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Mail className="w-3.5 h-3.5 text-[#6e6e73] shrink-0" />
                        <span className="truncate text-xs font-medium">Email</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-0.5 text-[#86868b] hover:text-[#1d1d1f]"
                        title="Copy email"
                      >
                        {copiedEmail ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </a>
                  </div>
                </div>

                {/* 4. Social Dock */}
                <div className="flex items-center justify-around py-1.5 border-t border-black/[0.06] relative z-10">
                  <a
                    href="https://wa.me/94789656969"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full hover:bg-black/5 text-[#1d1d1f] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </a>
                  <a
                    href="tel:+94789656969"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full hover:bg-black/5 text-[#1d1d1f] transition-colors"
                    aria-label="Call"
                  >
                    <Phone className="w-4 h-4 text-sky-600" />
                  </a>
                  <a
                    href="https://github.com/Subashketagoda"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full hover:bg-black/5 text-[#424245] hover:text-[#1d1d1f] transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full hover:bg-black/5 text-[#424245] hover:text-[#1d1d1f] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <Link
                    href="/"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full hover:bg-black/5 text-[#424245] hover:text-[#1d1d1f] transition-colors"
                    aria-label="Portfolio"
                  >
                    <Globe className="w-4 h-4" />
                  </Link>
                </div>

                {/* Bottom Row */}
                <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between text-[10px] font-sans text-[#86868b] relative z-10 font-medium">
                  <div className="flex items-center gap-1 text-[#6e6e73]">
                    <RotateCw className="w-3 h-3 animate-reverse-spin" />
                    <span>Tap to flip front</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#86868b]">TITANIUM PASS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            APPLE STYLE ACTIONS BELOW CARD
           ========================================================================= */}
        <div className="w-full mt-5 sm:mt-6 space-y-2.5">
          {/* Primary Apple Wallet Style Button: Save Contact */}
          <button
            type="button"
            onClick={handleSaveContact}
            className="w-full py-3.5 px-5 rounded-full bg-white text-black font-semibold text-xs xs:text-sm tracking-tight shadow-xl hover:bg-gray-100 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add to Contacts (.vcf)</span>
          </button>

          {/* Quick Connect Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://wa.me/94789656969"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.98] backdrop-blur-md"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+94789656969"
              className="py-2.5 px-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.98] backdrop-blur-md"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Direct</span>
            </a>
          </div>

          {/* Flip & Share Secondary Controls */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="py-2 px-3 rounded-full bg-transparent hover:bg-white/[0.04] text-white/60 hover:text-white text-xs font-sans flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Flip Card</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="py-2 px-3 rounded-full bg-transparent hover:bg-white/[0.04] text-white/60 hover:text-white text-xs font-sans flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Pass</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-md mx-auto px-4 py-4 text-center">
        <p className="text-[11px] text-white/30 font-sans">
          &copy; {new Date().getFullYear()} Subhash Ketagoda
        </p>
      </footer>

      {/* Enlarged QR Modal (Apple Clean Style) */}
      {showQrModal && (
        <div
          onClick={() => setShowQrModal(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[300px] w-full p-6 rounded-3xl bg-[#121318] border border-white/15 shadow-2xl flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="w-full flex items-center justify-between pb-1">
              <span className="text-xs font-medium text-white/80">Scan Code</span>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 bg-white rounded-2xl shadow-xl w-56 h-56 relative overflow-hidden flex items-center justify-center">
              <Image
                src="/images/qr-code.png"
                alt="Subhash Ketagoda QR Code"
                width={220}
                height={220}
                priority
                className="object-contain w-full h-full"
              />
            </div>

            <div className="space-y-0.5">
              <h4 className="text-white font-semibold text-sm">Subhash Ketagoda</h4>
              <p className="text-white/50 text-xs font-mono">+94 78 965 6969</p>
            </div>

            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
