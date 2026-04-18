"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const companies = [
  {
    title: "Hoque Industries",
    desc: "Star Export House recognized by Govt. of India — exporting agricultural products and garments globally.",
    featured: false,
    link: "/hoque-industries"
  },
  {
    title: "Hoque Logistics",
    desc: "Domestic pan-India transportation and warehousing — complete logistics arm of Hoque Group.",
    featured: false,
    link: "/hoque-logistics"
  },
  {
    title: "Kadbanu Charitable Trust",
    desc: "Social welfare wing serving rural Murshidabad through education, healthcare, and community programs.",
    featured: true,
    link: "/kadbanu-trust"
  }
];

export function RelatedCompanies() {
  return (
    <section className="bg-white py-[80px] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            HOQUE GROUP
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[38px] font-playfair font-bold mb-4">
            Explore Our Other Group Companies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-white rounded-[12px] p-[40px] shadow-lg hover:shadow-2xl transition-all duration-350 hover:-translate-y-[8px] flex flex-col border-t-[6px] ${
                company.featured ? 'border-[#B8960C]' : 'border-[#0D2E3D]'
              }`}
            >
              <h3 className="text-[#0D2E3D] font-playfair font-bold text-[22px] mb-4">{company.title}</h3>
              <p className="text-[#4B5563] text-[15px] leading-[1.6] mb-8 flex-grow">
                {company.desc}
              </p>
              <Link href={company.link} className="text-[#B8960C] font-bold text-[15px] inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
