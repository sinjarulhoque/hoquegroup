"use client";

import { motion } from "motion/react";

export function BottomCta() {
  return (
    <div className="bg-secondary py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1] }}
          className="text-white font-headline text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Have a Business Enquiry?
        </motion.h2>
        <motion.button 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1], delay: 0.1 }}
          whileHover={{ scale: 1.05, translateY: -2, boxShadow: "0 10px 25px rgba(10,30,47,0.3)" }}
          whileTap={{ scale: 0.95, translateY: 0, boxShadow: "none" }}
          className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors duration-300 hover:bg-[#112a42] shadow-xl whitespace-nowrap"
        >
          Start Collaboration
        </motion.button>
      </div>
    </div>
  );
}
