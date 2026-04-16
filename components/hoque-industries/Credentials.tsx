"use client";

import { motion } from "motion/react";

const credentials = [
  { label: "Business Name", value: "HOQUE INDUSTRIES PRIVATE LIMITED", bg: "bg-gray-100" },
  { label: "Registered Address", value: "27, Bentinck Street, MK Point, Room No. 601 and 704, Kolkata-700001, West Bengal, India", bg: "bg-white" },
  { label: "Company Identification No. (CIN)", value: "U15400WB2017PTC221347", bg: "bg-gray-100" },
  { label: "PAN", value: "AAECH2095P", bg: "bg-white" },
  { label: "TAN", value: "CALH05493F", bg: "bg-gray-100" },
  { label: "Import Export Code (IEC)", value: "AAECH2095P", bg: "bg-white" },
  { label: "GSTIN", value: "19AAECH2095P1ZY", bg: "bg-gray-100" },
  { label: "Year of Inception", value: "June 2017 — Indian Companies Act 2013", bg: "bg-white" },
  { label: "Memberships", value: "APEDA — Ministry of Commerce and Industry, Govt. of India · BNCCI", bg: "bg-gray-100" }
];

export function Credentials() {
  return (
    <section className="bg-[#F3F4F6] py-[80px] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            LEGAL CREDENTIALS
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[38px] font-playfair font-bold mb-4">
            Company Registration and Compliance Details
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-[800px] mx-auto rounded-[14px] overflow-hidden shadow-[0_4px_28px_rgba(0,0,0,0.08)] bg-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#0D2E3D] text-white">
                  <th className="py-4 px-6 font-bold text-[13px] uppercase tracking-wider w-1/3">Credential</th>
                  <th className="py-4 px-6 font-bold text-[13px] uppercase tracking-wider w-2/3">Details</th>
                </tr>
              </thead>
              <tbody>
                {credentials.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`group transition-colors duration-200 hover:bg-[rgba(184,150,12,0.04)] ${item.bg}`}
                  >
                    <td className="py-4 px-6 border-l-[3px] border-transparent group-hover:border-[#B8960C] transition-colors duration-200">
                      <span className="text-[#0D2E3D] font-bold text-[14px]">{item.label}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-600 text-[14px]">{item.value}</span>
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
