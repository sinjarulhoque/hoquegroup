"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: "Deep dive into client specifications, regulatory needs, and logistics constraints."
  },
  {
    num: "02",
    title: "Strategic Sourcing",
    desc: "Leveraging our global network to find the highest quality products and materials."
  },
  {
    num: "03",
    title: "Logistics Coordination",
    desc: "Intelligent routing and multimodal transport execution for time-critical deliveries."
  },
  {
    num: "04",
    title: "Final Fulfillment",
    desc: "Strict quality inspection and secure handover to our global partners."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <motion.span 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Execution Flow
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1], delay: 0.1 }}
            className="text-primary font-headline text-4xl md:text-5xl font-bold leading-tight"
          >
            Our Proven Process for Precision
          </motion.h2>
        </div>

        <div className="lg:col-span-2 space-y-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: idx * 0.15 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 relative group"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex-shrink-0 flex items-center justify-center z-10 ring-8 ring-surface transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#ffc107]">
                <span className="text-white font-bold transition-colors duration-300 group-hover:text-[#0a1e2f]">{step.num}</span>
              </div>
              <div className="pt-2 md:pt-1">
                <h4 className="text-2xl font-headline font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-[#ffc107]">{step.title}</h4>
                <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
