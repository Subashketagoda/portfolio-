"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "SKILLS", href: "#skills" },
  { name: "WORK", href: "#work" },
  { name: "TESTIMONIALS", href: "#testimonials" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["home", "about", "services", "skills", "work", "testimonials", "contact"];
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
          ? "py-3.5 bg-[#09090c]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo: SUBASH KETAGODA with custom minimal SK monogram icon */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#14141c] border border-white/10 group-hover:border-[#ff8a00]/50 flex items-center justify-center font-mono font-bold text-xs tracking-wider text-white group-hover:scale-105 transition-all duration-300 shadow-md">
            S<span className="text-[#ff8a00]">K</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-wider text-white group-hover:text-[#ff8a00] transition-colors uppercase">
              SUBASH KETAGODA
            </span>
            <span className="font-mono text-[9px] tracking-widest text-gray-400 hidden sm:block uppercase">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[12px] font-mono tracking-wider transition-colors duration-200 relative py-1 ${
                  isActive ? "text-[#ff8a00] font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff8a00] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Orange Outlined "LET'S TALK" button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#ff8a00]/40 text-xs font-semibold tracking-wider text-gray-200 hover:text-white hover:border-[#ff8a00] hover:bg-[#ff8a00]/10 transition-all duration-300 shadow-sm hover:shadow-[#ff8a00]/20"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff8a00]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c11]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono tracking-wider text-gray-300 hover:text-[#ff8a00] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 px-4 rounded-full bg-[#ff8a00] text-white font-semibold text-xs tracking-wider shadow-lg shadow-[#ff8a00]/20"
            >
              LET&apos;S TALK
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
