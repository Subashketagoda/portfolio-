"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3.5 bg-[#0a0a0e]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo: Authentic Subhash Ketagoda signature */}
        <a href="#home" className="flex items-center group py-1">
          <img
            src="/images/subhash-signature.png"
            alt="Subhash Ketagoda"
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(249,115,22,0.35)] group-hover:scale-105 transition-transform duration-300"
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

        {/* Right CTA Button: LET'S TALK */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-orange-500/30 text-xs font-semibold tracking-wider text-gray-200 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
          >
            LET&apos;S TALK
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-white active:text-orange-500 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c11]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-5 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-gray-300 active:text-orange-500 hover:text-orange-500 py-2 min-h-[44px] flex items-center transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3.5 px-4 rounded-full bg-orange-500 text-white font-semibold text-xs tracking-wider shadow-lg active:scale-98 transition-transform"
            >
              LET&apos;S TALK
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
