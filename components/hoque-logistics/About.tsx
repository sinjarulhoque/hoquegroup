"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, Lock, ThumbsUp, MapPin, Headset, FileText } from "lucide-react";

export function About() {
  return (
    <section className="bg-white py-[80px] md:py-[100px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
        
        {/* Left Column (55%) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full lg:w-[55%]"
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            ABOUT HOQUE LOGISTICS
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[44px] font-playfair font-bold leading-[1.2]">
            India&apos;s Most Reliable Transportation and Logistics Partner
          </h2>
          <div className="w-[52px] h-[3px] bg-[#B8960C] my-[20px]" />
          
          <div className="space-y-6 mb-10">
            <p className="text-[#4B5563] text-[16px] leading-[1.78]">
              Hoque Logistics Private Limited is a registered private limited company formed in September 2018, operating as a major division of Hoque Group of Industries. As the in-house transportation arm, we are responsible for maintaining delivery schedules from product manufacturing units to destined buyers — precisely as per buyer requirements and contracted values. The company is supervised and monitored by strict vigilant management, maintaining professionalism and quality at every stage of transportation.
            </p>
            <p className="text-[#4B5563] text-[16px] leading-[1.78]">
              The company management has never failed nor been criticized in terms of business activities since inception. We believe in complete transparency and trust in all business relations — whether inside India or across international borders. We maintain diversification as a core strength, helping us move business smoothly and at scale. Today&apos;s world is more dependent on logistics than ever — and we deliver qualitative, quantitative road and freight transport that ensures easy access from dispatch point to end consumer.
            </p>
            <p className="text-[#4B5563] text-[16px] leading-[1.78]">
              Last but not the least — the insurance chapter. Hoque Group maintains comprehensive shipment insurance across all logistics operations, ensuring every consignment is protected from origin to destination.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">We Are Trusted</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Zero complaints since inception — a proven track record.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Safety and Security</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">End-to-end shipment safety protocols at every stage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">100% Satisfaction</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Client satisfaction is our primary operational KPI.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Quick Location Tracking</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Real-time cargo location visibility for all clients.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <Headset className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Customer Support</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Dedicated support team available across all working hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-[#B8960C]" />
              </div>
              <div>
                <h4 className="text-[#0D2E3D] font-bold text-[16px] mb-1">Full Documentation</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Custom documentation, port management, and compliance handled.</p>
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
          className="w-full lg:w-[45%] relative mt-10 lg:mt-0"
        >
          <div className="relative w-full h-[300px] rounded-[14px] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/dock/800/600"
              alt="Fleet of logistics trucks at loading dock"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-[65%] h-[220px] rounded-[10px] overflow-hidden ml-auto -mt-[50px] z-10 shadow-[0_12px_40px_rgba(0,0,0,0.18)] border-4 border-white">
            <Image
              src="https://picsum.photos/seed/warehouse/800/600"
              alt="Warehouse interior with forklift"
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
