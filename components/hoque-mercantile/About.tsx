"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Shield, Star, Leaf, Factory } from "lucide-react";

export function About() {
  return (
    <section className="bg-white py-[100px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full lg:w-[55%]"
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            ABOUT US
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[44px] font-playfair font-bold leading-[1.2]">
            India&apos;s Trusted Agricultural Export Partner
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] my-[20px]" />
          
          <p className="text-[#4B5563] text-[16px] leading-[1.75] mb-6">
            Hoque Mercantile Private Limited is a private limited company incorporated under the Indian Companies Act 2013, headquartered at 27 Bentinck Street, MK Point, Room No. 601, 6th Floor, Kolkata-700001, West Bengal, India. We export agricultural and allied products including Rice, Red Onion, Fresh Fruits, Mustard De-oiled Cake, Rape-seed De-oiled Cake, and Indian Spices. We also export Stone Chips and Readymade Garments to overseas customers primarily in Bangladesh and the United Arab Emirates (UAE).
          </p>
          <p className="text-[#4B5563] text-[16px] leading-[1.75] mb-10">
            We are proud to own one of the most modern Rice Mills in India, located in the Murshidabad District of West Bengal. Equipped with the latest technology and machinery, our in-house production facility ensures consistent quality and supply reliability — making us both manufacturer and exporter.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-[#B8960C] shrink-0" />
              <div>
                <div className="text-[#0D2E3D] font-bold text-[16px]">We Are Trusted</div>
                <div className="text-gray-500 text-[13px] mt-1">Recognized by Govt. of India</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Star className="w-8 h-8 text-[#B8960C] shrink-0 fill-[#B8960C]" />
              <div>
                <div className="text-[#0D2E3D] font-bold text-[16px]">Star Export House</div>
                <div className="text-gray-500 text-[13px] mt-1">Awarded by DGFT</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Leaf className="w-8 h-8 text-[#B8960C] shrink-0" />
              <div>
                <div className="text-[#0D2E3D] font-bold text-[16px]">APEDA Member</div>
                <div className="text-gray-500 text-[13px] mt-1">Ministry of Commerce & Industry</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Factory className="w-8 h-8 text-[#B8960C] shrink-0" />
              <div>
                <div className="text-[#0D2E3D] font-bold text-[16px]">In-House Rice Mill</div>
                <div className="text-gray-500 text-[13px] mt-1">Murshidabad, West Bengal</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full lg:w-[45%] relative mt-10 lg:mt-0"
        >
          <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
              alt="Modern rice mill interior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-[60%] aspect-[4/3] rounded-[10px] overflow-hidden shadow-2xl ml-auto -mt-[40px] z-10 border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Agricultural harvest"
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
