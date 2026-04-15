"use client";

import { motion } from "motion/react";
import { Mail, Phone, Loader2, Check } from "lucide-react";
import { useState } from "react";

export function EnquiryForm() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [values, setValues] = useState({ name: "", email: "", service: "Agricultural Export", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 overflow-hidden">
      <div className="flex flex-col justify-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1] }}
          className="text-primary font-headline text-4xl md:text-5xl font-bold mb-8 leading-tight"
        >
          Ready to Scale Your Business?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-on-surface-variant text-lg mb-12 leading-relaxed"
        >
          Connect with our strategic consultants to optimize your import-export operations today.
        </motion.p>
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1], delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-on-surface-variant mb-1">Email us at</div>
              <div className="font-bold text-primary text-lg">contact@hoquegroup.com</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1], delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-on-surface-variant mb-1">Call us on</div>
              <div className="font-bold text-primary text-lg">+91 98765 43210</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.form 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="bg-white p-8 md:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative pt-6">
            <label 
              className={`absolute left-4 transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none font-bold tracking-wide ${
                focusedField === 'name' || values.name 
                  ? 'top-0 text-xs text-[#ffc107]' 
                  : 'top-10 text-sm text-gray-400'
              }`}
            >
              FULL NAME
            </label>
            <input 
              className={`w-full border-b-2 rounded-t-lg p-4 outline-none transition-all duration-300 ${
                focusedField === 'name' ? 'border-[#ffc107] bg-[rgba(245,197,24,0.05)]' : 'border-gray-200 bg-gray-50'
              }`}
              type="text"
              value={values.name}
              onChange={(e) => setValues({...values, name: e.target.value})}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
            />
          </div>
          <div className="relative pt-6">
            <label 
              className={`absolute left-4 transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none font-bold tracking-wide ${
                focusedField === 'email' || values.email 
                  ? 'top-0 text-xs text-[#ffc107]' 
                  : 'top-10 text-sm text-gray-400'
              }`}
            >
              BUSINESS EMAIL
            </label>
            <input 
              className={`w-full border-b-2 rounded-t-lg p-4 outline-none transition-all duration-300 ${
                focusedField === 'email' ? 'border-[#ffc107] bg-[rgba(245,197,24,0.05)]' : 'border-gray-200 bg-gray-50'
              }`}
              type="email"
              value={values.email}
              onChange={(e) => setValues({...values, email: e.target.value})}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
            />
          </div>
        </div>
        
        <div className="relative pt-6">
          <label className="absolute left-4 top-0 text-xs text-[#ffc107] font-bold tracking-wide transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            SERVICE INTERESTED IN
          </label>
          <select 
            className={`w-full border-b-2 rounded-t-lg p-4 outline-none transition-all duration-300 appearance-none ${
              focusedField === 'service' ? 'border-[#ffc107] bg-[rgba(245,197,24,0.05)]' : 'border-gray-200 bg-gray-50'
            }`}
            value={values.service}
            onChange={(e) => setValues({...values, service: e.target.value})}
            onFocus={() => handleFocus('service')}
            onBlur={handleBlur}
          >
            <option>Agricultural Export</option>
            <option>Logistics Solutions</option>
            <option>Coal Import</option>
          </select>
        </div>
        
        <div className="relative pt-6">
          <label 
            className={`absolute left-4 transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none font-bold tracking-wide ${
              focusedField === 'message' || values.message 
                ? 'top-0 text-xs text-[#ffc107]' 
                : 'top-10 text-sm text-gray-400'
            }`}
          >
            MESSAGE
          </label>
          <textarea 
            className={`w-full border-b-2 rounded-t-lg p-4 outline-none transition-all duration-300 resize-none ${
              focusedField === 'message' ? 'border-[#ffc107] bg-[rgba(245,197,24,0.05)]' : 'border-gray-200 bg-gray-50'
            }`}
            rows={4}
            value={values.message}
            onChange={(e) => setValues({...values, message: e.target.value})}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
          />
        </div>
        
        <motion.button 
          className={`w-full py-4 font-bold rounded-lg uppercase tracking-widest mt-4 flex items-center justify-center h-14 transition-colors duration-400 ${
            formState === "success" ? "bg-green-500 text-white" : "bg-[#ffc107] text-[#0a1e2f] hover:bg-[#D4A80E]"
          }`}
          whileHover={{ translateY: -2, boxShadow: "0 8px 24px rgba(245,197,24,0.4)" }}
          whileTap={{ scale: 0.97, translateY: 0, boxShadow: "none" }}
          animate={formState === "error" ? { x: [0, -8, 8, -6, 6, 0] } : {}}
          transition={{ duration: formState === "error" ? 0.4 : 0.25 }}
        >
          {formState === "idle" && <span>Send Enquiry</span>}
          {formState === "loading" && <Loader2 className="w-6 h-6 animate-spin" />}
          {formState === "success" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Check className="w-6 h-6" />
            </motion.div>
          )}
        </motion.button>
      </motion.form>
    </section>
  );
}
