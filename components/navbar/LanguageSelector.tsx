"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, ChevronDown, Check } from "lucide-react";

interface Language {
  code: string;
  name: string;
  native: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", native: "English", flag: "🇬🇧" },
  { code: "bn", name: "Bengali", native: "বাংলা", flag: "🇧🇩" },
  { code: "hi", name: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { code: "ar", name: "Arabic", native: "العربية", flag: "🇸🇦" },
  { code: "ur", name: "Urdu", native: "اردو", flag: "🇵🇰" }
];

interface LanguageSelectorProps {
  showToast: (type: "success" | "error" | "info", message: string) => void;
}

export function LanguageSelector({ showToast }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("hoque_lang");
    if (saved) {
      const found = languages.find(l => l.code === saved);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (found) setSelectedLang(found);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (lang: Language) => {
    setSelectedLang(lang);
    localStorage.setItem("hoque_lang", lang.code);
    setIsOpen(false);
    showToast("info", `Language set to ${lang.name} ${lang.flag}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[5px] text-white hover:text-[#B8960C] hover:bg-white/[0.06] transition-all duration-250 ease-out px-[10px] py-[6px] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#B8960C]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-[18px] h-[18px]" />
        
        <div className="overflow-hidden relative w-[54px] h-[20px] flex items-center">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={selectedLang.code}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 font-inter font-medium text-[14px]"
            >
              {selectedLang.name}
            </motion.span>
          </AnimatePresence>
        </div>
        
        <ChevronDown 
          className={`w-[11px] h-[11px] transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: "top right" }}
            className="absolute top-[calc(100%+10px)] right-0 md:right-0 bg-white rounded-[12px] shadow-[0_8px_36px_rgba(0,0,0,0.18)] w-[220px] z-[10002] overflow-hidden"
            role="listbox"
          >
            <div className="font-inter text-[10px] font-bold tracking-[0.15em] text-[#9CA3AF] px-[16px] pt-[12px] pb-[8px] uppercase">
              Select Language
            </div>
            <div className="w-[calc(100%-32px)] mx-[16px] h-[1px] bg-[#B8960C] opacity-30 mb-[4px]"></div>

            <div className="flex flex-col pb-[4px]">
              {languages.map((lang) => {
                const isActive = lang.code === selectedLang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang)}
                    className={`flex items-center gap-[12px] px-[16px] py-[12px] text-left transition-colors duration-200 focus:outline-none focus:bg-[#B8960C]/[0.07] hover:bg-[#B8960C]/[0.07] hover:text-[#B8960C] group ${
                      isActive ? "bg-[#B8960C]/[0.06] border-l-[3px] border-[#B8960C]" : "border-l-[3px] border-transparent"
                    }`}
                    role="option"
                    aria-selected={isActive}
                  >
                    <span className="text-[20px] leading-none shrink-0">{lang.flag}</span>
                    <div className="flex flex-col flex-1">
                      <span className={`font-inter font-bold text-[14px] leading-tight group-hover:text-[#B8960C] transition-colors ${isActive ? "text-[#B8960C]" : "text-[#0D2E3D]"}`}>
                        {lang.name}
                      </span>
                      <span className="font-inter text-[12px] text-[#6B7280] leading-tight mt-[2px]">{lang.native}</span>
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Check className="w-[16px] h-[16px] text-[#B8960C] shrink-0" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
