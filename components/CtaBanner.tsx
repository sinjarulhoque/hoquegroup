"use client";

import { motion } from "motion/react";

export function CtaBanner() {
  return (
    <div className="bg-secondary-container py-16 text-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-on-secondary-container text-3xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter relative z-10 px-4"
      >
        Proud to Deliver Excellence Every Time
      </motion.h2>
    </div>
  );
}
