"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Global Clients" },
  { value: 24, suffix: "/7", label: "Support Cycle" },
  { value: 12, suffix: "+", label: "Countries Reached" },
  { value: 100, suffix: "%", label: "Trust Index" }
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1800; // 1.8s
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // ease-out decelerate
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsCounter() {
  return (
    <div className="bg-primary-container py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: idx * 0.12 }}
            className="relative"
          >
            {idx !== 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-secondary/30 -ml-6" />
            )}
            <div className="text-secondary text-5xl md:text-6xl font-headline font-bold mb-4">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-on-primary-container text-sm uppercase tracking-widest font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
