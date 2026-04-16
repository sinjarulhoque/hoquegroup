"use client";

import { motion } from "motion/react";
import { ShieldCheck, Award, Settings, Clock } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Quality Guarantee",
    desc: "Every batch of agricultural products undergoes rigorous quality testing before dispatch. We never compromise on product standards."
  },
  {
    icon: Award,
    title: "Government Recognized",
    desc: "Star Export House awarded by DGFT — the highest export recognition by the Government of India. APEDA and BNCCI certified member."
  },
  {
    icon: Settings,
    title: "Advanced Technology Operations",
    desc: "Modern technology-driven export infrastructure — from digital documentation to precision quality testing and logistics systems."
  },
  {
    icon: Clock,
    title: "On-Time Delivery Every Time",
    desc: "Strict delivery schedules with full port management, custom documentation, and logistics coordination from dispatch to destination."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#0D2E3D] py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR ADVANTAGE
          </span>
          <h2 className="text-white text-[36px] md:text-[42px] font-playfair font-bold mb-4">
            Why Choose Hoque Industries?
          </h2>
          <p className="text-gray-300 text-[16px] max-w-[560px] mx-auto mb-6">
            The pillars of trust, technology, and excellence that define every shipment we dispatch.
          </p>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#0D2E3D] border-t-[3px] border-[#B8960C] rounded-[12px] p-[34px] px-[26px] hover:shadow-[inset_0_0_0_1.5px_#B8960C] transition-all duration-300 flex flex-col"
            >
              <reason.icon className="w-[52px] h-[52px] text-[#B8960C] mb-6" />
              <h3 className="text-white font-bold text-[18px] mb-3">{reason.title}</h3>
              <p className="text-gray-300 text-[14px] leading-[1.6]">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
