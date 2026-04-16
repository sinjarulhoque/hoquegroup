"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const companies = [
  {
    name: "Hoque Mercantile",
    desc: "Specializing in multi-commodity trading and international finance facilitation.",
    borderColor: "border-primary",
    link: "/hoque-mercantile"
  },
  {
    name: "Hoque Industries",
    desc: "Leading the manufacturing sector with rice mills and processing units.",
    borderColor: "border-secondary",
    link: "#"
  },
  {
    name: "Hoque Logistics",
    desc: "A robust network of warehousing and transportation across strategic hubs.",
    borderColor: "border-primary",
    link: "#"
  }
];

export function GroupCompanies() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Consolidated Strength</span>
          <h2 className="text-primary font-headline text-4xl md:text-5xl font-bold mt-4">Group Companies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: idx * 0.12 }}
              className={`bg-white p-10 md:p-12 rounded-xl text-center border-t-8 ${company.borderColor} hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group`}
            >
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">{company.name}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">{company.desc}</p>
              <Link href={company.link} className="text-secondary font-bold inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                Learn More <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
