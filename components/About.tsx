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

function CountCard({ target, suffix = "", label, icon: Icon, color }: {
  target: number; suffix?: string; label: string; icon: React.ElementType; color: string;
}) {
  const { ref, inView } = useInView();
  const count = useCounter(target, 1800, inView);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`flex items-center gap-3 ${color} rounded-xl p-3 lg:p-4`}>
      <Icon size={20} />
      <div>
        <div className="text-lg lg:text-xl font-bold">{count}{suffix}</div>
        <div className="text-xs font-medium opacity-75">{label}</div>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: leftRef } = useInView({ threshold: 0.1 });
  const { ref: rightRef } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 lg:py-28 bg-white overflow-hidden" aria-label="About Apexify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Visual */}
          <div ref={leftRef as React.RefObject<HTMLDivElement>} className="relative reveal-left">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Apexify team collaborating on a digital project"
                width={1200} height={520}
                className="w-full h-64 sm:h-80 lg:h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute -right-2 lg:-right-5 top-6 lg:top-12 bg-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-5 border border-slate-100">
              <div className="text-2xl lg:text-3xl font-black text-slate-900">5+</div>
              <div className="text-xs lg:text-sm text-slate-500 font-medium">Years in Business</div>
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-sm" />
                ))}
              </div>
            </div>
            {/* Tech badge */}
            <div className="absolute -left-2 lg:-left-4 bottom-10 lg:bottom-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl lg:rounded-2xl shadow-xl p-3 lg:p-4 text-white">
              <div className="text-xl lg:text-2xl font-black">25+</div>
              <div className="text-xs opacity-85 font-semibold tracking-wide">Technologies</div>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={rightRef as React.RefObject<HTMLDivElement>} className="space-y-6 lg:space-y-8 reveal-right">
            <div>
              <div className="section-badge"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />About Us</div>
              <h2 className="section-title mt-2">Helping Businesses Scale Through <span className="gradient-text">Technology</span></h2>
              <p className="section-subtitle mt-4">
                Apexify is a leading software development and digital solutions agency specializing in custom web applications, mobile apps, business automation, SEO, and cloud solutions.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <CountCard target={100} suffix="+" label="Projects Delivered" icon={Briefcase} color="bg-blue-50 text-blue-600" />
              <CountCard target={50}  suffix="+" label="Happy Clients"       icon={Users}    color="bg-cyan-50 text-cyan-600" />
              <CountCard target={100} suffix="%" label="Uptime Guarantee"    icon={Clock}    color="bg-indigo-50 text-indigo-600" />
              <CountCard target={5}   suffix="★" label="Avg. Client Rating"  icon={Star}     color="bg-amber-50 text-amber-600" />
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary">
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
