"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Cal = (window as any).Cal;
      if (Cal?.ns?.secret) {
        Cal.ns.secret("ui", {
          theme: "dark",
          hideEventTypeDetails: false,
          layout: "month_view",
          styles: {
            body: { background: "transparent" },
          },
          cssVarsPerTheme: {
            dark: {
              "cal-brand": "#f97316",
              "cal-bg": "#0c0f17",
              "cal-bg-emphasis": "#141824",
              "cal-border": "rgba(255,255,255,0.1)",
              "cal-border-subtle": "rgba(255,255,255,0.08)",
              "cal-text": "#ffffff",
              "cal-text-muted": "#9ca3af",
            },
            light: {
              "cal-brand": "#f97316",
              "cal-bg": "#0c0f17",
              "cal-bg-emphasis": "#141824",
              "cal-border": "rgba(255,255,255,0.1)",
              "cal-border-subtle": "rgba(255,255,255,0.08)",
              "cal-text": "#ffffff",
              "cal-text-muted": "#9ca3af",
            },
          },
        });
      }
    }
  }, []);

  return null;
}
