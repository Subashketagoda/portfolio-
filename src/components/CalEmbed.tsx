"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Cal = (window as any).Cal;
      if (Cal?.ns?.secret) {
        Cal.ns.secret("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    }
  }, []);

  return null;
}
