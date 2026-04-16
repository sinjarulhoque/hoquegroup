"use client";

import { motion } from "motion/react";
import { Cpu, Users, Headset, Truck, Shield, Globe } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Advanced Technology",
    desc: "We leverage modern agricultural export technology — from quality testing equipment to digital documentation and logistics management systems."
  },
  {
    icon: Users,
    title: "Expert Engineers and Staff",
    desc: "Our team of experienced professionals handles every aspect of the export process — from procurement and quality control to shipping and documentation."
  },
  {
    icon: Headset,
    title: "Dedicated Customer Support",
    desc: "Round-the-clock support for all export queries, order tracking, custom documentation, and post-shipment assistance."
  },
  {
    icon: Truck,
    title: "On-Time Delivery Guarantee",
    desc: "Strict shipment scheduling with port management, custom clearance, and logistics coordination ensures delivery on committed dates."
  },
  {
    icon: Shield,
    title: "Safety and Security",
    desc: "Full export insurance, secure packaging, and compliance with international trade protocols protect every shipment end to end."
  },
  {
    icon: Globe,
    title: "Global Trade Expansion",
    desc: "Actively developing joint ventures in Central Asian and Afro-Asian markets — expanding into metals, minerals, and chemicals beyond food products."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#F3F4F6] py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            WHAT WE OFFER
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[42px] font-playfair font-bold mb-4">
            Our Core Capabilities
          </h2>
          <p className="text-[#4B5563] text-[16px] max-w-[560px] mx-auto mb-6">
            From precision agricultural exports to advanced technology-driven operations — built to deliver excellence every time.
          </p>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              className="group bg-white rounded-[12px] p-[32px] px-[28px] shadow-[0_4px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-350 hover:-translate-y-[7px] flex flex-col border-l-[0px] hover:border-l-[4px] border-[#B8960C]"
            >
              <div className="w-[52px] h-[52px] rounded-full bg-[#B8960C]/10 flex items-center justify-center mb-6 shrink-0 transition-colors group-hover:bg-[#B8960C] group-hover:text-white">
                <service.icon className="w-6 h-6 text-[#B8960C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-[#0D2E3D] font-bold text-[18px] mb-3">{service.title}</h3>
              <p className="text-[#4B5563] text-[14px] leading-[1.6] mb-6 flex-grow">
                {service.desc}
              </p>
              <a href="#" className="text-[#B8960C] font-medium text-[14px] hover:underline mt-auto inline-flex items-center">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
