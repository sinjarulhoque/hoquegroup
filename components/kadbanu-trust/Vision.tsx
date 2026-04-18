"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="bg-white py-[100px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left (Image) */}
        <motion.div 
          className="w-full md:w-[50%] h-[500px] md:h-[680px] relative rounded-[14px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.div style={{ y: imgY }} className="absolute inset-[-15%] w-[130%] h-[130%]">
            <Image
              src="https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/our-vission.jpg"
              alt="Our Vision for Rural Communities"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        {/* Right (Content) */}
        <motion.div 
          className="w-full md:w-[50%] md:pl-[60px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR VISION
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[40px] font-playfair font-bold leading-tight mb-5">
            Bridging the Gap for Rural Murshidabad
          </h2>
          
          <div className="w-[48px] h-[3px] bg-[#B8960C] mb-8" />
          
          <div className="text-gray-600 text-[16px] leading-[1.78] space-y-6">
            <p>
              People of rural Murshidabad — an underserved district of West Bengal — do not avail themselves of government medical health services. The situation of poor rural people is deeply challenging. Only the creamy layer of society can enjoy the expensive medical services of private providers.
            </p>
            <p>
              Similarly, education services available in Murshidabad district are poor compared to other parts of West Bengal — despite a huge number of talented students in the district waiting for an opportunity. These conditions compelled social activist Md. Enamul Haque to act.
            </p>
            <p>
              The Kadbanu Charitable Trust was formed to minimize the gap between need and available medical and educational services in the rural unreached villages of Murshidabad — ensuring that talent is never wasted and no life is lost to preventable illness or ignorance.
            </p>
          </div>

          <div className="mt-8 mb-10 pl-6 border-l-[3px] border-[#B8960C]">
            <p className="text-[#B8960C] font-playfair italic text-[22px] leading-snug">
              &quot;Growth is not only a destination — it is a journey. Miles to go. A journey made possible by our progressive engagement with the communities we serve.&quot;
            </p>
          </div>

          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#B8960C] text-white px-[28px] py-[14px] rounded-[6px] font-bold text-[15px] hover:bg-[#9A7B0A] hover:-translate-y-[2px] transition-all duration-300">
            Join Our Cause →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
