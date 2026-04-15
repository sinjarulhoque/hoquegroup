"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    name: "Hoque Mercantile",
    desc: "Specializing in multi-commodity trading and international finance facilitation.",
    borderColor: "border-primary"
  },
  {
    name: "Hoque Industries",
    desc: "Leading the manufacturing sector with rice mills and processing units.",
    borderColor: "border-secondary"
  },
  {
    name: "Hoque Logistics",
    desc: "A robust network of warehousing and transportation across strategic hubs.",
    borderColor: "border-primary"
  }
];

export function GroupCompanies() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Consolidated Strength</span>
          <h2 className="text-primary font-headline text-4xl md:text-5xl font-bold mt-4">Group Companies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white p-10 md:p-12 rounded-xl text-center border-t-8 ${company.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">{company.name}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">{company.desc}</p>
              <a href="#" className="text-secondary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
