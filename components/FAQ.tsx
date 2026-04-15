"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are your primary export markets?",
    a: "We primarily export to Southeast Asia, the Middle East, and parts of Europe, focusing on high-quality agricultural products and industrial materials."
  },
  {
    q: "Do you provide real-time shipment tracking?",
    a: "Yes, our digital logistics platform provides end-to-end visibility and real-time tracking for all international and domestic shipments."
  },
  {
    q: "Are you certified by government authorities?",
    a: "Absolutely. We are a Star Export House recognized by the Govt. of India, an APEDA member, and hold all necessary IEC certifications."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 max-w-4xl mx-auto px-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-headline text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-lg border border-outline-variant/20 overflow-hidden"
          >
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-6 flex justify-between items-center text-left hover:bg-surface-bright transition-colors"
            >
              <span className="text-primary font-bold text-lg pr-8">{faq.q}</span>
              <motion.div
                animate={{ rotate: openIdx === idx ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-6 h-6 text-secondary" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-on-surface-variant leading-relaxed border-t border-outline-variant/10">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
