"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const exportProducts = [
  {
    title: "Rice — Basmati and Non-Basmati",
    desc: "Premium grade rice exported to Bangladesh with strict quality assurance from farm to port.",
    image: "https://picsum.photos/seed/rice/800/600"
  },
  {
    title: "Red Onion",
    desc: "Fresh high-grade red onions sourced from top growing regions, packed and exported to Bangladesh markets.",
    image: "https://picsum.photos/seed/redonion/800/600"
  },
  {
    title: "Fresh Fruits",
    desc: "Pomegranates, grapes and seasonal Indian fresh fruits exported with cold chain compliance.",
    image: "https://picsum.photos/seed/fruits/800/600"
  },
  {
    title: "Mustard De-oiled Cake",
    desc: "High protein animal feed residue from mustard oil extraction — exported as premium livestock supplement.",
    image: "https://picsum.photos/seed/mustard/800/600"
  },
  {
    title: "Rape-seed De-oiled Cake",
    desc: "Nutritious rapeseed extraction meal — exported for use in poultry and livestock feed industries.",
    image: "https://picsum.photos/seed/rapeseed/800/600"
  }
];

const domesticProducts = [
  {
    title: "Rice",
    desc: "Domestic wholesale supply of quality rice across West Bengal and Eastern India.",
    image: "https://picsum.photos/seed/rice/800/600"
  },
  {
    title: "Red Onion",
    desc: "Bulk domestic supply to retailers, wholesalers and processors across India.",
    image: "https://picsum.photos/seed/redonion2/800/600"
  },
  {
    title: "Sand",
    desc: "Sand mining and domestic supply operations serving construction industries in Bengal.",
    image: "https://picsum.photos/seed/sand/800/600"
  }
];

export function Products() {
  const [activeTab, setActiveTab] = useState("Export Products");

  return (
    <section className="bg-white py-[100px] px-8 md:px-[80px] overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR PRODUCTS
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[42px] font-playfair font-bold mb-4">
            Export and Domestic Product Portfolio
          </h2>
          <p className="text-[#4B5563] text-[16px] max-w-[560px] mx-auto mb-6">
            Premium quality agricultural products sourced and exported with full compliance to international food standards.
          </p>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 border-b border-gray-200 px-4">
            {["Export Products", "Domestic Supply", "Joint Venture Expansion"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[16px] font-medium transition-colors relative whitespace-nowrap ${
                  activeTab === tab ? "text-[#B8960C]" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8960C] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {activeTab === "Export Products" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exportProducts.map((product, idx) => (
                  <ProductCard key={idx} product={product} idx={idx} badge="Export" />
                ))}
              </div>
            )}

            {activeTab === "Domestic Supply" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domesticProducts.map((product, idx) => (
                  <ProductCard key={idx} product={product} idx={idx} badge="" />
                ))}
              </div>
            )}

            {activeTab === "Joint Venture Expansion" && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-[12px] shadow-lg overflow-hidden flex flex-col lg:flex-row border border-gray-100"
              >
                <div className="w-full lg:w-[45%] h-[300px] lg:h-auto relative">
                  <Image
                    src="https://picsum.photos/seed/globe/800/600"
                    alt="Global trade network"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-[55%] p-8 md:p-10">
                  <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
                    GLOBAL EXPANSION
                  </span>
                  <h3 className="text-[#0D2E3D] text-[24px] md:text-[28px] font-playfair font-bold mb-4">
                    Developing Joint Ventures in Central Asia and Africa
                  </h3>
                  <p className="text-[#4B5563] text-[16px] leading-[1.75] mb-6">
                    Hoque Industries is actively developing joint ventures across Central Asian and Afro-Asian countries — expanding beyond agricultural products into metals, minerals, and chemicals. Offshore offices and complete country representations are being established to build strong international trade protocol relations. Partner governments have pledged full co-operation and support to ease global market access.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Metals, Minerals and Chemicals trade expansion.",
                      "Government-supported offshore representations.",
                      "Strong bilateral trade protocol agreements."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#4B5563] text-[15px]">
                        <CheckCircle2 className="w-5 h-5 text-[#B8960C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#B8960C] text-white px-[28px] py-[12px] rounded-[6px] font-medium text-[15px] hover:bg-[#9a7d0a] transition-colors">
                    Enquire About Partnerships →
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProductCard({ product, idx, badge }: { product: any, idx: number, badge: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group bg-white rounded-[12px] shadow-sm hover:shadow-xl transition-all duration-350 hover:-translate-y-[6px] overflow-hidden flex flex-col border border-gray-100"
    >
      <div className="relative w-full h-[220px] overflow-hidden rounded-t-[12px]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {badge && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[12px] font-bold bg-[#B8960C] text-white">
            {badge}
          </div>
        )}
      </div>
      <div className="p-[20px] flex flex-col flex-grow">
        <h3 className="text-[#0D2E3D] font-bold text-[17px] mb-2">{product.title}</h3>
        <p className="text-[#4B5563] text-[14px] leading-[1.6] mb-4 flex-grow">{product.desc}</p>
        <Link href="#" className="text-[#B8960C] font-medium text-[14px] hover:underline mt-auto inline-flex items-center">
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
