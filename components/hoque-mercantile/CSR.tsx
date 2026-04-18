"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BookOpen, Heart, Snowflake, Users } from "lucide-react";

export function CSR() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="bg-white py-[80px] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative h-[400px] lg:h-auto rounded-[12px] overflow-hidden"
        >
          <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
            <Image
              src="https://picsum.photos/seed/school/800/600"
              alt="Rural school children"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:pl-[40px] flex flex-col justify-center"
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            SOCIAL RESPONSIBILITY
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[36px] font-playfair font-bold mb-6">
            Kadbanu Charitable Trust
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mb-6" />
          
          <p className="text-[#4B5563] text-[16px] leading-[1.75] mb-10">
            The philosophy of Hoque Mercantile extends beyond business. Through the Kadbanu Charitable Trust, we actively serve the primary health and education needs of poor and unreached rural communities across Murshidabad, West Bengal.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-[#B8960C] shrink-0 mt-1" />
              <div>
                <div className="text-[#0D2E3D] font-bold text-[16px]">Educational Support</div>
                <div className="text-[#4B5563] text-[14px] mt-1">Scholarships and educational materials to students from poor families.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-[#B8960C] shrink-0 mt-1" />
              <div>
                <div className="text-[#0D2E3D] font-bold text-[16px]">Medical Health Camps</div>
                <div className="text-[#4B5563] text-[14px] mt-1">Regular health checkup camps with qualified doctors and free medicines.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Snowflake className="w-6 h-6 text-[#B8960C] shrink-0 mt-1" />
              <div>
                <div className="text-[#0D2E3D] font-bold text-[16px]">Winter Relief</div>
                <div className="text-[#4B5563] text-[14px] mt-1">Blanket distribution to protect poor villagers from extreme winter cold.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-[#B8960C] shrink-0 mt-1" />
              <div>
                <div className="text-[#0D2E3D] font-bold text-[16px]">Awareness Programs</div>
                <div className="text-[#4B5563] text-[14px] mt-1">Community health and social awareness programs in rural Bengal.</div>
              </div>
            </div>
          </div>

          <div>
            <a href="/kadbanu-trust" className="inline-block bg-[#B8960C] text-white px-[32px] py-[14px] rounded-[6px] font-medium text-[15px] hover:bg-[#9a7d0a] transition-colors">
              Learn More About Our CSR →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
