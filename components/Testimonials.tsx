"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  { name: "Rahul Sharma", role: "CEO & Founder", company: "TechStart India", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200", review: "Apexify completely transformed our online presence. They delivered our e-commerce platform in just 6 weeks, and the quality exceeded all our expectations. Our conversion rate increased by 40% within the first month.", rating: 5, project: "E-Commerce Platform", result: "+40% Conversions" },
  { name: "Priya Mehta", role: "Product Director", company: "EdTech Ventures", image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200", review: "The Flutter app Apexify built for us is absolutely stunning. The team was highly professional, responsive, and deeply understood our vision. The app has a 4.8-star rating on both app stores.", rating: 5, project: "Learning Mobile App", result: "4.8★ App Rating" },
  { name: "Aditya Kulkarni", role: "Operations Manager", company: "LogiSwift Solutions", image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200", review: "The automation system Apexify built saves our team 30+ hours per week. Their technical expertise and ability to understand complex business workflows is exceptional. Highly recommend.", rating: 5, project: "Business Automation", result: "30+ hrs saved/week" },
  { name: "Sneha Patel", role: "Marketing Head", company: "GreenLeaf Brands", image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=200", review: "Working with Apexify on our SEO and website redesign was a game-changer. Organic traffic grew by 180% in 90 days. Their attention to detail and commitment to results is unmatched.", rating: 5, project: "SEO & Web Design", result: "+180% Organic Traffic" },
  { name: "Vikram Singh", role: "CTO", company: "FinEdge Capital", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200", review: "Our admin dashboard built by Apexify handles millions of transactions daily with zero downtime. The architecture is solid, the UI is intuitive, and the code quality is enterprise-grade.", rating: 5, project: "Admin Dashboard", result: "0 Downtime" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const visible = [testimonials[index], testimonials[(index + 1) % testimonials.length], testimonials[(index + 2) % testimonials.length]];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-28 bg-white" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="section-badge justify-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Testimonials</div>
          <h2 className="section-title mt-2">Hear From Our <span className="gradient-text">Satisfied Clients</span></h2>
          <p className="section-subtitle mt-5 mx-auto">Don&apos;t just take our word for it. Here&apos;s what our clients say about their experience working with Apexify.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <article key={`${t.name}-${i}`} className={`relative bg-white rounded-2xl p-7 border transition-all duration-500 ${i === 0 ? "border-blue-200 shadow-xl shadow-blue-100 scale-[1.02] bg-gradient-to-b from-blue-50/50 to-white" : "border-slate-100 shadow-md hover:shadow-lg"} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="absolute top-5 right-5 opacity-10"><Quote size={52} className="text-blue-600" fill="currentColor" /></div>
              <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={15} className="text-amber-400" fill="currentColor" />)}</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 relative z-10">&ldquo;{t.review}&rdquo;</p>
              <div className="flex gap-2 mb-5 flex-wrap">
                <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-lg border border-blue-100">{t.project}</span>
                <span className="text-xs bg-green-50 text-green-700 font-semibold px-2.5 py-1 rounded-lg border border-green-100">{t.result}</span>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <Image src={t.image} alt={`${t.name}, ${t.role} at ${t.company}`} width={44} height={44} className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100" loading="lazy" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role} · {t.company}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 hover:scale-110" aria-label="Previous testimonials"><ChevronLeft size={20} /></button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`transition-all duration-300 rounded-full ${i === index ? "w-8 h-2.5 bg-blue-600" : "w-2.5 h-2.5 bg-slate-200 hover:bg-blue-300"}`} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>
          <button onClick={next} className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 hover:scale-110" aria-label="Next testimonials"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}
