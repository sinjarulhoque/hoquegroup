"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix, prefix = "" }: { value: number, suffix: string, prefix?: string }) {
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
        
        // ease-out
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

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function QuickStats() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0D2E3D] py-[28px]"
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center divide-y md:divide-y-0 md:divide-x divide-[#B8960C]/30">
        <div className="flex flex-col items-center justify-center py-4 md:py-0">
          <div className="text-white text-[42px] font-bold leading-none mb-2">
            <Counter value={2015} suffix="" />
          </div>
          <div className="text-[#B8960C] text-[12px] uppercase tracking-wider font-medium">Year Established</div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-0">
          <div className="text-white text-[42px] font-bold leading-none mb-2">
            <Counter value={500} suffix="+" />
          </div>
          <div className="text-[#B8960C] text-[12px] uppercase tracking-wider font-medium">Shipments Completed</div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-0">
          <div className="text-white text-[42px] font-bold leading-none mb-2">
            <Counter value={20} suffix="+" />
          </div>
          <div className="text-[#B8960C] text-[12px] uppercase tracking-wider font-medium">Export Products</div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 md:py-0">
          <div className="text-white text-[42px] font-bold leading-none mb-2">
            <Counter value={2} suffix=" Countries" />
          </div>
          <div className="text-[#B8960C] text-[12px] uppercase tracking-wider font-medium">Primary Export Markets</div>
        </div>
      </div>
    </motion.section>
  );
}
