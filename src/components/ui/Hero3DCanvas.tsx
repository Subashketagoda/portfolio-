"use client";

import { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  ox: number;
  oy: number;
  oz: number;
  size: number;
  color: string;
}

export default function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse interactive target rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    // Detect mobile for optimized particle count
    const isMobile = width < 768;
    const numParticles = isMobile ? 45 : 85;
    const radius = isMobile ? Math.min(width, height) * 0.38 : Math.min(width, height) * 0.42;
    const fov = 380;

    // Create 3D spherical constellation particle points
    const points: Point3D[] = [];
    for (let i = 0; i < numParticles; i++) {
      // Golden spiral distribution on a sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numParticles);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const r = radius * (0.65 + Math.random() * 0.5);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      points.push({
        x,
        y,
        z,
        ox: x,
        oy: y,
        oz: z,
        size: Math.random() * 2 + 1.2,
        color: Math.random() > 0.4 ? "#ff8a00" : "#ffc067",
      });
    }

    // 3D Geometric Icosahedron Vertices (Nested central geometric core)
    const t = (1 + Math.sqrt(5)) / 2;
    const icoScale = isMobile ? 85 : 130;
    const rawIcoVerts = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ];

    const icoVerts = rawIcoVerts.map(([vx, vy, vz]) => ({
      x: vx * icoScale,
      y: vy * icoScale,
      z: vz * icoScale,
    }));

    // Icosahedron edge index pairs
    const icoEdges: [number, number][] = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
      [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
      [4, 9], [2, 4], [6, 2], [8, 6], [9, 8],
      [4, 5], [5, 9], [9, 1], [8, 1], [8, 7],
      [7, 6], [6, 10], [10, 2], [2, 11], [11, 4],
    ];

    // Handle mouse movement for interactive 3D parallax tilt
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / width - 0.5;
      mouseY = (e.clientY - rect.top) / height - 0.5;
      targetRotY = mouseX * 1.2;
      targetRotX = -mouseY * 0.9;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle window resizing
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Auto-pause when canvas is out of view for performance
    let isCanvasVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isCanvasVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    let angle = 0;

    // Render loop
    const render = () => {
      if (!isCanvasVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth inertia rotation
      angle += 0.005;
      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04;

      const currentRotX = rotX + Math.sin(angle * 0.7) * 0.15;
      const currentRotY = rotY + angle;

      const cx = width * (isMobile ? 0.5 : 0.68); // Position centered on mobile, right-biased behind portrait on desktop
      const cy = height * 0.46;

      // 3D Rotation Matrix functions
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      // 1. Transform and project 3D Icosahedron Core
      const projectedIco = icoVerts.map((v) => {
        // Y-axis rotation
        let x1 = v.x * cosY - v.z * sinY;
        let z1 = v.x * sinY + v.z * cosY;
        // X-axis rotation
        let y1 = v.y * cosX - z1 * sinX;
        let z2 = v.y * sinX + z1 * cosX;

        const scale = fov / (fov + z2);
        return {
          px: cx + x1 * scale,
          py: cy + y1 * scale,
          pz: z2,
          scale,
        };
      });

      // Draw Icosahedron 3D Laser Wireframe Edges
      ctx.lineWidth = 0.9;
      for (const [i1, i2] of icoEdges) {
        const p1 = projectedIco[i1];
        const p2 = projectedIco[i2];
        const avgZ = (p1.pz + p2.pz) / 2;
        const alpha = Math.max(0.04, Math.min(0.32, (avgZ + icoScale) / (icoScale * 2.2)));

        ctx.strokeStyle = `rgba(255, 138, 0, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      }

      // Draw Icosahedron Nodes
      for (const p of projectedIco) {
        const alpha = Math.max(0.1, Math.min(0.65, (p.pz + icoScale) / (icoScale * 2)));
        ctx.fillStyle = `rgba(255, 180, 80, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, 2 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Transform and project 3D Outer Spherical Constellation Points
      const projectedPoints = points.map((pt) => {
        // Y-axis rotation
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.x * sinY + pt.z * cosY;
        // X-axis rotation
        let y1 = pt.y * cosX - z1 * sinX;
        let z2 = pt.y * sinX + z1 * cosX;

        const scale = fov / (fov + z2);
        return {
          px: cx + x1 * scale,
          py: cy + y1 * scale,
          pz: z2,
          scale,
          size: pt.size,
          color: pt.color,
        };
      });

      // Draw 3D Constellation Interconnection Lines
      const maxDist = isMobile ? 75 : 95;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dy * 0 + dx * dx + dy * dy);

          if (dist < maxDist && Math.abs(p1.pz - p2.pz) < 140) {
            const avgZ = (p1.pz + p2.pz) / 2;
            const depthAlpha = Math.max(0.02, Math.min(0.25, (avgZ + radius) / (radius * 2)));
            const lineAlpha = (1 - dist / maxDist) * depthAlpha;

            ctx.strokeStyle = `rgba(255, 138, 0, ${lineAlpha * 0.7})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw 3D Constellation Nodes with soft glow
      for (const p of projectedPoints) {
        const depthAlpha = Math.max(0.08, Math.min(0.8, (p.pz + radius) / (radius * 1.8)));
        const radiusPt = Math.max(0.8, p.size * p.scale);

        // Core dot
        ctx.fillStyle = p.color;
        ctx.globalAlpha = depthAlpha;
        ctx.beginPath();
        ctx.arc(p.px, p.py, radiusPt, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glowing halo for foreground particles
        if (p.pz > 0) {
          ctx.fillStyle = "rgba(255, 138, 0, 0.15)";
          ctx.beginPath();
          ctx.arc(p.px, p.py, radiusPt * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2] opacity-85"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
