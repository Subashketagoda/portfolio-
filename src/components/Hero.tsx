"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ExternalLink, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("Full-Stack Developer");
  const [showCursor, setShowCursor] = useState(true);

  // References for the scroll-driven video animation
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const progressBadgeRef = useRef<HTMLDivElement>(null);

  const videoDurationRef = useRef<number>(10);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const isReducedMotionRef = useRef<boolean>(false);

  // Typing effect for subtitle
  useEffect(() => {
    const titles = [
      "Full-Stack Developer",
      "Creative Web Developer",
      "MERN & Next.js Specialist",
      "UI/UX Technologist",
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const timer = setInterval(() => {
      const currentTitle = titles[titleIndex];
      if (!isDeleting) {
        setTypedTitle(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          clearInterval(timer);
          setTimeout(startDeleting, 1800);
        }
      }
    }, 90);

    const startDeleting = () => {
      const delTimer = setInterval(() => {
        const currentTitle = titles[titleIndex];
        setTypedTitle(currentTitle.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          clearInterval(delTimer);
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          setTimeout(startTyping, 400);
        }
      }, 50);
    };

    const startTyping = () => {
      const typeTimer = setInterval(() => {
        const currentTitle = titles[titleIndex];
        setTypedTitle(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentTitle.length) {
          clearInterval(typeTimer);
          setTimeout(startDeleting, 1800);
        }
      }, 90);
    };

    return () => clearInterval(timer);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Video metadata & initial setup
  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      videoDurationRef.current = videoRef.current.duration || 10;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      isReducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  }, []);

  // Scroll listener & RAF lerping engine
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      targetProgressRef.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculate

    // Lerping animation loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      if (!isReducedMotionRef.current) {
        const target = targetProgressRef.current;
        const current = currentProgressRef.current;
        const next = lerp(current, target, 0.12);
        currentProgressRef.current = next;

        // Video scrubbing
        const video = videoRef.current;
        if (video && videoDurationRef.current > 0) {
          const targetTime = next * (videoDurationRef.current - 0.05);
          if (Math.abs(video.currentTime - targetTime) > 0.02) {
            video.currentTime = targetTime;
          }
        }

        // Parallax Text Fading & Transformation
        if (contentRef.current) {
          // Fade out text as user scrolls through the cinematic video sequence
          const fadeStart = 0.12;
          const fadeEnd = 0.72;
          const fadeFactor = Math.min(Math.max((next - fadeStart) / (fadeEnd - fadeStart), 0), 1);
          const opacity = Math.max(0, 1 - fadeFactor * 1.25);
          const translateY = -next * 90;
          const scale = 1 - next * 0.05;

          contentRef.current.style.opacity = opacity.toFixed(3);
          contentRef.current.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
          contentRef.current.style.pointerEvents = opacity < 0.15 ? "none" : "auto";
        }

        // Scroll prompt indicator
        if (scrollIndicatorRef.current) {
          const indOpacity = Math.max(0, 1 - next * 5);
          scrollIndicatorRef.current.style.opacity = indOpacity.toFixed(3);
          scrollIndicatorRef.current.style.pointerEvents = indOpacity < 0.1 ? "none" : "auto";
        }

        // Progress Pill indicator (shows live % through the 3D cinematic sequence)
        if (progressBadgeRef.current) {
          const badgeOpacity = next > 0.05 && next < 0.95 ? 1 : 0;
          progressBadgeRef.current.style.opacity = badgeOpacity.toString();
          const percentText = `${Math.round(next * 100)}%`;
          const span = progressBadgeRef.current.querySelector("span.pct");
          if (span) span.textContent = percentText;
        }
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative w-full h-[220vh] bg-[#080b0f]"
    >
      {/* Pinned 100vh Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* ============================================================
            1. FULL-SCREEN CINEMATIC HERO VIDEO LAYER
            ============================================================ */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
          <video
            ref={videoRef}
            src="/videos/hero-scroll-animation.mp4"
            poster="/images/hero-video-poster.jpg"
            preload="metadata"
            muted
            playsInline
            disablePictureInPicture
            controls={false}
            className="absolute inset-0 w-full h-full object-cover object-center transform-gpu"
            style={{
              objectPosition: "center 38%",
            }}
            onLoadedMetadata={handleLoadedMetadata}
          />

          {/* Top Horizon Line with Center Glow */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-[2px] pointer-events-none" />

          {/* Atmospheric Dark Gradient Overlays for Supreme Text Legibility */}
          {/* Top navigation shroud */}
          <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#080b0f]/95 via-[#080b0f]/60 to-transparent pointer-events-none" />

          {/* Left Text Scrim (Heavy dark vignette behind editorial headline & bio) */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[64%] bg-gradient-to-r from-[#080b0f]/95 via-[#080b0f]/78 to-transparent pointer-events-none" />

          {/* Radial Center Film Vignette */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle at center, transparent 40%, rgba(8, 11, 15, 0.85) 95%)",
            }}
          />

          {/* Subtle Warm Amber Studio Lighting on Right Rim */}
          <div className="absolute top-1/3 right-0 w-[480px] h-[580px] rounded-full bg-gradient-to-br from-orange-500/12 via-amber-500/06 to-transparent blur-[120px] pointer-events-none hidden md:block" />

          {/* Seamless Bottom Section Transition into #about */}
          <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#080b0f] via-[#080b0f]/85 to-transparent pointer-events-none" />
        </div>

        {/* Live Scroll Scrubbing Progress Badge */}
        <div
          ref={progressBadgeRef}
          className="absolute top-24 right-6 sm:right-12 z-30 opacity-0 transition-opacity duration-300 pointer-events-none font-mono text-[10px] tracking-widest text-orange-400/80 bg-[#0c0e14]/80 border border-orange-500/30 px-3 py-1 rounded-full backdrop-blur-md hidden sm:flex items-center gap-2 shadow-lg shadow-orange-500/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span>CINEMATIC SEQUENCE</span>
          <span className="text-white font-bold pct">0%</span>
        </div>

        {/* ============================================================
            2. FOREGROUND HERO CONTENT (PARALLAX LAYER)
            ============================================================ */}
        <div
          ref={contentRef}
          className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 pt-24 md:pt-28 flex-1 flex items-center will-change-transform"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading, Subtitle, Bio, CTAs, Status, Socials */}
            <div className="lg:col-span-8 space-y-5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
                <span>&mdash;</span>
                <span>HELLO, I&apos;M</span>
                <span>&mdash;</span>
              </div>

              {/* Main Title: Subhash Ketagoda */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.85rem] font-black tracking-tight text-white leading-[1.0] drop-shadow-md">
                Subhash{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 drop-shadow-[0_0_40px_rgba(255,138,0,0.35)]">
                  Ketagoda
                </span>
              </h1>

              {/* Typing Subtitle with blinking orange cursor */}
              <div className="h-9 sm:h-11 flex items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 drop-shadow">
                  {typedTitle}
                  <span className={`text-orange-500 font-normal ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
                    |
                  </span>
                </span>
              </div>

              {/* Bio Description */}
              <p className="text-gray-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed drop-shadow-sm">
                I build exceptional digital experiences with modern technologies. Passionate about clean code, scalable solutions, and turning ideas into reality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xs sm:text-sm tracking-wider hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>HIRE ME</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#121218]/90 border border-white/15 text-gray-200 font-semibold text-xs sm:text-sm tracking-wider hover:border-orange-500/50 hover:text-white hover:bg-[#1a1a24] transition-all duration-300 shadow-md backdrop-blur-sm"
                >
                  <span>VIEW MY WORK</span>
                  <ExternalLink className="w-4 h-4 text-orange-400" />
                </a>
              </div>

              {/* Available for freelance status */}
              <div className="flex items-center gap-2.5 pt-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono tracking-wider text-gray-300 font-medium">
                  AVAILABLE FOR FREELANCE
                </span>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/Subashketagoda"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl bg-[#12141c]/90 border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-300 hover:text-orange-400 transition-all duration-300 shadow-sm backdrop-blur-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-xl bg-[#12141c]/90 border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-300 hover:text-orange-400 transition-all duration-300 shadow-sm backdrop-blur-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="w-10 h-10 rounded-xl bg-[#12141c]/90 border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-300 hover:text-orange-400 transition-all duration-300 shadow-sm backdrop-blur-sm"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="mailto:subhashketagoda@gmail.com"
                  aria-label="Send Email"
                  className="w-10 h-10 rounded-xl bg-[#12141c]/90 border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-300 hover:text-orange-400 transition-all duration-300 shadow-sm backdrop-blur-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Technologies I work with */}
              <div className="pt-2 space-y-2">
                <p className="text-xs font-mono text-gray-400 tracking-wider">
                  Technologies I work with:
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {/* React */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b]/90 border border-white/[0.1] text-cyan-400 text-xs font-semibold hover:border-cyan-500/50 transition-colors shadow-sm backdrop-blur-sm">
                    <svg className="w-4 h-4" viewBox="0 0 115.3 100">
                      <circle cx="57.7" cy="50" r="10" fill="currentColor" />
                      <ellipse cx="57.7" cy="50" rx="50" ry="18.5" fill="none" stroke="currentColor" strokeWidth="5" />
                      <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(60 57.7 50)" fill="none" stroke="currentColor" strokeWidth="5" />
                      <ellipse cx="57.7" cy="50" rx="50" ry="18.5" transform="rotate(120 57.7 50)" fill="none" stroke="currentColor" strokeWidth="5" />
                    </svg>
                    <span className="text-gray-200">React</span>
                  </div>

                  {/* JavaScript */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b]/90 border border-white/[0.1] text-yellow-400 text-xs font-semibold hover:border-yellow-500/50 transition-colors shadow-sm backdrop-blur-sm">
                    <span className="w-4 h-4 rounded bg-yellow-400 text-black font-black text-[10px] flex items-center justify-center">JS</span>
                    <span className="text-gray-200">JavaScript</span>
                  </div>

                  {/* TypeScript */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b]/90 border border-white/[0.1] text-blue-400 text-xs font-semibold hover:border-blue-500/50 transition-colors shadow-sm backdrop-blur-sm">
                    <span className="w-4 h-4 rounded bg-blue-600 text-white font-black text-[10px] flex items-center justify-center">TS</span>
                    <span className="text-gray-200">TypeScript</span>
                  </div>

                  {/* Node.js */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b]/90 border border-white/[0.1] text-emerald-400 text-xs font-semibold hover:border-emerald-500/50 transition-colors shadow-sm backdrop-blur-sm">
                    <span className="text-emerald-400 font-bold text-sm leading-none">⬡</span>
                    <span className="text-gray-200">Node.js</span>
                  </div>

                  {/* Next.js */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b]/90 border border-white/[0.1] text-white text-xs font-semibold hover:border-white/40 transition-colors shadow-sm backdrop-blur-sm">
                    <span className="w-4 h-4 rounded-full bg-white text-black font-black text-[9px] flex items-center justify-center">N</span>
                    <span className="text-gray-200">Next.js</span>
                  </div>

                  {/* MongoDB */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b]/90 border border-white/[0.1] text-green-400 text-xs font-semibold hover:border-green-500/50 transition-colors shadow-sm backdrop-blur-sm">
                    <span className="text-green-400 text-sm">🍃</span>
                    <span className="text-gray-200">MongoDB</span>
                  </div>

                  {/* Tailwind */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131b]/90 border border-white/[0.1] text-cyan-400 text-xs font-semibold hover:border-cyan-500/50 transition-colors shadow-sm backdrop-blur-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                    </svg>
                    <span className="text-gray-200">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Subtle Metric Badge */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-center space-y-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0f1118]/90 border border-orange-500/40 shadow-2xl shadow-orange-500/10 backdrop-blur-md animate-float">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  ⭐
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider leading-none">
                    EXPERIENCE
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    6+ Years Pro
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0e1017]/90 border border-amber-500/30 shadow-lg backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-xs font-bold text-amber-300">40+ Projects Shipped</span>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================
            3. SCROLL DOWN PROMPT
            ============================================================ */}
        <div
          ref={scrollIndicatorRef}
          className="pb-6 flex flex-col items-center justify-center relative z-20 will-change-transform transition-opacity"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
            aria-label="Scroll down to explore cinematic hero"
          >
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-semibold text-gray-400 group-hover:text-orange-400 transition-colors">
              SCROLL TO ANIMATE
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-orange-500/60 flex items-start justify-center p-1.5 transition-colors">
              <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}
