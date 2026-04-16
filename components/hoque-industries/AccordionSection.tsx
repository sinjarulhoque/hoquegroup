"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    title: "Our Mission",
    content: "To earn the maximum foreign exchange revenue for the Government of India and subsequently to maintain our global business achievement in order to keep the international reputation and recognition within the international business forum at the highest peak — and also to serve the needs of the global community."
  },
  {
    title: "Our Policy",
    content: "It is our determined policy to continue to adapt ourselves to the world of transformation and to become a company with a confirmed position as a leading Import and Export company in the globalised market. Our core objective is to develop business and maintain commitments in respect to quality control and delivery schedules on products exported to different countries — without any prejudice — maintaining international trade protocol and commercial relations between countries in all respects."
  },
  {
    title: "Our Core Values",
    content: "Our company's development path reflects our core values: to offer innovative services to our clients and their customers alike, within a fast-changing and stimulating work environment. Never taking no for an answer and always focusing on our clients' needs have served to make Hoque Industries Pvt Ltd a trusted reference in our business arena."
  },
  {
    title: "Our Objectives",
    content: "Our main goal is to continue providing excellent quality solutions for our clients, business partners, contractors and employees. We are now developing joint ventures in Central Asian and Afro-Asian countries — not only in food products but also metals, minerals, and chemicals — with government support from partner nations for offshore offices and full trade representations."
  }
];

export function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-[80px] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR FOUNDATION
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[40px] font-playfair font-bold mb-4">
            Mission, Policy, Core Values and Objectives
          </h2>
          <p className="text-[#4B5563] text-[15px] max-w-[560px] mx-auto">
            The principles that guide every decision and every shipment.
          </p>
        </div>

        <div className="max-w-[840px] mx-auto pt-[48px] flex flex-col gap-[12px]">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-[10px] shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-l-[4px] border-l-[#B8960C]" : "border-l-[4px] border-l-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-[17px] transition-colors duration-300 ${isOpen ? "text-[#B8960C]" : "text-[#0D2E3D]"}`}>
                    {item.title}
                  </span>
                  <div className="shrink-0 ml-4">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#B8960C]"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="px-6 pb-6 text-[#4B5563] text-[16px] leading-[1.75]">
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
