"use client";
import { Trophy, Zap, DollarSign, Headphones, Code2, UserCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reasons = [
  { icon: Trophy, title: "Industry Experts", description: "Our team brings 5+ years of domain expertise across web, mobile, cloud, and enterprise software development.", color: "from-blue-500 to-blue-600", glow: "group-hover:shadow-blue-500/25" },
  { icon: Zap, title: "Fast Delivery", description: "Agile sprints and streamlined workflows ensure your project launches on time — every time, without compromising quality.", color: "from-amber-500 to-orange-500", glow: "group-hover:shadow-amber-500/25" },
  { icon: DollarSign, title: "Transparent Pricing", description: "No hidden costs. Clear, upfront pricing with detailed proposals so you always know exactly what you're paying for.", color: "from-green-500 to-emerald-500", glow: "group-hover:shadow-green-500/25" },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock technical support and monitoring means we're always available when your business needs us most.", color: "from-purple-500 to-violet-500", glow: "group-hover:shadow-purple-500/25" },
  { icon: Code2, title: "Modern Technologies", description: "We use the latest tech stack — React, Next.js, Flutter, Node.js, AWS — to build future-proof, performant products.", color: "from-cyan-500 to-blue-500", glow: "group-hover:shadow-cyan-500/25" },
  { icon: UserCheck, title: "Dedicated Project Manager", description: "A single point of contact manages your project from kickoff to launch, ensuring seamless communication throughout.", color: "from-rose-500 to-pink-500", glow: "group-hover:shadow-rose-500/25" },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-section-gradient" aria-label="Why choose Apexify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-badge justify-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Why Choose Us</div>
          <h2 className="section-title mt-2">We Are Here to Grow Your <span className="gradient-text">Business Exponentially</span></h2>
          <p className="section-subtitle mt-5 mx-auto">Six compelling reasons why industry-leading startups and enterprises trust Apexify to build their most critical digital products.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description, color, glow }, i) => (
            <article key={title} className={`service-card group relative overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg ${glow} group-hover:shadow-xl`}>
                <Icon size={26} className="text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              <div className={`mt-5 h-0.5 w-0 bg-gradient-to-r ${color} rounded-full group-hover:w-full transition-all duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />
            </article>
          ))}
        </div>
        <div className={`mt-16 relative overflow-hidden bg-gradient-to-r from-[#0A2540] to-blue-700 rounded-3xl p-10 text-white transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-10 w-44 h-44 bg-cyan-400/10 rounded-full translate-y-1/2" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to build something great?</h3>
              <p className="text-white/70 mt-2">Schedule a free 30-minute strategy call with our experts today.</p>
            </div>
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-white whitespace-nowrap flex-shrink-0">
              Book Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
