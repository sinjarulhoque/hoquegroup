"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const exportProducts = [
  {
    title: "Rice — Basmati and Non-Basmati",
    tag: "Export",
    tagColor: "yellow",
    desc: "Premium quality rice from our own Murshidabad mill, exported to Bangladesh and UAE.",
    image: "https://picsum.photos/seed/rice/800/600"
  },
  {
    title: "Red Onion",
    tag: "Export",
    tagColor: "yellow",
    desc: "Fresh red onions sourced from major Indian growing regions.",
    image: "https://picsum.photos/seed/redonion1/800/600"
  },
  {
    title: "Fresh Fruits",
    tag: "Export",
    tagColor: "yellow",
    desc: "Pomegranate, grapes, and seasonal fresh fruits.",
    image: "https://picsum.photos/seed/fruits/800/600"
  },
  {
    title: "Mustard De-oiled Cake",
    tag: "Export",
    tagColor: "yellow",
    desc: "High protein animal feed — by-product of mustard oil extraction.",
    image: "https://picsum.photos/seed/mustard/800/600"
  },
  {
    title: "Rapeseed De-oiled Cake",
    tag: "Export",
    tagColor: "yellow",
    desc: "Nutritious rapeseed extraction meal for livestock feed.",
    image: "https://picsum.photos/seed/rapeseed/800/600"
  },
  {
    title: "Indian Spices",
    tag: "Export",
    tagColor: "yellow",
    desc: "Cumin, coriander, turmeric and premium Indian spice blends.",
    image: "https://picsum.photos/seed/spices/800/600"
  },
  {
    title: "Stone Chips and Boulders",
    tag: "Export",
    tagColor: "navy",
    desc: "Construction grade stone chips and boulders for export.",
    image: "https://picsum.photos/seed/stonechips1/800/600"
  },
  {
    title: "Readymade Garments",
    tag: "Export",
    tagColor: "navy",
    desc: "Ready-to-wear garments for Bangladesh and UAE markets.",
    image: "https://picsum.photos/seed/garments/800/600"
  },
  {
    title: "Steam Coal",
    tag: "Import",
    tagColor: "navy",
    desc: "Non-coking high grade steam coal imported from Indonesia.",
    image: "https://picsum.photos/seed/steamcoal/800/600"
  }
];

const domesticProducts = [
  {
    title: "Rice and Rice Bran",
    tag: "Domestic",
    tagColor: "navy",
    desc: "Sold domestically across West Bengal and Eastern India.",
    image: "https://picsum.photos/seed/rice/800/600"
  },
  {
    title: "Red Onion",
    tag: "Domestic",
    tagColor: "navy",
    desc: "Domestic wholesale supply to retailers and processors.",
    image: "https://picsum.photos/seed/redonion2/800/600"
  },
  {
    title: "Sand",
    tag: "Domestic",
    tagColor: "navy",
    desc: "Sand mining and domestic supply operations.",
    image: "https://picsum.photos/seed/stonechips2/800/600"
  }
];

export function Products() {
  const [activeTab, setActiveTab] = useState("Export Products");

  return (
    <section className="bg-white py-[100px] px-8 md:px-[80px] overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            WHAT WE OFFER
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[40px] font-playfair font-bold mb-4">
            Our Products and Export Portfolio
          </h2>
          <p className="text-[#4B5563] text-[16px] max-w-[560px] mx-auto mb-6">
            From our in-house rice mill to global agricultural trade — we deliver quality at every step.
          </p>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 border-b border-gray-200 px-4">
            {["Export Products", "Domestic Supply", "Manufacturing"].map((tab) => (
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
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8960C]"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {activeTab === "Export Products" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exportProducts.map((product, idx) => (
                  <ProductCard key={idx} product={product} idx={idx} />
                ))}
              </div>
            )}

            {activeTab === "Domestic Supply" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {domesticProducts.map((product, idx) => (
                  <ProductCard key={idx} product={product} idx={idx} />
                ))}
              </div>
            )}

            {activeTab === "Manufacturing" && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-[12px] shadow-lg overflow-hidden flex flex-col lg:flex-row"
              >
                <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative">
                  <Image
                    src="https://picsum.photos/seed/rice/800/600"
                    alt="Modern rice mill interior"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8 md:p-12">
                  <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
                    OUR RICE MILL
                  </span>
                  <h3 className="text-[#0D2E3D] text-[24px] md:text-[28px] font-playfair font-bold mb-4">
                    State-of-the-Art Rice Mill at Murshidabad, West Bengal
                  </h3>
                  <p className="text-[#4B5563] text-[15px] leading-[1.7] mb-6">
                    Our Rice Mill is one of the most modern in India, equipped with the latest technology and machineries. We produce best quality rice in our own facility — ensuring in-house quality control from grain to shipment. Being both manufacturer and exporter gives us a unique edge in quality assurance and pricing.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Latest Italian and Japanese machinery",
                      "Capacity for large-volume export batches",
                      "Full quality testing laboratory on-site"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#4B5563] text-[15px]">
                        <CheckCircle2 className="w-5 h-5 text-[#B8960C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#B8960C] text-white px-[28px] py-[12px] rounded-[6px] font-medium text-[15px] hover:bg-[#9a7d0a] transition-colors">
                    Enquire About Rice Supply →
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

function ProductCard({ product, idx }: { product: any, idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.07 }}
      className="group bg-white rounded-[12px] shadow-sm hover:shadow-xl transition-all duration-350 hover:-translate-y-[6px] overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[12px] font-bold ${
          product.tagColor === 'yellow' ? 'bg-[#B8960C] text-white' : 'bg-[#0D2E3D] text-white'
        }`}>
          {product.tag}
        </div>
      </div>
      <div className="p-[20px] flex flex-col flex-grow">
        <h3 className="text-[#0D2E3D] font-bold text-[16px] mb-2">{product.title}</h3>
        <p className="text-[#4B5563] text-[14px] leading-[1.6] mb-4 flex-grow">{product.desc}</p>
        <Link href="#" className="text-[#B8960C] font-medium text-[14px] hover:underline mt-auto inline-flex items-center">
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
