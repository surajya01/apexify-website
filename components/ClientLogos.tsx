"use client";

const clients = [
  { name: "TechStart", tagline: "E-Commerce" }, { name: "EdTech Ventures", tagline: "Learning Platform" },
  { name: "LogiSwift", tagline: "Logistics" },   { name: "GreenLeaf", tagline: "Digital Marketing" },
  { name: "FinEdge", tagline: "FinTech" },        { name: "BuildCraft", tagline: "Construction" },
  { name: "MediCare Plus", tagline: "Healthcare" },{ name: "AquaSports", tagline: "Sports Tech" },
  { name: "StyleHub", tagline: "Fashion Retail" }, { name: "CloudNine AI", tagline: "AI & ML" },
];

function LogoCard({ name, tagline }: { name: string; tagline: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 rounded-xl px-4 lg:px-6 py-3 lg:py-4 cursor-default group min-w-max">
      <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
        {name[0]}
      </div>
      <div>
        <div className="text-slate-800 font-bold text-xs lg:text-sm leading-none mb-0.5 group-hover:text-blue-700 transition-colors">{name}</div>
        <div className="text-slate-400 text-[10px] lg:text-[11px] font-medium">{tagline}</div>
      </div>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100 overflow-hidden" aria-label="Trusted clients and partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-10 text-center">
        <p className="text-slate-400 text-xs lg:text-sm font-semibold uppercase tracking-widest">Trusted By Growing Businesses Worldwide</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-3 lg:gap-4 marquee w-max">
          {[...clients, ...clients].map((client, i) => <LogoCard key={i} {...client} />)}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-10 flex flex-wrap items-center justify-center gap-4 lg:gap-8 text-xs lg:text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">★★★★★</div>
          <span className="font-semibold text-slate-700">4.9/5</span>
          <span>avg client rating</span>
        </div>
        <div className="w-px h-4 bg-slate-200 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="text-green-500 font-bold">✓</span>
          <span><strong className="text-slate-700">100%</strong> on-time delivery</span>
        </div>
        <div className="w-px h-4 bg-slate-200 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="text-blue-500 font-bold">↑</span>
          <span><strong className="text-slate-700">3x</strong> avg ROI by clients</span>
        </div>
      </div>
    </section>
  );
}
