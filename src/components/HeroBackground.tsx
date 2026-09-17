"use client";

import { useEffect, useRef, useState } from "react";

interface HeroBackgroundProps {
  mousePos?: { x: number; y: number };
}

export default function HeroBackground({ mousePos }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    // High DPI scaling
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const isMobile = width < 768;
    const particleCount = isMobile ? 22 : 48;
    const connectionDistance = isMobile ? 70 : 100;
    const mouseRadius = isMobile ? 80 : 130;

    // Track mouse on canvas coordinates
    let localMouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      localMouse.x = e.clientX - rect.left;
      localMouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      localMouse.x = -1000;
      localMouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
      pulseSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Gentle drifting velocity
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = -(Math.random() * 0.45 + 0.15); // float subtly upwards
        this.radius = Math.random() * 1.6 + 0.8;
        this.baseAlpha = Math.random() * 0.45 + 0.2;
        this.alpha = this.baseAlpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;

        // Luxury tech palette: bright amber, warm gold, cyber orange, soft white
        const colors = [
          "rgba(255, 138, 0, ",
          "rgba(245, 158, 11, ",
          "rgba(251, 191, 36, ",
          "rgba(255, 255, 255, ",
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;

        // Subtle pulsing glow
        this.alpha = this.baseAlpha + Math.sin(Date.now() * this.pulseSpeed * 0.05) * 0.15;

        // Interactive mouse repel / float effect
        const dx = localMouse.x - this.x;
        const dy = localMouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
          this.alpha = Math.min(1, this.alpha + force * 0.5);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.max(0.1, this.alpha)})`;
        ctx.shadowColor = "#ff8a00";
        ctx.shadowBlur = this.radius * 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles with delicate tech filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 138, 0, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw and update each particle
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Precision Cyber Grid Pattern with Smooth Vignette Mask */}
      <div
        className="absolute inset-0 opacity-[0.16] transition-opacity duration-700"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 80%)",
        }}
      />

      {/* 2. Horizontal Cyber Scanner Laser Line */}
      <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent shadow-[0_0_15px_rgba(255,138,0,0.5)] animate-scanline pointer-events-none" />

      {/* 3. HTML5 Canvas Particles & Constellations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 4. Ambient Pulsing Aurora Light Orbs */}
      {/* Primary Warm Solar Amber (behind workstation) */}
      <div className="absolute top-1/4 -right-12 lg:right-1/12 w-[320px] sm:w-[500px] lg:w-[700px] h-[320px] sm:h-[500px] lg:h-[700px] rounded-full bg-gradient-to-br from-orange-500/22 via-amber-500/12 to-transparent blur-[90px] sm:blur-[150px] animate-pulse-slow pointer-events-none" />

      {/* Secondary Deep Indigo-Cyan Edge Contrast (behind left column) */}
      <div className="absolute top-1/3 -left-20 w-[260px] sm:w-[420px] lg:w-[520px] h-[260px] sm:h-[420px] lg:h-[520px] rounded-full bg-gradient-to-tr from-cyan-600/[0.08] via-orange-600/[0.06] to-transparent blur-[100px] sm:blur-[160px] pointer-events-none" />

      {/* Subtle Center Underglow */}
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] rounded-full bg-orange-500/[0.04] blur-[120px] pointer-events-none" />

      {/* 5. High-Tech Rotating HUD Orbital Rings & Wireframe Glyphs */}
      <div className="absolute -top-16 -right-16 sm:top-10 sm:right-10 lg:right-24 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 pointer-events-none opacity-[0.14] sm:opacity-[0.20]">
        {/* Outer dotted radar ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-orange-400/40 animate-spin-slow" />
        {/* Inner concentric ring */}
        <div className="absolute inset-8 rounded-full border border-white/20 animate-reverse-spin" />
        {/* Center crosshair */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />
        {/* Corner ticks */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-orange-500/50" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-orange-500/50" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-orange-500/50" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-orange-500/50" />
      </div>

      {/* 6. Corner Cyber Tech Coordinates & Status Indicators */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-14 font-mono text-[9px] sm:text-[10px] text-orange-400/45 select-none pointer-events-none hidden sm:flex items-center gap-2 tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>SYS_STATUS: LIVE IN PRODUCTION [79.86°E : COLOMBO]</span>
      </div>
      <div className="absolute top-20 sm:top-24 right-4 sm:right-16 font-mono text-[9px] sm:text-[10px] text-orange-400/45 select-none pointer-events-none hidden sm:flex items-center gap-2 tracking-widest">
        <span>ARCH: NEXT.JS 15 // TS 5 // DISTRIBUTED</span>
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
      </div>
    </div>
  );
}
