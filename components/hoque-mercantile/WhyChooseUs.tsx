"use client";

import { motion } from "motion/react";
import { ShieldCheck, Star, Wheat, Truck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Quality Guarantee",
    desc: "Every shipment undergoes strict quality checks before dispatch. We stand behind every product we export."
  },
  {
    icon: Star,
    title: "Star Export House",
    desc: "Recognized by the Government of India — DGFT certified Star Export House since 2017."
  },
  {
    icon: Wheat,
    title: "In-House Manufacturing",
    desc: "Own modern Rice Mill at Murshidabad ensures complete supply chain control from production to export."
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    desc: "Reliable shipment scheduling with complete port documentation, custom clearance, and logistics support."
  }
];

export function WhyChooseUs() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0D2E3D] py-[90px] px-8 md:px-[80px] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR ADVANTAGE
          </span>
          <h2 className="text-white text-[36px] md:text-[40px] font-playfair font-bold mb-4">
            Why Choose Hoque Mercantile?
          </h2>
          <p className="text-gray-300 text-[16px] max-w-[560px] mx-auto">
            The competitive edge that sets us apart in the global market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#0D2E3D] rounded-[10px] p-[32px_24px] border-t-[3px] border-[#B8960C] shadow-lg hover:shadow-[inset_0_0_0_1px_#B8960C] transition-shadow duration-300 group"
            >
              <feature.icon className="w-[48px] h-[48px] text-[#B8960C] mb-6" strokeWidth={1.5} />
              <h3 className="text-white font-bold text-[18px] mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-[14px] leading-[1.6]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
