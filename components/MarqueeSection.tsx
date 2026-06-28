"use client";

const techItems = [
  { name: "React", icon: "⚛️" }, { name: "Next.js", icon: "▲" }, { name: "TypeScript", icon: "📘" },
  { name: "Flutter", icon: "💙" }, { name: "Node.js", icon: "🟢" }, { name: "Firebase", icon: "🔥" },
  { name: "PostgreSQL", icon: "🐘" }, { name: "AWS", icon: "☁️" }, { name: "Docker", icon: "🐳" },
  { name: "Laravel", icon: "🔴" }, { name: "Figma", icon: "🎯" }, { name: "MongoDB", icon: "🍃" },
  { name: "GraphQL", icon: "◈" }, { name: "Vercel", icon: "▲" }, { name: "Tailwind", icon: "🌊" },
  { name: "MySQL", icon: "🐬" }, { name: "Redux", icon: "⚡" }, { name: "Jest", icon: "✅" },
];

function MarqueeTrack({ items, reverse = false }: { items: typeof techItems; reverse?: boolean }) {
  return (
    <div className={`flex gap-3 lg:gap-4 ${reverse ? "marquee-reverse" : "marquee"} w-max`}>
      {[...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center gap-2 lg:gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 lg:px-5 py-2.5 lg:py-3 flex-shrink-0 hover:border-blue-200 hover:shadow-md hover:bg-blue-50 transition-all duration-200 cursor-default group">
          <span className="text-lg lg:text-xl" aria-hidden="true">{item.icon}</span>
          <span className="text-slate-700 font-semibold text-xs lg:text-sm group-hover:text-blue-700 transition-colors whitespace-nowrap">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const half = Math.ceil(techItems.length / 2);
  return (
    <section className="py-16 lg:py-28 bg-section-gradient overflow-hidden" aria-label="Technologies we use">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-14">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="section-badge justify-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Technology Stack</div>
          <h2 className="section-title mt-2">Powered by <span className="gradient-text">Modern Technologies</span></h2>
          <p className="section-subtitle mt-4 mx-auto">We leverage the best-in-class tools and frameworks to build fast, scalable, and future-proof digital products.</p>
        </div>
      </div>

      {[techItems.slice(0, half), techItems.slice(half)].map((row, idx) => (
        <div key={idx} className="relative overflow-hidden mb-3 lg:mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-[#f8faff] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#f8faff] to-transparent z-10 pointer-events-none" />
          <MarqueeTrack items={row} reverse={idx === 1} />
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 lg:mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 reveal">
          {[
            { value: "25+", label: "Technologies Mastered" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "3x", label: "Faster Delivery" },
            { value: "100%", label: "Code Ownership" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-4 lg:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl lg:text-3xl font-black gradient-text mb-1">{value}</div>
              <div className="text-slate-500 text-xs lg:text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-6 lg:mt-8">
          Don&apos;t see your stack?{" "}
          <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="text-blue-600 font-semibold hover:underline">
            We adapt to any technology.
          </button>
        </p>
      </div>
    </section>
  );
}
