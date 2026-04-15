"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYmPynJGrHRPuAF8FkqmQDJsmeBYKpykI-kLe9s3o1nefg97MKpX7BdVuPMePJeFPyon2HAApuZz7lF73kzAaPVuuMGf1tOKZdu-RYWLAY_k2JwiyhEEkCJN5tNOaTicGrQycYSPNDQxQ8JYL2aTFiWZqA9BHjXP6qmi3BMshNBWm-PrnXrDRe-k9Jo2BMK0BVvBIqfHAAN9eIwHYb1XfY-sOeR3WWHLsFDTFzS7g0uqJxhWgefH5LwTCdZk_IIsUZX3LzDGgk3g",
    title: "Digital and Trusted Import Export Company",
    highlight: "Import Export",
    description: "Pioneering global trade with architectural precision and unyielding integrity since 2015."
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALo0yzgsEQx1o1Fm6nRkRERU14vfA1lOXw7vr28AKakMHuRGadzkrfKMNmcOlVoCIqyBUbeqgWrbUIFH3L67F4Rtzzst4fbwjamDkQe1jl_Ipk0NV7t-NHdIZn8dS2UkgueWiY_KN0wViXfj8oAKr2pjAxgIkq1jxbj8Y7tS_DqSU2iiwPl9sz3-EmwJXCK2bWHbyDRmGo4MzQSFEFd_qPsSeUcrVWRgJE_byDGL7EyeLsKGhALk0quTOzLgIU2-aYWn4VFG0YYQ",
    title: "National Logistics Grid Optimization",
    highlight: "Logistics Grid",
    description: "Comprehensive fleet management and last-mile delivery solutions across India."
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1wur94wwz0rZjLL6zX-tZEIN_mi4uUMoYTddDaMrTeR6TZfV4c5tTh8DAxxHrt1p39n4ehwxM8SFXRaM2bsbv05yDHx8wKdPxGpXEHJJ_zXCUwpI8tz3Q7ojFpBNPLGTBGVm-YdPYZmdBJxSCyuCVdm11rqphVfU-9JY6uKKrd2TcuI3nZkeof6Zc4kig01P3Ov-7s735D15KsomjFcCaaS59mfpdEaw45X0RT3zyrOANtM_U5TFALhPdMV_Bo1h6_u-Xh4Wc8A",
    title: "Global Export Hub Trade Corridors",
    highlight: "Export Hub",
    description: "Facilitating energy security through strategic global sourcing and distribution."
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer on manual slide change

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl space-y-6">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.3, delay: 0 } }}
              transition={{ 
                duration: 0.65, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1
              }}
            >
              <h1 className="text-white font-headline text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                {slides[currentSlide].title.replace(slides[currentSlide].highlight, "")}
                <span className="text-secondary-container">{slides[currentSlide].highlight}</span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.3, delay: 0 } }}
                transition={{ 
                  duration: 0.65, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.25
                }}
                className="text-on-primary-container text-xl leading-relaxed font-light mt-6"
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.3, delay: 0 } }}
              transition={{ 
                duration: 0.65, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4
              }}
              className="flex flex-wrap items-center gap-4 md:gap-8 pt-8"
            >
              {["APEDA", "BNCCI", "IEC"].map((cert) => (
                <div key={cert} className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg flex items-center justify-center border border-white/5">
                  <span className="text-white font-bold text-lg">{cert}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-white/20 z-30">
        <motion.div 
          key={currentSlide}
          className="h-full bg-[#ffc107] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/10 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/10 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              idx === currentSlide ? "w-3 h-3 bg-[#ffc107]" : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
