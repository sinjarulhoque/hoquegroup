"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Phone, Mail, Facebook, Twitter, Youtube, Instagram, Search, Globe, ClipboardList, ChevronDown } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex w-full h-12 items-center z-[60] bg-[#0a1e2f] text-white text-sm font-medium px-8 justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#ffc107]" />
            <span>+01-246-357 ( Any time 24/7 )</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#ffc107]" />
            <span>support@botble.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#ffc107] transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#ffc107] transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#ffc107] transition-colors"><Youtube className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#ffc107] transition-colors"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
      
      {/* Main Navbar */}
      <motion.header 
        className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-4`}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
             <div className="text-3xl font-bold text-[#4a789c] flex flex-col leading-none">
                <span className="tracking-widest font-serif">HOQUE</span>
                <span className="text-[10px] text-gray-800 tracking-widest mt-1 font-sans font-bold">QUALITY IS IDENTITY</span>
             </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-3 lg:gap-6 xl:gap-8 items-center">
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Pages", href: "#pages" },
              { name: "Blog", href: "#blog" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`font-medium whitespace-nowrap transition-colors duration-300 flex items-center gap-1 text-[#0a1e2f] hover:text-[#ffc107] text-sm lg:text-base`}
              >
                {item.name}
                {["Home", "Services", "Pages", "Blog"].includes(item.name) && <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />}
              </a>
            ))}
          </div>
          
          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            <button className="text-[#0a1e2f] hover:text-[#ffc107] transition-colors">
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <div className="flex items-center gap-1 lg:gap-2 text-[#0a1e2f] cursor-pointer hover:text-[#ffc107] transition-colors">
              <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-medium text-sm lg:text-base">English</span>
            </div>
            <a href="#contact" className="bg-[#ffc107] text-[#0a1e2f] px-3 py-2 lg:px-6 lg:py-3 rounded font-semibold tracking-wide hover:bg-[#e0a800] active:scale-95 transition-all whitespace-nowrap flex items-center gap-1 lg:gap-2 text-sm lg:text-base">
              <ClipboardList className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden xl:inline">Get a quote</span>
              <span className="xl:hidden">Quote</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#0a1e2f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-32 px-8">
          <div className="flex flex-col gap-6 text-lg font-medium text-[#0a1e2f]">
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Pages", href: "#pages" },
              { name: "Blog", href: "#blog" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>{item.name}</a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#ffc107] text-[#0a1e2f] px-6 py-3 rounded font-semibold tracking-wide mt-4 flex items-center justify-center gap-2">
              <ClipboardList className="w-5 h-5" />
              Get a quote
            </a>
          </div>
        </div>
      )}
    </>
  );
}
