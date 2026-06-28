"use client";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const services = ["Website Development", "Mobile App Development", "Custom Software", "Admin Dashboard", "SEO & Marketing", "Business Automation", "UI/UX Design", "Cloud Solutions"];
const quickLinks = [{ label: "Home", href: "#home" }, { label: "About Us", href: "#about" }, { label: "Services", href: "#services" }, { label: "Portfolio", href: "#portfolio" }, { label: "Process", href: "#process" }, { label: "Contact Us", href: "#contact" }];
const socialLinks = [{ label: "LinkedIn", href: "#", bg: "hover:bg-blue-700" }, { label: "Twitter", href: "#", bg: "hover:bg-sky-500" }, { label: "GitHub", href: "#", bg: "hover:bg-slate-600" }, { label: "Instagram", href: "#", bg: "hover:bg-pink-600" }];

export default function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="bg-slate-900 text-white" role="contentinfo" aria-label="Site footer">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-white/75 mt-1">Get a free consultation and custom proposal within 24 hours.</p>
          </div>
          <button onClick={() => scrollTo("#contact")} className="btn-white flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            Start Your Project<ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scrollTo("#home")} className="flex items-center mb-5 group" aria-label="Apexify home">
              <Image src="/nlogo.webp" alt="Apexify" width={130} height={40} className="h-9 w-auto group-hover:opacity-90 transition-opacity" />
            </button>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">Transforming ideas into digital success. We build scalable, beautiful, and impactful digital products for startups and enterprises worldwide.</p>
            <ul className="space-y-2.5">
              <li><a href="mailto:info@apexify.dev" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm"><Mail size={14} className="text-blue-400 flex-shrink-0" />info@apexify.dev</a></li>
              <li><a href="tel:+918329988006" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors text-sm"><Phone size={14} className="text-blue-400 flex-shrink-0" />+91 83299 88006</a></li>
              <li><span className="flex items-start gap-2.5 text-slate-400 text-sm"><MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />Pune, Maharashtra, India</span></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button onClick={() => scrollTo("#services")} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all" />{service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button onClick={() => scrollTo(href)} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all" />{label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">Subscribe to our newsletter for the latest tech insights and company updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              <button type="submit" className="w-full btn-primary text-sm flex items-center justify-center gap-2">Subscribe<ArrowRight size={16} /></button>
            </form>
            <div className="mt-6">
              <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider">Follow us</p>
              <div className="flex gap-2">
                {socialLinks.map(({ label, href, bg }) => (
                  <a key={label} href={href} aria-label={`Follow Apexify on ${label}`} className={`w-9 h-9 rounded-xl bg-slate-800 ${bg} border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200`}>
                    <span className="text-xs font-bold">{label[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Apexify. All rights reserved. Transforming Ideas Into Digital Success.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
