"use client";
import { Trophy, Zap, DollarSign, Headphones, Code2, UserCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reasons = [
  { icon: Trophy,     title: "Industry Experts",          description: "Our team brings 5+ years of domain expertise across web, mobile, cloud, and enterprise software development.", color: "from-blue-500 to-blue-600" },
  { icon: Zap,        title: "Fast Delivery",              description: "Agile sprints and streamlined workflows ensure your project launches on time — every time, without compromising quality.", color: "from-amber-500 to-orange-500" },
  { icon: DollarSign, title: "Transparent Pricing",        description: "No hidden costs. Clear, upfront pricing with detailed proposals so you always know exactly what you're paying for.", color: "from-green-500 to-emerald-500" },
  { icon: Headphones, title: "24/7 Support",               description: "Round-the-clock technical support and monitoring means we're always available when your business needs us most.", color: "from-purple-500 to-violet-500" },
  { icon: Code2,      title: "Modern Technologies",        description: "We use the latest tech stack — React, Next.js, Flutter, Node.js, AWS — to build future-proof, performant products.", color: "from-cyan-500 to-blue-500" },
  { icon: UserCheck,  title: "Dedicated Project Manager",  description: "A single point of contact manages your project from kickoff to launch, ensuring seamless communication throughout.", color: "from-rose-500 to-pink-500" },
];

export default function WhyChooseUs() {
  const { ref } = useInView({ threshold: 0.05 });
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 lg:py-28 bg-section-gradient" aria-label="Why choose Apexify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 reveal">
          <div className="section-badge justify-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Why Choose Us</div>
          <h2 className="section-title mt-2">We Are Here to Grow Your <span className="gradient-text">Business Exponentially</span></h2>
          <p className="section-subtitle mt-4 mx-auto">Six compelling reasons why industry-leading startups and enterprises trust Apexify to build their most critical digital products.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map(({ icon: Icon, title, description, color }) => (
            <article key={title} className="service-card group relative overflow-hidden reveal">
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 lg:mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <Icon size={24} className="text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 lg:mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              <div className={`mt-4 h-0.5 w-0 bg-gradient-to-r ${color} rounded-full group-hover:w-full transition-all duration-500`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl`} />
            </article>
          ))}
        </div>
        {/* CTA banner */}
        <div className="mt-12 lg:mt-16 relative overflow-hidden bg-gradient-to-r from-[#0A2540] to-blue-700 rounded-2xl lg:rounded-3xl p-8 lg:p-10 text-white reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-3xl font-bold">Ready to build something great?</h3>
              <p className="text-white/70 mt-2 text-sm lg:text-base">Schedule a free 30-minute strategy call with our experts today.</p>
            </div>
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-white flex-shrink-0">
              Book Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
