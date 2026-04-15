"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[100] bg-[#0D3D4E] flex items-center justify-center pointer-events-none"
        initial={{ y: "-100%" }}
        animate={{ y: ["-100%", "0%", "0%", "-100%"] }}
        transition={{
          times: [0, 0.25, 0.6, 1], // 0.3s down, 0.4s hold, 0.5s up (approx 1.2s total)
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.div
          className="text-white text-4xl md:text-6xl font-bold font-serif tracking-widest flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.85, 1, 1, 0.95] }}
          transition={{
            times: [0, 0.3, 0.8, 1],
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          HOQUE
          <span className="text-xs md:text-sm tracking-[0.3em] font-sans mt-2 text-gray-300">QUALITY IS IDENTITY</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
