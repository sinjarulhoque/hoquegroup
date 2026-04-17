"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function RelatedCompanies() {
  const companies = [
    {
      title: "Hoque Mercantile Pvt Ltd",
      borderTitle: "border-[#0D2E3D]",
      desc: "Multi-commodity agricultural export specialist — with in-house Rice Mill at Murshidabad and markets in Bangladesh and UAE.",
      link: "/hoque-mercantile"
    },
    {
      title: "Hoque Industries Pvt Ltd",
      borderTitle: "border-[#0D2E3D]",
      desc: "Star Export House recognized by Govt. of India — exporting agricultural products, stone chips, and garments globally with APEDA certification.",
      link: "/hoque-industries"
    },
    {
      title: "Kadbanu Charitable Trust",
      borderTitle: "border-[#B8960C]",
      desc: "Social welfare CSR wing — serving rural Murshidabad through education, free healthcare, and community welfare programs year-round.",
      link: "https://www.hoquegroup.com"
    }
  ];

  return (
    <section className="bg-white py-[80px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            HOQUE GROUP
          </span>
          <h2 className="text-[#0D2E3D] text-[38px] font-playfair font-bold mb-4">
            Explore Our Other Group Companies
          </h2>
          <p className="text-[#4B5563] text-[15px]">
            A diversified group built on trust, quality, and national ambition.
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
                className="text-[#B8960C] font-medium text-[15px] hover:underline transition-all mt-auto inline-flex items-center"
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
