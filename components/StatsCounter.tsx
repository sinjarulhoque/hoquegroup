"use client";

import { motion } from "motion/react";

const stats = [
  { value: "150+", label: "Global Clients" },
  { value: "24/7", label: "Support Cycle" },
  { value: "12+", label: "Countries Reached" },
  { value: "100%", label: "Trust Index" }
];

export function StatsCounter() {
  return (
    <div className="bg-primary-container py-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            {idx !== 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-secondary/30 -ml-6" />
            )}
            <div className="text-secondary text-5xl md:text-6xl font-headline font-bold mb-4">{stat.value}</div>
            <div className="text-on-primary-container text-sm uppercase tracking-widest font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
