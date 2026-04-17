"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2017, label: "Year Founded", suffix: "" },
  { value: 400, label: "Export Shipments", suffix: "+" },
  { value: 5, label: "Export Products", suffix: "+" },
  { value: 2, label: "Countries Served", suffix: "+" },
  { value: 100, label: "Quality Guarantee", suffix: "%" }
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

export function StatsStrip() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="bg-[#0D2E3D] py-[30px] w-full"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 text-center lg:divide-x lg:divide-[#B8960C]/30 gap-y-4 lg:gap-y-0">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center py-4 lg:py-0 relative ${idx === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
              <div className="text-white text-[44px] font-bold leading-none mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#B8960C] text-[11px] uppercase tracking-[0.12em] font-medium mb-4 lg:mb-0">
                {stat.label}
              </div>
              {/* Mobile bottom border (visible only on mobile) */}
              {idx < 4 && (
                <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-[#B8960C]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
