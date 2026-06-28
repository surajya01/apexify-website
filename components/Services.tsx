"use client";
import { useRef, MouseEvent } from "react";
import { Globe, Smartphone, LayoutDashboard, Code2, Bot, Palette, BarChart3, Cloud, Plug, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  { icon: Globe, title: "Website Development", description: "High-performance, SEO-optimized websites and web applications built with modern frameworks like React and Next.js.", color: "from-blue-500 to-blue-600", tags: ["React", "Next.js", "TypeScript"] },
  { icon: Smartphone, title: "Mobile App Development", description: "Cross-platform iOS and Android apps built with Flutter for a native experience at half the development cost.", color: "from-cyan-500 to-blue-500", tags: ["Flutter", "iOS", "Android"] },
  { icon: LayoutDashboard, title: "Admin Dashboard Development", description: "Custom analytics dashboards and back-office systems with real-time data visualization and role-based access.", color: "from-indigo-500 to-indigo-600", tags: ["React", "Charts", "REST API"] },
  { icon: Code2, title: "Custom Software Development", description: "End-to-end bespoke software solutions tailored to your unique business workflows and operational requirements.", color: "from-violet-500 to-purple-600", tags: ["Node.js", "Laravel", "PostgreSQL"] },
  { icon: Bot, title: "Business Automation", description: "Automate repetitive workflows, integrate third-party APIs, and build intelligent systems that save you hours daily.", color: "from-orange-500 to-amber-500", tags: ["Automation", "AI", "Integrations"] },
  { icon: Palette, title: "UI/UX Design", description: "User-centered design that converts. From wireframes to pixel-perfect prototypes that delight and drive engagement.", color: "from-rose-500 to-pink-500", tags: ["Figma", "Prototyping", "Research"] },
  { icon: BarChart3, title: "SEO & Digital Marketing", description: "Data-driven SEO strategies, content marketing, and performance campaigns that grow organic traffic and ROI.", color: "from-green-500 to-emerald-500", tags: ["On-Page SEO", "Analytics", "Content"] },
  { icon: Cloud, title: "Cloud Solutions", description: "Scalable cloud infrastructure on AWS, GCP, or Azure with CI/CD pipelines, auto-scaling, and 99.9% uptime SLAs.", color: "from-sky-500 to-cyan-500", tags: ["AWS", "Vercel", "Docker"] },
  { icon: Plug, title: "API Development", description: "Robust RESTful and GraphQL APIs with comprehensive documentation, authentication, and enterprise-grade security.", color: "from-teal-500 to-green-500", tags: ["REST", "GraphQL", "OpenAPI"] },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 14;
    const y = ((e.clientY - top) / height - 0.5) * -14;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) translateZ(8px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)"; };
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d", willChange: "transform" }}>{children}</div>;
}

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-white" aria-label="Apexify Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-badge justify-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Our Services</div>
          <h2 className="section-title mt-2">Custom IT Solutions for Your <span className="gradient-text">Successful Business</span></h2>
          <p className="section-subtitle mt-5 mx-auto">From concept to deployment, we provide end-to-end digital services that help your business innovate, automate, and scale.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, color, tags }, i) => (
            <TiltCard key={title} className={`service-card group relative overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ transitionDelay: `${i * 60}ms` }} />
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl pointer-events-none`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Icon size={26} className="text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-1 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-colors cursor-default">{tag}</span>
                ))}
              </div>
              <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 text-blue-600 text-sm font-semibold hover:gap-3 transition-all duration-200 group/btn"
                aria-label={`Learn more about ${title}`}>
                Learn More
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
