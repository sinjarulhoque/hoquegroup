"use client";

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

interface ToastSystemProps {
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}

export function ToastSystem({ toasts, removeToast }: ToastSystemProps) {
  return (
    <div className="fixed bottom-[24px] right-[24px] z-[10005] flex flex-col gap-[10px] pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: "120%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "120%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`pointer-events-auto flex items-center gap-[12px] min-w-[280px] max-w-[360px] bg-white rounded-[10px] px-[18px] py-[14px] shadow-[0_8px_32px_rgba(0,0,0,0.14)] overflow-hidden relative cursor-pointer border-l-[4px] ${
              toast.type === "success" ? "border-[#059669]" :
              toast.type === "error" ? "border-[#DC2626]" :
              "border-[#B8960C]"
            }`}
            onClick={() => removeToast(toast.id)}
          >
            <div className="shrink-0 flex items-center justify-center">
              {toast.type === "success" && <CheckCircle className="w-[20px] h-[20px] text-[#059669]" />}
              {toast.type === "error" && <XCircle className="w-[20px] h-[20px] text-[#DC2626]" />}
              {toast.type === "info" && <Info className="w-[20px] h-[20px] text-[#B8960C]" />}
            </div>
            <div className="flex-1 font-inter text-[14px] font-medium text-[#0D2E3D]">
              {toast.message}
            </div>
            <button className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none">
              <X className="w-[16px] h-[16px]" />
            </button>
            <motion.div 
              className={`absolute bottom-0 left-0 h-[3px] opacity-20 ${
                toast.type === "success" ? "bg-[#059669]" :
                toast.type === "error" ? "bg-[#DC2626]" :
                "bg-[#B8960C]"
              }`}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: toast.type === "error" ? 3 : 2.5, ease: "linear" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
