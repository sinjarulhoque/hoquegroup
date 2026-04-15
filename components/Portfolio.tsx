"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Automation in Rice Milling",
    category: "Industrial Excellence",
    filterCategory: "Industrial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvCqKXt3BMHm_YGRZdCZhAgeaR3GUguY8aWWZipnbwzmH4SZFbD49D4Q-laf66qJ8jy4z8gaLEeXbOj3vDOFx7P-7s0Xx03_-0U9tiaN9wrOXhr8_EtuTDiccN6YQYfIJfwaaG7LyPxq5QrZ-K_QiaiXhAk8K99fPj0ZZ4NgBtL3Z5uvx0Zsh9sxnnQq-LjlTnUlZMSro_UhW0sZ0dTeVaLHkgDkS_sICb0UkZk2o7EVkckcFy5Ij3gfvqzPCi2Qdg7nRyMRSFvg",
    className: "h-80"
  },
  {
    id: 2,
    title: "National Logistics Grid",
    category: "Supply Chain Optimization",
    filterCategory: "Logistics",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALo0yzgsEQx1o1Fm6nRkRERU14vfA1lOXw7vr28AKakMHuRGadzkrfKMNmcOlVoCIqyBUbeqgWrbUIFH3L67F4Rtzzst4fbwjamDkQe1jl_Ipk0NV7t-NHdIZn8dS2UkgueWiY_KN0wViXfj8oAKr2pjAxgIkq1jxbj8Y7tS_DqSU2iiwPl9sz3-EmwJXCK2bWHbyDRmGo4MzQSFEFd_qPsSeUcrVWRgJE_byDGL7EyeLsKGhALk0quTOzLgIU2-aYWn4VFG0YYQ",
    className: "h-80 lg:row-span-2 lg:h-full"
  },
  {
    id: 3,
    title: "Global Export Hub",
    category: "Trade Corridors",
    filterCategory: "Exports",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1wur94wwz0rZjLL6zX-tZEIN_mi4uUMoYTddDaMrTeR6TZfV4c5tTh8DAxxHrt1p39n4ehwxM8SFXRaM2bsbv05yDHx8wKdPxGpXEHJJ_zXCUwpI8tz3Q7ojFpBNPLGTBGVm-YdPYZmdBJxSCyuCVdm11rqphVfU-9JY6uKKrd2TcuI3nZkeof6Zc4kig01P3Ov-7s735D15KsomjFcCaaS59mfpdEaw45X0RT3zyrOANtM_U5TFALhPdMV_Bo1h6_u-Xh4Wc8A",
    className: "h-80"
  }
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Show All");

  const filters = ["Show All", "Exports", "Logistics", "Industrial"];

  const filteredProjects = projects.filter(p => 
    activeFilter === "Show All" || p.filterCategory === activeFilter
  );

  return (
    <section id="pages" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Case Studies</span>
            <h2 className="text-primary font-headline text-4xl md:text-5xl font-bold mt-4">Our Portfolio</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded font-semibold tracking-wide transition-all active:scale-95 ${
                  activeFilter === filter 
                    ? "bg-[#ffc107] text-[#0a1e2f] hover:bg-[#e0a800]" 
                    : "bg-gray-100 text-[#0a1e2f] hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div 
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-lg ${p.className}`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2f] via-[#0a1e2f]/50 to-transparent opacity-90 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white text-2xl font-bold font-headline">{p.title}</h4>
                  <p className="text-[#ffc107] mt-2 font-medium">{p.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
