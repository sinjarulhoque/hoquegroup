"use client";

import { motion } from "motion/react";
import { Phone, Mail, Globe, MapPin, Clock, Loader2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "", company: "", phone: "", email: "", country: "", product: "",
    quantity: "", location: "", date: "", shipping: "", type: "Product Order", message: ""
  });

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

  const isFocused = (field: string) => focusedField === field || (values as any)[field] !== "";

  return (
    <section className="bg-[#F3F4F6] py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-[#0D2E3D] text-[32px] md:text-[40px] font-playfair font-bold mb-4">
            Contact Hoque Mercantile
          </h2>
          <p className="text-[#4B5563] text-[16px]">
            Reach out for export enquiries, product pricing, or partnership proposals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[45%] bg-white rounded-[14px] p-[32px] md:p-[40px] shadow-lg flex flex-col h-full"
          >
            <h3 className="text-[#0D2E3D] font-bold text-[18px] mb-4">Our Contact Information</h3>
            <div className="w-[40px] h-[3px] bg-[#B8960C] mb-8" />

            <div className="space-y-6 mb-8 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[16px]">+91 033 46004025</div>
                  <div className="text-gray-500 text-[13px]">Mon–Fri 10:30–19:00, Sat 10:30–17:00</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[16px]">mercantile@hoquegroup.com</div>
                  <div className="text-gray-500 text-[13px]">Response within 24 business hours</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <a href="https://www.hoquegroup.com" className="text-[#0D2E3D] font-bold text-[16px] hover:text-[#B8960C] hover:underline transition-colors">www.hoquegroup.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#B8960C]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-gray-600 text-[15px] leading-[1.6]">27, Bentinck Street, MK Point, Room No. 601, 6th Floor, Kolkata-700001, West Bengal, India</div>
                </div>
              </div>
            </div>

            <div className="w-full h-[200px] rounded-[10px] overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.270921092576!2d88.34751497607374!3d22.56898497949392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a0b3f56e5d%3A0x8e8b2b6b6b6b6b6b!2sMK%20Point!5e0!3m2!1sen!2sin!4v1713206245367!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-[#0D2E3D] p-4 px-5 rounded-[8px] flex items-start gap-4 relative">
              <Clock className="w-6 h-6 text-[#B8960C] shrink-0 mt-1" />
              <div className="text-white text-[14px] space-y-1">
                <div>Monday–Friday: 10:30 AM – 7:00 PM</div>
                <div>Saturday: 10:30 AM – 5:00 PM</div>
              </div>
              <div className="absolute top-4 right-4 bg-[#B8960C] text-white text-[11px] font-bold px-2 py-1 rounded uppercase">
                Currently Open
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%] bg-white rounded-[14px] p-[32px] md:p-[40px] shadow-lg"
          >
            <h3 className="text-[#0D2E3D] font-bold text-[22px] mb-2">Send Us a Product Enquiry</h3>
            <p className="text-gray-500 text-[14px] mb-8">Fields marked * are required</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative pt-5">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('name') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Full Name*</label>
                  <input type="text" required className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] ${focusedField === 'name' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.name} onChange={e => setValues({...values, name: e.target.value})} onFocus={() => handleFocus('name')} onBlur={handleBlur} />
                </div>
                <div className="relative pt-5">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('company') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Company Name</label>
                  <input type="text" className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] ${focusedField === 'company' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.company} onChange={e => setValues({...values, company: e.target.value})} onFocus={() => handleFocus('company')} onBlur={handleBlur} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative pt-5">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('phone') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Phone Number*</label>
                  <input type="tel" required className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] ${focusedField === 'phone' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.phone} onChange={e => setValues({...values, phone: e.target.value})} onFocus={() => handleFocus('phone')} onBlur={handleBlur} />
                </div>
                <div className="relative pt-5">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('email') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Email Address*</label>
                  <input type="email" required className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] ${focusedField === 'email' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.email} onChange={e => setValues({...values, email: e.target.value})} onFocus={() => handleFocus('email')} onBlur={handleBlur} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative pt-5">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('country') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Country*</label>
                  <select required className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] appearance-none ${focusedField === 'country' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.country} onChange={e => setValues({...values, country: e.target.value})} onFocus={() => handleFocus('country')} onBlur={handleBlur}>
                    <option value="" disabled></option>
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="UAE">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="relative pt-5">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('product') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Product Name</label>
                  <input type="text" className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] ${focusedField === 'product' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.product} onChange={e => setValues({...values, product: e.target.value})} onFocus={() => handleFocus('product')} onBlur={handleBlur} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative pt-5">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('quantity') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Quantity Expected</label>
                  <input type="text" className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] ${focusedField === 'quantity' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.quantity} onChange={e => setValues({...values, quantity: e.target.value})} onFocus={() => handleFocus('quantity')} onBlur={handleBlur} />
                </div>
                <div className="relative pt-5">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('location') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Preferred Supply Location</label>
                  <input type="text" className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] ${focusedField === 'location' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.location} onChange={e => setValues({...values, location: e.target.value})} onFocus={() => handleFocus('location')} onBlur={handleBlur} />
                </div>
              </div>

              <div className="relative pt-5">
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('date') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Estimated Delivery Date</label>
                <input type="date" className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] ${focusedField === 'date' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.date} onChange={e => setValues({...values, date: e.target.value})} onFocus={() => handleFocus('date')} onBlur={handleBlur} />
              </div>

              <div className="relative pt-5">
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('shipping') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Shipping Type</label>
                <select className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] appearance-none ${focusedField === 'shipping' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.shipping} onChange={e => setValues({...values, shipping: e.target.value})} onFocus={() => handleFocus('shipping')} onBlur={handleBlur}>
                  <option value="" disabled></option>
                  <option value="Sea Freight">Sea Freight</option>
                  <option value="Air Freight">Air Freight</option>
                  <option value="Road Transport">Road Transport</option>
                  <option value="Rail">Rail</option>
                </select>
              </div>

              <div className="pt-2">
                <label className="block text-[14px] font-medium text-gray-600 mb-3">Enquiry Type</label>
                <div className="flex flex-wrap gap-3">
                  {["Product Order", "General Enquiry", "Partnership", "Other"].map((type) => (
                    <label key={type} className={`cursor-pointer px-4 py-2 rounded-full border text-[14px] transition-colors ${values.type === type ? 'bg-[#0D2E3D] text-white border-[#0D2E3D]' : 'bg-white text-gray-600 border-gray-300 hover:border-[#0D2E3D]'}`}>
                      <input type="radio" name="enquiryType" value={type} checked={values.type === type} onChange={(e) => setValues({...values, type: e.target.value})} className="hidden" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative pt-5">
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${isFocused('message') ? 'top-0 text-[12px] text-[#B8960C]' : 'top-8 text-[14px] text-gray-400'}`}>Your Message</label>
                <textarea rows={5} className={`w-full border-b-2 p-3 outline-none transition-all duration-300 bg-gray-50 rounded-t-[6px] resize-none ${focusedField === 'message' ? 'border-[#B8960C] bg-[#B8960C]/5' : 'border-gray-200'}`} value={values.message} onChange={e => setValues({...values, message: e.target.value})} onFocus={() => handleFocus('message')} onBlur={handleBlur}></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState === "loading"}
                className="w-full bg-[#B8960C] text-white font-bold text-[16px] py-[16px] rounded-[8px] hover:bg-[#9a7d0a] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 flex justify-center items-center h-[56px]"
              >
                {formState === "idle" && "Submit Enquiry →"}
                {formState === "loading" && <Loader2 className="w-6 h-6 animate-spin" />}
                {formState === "success" && "Enquiry Sent Successfully!"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
