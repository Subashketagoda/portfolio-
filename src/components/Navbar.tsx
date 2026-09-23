"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, CreditCard } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROCESS", href: "#process" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "TESTIMONIALS", href: "#testimonials" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");

  // Track active section and navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "process", "skills", "projects", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth scroll handler with offset for fixed header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3.5 bg-[#0a0a0e]/95 backdrop-blur-md border-b border-white/[0.06]"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo: Authentic Subhash Ketagoda signature */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center group py-1"
          >
            <img
              src="/images/subhash-signature.png"
              alt="Subhash Ketagoda"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(249,115,22,0.35)] group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[12px] font-semibold tracking-wider transition-colors duration-200 relative py-1.5 ${
                    isActive ? "text-orange-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button: CARD & BOOK A CALL */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/card"
              className="px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold tracking-wider text-gray-200 hover:text-white transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <CreditCard className="w-3.5 h-3.5 text-orange-400" />
              <span>DIGITAL CARD</span>
            </Link>

            <a
              href="#booking"
              className="px-5 py-2 rounded-full border border-orange-500/30 text-xs font-semibold tracking-wider text-gray-200 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer"
            >
              BOOK A CALL
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-300 hover:text-white active:text-orange-500 transition-colors cursor-pointer rounded-lg bg-white/[0.04] border border-white/[0.08]"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 w-full h-[100dvh] z-50 lg:hidden flex flex-col justify-start">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Header Bar inside Overlay */}
          <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-4 bg-[#0a0a0e]/98 border-b border-white/[0.08]">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center group py-1"
            >
              <img
                src="/images/subhash-signature.png"
                alt="Subhash Ketagoda"
                className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(249,115,22,0.35)]"
              />
            </a>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-300 hover:text-white active:text-orange-500 transition-colors cursor-pointer rounded-lg bg-white/5 border border-white/10"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6 text-orange-400" />
            </button>
          </div>

          {/* Nav List & Actions */}
          <nav className="relative z-20 bg-[#0c0c11]/98 backdrop-blur-2xl border-b border-white/10 px-5 sm:px-6 py-5 shadow-2xl flex-1 overflow-y-auto space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-orange-400/80 uppercase mb-2 px-2">
              NAVIGATION
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm sm:text-base font-semibold tracking-wider transition-all min-h-[46px] ${
                    isActive
                      ? "text-orange-400 bg-orange-500/10 border border-orange-500/20"
                      : "text-gray-300 hover:text-white active:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                </a>
              );
            })}

            <div className="pt-4 space-y-2.5">
              <Link
                href="/card"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-semibold text-xs tracking-wider transition-all"
              >
                <CreditCard className="w-4 h-4 text-orange-400" />
                <span>OPEN DIGITAL CARD HUB</span>
              </Link>

              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xs tracking-wider shadow-lg active:scale-98 transition-transform cursor-pointer"
              >
                BOOK A CALL
              </a>
            </div>

            <div className="pt-6 pb-2 px-2 font-mono text-[10px] text-gray-500 text-center tracking-widest">
              SUBHASH KETAGODA &mdash; FULL-STACK DEVELOPER
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
