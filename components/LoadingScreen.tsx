"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center mesh-gradient transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated rings */}
      <div className="relative flex items-center justify-center mb-10">
        <div className="absolute w-36 h-36 border border-blue-500/30 rounded-full animate-ping" style={{ animationDuration: "1.5s" }} />
        <div className="absolute w-28 h-28 border border-cyan-400/40 rounded-full animate-ping" style={{ animationDuration: "1.5s", animationDelay: "0.3s" }} />
        <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-2">
          <Image src="/nlogo.webp" alt="Apexify" width={80} height={60} className="w-full h-auto object-contain" priority />
        </div>
      </div>

      <p className="text-white/50 text-sm mt-2 tracking-widest uppercase">Transforming Ideas Into Digital Success</p>

      <div className="mt-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full loading-bar" />
      </div>
    </div>
  );
}
