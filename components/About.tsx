"use client";
import Image from "next/image";
import { CheckCircle, Briefcase, Users, Clock, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";

const features = [
  "Custom software tailored to your business needs",
  "Scalable and secure cloud-ready architecture",
  "Agile methodology for fast, iterative delivery",
  "Dedicated project manager for every engagement",
  "Post-launch support and maintenance included",
  "Transparent communication and reporting",
];

function CountCard({ target, suffix = "", label, icon: Icon, color, delay = 0 }: {
  target: number; suffix?: string; label: string; icon: React.ElementType; color: string; delay?: number;
}) {
  const { ref, inView } = useInView();
  const count = useCounter(target, 1800, inView);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`flex items-center gap-3 ${color} rounded-xl p-4`} style={{ transitionDelay: `${delay}ms` }}>
      <Icon size={22} />
      <div>
        <div className="text-xl font-bold">{count}{suffix}</div>
        <div className="text-xs font-medium opacity-75">{label}</div>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 });
  return (
    <section id="about" ref={sectionRef as React.RefObject<HTMLElement>} className="py-28 bg-white overflow-hidden" aria-label="About Apexify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={`relative transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Apexify team collaborating on a digital project"
                width={1200} height={520}
                className="w-full h-[520px] object-cover rounded-3xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent rounded-3xl" />
            </div>
            <div className="absolute -right-5 top-12 bg-white rounded-2xl shadow-2xl p-5 border border-slate-100">
              <div className="text-3xl font-black text-slate-900">5+</div>
              <div className="text-sm text-slate-500 font-medium">Years in Business</div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-sm" />
                ))}
              </div>
            </div>
            <div className="absolute -left-4 bottom-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-xl p-4 text-white">
              <div className="text-2xl font-black">25+</div>
              <div className="text-xs opacity-85 font-semibold tracking-wide">Technologies</div>
            </div>
          </div>

          {/* Right */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
            <div>
              <div className="section-badge"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />About Us</div>
              <h2 className="section-title mt-2">Helping Businesses Scale Through <span className="gradient-text">Technology</span></h2>
              <p className="section-subtitle mt-5">
                Apexify is a leading software development and digital solutions agency specializing in custom web applications, mobile apps, business automation, SEO, and cloud solutions.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-2.5">
              {features.map((feature, i) => (
                <li key={feature} className={`flex items-start gap-3 transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}>
                  <CheckCircle size={17} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <CountCard target={100} suffix="+" label="Projects Delivered" icon={Briefcase} color="bg-blue-50 text-blue-600" delay={0} />
              <CountCard target={50} suffix="+" label="Happy Clients" icon={Users} color="bg-cyan-50 text-cyan-600" delay={100} />
              <CountCard target={100} suffix="%" label="Uptime Guarantee" icon={Clock} color="bg-indigo-50 text-indigo-600" delay={200} />
              <CountCard target={5} suffix="★" label="Avg. Client Rating" icon={Star} color="bg-amber-50 text-amber-600" delay={300} />
            </div>
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary inline-flex items-center gap-2">
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
