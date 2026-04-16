"use client";

import { motion } from "motion/react";

export function BottomCta() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#B8960C] py-[70px] px-8 md:px-[80px] text-center w-full"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#0D2E3D] text-[36px] md:text-[42px] font-playfair font-bold mb-4">
          Partner With India&apos;s Trusted Agricultural Export House
        </h2>
        <p className="text-[#0D2E3D] text-[17px] leading-[1.6] max-w-[600px] mx-auto mb-8">
          Contact Hoque Industries today for export pricing, product availability, and trade partnership opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#0D2E3D] text-white px-[36px] py-[15px] rounded-[6px] font-bold text-[15px] hover:bg-[#071a22] hover:-translate-y-[2px] transition-all duration-300">
            Get a Quote →
          </button>
          <button className="border-2 border-[#0D2E3D] text-[#0D2E3D] px-[36px] py-[15px] rounded-[6px] font-medium text-[15px] hover:bg-[#0D2E3D] hover:text-white transition-colors duration-300">
            Download Company Profile
          </button>
        </div>
      </div>
    </motion.section>
  );
}
