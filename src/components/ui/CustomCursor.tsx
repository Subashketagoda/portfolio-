"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "project" | "button" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]") as HTMLElement | null;

      if (interactiveEl) {
        const type = interactiveEl.getAttribute("data-cursor") || "project";
        setCursorText(interactiveEl.getAttribute("data-cursor-text") || "");
        if (type === "project") {
          setCursorVariant("project");
        } else if (type === "button") {
          setCursorVariant("button");
        }
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small precision center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-gold-400 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorVariant === "project" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Smooth outer follower / magnetic badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full hidden md:flex font-mono text-[10px] uppercase font-bold tracking-widest"
        animate={{
          x: cursorVariant === "project" ? mousePosition.x - 45 : mousePosition.x - 20,
          y: cursorVariant === "project" ? mousePosition.y - 45 : mousePosition.y - 20,
          width: cursorVariant === "project" ? 90 : cursorVariant === "button" ? 56 : 40,
          height: cursorVariant === "project" ? 90 : cursorVariant === "button" ? 56 : 40,
          backgroundColor:
            cursorVariant === "project"
              ? "rgba(212, 175, 55, 0.92)"
              : cursorVariant === "button"
              ? "rgba(255, 255, 255, 0.15)"
              : "rgba(255, 255, 255, 0.04)",
          borderColor:
            cursorVariant === "project"
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(212, 175, 55, 0.35)",
          color: cursorVariant === "project" ? "#060608" : "#F3F3F7",
          borderWidth: cursorVariant === "project" ? 0 : 1,
          backdropFilter: cursorVariant === "project" ? "none" : "blur(4px)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.4 }}
      >
        {cursorVariant === "project" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1 font-extrabold text-[11px]"
          >
            {cursorText || "EXPLORE"} ↗
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
