"use client";
import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Loader, Clock, Shield, Users, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const contactInfo = [
  { icon: Mail,   label: "Email Us",  value: "info@apexify.dev",          href: "mailto:info@apexify.dev" },
  { icon: Phone,  label: "Call Us",   value: "+91 83299 88006",            href: "tel:+918329988006" },
  { icon: MapPin, label: "Location",  value: "Pune, Maharashtra, India",   href: "https://maps.google.com/?q=Pune,Maharashtra,India" },
];

const guarantees = [
  { icon: Clock,  text: "Response within 24 hours" },
  { icon: Shield, text: "NDA signed on request" },
  { icon: Zap,    text: "Free consultation call" },
  { icon: Users,  text: "Dedicated project manager" },
];

const services = ["Website Development", "Mobile App Development", "Custom Software", "Admin Dashboard", "SEO & Marketing", "Business Automation", "UI/UX Design", "Cloud Solutions"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const { ref } = useInView({ threshold: 0.05 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-16 lg:py-28 bg-section-gradient" aria-label="Contact Apexify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16 reveal">
          <div className="section-badge justify-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Get in Touch</div>
          <h2 className="section-title mt-2">Let&apos;s Build Something <span className="gradient-text">Amazing Together</span></h2>
          <p className="section-subtitle mt-4 mx-auto">Tell us about your project and get a free consultation and custom proposal within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-5 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-slate-100 reveal">
          {/* Left dark panel */}
          <div className="lg:col-span-2 relative bg-[#0A2540] p-7 lg:p-10 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            </div>
            <div className="relative">
              {/* Logo */}
              <div className="mb-8 lg:mb-10">
                <Image src="/nlogo.webp" alt="Apexify" width={130} height={40} className="h-8 lg:h-9 w-auto" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">Start your project today</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6 lg:mb-8">We build digital products that grow businesses. Fill out the form and our team will get back to you within one business day.</p>

              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 group">
                      <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-200">
                        <Icon size={14} className="text-white/70 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">{label}</div>
                        <div className="text-white/85 text-sm font-medium">{value}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-6 lg:pt-8">
                <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider mb-3 lg:mb-4">What you can expect</p>
                <ul className="space-y-2 lg:space-y-2.5">
                  {guarantees.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-white/65 text-sm">
                      <div className="w-5 h-5 rounded-md bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={11} className="text-cyan-400" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="relative mt-8 lg:mt-10">
              <a href="https://wa.me/918329988006?text=Hi%20Apexify!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-3 lg:px-5 lg:py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg">
                <MessageCircle size={18} fill="white" />
                Chat on WhatsApp
                <span className="ml-auto text-xs bg-green-400/40 px-2 py-0.5 rounded-lg">Instant Reply</span>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 bg-white p-7 lg:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 lg:mb-5">
                  <CheckCircle size={36} className="text-green-600" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs">Thank you for reaching out. Our team will contact you within 24 hours with a custom proposal.</p>
                <div className="mt-5 lg:mt-6 flex flex-wrap gap-3 justify-center">
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", service: "", message: "" }); }} className="btn-outline text-sm">
                    Send Another
                  </button>
                  <a href="https://wa.me/918329988006" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                    <MessageCircle size={16} />WhatsApp Us
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5" noValidate>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">Request a Free Quote</h3>
                  <p className="text-slate-400 text-sm">Fill in the details below — takes under 2 minutes.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Full Name <span className="text-blue-500">*</span></label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email <span className="text-blue-500">*</span></label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 outline-none transition-all text-sm bg-slate-50 focus:bg-white" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Service Required</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 outline-none transition-all text-sm bg-slate-50 focus:bg-white">
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Details <span className="text-blue-500">*</span></label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us about your project, goals, budget range, and timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 outline-none transition-all text-sm resize-none bg-slate-50 focus:bg-white" />
                </div>
                <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center text-base py-4">
                  {status === "loading" ? <><Loader size={18} className="animate-spin" />Sending...</> : <><Send size={18} />Send Message & Get Free Quote</>}
                </button>
                <p className="text-center text-xs text-slate-300">🔒 Your information is secure and never shared with third parties.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
