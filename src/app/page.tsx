"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Eagerly load above-the-fold critical components ↑
// Lazily load everything below the fold ↓ (code-split, zero impact on initial paint)
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
const MouseSpotlight = dynamic(() => import("@/components/MouseSpotlight"), { ssr: false });
const ScrollProgressBar = dynamic(() => import("@/components/ui/ScrollProgressBar"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), { ssr: false });
const MarqueeBanner = dynamic(() => import("@/components/MarqueeBanner"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />

      {/* Global Top Scroll Reading Progress Line */}
      <ScrollProgressBar />

      {/* Floating Circular Scroll-To-Top Indicator */}
      <BackToTop />

      <div className="min-h-screen bg-[#080b0f] text-white selection:bg-orange-500 selection:text-white">
        {/* Interactive Mouse Follower Spotlight */}
        <MouseSpotlight />

        <Navbar />

        <main>
          <Hero />

          {/* Luxury Marquee Ticker 1 */}
          <MarqueeBanner />

          {/* About Section with Scroll Reveal */}
          <ScrollReveal direction="up" delay={50}>
            <About />
          </ScrollReveal>

          {/* Services Section with Scroll Reveal */}
          <ScrollReveal direction="up" delay={50}>
            <Services />
          </ScrollReveal>

          {/* Creative Process & Engineering Workflow */}
          <ScrollReveal direction="up" delay={50}>
            <ProcessSection />
          </ScrollReveal>

          {/* Skills Grid with Scroll Reveal */}
          <ScrollReveal direction="up" delay={50}>
            <Skills />
          </ScrollReveal>

          {/* Luxury Marquee Ticker 2 (Reversed with project & stack highlights) */}
          <MarqueeBanner
            reversed
            items={[
              "CARGO PIZZERIA",
              "69 STUDIO",
              "DINEPRO ADVISERS",
              "VELORA SANCTUARY",
              "NOIR TABLE",
              "APEX HOUSE",
              "CUSTOM POS ENGINES",
              "FULL-STACK EXCELLENCE",
            ]}
          />

          {/* Projects Portfolio with Scroll Reveal */}
          <ScrollReveal direction="up" delay={50}>
            <Projects />
          </ScrollReveal>

          {/* Testimonials with Scroll Reveal */}
          <ScrollReveal direction="up" delay={50}>
            <Testimonials />
          </ScrollReveal>

          {/* Contact Section with Scroll Reveal */}
          <ScrollReveal direction="up" delay={50}>
            <Contact />
          </ScrollReveal>
        </main>

        <Footer />
      </div>
    </>
  );
}
