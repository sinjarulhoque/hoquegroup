"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function HowItWorks() {
  return (
    <section className="bg-[#0D2E3D] py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-[56px]">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR PROCESS
          </span>
          <h2 className="text-white text-[36px] md:text-[42px] font-playfair font-bold mb-4">
            How Hoque Logistics Works
          </h2>
          <p className="text-gray-300 text-[16px] max-w-[560px] mx-auto">
            A transparent, step-by-step process designed to deliver your cargo on time — every time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0">
          
          {/* Left Column (50%) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[400px] lg:h-auto min-h-[500px] rounded-[14px] overflow-hidden"
          >
            <Image
              src="https://picsum.photos/seed/dispatch/800/1000"
              alt="Logistics operations center dispatch hub"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Column (50%) */}
          <div className="w-full lg:w-1/2 lg:pl-[48px] flex flex-col justify-center">
            <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[23px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent hidden pb-1"></div>
            
            <div className="flex flex-col gap-6 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[24px] top-[40px] bottom-[40px] w-[2px] bg-white/10 hidden sm:block z-0" />
              
              {[
                {
                  step: "01",
                  title: "Customer Places Enquiry",
                  desc: "Submit your logistics requirement via our enquiry form or contact us directly — include cargo type, weight, origin, and destination."
                },
                {
                  step: "02",
                  title: "Requirement Assessment",
                  desc: "Our logistics team reviews your cargo specifications, route options, and timeline — and prepares a customized solution with transparent pricing."
                },
                {
                  step: "03",
                  title: "Order Confirmation and Pickup",
                  desc: "On confirmation, our team schedules cargo pickup directly from your premises or manufacturing unit as per the agreed date and time."
                },
                {
                  step: "04",
                  title: "In-Transit Monitoring",
                  desc: "Real-time tracking of your consignment with proactive updates at key checkpoints — from origin dispatch to destination delivery."
                },
                {
                  step: "05",
                  title: "Delivery and Documentation",
                  desc: "On-time delivery with complete handover documentation, proof of delivery, customs clearance records, and insurance certificates."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                  className={`relative z-10 flex flex-col sm:flex-row gap-6 p-6 rounded-[12px] group ${idx === 2 ? 'bg-[#081E28] border-l-[3px] border-[#B8960C]' : 'border-l-[3px] border-transparent hover:bg-[#081E28]/50 transition-colors'}`}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: idx * 0.15 + 0.1, type: "spring", stiffness: 300 }}
                    className="w-[48px] h-[48px] rounded-full bg-[#B8960C] text-[#0D2E3D] flex items-center justify-center font-bold text-[18px] shrink-0"
                  >
                    {item.step}
                  </motion.div>
                  <div className="pt-2">
                    <h3 className={`font-bold text-[18px] mb-2 ${idx === 2 ? 'text-[#B8960C]' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-[14px] line-height-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
