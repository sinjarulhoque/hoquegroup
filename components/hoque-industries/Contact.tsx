"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Globe, MapPin, Clock, Loader2, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="bg-white py-[90px] px-8 md:px-[80px] overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[40px] font-playfair font-bold mb-4">
            Contact Hoque Industries
          </h2>
          <p className="text-[#4B5563] text-[16px] max-w-[560px] mx-auto">
            Send us your export enquiry, product pricing request or joint venture proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (42%) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            className="lg:col-span-5 bg-white rounded-[14px] p-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <h3 className="text-[#0D2E3D] font-bold text-[18px] mb-4">Contact Information</h3>
            <div className="w-[40px] h-[3px] bg-[#B8960C] mb-8" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[16px] mb-1">+91 033 46004025</div>
                  <div className="text-gray-500 text-[13px]">Mon–Fri 10:30–19:00 · Sat 10:30–17:00</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[16px] mb-1">industries@hoquegroup.com</div>
                  <div className="text-gray-500 text-[13px]">Response within 24 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div className="pt-2">
                  <a href="https://www.hoquegroup.com" className="text-[#0D2E3D] font-medium text-[15px] hover:text-[#B8960C] hover:underline transition-colors">
                    www.hoquegroup.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div className="pt-1">
                  <div className="text-gray-600 text-[15px] leading-[1.6]">
                    27, Bentinck Street, MK Point, Room No. 601 and 704, Kolkata-700001, West Bengal, India
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[24px] w-full h-[200px] rounded-[10px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.276342898991!2d88.3475225154181!3d22.56877998518464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a06b9b1b11%3A0x8b8b8b8b8b8b8b8b!2sMK%20Point%2C%2027%2C%20Bentinck%20St%2C%20Mission%20Row%20Extension%2C%20Esplanade%2C%20Lal%20Bazar%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-[16px] bg-[#0D2E3D] rounded-[8px] p-[16px] px-[20px] flex items-start gap-4 relative overflow-hidden">
              <Clock className="w-6 h-6 text-[#B8960C] shrink-0 mt-1" />
              <div className="text-white text-[14px] leading-[1.6]">
                Monday–Friday: 10:30 AM – 7:00 PM<br />
                Saturday: 10:30 AM – 5:00 PM
              </div>
              <div className="absolute top-4 right-4 bg-[#B8960C] text-white text-[11px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Open
              </div>
            </div>
          </motion.div>

          {/* Right Column (58%) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7 bg-white rounded-[14px] p-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-[#0D2E3D] font-bold text-[22px] mb-2">Send a Product or Business Enquiry</h3>
              <p className="text-gray-500 text-[14px]">Fields marked * are required.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput label="Full Name*" type="text" required />
                <FloatingInput label="Company Name" type="text" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput label="Phone Number*" type="tel" required />
                <FloatingInput label="Email Address*" type="email" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <select required defaultValue="" className="w-full h-[56px] px-4 pt-4 pb-1 border border-gray-300 rounded-[8px] outline-none focus:border-[#B8960C] focus:bg-[#B8960C]/5 transition-all duration-300 appearance-none bg-transparent peer text-[#0D2E3D] text-[16px]">
                    <option value="" disabled hidden></option>
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="UAE">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Central Asia">Central Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Other">Other</option>
                  </select>
                  <label className="absolute left-4 top-4 text-gray-500 text-[16px] pointer-events-none transition-all duration-300 peer-focus:-translate-y-3 peer-focus:text-[12px] peer-focus:text-[#B8960C] peer-valid:-translate-y-3 peer-valid:text-[12px]">
                    Country*
                  </label>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <FloatingInput label="Product Name" type="text" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput label="Quantity Expected" type="text" />
                <FloatingInput label="Preferred Supply Location" type="text" />
              </div>
              
              <div className="relative">
                <input type="date" className="w-full h-[56px] px-4 pt-4 pb-1 border border-gray-300 rounded-[8px] outline-none focus:border-[#B8960C] focus:bg-[#B8960C]/5 transition-all duration-300 bg-transparent peer text-[#0D2E3D] text-[16px]" />
                <label className="absolute left-4 top-1 text-gray-500 text-[12px] pointer-events-none transition-all duration-300 peer-focus:text-[#B8960C]">
                  Estimated Delivery Date
                </label>
              </div>

              <div className="relative">
                <select defaultValue="" className="w-full h-[56px] px-4 pt-4 pb-1 border border-gray-300 rounded-[8px] outline-none focus:border-[#B8960C] focus:bg-[#B8960C]/5 transition-all duration-300 appearance-none bg-transparent peer text-[#0D2E3D] text-[16px]">
                  <option value="" disabled hidden></option>
                  <option value="Sea Freight">Sea Freight</option>
                  <option value="Air Freight">Air Freight</option>
                  <option value="Road">Road</option>
                  <option value="Rail">Rail</option>
                </select>
                <label className="absolute left-4 top-4 text-gray-500 text-[16px] pointer-events-none transition-all duration-300 peer-focus:-translate-y-3 peer-focus:text-[12px] peer-focus:text-[#B8960C] peer-valid:-translate-y-3 peer-valid:text-[12px]">
                  Shipping Type
                </label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-[14px] font-medium mb-3">Enquiry Type</label>
                <div className="flex flex-wrap gap-3">
                  {["Product Export", "Joint Venture", "General Enquiry", "Partnership"].map((type) => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" name="enquiryType" value={type} className="peer sr-only" defaultChecked={type === "Product Export"} />
                      <div className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-[14px] peer-checked:bg-[#0D2E3D] peer-checked:text-white peer-checked:border-[#0D2E3D] transition-colors">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative">
                <textarea 
                  rows={5} 
                  required
                  className="w-full px-4 pt-6 pb-2 border border-gray-300 rounded-[8px] outline-none focus:border-[#B8960C] focus:bg-[#B8960C]/5 transition-all duration-300 bg-transparent peer text-[#0D2E3D] text-[16px] resize-none"
                  placeholder="Describe your requirement, quantity, destination port or any specific product specifications."
                ></textarea>
                <label className="absolute left-4 top-4 text-gray-500 text-[16px] pointer-events-none transition-all duration-300 peer-focus:-translate-y-2 peer-focus:text-[12px] peer-focus:text-[#B8960C] peer-valid:-translate-y-2 peer-valid:text-[12px]">
                  Your Message*
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
                className={`w-full py-[16px] rounded-[8px] font-bold text-[16px] transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSuccess 
                    ? "bg-green-600 text-white" 
                    : "bg-[#B8960C] text-white hover:bg-[#9A7B0A] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(184,150,12,0.4)]"
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent Successfully
                  </>
                ) : (
                  "Submit Enquiry →"
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FloatingInput({ label, type, required = false }: { label: string, type: string, required?: boolean }) {
  return (
    <div className="relative">
      <input 
        type={type} 
        required={required}
        className="w-full h-[56px] px-4 pt-4 pb-1 border border-gray-300 rounded-[8px] outline-none focus:border-[#B8960C] focus:bg-[#B8960C]/5 transition-all duration-300 bg-transparent peer text-[#0D2E3D] text-[16px]" 
      />
      <label className="absolute left-4 top-4 text-gray-500 text-[16px] pointer-events-none transition-all duration-300 peer-focus:-translate-y-3 peer-focus:text-[12px] peer-focus:text-[#B8960C] peer-valid:-translate-y-3 peer-valid:text-[12px]">
        {label}
      </label>
    </div>
  );
}
