"use client";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 100, suffix: "+", label: "Projects Delivered", sub: "Across 12+ industries", color: "text-cyan-400" },
  { icon: Users, value: 50, suffix: "+", label: "Happy Clients", sub: "Globally trusted partners", color: "text-blue-300" },
  { icon: Globe, value: 12, suffix: "+", label: "Countries Served", sub: "From India to the world", color: "text-cyan-300" },
  { icon: Award, value: 99, suffix: "%", label: "Client Satisfaction", sub: "Average satisfaction score", color: "text-sky-300" },
];

function StatItem({ icon: Icon, value, suffix, label, sub, color }: typeof stats[0]) {
  const { ref, inView } = useInView();
  const count = useCounter(value, 2000, inView);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center text-center px-6 py-2 group">
      <div className={`mb-3 ${color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <div className={`text-5xl lg:text-6xl font-black ${color} leading-none mb-2 tabular-nums`}>{count}{suffix}</div>
      <div className="text-white font-semibold text-base mb-1">{label}</div>
      <div className="text-white/40 text-xs">{sub}</div>
    </div>
  );
}

export default function StatsBanner() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative py-20 overflow-hidden bg-[#0A2540]" aria-label="Apexify statistics">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-2">Our Track Record</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Numbers That Speak <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">For Themselves</span>
          </h2>
        </div>
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative" style={{ transitionDelay: `${i * 100}ms` }}>
              {i < stats.length - 1 && <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10" />}
              <StatItem {...stat} />
            </div>
          ))}
        </div>
        <div className={`text-center mt-14 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="inline-flex items-center gap-3 text-white/40 text-sm">
            <div className="h-px w-16 bg-white/20" />
            Trusted by startups and enterprises across India, UAE, UK & USA
            <div className="h-px w-16 bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
