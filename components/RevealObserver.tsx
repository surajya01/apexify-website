"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all .reveal elements
    const observe = () => {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
        observer.observe(el);
      });
    };

    // Run on mount and after a short delay (for dynamically rendered content)
    observe();
    const t = setTimeout(observe, 300);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return null;
}
