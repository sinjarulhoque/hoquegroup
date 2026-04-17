"use client";

import { motion } from "motion/react";

export function BottomCta() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#B8960C] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-8 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)`
      }} />
      <div className="max-w-7xl mx-auto px-8 py-[72px] text-center relative z-10 flex flex-col items-center">
        <h2 className="text-[#0D2E3D] text-[36px] md:text-[44px] font-playfair font-bold mb-4">
          Have a Cargo or Logistics Requirement?
        </h2>
        <p className="text-[#0D2E3D] text-[17px] max-w-[660px] leading-[1.6]">
          Contact Hoque Logistics today — custom solutions, competitive pricing, and guaranteed on-time delivery across India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-[32px] justify-center">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#0D2E3D] text-white px-[36px] py-[15px] rounded-[6px] font-bold text-[15px] transition-all duration-300 hover:bg-[#09222E] hover:-translate-y-[2px]">
            Get a Custom Quote →
          </button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-[#0D2E3D] text-[#0D2E3D] px-[36px] py-[15px] rounded-[6px] font-medium text-[15px] transition-all duration-300 hover:bg-[#0D2E3D] hover:text-white">
            View All Services
          </button>
        </div>
      </div>
    </motion.section>
  );
}
