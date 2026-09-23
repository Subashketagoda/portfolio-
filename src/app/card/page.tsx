import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroCard from "@/components/HeroCard";
import {
  CreditCard,
  Briefcase,
  ArrowRight,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Share2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Subhash Ketagoda | Digital Identity & Portal",
  description:
    "Connect with Subhash Ketagoda - Senior Full-Stack Engineer. View the digital business card or explore the full engineering portfolio.",
};

export default function CardPortalPage() {
  return (
    <div className="min-h-screen w-full bg-[#080b0f] text-white selection:bg-orange-500 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-500/15 via-amber-500/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-[-10%] w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px]" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
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
            className="h-7 sm:h-9 w-auto object-contain drop-shadow-[0_2px_12px_rgba(249,115,22,0.4)]"
          />
        </Link>

        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[9px] xs:text-[10px] sm:text-xs text-emerald-400 font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>GATEWAY ACTIVE</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-3.5 xs:px-4 sm:px-6 py-4 sm:py-8 flex flex-col items-center">
        {/* Header Eyebrow & Intro */}
        <div className="text-center space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.15)]">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
            <span>OFFICIAL PROFILE PORTAL</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Subhash{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Ketagoda
            </span>
          </h1>

          <p className="text-gray-400 text-[11px] xs:text-xs sm:text-sm md:text-base max-w-lg mx-auto font-normal leading-relaxed px-2">
            Senior Full-Stack Architect &bull; POS Engines &bull; High-Performance Systems
          </p>
        </div>

        {/* The Hero Card */}
        <div className="w-full flex justify-center mb-5 sm:mb-8">
          <HeroCard className="w-full" />
        </div>

        {/* Options Section: Business Card & Portfolio */}
        <div className="w-full max-w-[340px] xs:max-w-[380px] sm:max-w-2xl mx-auto space-y-2.5 sm:space-y-4">
          <div className="text-center pb-0.5">
            <span className="font-mono text-[10px] xs:text-[11px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">
              // SELECT DESTINATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* OPTION 1: Business Card */}
            <Link
              href="/business-card"
              className="group relative p-4 xs:p-4.5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#131724]/90 via-[#0e121c]/95 to-[#090c14]/98 border border-white/10 hover:border-cyan-400/60 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:-translate-y-1 active:scale-[0.98] overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic top highlight accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent group-hover:h-[3px] transition-all" />
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shadow-md shrink-0">
                    <CreditCard className="w-4 h-4 xs:w-5 xs:h-5" />
                  </div>
                  <span className="font-mono text-[9px] xs:text-[10px] uppercase px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-bold">
                    NFC / vCard
                  </span>
                </div>

                <div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                    <span>Business Card</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 opacity-80 sm:opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-gray-400 text-[11px] xs:text-xs sm:text-sm mt-0.5 sm:mt-1 leading-relaxed">
                    Interactive 3D digital contact card with instant address book download (.vcf) &amp; QR scanner.
                  </p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] xs:text-xs font-semibold text-cyan-400">
                <span>OPEN BUSINESS CARD</span>
                <span className="font-mono text-[11px] text-gray-500 group-hover:text-cyan-300">&rarr;</span>
              </div>
            </Link>

            {/* OPTION 2: Portfolio */}
            <Link
              href="/"
              className="group relative p-4 xs:p-4.5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#18151f]/90 via-[#13101b]/95 to-[#0b0a12]/98 border border-white/10 hover:border-orange-500/60 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:-translate-y-1 active:scale-[0.98] overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic top highlight accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent group-hover:h-[3px] transition-all" />

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all shadow-md shrink-0">
                    <Briefcase className="w-4 h-4 xs:w-5 xs:h-5" />
                  </div>
                  <span className="font-mono text-[9px] xs:text-[10px] uppercase px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20 font-bold">
                    Case Studies
                  </span>
                </div>

                <div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white group-hover:text-orange-200 transition-colors flex items-center gap-1.5">
                    <span>Full Portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 opacity-80 sm:opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-gray-400 text-[11px] xs:text-xs sm:text-sm mt-0.5 sm:mt-1 leading-relaxed">
                    Explore live enterprise systems, production benchmarks, client reviews, and full-stack services.
                  </p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] xs:text-xs font-semibold text-orange-400">
                <span>EXPLORE PORTFOLIO</span>
                <span className="font-mono text-[11px] text-gray-500 group-hover:text-orange-300">&rarr;</span>
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
