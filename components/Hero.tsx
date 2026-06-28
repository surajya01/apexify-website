"use client";
import { useRef, useState, MouseEvent } from "react";
import { ArrowRight, CheckCircle, Users, Briefcase, Award, Clock, Sparkles } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";

const words = ["Websites", "Mobile Apps", "Dashboards", "Automation", "Software"];

const codeLines = [
  { tokens: [{ t: "const ", c: "text-purple-400" }, { t: "project ", c: "text-white" }, { t: "= await ", c: "text-cyan-400" }, { t: "apexify", c: "text-blue-400" }] },
  { tokens: [{ t: "  .build(", c: "text-cyan-400" }, { t: '"your_idea"', c: "text-green-400" }, { t: ")", c: "text-cyan-400" }] },
  { tokens: [{ t: "  .deploy(", c: "text-cyan-400" }, { t: "production", c: "text-orange-400" }, { t: ")", c: "text-cyan-400" }] },
  { tokens: [{ t: "  .scale(", c: "text-cyan-400" }, { t: "Infinity", c: "text-pink-400" }, { t: ");", c: "text-cyan-400" }] },
  { tokens: [{ t: "", c: "" }] },
  { tokens: [{ t: "// ", c: "text-slate-500" }, { t: "Status: ", c: "text-slate-400" }, { t: "✅ Delivered on time", c: "text-green-400" }] },
];

function StatCounter({ target, suffix = "", label, icon: Icon, color }: {
  target: number; suffix?: string; label: string; icon: React.ElementType; color: string;
}) {
  const { ref, inView } = useInView();
  const count = useCounter(target, 2200, inView);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:bg-white/90 transition-all duration-300 group">
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-slate-900">{count}{suffix}</div>
        <div className="text-xs text-slate-500 font-medium leading-tight">{label}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(words, 90, 45, 2000);
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    setCursor({ x: ((e.clientX - left) / width) * 100, y: ((e.clientY - top) / height) * 100 });
  };

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" ref={sectionRef} onMouseMove={onMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden mesh-gradient"
      aria-label="Hero — Apexify Digital Agency">

      {/* Spotlight */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(600px circle at ${cursor.x}% ${cursor.y}%, rgba(0,191,255,0.07) 0%, transparent 60%)` }} />

      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-[450px] h-[450px] bg-blue-800/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div className="text-white space-y-7">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <Sparkles size={14} className="text-cyan-400" />
              Full-Service Digital Agency · Est. 2019
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-[68px] font-extrabold leading-[1.08] tracking-tight">
              We Build<br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent min-w-[12ch] inline-block">
                  {typed}
                  <span className="inline-block w-[3px] h-[0.85em] bg-cyan-300 ml-1 align-middle animate-blink" />
                </span>
              </span><br />
              That Scale.
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              Apexify builds world-class digital products — websites, mobile apps, custom software, and automation systems — that help businesses grow faster and compete smarter.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Free Consultation", "Transparent Pricing", "On-Time Delivery", "24/7 Support"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg">
                  <CheckCircle size={12} className="text-cyan-400" />{t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <button onClick={() => scrollTo("#contact")}
                className="group relative overflow-hidden bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5">
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button onClick={() => scrollTo("#portfolio")}
                className="group flex items-center gap-3 text-white/90 hover:text-white font-semibold px-6 py-4 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300">
                View Our Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="relative hidden lg:block">
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-400 text-xs font-mono">apexify ~ build-your-dream</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-1">
                <div className="text-slate-500 text-xs mb-3">// Apexify — Your Dream Project</div>
                {codeLines.map((line, i) => (
                  <div key={i} className="flex gap-0 leading-7">
                    <span className="text-slate-600 text-xs w-6 mr-3 select-none">{i + 1}</span>
                    {line.tokens.map((token, j) => <span key={j} className={token.c}>{token.t}</span>)}
                  </div>
                ))}
                <div className="flex gap-0 leading-7">
                  <span className="text-slate-600 text-xs w-6 mr-3 select-none">{codeLines.length + 1}</span>
                  <span className="inline-block w-2 h-4 bg-cyan-400 align-middle animate-blink mt-1" />
                </div>
              </div>
              <div className="mx-4 mb-4 bg-slate-800/60 rounded-xl px-4 py-3 border border-green-500/20">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono">Build successful · Deployed to production · 99.9% uptime</span>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-10 top-8 glass-card rounded-2xl p-4 flex items-center gap-3 animate-float shadow-2xl border border-white/40">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Briefcase size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 leading-none">100+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Projects Done</div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-20 glass-card rounded-2xl p-4 flex items-center gap-3 animate-float-delayed shadow-2xl border border-white/40">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Users size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 leading-none">50+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Happy Clients</div>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 glass-card rounded-2xl px-5 py-3 flex items-center gap-4 shadow-2xl border border-white/40 whitespace-nowrap">
              <div className="flex flex-col">
                <div className="flex text-amber-400 text-sm">★★★★★</div>
                <div className="text-xs text-slate-500 font-medium">4.9 / 5 · 50+ Reviews</div>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">🟢 Available Now</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCounter target={100} suffix="+" label="Projects Delivered" icon={Briefcase} color="from-blue-500 to-blue-600" />
          <StatCounter target={50} suffix="+" label="Happy Clients" icon={Users} color="from-cyan-500 to-cyan-600" />
          <StatCounter target={5} suffix="+" label="Years Experience" icon={Award} color="from-indigo-500 to-indigo-600" />
          <StatCounter target={99} suffix="%" label="Client Satisfaction" icon={Clock} color="from-sky-500 to-sky-600" />
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full fill-white" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
