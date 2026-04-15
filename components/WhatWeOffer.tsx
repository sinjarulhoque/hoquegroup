"use client";

import { motion } from "motion/react";
import { Tractor, Factory, Truck, Package, Mountain, Leaf } from "lucide-react";

const offerings = [
  {
    icon: Tractor,
    title: "Agricultural Export",
    description: "Supplying premium quality produce to international markets with zero-defect quality control."
  },
  {
    icon: Factory,
    title: "In-House Rice Mill",
    description: "Our state-of-the-art milling facilities ensure the finest grains reach your table."
  },
  {
    icon: Truck,
    title: "Domestic Logistics",
    description: "Comprehensive fleet management and last-mile delivery solutions across India."
  },
  {
    icon: Package,
    title: "De-oiled Cake Supply",
    description: "High-protein animal feed ingredients sourced and processed for maximum nutritional value."
  },
  {
    icon: Mountain,
    title: "Stone Chips & Boulders",
    description: "Premium construction grade materials for large scale infrastructure projects."
  },
  {
    icon: Leaf,
    title: "Steam Coal Import",
    description: "Facilitating energy security through strategic global coal sourcing and distribution."
  }
];

export function WhatWeOffer() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-8 overflow-hidden">
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="inline-block text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4"
        >
          Our Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1], delay: 0.1 }}
          className="text-primary font-headline text-4xl md:text-5xl font-bold"
        >
          What We Offer
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.12 }}
            className="relative bg-white p-8 rounded-lg group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-[#ffc107] before:transition-all before:duration-300 hover:before:w-1 overflow-hidden"
          >
            <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <offer.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">
              {offer.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {offer.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
