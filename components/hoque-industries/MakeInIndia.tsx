"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function MakeInIndia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="bg-white py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column (50%) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative w-full h-[500px] lg:h-[600px] rounded-[14px] overflow-hidden"
        >
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec"
              alt="Indian export cargo ship loaded with containers at Kolkata port"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        {/* Right Column (50%) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            BUSINESS HIGHLIGHTS
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[38px] font-playfair font-bold leading-[1.2] mb-4">
            Proud to Promote Make in India Products Globally
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mb-6" />
          
          <div className="space-y-6 mb-10">
            <p className="text-[#4B5563] text-[16px] leading-[1.75]">
              Export sales of Indian agricultural commodities not only link us to world markets but contribute significantly to the Indian economy. Hoque Industries, centered at our Kolkata Head Office, continues to champion Make in India products to overseas countries.
            </p>
            <p className="text-[#4B5563] text-[16px] leading-[1.75]">
              Since our inception in June 2017, we have never left any stone unturned in our path of development. Our achievements have been recognized by both local and overseas government organizations — making us a trusted partner for buyers across South Asia, the Middle East, and beyond.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-[#B8960C] font-bold text-[18px]">June 2017</div>
              <div className="text-[#0D2E3D] text-[14px] font-medium">Year of Inception</div>
            </div>
            <div>
              <div className="text-[#B8960C] font-bold text-[18px]">APEDA + BNCCI</div>
              <div className="text-[#0D2E3D] text-[14px] font-medium">Memberships Held</div>
            </div>
            <div>
              <div className="text-[#B8960C] font-bold text-[18px]">Bangladesh + UAE</div>
              <div className="text-[#0D2E3D] text-[14px] font-medium">Primary Export Markets</div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#B8960C] text-white px-5 py-2 rounded-full text-[14px] font-bold">
              Star Export House
            </div>
            <div className="border-2 border-[#0D2E3D] text-[#0D2E3D] px-5 py-2 rounded-full text-[14px] font-bold">
              Make in India Promoter
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
