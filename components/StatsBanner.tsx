"use client";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 100, suffix: "+", label: "Projects Delivered", sub: "Across 12+ industries", color: "text-cyan-400" },
  { icon: Users,      value: 50,  suffix: "+", label: "Happy Clients",       sub: "Globally trusted partners", color: "text-blue-300" },
  { icon: Globe,      value: 12,  suffix: "+", label: "Countries Served",    sub: "From India to the world",   color: "text-cyan-300" },
  { icon: Award,      value: 99,  suffix: "%", label: "Client Satisfaction", sub: "Average satisfaction score", color: "text-sky-300" },
];

function StatItem({ icon: Icon, value, suffix, label, sub, color }: typeof stats[0]) {
  const { ref, inView } = useInView();
  const count = useCounter(value, 2000, inView);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center text-center px-4 py-2 group">
      <div className={`mb-3 ${color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <div className={`text-4xl lg:text-5xl font-black ${color} leading-none mb-2 tabular-nums`}>{count}{suffix}</div>
      <div className="text-white font-semibold text-sm lg:text-base mb-1">{label}</div>
      <div className="text-white/40 text-xs">{sub}</div>
    </div>
  );
}

export default function StatsBanner() {
  const { ref } = useInView({ threshold: 0.2 });
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative py-16 lg:py-20 overflow-hidden bg-[#0A2540]" aria-label="Apexify statistics">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-2">Our Track Record</p>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            Numbers That Speak{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">For Themselves</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              {i < stats.length - 1 && <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10" />}
              <StatItem {...stat} />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-white/40 text-xs lg:text-sm">
            <div className="h-px w-10 lg:w-16 bg-white/20" />
            <span>Trusted by startups and enterprises across India, UAE, UK & USA</span>
            <div className="h-px w-10 lg:w-16 bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
