"use client";
import { useEffect, useState } from "react";
import ApexifyLogo from "@/components/ApexifyLogo";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1600);
    const t2 = setTimeout(() => setVisible(false), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[200] flex flex-col items-center justify-center mesh-gradient transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      {/* Rings */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute w-32 h-32 border border-blue-500/30 rounded-full animate-ping" style={{ animationDuration: "1.5s" }} />
        <div className="absolute w-24 h-24 border border-cyan-400/40 rounded-full animate-ping" style={{ animationDuration: "1.5s", animationDelay: "0.3s" }} />
        <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-3">
          <ApexifyLogo variant="light" className="w-full h-auto" />
        </div>
      </div>

      <ApexifyLogo variant="light" className="h-10 w-auto" />
      <p className="text-white/50 text-sm mt-3 tracking-widest uppercase">Transforming Ideas Into Digital Success</p>

      <div className="mt-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full loading-bar" />
      </div>
    </div>
  );
}
