"use client";

import { motion } from "motion/react";

const credentials = [
  { label: "Business Name", value: "HOQUE MERCANTILE PRIVATE LIMITED" },
  { label: "Registered Address", value: "27, Bentinck Street, MK Point, Room No. 601, 6th Floor, Kolkata-700001, West Bengal, India" },
  { label: "Company Identification No. (CIN)", value: "U28100WB2015PTC208011" },
  { label: "PAN", value: "AADCH7321P" },
  { label: "TAN", value: "CALH05369A" },
  { label: "Import Export Code (IEC)", value: "0215026918" },
  { label: "GSTIN", value: "19AADCH7321P1Z4" },
  { label: "Incorporation Year", value: "2015 — under Indian Companies Act 2013" }
];

export function Credentials() {
  return (
    <section className="bg-white py-[80px] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            LEGAL CREDENTIALS
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[38px] font-playfair font-bold mb-6">
            Company Registration and Compliance
          </h2>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-[780px] mx-auto rounded-[12px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
        >
          <div className="bg-[#0D2E3D] text-white font-bold text-[14px] uppercase flex">
            <div className="w-[40%] p-4 pl-6">Credential</div>
            <div className="w-[60%] p-4">Details</div>
          </div>
          <div className="flex flex-col">
            {credentials.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-center min-h-[52px] transition-colors duration-200 border-l-[3px] border-transparent hover:border-[#B8960C] hover:bg-[#B8960C]/5 ${
                  idx % 2 === 0 ? 'bg-[#F3F4F6]' : 'bg-white'
                }`}
              >
                <div className="w-[40%] p-4 pl-5 text-[#0D2E3D] font-bold text-[14px]">
                  {item.label}
                </div>
                <div className="w-[60%] p-4 text-[#4B5563] text-[14px]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
