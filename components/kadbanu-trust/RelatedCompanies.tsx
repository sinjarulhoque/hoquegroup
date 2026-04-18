"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function RelatedCompanies() {
  const companies = [
    {
      title: "Hoque Mercantile Pvt Ltd",
      borderTitle: "border-[#0D2E3D]",
      desc: "Agricultural export specialist with in-house Rice Mill at Murshidabad — exporting to Bangladesh and UAE.",
      link: "/hoque-mercantile"
    },
    {
      title: "Hoque Industries Pvt Ltd",
      borderTitle: "border-[#0D2E3D]",
      desc: "Star Export House recognized by Govt. of India — APEDA and BNCCI member exporting agricultural commodities globally.",
      link: "/hoque-industries"
    },
    {
      title: "Hoque Logistics Pvt Ltd",
      borderTitle: "border-[#0D2E3D]",
      desc: "Pan-India transportation and logistics arm — domestic supply chain, warehousing, and pulses distribution across India.",
      link: "/hoque-logistics"
    }
  ];

  return (
    <section className="bg-[#F3F4F6] py-[80px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            HOQUE GROUP
          </span>
          <h2 className="text-[#0D2E3D] text-[38px] font-playfair font-bold mb-4">
            Explore Our Group Companies
          </h2>
          <p className="text-[#4B5563] text-[15px]">
            The business arm that makes this social mission possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`bg-white rounded-[12px] p-[36px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-t-[6px] ${company.borderTitle} hover:-translate-y-[8px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-350 flex flex-col h-full`}
            >
              <h3 className="text-[#0D2E3D] text-[22px] font-playfair font-bold mb-4 leading-tight">
                {company.title}
              </h3>
              <p className="text-[#4B5563] text-[15px] leading-relaxed mb-6 flex-grow">
                {company.desc}
              </p>
              <Link 
                href={company.link} 
                className="text-[#B8960C] font-semibold text-[15px] hover:text-[#9A7B0A] hover:underline transition-all mt-auto inline-flex items-center"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
