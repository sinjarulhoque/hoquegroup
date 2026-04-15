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
    <section id="services" className="py-24 max-w-7xl mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Our Expertise</span>
        <h2 className="text-primary font-headline text-4xl md:text-5xl font-bold mt-4">What We Offer</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface-container-low p-8 rounded-lg group hover:bg-primary transition-all duration-500 cursor-pointer"
          >
            <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary transition-colors duration-500">
              <offer.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-white mb-4 transition-colors duration-500">
              {offer.title}
            </h3>
            <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed transition-colors duration-500">
              {offer.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
