"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X, Lock } from "lucide-react";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CATEGORIES = [
  {
    id: "necessary" as const,
    name: "Necessary",
    description: "These cookies are essential for the website to function correctly. They enable core features like navigation, security, and form submissions. These cannot be disabled.",
    required: true,
    details: [
      { code: "_session", desc: "User session management" },
      { code: "_csrf", desc: "Security protection" },
      { code: "_lang", desc: "Language preference storage" }
    ]
  },
  {
    id: "analytics" as const,
    name: "Analytics",
    description: "These cookies help us understand how visitors interact with our website — which pages are visited most, how long users stay, and where they come from. All data is anonymous.",
    required: false,
    defaultOn: false,
    details: [
      { code: "_ga", desc: "Google Analytics user tracking" },
      { code: "_gid", desc: "Google Analytics session" },
      { code: "_gtag", desc: "Google Analytics tag" }
    ]
  },
  {
    id: "marketing" as const,
    name: "Marketing",
    description: "These cookies track your browsing activity to show you relevant advertisements and promotional content related to Hoque Group products and services.",
    required: false,
    defaultOn: false,
    details: [
      { code: "_fbp", desc: "Facebook Pixel tracking" },
      { code: "_gcl_au", desc: "Google Ads conversion" }
    ]
  },
  {
    id: "preferences" as const,
    name: "Preferences",
    description: "These cookies remember your settings and choices — such as language preference, region, and display options — to personalise your experience on return visits.",
    required: false,
    defaultOn: true,
    details: [
      { code: "hoque_lang", desc: "Site language setting" },
      { code: "hoque_theme", desc: "Display preferences" }
    ]
  }
];

export function CookieConsent() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: true
  });

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const val = localStorage.getItem("hoque_cookie_consent");
    if (val) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasConsented(true);
      try {
        const parsed = JSON.parse(val);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPrefs({
          necessary: true,
          analytics: !!parsed.analytics,
          marketing: !!parsed.marketing,
          preferences: !!parsed.preferences
        });
        
        // Initialize scripts if needed based on `parsed` values here
        if (parsed.analytics) console.log("Analytics initialized");
        if (parsed.marketing) console.log("Marketing initialized");
        if (parsed.preferences) console.log("Preferences initialized");
        
      } catch(e) {}
    } else {
      const timer = setTimeout(() => {
        setIsBannerVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }

    const handleOpen = () => setIsModalVisible(true);
    window.addEventListener("open-cookie-preferences", handleOpen);
    return () => window.removeEventListener("open-cookie-preferences", handleOpen);
  }, []);

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift from scrollbar
    }
  }, [isModalVisible]);

  const handleSave = (method: string, newPrefs: CookiePreferences) => {
    const data = {
      timestamp: new Date().toISOString(),
      version: "1.0",
      ...newPrefs,
      method
    };
    localStorage.setItem("hoque_cookie_consent", JSON.stringify(data));
    
    // Simulate conditional initialization
    if (data.analytics) console.log("Analytics initialized");
    if (data.marketing) console.log("Marketing initialized");
    if (data.preferences) console.log("Preferences initialized");

    setHasConsented(true);
    setIsBannerVisible(false);
    setIsModalVisible(false);
  };

  const handleAcceptAll = () => {
    const newPrefs = { necessary: true, analytics: true, marketing: true, preferences: true };
    setPrefs(newPrefs);
    handleSave("accept_all", newPrefs);
  };

  const handleRejectAll = () => {
    const newPrefs = { necessary: true, analytics: false, marketing: false, preferences: false };
    setPrefs(newPrefs);
    handleSave("reject_all", newPrefs);
  };

  const handleAcceptSelected = () => {
    handleSave("custom", prefs);
  };

  const toggleCategory = (id: keyof CookiePreferences) => {
    setPrefs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <AnimatePresence>
        {isBannerVisible && !hasConsented && (
          <motion.div
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "110%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0D3D4E] border-t-[3px] border-[#B8960C] p-[20px_40px] shadow-[0_-4px_32px_rgba(0,0,0,0.25)] flex flex-col md:flex-row md:items-center justify-between gap-[24px] md:max-md:px-[20px] max-md:p-[20px]"
          >
            <div className="flex-1">
              <div className="inline-flex items-center align-middle mr-3 shrink-0">
                <Cookie className="w-[24px] h-[24px] text-[#B8960C]" />
              </div>
              <p className="inline font-playfair font-bold text-white text-[16px] mr-2">We use cookies</p>
              <p className="inline font-inter text-[#CBD5E1] text-[14px]">
                Hoque Group uses cookies to improve your experience, analyse site traffic, and personalise content. 
                By continuing to use this site, you agree to our use of cookies.
              </p>
              <div className="mt-2 text-left">
                <Link href="/cookie-policy" className="text-[#B8960C] text-[13px] underline hover:text-[#ffc107] transition-colors">
                  Learn more about our Cookie Policy →
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-[12px] md:items-center shrink-0 w-full md:w-auto">
              <button
                onClick={handleAcceptAll}
                className="w-full md:w-auto bg-[#B8960C] text-white text-[14px] font-bold py-[10px] px-[24px] rounded-[7px] hover:bg-[#9A7B0A] hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(184,150,12,0.45)] transition-all order-1 md:order-3"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="w-full md:w-auto border-[1.5px] border-white/30 text-white bg-transparent text-[14px] font-medium py-[10px] px-[20px] rounded-[7px] hover:border-[#EF4444] hover:text-[#EF4444] hover:bg-[#EF4444]/[0.08] transition-all order-2 md:order-2"
              >
                Reject All
              </button>
              <button
                onClick={() => setIsModalVisible(true)}
                className="w-full md:w-auto border-[1.5px] border-white/30 text-white bg-transparent text-[14px] font-medium py-[10px] px-[20px] rounded-[7px] hover:border-[#B8960C] hover:text-[#B8960C] hover:bg-[#B8960C]/[0.08] transition-all order-3 md:order-1"
              >
                Manage Preferences
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; document.body.style.paddingRight = ""; }}>
        {isModalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0A1E28]/[0.85] z-[10000] backdrop-blur-[3px]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalVisible && (
          <motion.div
            initial={isMobile ? { y: "100%" } : { scale: 0.88, opacity: 0, y: 24, x: "-50%" }}
            animate={isMobile ? { y: 0 } : { scale: 1, opacity: 1, y: "-50%", x: "-50%" }}
            exit={isMobile ? { y: "100%" } : { scale: 0.92, opacity: 0, y: 10, x: "-50%" }}
            transition={{ duration: 0.4, ease: [0.34, 1.1, 0.64, 1] }}
            className="fixed bottom-0 md:top-1/2 left-0 md:left-1/2 right-0 md:right-auto z-[10001] bg-white w-full md:w-[560px] max-w-[calc(100vw-40px)] max-h-[88vh] md:max-h-[calc(100vh-60px)] rounded-t-[20px] md:rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col"
          >
            {isMobile && (
              <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[40px] h-[4px] bg-gray-300 rounded-[4px] z-10 pointer-events-none" />
            )}
            
            <div className="bg-[#0D2E3D] p-[24px_28px] rounded-t-[20px] md:rounded-t-[16px] flex justify-between items-center shrink-0">
              <div className="flex items-center gap-[12px]">
                <Cookie className="w-[22px] h-[22px] text-[#B8960C]" />
                <h2 className="text-white font-playfair font-bold text-[19px]">Cookie Preferences</h2>
              </div>
              <button 
                onClick={() => setIsModalVisible(false)}
                className="text-white hover:text-[#B8960C] hover:bg-white/10 p-[6px] rounded-[6px] transition-colors focus:outline-none"
                aria-label="Close preferences"
              >
                <X className="w-[18px] h-[18px]" />
              </button>
            </div>

            <div className="bg-[#B8960C]/[0.08] p-[14px_28px] border-b border-[#B8960C]/[0.15] shrink-0">
              <p className="font-inter text-[13px] text-[#4B5563] leading-[1.6]">
                Manage your cookie preferences below. Necessary cookies are always active. Your choices will be saved for this browser.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-[8px_0]">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-[20px_28px] border-b border-[#F3F4F6] last:border-0 flex flex-col md:flex-row md:items-start gap-[16px]">
                  <div className="flex-1">
                    <div className="flex items-center gap-[8px]">
                      <h3 className="font-inter font-bold text-[#0D2E3D] text-[15px]">{cat.name}</h3>
                      {cat.required && (
                        <span className="bg-[#B8960C] text-white text-[10px] font-bold py-[2px] px-[8px] rounded-[20px]">
                          Always Active
                        </span>
                      )}
                    </div>
                    <p className="font-inter text-[13px] text-[#6B7280] leading-[1.55] mt-[4px]">
                      {cat.description}
                    </p>
                    <button 
                      onClick={() => setExpanded(prev => ({ ...prev, [cat.id]: !prev[cat.id] }))}
                      className="text-[#B8960C] text-[12px] font-medium mt-[8px] hover:underline focus:outline-none"
                    >
                      {expanded[cat.id] ? "Hide details −" : "Show details +"}
                    </button>
                    <AnimatePresence>
                      {expanded[cat.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="bg-[#FAFAFA] p-[12px_16px] rounded-[8px] mt-[8px]">
                            {cat.details.map((detail, idx) => (
                              <div key={idx} className={`flex items-start md:items-center gap-3 py-[6px] ${idx !== cat.details.length - 1 ? 'border-b border-[#F3F4F6]' : ''}`}>
                                 <code className="text-[#0D2E3D] text-[12px] px-1.5 py-0.5 bg-white rounded border border-gray-200 shrink-0 font-mono">{detail.code}</code>
                                 <span className="text-[#6B7280] text-[12px] leading-tight">{detail.desc}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="shrink-0 flex items-center h-[24px]">
                    {cat.required ? (
                      <Lock className="w-[20px] h-[20px] text-[#B8960C]" />
                    ) : (
                      <button
                        role="switch"
                        aria-checked={prefs[cat.id as keyof CookiePreferences]}
                        aria-label={`${cat.name} cookies`}
                        onClick={() => toggleCategory(cat.id as keyof CookiePreferences)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleCategory(cat.id as keyof CookiePreferences);
                          }
                        }}
                        className={`relative shrink-0 w-[44px] h-[24px] rounded-[12px] transition-colors duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#B8960C] focus:ring-offset-2 ${prefs[cat.id as keyof CookiePreferences] ? 'bg-[#B8960C]' : 'bg-[#D1D5DB]'}`}
                      >
                        <div className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-[50%] shadow-[0_1px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.2,0.64,1)] ${prefs[cat.id as keyof CookiePreferences] ? 'translate-x-[22px]' : 'translate-x-[2px]'}`} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F9FAFB] p-[20px_28px] rounded-b-[0] md:rounded-b-[16px] border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-[12px] shrink-0">
              <button
                onClick={handleRejectAll}
                className="w-full md:w-auto border-[1.5px] border-[#E5E7EB] text-[#0D2E3D] text-[14px] font-medium py-[11px] px-[22px] rounded-[7px] hover:border-[#EF4444] hover:text-[#EF4444] transition-colors order-3 md:order-1"
              >
                Reject All
              </button>
              <div className="flex flex-col md:flex-row gap-[10px] w-full md:w-auto order-2 md:order-2">
                <button
                  onClick={handleAcceptSelected}
                  className="w-full md:w-auto border-[1.5px] border-[#B8960C] text-[#B8960C] bg-transparent text-[14px] font-semibold py-[11px] px-[22px] rounded-[7px] hover:bg-[#B8960C]/[0.08] transition-colors"
                >
                  Accept Selected
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full md:w-auto bg-[#B8960C] text-white text-[14px] font-bold py-[11px] px-[22px] rounded-[7px] hover:bg-[#9A7B0A] hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(184,150,12,0.45)] transition-all"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasConsented && !isBannerVisible && !isModalVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.34, 1.2, 0.64, 1], delay: 0.5 }}
            className="fixed bottom-[16px] left-[16px] md:bottom-[24px] md:left-[24px] z-[9998] group"
          >
            <button 
              onClick={() => setIsModalVisible(true)}
              className="bg-white rounded-[50%] w-[44px] h-[44px] shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-[#B8960C] hover:shadow-[0_6px_20px_rgba(184,150,12,0.4)] transition-all duration-250 ease-out focus:outline-none focus:ring-2 focus:ring-[#B8960C] focus:ring-offset-2"
              aria-label="Manage Cookie Settings"
            >
              <Cookie className="w-[20px] h-[20px] text-[#0D2E3D] group-hover:text-white transition-colors duration-250" />
            </button>
            <div className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 pointer-events-none opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              <div className="bg-white text-[#0D2E3D] text-[12px] font-bold px-[12px] py-[6px] rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] whitespace-nowrap">
                Cookie Settings
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
