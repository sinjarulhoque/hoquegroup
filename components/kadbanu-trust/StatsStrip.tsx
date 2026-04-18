"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function StatsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="w-full bg-[#0D2E3D] py-[32px] m-0"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-[80px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 divide-x divide-transparent md:divide-[#B8960C]/30 text-center">
          
          <div className="flex flex-col items-center">
            <div className="text-white font-bold text-[38px] lg:text-[44px] leading-tight flex items-center justify-center h-[56px] lg:h-[66px]">
              {isInView ? <Counter value={5} duration={1.8} /> : "0"}+
            </div>
            <div className="text-[#B8960C] uppercase text-[11px] font-bold tracking-[0.12em] mt-1 text-center">CSR Programs</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-white font-bold text-[38px] lg:text-[44px] leading-tight flex items-center justify-center h-[56px] lg:h-[66px]">
              {isInView ? <Counter value={1000} duration={1.8} /> : "0"}+
            </div>
            <div className="text-[#B8960C] uppercase text-[11px] font-bold tracking-[0.12em] mt-1 text-center">Families Served</div>
          </div>

          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <div className="text-white font-bold text-[24px] lg:text-[28px] xl:text-[32px] leading-tight flex items-center justify-center h-[56px] lg:h-[66px] whitespace-nowrap w-full">
              {isInView ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                  Murshidabad
                </motion.span>
              ) : null}
            </div>
            <div className="text-[#B8960C] uppercase text-[11px] font-bold tracking-[0.12em] mt-1 text-center">Primary Focus</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-white font-bold text-[24px] lg:text-[28px] xl:text-[32px] leading-tight flex items-center justify-center h-[56px] lg:h-[66px] whitespace-nowrap w-full">
              {isInView ? (
                 <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                  Annual
                </motion.span>
              ) : null}
            </div>
            <div className="text-[#B8960C] uppercase text-[11px] font-bold tracking-[0.12em] mt-1 text-center">Winter Relief</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-white font-bold text-[38px] lg:text-[44px] leading-tight flex items-center justify-center h-[56px] lg:h-[66px]">
              {isInView ? <Counter value={1} duration={1.8} /> : "0"}
            </div>
            <div className="text-[#B8960C] uppercase text-[11px] font-bold tracking-[0.12em] mt-1 text-center">Medical Centre</div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

function Counter({ value, duration }: { value: number, duration: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [value, duration]);

  return <>{count}</>;
}
