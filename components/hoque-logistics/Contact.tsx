"use client";

import { motion } from "motion/react";
import { Phone, Mail, Globe, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    country: "",
    cargoName: "",
    quantity: "",
    destination: "",
    estimatedDate: "",
    shippingType: "",
    enquiryType: "Enquiry",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="bg-white py-[90px] px-8 md:px-[80px] overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-[56px]">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-[#0D2E3D] text-[40px] font-playfair font-bold mb-4">
            Contact Hoque Logistics
          </h2>
          <p className="text-[#4B5563] text-[16px]">
            Submit your logistics requirement, get a custom quote, or ask about our domestic supply services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="w-full lg:w-[42%] bg-white rounded-[14px] p-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <h3 className="text-[#0D2E3D] font-bold text-[18px]">Contact Information</h3>
            <div className="w-[40px] h-[3px] bg-[#B8960C] mt-3 mb-8" />
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[16px]">+91 033 4600 4025</div>
                  <div className="text-[#4B5563] text-[13px] mt-1">Mon–Fri 10:30–19:00 · Sat 10:30–17:00</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[16px] flex items-center gap-2">
                    1800 833 9331
                    <span className="bg-[#B8960C] text-white text-[11px] px-2 py-0.5 rounded-full">Toll Free</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[16px]">logistics@hoquegroup.com</div>
                  <div className="text-[#4B5563] text-[13px] mt-1">Response within 24 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[16px]">info@hoquegroup.com</div>
                  <div className="text-[#4B5563] text-[13px] mt-1">General group enquiries</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div className="pt-2">
                  <Link href="https://www.hoquegroup.com" className="text-[#0D2E3D] font-medium text-[15px] hover:text-[#B8960C] hover:underline transition-colors">
                    www.hoquegroup.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div className="pt-1">
                  <div className="text-[#4B5563] text-[15px] leading-relaxed">
                    27, Bentinck Street, MK Point, Room No. 701, Kolkata-700001, West Bengal, India
                  </div>
                </div>
              </div>
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.288599446059!2d88.34960307611867!3d22.568305033123864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a06c2794eb%3A0xe108365efcccbe59!2sMK%20Point%2C%2027%2C%20Bentinck%20St%2C%20Mission%20Row%20Extension%2C%20Esplanade%2C%20Lal%20Bazar%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1709643444444!5m2!1sen!2sin" 
              width="100%" 
              height="210" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[10px] mt-6"
            />

            <div className="bg-[#0D2E3D] p-[18px_22px] rounded-[10px] mt-4 flex items-start gap-4 relative">
              <Clock className="w-6 h-6 text-[#B8960C] shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-bold text-[14px] leading-loose">
                  Monday–Friday: 10:30 AM – 7:00 PM<br/>
                  Saturday: 10:30 AM – 5:00 PM
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#B8960C] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                Open
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
              <span className="text-[#4B5563] text-[13px]">Need immediate help?</span>
              <a href="tel:+9103346004025" className="text-[#B8960C] font-bold text-[14px] flex items-center gap-1 hover:underline">
                <Phone className="w-3 h-3" />
                +91 033 4600 4025
              </a>
            </div>

          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            className="w-full lg:w-[58%] bg-white rounded-[14px] p-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-[#0D2E3D] font-bold text-[22px]">Submit a Logistics Enquiry</h3>
              <p className="text-gray-500 text-[14px] mt-1">Fields marked * are required.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="flex gap-4 mb-6">
                {["Enquiry", "Contact Us", "Product Order"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${formData.enquiryType === type ? 'border-[#B8960C]' : 'border-gray-300 group-hover:border-[#B8960C]'}`}>
                      {formData.enquiryType === type && <div className="w-2 h-2 rounded-full bg-[#B8960C]" />}
                    </div>
                    <span className={`text-[14px] ${formData.enquiryType === type ? 'text-[#0D2E3D] font-medium' : 'text-gray-500'}`}>{type}</span>
                    <input 
                      type="radio" 
                      name="enquiryType" 
                      value={type}
                      checked={formData.enquiryType === type}
                      onChange={(e) => setFormData({...formData, enquiryType: e.target.value})}
                      className="hidden" 
                    />
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FloatingInput label="Full Name*" type="text" required />
                <FloatingInput label="Company Name" type="text" />
                <FloatingInput label="Phone Number*" type="tel" required />
                <FloatingInput label="Email Address*" type="email" required />
                
                <div className="relative">
                  <select 
                    required 
                    defaultValue=""
                    className="w-full h-[52px] px-4 rounded-[6px] border border-gray-300 bg-transparent text-[15px] outline-none focus:border-[#B8960C] text-[#0D2E3D] appearance-none"
                  >
                    <option value="" disabled>Country*</option>
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="UAE">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Central Asia">Central Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>

                <FloatingInput label="Product or Cargo Name" type="text" />
                <FloatingInput label="Quantity Expected" type="text" />
                <FloatingInput label="Supply At (Destination Location)" type="text" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div className="relative">
                   <div className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-gray-500 z-10">Estimated Date*</div>
                   <input type="date" required className="w-full h-[52px] px-4 rounded-[6px] border border-gray-300 bg-transparent text-[15px] outline-none focus:border-[#B8960C] text-[#0D2E3D]" />
                 </div>
                 
                 <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full h-[52px] px-4 rounded-[6px] border border-gray-300 bg-transparent text-[15px] outline-none focus:border-[#B8960C] text-[#0D2E3D] appearance-none"
                  >
                    <option value="" disabled>Shipping Type</option>
                    <option value="air-freight">Air Freight</option>
                    <option value="ocean-freight">Ocean Freight</option>
                    <option value="cargo-express">Cargo Express</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="contract-logistics">Contract Logistics</option>
                    <option value="ground-transport">Ground Transport</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="relative pt-2">
                <textarea 
                  rows={5} 
                  placeholder="Describe your cargo, origin, destination, timeline, and any special handling requirements."
                  className="w-full p-4 rounded-[6px] border border-gray-300 bg-transparent text-[15px] outline-none focus:border-[#B8960C] focus:bg-[#B8960C]/[0.02] text-[#0D2E3D] resize-none transition-all placeholder:text-gray-400"
                ></textarea>
                <div className="absolute -top-0 left-3 bg-white px-1 text-[12px] text-gray-500 z-10">Your Message</div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-[16px] rounded-[8px] font-bold text-[16px] transition-all flex items-center justify-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-[#B8960C] text-white hover:bg-[#9A7B0A] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(184,150,12,0.3)]'
                }`}
              >
                {status === 'idle' && "Submit Logistics Enquiry →"}
                {status === 'loading' && (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {status === 'success' && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                    <CheckCircleIcon /> Enquiry Received
                  </motion.div>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FloatingInput({ label, type, required = false }: { label: string, type: string, required?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input 
        type={type} 
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full h-[52px] px-4 rounded-[6px] border border-gray-300 bg-transparent text-[15px] outline-none transition-all focus:border-[#B8960C] focus:bg-[#B8960C]/[0.02] text-[#0D2E3D]"
      />
      <label 
        className={`absolute left-3 px-1 transition-all duration-300 pointer-events-none bg-white font-medium ${
          isActive 
            ? '-translate-y-[28px] top-1/2 text-[12px] text-[#B8960C]' 
            : '-translate-y-1/2 top-1/2 text-[15px] text-gray-500'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
