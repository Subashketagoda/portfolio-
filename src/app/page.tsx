import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

// Client-only UI (no SSR needed)
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
const MouseSpotlight = dynamic(() => import("@/components/MouseSpotlight"), { ssr: false });
const ScrollProgressBar = dynamic(() => import("@/components/ui/ScrollProgressBar"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), { ssr: false });
const ScrollReveal = dynamic(() => import("@/components/ui/ScrollReveal"), { ssr: false });

// Below-the-fold sections - lazy loaded
const MarqueeBanner = dynamic(() => import("@/components/MarqueeBanner"));
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <BackToTop />

      <div className="min-h-screen bg-[#080b0f] text-white selection:bg-orange-500 selection:text-white">
        <MouseSpotlight />
        <Navbar />

        <main>
          <Hero />

          <MarqueeBanner />

          <ScrollReveal direction="up" delay={50}>
            <About />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Services />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <ProcessSection />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Skills />
          </ScrollReveal>

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

          <ScrollReveal direction="up" delay={50}>
            <Projects />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Testimonials />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Contact />
          </ScrollReveal>
        </main>

        <Footer />
      </div>
    </>
  );
}
