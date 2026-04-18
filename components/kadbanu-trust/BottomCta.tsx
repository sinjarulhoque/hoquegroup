"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function BottomCta() {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#B8960C] py-[72px] px-8 md:px-[80px] relative overflow-hidden"
    >
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[#0D2E3D] text-[36px] md:text-[44px] font-playfair font-bold leading-[1.15] mb-5">
          Together We Can Reach Every Village in Murshidabad
        </h2>
        
        <p className="text-[#0D2E3D] text-[17px] leading-[1.6] opacity-90 max-w-2xl mx-auto mb-8 font-medium">
          Your support — in any form — makes an immediate and lasting difference in the lives of rural families in West Bengal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#0D2E3D] text-white px-[36px] py-[15px] rounded-[6px] font-bold text-[15px] hover:bg-[#071921] hover:-translate-y-[2px] transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl">
            Support Our Mission →
          </button>
          
          <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-[#0D2E3D] text-[#0D2E3D] px-[36px] py-[15px] rounded-[6px] font-bold text-[15px] hover:bg-[#0D2E3D] hover:text-white transition-all duration-300 w-full sm:w-auto text-center">
            View Our Work
          </button>
        </div>
      </div>
    </motion.section>
  );
}
