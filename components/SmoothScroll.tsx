"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (!isMobile) {
      const lenis = new Lenis({
        lerp: 0.08,
        duration: 1.2,
        easing: (t) => {
          // cubic-bezier(0.25, 0.46, 0.45, 0.94)
          const p1 = 0.25, p2 = 0.46, p3 = 0.45, p4 = 0.94;
          // simplified easing function for lenis or just use standard easeOutQuart
          return 1 - Math.pow(1 - t, 4); // Close enough for lenis easing
        },
        smoothWheel: true,
        orientation: "vertical",
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
}
