"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen, HeartPulse, Snowflake, Megaphone } from "lucide-react";

export function CSR() {
  return (
    <section className="bg-[#F3F4F6] py-[80px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
        
        {/* Left Column (55%) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full lg:w-[55%]"
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            SOCIAL RESPONSIBILITY
          </span>
          <h2 className="text-[#0D2E3D] text-[38px] font-playfair font-bold mb-4">
            Kadbanu Charitable Trust
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mb-6" />
          
          <p className="text-[#4B5563] text-[16px] leading-[1.78] mb-10">
            Hoque Logistics, as a proud member of Hoque Group of Industries, actively participates in social development through the Kadbanu Charitable Trust — serving poor and unreached rural communities across Murshidabad, West Bengal with primary health and education services.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Educational Support</h4>
                <p className="text-[#4B5563] text-[14px]">Scholarships and study materials for students from economically weak families in rural Murshidabad.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Free Medical Camps</h4>
                <p className="text-[#4B5563] text-[14px]">Regular checkup camps by qualified doctors with free prescribed medicines for patients unable to afford treatment.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <Snowflake className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Winter Relief</h4>
                <p className="text-[#4B5563] text-[14px]">Annual blanket distribution protecting vulnerable villagers from extreme winter cold each year.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <Megaphone className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Awareness Programs</h4>
                <p className="text-[#4B5563] text-[14px]">Community campaigns educating rural families about healthcare, government welfare schemes, and social rights.</p>
              </div>
            </div>
          </div>

          <a href="/kadbanu-trust" className="inline-block border-[1.5px] border-[#B8960C] text-[#B8960C] px-[28px] py-[12px] rounded-[6px] font-medium text-[15px] hover:bg-[#B8960C] hover:text-white transition-colors">
            Learn More About Our CSR →
          </a>
        </motion.div>

        {/* Right Column (45%) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="w-full lg:w-[45%] relative mt-[40px] lg:mt-0"
        >
          <div className="relative w-full h-[250px] rounded-[14px] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/school/800/600"
              alt="Rural school children studying in outdoor classroom"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-[65%] h-[190px] rounded-[10px] overflow-hidden ml-auto -mt-[40px] z-10 shadow-[0_12px_30px_rgba(0,0,0,0.15)] border-4 border-[#F3F4F6]">
            <Image
              src="https://picsum.photos/seed/hospital/800/600"
              alt="Doctor examining patient at rural camp"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
