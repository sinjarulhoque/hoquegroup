"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote: "The level of transparency provided by Hoque Group in our logistics operations is unparalleled. A truly digital-first partner.",
    name: "Michael Schmidt",
    role: "Operations Director, EuroTrade Gmbh"
  },
  {
    quote: "Reliable, ethical, and highly efficient. Their agricultural exports consistently exceed our quality benchmarks in SE Asia.",
    name: "Tan Wee Kiat",
    role: "Supply Chain Lead, ASEAN Agro"
  },
  {
    quote: "A trusted partner for coal imports. Their handling of complex regulatory requirements across borders is commendable.",
    name: "Rajesh Kumar",
    role: "Director, Thermal Energy Solutions"
  }
];

export function Testimonials() {
  return (
    <section className="bg-primary py-24 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1] }}
          className="font-headline text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Global Partner Feedback
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: idx * 0.12 }}
              className="bg-white/5 backdrop-blur-lg p-10 rounded-lg border border-white/10 flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
            >
              <p className="italic text-lg leading-relaxed text-white/90">&quot;{t.quote}&quot;</p>
              <div className="mt-8 not-italic">
                <div className="font-bold text-secondary-container text-lg">{t.name}</div>
                <div className="text-sm text-white/60 mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
