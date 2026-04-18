"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { img: "https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-1.jpg", caption: "Community Service", isTall: true },
  { img: "https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-2.jpg", caption: "Educational Support", isTall: false },
  { img: "https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-3.jpg", caption: "Medical Health Camp", isTall: false },
  { img: "https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-4.jpg", caption: "Winter Relief Distribution", isTall: true },
  { img: "https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-8.jpg", caption: "Awareness Programme", isTall: false },
  { img: "https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-9.jpg", caption: "Rural Outreach", isTall: false },
  { img: "https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-10.jpg", caption: "Community Welfare", isTall: true },
  { img: "https://www.hoquegroup.com/wp-content/themes/hmplTheme/images/big/kadbanu-11.jpg", caption: "Wedding Support Program", isTall: false }
];

export function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="gallery" className="bg-white py-[100px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            OUR RECENT WORK
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[42px] font-playfair font-bold mb-4 leading-tight">
            Moments from the Field
          </h2>
          <p className="text-gray-600 text-[16px] max-w-[560px] mx-auto text-center">
            Real work. Real people. Real impact. Every image tells the story of a community we have touched.
          </p>
          <div className="w-[48px] h-[3px] bg-[#B8960C] mt-8" />
        </div>

        {/* CSS Masonry Layout */}
        <div className="columns-1 md:columns-2 gap-4 space-y-4 pt-12">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-[12px] group cursor-pointer inline-block w-full ${item.isTall ? "h-[450px]" : "h-[300px]"}`}
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={item.img}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.08]"
                referrerPolicy="no-referrer"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-[#0D2E3D]/0 group-hover:bg-[#0D2E3D]/65 transition-all duration-400 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2E3D] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out h-1/2 mt-auto" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-75 pointer-events-none">
                <h4 className="text-white font-bold text-[15px] text-center">{item.caption}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" onClick={closeLightbox}>
              <X className="w-10 h-10" />
            </button>
            <button className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" onClick={prev}>
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors" onClick={next}>
              <ChevronRight className="w-12 h-12" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-[90vw] h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[90%]">
                <Image
                  src={photos[currentIndex].img}
                  alt={photos[currentIndex].caption}
                  fill
                  className="object-contain rounded-[8px]"
                  unoptimized
                />
              </div>
              <div className="text-white text-[16px] font-medium mt-6 text-center w-full">
                {photos[currentIndex].caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
