"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ClipboardList, Info, UploadCloud, Lock, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast: (type: "success" | "error" | "info", message: string) => void;
}

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PHONE_REGEX = /^[\d\s\-\+()]{10,}$/;

export function QuoteModal({ isOpen, onClose, showToast }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    country: "",
    productName: "",
    quantity: "",
    location: "",
    date: "",
    shippingType: "",
    enquiryType: "",
    companies: [] as string[],
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        fullName: "", companyName: "", phone: "", email: "", country: "", productName: "", quantity: "", location: "", date: "", shippingType: "", enquiryType: "", companies: [], message: ""
      });
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setErrors({});
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTouched({});
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSuccess(false);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsSubmitting(false);

      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const validateField = (name: string, value: any) => {
    switch (name) {
      case "fullName": return value.trim() ? "" : "This field is required.";
      case "email": 
        if (!value.trim()) return "This field is required.";
        if (!EMAIL_REGEX.test(value)) return "Invalid email format.";
        return "";
      case "phone":
        if (!value.trim()) return "This field is required.";
        if (!PHONE_REGEX.test(value)) return "Invalid phone number.";
        return "";
      case "country": return value && value !== "Select Country" ? "" : "This field is required.";
      case "date": return value ? "" : "This field is required.";
      case "enquiryType": return value ? "" : "This field is required.";
      default: return "";
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, formData[name as keyof typeof formData]) }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const toggleCompany = (company: string) => {
    setFormData(prev => {
      let comps = [...prev.companies];
      if (company === "All Companies") {
        comps = comps.includes("All Companies") ? [] : ["All Companies", "Hoque Mercantile", "Hoque Industries", "Hoque Logistics"];
      } else {
        if (comps.includes(company)) comps = comps.filter(c => c !== company);
        else comps.push(company);
        
        comps = comps.filter(c => c !== "All Companies");
        if (comps.includes("Hoque Mercantile") && comps.includes("Hoque Industries") && comps.includes("Hoque Logistics")) {
          comps.push("All Companies");
        }
      }
      return { ...prev, companies: comps };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    const reqFields = ["fullName", "phone", "email", "country", "date", "enquiryType"];
    
    reqFields.forEach(field => {
      const err = validateField(field, formData[field as keyof typeof formData]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    
    // Mark all required fields as touched
    const newTouched: Record<string, boolean> = {};
    reqFields.forEach(f => newTouched[f] = true);
    setTouched(newTouched);

    if (Object.keys(newErrors).length > 0) {
      // Find the first error field and scroll to it smoothly
      const firstErr = reqFields.find(f => newErrors[f]);
      if (firstErr && modalRef.current) {
        const el = document.getElementById(`quote-${firstErr}`);
        if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      console.log("Form Submitted:", JSON.stringify(formData, null, 2));
      createConfetti();
      showToast("success", "Enquiry Submitted Successfully");
    }, 1800);
  };

  const createConfetti = () => {
    for (let i = 0; i < 40; i++) {
      const el = document.createElement("div");
      el.className = "absolute w-2 h-2 rounded bg-[#B8960C]";
      el.style.left = "50%";
      el.style.top = "50%";
      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 100;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      el.style.transform = "translate(-50%, -50%)";
      el.style.transition = "transform 1.5s cubic-bezier(0,0,0.2,1), opacity 1.5s ease-out";
      el.style.zIndex = "1005";
      if (Math.random() > 0.5) el.style.backgroundColor = "#0D2E3D";
      if (Math.random() > 0.8) el.style.backgroundColor = "white";
      
      const successPanel = document.getElementById("success-panel");
      if (successPanel) {
        successPanel.appendChild(el);
        // Force reflow
        void el.offsetWidth;
        el.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${Math.random()*360}deg)`;
        el.style.opacity = "0";
        setTimeout(() => el.remove(), 1500);
      }
    }
  };

  const getInputClass = (name: string) => {
    const error = touched[name] && errors[name];
    const valid = touched[name] && !error && formData[name as keyof typeof formData];
    return `w-full border-[1.5px] rounded-[8px] px-[14px] py-[12px] font-inter text-[15px] text-[#0D2E3D] outline-none transition-colors duration-300 box-border bg-white ${
      error ? "border-[#FCA5A5] focus:border-[#FCA5A5] focus:shadow-[0_0_0_3px_rgba(252,165,165,0.2)]" : 
      valid ? "border-[#D1FAE5] focus:border-[#B8960C] focus:shadow-[0_0_0_3px_rgba(184,150,12,0.12)]" : 
      "border-[#E5E7EB] focus:border-[#B8960C] focus:shadow-[0_0_0_3px_rgba(184,150,12,0.12)]"
    }`;
  };

  return (
    <AnimatePresence onExitComplete={() => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }}>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 bg-[#0A1E28]/[0.88] backdrop-blur-[4px] z-[10003]"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.34, 1.1, 0.64, 1] }}
            className="fixed top-auto bottom-0 md:top-1/2 md:bottom-auto left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[720px] max-w-full md:max-w-[calc(100vw-40px)] max-h-[92vh] md:max-h-[calc(100vh-80px)] bg-white rounded-t-[16px] md:rounded-[16px] z-[10004] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden pointer-events-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="bg-[#0D2E3D] px-[24px] py-[20px] md:px-[36px] md:py-[28px] flex justify-between items-center shrink-0">
              <div className="flex items-center gap-[12px]">
                <ClipboardList className="text-[#B8960C] w-[22px] h-[22px]" />
                <h2 id="modal-title" className="text-white font-playfair font-bold text-[20px]">Request a Quote</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-[6px] rounded-[6px] hover:bg-white/10 group transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8960C]"
                aria-label="Close modal"
              >
                <X className="text-white group-hover:text-[#B8960C] w-[20px] h-[20px] transition-colors" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto" ref={modalRef}>
              
              {!success ? (
                <motion.form 
                  initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col"
                >
                  <div className="bg-[#B8960C]/10 px-[24px] py-[12px] md:px-[36px] border-b border-[#B8960C]/15 flex items-center gap-[8px] shrink-0">
                    <Info className="text-[#B8960C] w-[14px] h-[14px] shrink-0" />
                    <span className="font-inter text-[13px] text-[#4B5563]">Fill in the form below and our team will respond within 24 business hours.</span>
                  </div>

                  <div className="p-[24px] md:p-[36px] flex flex-col gap-[20px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                      {/* Row 1 */}
                      <div>
                        <label htmlFor="quote-fullName" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Full Name*</label>
                        <input id="quote-fullName" ref={firstInputRef} name="fullName" type="text" placeholder="Your full name" value={formData.fullName} onChange={handleChange} onBlur={() => handleBlur("fullName")} className={getInputClass("fullName")} />
                        {touched.fullName && errors.fullName && <p className="text-[#DC2626] text-[12px] mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label htmlFor="quote-companyName" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Company Name</label>
                        <input id="quote-companyName" name="companyName" type="text" placeholder="Your company or organisation" value={formData.companyName} onChange={handleChange} onBlur={() => handleBlur("companyName")} className={getInputClass("companyName")} />
                      </div>

                      {/* Row 2 */}
                      <div>
                        <label htmlFor="quote-phone" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Phone Number*</label>
                        <input id="quote-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} onBlur={() => handleBlur("phone")} className={getInputClass("phone")} />
                        {touched.phone && errors.phone && <p className="text-[#DC2626] text-[12px] mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="quote-email" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Email Address*</label>
                        <input id="quote-email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} onBlur={() => handleBlur("email")} className={getInputClass("email")} />
                        {touched.email && errors.email && <p className="text-[#DC2626] text-[12px] mt-1">{errors.email}</p>}
                      </div>

                      {/* Row 3 */}
                      <div>
                        <label htmlFor="quote-country" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Country*</label>
                        <select id="quote-country" name="country" value={formData.country} onChange={handleChange} onBlur={() => handleBlur("country")} className={getInputClass("country")}>
                          <option value="">Select Country</option>
                          <option value="India">India</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="UAE">UAE</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Central Asia">Central Asia</option>
                          <option value="Africa">Africa</option>
                          <option value="Other">Other</option>
                        </select>
                        {touched.country && errors.country && <p className="text-[#DC2626] text-[12px] mt-1">{errors.country}</p>}
                      </div>
                      <div>
                        <label htmlFor="quote-productName" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Product or Service Name</label>
                        <input id="quote-productName" name="productName" type="text" placeholder="E.g. Rice Export, Air Freight, Logistics" value={formData.productName} onChange={handleChange} onBlur={() => handleBlur("productName")} className={getInputClass("productName")} />
                      </div>

                      {/* Row 4 */}
                      <div>
                        <label htmlFor="quote-quantity" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Quantity Expected</label>
                        <input id="quote-quantity" name="quantity" type="text" placeholder="E.g. 10 MT, 500 units" value={formData.quantity} onChange={handleChange} onBlur={() => handleBlur("quantity")} className={getInputClass("quantity")} />
                      </div>
                      <div>
                        <label htmlFor="quote-location" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Preferred Supply Location</label>
                        <input id="quote-location" name="location" type="text" placeholder="Destination city or port" value={formData.location} onChange={handleChange} onBlur={() => handleBlur("location")} className={getInputClass("location")} />
                      </div>

                      {/* Row 5 */}
                      <div>
                        <label htmlFor="quote-date" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Estimated Date*</label>
                        <input id="quote-date" name="date" type="date" value={formData.date} onChange={handleChange} onBlur={() => handleBlur("date")} className={getInputClass("date")} />
                        {touched.date && errors.date && <p className="text-[#DC2626] text-[12px] mt-1">{errors.date}</p>}
                      </div>
                      <div>
                        <label htmlFor="quote-shippingType" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Shipping Type</label>
                        <select id="quote-shippingType" name="shippingType" value={formData.shippingType} onChange={handleChange} onBlur={() => handleBlur("shippingType")} className={getInputClass("shippingType")}>
                          <option value="">Select Shipping Type</option>
                          <option value="Sea Freight">Sea Freight</option>
                          <option value="Air Freight">Air Freight</option>
                          <option value="Road Transport">Road Transport</option>
                          <option value="Rail">Rail</option>
                          <option value="Warehousing">Warehousing</option>
                          <option value="Multiple">Multiple</option>
                        </select>
                      </div>
                    </div>

                    {/* Enquiry Type Radio Pills */}
                    <div id="quote-enquiryType">
                      <label className="font-inter text-[13px] font-semibold text-[#374151] mb-[8px] block">Type of Enquiry*</label>
                      <div className="flex flex-wrap gap-[8px]">
                        {["Product Export", "Logistics Service", "Joint Venture", "General Enquiry", "Partnership"].map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, enquiryType: type }));
                              setErrors(prev => ({ ...prev, enquiryType: "" }));
                            }}
                            className={`border-[1.5px] rounded-[20px] px-[18px] py-[8px] font-inter text-[13px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B8960C] focus:ring-offset-2 ${
                              formData.enquiryType === type 
                                ? "bg-[#B8960C] border-[#B8960C] text-white shadow-[0_2px_10px_rgba(184,150,12,0.35)]" 
                                : "border-[#E5E7EB] text-[#6B7280] hover:bg-gray-50"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      {touched.enquiryType && errors.enquiryType && <p className="text-[#DC2626] text-[12px] mt-1">{errors.enquiryType}</p>}
                    </div>

                    {/* Which Group Company Checkbox Pills */}
                    <div>
                      <label className="font-inter text-[13px] font-semibold text-[#374151] mb-[8px] block">Which Group Company?</label>
                      <div className="flex flex-wrap gap-[8px]">
                        {["Hoque Mercantile", "Hoque Industries", "Hoque Logistics", "All Companies"].map(company => {
                          const isSelected = formData.companies.includes(company);
                          return (
                            <button
                              key={company}
                              type="button"
                              onClick={() => toggleCompany(company)}
                              className={`border-[1.5px] rounded-[20px] px-[18px] py-[8px] font-inter text-[13px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B8960C] focus:ring-offset-2 ${
                                isSelected 
                                  ? "bg-[#B8960C] border-[#B8960C] text-white shadow-[0_2px_10px_rgba(184,150,12,0.35)]" 
                                  : "border-[#E5E7EB] text-[#6B7280] hover:bg-gray-50"
                              }`}
                            >
                              {company}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="quote-message" className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Your Message</label>
                      <textarea 
                        id="quote-message"
                        name="message" 
                        rows={5} 
                        placeholder="Describe your requirement in detail — product type, quantity, origin, destination, timeline, and any special handling needs."
                        value={formData.message} 
                        onChange={handleChange} 
                        className={getInputClass("message")}
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    {/* File Attachment */}
                    <div>
                      <label className="font-inter text-[13px] font-semibold text-[#374151] mb-[6px] block">Attach Documents (optional)</label>
                      <div className="border-[2px] border-dashed border-[#E5E7EB] rounded-[10px] p-[20px] pt-[24px] pb-[24px] flex flex-col items-center justify-center bg-[#FAFAFA] hover:border-[#B8960C] hover:bg-[#B8960C]/[0.03] transition-colors duration-250 cursor-pointer text-center">
                        <UploadCloud className="text-gray-400 w-[28px] h-[28px] mb-[8px]" />
                        <span className="font-inter text-[14px] text-gray-600 font-medium">Drag files here or click to upload</span>
                        <span className="font-inter text-[12px] text-gray-500 mt-[4px]">PDF, DOC, XLS up to 5MB</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-[#F9FAFB] px-[24px] py-[20px] md:px-[36px] md:py-[24px] rounded-b-[16px] border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-[16px] md:gap-0 shrink-0">
                    <div className="flex items-center gap-[6px]">
                      <Lock className="w-[13px] h-[13px] text-gray-400" />
                      <span className="font-inter text-[13px] text-gray-500">Your information is secure and will never be shared.</span>
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:w-auto gap-[12px]">
                      <button 
                        type="button" 
                        onClick={onClose}
                        className="bg-white border-[1.5px] border-[#E5E7EB] text-[#0D2E3D] px-[24px] py-[12px] rounded-[7px] font-inter text-[14px] font-medium hover:border-[#B8960C] hover:text-[#B8960C] transition-all focus:outline-none focus:ring-2 focus:ring-[#B8960C]"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#B8960C] text-white px-[28px] py-[12px] rounded-[7px] font-inter font-bold text-[15px] hover:bg-[#9A7B0A] hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(184,150,12,0.4)] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8960C] disabled:opacity-80 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : "Submit Enquiry \u2192"}
                      </button>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  id="success-panel"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex flex-col items-center justify-center p-[40px] md:p-[60px] text-center min-h-[400px] relative overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="w-[80px] h-[80px] text-[#B8960C] mb-[24px]" />
                  </motion.div>
                  <h3 className="font-inter font-bold text-[#0D2E3D] text-[22px] mb-[12px]">Enquiry Submitted Successfully</h3>
                  <p className="font-inter text-[#6B7280] text-[15px] max-w-[400px] mb-[32px]">
                    Thank you {formData.fullName}. Our team will respond to {formData.email} within 24 business hours.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-[#B8960C] text-white px-[32px] py-[12px] rounded-[7px] font-inter font-bold text-[15px] hover:bg-[#9A7B0A] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8960C]"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
