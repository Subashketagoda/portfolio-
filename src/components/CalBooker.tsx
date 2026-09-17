"use client";

import { useEffect } from "react";
import { CalendarDays, Clock, ShieldCheck, Sparkles } from "lucide-react";

export default function CalBooker() {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const initInlineCal = () => {
      if (typeof window === "undefined") return;
      const Cal = (window as any).Cal;
      if (!Cal) {
        timer = setTimeout(initInlineCal, 60);
        return;
      }

      Cal("init", "portfolio", { origin: "https://app.cal.com" });
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;

      if (Cal.ns && Cal.ns.portfolio) {
        Cal.ns.portfolio("inline", {
          elementOrSelector: "#my-cal-inline-portfolio",
          config: {
            layout: "month_view",
            useSlotsViewOnSmallScreen: "true",
            theme: "dark",
          },
          calLink: "subash-ketagoda-egs2ht/portfolio",
        });

        Cal.ns.portfolio("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            light: { "cal-brand": "#FFA500" },
            dark: { "cal-brand": "#FFA500" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } else {
        timer = setTimeout(initInlineCal, 60);
      }
    };

    initInlineCal();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div id="booking" className="mt-14 sm:mt-20 relative">
      {/* Section Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.12)]">
          <CalendarDays className="w-3.5 h-3.5 text-orange-400" />
          <span>INSTANT DISCOVERY CALL</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Description & Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2.5">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Schedule 1-on-1{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            Strategy Session
          </span>
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          Select an open time slot directly on the live calendar below for an architectural advisory, technical consultation, or project kickoff.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 font-mono pt-2">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Sync Availability
          </span>
          <span className="inline-flex items-center gap-1.5 text-gray-300">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            30 Minutes Video Call
          </span>
          <span className="inline-flex items-center gap-1.5 text-gray-300">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            Zero Obligation
          </span>
        </div>
      </div>

      {/* Cal.com Inline Calendar Container */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#131724]/95 to-[#0b0e16]/98 border border-white/[0.12] p-2 sm:p-4 md:p-6 shadow-2xl shadow-orange-500/10 backdrop-blur-xl max-w-4xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

        {/* Cal inline embed div with required ID */}
        <div
          id="my-cal-inline-portfolio"
          style={{ width: "100%", height: "100%", minHeight: "680px", overflow: "scroll" }}
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
}
