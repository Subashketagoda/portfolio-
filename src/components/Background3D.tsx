"use client";

import { useEffect, useRef } from "react";

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0);

    // Completely bypass Three.js / WebGL on mobile devices for instant load & 0 CPU overhead
    if (isMobile) {
      return;
    }

    let isDestroyed = false;
    let animationFrameId: number;
    let cleanupFn: (() => void) | undefined;

    // Dynamically load Three.js ONLY on desktop devices to avoid 600KB+ bundle download on mobile
    import("three").then((THREE) => {
      if (isDestroyed || !container) return;

      // --- 1. Scene & Atmospheric Fog ---
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x080b0f, 0.0006);

      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        1,
        3500
      );
      camera.position.set(0, 35, 520);

      // --- 2. High-Performance WebGL Renderer ---
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        precision: "highp",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // --- 3. High-Definition Glowing Photon Dot Texture ---
      const createPhotonTexture = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;

        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.18, "rgba(255, 215, 100, 0.98)");
        gradient.addColorStop(0.4, "rgba(255, 140, 20, 0.7)");
        gradient.addColorStop(0.7, "rgba(249, 115, 22, 0.22)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 128, 128);

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
      };

      const photonTexture = createPhotonTexture();

      // HIGH-DENSITY ORGANIC 3D SILK DOT WAVE FIELD
      const waveCols = 110;
      const waveRows = 110;
      const numWavePoints = waveCols * waveRows;

      const waveGeometry = new THREE.BufferGeometry();
      const wavePositions = new Float32Array(numWavePoints * 3);
      const waveColors = new Float32Array(numWavePoints * 3);
      const initialWaveData: { x: number; y: number; baseZ: number }[] = [];

      const spacing = 22;
      const offsetX = (waveCols * spacing) / 2;
      const offsetY = (waveRows * spacing) / 2;

      const crestColor = new THREE.Color(0xfff59d);
      const midColor = new THREE.Color(0xff8a00);
      const deepTrough = new THREE.Color(0xc2410c);

      let idx = 0;
      for (let ix = 0; ix < waveCols; ix++) {
        for (let iy = 0; iy < waveRows; iy++) {
          const x = ix * spacing - offsetX;
          const y = iy * spacing - offsetY;
          const z = -140;

          wavePositions[idx * 3] = x;
          wavePositions[idx * 3 + 1] = y;
          wavePositions[idx * 3 + 2] = z;

          waveColors[idx * 3] = midColor.r;
          waveColors[idx * 3 + 1] = midColor.g;
          waveColors[idx * 3 + 2] = midColor.b;

          initialWaveData.push({ x, y, baseZ: z });
          idx++;
        }
      }

      waveGeometry.setAttribute("position", new THREE.BufferAttribute(wavePositions, 3));
      waveGeometry.setAttribute("color", new THREE.BufferAttribute(waveColors, 3));

      const waveMaterial = new THREE.PointsMaterial({
        size: 8.5,
        map: photonTexture,
        transparent: true,
        opacity: 0.88,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const wavePoints = new THREE.Points(waveGeometry, waveMaterial);
      wavePoints.rotation.x = -Math.PI * 0.35;
      wavePoints.position.set(0, -60, -60);
      scene.add(wavePoints);

      // Mouse & Scroll Parallax Listeners
      let targetMouseX = 0;
      let targetMouseY = 0;
      let currentMouseX = 0;
      let currentMouseY = 0;
      let scrollY = 0;
      let targetScrollY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      const handleScroll = () => {
        targetScrollY = window.scrollY || 0;
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      let isPaused = false;
      const handleVisibilityChange = () => {
        isPaused = document.hidden;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });
      document.addEventListener("visibilitychange", handleVisibilityChange);

      // --- Animation Loop ---
      let clock = 0;
      const animate = () => {
        if (isDestroyed) return;
        animationFrameId = requestAnimationFrame(animate);

        if (isPaused) return;

        clock += 0.016;

        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        scrollY += (targetScrollY - scrollY) * 0.05;

        camera.position.x = currentMouseX * 45;
        camera.position.y = 35 - currentMouseY * 30 - scrollY * 0.04;
        camera.lookAt(0, -40, 0);

        const positions = waveGeometry.attributes.position.array as Float32Array;
        const colors = waveGeometry.attributes.color.array as Float32Array;
        let wavePtr = 0;

        for (let i = 0; i < numWavePoints; i++) {
          const pt = initialWaveData[i];
          const ripple1 = Math.sin(pt.x * 0.007 + clock * 1.5) * 36;
          const ripple2 = Math.cos(pt.y * 0.006 + clock * 1.2) * 32;
          const diagRipple = Math.sin((pt.x + pt.y) * 0.004 + clock * 0.9) * 20;

          const totalZ = pt.baseZ + ripple1 + ripple2 + diagRipple;
          positions[wavePtr + 2] = totalZ;

          const normH = Math.max(0, Math.min(1, (totalZ - (pt.baseZ - 60)) / 120));

          if (normH > 0.5) {
            const lerpT = (normH - 0.5) * 2;
            colors[wavePtr] = midColor.r + (crestColor.r - midColor.r) * lerpT;
            colors[wavePtr + 1] = midColor.g + (crestColor.g - midColor.g) * lerpT;
            colors[wavePtr + 2] = midColor.b + (crestColor.b - midColor.b) * lerpT;
          } else {
            const lerpT = normH * 2;
            colors[wavePtr] = deepTrough.r + (midColor.r - deepTrough.r) * lerpT;
            colors[wavePtr + 1] = deepTrough.g + (midColor.g - deepTrough.g) * lerpT;
            colors[wavePtr + 2] = deepTrough.b + (midColor.b - deepTrough.b) * lerpT;
          }

          wavePtr += 3;
        }

        waveGeometry.attributes.position.needsUpdate = true;
        waveGeometry.attributes.color.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();

      cleanupFn = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("visibilitychange", handleVisibilityChange);

        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }

        waveGeometry.dispose();
        waveMaterial.dispose();
        if (photonTexture) photonTexture.dispose();
        renderer.dispose();
      };
    });

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      cleanupFn?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
    >
      {/* Mobile-only pure CSS ambient silk glow (zero JS, 0 KB WebGL overhead, instant 120Hz native scroll) */}
      <div className="md:hidden absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(255,138,0,0.08),transparent_70%)] pointer-events-none" />
    </div>
  );
}
