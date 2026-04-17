"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function PulsesSupply() {
  return (
    <section className="bg-[#F3F4F6] py-[80px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0 h-full">
        
        {/* Left Column (50%) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] rounded-[14px] overflow-hidden shadow-lg"
        >
          <Image
            src="https://picsum.photos/seed/pulses/800/1000"
            alt="Variety of Indian pulses in bowls"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Right Column (50%) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full lg:w-1/2 lg:pl-[60px] flex flex-col justify-center"
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            DOMESTIC SUPPLY
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] font-playfair font-bold mb-4 leading-[1.2]">
            Pulses — Domestic Sales and Distribution
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mb-6" />
          
          <p className="text-[#4B5563] text-[16px] leading-[1.75] mb-4">
            In addition to transportation and logistics services, Hoque Logistics Private Limited is actively involved in the domestic sale and distribution of pulses across West Bengal and Eastern India. We source high-quality pulses and distribute to retailers, wholesalers, and institutional buyers as part of our domestic supply expansion.
          </p>
          <p className="text-[#4B5563] text-[16px] leading-[1.75] mb-8">
            Our logistics infrastructure gives us a unique advantage in domestic pulses distribution — enabling cost-effective, on-time delivery from source to buyer across the region.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "High quality pulses sourced from trusted suppliers",
              "Pan-Bengal distribution network",
              "Bulk and retail supply available on order"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#B8960C] shrink-0 fill-[#B8960C]/10" />
                <span className="text-[#4B5563] text-[15px] pt-0.5">{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#B8960C] text-white px-[28px] py-[14px] rounded-[6px] font-medium text-[15px] transition-all hover:bg-[#9A7B0A] hover:-translate-y-[2px]">
              Place a Pulses Order →
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
