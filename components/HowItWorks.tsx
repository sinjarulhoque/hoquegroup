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
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Execution Flow</span>
          <h2 className="text-primary font-headline text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Our Proven Process for Precision
          </h2>
        </motion.div>

        <div className="lg:col-span-2 space-y-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 relative"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex-shrink-0 flex items-center justify-center z-10 ring-8 ring-surface">
                <span className="text-white font-bold">{step.num}</span>
              </div>
              <div className="pt-2 md:pt-1">
                <h4 className="text-2xl font-headline font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
