import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Client-only ambient indicators
import LoadingScreen from "@/components/LoadingScreen";
import MouseSpotlight from "@/components/MouseSpotlight";
import Background3D from "@/components/Background3D";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <BackToTop />

      <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#080b0f] text-white selection:bg-orange-500 selection:text-white">
        <Background3D />
        <MouseSpotlight />
        <Navbar />

        <main className="w-full max-w-full overflow-x-clip">
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
