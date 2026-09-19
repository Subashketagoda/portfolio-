"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, Clock, ShieldCheck, ExternalLink, Loader2 } from "lucide-react";

export default function CalBooker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [calLoaded, setCalLoaded] = useState(false);
  const hasInitializedRef = useRef(false);

  // 1. Intersection Observer: Only start loading Cal.com when user scrolls near the booking section
  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // 2. On-demand Script Injection & Cal Inline Embed Initialization
  useEffect(() => {
    if (!isIntersecting || hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const initCalInstance = () => {
      const Cal = (window as any).Cal;
      if (!Cal) return;

      try {
        Cal("init", "portfolio", { origin: "https://app.cal.com" });
        Cal.config = Cal.config || {};
        Cal.config.forwardQueryParams = true;

        if (Cal.ns?.portfolio) {
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
          setCalLoaded(true);
        }
      } catch (err) {
        console.error("Cal.com lazy init error:", err);
      }
    };

    // If script is already in document
    if ((window as any).Cal) {
      initCalInstance();
      return;
    }

    // Otherwise dynamically inject the script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;

    // Standard Cal.com bootstrap snippet
    (function (C: any, A: any, L: any) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    script.onload = () => {
      // Small tick to ensure namespace is established
      setTimeout(initCalInstance, 80);
    };

    script.onerror = () => {
      console.warn("Cal.com embed could not be reached. Direct link fallback available.");
    };

    // If for any reason Cal is already triggered
    (window as any).Cal("init", "portfolio", { origin: "https://app.cal.com" });
  }, [isIntersecting]);

  return (
    <div id="booking" ref={containerRef} className="mt-14 sm:mt-20 relative">
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

        {/* Quick Direct Link Button (Crucial for mobile users wanting instantaneous booking) */}
        <div className="pt-2">
          <a
            href="https://cal.com/subash-ketagoda-egs2ht/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-300 hover:text-orange-200 text-xs font-mono font-medium transition-all"
          >
            <span>Direct Calendar Link</span>
            <ExternalLink className="w-3 h-3 text-orange-400" />
          </a>
        </div>
      </div>

      {/* Cal.com Inline Calendar Container */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#131724]/95 to-[#0b0e16]/98 border border-white/[0.12] p-2 sm:p-4 md:p-6 shadow-2xl shadow-orange-500/10 backdrop-blur-xl max-w-4xl mx-auto overflow-hidden min-h-[580px]">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

        {/* Placeholder skeleton while not in viewport or loading */}
        {!calLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0c0f17]/90 z-10 p-6 text-center space-y-4">
            <Loader2 className="w-8 h-8 text-orange-400 animate-spin" />
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase tracking-widest text-orange-400 font-semibold">
                Connecting To Live Scheduling Engine...
              </div>
              <div className="text-gray-400 text-xs font-mono">
                Synchronizing available time slots with Colombo &amp; International timezones
              </div>
            </div>
            <a
              href="https://cal.com/subash-ketagoda-egs2ht/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold font-sans shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all"
            >
              <span>Open in Cal.com Directly</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Cal inline embed div with required ID */}
        <div
          id="my-cal-inline-portfolio"
          style={{ width: "100%", height: "100%", minHeight: "680px", overflow: "scroll" }}
          className="w-full rounded-xl relative z-0"
        />
      </div>
    </div>
  );
}
