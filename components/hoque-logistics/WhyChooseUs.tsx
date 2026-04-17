"use client";

import { motion } from "motion/react";
import { Truck, Shield, Star, Map, PhoneCall } from "lucide-react";

export function WhyChooseUs() {
  const cards = [
    {
      icon: Truck,
      title: "We Are Trusted",
      desc: "A flawless record since September 2018 — no failed delivery, no client complaint."
    },
    {
      icon: Shield,
      title: "Safety and Security",
      desc: "Full insurance coverage, secure packaging standards, and monitored cargo movement."
    },
    {
      icon: Star,
      title: "100% Satisfaction",
      desc: "Every consignment handled with the care and precision expected by our clients."
    },
    {
      icon: Map,
      title: "Quick Location Tracking",
      desc: "Live cargo tracking and on-demand location updates for all active shipments."
    },
    {
      icon: PhoneCall,
      title: "Customer Support",
      desc: "Dedicated support available Monday through Saturday across all business hours."
    }
  ];

  return (
    <section className="bg-[#F3F4F6] py-[80px] px-8 md:px-[40px] lg:px-[80px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR ADVANTAGE
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[42px] font-playfair font-bold mb-4">
            Why Choose Hoque Logistics?
          </h2>
          <p className="text-[#4B5563] text-[16px] max-w-[560px] mx-auto">
            Five pillars of trust that make us the preferred logistics partner for businesses across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              className="bg-white rounded-[12px] p-[28px_20px] text-center shadow-sm border-t-[3px] border-[#B8960C] transition-all duration-350 hover:-translate-y-[7px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] group hover:shadow-[inset_0_3px_0_0_#B8960C]"
            >
              <div className="w-[52px] h-[52px] mx-auto mb-5 rounded-full bg-[#B8960C]/10 flex items-center justify-center">
                <card.icon className="w-6 h-6 text-[#B8960C]" />
              </div>
              <h3 className="text-[#0D2E3D] font-bold text-[17px] mb-3">{card.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
