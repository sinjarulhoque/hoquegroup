"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BookOpen, HeartPulse, Snowflake, Megaphone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-[#FFF8E7] py-[100px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Column */}
        <motion.div 
          className="w-full md:w-[55%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            ABOUT US
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[44px] font-playfair font-bold leading-[1.2] mb-5">
            Kadbanu Charitable Trust — Serving Those Who Are Left Behind
          </h2>
          
          <div className="w-[52px] h-[3px] bg-[#B8960C] mb-8" />
          
          <div className="text-[#4B5563] text-[16px] leading-[1.78] space-y-6 mb-10">
            <p>
              Kadbanu Charitable Trust is a trust formed and registered under the Trust Act, established to cater services to poor and unreached rural people of Bengal. Headed by great social activist Md. Enamul Haque himself, the trust was born from a deep commitment to bridge the widening gap between the needs of rural communities and the services available to them.
            </p>
            <p>
              The trust provides educational materials to students from poor families, medical treatment and allied health services, and blankets to needy village people of rural Bengal. The trust also participates in different social activities and raises awareness amongst the poor for their benefit — reaching those whom government services have failed to reach.
            </p>
            <p>
              The Kadbanu Charitable Trust was formed by Md. Enamul Haque specifically to minimize the gap in medical and educational services for poor and unreached rural communities across Murshidabad — one of West Bengal&apos;s most underserved districts, despite being home to a large number of talented and deserving students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div className="flex gap-4">
              <div className="w-[44px] h-[44px] flex-shrink-0 bg-white border border-[#B8960C]/30 rounded-full flex items-center justify-center shadow-sm">
                <BookOpen className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px]">Education Services</h4>
                <p className="text-gray-500 text-[13px] mt-1">Scholarships and materials for poor students.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-[44px] h-[44px] flex-shrink-0 bg-white border border-[#B8960C]/30 rounded-full flex items-center justify-center shadow-sm">
                <HeartPulse className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px]">Free Medical Care</h4>
                <p className="text-gray-500 text-[13px] mt-1">Camps, medicines, surgery facilitation.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[44px] h-[44px] flex-shrink-0 bg-white border border-[#B8960C]/30 rounded-full flex items-center justify-center shadow-sm">
                <Snowflake className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px]">Winter Protection</h4>
                <p className="text-gray-500 text-[13px] mt-1">Annual blanket distribution to protect the elderly.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[44px] h-[44px] flex-shrink-0 bg-white border border-[#B8960C]/30 rounded-full flex items-center justify-center shadow-sm">
                <Megaphone className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px]">Awareness Programs</h4>
                <p className="text-gray-500 text-[13px] mt-1">Community health and rights awareness drives.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Stacked Images) */}
        <motion.div 
          className="w-full md:w-[45%] relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative w-full h-[310px] rounded-[14px] overflow-hidden">
            <Image
              src="https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/about.jpg"
              alt="Kadbanu Trust social work"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-[65%] h-[240px] rounded-[10px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] border-4 border-white float-right -mt-[50px] z-10">
            <Image
              src="https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/our-vission.jpg"
              alt="Helping rural communities"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Clearfix for the float */}
          <div className="clear-both" />
        </motion.div>

      </div>
    </section>
  );
}
