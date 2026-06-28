"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNav("#home")} className="flex items-center group" aria-label="Apexify — Home">
            <Image
              src={scrolled ? "/logo.png" : "/nlogo.webp"}
              alt="Apexify"
              width={140}
              height={42}
              className="h-10 w-auto group-hover:opacity-90 transition-opacity"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? scrolled ? "text-blue-600 bg-blue-50" : "text-white bg-white/15"
                        : scrolled ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50" : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {label}
                    {isActive && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => handleNav("#contact")} className="btn-primary text-sm">
              Get Free Consultation
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 mb-4 overflow-hidden">
            <ul className="py-2" role="list">
              {navLinks.map(({ label, href }) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <li key={label}>
                    <button
                      onClick={() => handleNav(href)}
                      className={`w-full text-left px-6 py-3.5 font-medium transition-colors duration-200 flex items-center gap-2 ${
                        isActive ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
                      {label}
                    </button>
                  </li>
                );
              })}
              <li className="px-4 py-3">
                <button onClick={() => handleNav("#contact")} className="btn-primary w-full text-sm justify-center">
                  Get Free Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
