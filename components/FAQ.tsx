"use client";
import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  { q: "How much does website development cost?",  a: "Our pricing is transparent and scope-based. Simple business websites start from $499, e-commerce platforms from $1,499, and complex web applications from $3,999. We provide a detailed, fixed-price quote after a free consultation — no hidden fees, ever.", tag: "Pricing" },
  { q: "How long does development take?",           a: "Timelines depend on project scope. Simple websites take 2–3 weeks, complex web applications 6–12 weeks, and full mobile apps 10–20 weeks. We keep you updated at every sprint milestone.", tag: "Timeline" },
  { q: "Do you provide maintenance after launch?",  a: "Yes. We offer flexible maintenance packages covering security updates, performance monitoring, bug fixes, content updates, and feature enhancements. All projects include 30 days of free post-launch support.", tag: "Support" },
  { q: "Do you develop mobile apps?",               a: "Yes — we specialize in cross-platform Flutter development for iOS and Android. We also handle native Swift (iOS) and Kotlin (Android) for projects requiring platform-specific capabilities.", tag: "Services" },
  { q: "Do you provide SEO services?",              a: "Yes. We offer comprehensive SEO including technical audits, on-page optimization, content strategy, link building, local SEO, and performance analytics focused on measurable growth.", tag: "Marketing" },
  { q: "Do you sign NDAs and protect our IP?",      a: "Absolutely. We sign NDAs before any project discussion. All code, designs, and IP created during your project belong entirely to you upon final payment.", tag: "Legal" },
  { q: "Can you work with our existing tech stack?",a: "Yes. We integrate with or extend virtually any existing technology — from legacy systems to modern cloud infrastructure.", tag: "Technical" },
  { q: "What is your development process like?",    a: "We follow agile methodology with weekly sprints, daily standups, and continuous delivery. You get a dedicated PM, shared project board, weekly demo calls, and staging environment access throughout.", tag: "Process" },
];

const tagColors: Record<string, string> = {
  Pricing: "bg-green-50 text-green-700 border-green-100",   Timeline: "bg-blue-50 text-blue-700 border-blue-100",
  Support: "bg-purple-50 text-purple-700 border-purple-100", Services: "bg-cyan-50 text-cyan-700 border-cyan-100",
  Marketing: "bg-orange-50 text-orange-700 border-orange-100", Legal: "bg-slate-50 text-slate-700 border-slate-200",
  Technical: "bg-indigo-50 text-indigo-700 border-indigo-100", Process: "bg-rose-50 text-rose-700 border-rose-100",
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref } = useInView({ threshold: 0.05 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 lg:py-28 bg-white" aria-label="Frequently asked questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Left sticky panel */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 reveal">
            <div className="section-badge"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />FAQ</div>
            <h2 className="section-title mt-2">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm">Everything you need to know before working with us. Still have questions? Our team is always happy to help.</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                <div className="text-2xl font-black text-blue-600">8</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Common Questions</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                <div className="text-2xl font-black text-green-600">&lt; 24h</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Response Time</div>
              </div>
            </div>

            <div className="mt-5 bg-gradient-to-br from-[#0A2540] to-blue-800 rounded-2xl p-5 lg:p-6 text-white">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle size={20} className="text-cyan-300" />
              </div>
              <h3 className="font-bold mb-1.5">Still have questions?</h3>
              <p className="text-white/60 text-xs mb-4 leading-relaxed">Our team typically responds within minutes during business hours.</p>
              <div className="flex gap-2">
                <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold py-2.5 rounded-xl transition-all">
                  Email Us
                </button>
                <a href="https://wa.me/918329988006" target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-all text-center">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-blue-200 shadow-md shadow-blue-50" : "border-slate-100 shadow-sm"
              }`}>
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-3 p-4 lg:p-5 text-left group"
                  aria-expanded={openIndex === i}>
                  <div className="flex items-start gap-2 lg:gap-3 flex-1 min-w-0">
                    <span className={`text-[10px] font-bold border px-2 py-0.5 rounded-md mt-0.5 flex-shrink-0 ${tagColors[faq.tag]}`}>{faq.tag}</span>
                    <h3 className={`font-semibold text-sm leading-snug transition-colors ${openIndex === i ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"}`}>{faq.q}</h3>
                  </div>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 mt-0.5 ${openIndex === i ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60" : "max-h-0"}`}>
                  <p className="px-4 lg:px-5 pb-4 lg:pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
