import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCard from "@/components/HeroCard";
import {
  CreditCard,
  Briefcase,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Share2,
  CheckCircle2,
  QrCode,
  Layers,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Subhash Ketagoda | Digital Identity & Portal",
  description:
    "Connect with Subhash Ketagoda - Senior Full-Stack Engineer. View the digital business card or explore the full engineering portfolio.",
};

export default function CardPortalPage() {
  return (
    <div className="min-h-screen w-full bg-[#06080c] text-white selection:bg-amber-500 selection:text-black flex flex-col justify-between relative overflow-x-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-b from-amber-500/15 via-orange-500/8 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-[-10%] w-[450px] h-[450px] bg-emerald-500/6 rounded-full blur-[140px]" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-10 w-full max-w-4xl mx-auto px-3.5 xs:px-4 sm:px-6 pt-4 sm:pt-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95"
        >
          <img
            src="/images/subhash-signature.png"
            alt="Subhash Ketagoda"
            className="h-7 sm:h-9 w-auto object-contain drop-shadow-[0_2px_12px_rgba(245,158,11,0.4)]"
          />
        </Link>

        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[9px] xs:text-[10px] sm:text-xs text-emerald-400 font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>GATEWAY ONLINE</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-3.5 xs:px-4 sm:px-6 py-4 sm:py-8 flex flex-col items-center">
        {/* Header Eyebrow & Intro */}
        <div className="text-center space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-400/30 text-amber-300 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
            <span>EXECUTIVE PROFILE PORTAL</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Subhash{" "}
            <span className="gold-foil-text drop-shadow-[0_2px_15px_rgba(245,158,11,0.35)]">
              Ketagoda
            </span>
          </h1>

          <p className="text-gray-400 text-[11px] xs:text-xs sm:text-sm md:text-base max-w-lg mx-auto font-normal leading-relaxed px-2">
            Senior Full-Stack Architect &bull; POS Billing Engines &bull; High-Throughput Distributed Cloud
          </p>
        </div>

        {/* The Hero Card */}
        <div className="w-full flex justify-center mb-6 sm:mb-9">
          <HeroCard className="w-full" />
        </div>

        {/* Options Section: Business Card & Portfolio */}
        <div className="w-full max-w-[340px] xs:max-w-[380px] sm:max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <div className="text-center pb-0.5">
            <span className="font-mono text-[10px] xs:text-[11px] sm:text-xs text-amber-400/80 uppercase tracking-widest font-bold">
              // CHOOSE YOUR DESTINATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
            {/* OPTION 1: Business Card */}
            <Link
              href="/business-card"
              className="group relative p-4.5 xs:p-5 sm:p-6 rounded-[22px] bg-gradient-to-b from-[#101422]/95 via-[#0a0d16]/98 to-[#06080e] border border-cyan-500/25 hover:border-cyan-400/70 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.3)] hover:-translate-y-1 active:scale-[0.98] overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic top highlight accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:h-[3px] transition-all" />
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-500/15 border border-cyan-400/35 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-md shadow-cyan-500/15 shrink-0">
                    <CreditCard className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="font-mono text-[9px] xs:text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/25 font-bold flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-2.5 h-2.5" /> TITANIUM NFC
                  </span>
                </div>

                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-white group-hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                    <span>Business Card</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 opacity-80 sm:opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                  </h3>
                  <p className="text-gray-400 text-[11px] xs:text-xs sm:text-sm mt-1 leading-relaxed">
                    Interactive 3D metal card with instant address book download (.vcf), QR scanner, and direct WhatsApp / call channels.
                  </p>
                </div>

                {/* Micro preview strip */}
                <div className="p-2 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between font-mono text-[9px] xs:text-[10px] text-gray-300">
                  <div className="flex items-center gap-1.5 text-cyan-300">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Instant vCard (.vcf)</span>
                  </div>
                  <span className="text-gray-500 font-semibold">SK-2026</span>
                </div>
              </div>

              <div className="pt-3.5 mt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] xs:text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors relative z-10">
                <span>LAUNCH DIGITAL CARD</span>
                <span className="font-mono text-sm group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>

            {/* OPTION 2: Portfolio */}
            <Link
              href="/"
              className="group relative p-4.5 xs:p-5 sm:p-6 rounded-[22px] bg-gradient-to-b from-[#181310]/95 via-[#110d0b]/98 to-[#080706] border border-amber-500/25 hover:border-amber-400/70 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(245,158,11,0.3)] hover:-translate-y-1 active:scale-[0.98] overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic top highlight accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:h-[3px] transition-all" />
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />

              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500/15 border border-amber-400/35 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:bg-amber-500/25 transition-all shadow-md shadow-amber-500/15 shrink-0">
                    <Briefcase className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-mono text-[9px] xs:text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25 font-bold flex items-center gap-1 shadow-sm">
                    <Terminal className="w-2.5 h-2.5" /> ARCHITECTURE
                  </span>
                </div>

                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-white group-hover:text-amber-200 transition-colors flex items-center gap-1.5">
                    <span>Full Portfolio</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 opacity-80 sm:opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                  </h3>
                  <p className="text-gray-400 text-[11px] xs:text-xs sm:text-sm mt-1 leading-relaxed">
                    Explore live enterprise systems, production benchmarks, case studies, client reviews, and full-stack services.
                  </p>
                </div>

                {/* Micro preview strip */}
                <div className="p-2 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between font-mono text-[9px] xs:text-[10px] text-gray-300">
                  <div className="flex items-center gap-1.5 text-amber-300">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Case Studies &bull; Benchmarks</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">99+ CWV</span>
                </div>
              </div>

              <div className="pt-3.5 mt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] xs:text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors relative z-10">
                <span>EXPLORE PORTFOLIO</span>
                <span className="font-mono text-sm group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-4 sm:py-6 text-center text-gray-500 text-[10px] sm:text-xs font-mono border-t border-white/[0.06] px-4">
        <div>&copy; {new Date().getFullYear()} Subhash Ketagoda. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
