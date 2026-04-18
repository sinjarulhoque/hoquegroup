"use client";

import { motion } from "motion/react";
import { GraduationCap, Stethoscope, Snowflake, HeartPulse, Megaphone } from "lucide-react";

const programs = [
  {
    icon: <GraduationCap className="w-8 h-8 text-[#B8960C]" />,
    title: "Educational Service",
    desc: "The Trust provides educational materials to students from poor families and provides scholarships to talented and deserving students for higher studies — ensuring no student in Murshidabad is held back by financial hardship."
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-[#B8960C]" />,
    title: "Medical Health Service",
    desc: "The Trust organizes regular health checkup camps by qualified medical professionals and provides prescribed medicines free of cost to poor patients. Surgery and operations are facilitated when required. A dedicated medical health service centre has been initiated at Kulgachi, Murshidabad."
  },
  {
    icon: <Snowflake className="w-8 h-8 text-[#B8960C]" />,
    title: "Protection from the Evils of Winter",
    desc: "Every year a significant number of elderly people die due to extremely low temperatures in rural Bengal. The Trust distributes blankets every year before winter to poor villagers who are unable to afford warm clothing — saving lives every season."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-[#B8960C]" />, // Using HeartPulse as fallback for Ring/Heart
    title: "Wedding Support for the Poor",
    desc: "Financial support is extended to poor families to help meet wedding expenses — enabling them to celebrate one of life's most important milestones with dignity and helping them build a stable and happy post-marriage life."
  },
  {
    icon: <Megaphone className="w-8 h-8 text-[#B8960C]" />,
    title: "Community Awareness Programme",
    desc: "Due to lack of awareness in rural society, villagers often suffer from preventable diseases and miss out on government benefits. The Trust organizes awareness programmes on causes and remedies of common diseases and educates communities about facilities and schemes available to them."
  }
];

export function MissionPrograms() {
  return (
    <section id="programs" className="bg-[#F3F4F6] py-[100px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR MISSION
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[42px] font-playfair font-bold mb-4 leading-tight">
            Serve the Poor Unreached Rural Community of Murshidabad
          </h2>
          <p className="text-gray-600 text-[16px] max-w-[600px] mx-auto text-center">
            Five core programs that define the work of Kadbanu Charitable Trust — touching lives across Murshidabad every year.
          </p>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mt-8" />
        </div>

        {/* 5 Cards Layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0,3).map((item, i) => (
              <ProgramCard key={i} item={item} delay={0.1 * i} />
            ))}
          </div>
          {/* Row 2: 2 cards centered */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {programs.slice(3,5).map((item, i) => (
              <div key={i+3} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ProgramCard item={item} delay={0.1 * (i + 3)} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProgramCard({ item, delay }: { item: any, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className="bg-white rounded-[14px] p-[36px] px-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-[7px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-350 flex flex-col items-center text-center relative group h-full"
    >
      <div className="w-[60px] h-[60px] rounded-full bg-[#FFF8E7] border border-[#B8960C]/20 flex items-center justify-center mb-6">
        {item.icon}
      </div>
      <h3 className="text-[#0D2E3D] font-playfair font-bold text-[20px] mb-4">
        {item.title}
      </h3>
      <div className="w-[36px] h-[2px] bg-[#B8960C] mb-5" />
      <p className="text-gray-500 text-[15px] leading-[1.72]">
        {item.desc}
      </p>

      {/* Hover bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#B8960C] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-b-[14px]" />
    </motion.div>
  );
}
