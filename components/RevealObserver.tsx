"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
        if (!el.classList.contains("in-view")) {
          io.observe(el);
        }
      });
    };

    // Initial observe
    observeAll();

    // Re-observe when new elements appear in DOM (for dynamic content)
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
