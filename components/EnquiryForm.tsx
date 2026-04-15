"use client";

import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

export function EnquiryForm() {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-primary font-headline text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Ready to Scale Your Business?
        </h2>
        <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
          Connect with our strategic consultants to optimize your import-export operations today.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-on-surface-variant mb-1">Email us at</div>
              <div className="font-bold text-primary text-lg">contact@hoquegroup.com</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-sm text-on-surface-variant mb-1">Call us on</div>
              <div className="font-bold text-primary text-lg">+91 98765 43210</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-surface-container-low p-8 md:p-10 rounded-xl shadow-sm space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary tracking-wide">FULL NAME</label>
            <input 
              className="w-full bg-white border border-outline-variant/15 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg p-4 outline-none transition-all" 
              placeholder="John Doe" 
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary tracking-wide">BUSINESS EMAIL</label>
            <input 
              className="w-full bg-white border border-outline-variant/15 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg p-4 outline-none transition-all" 
              placeholder="john@company.com" 
              type="email"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-primary tracking-wide">SERVICE INTERESTED IN</label>
          <select className="w-full bg-white border border-outline-variant/15 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg p-4 outline-none transition-all appearance-none">
            <option>Agricultural Export</option>
            <option>Logistics Solutions</option>
            <option>Coal Import</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-primary tracking-wide">MESSAGE</label>
          <textarea 
            className="w-full bg-white border border-outline-variant/15 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg p-4 outline-none transition-all resize-none" 
            placeholder="Tell us about your requirements..." 
            rows={4}
          />
        </div>
        
        <button className="w-full bg-primary text-white py-4 font-bold rounded-lg hover:bg-primary-container transition-colors uppercase tracking-widest mt-4 active:scale-[0.98]">
          Send Enquiry
        </button>
      </motion.form>
    </section>
  );
}
