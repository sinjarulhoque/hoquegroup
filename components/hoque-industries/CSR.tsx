"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GraduationCap, HeartPulse, Snowflake, Megaphone } from "lucide-react";

const csrInitiatives = [
  {
    icon: GraduationCap,
    title: "Educational Support",
    desc: "Scholarships and educational materials for students from poor families in Murshidabad."
  },
  {
    icon: HeartPulse,
    title: "Free Medical Camps",
    desc: "Regular health checkup camps by qualified doctors with free medicines for patients who cannot afford treatment."
  },
  {
    icon: Snowflake,
    title: "Winter Relief Program",
    desc: "Annual blanket distribution before winter to protect poor villagers from extreme cold."
  },
  {
    icon: Megaphone,
    title: "Community Awareness",
    desc: "Awareness programs educating rural communities about healthcare, government schemes, and social welfare."
  }
];

export function CSR() {
  return (
    <section className="bg-[#F3F4F6] py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column (50%) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="lg:pr-[60px]"
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            SOCIAL RESPONSIBILITY
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[38px] font-playfair font-bold mb-4">
            Kadbanu Charitable Trust
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mb-6" />
          
          <p className="text-[#4B5563] text-[16px] leading-[1.78] mb-10">
            The philosophy of Hoque Industries extends beyond business growth. Our journey is made possible by the progressive engagement of Kadbanu Charitable Trust in social development. The trust was formed by Md. Enamul Haque to bridge the gap in medical and educational services for poor and unreached rural communities in Murshidabad, West Bengal.
          </p>

          <div className="space-y-6 mb-10">
            {csrInitiatives.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">{item.title}</h4>
                  <p className="text-[#4B5563] text-[14px] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/kadbanu-trust" className="inline-block border-2 border-[#B8960C] text-[#B8960C] px-[28px] py-[12px] rounded-[6px] font-bold text-[15px] hover:bg-[#B8960C] hover:text-white transition-colors duration-300">
            Learn More About CSR →
          </a>
        </motion.div>

        {/* Right Column (50%) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="relative mt-10 lg:mt-0"
        >
          <div className="relative w-full h-[260px] rounded-[14px] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/school2/800/600"
              alt="Rural children in classroom Bengal"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-[65%] h-[200px] rounded-[10px] overflow-hidden ml-auto -mt-[40px] z-10 shadow-xl border-4 border-white">
            <Image
              src="https://picsum.photos/seed/hospital/800/600"
              alt="Medical camp doctor with rural patient"
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
