"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export function ServiceDetailsTable() {
  const rows = [
    { feature: "Express Solutions", values: [true, true, true, false, true] },
    { feature: "Premium Service Tier", values: [true, true, true, true, true] },
    { feature: "Economy Service", values: [true, true, true, true, true] },
    { feature: "Freight Management", values: [true, true, true, true, true] },
    { feature: "On-Time Delivery", values: [true, true, true, true, true] },
    { feature: "Pick-Up Facility", values: [true, false, true, false, true] },
    { feature: "Insurance Coverage", values: [true, true, true, true, true] },
    { feature: "Safety and Security", values: [true, true, true, true, true] },
    { feature: "Custom Documentation", values: [true, true, true, false, true] },
    { feature: "Port Management", values: [true, true, false, false, false] },
    { feature: "Temperature Controlled", values: [true, true, false, true, false] },
    { feature: "Warehousing Support", values: [false, false, false, true, true] },
  ];

  return (
    <section className="bg-white py-[80px] px-8 md:px-[40px] lg:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            SERVICE DETAILS
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[38px] font-playfair font-bold mb-4">
            What&apos;s Included in Every Shipment
          </h2>
          <p className="text-[#4B5563] text-[16px] max-w-[560px] mx-auto mb-6">
            Every logistics service we provide comes with a complete package — no hidden extras, no surprises.
          </p>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-[960px] mx-auto rounded-[14px] overflow-hidden shadow-[0_4px_28px_rgba(0,0,0,0.08)] bg-white border border-gray-100"
        >
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#0D2E3D] border-b border-gray-200">
                  <th className="p-[16px_24px] text-white font-bold text-[13px] uppercase tracking-wider whitespace-nowrap sticky left-0 bg-[#0D2E3D] z-10 border-r border-[#0D2E3D]">Service Feature</th>
                  <th className="p-[16px] text-white font-bold text-[13px] uppercase tracking-wider text-center whitespace-nowrap">Air Freight</th>
                  <th className="p-[16px] text-white font-bold text-[13px] uppercase tracking-wider text-center whitespace-nowrap">Ocean Freight</th>
                  <th className="p-[16px] text-white font-bold text-[13px] uppercase tracking-wider text-center whitespace-nowrap">Cargo Express</th>
                  <th className="p-[16px] text-white font-bold text-[13px] uppercase tracking-wider text-center whitespace-nowrap">Warehousing</th>
                  <th className="p-[16px] text-white font-bold text-[13px] uppercase tracking-wider text-center whitespace-nowrap">Ground Transport</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`h-[52px] border-b border-gray-100 transition-colors duration-200 hover:bg-[#B8960C]/[0.04] group ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="p-[12px_24px] font-bold text-[#0D2E3D] text-[14px] whitespace-nowrap sticky left-0 z-10 border-r border-gray-100 group-hover:bg-[#B8960C]/0 bg-inherit relative">
                      <div className="absolute inset-y-0 left-0 w-[3px] bg-transparent group-hover:bg-[#B8960C] transition-colors" />
                      {row.feature}
                    </td>
                    {row.values.map((val, i) => (
                      <td key={i} className="p-[12px_16px] text-center">
                        {val ? (
                          <Check className="w-5 h-5 text-[#B8960C] mx-auto font-bold" strokeWidth={3} />
                        ) : (
                          <span className="text-gray-300 font-bold">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
