"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle, ChevronDown } from "lucide-react";

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
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0a0a0e] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/[0.05] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Eyebrow, Title, Description */}
          <div className="lg:col-span-4 min-w-0 space-y-4">
            <div className="text-orange-500 font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
              GET IN TOUCH
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal pt-2">
              Have a project in mind? Let&apos;s discuss how we can bring your ideas to life. I&apos;m always excited to work on new challenges and innovative projects.
            </p>
          </div>

          {/* Middle Column: Form matching screenshot */}
          <div className="lg:col-span-5 min-w-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#13131b] border border-white/[0.08] text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#13131b] border border-white/[0.08] text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#13131b] border border-white/[0.08] text-base sm:text-sm text-gray-400 focus:text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer appearance-none"
                  >
                    <option value="" disabled>Project Type</option>
                    <option value="web" className="bg-[#13131b] text-white">Web Development</option>
                    <option value="frontend" className="bg-[#13131b] text-white">Frontend Development</option>
                    <option value="backend" className="bg-[#13131b] text-white">Backend Development</option>
                    <option value="database" className="bg-[#13131b] text-white">Database Design</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#13131b] border border-white/[0.08] text-base sm:text-sm text-gray-400 focus:text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer appearance-none"
                  >
                    <option value="" disabled>Budget Range</option>
                    <option value="1k-3k" className="bg-[#13131b] text-white">&lt; $1,000</option>
                    <option value="3k-5k" className="bg-[#13131b] text-white">$1,000 - $3,000</option>
                    <option value="5k-10k" className="bg-[#13131b] text-white">$3,000 - $5,000</option>
                    <option value="10k+" className="bg-[#13131b] text-white">$5,000+</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#13131b] border border-white/[0.08] text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-xs tracking-wider hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-98 sm:hover:scale-[1.02] transition-all duration-300 disabled:opacity-75"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-white" />
                      <span>MESSAGE SENT!</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Info Card matching screenshot */}
          <div className="lg:col-span-3 min-w-0 w-full">
            <div className="rounded-2xl bg-[#13131b] border border-white/[0.08] p-5 sm:p-6 space-y-5 sm:space-y-6 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Email</div>
                  <a
                    href="mailto:subhashketagoda@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors break-all"
                  >
                    subhashketagoda@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Phone</div>
                  <a
                    href="tel:0094789656969"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    +94 78 965 6969
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Colombo, Sri Lanka
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Response Time</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Within 24 hours
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Connect Button */}
              <div className="pt-2 border-t border-white/[0.06]">
                <a
                  href="https://wa.me/94789656969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02]"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Quick Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
