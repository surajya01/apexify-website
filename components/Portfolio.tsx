"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Tag } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const categories = ["All", "Web App", "Mobile App", "Dashboard", "Platform"];
const projects = [
  { title: "Aquatrack", category: "Mobile App", description: "A comprehensive sports management and tracking app built with Flutter, featuring real-time performance analytics, team management, and training schedules.", image: "https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=800", technologies: ["Flutter", "Firebase", "Node.js"], color: "from-blue-600 to-cyan-500" },
  { title: "GetSwipe", category: "Platform", description: "A modern hiring platform connecting top talent with leading companies. Features AI-powered matching, video interviews, and real-time applicant tracking.", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800", technologies: ["React", "Node.js", "PostgreSQL"], color: "from-violet-600 to-purple-500" },
  { title: "Seven Square Academy", category: "Web App", description: "A full-featured e-learning platform with course management, live classes, progress tracking, certificates, and integrated payment gateway.", image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800", technologies: ["Next.js", "MySQL", "Stripe"], color: "from-green-600 to-emerald-500" },
  { title: "Packers & Movers Platform", category: "Platform", description: "A logistics marketplace connecting customers with verified movers. Real-time quotes, GPS tracking, reviews, and secure payments.", image: "https://images.pexels.com/photos/4246100/pexels-photo-4246100.jpeg?auto=compress&cs=tinysrgb&w=800", technologies: ["React", "Laravel", "MySQL"], color: "from-orange-500 to-amber-500" },
  { title: "Business Analytics Dashboard", category: "Dashboard", description: "A custom enterprise dashboard with real-time KPI monitoring, interactive charts, multi-tenant access control, and automated reporting.", image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800", technologies: ["React", "D3.js", "Node.js"], color: "from-indigo-600 to-blue-500" },
  { title: "HR Management System", category: "Dashboard", description: "A complete HRMS with employee lifecycle management, payroll, leave tracking, performance reviews, and compliance reporting.", image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=800", technologies: ["React", "Node.js", "PostgreSQL"], color: "from-rose-600 to-pink-500" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.05 });
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-white" aria-label="Apexify Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-badge justify-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Featured Projects</div>
          <h2 className="section-title mt-2">Our Latest <span className="gradient-text">Work</span></h2>
          <p className="section-subtitle mt-5 mx-auto">A curated selection of projects that showcase our expertise in building scalable, beautiful, and impactful digital products.</p>
        </div>
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} role="tab" aria-selected={active === cat}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${active === cat ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-100"}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <article key={project.title} className={`group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${300 + i * 80}ms` }}>
              <div className="relative overflow-hidden h-52">
                <Image src={project.image} alt={`${project.title} — ${project.category} project by Apexify`} width={800} height={208} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-75 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-xl shadow-xl text-sm hover:bg-blue-50 transition-colors">
                    <ExternalLink size={16} />View Project
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 text-xs font-semibold bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1.5 rounded-lg shadow-sm"><Tag size={11} />{project.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-lg border border-blue-100">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline">Discuss Your Project</button>
        </div>
      </div>
    </section>
  );
}
