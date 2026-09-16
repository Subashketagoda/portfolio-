"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  // Always start as TRUE so SSR HTML and initial render are 100% visible immediately
  // Content is NEVER hidden or invisible on first paint
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On mobile / touch screens (<1024px), stay permanently visible with zero animation delays
    if (
      typeof window !== "undefined" &&
      (window.innerWidth < 1024 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      setIsVisible(true);
      return;
    }

    // Only on larger desktop screens, gently observe viewport entrance
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "120px 0px 120px 0px",
      }
    );

    observer.observe(currentRef);

    // Fallback: guaranteed visible after 800ms under all desktop circumstances
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal-box ${className}`.trim()}
      style={{
        opacity: isVisible ? 1 : 0.9,
        transform: "none",
        transition: `opacity 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
