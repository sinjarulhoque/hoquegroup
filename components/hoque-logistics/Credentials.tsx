"use client";

import { motion } from "motion/react";

export function Credentials() {
  const credentials = [
    { label: "Business Name", value: "HOQUE LOGISTICS PRIVATE LIMITED" },
    { label: "Registered Address", value: "27, Bentinck Street, MK Point, Room No. 701, Kolkata-700001, West Bengal, India" },
    { label: "Company Identification No. (CIN)", value: "U60300WB2018PTC228014" },
    { label: "PAN", value: "AAECH6644J" },
    { label: "TAN", value: "CALH05983F" },
    { label: "Import Export Code (IEC)", value: "AAECH6644J" },
    { label: "GSTIN", value: "19AAECH6644J1Z7" },
    { label: "Year of Incorporation", value: "September 2018 — Indian Companies Act 2013" },
    { label: "Primary Activities", value: "Transport, Logistics Services, Domestic Supply of Pulses" }
  ];

  return (
    <section className="bg-white py-[80px] px-8 md:px-[40px] lg:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            LEGAL CREDENTIALS
          </span>
          <h2 className="text-[#0D2E3D] text-[38px] font-playfair font-bold mb-4">
            Company Registration and Compliance Details
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-[800px] mx-auto rounded-[14px] overflow-hidden shadow-[0_4px_28px_rgba(0,0,0,0.08)] bg-white border border-gray-100"
        >
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#0D2E3D]">
                  <th className="p-[16px_24px] text-white font-bold text-[13px] uppercase tracking-wider w-[35%]">Credential</th>
                  <th className="p-[16px_24px] text-white font-bold text-[13px] uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody>
                {credentials.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`h-[54px] border-b last:border-b-0 border-gray-100 transition-colors duration-200 hover:bg-[#B8960C]/[0.04] group ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <td className="p-[12px_24px] font-bold text-[#0D2E3D] text-[14px] relative">
                      <div className="absolute inset-y-0 left-0 w-[3px] bg-transparent group-hover:bg-[#B8960C] transition-colors" />
                      {item.label}
                    </td>
                    <td className="p-[12px_24px] text-gray-600 text-[14px]">
                      {item.value}
                    </td>
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
