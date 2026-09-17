"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Cal = (window as any).Cal;
      if (Cal?.ns?.["30min"]) {
        Cal.ns["30min"]("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            light: { "cal-brand": "#FFA500" },
            dark: { "cal-brand": "#FFA500" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    }
  }, []);

  return null;
}
