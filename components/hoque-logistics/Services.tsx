"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Plane, Anchor, Zap, Building2, FileSignature, Truck } from "lucide-react";

const services = [
  {
    title: "Air Freight",
    badge: "Air Freight",
    badgeColor: "bg-[#B8960C]",
    icon: Plane,
    image: "https://picsum.photos/seed/air/800/600",
    desc: "Global air freight logistics with express, premium, and economy service tiers. Ideal for time-sensitive cargo requiring rapid delivery across international destinations.",
    bullets: [
      "Express air solutions for urgent cargo",
      "Premium service tier with priority handling",
      "Standard economy service for cost optimization",
      "Freight management end to end",
      "On-time guaranteed delivery",
      "Pick-up facility from your premises",
      "Full cargo insurance coverage",
      "Safety and security compliance",
      "Complete custom documentation",
      "Port and terminal management"
    ]
  },
  {
    title: "Ocean Freight",
    badge: "Ocean Freight",
    badgeColor: "bg-[#0D2E3D]",
    icon: Anchor,
    image: "https://picsum.photos/seed/ocean/800/600",
    desc: "Full container load and less than container load ocean freight services covering major international shipping routes — reliable, cost-effective, and fully documented.",
    bullets: [
      "Express solutions for urgent cargo",
      "Premium service tier with priority handling",
      "Standard economy service for cost optimization",
      "Freight management end to end",
      "On-time guaranteed delivery",
      "Pick-up facility from your premises",
      "Full cargo insurance coverage",
      "Safety and security compliance",
      "Complete custom documentation",
      "Port and terminal management"
    ]
  },
  {
    title: "Cargo Express",
    badge: "Cargo Express",
    badgeColor: "bg-[#B8960C]",
    icon: Zap,
    image: "https://picsum.photos/seed/express/800/600",
    desc: "High-speed cargo express services for domestic and short-haul international deliveries. Guaranteed next-day and 48-hour delivery options with full tracking.",
    bullets: [
      "Express solutions for urgent cargo",
      "Premium service tier with priority handling",
      "Standard economy service for cost optimization",
      "Freight management end to end",
      "On-time guaranteed delivery",
      "Pick-up facility from your premises",
      "Full cargo insurance coverage",
      "Safety and security compliance",
      "Complete custom documentation",
      "Port and terminal management"
    ]
  },
  {
    title: "Warehousing",
    badge: "Warehousing",
    badgeColor: "bg-[#0D2E3D]",
    icon: Building2,
    image: "https://picsum.photos/seed/warehousing/800/600",
    desc: "Strategically located warehousing facilities offering secure storage, inventory management, distribution support, and temperature-controlled logistics options.",
    bullets: [
      "Express solutions for urgent cargo",
      "Premium service tier with priority handling",
      "Standard economy service for cost optimization",
      "Freight management end to end",
      "On-time guaranteed delivery",
      "Pick-up facility from your premises",
      "Full cargo insurance coverage",
      "Safety and security compliance",
      "Complete custom documentation",
      "Port and terminal management"
    ]
  },
  {
    title: "Contract Logistics",
    badge: "Contract Logistics",
    badgeColor: "bg-[#B8960C]",
    icon: FileSignature,
    image: "https://picsum.photos/seed/contract/800/600",
    desc: "Long-term customized logistics contracts designed around your business needs — covering supply chain design, warehousing, transportation, and distribution management.",
    bullets: [
      "Express solutions for urgent cargo",
      "Premium service tier with priority handling",
      "Standard economy service for cost optimization",
      "Freight management end to end",
      "On-time guaranteed delivery",
      "Pick-up facility from your premises",
      "Full cargo insurance coverage",
      "Safety and security compliance",
      "Complete custom documentation",
      "Port and terminal management"
    ]
  },
  {
    title: "Ground Transport",
    badge: "Ground Transport",
    badgeColor: "bg-[#0D2E3D]",
    icon: Truck,
    image: "https://picsum.photos/seed/ground/800/600",
    desc: "Pan-India road transportation with a fleet of well-maintained vehicles. Covering all major highways and industrial corridors — from manufacturing unit to buyer doorstep.",
    bullets: [
      "Express solutions for urgent cargo",
      "Premium service tier with priority handling",
      "Standard economy service for cost optimization",
      "Freight management end to end",
      "On-time guaranteed delivery",
      "Pick-up facility from your premises",
      "Full cargo insurance coverage",
      "Safety and security compliance",
      "Complete custom documentation",
      "Port and terminal management"
    ]
  }
];

export function Services() {
  return (
    <section className="bg-white py-[100px] px-8 md:px-[80px] overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            WHAT WE DO
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[42px] font-playfair font-bold mb-4">
            Our Logistics and Transportation Services
          </h2>
          <p className="text-[#4B5563] text-[16px] max-w-[600px] mx-auto mb-6">
            From air freight to ground transport — end-to-end logistics solutions customized for your business needs.
          </p>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: idx * 0.1 }}
              className="group bg-white rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-400 hover:-translate-y-[8px] overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-[220px] overflow-hidden rounded-t-[14px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-[12px] font-bold text-white z-10 ${service.badgeColor}`}>
                  {service.badge}
                </div>
              </div>
              <div className="px-[22px] pb-[28px] flex flex-col flex-grow relative">
                <div className="w-[48px] h-[48px] rounded-full bg-white shadow-md border-[3px] border-[#B8960C] flex items-center justify-center shrink-0 -mt-[24px] mb-4 relative z-10 mx-auto">
                  <service.icon className="w-5 h-5 text-[#0D2E3D]" />
                </div>
                <h3 className="text-[#0D2E3D] font-bold text-[20px] font-playfair text-center mb-4">{service.title}</h3>
                <div className="w-[36px] h-[2px] bg-[#B8960C] mx-auto mb-4" />
                <p className="text-[#4B5563] text-[15px] leading-[1.7] mb-6 text-center">{service.desc}</p>
                <ul className="mb-8 space-y-2.5">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#4B5563] text-[14px]">
                      <span className="text-[#B8960C] font-bold shrink-0">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-center">
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="border-[1.5px] border-[#B8960C] text-[#B8960C] px-[22px] py-[10px] rounded-[6px] font-medium text-[14px] hover:bg-[#B8960C] hover:text-white transition-colors duration-300">
                    Get a Quote →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
