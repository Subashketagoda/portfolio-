"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07070a] border-t border-white/[0.06] pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-6 md:px-12 text-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-14 border-b border-white/[0.06]">
          {/* Col 1: Brand Info matching screenshot */}
          <div className="lg:col-span-4 min-w-0 space-y-4">
            <a href="#home" className="flex items-center group py-1">
              <img
                src="/images/subhash-signature.png"
                alt="Subhash Ketagoda"
                className="h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(249,115,22,0.35)] group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-normal">
              Building digital solutions that drive results and create exceptional user experiences.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-white">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-normal">
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-orange-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-500 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-orange-500 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#skills" className="hover:text-orange-500 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-orange-500 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-white">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Backend Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Database Design
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Me */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-white">
              FOLLOW ME
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/Subashketagoda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-[#14141c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#14141c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-[#14141c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:subhashketagoda@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-[#14141c] border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-gray-500 text-center sm:text-left">
          <div>
            &copy; 2026 Subhash Ketagoda. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Built with passion</span>
            <span className="text-red-500">❤️</span>
            <span>and lots of coffee ☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
