"use client";

import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import MouseSpotlight from "@/components/MouseSpotlight";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <div className="min-h-screen bg-[#080b0f] text-white selection:bg-orange-500 selection:text-white">
        {/* Interactive Mouse Follower Spotlight */}
        <MouseSpotlight />

        <Navbar />

        <main>
          <Hero />

          {/* Luxury Marquee Ticker 1 */}
          <MarqueeBanner />

          <About />

          <Services />

          {/* Creative Process & Engineering Workflow */}
          <ProcessSection />

          <Skills />

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

          <Projects />

          <Testimonials />

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
