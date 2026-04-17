"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, Award, Leaf, Globe } from "lucide-react";

export function About() {
  return (
    <section className="bg-white py-[100px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Column (55%) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            ABOUT HOQUE INDUSTRIES
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[44px] font-playfair font-bold leading-[1.2]">
            India&apos;s Fastest Growing Agricultural Export Company
          </h2>
          <div className="w-[52px] h-[3px] bg-[#B8960C] my-[20px]" />
          
          <div className="space-y-6 mb-10">
            <p className="text-[#4B5563] text-[16px] leading-[1.78]">
              Hoque Industries Private Limited is incorporated under the Indian Companies Act 2013 and headquartered at 27 Bentinck Street, MK Point, Kolkata-700001, West Bengal, India. We specialize in the export of premium agricultural and allied products — Rice, Red Onion, Fresh Fruits, Mustard De-oiled Cake, and Rape-seed De-oiled Cake — primarily to Bangladesh, maintaining the highest standards of quality and delivery.
            </p>
            <p className="text-[#4B5563] text-[16px] leading-[1.78]">
              Since our inception in June 2017, we have grown into one of India&apos;s most recognized export houses. Our achievements have been acknowledged by local and overseas government organizations, and we are proud members of APEDA under the Ministry of Commerce and Industry, Government of India, and the Bengal National Chamber of Commerce and Industry (BNCCI).
            </p>
            <p className="text-[#4B5563] text-[16px] leading-[1.78]">
              We are actively developing joint ventures in Central Asian and Afro-Asian countries — expanding beyond food products into metals, minerals, and chemicals — building strong international trade protocol relations with government support from partner countries.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">We Are Trusted</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Government recognized Star Export House.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Star Export House</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Recognized by DGFT, Govt. of India.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">APEDA Member</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Ministry of Commerce and Industry, Govt. of India.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">BNCCI Member</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Bengal National Chamber of Commerce and Industry.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (45%) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-5 relative mt-10 lg:mt-0"
        >
          <div className="relative w-full h-[320px] rounded-[14px] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/farm/800/600"
              alt="Aerial agricultural farmland with harvested rice fields"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-[65%] h-[240px] rounded-[10px] overflow-hidden ml-auto -mt-[50px] z-10 shadow-[0_12px_40px_rgba(0,0,0,0.18)] border-4 border-white">
            <Image
              src="https://picsum.photos/seed/rice/800/600"
              alt="Close-up of rice grains"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
