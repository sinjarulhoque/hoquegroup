"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[650px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://picsum.photos/seed/warehouse_hero/1920/1080"
        alt="Aerial view of Indian agricultural export warehouse with cargo containers"
        fill
        className="object-cover object-center"
        priority
        referrerPolicy="no-referrer"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E3D] via-[#0D2E3D]/80 to-transparent opacity-90" style={{ background: "linear-gradient(to right, rgba(13, 46, 61, 0.82) 0%, rgba(13, 46, 61, 0.35) 100%)" }} />

      {/* Breadcrumb */}
      <div className="absolute top-[100px] md:top-[120px] left-8 md:left-[80px] z-20 text-[13px] text-gray-300 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="hover:text-white transition-colors cursor-pointer">Group Companies</span>
        <span>/</span>
        <span className="text-[#B8960C]">Hoque Industries</span>
      </div>

      {/* Content */}
      <div className="relative w-full h-full px-8 md:px-[80px] max-w-[660px] z-10 pt-[160px] md:pt-[190px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-[0.18em] font-bold block mb-4">
            HOQUE GROUP OF INDUSTRIES — SINCE 2017
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white text-[38px] md:text-[58px] font-playfair font-bold leading-[1.15]"
        >
          Hoque Industries<br />Private Limited
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="w-[56px] h-[3px] bg-[#B8960C] my-[18px]" />
          <p className="text-white text-[17px] font-inter font-normal leading-[1.65] max-w-[520px]">
            One of India&apos;s fastest growing export companies — delivering premium agricultural products to Bangladesh and beyond. Proud recipients of the Star Export House recognition by the Government of India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-[32px]"
        >
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#B8960C] text-white px-[34px] py-[14px] rounded-[6px] font-bold text-[15px] hover:bg-[#9A7B0A] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(184,150,12,0.4)] transition-all duration-300">
            Enquire Now →
          </button>
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-white text-white px-[34px] py-[14px] rounded-[6px] font-medium text-[15px] hover:bg-white hover:text-[#0D2E3D] transition-colors duration-300">
            View Our Products
          </button>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
        className="hidden sm:flex absolute bottom-[40px] right-[80px] bg-white rounded-[12px] p-[20px] px-[26px] shadow-[0_8px_32px_rgba(0,0,0,0.18)] z-20 flex-col gap-3"
      >
        <div className="flex items-center gap-3">
          <Star className="w-5 h-5 text-[#B8960C] fill-[#B8960C]" />
          <div className="flex flex-col">
            <span className="text-[#0D2E3D] font-bold text-[14px]">Star Export House</span>
            <span className="text-gray-500 text-[12px]">Awarded by DGFT, Govt. of India</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#B8960C]/30" />
        <span className="text-[#0D2E3D] text-[11px] font-medium">APEDA Member · BNCCI Member · IEC Registered</span>
      </motion.div>
    </section>
  );
}
