"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Phone, Mail, Facebook, Twitter, Youtube, Instagram, Search, Globe, ClipboardList, ChevronDown } from "lucide-react";

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "about", "services", "pages", "blog", "contact"];
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (pathname !== "/") {
        router.push(`/${href}`);
        setIsMobileMenuOpen(false);
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80; // Match scroll-padding-top
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#ffc107] z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Top Bar */}
      <div className="hidden md:flex w-full h-12 items-center z-[60] bg-[#0a1e2f] text-white text-sm font-medium px-8 justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#ffc107]" />
            <span>1800 833 9331 (Toll Free)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#ffc107]" />
            <span>info@hoquegroup.com</span>
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
        className={`fixed w-full z-50 transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isScrolled 
            ? "top-0 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)] py-2 h-[64px]" 
            : "top-0 md:top-12 bg-transparent shadow-none py-4 h-[80px]"
        }`}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
             <div className={`text-3xl font-bold flex flex-col leading-none transition-colors duration-[400ms] ${isScrolled ? "text-[#0a1e2f]" : "text-white"}`}>
                <span className="tracking-widest font-serif">HOQUE</span>
                <span className={`text-[10px] tracking-widest mt-1 font-sans font-bold transition-colors duration-[400ms] ${isScrolled ? "text-gray-800" : "text-gray-200"}`}>QUALITY IS IDENTITY</span>
             </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-3 lg:gap-6 xl:gap-8 items-center h-full">
            {[
              { name: "Home", href: "#home", id: "home" },
              { name: "About Us", href: "#about", id: "about" },
              { name: "Services", href: "#services", id: "services" },
              { name: "Pages", href: "#pages", id: "pages" },
              { name: "Blog", href: "#blog", id: "blog" },
              { name: "Contact", href: "#contact", id: "contact" }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleScroll(e, item.href)}
                className={`relative font-medium whitespace-nowrap transition-colors duration-[400ms] flex items-center gap-1 text-sm lg:text-base group ${
                  isScrolled 
                    ? activeSection === item.id ? "text-[#ffc107]" : "text-[#0a1e2f] hover:text-[#ffc107]" 
                    : activeSection === item.id ? "text-[#ffc107]" : "text-white hover:text-[#ffc107]"
                }`}
              >
                {item.name}
                {["Home", "Services", "Pages", "Blog"].includes(item.name) && <ChevronDown className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors duration-[400ms] ${isScrolled ? "text-gray-400" : "text-gray-300"}`} />}
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#ffc107] origin-left transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </div>
          
          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            <button className={`transition-colors duration-[400ms] hover:text-[#ffc107] ${isScrolled ? "text-[#0a1e2f]" : "text-white"}`}>
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <div className={`flex items-center gap-1 lg:gap-2 cursor-pointer hover:text-[#ffc107] transition-colors duration-[400ms] ${isScrolled ? "text-[#0a1e2f]" : "text-white"}`}>
              <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-medium text-sm lg:text-base">English</span>
            </div>
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="bg-[#ffc107] text-[#0a1e2f] px-3 py-2 lg:px-6 lg:py-3 rounded font-semibold tracking-wide hover:bg-[#D4A80E] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(245,197,24,0.4)] active:scale-[0.97] active:translate-y-0 active:shadow-none transition-all duration-250 whitespace-nowrap flex items-center gap-1 lg:gap-2 text-sm lg:text-base">
              <ClipboardList className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden xl:inline">Get a quote</span>
              <span className="xl:hidden">Quote</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden transition-colors duration-[400ms] ${isScrolled ? "text-[#0a1e2f]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div 
        className="fixed inset-0 z-40 bg-white pt-32 px-8 overflow-hidden"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{ 
          maxHeight: isMobileMenuOpen ? "100vh" : 0, 
          opacity: isMobileMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex flex-col gap-6 text-lg font-medium text-[#0a1e2f]">
          {[
            { name: "Home", href: "#home", id: "home" },
            { name: "About Us", href: "#about", id: "about" },
            { name: "Services", href: "#services", id: "services" },
            { name: "Pages", href: "#pages", id: "pages" },
            { name: "Blog", href: "#blog", id: "blog" },
            { name: "Contact", href: "#contact", id: "contact" }
          ].map((item, i) => (
            <motion.a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleScroll(e, item.href)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.1 + (i * 0.06) : 0 }}
              className={activeSection === item.id ? "text-[#ffc107]" : ""}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            onClick={(e) => handleScroll(e, "#contact")} 
            className="bg-[#ffc107] text-[#0a1e2f] px-6 py-3 rounded font-semibold tracking-wide mt-4 flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
            transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.1 + (6 * 0.06) : 0 }}
          >
            <ClipboardList className="w-5 h-5" />
            Get a quote
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
