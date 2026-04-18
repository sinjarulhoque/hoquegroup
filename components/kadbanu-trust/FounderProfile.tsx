"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Quote } from "lucide-react";

export function FounderProfile() {
  return (
    <section className="bg-[#FFF8E7] py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR FOUNDER
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[40px] font-playfair font-bold mb-4">
            Led by a Committed Social Activist
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mt-4" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-[860px] mx-auto bg-white rounded-[16px] p-8 md:p-[48px] shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
        >
          <div className="flex flex-col md:flex-row gap-[48px] items-center md:items-start">
            
            {/* Left */}
            <div className="w-full md:w-[35%] flex flex-col items-center text-center">
              <div className="w-[160px] h-[160px] rounded-full border-[4px] border-[#B8960C] overflow-hidden relative mb-5">
                <Image
                  src="https://ui-avatars.com/api/?name=Md+Enamul+Haque&size=160&background=0D2E3D&color=B8960C&bold=true"
                  alt="Md. Enamul Haque profile"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-[#0D2E3D] font-bold text-[20px] mb-1">Md. Enamul Haque</h3>
              <p className="text-[#B8960C] text-[13px] uppercase font-bold tracking-wider mb-1">Founder and Head</p>
              <p className="text-gray-500 italic text-[14px] mb-5">Kadbanu Charitable Trust</p>
              
              <div className="w-[36px] h-[2px] bg-[#B8960C] mb-6" />
              
              <div className="flex flex-col gap-2 w-full max-w-[200px]">
                <span className="bg-[#0D2E3D] text-white text-[12px] py-1.5 px-3 rounded-full uppercase tracking-wider font-medium">Hoque Mercantile Pvt Ltd</span>
                <span className="bg-[#0D2E3D] text-white text-[12px] py-1.5 px-3 rounded-full uppercase tracking-wider font-medium">Hoque Industries Pvt Ltd</span>
                <span className="bg-[#0D2E3D] text-white text-[12px] py-1.5 px-3 rounded-full uppercase tracking-wider font-medium">Hoque Logistics Pvt Ltd</span>
                <span className="bg-[#B8960C] text-white text-[12px] py-1.5 px-3 rounded-full uppercase tracking-wider font-bold">Kadbanu Charitable Trust</span>
              </div>
            </div>

            {/* Right */}
            <div className="w-full md:w-[65%] relative pt-2">
              <Quote className="absolute -top-6 -left-6 w-[72px] h-[72px] text-[#B8960C]/15 rotate-180" />
              
              <div className="relative z-10 text-gray-700 space-y-5">
                <p className="text-[17px] italic font-playfair leading-[1.85] text-[#0D2E3D]">
                  Md. Enamul Haque is an eminent founder businessman and dynamic entrepreneur involved in diversified business activities under Hoque Group of Industries — an elite class by itself in the Indian business category. He is well experienced, efficient, and professional in managing different private limited companies as Chairman cum Managing Director of Hoque Group of Industries.
                </p>
                <p className="text-[16px] leading-[1.72] font-normal">
                  Beyond his business achievements, Md. Enamul Haque has dedicated himself to addressing the social inequalities in rural Murshidabad. He founded the Kadbanu Charitable Trust out of personal conviction — believing that sustainable development must reach every household, not just those who can afford it.
                </p>
                <p className="text-[16px] leading-[1.72] font-normal">
                  Under his leadership, the trust has grown into an active social organization providing consistent education support, medical care, winter relief, wedding assistance, and awareness programs to the communities that need it most.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
