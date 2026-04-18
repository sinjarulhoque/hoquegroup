"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Check } from "lucide-react";

export function FeaturedInitiative() {
  return (
    <section className="bg-[#0D2E3D] py-[90px] px-8 md:px-[80px] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left (Image) */}
        <motion.div 
          className="w-full md:w-[50%] h-[500px] relative rounded-[14px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Image
            src="https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-1.jpg"
            alt="Kulgachi Medical Health Centre"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Right (Content) */}
        <motion.div 
          className="w-full md:w-[50%] md:pl-[60px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            FEATURED INITIATIVE
          </span>
          <h2 className="text-white text-[32px] md:text-[38px] font-playfair font-bold leading-tight mb-5">
            Kulgachi Medical Health Centre, Murshidabad
          </h2>
          
          <div className="w-[48px] h-[3px] bg-[#B8960C] mb-8" />
          
          <div className="text-gray-300 text-[16px] leading-[1.78] space-y-6 mb-8">
            <p>
              The Trust has initiated a dedicated medical health service centre at Kulgachi, Murshidabad — designed to provide better and more consistent healthcare services to the surrounding villages. This centre serves as a permanent healthcare touchpoint for communities that previously had no reliable medical access.
            </p>
            <p>
              The centre provides regular consultations, prescribed medicines, referral services for surgery and operations, and participates in seasonal health awareness drives. It is staffed and operated with the full support of qualified medical professionals committed to rural healthcare.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex gap-4 items-start">
              <Check className="w-5 h-5 text-[#B8960C] mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-[15px]">Permanent Healthcare Facility</h4>
                <p className="text-gray-400 text-[14px] mt-1">Operating year-round at Kulgachi, Murshidabad for surrounding village communities.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Check className="w-5 h-5 text-[#B8960C] mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-[15px]">Free Consultation and Medicines</h4>
                <p className="text-gray-400 text-[14px] mt-1">No patient is turned away due to inability to pay — consultations and medicines provided free.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Check className="w-5 h-5 text-[#B8960C] mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-[15px]">Surgery Facilitation</h4>
                <p className="text-gray-400 text-[14px] mt-1">The centre helps facilitate surgery and operations for patients requiring advanced medical intervention.</p>
              </div>
            </div>
          </div>

          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#B8960C] text-white px-[28px] py-[14px] rounded-[6px] font-bold text-[15px] hover:bg-[#9A7B0A] hover:-translate-y-[2px] transition-all duration-300">
            Learn About the Centre →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
