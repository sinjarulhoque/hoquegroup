"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[650px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://picsum.photos/seed/port/1920/1080"
        alt="Cargo shipping port"
        fill
        className="object-cover"
        priority
        referrerPolicy="no-referrer"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E3D] via-[#0D2E3D]/80 to-transparent opacity-80" />

      {/* Breadcrumb */}
      <div className="absolute top-[100px] md:top-[120px] left-8 md:left-[80px] z-20 text-[13px] text-gray-300 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="hover:text-white transition-colors cursor-pointer">Group Companies</span>
        <span>/</span>
        <span className="text-[#B8960C]">Hoque Mercantile</span>
      </div>

      {/* Content */}
      <div className="relative w-full h-full px-8 md:px-[80px] max-w-[680px] z-10 pt-[160px] md:pt-[190px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-[0.15em] font-bold block mb-4">
            HOQUE GROUP OF INDUSTRIES
          </span>
          <h1 className="text-white text-[38px] md:text-[58px] font-playfair font-bold leading-[1.15] mb-6">
            Hoque Mercantile<br />Private Limited
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="text-white text-[17px] font-inter font-normal leading-[1.6] max-w-[520px] mb-8"
        >
          A fast-growing Indian export company specializing in agricultural commodities, stone chips, and readymade garments — exporting quality products to Bangladesh, UAE, and beyond since 2015.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#B8960C] text-white px-[32px] py-[14px] rounded-[6px] font-medium text-[15px] hover:bg-[#9a7d0a] transition-colors">
            Enquire Now →
          </button>
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-white text-white px-[32px] py-[14px] rounded-[6px] font-medium text-[15px] hover:bg-white hover:text-[#0D2E3D] transition-colors">
            View Products
          </button>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hidden sm:flex absolute bottom-10 right-10 bg-white rounded-[10px] p-[20px] px-[24px] shadow-xl z-20 items-center gap-6"
      >
        <div className="flex items-center gap-3 border-r border-gray-200 pr-6">
          <Star className="w-6 h-6 text-[#B8960C] fill-[#B8960C]" />
          <span className="text-[#0D2E3D] font-bold text-[15px]">Star Export House</span>
        </div>
        <div className="flex items-center gap-3">
          <Leaf className="w-6 h-6 text-green-600" />
          <span className="text-gray-500 font-medium text-[14px]">APEDA Member</span>
        </div>
      </motion.div>
    </section>
  );
}
