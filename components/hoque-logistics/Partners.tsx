"use client";

import { motion } from "motion/react";
import { Image as ImageIcon } from "lucide-react";

export function Partners() {
  const partners = [
    { type: "Port Agent Partner" },
    { type: "Customs Broker" },
    { type: "Insurance Provider" },
    { type: "Fleet Partner" },
    { type: "Warehousing Partner" },
    { type: "Cold Chain Partner" }
  ];

  return (
    <section className="bg-[#0D2E3D] py-[70px] px-8 md:px-[80px] overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR PARTNERS
          </span>
          <h2 className="text-white text-[38px] font-playfair font-bold mb-4">
            Business Partners and Associates
          </h2>
          <p className="text-gray-300 text-[16px] max-w-[600px] mx-auto">
            We work with a trusted network of transport operators, port agents, customs brokers, and insurance providers across India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[10px] p-[20px] flex flex-col items-center justify-center text-center shadow-lg aspect-square"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                <ImageIcon className="w-6 h-6 text-gray-400" />
              </div>
              <span className="text-[#0D2E3D] font-bold text-[12px] leading-snug">
                {partner.type}
              </span>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-[#B8960C] italic text-[14px] mb-[50px]">
          Partner details available on specific request — Contact Us.
        </p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-[500px] mx-auto bg-white rounded-[12px] p-[28px_32px] shadow-xl text-center"
        >
          <h3 className="text-[#0D2E3D] font-bold text-[16px] mb-2">Business Partnership Enquiries</h3>
          <p className="text-[#4B5563] text-[14px] mb-6">
            For partnership and business associate information, please contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-[#B8960C] text-white px-[28px] py-[12px] rounded-[6px] text-[14px] font-medium transition-colors hover:bg-[#9A7B0A]">
              Contact Us →
            </button>
            <button className="border-2 border-[#0D2E3D] text-[#0D2E3D] px-[28px] py-[12px] rounded-[6px] text-[14px] font-medium transition-colors hover:bg-[#0D2E3D] hover:text-white">
              Learn More
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
