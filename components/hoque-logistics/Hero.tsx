"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Truck, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[520px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://picsum.photos/seed/truckfleet/1920/1080"
        alt="Aerial view of logistics fleet on road"
        fill
        className="object-cover object-[center_top]"
        priority
        referrerPolicy="no-referrer"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E3D]/84 to-[#0D2E3D]/30" />

      {/* Breadcrumb */}
      <div className="absolute top-[100px] md:top-[110px] left-8 md:left-20 z-20 text-[13px] text-gray-300 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="hover:text-white transition-colors cursor-pointer">Group Companies</span>
        <span>/</span>
        <span className="text-[#B8960C]">Hoque Logistics</span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-[80px] max-w-[660px] z-10 pt-[80px] md:pt-0">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#B8960C] text-[12px] uppercase tracking-[0.18em] font-bold block mb-4"
        >
          HOQUE GROUP OF INDUSTRIES — LOGISTICS DIVISION
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-white text-[38px] md:text-[60px] font-playfair font-bold leading-[1.12]"
        >
          Hoque Logistics<br />Private Limited
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="w-[56px] h-[3px] bg-[#B8960C] my-[18px]" 
        />

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="text-white text-[17px] font-inter font-normal leading-[1.65] max-w-[520px]"
        >
          India&apos;s trusted transportation and logistics partner — providing end-to-end supply chain solutions for businesses across domestic and international markets since September 2018. Fast. Reliable. Insured.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-[32px]"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#B8960C] text-white px-[34px] py-[14px] rounded-[6px] font-bold text-[15px] transition-all hover:bg-[#9A7B0A] hover:-translate-y-[2px] shadow-[0_8px_24px_rgba(184,150,12,0.4)]"
          >
            Get a Logistics Quote →
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-[34px] py-[14px] rounded-[6px] font-medium text-[15px] transition-all duration-300 hover:bg-white hover:text-[#0D2E3D]"
          >
            View Our Services
          </button>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.55, ease: [0.34, 1.2, 0.64, 1] }}
        className="hidden md:flex absolute bottom-[40px] right-[80px] bg-white rounded-[12px] p-[22px] px-[28px] shadow-[0_8px_36px_rgba(0,0,0,0.2)] z-20 flex-col gap-3 min-w-[280px]"
      >
        <div className="flex items-center gap-3">
          <Truck className="w-5 h-5 text-[#B8960C]" />
          <div>
            <div className="text-[#0D2E3D] font-bold text-[14px]">Pan-India Coverage</div>
            <div className="text-gray-500 text-[12px]">Transportation across all major routes</div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#B8960C]/20" />
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-[#B8960C]" />
          <div>
            <div className="text-[#0D2E3D] font-bold text-[14px]">Fully Insured Shipments</div>
            <div className="text-gray-500 text-[12px]">End-to-end insurance on every consignment</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
