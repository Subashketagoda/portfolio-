"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. Scene & Atmospheric Fog ---
    const scene = new THREE.Scene();
    // Gentle fog that preserves foreground clarity while fading distant horizon dots
    scene.fog = new THREE.FogExp2(0x080b0f, 0.0006);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      3500
    );
    // Adjusted camera height and angle so the dot wave is immediately visible across the Hero section
    camera.position.set(0, 35, 520);

    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || navigator.maxTouchPoints > 1);

    // --- 2. High-Performance WebGL Renderer ---
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
      precision: isMobile ? "mediump" : "highp",
    });
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
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

    // =========================================================================
    // HIGH-DENSITY ORGANIC 3D SILK DOT WAVE FIELD
    // =========================================================================
    const waveCols = isMobile ? 32 : 110;
    const waveRows = isMobile ? 32 : 110;
    const numWavePoints = waveCols * waveRows;

    const waveGeometry = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(numWavePoints * 3);
    const waveColors = new Float32Array(numWavePoints * 3);
    const initialWaveData: { x: number; y: number; baseZ: number }[] = [];

    const spacing = isMobile ? 36 : 22;
    const offsetX = (waveCols * spacing) / 2;
    const offsetY = (waveRows * spacing) / 2;

    const crestColor = new THREE.Color(0xfff59d); // Radiant glowing white-amber crests
    const midColor = new THREE.Color(0xff8a00);   // Vibrant electric brand orange
    const deepTrough = new THREE.Color(0xc2410c); // Rich sunset ember in troughs

    let idx = 0;
    for (let ix = 0; ix < waveCols; ix++) {
      for (let iy = 0; iy < waveRows; iy++) {
        const x = ix * spacing - offsetX;
        const y = iy * spacing - offsetY;
        const z = -140;

        wavePositions[idx * 3] = x;
        wavePositions[idx * 3 + 1] = y;
        wavePositions[idx * 3 + 2] = z;

        initialWaveData.push({ x, y, baseZ: z });

        // On mobile, pre-tint dots along Y axis for vibrant depth without per-frame CPU color lerping
        const colorFactor = (iy / waveRows);
        const dotColor = midColor.clone().lerp(colorFactor > 0.5 ? crestColor : deepTrough, 0.4);
        waveColors[idx * 3] = dotColor.r;
        waveColors[idx * 3 + 1] = dotColor.g;
        waveColors[idx * 3 + 2] = dotColor.b;

        idx++;
      }
    }

    waveGeometry.setAttribute("position", new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute("color", new THREE.BufferAttribute(waveColors, 3));

    const waveMaterial = new THREE.PointsMaterial({
      size: isMobile ? 15 : 13.5,
      map: photonTexture || undefined,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.95,
    });

    const waveMesh = new THREE.Points(waveGeometry, waveMaterial);
    // Adjusted pitch and elevation so the wave spans from bottom to middle and horizon
    waveMesh.rotation.x = -Math.PI / 2.5;
    waveMesh.position.set(0, -60, -40);
    scene.add(waveMesh);

    // =========================================================================
    // INTERACTION: MOUSE TRACKING & SCROLL PARALLAX
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (isMobile) return;
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetX = (event.clientX - halfW) * 0.45;
      targetY = (event.clientY - halfH) * 0.45;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // =========================================================================
    // ORGANIC SILK WAVE ANIMATION LOOP
    // =========================================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let isTabActive = true;

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive) clock.start();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabActive) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth Camera Tracking
      if (!isMobile) {
        mouseX += (targetX - mouseX) * 0.04;
        mouseY += (targetY - mouseY) * 0.04;
        scrollY += (targetScrollY - scrollY) * 0.05;
        camera.position.x = mouseX * 0.35;
        camera.position.y = 35 - mouseY * 0.35 - scrollY * 0.12;
      } else {
        scrollY += (targetScrollY - scrollY) * 0.06;
        camera.position.x = 0;
        camera.position.y = 35 - scrollY * 0.1;
      }
      camera.lookAt(0, -scrollY * 0.1, 0);

      const wavePosArr = waveGeometry.attributes.position.array as Float32Array;

      if (isMobile) {
        // Ultra-lightweight 60-120FPS computation for mobile devices
        let wavePtr = 0;
        for (let i = 0; i < numWavePoints; i++) {
          const item = initialWaveData[i];
          const totalElevation =
            Math.sin(item.x * 0.0048 + elapsedTime * 1.4) * 36 +
            Math.cos(item.y * 0.0048 + elapsedTime * 1.1) * 28;
          wavePosArr[wavePtr + 2] = item.baseZ + totalElevation;
          wavePtr += 3;
        }
        waveGeometry.attributes.position.needsUpdate = true;
      } else {
        // Desktop Multi-Harmonic Silk Waves with mouse cursor ripple & live color lerp
        const waveColArr = waveGeometry.attributes.color.array as Float32Array;
        const mouseWaveX = (mouseX / (window.innerWidth / 2)) * (offsetX * 0.6);
        const mouseWaveY = -(mouseY / (window.innerHeight / 2)) * (offsetY * 0.6);

        let wavePtr = 0;
        for (let i = 0; i < numWavePoints; i++) {
          const item = initialWaveData[i];

          const wave1 = Math.sin(item.x * 0.0048 + elapsedTime * 1.4) * 38;
          const wave2 = Math.cos(item.y * 0.0048 + elapsedTime * 1.1) * 30;
          const wave3 = Math.sin((item.x - item.y) * 0.0035 + elapsedTime * 1.6) * 18;
          const wave4 = Math.cos(Math.hypot(item.x, item.y) * 0.0045 - elapsedTime * 1.3) * 14;

          const distToMouse = Math.hypot(item.x - mouseWaveX, item.y - mouseWaveY);
          let cursorPush = 0;
          if (distToMouse < 280) {
            cursorPush = Math.sin((distToMouse / 280) * Math.PI) * 24;
          }

          const totalElevation = wave1 + wave2 + wave3 + wave4 + cursorPush;
          wavePosArr[wavePtr + 2] = item.baseZ + totalElevation;

          const normHeight = (totalElevation + 98) / 196;

          if (normHeight > 0.5) {
            const t = Math.min(1, (normHeight - 0.5) * 2.0);
            waveColArr[wavePtr] = THREE.MathUtils.lerp(midColor.r, crestColor.r, t);
            waveColArr[wavePtr + 1] = THREE.MathUtils.lerp(midColor.g, crestColor.g, t);
            waveColArr[wavePtr + 2] = THREE.MathUtils.lerp(midColor.b, crestColor.b, t);
          } else {
            const t = Math.max(0, normHeight * 2.0);
            waveColArr[wavePtr] = THREE.MathUtils.lerp(deepTrough.r, midColor.r, t);
            waveColArr[wavePtr + 1] = THREE.MathUtils.lerp(deepTrough.g, midColor.g, t);
            waveColArr[wavePtr + 2] = THREE.MathUtils.lerp(deepTrough.b, midColor.b, t);
          }

          wavePtr += 3;
        }

        waveGeometry.attributes.position.needsUpdate = true;
        waveGeometry.attributes.color.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup on unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
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
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
    />
  );
}
