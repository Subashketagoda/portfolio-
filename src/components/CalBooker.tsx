"use client";

import { CalendarDays, ArrowRight, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function CalBooker() {
  return (
    <div className="mt-10 sm:mt-14 relative">
      {/* Section Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.12)]">
          <CalendarDays className="w-3.5 h-3.5 text-orange-400" />
          <span>INSTANT DISCOVERY CALL</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Description */}
      <p className="text-center text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
        Prefer a live conversation? Book a{" "}
        <span className="text-orange-400 font-semibold">30-minute discovery call</span> directly on
        my calendar to discuss your project requirements, timeline, and technical architecture.
      </p>

      {/* Cal.com Booker Trigger Card */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#131724]/95 to-[#0b0e16]/98 border border-white/[0.12] p-6 sm:p-8 overflow-hidden shadow-2xl shadow-orange-500/10 backdrop-blur-xl max-w-2xl mx-auto text-center">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-lg shadow-orange-500/10">
            <CalendarDays className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">Schedule 1-on-1 Strategy Session</h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Interactive video call with Subhash Ketagoda &bull; 30 Minutes &bull; Google Meet
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 font-mono py-1">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Real-time Availability
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              Direct Calendar Sync
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              Zero Obligation
            </span>
          </div>

          <button
            data-cal-link="subash-ketagoda-egs2ht/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
            className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-[length:200%_auto] hover:bg-right text-white font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_45px_rgba(249,115,22,0.55)] active:scale-98 sm:hover:scale-[1.02] transition-all duration-500 cursor-pointer w-full sm:w-auto"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span>OPEN BOOKING CALENDAR</span>
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
