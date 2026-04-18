"use client";

import { motion } from "motion/react";
import { HandHelping, Users, Megaphone } from "lucide-react";

export function GetInvolved() {
  return (
    <section className="bg-[#0D2E3D] py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            GET INVOLVED
          </span>
          <h2 className="text-white text-[36px] md:text-[42px] font-playfair font-bold mb-4 leading-tight">
            Support the Kadbanu Charitable Trust
          </h2>
          <p className="text-gray-300 text-[16px] max-w-[560px] mx-auto text-center">
            Every contribution — financial or otherwise — directly helps a rural family in Murshidabad access education, healthcare, or essential winter protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-[12px]">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="bg-white rounded-[14px] p-[36px] shadow-lg border-t-[6px] border-[#B8960C] flex flex-col items-center text-center hover:-translate-y-[7px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-350 h-full"
          >
            <div className="w-[60px] h-[60px] rounded-full bg-[#FFF8E7] flex items-center justify-center mb-6">
              <HandHelping className="w-8 h-8 text-[#B8960C]" />
            </div>
            <h3 className="text-[#0D2E3D] font-bold text-[20px] mb-4">Financial Donation</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
              Contribute financially to fund medical camps, educational scholarships, blanket distribution, and wedding support programs.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-[#B8960C] text-white py-3 rounded-[6px] font-bold text-[15px] hover:bg-[#9A7B0A] hover:-translate-y-[2px] transition-all">
              Donate Now →
            </button>
          </motion.div>

          {/* Card 2 (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="bg-white rounded-[14px] p-[36px] shadow-[0_12px_40px_rgba(0,0,0,0.1)] border-t-[6px] border-[#B8960C] flex flex-col items-center text-center hover:-translate-y-[7px] hover:shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition-all duration-350 h-full md:-translate-y-2 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B8960C] text-white text-[10px] uppercase font-bold tracking-widest py-1 px-4 rounded-full shadow-sm">
              Primary Need
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#FFF8E7] flex items-center justify-center mb-6 mt-4">
              <Users className="w-8 h-8 text-[#B8960C]" />
            </div>
            <h3 className="text-[#0D2E3D] font-bold text-[20px] mb-4">Volunteer Your Skills</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
              Join our medical camps as a doctor or paramedic, teach at our educational programs, or assist with logistics during winter relief drives.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-[#B8960C] text-white py-3 rounded-[6px] font-bold text-[15px] hover:bg-[#9A7B0A] hover:-translate-y-[2px] transition-all shadow-[0_4px_14px_rgba(184,150,12,0.3)]">
              Volunteer →
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="bg-white rounded-[14px] p-[36px] shadow-lg border-t-[6px] border-[#B8960C] flex flex-col items-center text-center hover:-translate-y-[7px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-350 h-full"
          >
            <div className="w-[60px] h-[60px] rounded-full bg-[#FFF8E7] flex items-center justify-center mb-6">
              <Megaphone className="w-8 h-8 text-[#B8960C]" />
            </div>
            <h3 className="text-[#0D2E3D] font-bold text-[20px] mb-4">Spread Awareness</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
              Share our work with your network, help us reach more donors and volunteers, and amplify the message of rural welfare across India.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-[#B8960C] text-white py-3 rounded-[6px] font-bold text-[15px] hover:bg-[#9A7B0A] hover:-translate-y-[2px] transition-all">
              Share Our Mission →
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
