"use client";
import { Search, Paintbrush, Code2, FlaskConical, Rocket, Headphones } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  { step: "01", icon: Search, title: "Requirement Analysis", description: "We dive deep into your business goals, target audience, technical constraints, and success metrics to craft the perfect strategy.", color: "from-blue-600 to-blue-700", duration: "1–2 days" },
  { step: "02", icon: Paintbrush, title: "UI/UX Design", description: "Our designers create wireframes, prototypes, and high-fidelity designs that prioritize user experience and brand alignment.", color: "from-violet-600 to-purple-700", duration: "5–7 days" },
  { step: "03", icon: Code2, title: "Development", description: "Engineering teams build your solution using clean, maintainable code with daily progress updates and sprint reviews.", color: "from-cyan-600 to-blue-600", duration: "2–8 weeks" },
  { step: "04", icon: FlaskConical, title: "Testing & QA", description: "Rigorous manual and automated testing across devices, browsers, and edge cases ensures a bug-free, performant product.", color: "from-amber-500 to-orange-600", duration: "3–5 days" },
  { step: "05", icon: Rocket, title: "Deployment", description: "Smooth, zero-downtime deployment to production with full CI/CD pipeline, monitoring, and rollback capabilities.", color: "from-green-500 to-emerald-600", duration: "1–2 days" },
  { step: "06", icon: Headphones, title: "Support & Maintenance", description: "Ongoing 24/7 support, performance monitoring, security updates, and feature enhancements to keep your product thriving.", color: "from-rose-500 to-pink-600", duration: "Ongoing" },
];

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  return (
    <section id="process" ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-section-gradient" aria-label="Our development process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-badge justify-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Our Process</div>
          <h2 className="section-title mt-2">How We Build <span className="gradient-text">Winning Products</span></h2>
          <p className="section-subtitle mt-5 mx-auto">Our proven 6-step process ensures every project is delivered on time, within budget, and exceeds expectations.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ step, icon: Icon, title, description, color, duration }, i) => (
            <article key={title} className={`relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon size={26} className="text-white" strokeWidth={1.8} />
                </div>
                <span className="text-6xl font-black text-slate-100 group-hover:text-slate-200 transition-colors select-none">{step}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                {duration}
              </span>
              <div className={`absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b ${color} rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
