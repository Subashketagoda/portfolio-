"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle, ChevronDown, Sparkles, Send, MessageSquare, CalendarDays } from "lucide-react";
import CalBooker from "@/components/CalBooker";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budgetRange: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budgetRange: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#080b0f] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[350px] sm:w-[600px] h-[300px] sm:h-[550px] bg-orange-500/[0.06] rounded-full blur-[170px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Eyebrow, Title, Description & Direct Channels */}
          <div className="lg:col-span-5 min-w-0 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.12)]">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>INITIALIZE COLLABORATION</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Extraordinary
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              Have a high-impact web application, transactional POS platform, or enterprise redesign in mind? I&apos;m available for select client engagements, architectural advisory, and full-stack development.
            </p>

            {/* Live Availability Capsule */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#131622]/90 to-[#0c0e16]/95 border border-white/[0.09] shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">STATUS</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE NOW
                </span>
              </div>
              <p className="text-xs text-gray-300">
                Currently onboarding clients for Q4 &amp; 2026 enterprise software development and high-converting web apps.
              </p>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>ESTIMATED RESPONSE:</span>
                <span className="text-orange-400 font-semibold">&lt; 4 HOURS</span>
              </div>
            </div>

            {/* Direct Calendar Booking Action */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#131622]/90 to-[#0c0e16]/95 border border-white/[0.09] shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">DIRECT CALENDAR</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-mono text-[11px] font-bold">
                  30 MIN CALL
                </span>
              </div>
              <p className="text-xs text-gray-300">
                Prefer an immediate meeting? Pick a convenient time on my calendar for an architectural advisory or project kickoff.
              </p>
              <a
                href="#booking"
                className="w-full py-3 px-4 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/40 text-orange-400 hover:text-orange-300 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/10"
              >
                <CalendarDays className="w-4 h-4" />
                <span>SCHEDULE VIDEO CALL</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7 min-w-0">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#131724]/95 to-[#0b0e16]/98 border border-white/[0.12] p-6 sm:p-9 shadow-2xl shadow-orange-500/10 backdrop-blur-xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched</h3>
                  <p className="text-gray-300 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. Subhash Ketagoda will review your inquiry and follow up within 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0e111a] border border-white/[0.1] text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0e111a] border border-white/[0.1] text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                        Project Category
                      </label>
                      <div className="relative">
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0e111a] border border-white/[0.1] text-base sm:text-sm text-gray-300 focus:text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all cursor-pointer appearance-none"
                        >
                          <option value="" disabled>Select Type</option>
                          <option value="web" className="bg-[#0e111a] text-white">Full-Stack Next.js App</option>
                          <option value="pos" className="bg-[#0e111a] text-white">Custom POS / Billing Engine</option>
                          <option value="luxury" className="bg-[#0e111a] text-white">Luxury &amp; Editorial Web Design</option>
                          <option value="consulting" className="bg-[#0e111a] text-white">Architecture &amp; Performance Audit</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0e111a] border border-white/[0.1] text-base sm:text-sm text-gray-300 focus:text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all cursor-pointer appearance-none"
                        >
                          <option value="" disabled>Select Budget</option>
                          <option value="1k-3k" className="bg-[#0e111a] text-white">$1,000 &mdash; $3,000</option>
                          <option value="3k-5k" className="bg-[#0e111a] text-white">$3,000 &mdash; $5,000</option>
                          <option value="5k-10k" className="bg-[#0e111a] text-white">$5,000 &mdash; $10,000</option>
                          <option value="10k+" className="bg-[#0e111a] text-white">$10,000+</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                      Project Specifications &amp; Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your objectives, key deliverables, and target timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0e111a] border border-white/[0.1] text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="relative group overflow-hidden w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-[length:200%_auto] hover:bg-right text-white font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_45px_rgba(249,115,22,0.55)] active:scale-98 transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT PROPOSAL REQUEST</span>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Live Interactive Cal.com Booking Calendar */}
        <CalBooker />
      </div>
    </section>
  );
}
