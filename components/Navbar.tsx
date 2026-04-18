"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X, Search, Globe, ClipboardList, ChevronDown, Factory, Wheat, Truck } from "lucide-react";
import Link from "next/link";
import { SearchPanel } from "./navbar/SearchPanel";
import { LanguageSelector } from "./navbar/LanguageSelector";
import { QuoteModal } from "./navbar/QuoteModal";
import { ToastSystem, ToastMessage } from "./navbar/ToastSystem";

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  
  const showToast = (type: "success" | "error" | "info", message: string) => {
    const id = Math.random().toString(36).substring(7);
    setToasts(prev => [...prev, { id, type, message }]);
    
    // Auto remove logic
    if (type !== "success") {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, type === "error" ? 3000 : 2500);
    }
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };
  
  const [homeHover, setHomeHover] = useState(false);
  const [businessHover, setBusinessHover] = useState(false);
  
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const businessTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  const isBusinessActive = ["/hoque-mercantile", "/hoque-industries", "/hoque-logistics", "/group-companies"].includes(pathname);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#ffc107] z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main Navbar */}
      <motion.header 
        className={`fixed w-full z-[1000] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isScrolled 
            ? "top-0 bg-[#0D2E3D] shadow-[0_2px_20px_rgba(0,0,0,0.25)] h-[60px]" 
            : "top-0 bg-[#0D2E3D] shadow-none h-[72px]"
        }`}
      >
        <nav className="flex justify-between items-center w-full h-full pr-[32px] pl-[32px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity duration-250 ease-out focus:outline-none focus:ring-2 focus:ring-[#B8960C] focus:ring-offset-2 focus:ring-offset-[#0D2E3D] rounded-sm">
             <div className="flex flex-col leading-none text-white">
                <span className="tracking-[-0.02em] font-playfair font-bold text-[26px]">HOQUE</span>
                <span className="text-[10px] tracking-[0.18em] mt-[4px] font-inter font-medium text-white">QUALITY IS IDENTITY</span>
             </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center h-full ml-auto mr-12">
            
            {/* Home Dropdown */}
            <div 
              className="relative h-full flex items-center group cursor-pointer"
              onMouseEnter={() => setHomeHover(true)}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => setHomeHover(false), 150);
              }}
            >
              <div
                className={`relative font-inter font-medium whitespace-nowrap transition-colors duration-300 ease-out flex items-center text-[15px] ${
                  pathname === "/" ? "text-[#B8960C]" : "text-white group-hover:text-[#B8960C]"
                }`}
                tabIndex={0}
                role="button"
                aria-haspopup="true"
                aria-expanded={homeHover}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHomeHover(!homeHover);
                  }
                  if (e.key === 'Escape') {
                    setHomeHover(false);
                  }
                }}
              >
                Home
                <ChevronDown className={`w-[14px] h-[14px] ml-[4px] transition-transform duration-300 ease-out ${homeHover ? 'rotate-180' : 'rotate-0'}`} />
                <span className={`absolute -bottom-[1px] left-0 w-full h-[2px] bg-[#B8960C] origin-left transition-transform duration-300 ease-out ${pathname === "/" ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </div>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {homeHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute top-full left-0 mt-[8px] min-w-[200px] bg-white rounded-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.16)] py-[8px] flex flex-col z-50 overflow-hidden"
                  >
                    {[
                      { name: "Home", href: "/" },
                      { name: "About Us", href: "/about" },
                      { name: "Services", href: "/services" },
                      { name: "Contact", href: "/contact" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        href={item.href}
                        className="w-full text-left px-[20px] py-[12px] font-inter text-[14px] font-medium text-[#0D2E3D] border-l-[3px] border-transparent hover:border-[#B8960C] hover:bg-[#B8960C]/[0.06] hover:text-[#B8960C] transition-all duration-200 focus:outline-none focus:bg-[#B8960C]/[0.06] focus:text-[#B8960C] focus:border-[#B8960C]"
                        onClick={() => setHomeHover(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Plain Link: About Us */}
            <Link 
              href="/about"
              className={`relative font-inter font-medium whitespace-nowrap transition-colors duration-250 ease-out flex items-center text-[15px] focus:outline-none focus:text-[#B8960C] ${
                pathname === "/about" ? "text-[#B8960C]" : "text-white hover:text-[#B8960C]"
              }`}
            >
              About Us
              {pathname === "/about" && <span className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-[#B8960C] scale-x-100"></span>}
            </Link>

            {/* Our Business Dropdown */}
            <div 
              className="relative h-full flex items-center group cursor-pointer"
              onMouseEnter={() => setBusinessHover(true)}
              onMouseLeave={() => {
                businessTimeoutRef.current = setTimeout(() => setBusinessHover(false), 150);
              }}
            >
              <div
                className={`relative font-inter font-medium whitespace-nowrap transition-colors duration-300 ease-out flex items-center text-[15px] ${
                  isBusinessActive ? "text-[#B8960C]" : "text-white group-hover:text-[#B8960C]"
                }`}
                tabIndex={0}
                role="button"
                aria-haspopup="true"
                aria-expanded={businessHover}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setBusinessHover(!businessHover);
                  }
                  if (e.key === 'Escape') {
                    setBusinessHover(false);
                  }
                }}
              >
                Our Business
                <ChevronDown className={`w-[14px] h-[14px] ml-[4px] transition-transform duration-300 ease-out ${businessHover ? 'rotate-180' : 'rotate-0'}`} />
                <span className={`absolute -bottom-[1px] left-0 w-full h-[2px] bg-[#B8960C] origin-left transition-transform duration-300 ease-out ${isBusinessActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </div>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {businessHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute top-full left-0 mt-[8px] min-w-[260px] bg-white rounded-[10px] shadow-[0_8px_40px_rgba(0,0,0,0.18)] py-[12px] flex flex-col z-50 overflow-hidden"
                  >
                    <div className="font-inter text-[10px] font-bold tracking-[0.14em] text-[#9CA3AF] px-[20px] pt-[10px] pb-[6px] uppercase">
                      Group Companies
                    </div>
                    <div className="w-[calc(100%-40px)] mx-[20px] h-[1px] bg-[#B8960C] opacity-30 mb-[4px]"></div>

                    {[
                      { name: "Hoque Mercantile Pvt Ltd", desc: "Agricultural Export and Rice Mill", icon: Wheat, href: "/hoque-mercantile" },
                      { name: "Hoque Industries Pvt Ltd", desc: "Star Export House — Govt. Recognized", icon: Factory, href: "/hoque-industries" },
                      { name: "Hoque Logistics Pvt Ltd", desc: "Transport and Logistics Solutions", icon: Truck, href: "/hoque-logistics" }
                    ].map((item, idx) => (
                      <Link 
                        key={idx}
                        href={item.href}
                        className="w-full flex items-center gap-[12px] px-[20px] py-[14px] border-l-[3px] border-transparent hover:border-[#B8960C] hover:bg-[#B8960C]/[0.06] transition-all duration-200 group/item focus:outline-none focus:bg-[#B8960C]/[0.06] focus:border-[#B8960C]"
                        onClick={() => setBusinessHover(false)}
                      >
                        <div className="w-[32px] h-[32px] rounded-full bg-[#0D2E3D] flex items-center justify-center shrink-0 group-hover/item:bg-[#B8960C] transition-colors duration-200">
                          <item.icon className="w-[16px] h-[16px] text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-inter text-[14px] font-bold text-[#0D2E3D]">{item.name}</span>
                          <span className="font-inter text-[12px] text-[#6B7280] leading-tight mt-[2px]">{item.desc}</span>
                        </div>
                      </Link>
                    ))}

                    <div className="w-[calc(100%-40px)] mx-[20px] h-[1px] bg-[#E5E7EB] my-[6px]"></div>
                    <Link 
                      href="/group-companies" 
                      className="w-full px-[20px] py-[10px] font-inter text-[13px] font-semibold text-[#B8960C] hover:underline focus:outline-none focus:underline"
                      onClick={() => setBusinessHover(false)}
                    >
                      View All Group Companies →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Plain Links */}
            {[
              { name: "Services", href: "/services" },
              { name: "Pages", href: "/pages" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`relative font-inter font-medium whitespace-nowrap transition-colors duration-250 ease-out flex items-center text-[15px] focus:outline-none focus:text-[#B8960C] ${
                  pathname === item.href ? "text-[#B8960C]" : "text-white hover:text-[#B8960C]"
                }`}
              >
                {item.name}
                {pathname === item.href && <span className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-[#B8960C] scale-x-100"></span>}
              </Link>
            ))}
          </div>
          
          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              className="text-white hover:text-[#B8960C] transition-colors duration-250 focus:outline-none focus:text-[#B8960C] hover:scale-110 active:scale-95 transform-gpu"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-[20px] h-[20px]" />
            </button>
            <LanguageSelector showToast={showToast} />
            <button 
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#B8960C] text-white px-[24px] py-[10px] rounded-[7px] font-inter font-bold tracking-wide hover:bg-[#9A7B0A] hover:-translate-y-[2px] hover:shadow-[0_6px_22px_rgba(184,150,12,0.5)] active:scale-[0.97] active:translate-y-0 active:shadow-[0_2px_10px_rgba(184,150,12,0.4)] transition-all duration-250 whitespace-nowrap flex items-center gap-[7px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#B8960C] focus:ring-offset-2 focus:ring-offset-[#0D2E3D]"
            >
              <ClipboardList className="w-[16px] h-[16px]" />
              Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              className="text-white hover:text-[#B8960C] transition-colors focus:outline-none"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-[20px] h-[20px]" />
            </button>
            <button 
              onClick={() => setIsQuoteOpen(true)}
              className="bg-[#B8960C] text-white px-[16px] py-[8px] rounded-[6px] font-inter font-bold tracking-wide hover:bg-[#9A7B0A] active:scale-[0.97] transition-all duration-250 whitespace-nowrap flex items-center gap-[7px] text-[14px]"
            >
              <ClipboardList className="w-[14px] h-[14px]" />
              Quote
            </button>
            <button 
              className="text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-[24px] h-[24px]" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* External Components */}
      <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} showToast={showToast} />
      <ToastSystem toasts={toasts} removeToast={removeToast} />

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[1001] bg-[#0D2E3D] pt-[24px] px-[32px] overflow-y-auto overflow-x-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="flex justify-end mb-[16px]">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#B8960C] transition-colors focus:outline-none"
                aria-label="Close Menu"
              >
                <X className="w-[32px] h-[32px]" />
              </button>
            </div>

            <div className="flex flex-col text-[#0D2E3D]">
              
              {/* Home Mobile Link with native subitems */}
              <div className="w-full relative">
                <button 
                  className={`w-full h-[52px] flex items-center justify-between font-bold text-[18px] border-b border-white/[0.08] ${mobileHomeOpen ? 'text-[#B8960C]' : 'text-white'}`}
                  onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                >
                  Home
                  <ChevronDown className={`w-[18px] h-[18px] transition-transform ${mobileHomeOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                <AnimatePresence>
                  {mobileHomeOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col pl-[16px] overflow-hidden"
                    >
                      {[
                        { name: "Home Dashboard", href: "/" },
                        { name: "About Us", href: "/about" },
                        { name: "Services", href: "/services" },
                        { name: "Contact", href: "/contact" }
                      ].map((sub, idx) => (
                        <Link 
                          key={idx} 
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="w-full py-[12px] text-white flex items-center gap-[12px] font-medium text-[14px]"
                        >
                          <div className="w-[4px] h-[4px] rounded-full bg-[#B8960C]"></div>
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

               <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-[52px] flex items-center font-bold text-[18px] border-b border-white/[0.08] text-white"
              >
                About Us
              </Link>

              {/* Our Business Mobile Link */}
               <div className="w-full relative">
                <button 
                  className={`w-full h-[52px] flex items-center justify-between font-bold text-[18px] border-b border-white/[0.08] ${mobileBusinessOpen ? 'text-[#B8960C]' : 'text-white'}`}
                  onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
                >
                  Our Business
                  <ChevronDown className={`w-[18px] h-[18px] transition-transform ${mobileBusinessOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                <AnimatePresence>
                  {mobileBusinessOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col pl-[16px] overflow-hidden"
                    >
                      {[
                        { name: "Hoque Mercantile Pvt Ltd", href: "/hoque-mercantile" },
                        { name: "Hoque Industries Pvt Ltd", href: "/hoque-industries" },
                        { name: "Hoque Logistics Pvt Ltd", href: "/hoque-logistics" },
                        { name: "View All Group Companies", href: "/group-companies" }
                      ].map((sub, idx) => (
                        <Link 
                          key={idx} 
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`w-full py-[12px] text-white flex items-center gap-[12px] font-medium text-[14px] ${idx === 3 ? "text-[#B8960C]" : ""}`}
                        >
                          <div className={`w-[4px] h-[4px] rounded-full ${idx === 3 ? "bg-transparent" : "bg-[#B8960C]"}`}></div>
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining Mobile Links */}
              {[
                { name: "Services", href: "/services" },
                { name: "Pages", href: "/pages" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ].map((item, idx) => (
                <Link 
                  key={idx}
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full h-[52px] flex items-center font-bold text-[18px] text-white ${idx !== 3 ? 'border-b border-white/[0.08]' : ''}`}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
