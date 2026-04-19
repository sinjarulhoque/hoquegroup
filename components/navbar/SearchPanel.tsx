"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const searchContent = [
  { title: "Hoque Mercantile Pvt Ltd", desc: "Agricultural export specialist — Rice, Onion, Fruits", url: "/hoque-mercantile", tag: "Company" },
  { title: "Hoque Industries Pvt Ltd", desc: "Star Export House — Government recognized", url: "/hoque-industries", tag: "Company" },
  { title: "Hoque Logistics Pvt Ltd", desc: "Pan-India transport and logistics solutions", url: "/hoque-logistics", tag: "Company" },
  { title: "Kadbanu Charitable Trust", desc: "CSR wing — Education, Healthcare, Rural welfare", url: "/kadbanu-trust", tag: "CSR" },
  { title: "Rice Export", desc: "Basmati and non-basmati rice export to Bangladesh", url: "/hoque-mercantile", tag: "Product" },
  { title: "Red Onion Export", desc: "Fresh red onion export to Bangladesh and UAE", url: "/hoque-mercantile", tag: "Product" },
  { title: "Mustard De-oiled Cake", desc: "Agricultural by-product export", url: "/hoque-industries", tag: "Product" },
  { title: "Rapeseed De-oiled Cake", desc: "Livestock feed export product", url: "/hoque-industries", tag: "Product" },
  { title: "Stone Chips and Boulders", desc: "Construction material export", url: "/hoque-mercantile", tag: "Product" },
  { title: "Steam Coal Import", desc: "High grade non-coking steam coal from Indonesia", url: "/hoque-mercantile", tag: "Product" },
  { title: "Air Freight", desc: "Global air freight logistics services", url: "/hoque-logistics", tag: "Service" },
  { title: "Ocean Freight", desc: "International sea cargo logistics", url: "/hoque-logistics", tag: "Service" },
  { title: "Ground Transport", desc: "Pan-India road transportation", url: "/hoque-logistics", tag: "Service" },
  { title: "Warehousing", desc: "Domestic warehousing and distribution", url: "/hoque-logistics", tag: "Service" },
  { title: "Contract Logistics", desc: "Long-term customized logistics contracts", url: "/hoque-logistics", tag: "Service" },
  { title: "Cargo Express", desc: "Express domestic cargo delivery", url: "/hoque-logistics", tag: "Service" },
  { title: "Rice Mill Murshidabad", desc: "Modern rice mill at Murshidabad West Bengal", url: "/hoque-mercantile", tag: "Facility" },
  { title: "Star Export House", desc: "Recognized by DGFT Government of India", url: "/hoque-industries", tag: "Credential" },
  { title: "APEDA Member", desc: "Ministry of Commerce and Industry certification", url: "/hoque-industries", tag: "Credential" },
  { title: "Contact Us", desc: "Get in touch with Hoque Group of Industries", url: "/contact", tag: "Page" },
  { title: "About Us", desc: "Learn about Hoque Group of Industries", url: "/about", tag: "Page" },
  { title: "Get a Quote", desc: "Submit an export or logistics enquiry", url: "/contact", tag: "Page" }
];

const tagColors: Record<string, string> = {
  Company: "bg-[#0D2E3D] text-white",
  Product: "bg-[#065F46] text-white",
  Service: "bg-[#1E40AF] text-white",
  CSR: "bg-[#7C3AED] text-white",
  Credential: "bg-[#B8960C] text-white",
  Page: "bg-[#6B7280] text-white",
  Facility: "bg-[#9D174D] text-white",
};

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(typeof searchContent !== 'undefined' ? searchContent : []);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      const timer = setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults([]);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFocusedIndex(-1);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!query.trim()) {
        setResults([]);
        setFocusedIndex(-1);
        return;
      }
      const lowerQuery = query.toLowerCase();
      const filtered = searchContent.filter(
        item => item.title.toLowerCase().includes(lowerQuery) || item.desc.toLowerCase().includes(lowerQuery)
      ).slice(0, 6);
      setResults(filtered);
      setFocusedIndex(-1);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      if (focusedIndex >= 0 && focusedIndex < results.length) {
        handleResultClick(results[focusedIndex].url);
      }
    }
  };

  const handleResultClick = (url: string) => {
    router.push(url);
    onClose();
  };

  return (
    <AnimatePresence onExitComplete={() => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }}>
      {isOpen && (
        <>
          {/* Invisible overlay to catch clicks outside results dropdown and close panel */}
          <motion.div 
            className="fixed inset-0 z-[10001] bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -64, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-[72px] left-0 right-0 h-[64px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] z-[10001] flex flex-col pointer-events-auto"
          >
            <div className="flex-1 flex flex-row items-center px-[20px] md:px-[40px] gap-[16px]">
              <Search className="w-[20px] h-[20px] text-[#B8960C] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for products, services, or company information..."
                className="flex-1 h-full bg-transparent border-none outline-none font-inter text-[15px] md:text-[16px] text-[#0D2E3D] placeholder-[#9CA3AF]"
              />
              <button
                onClick={onClose}
                className="p-[8px] rounded-[4px] hover:bg-black/5 transition-colors duration-200 group cursor-pointer"
                aria-label="Close search"
              >
                <X className="w-[20px] h-[20px] text-[#6B7280] group-hover:text-[#B8960C] transition-colors" />
              </button>
            </div>
            
            <motion.div 
              className="h-[2px] bg-[#B8960C] origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            {/* Results Dropdown */}
            {query.trim() && (
              <motion.div
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: 360, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-[64px] left-0 w-full bg-white rounded-b-[12px] shadow-[0_12px_32px_rgba(0,0,0,0.15)] overflow-y-auto max-h-[360px]"
              >
                {results.length > 0 ? (
                  <div className="flex flex-col">
                    {results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.04 }}
                        onMouseEnter={() => setFocusedIndex(idx)}
                        onClick={() => handleResultClick(result.url)}
                        className={`flex items-center gap-[14px] px-[20px] md:px-[40px] py-[14px] cursor-pointer border-b-[1px] border-[#F3F4F6] last:border-0 transition-colors duration-200 ${
                          focusedIndex === idx ? "bg-[#B8960C]/[0.05]" : "hover:bg-[#B8960C]/[0.05]"
                        }`}
                      >
                        <span className={`px-[8px] py-[3px] rounded-[20px] font-inter text-[10px] font-bold tracking-[0.1em] uppercase shrink-0 ${tagColors[result.tag] || "bg-gray-200"}`}>
                          {result.tag}
                        </span>
                        <div className="flex flex-col flex-1">
                          <span className="font-inter font-bold text-[15px] text-[#0D2E3D]">{result.title}</span>
                          <span className="font-inter text-[13px] text-[#6B7280]">{result.desc}</span>
                        </div>
                        <ArrowRight className="w-[16px] h-[16px] text-[#B8960C] shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="px-[20px] md:px-[40px] py-[20px] flex items-center gap-[12px]">
                    <Search className="w-[20px] h-[20px] text-gray-400" />
                    <span className="font-inter text-[15px] text-gray-500">
                      No results found for &apos;{query}&apos; &mdash; Try a different search term.
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
