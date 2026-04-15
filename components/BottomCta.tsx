"use client";

import { motion } from "motion/react";

export function BottomCta() {
  return (
    <div className="bg-secondary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white font-headline text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Have a Business Enquiry?
        </motion.h2>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-container transition-transform hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap"
        >
          Start Collaboration
        </motion.button>
      </div>
    </div>
  );
}
