"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const items = [
  {
    title: "Our Mission",
    content: "To earn the maximum foreign exchange revenue for the Government of India and subsequently to maintain our global business achievement in order to maintain and keep the international reputation and recognition in the international business forum at the highest peak and also to serve the needs of the global community."
  },
  {
    title: "Our Policy",
    content: "It is our determined policy to continue to adapt ourselves to the world of transformation and to become a company with a confirmed position as a leading Import and Export company in the globalised market. Our core objective is to develop business and maintain commitments in respect to quality control and delivery schedule on products exported to different countries."
  },
  {
    title: "Our Core Values",
    content: "Our company's development path over the years reflects our core values: to offer innovative services to our clients and their customers alike, within a fast-changing and stimulating work environment. Never taking no for an answer and always focusing on our clients' needs."
  },
  {
    title: "Our Objectives",
    content: "Our main goal is to continue to innovate to provide high quality solutions for our clients. We will achieve this by caring passionately for our clients, business partners, contractors and employees."
  }
];

export function AccordionSection() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="bg-[#F3F4F6] py-[80px] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR FOUNDATION
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[40px] font-playfair font-bold mb-6">
            Mission, Policy and Core Values
          </h2>
        </div>

        <div className="max-w-[820px] mx-auto flex flex-col gap-[12px]">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`bg-white rounded-[10px] shadow-sm overflow-hidden border-l-[4px] transition-colors duration-300 ${
                  isOpen ? 'border-[#B8960C]' : 'border-transparent'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 flex justify-between items-center text-left"
                >
                  <span className={`font-bold text-[17px] transition-colors duration-300 ${
                    isOpen ? 'text-[#B8960C]' : 'text-[#0D2E3D]'
                  }`}>
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <Plus className="w-6 h-6 text-[#B8960C]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[#4B5563] leading-[1.7]">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
