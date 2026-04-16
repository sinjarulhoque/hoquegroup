"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Quote, ChevronRight } from "lucide-react";

export function DirectorsNote() {
  return (
    <section className="bg-[#F3F4F6] py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            LEADERSHIP
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[40px] font-playfair font-bold mb-6">
            Director&apos;s Note
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 pt-4">
          {/* Left Column - Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="w-full lg:w-[35%] bg-white rounded-[14px] p-[36px] shadow-lg text-center flex flex-col items-center"
          >
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden mb-6 relative">
              <Image
                src="https://ui-avatars.com/api/?name=Md+Enamul+Haque&size=140&background=0D2E3D&color=B8960C&bold=true"
                alt="Md. Enamul Haque"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-[#0D2E3D] font-bold text-[20px] mb-1">Md. Enamul Haque</h3>
            <div className="text-[#B8960C] text-[13px] uppercase font-medium mb-1">Chairman cum Managing Director</div>
            <div className="text-gray-500 italic text-[14px] mb-6">Hoque Group of Industries</div>
            
            <div className="w-[32px] h-[2px] bg-[#B8960C] mb-6" />
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="bg-[#B8960C]/10 text-[#B8960C] px-3 py-1 rounded-full text-[12px] font-medium border border-[#B8960C]/20">Star Export House</span>
              <span className="bg-[#0D2E3D]/10 text-[#0D2E3D] px-3 py-1 rounded-full text-[12px] font-medium border border-[#0D2E3D]/20">APEDA Member</span>
            </div>

            <ul className="text-left w-full space-y-3">
              {[
                "Hoque Mercantile Pvt Ltd",
                "Hoque Industries Pvt Ltd",
                "Hoque Logistics Pvt Ltd",
                "Toofan Steel Industries Pvt Ltd"
              ].map((company, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-[13px]">
                  <ChevronRight className="w-4 h-4 text-[#B8960C] shrink-0" />
                  <span>{company}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="w-full lg:w-[65%] relative pt-8"
          >
            <Quote className="absolute top-0 left-0 w-[80px] h-[80px] text-[#B8960C]/20 -z-10 -translate-x-4 -translate-y-4" />
            
            <p className="text-[#4B5563] text-[17px] italic leading-[1.85] mb-8 relative z-10">
              &quot;Md. Enamul Haque is an eminent founder businessman and dynamic entrepreneur involved in diversified business activities under Hoque Group of Industries — an elite class by itself in the Indian business category. He is well experienced and quite efficient and professional in managing multiple private limited companies as Chairman cum Managing Director.&quot;
            </p>
            
            <p className="text-[#4B5563] text-[16px] leading-[1.7] mb-10">
              &quot;Under his leadership, Hoque Mercantile has grown into one of India&apos;s fastest growing export companies. His vision is centered on earning maximum foreign exchange revenue for India while maintaining international reputation and serving the global community with quality products.&quot;
            </p>

            <button className="border-2 border-[#B8960C] text-[#B8960C] px-[32px] py-[14px] rounded-[6px] font-medium text-[15px] hover:bg-[#B8960C] hover:text-white transition-colors">
              Meet Our Team →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
