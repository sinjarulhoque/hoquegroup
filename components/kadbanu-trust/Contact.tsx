"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-[90px] px-8 md:px-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#B8960C] text-[12px] uppercase tracking-wider font-bold block mb-4">
            CONTACT US
          </span>
          <h2 className="text-[#0D2E3D] text-[36px] md:text-[40px] font-playfair font-bold mb-4">
            Get in Touch with Kadbanu Charitable Trust
          </h2>
          <p className="text-gray-600 text-[16px] max-w-[560px] mx-auto text-center">
            For donations, volunteering, partnership, or general enquiries — reach out to us directly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
            className="w-full md:w-[42%] bg-white rounded-[14px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col"
          >
            <h3 className="text-[#0D2E3D] font-bold text-[18px]">Contact Information</h3>
            <div className="w-[40px] h-[3px] bg-[#B8960C] mt-3 mb-8" />
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#FFF8E7] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[15px]">+(91) 033 4600 4025</div>
                  <div className="text-gray-500 text-[13px] mt-0.5">Monday to Saturday, 10:30 AM – 7:00 PM</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#FFF8E7] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0D2E3D] font-bold text-[15px]">1800 833 9331</span>
                    <span className="bg-[#B8960C] text-[#0D2E3D] text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Toll Free</span>
                  </div>
                  <div className="text-gray-500 text-[13px] mt-0.5">National Support Line</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#FFF8E7] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[15px]">kadbanutrust@gmail.com</div>
                  <div className="text-gray-500 text-[13px] mt-0.5">Response within 24 hours</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#FFF8E7] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-[#0D2E3D] font-bold text-[15px]">info@hoquegroup.com</div>
                  <div className="text-gray-500 text-[13px] mt-0.5">Via Hoque Group of Industries</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-[40px] h-[40px] rounded-full bg-[#FFF8E7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#B8960C]" />
                </div>
                <div>
                  <div className="text-gray-600 text-[15px] leading-relaxed">
                    27, Bentinck Street, MK Point, Room No. 704, Kolkata-700001, West Bengal, India
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[210px] rounded-[10px] overflow-hidden mt-8 mb-4 border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.285514605553!2d88.3490799761367!3d22.568424233124578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a06ee02f83%3A0xeae0cc46ee1aa6e2!2sMK%20Point%2C%2027%2C%20Bentinck%20St%2C%20Mission%20Row%20Extension%2C%20Esplanade%2C%20Lal%20Bazar%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-[#0D2E3D] p-5 rounded-[10px] flex items-start gap-4">
               <Clock className="w-5 h-5 text-[#B8960C] shrink-0 mt-0.5" />
               <div className="text-white text-[13px] leading-relaxed w-full">
                 <div className="flex justify-between items-center mb-1">
                   <span>Monday–Friday:</span>
                   <span>10:30 AM – 7:00 PM</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span>Saturday:</span>
                   <span>10:30 AM – 5:00 PM</span>
                 </div>
               </div>
            </div>

          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="w-full md:w-[58%] bg-white rounded-[14px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-[#0D2E3D] font-bold text-[22px] mb-2">Send Us a Message</h3>
              <p className="text-gray-500 text-[14px]">Fields marked * are required.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" id="name" required className="block w-full px-4 py-3 text-[15px] bg-transparent border border-gray-300 rounded-[8px] appearance-none focus:outline-none focus:ring-0 focus:border-[#B8960C] peer transition-all duration-300" placeholder=" " />
                  <label htmlFor="name" className="absolute text-[15px] text-gray-500 duration-300 transform -translate-y-[22px] scale-75 top-[14px] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:font-normal peer-focus:scale-75 peer-focus:-translate-y-[28px] left-[8px] px-2 bg-white peer-focus:text-[#B8960C] peer-focus:font-semibold peer-focus:left-[8px]">Full Name *</label>
                </div>
                <div className="relative group">
                  <input type="text" id="company" className="block w-full px-4 py-3 text-[15px] bg-transparent border border-gray-300 rounded-[8px] appearance-none focus:outline-none focus:ring-0 focus:border-[#B8960C] peer transition-all duration-300" placeholder=" " />
                  <label htmlFor="company" className="absolute text-[15px] text-gray-500 duration-300 transform -translate-y-[22px] scale-75 top-[14px] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:font-normal peer-focus:scale-75 peer-focus:-translate-y-[28px] left-[8px] px-2 bg-white peer-focus:text-[#B8960C] peer-focus:font-semibold peer-focus:left-[8px]">Organisation or Company Name</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="tel" id="phone" required className="block w-full px-4 py-3 text-[15px] bg-transparent border border-gray-300 rounded-[8px] appearance-none focus:outline-none focus:ring-0 focus:border-[#B8960C] peer transition-all duration-300" placeholder=" " />
                  <label htmlFor="phone" className="absolute text-[15px] text-gray-500 duration-300 transform -translate-y-[22px] scale-75 top-[14px] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:font-normal peer-focus:scale-75 peer-focus:-translate-y-[28px] left-[8px] px-2 bg-white peer-focus:text-[#B8960C] peer-focus:font-semibold peer-focus:left-[8px]">Phone Number *</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" required className="block w-full px-4 py-3 text-[15px] bg-transparent border border-gray-300 rounded-[8px] appearance-none focus:outline-none focus:ring-0 focus:border-[#B8960C] peer transition-all duration-300" placeholder=" " />
                  <label htmlFor="email" className="absolute text-[15px] text-gray-500 duration-300 transform -translate-y-[22px] scale-75 top-[14px] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:font-normal peer-focus:scale-75 peer-focus:-translate-y-[28px] left-[8px] px-2 bg-white peer-focus:text-[#B8960C] peer-focus:font-semibold peer-focus:left-[8px]">Email Address *</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <select id="country" className="block w-full px-4 py-3 text-[15px] bg-transparent border border-gray-300 rounded-[8px] appearance-none focus:outline-none focus:ring-0 focus:border-[#B8960C] peer transition-all duration-300 text-gray-700">
                    <option value="IN">India</option>
                    <option value="BD">Bangladesh</option>
                    <option value="AE">UAE</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <label htmlFor="country" className="absolute text-[13px] text-[#B8960C] font-semibold -translate-y-[28px] top-[14px] left-[8px] px-2 bg-white z-10">Country</label>
                </div>
                <div className="relative group">
                  <input type="text" id="city" className="block w-full px-4 py-3 text-[15px] bg-transparent border border-gray-300 rounded-[8px] appearance-none focus:outline-none focus:ring-0 focus:border-[#B8960C] peer transition-all duration-300" placeholder=" " />
                  <label htmlFor="city" className="absolute text-[15px] text-gray-500 duration-300 transform -translate-y-[22px] scale-75 top-[14px] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:font-normal peer-focus:scale-75 peer-focus:-translate-y-[28px] left-[8px] px-2 bg-white peer-focus:text-[#B8960C] peer-focus:font-semibold peer-focus:left-[8px]">City</label>
                </div>
              </div>

              <div className="pt-2">
                <label className="text-[14px] font-medium text-gray-700 mb-3 block">Enquiry Type</label>
                <div className="flex flex-wrap gap-2">
                  {['General Enquiry', 'Donation', 'Volunteer', 'Partnership', 'Medical Camp', 'Other'].map((type, i) => (
                    <label key={i} className="cursor-pointer">
                      <input type="radio" name="enquiryType" value={type} className="peer sr-only" defaultChecked={i === 0} />
                      <span className="inline-block px-4 py-2 rounded-full border border-gray-300 text-[14px] text-gray-600 peer-checked:bg-[#FFF8E7] peer-checked:border-[#B8960C] peer-checked:text-[#B8960C] peer-checked:font-semibold transition-all duration-300">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative group pt-2">
                <textarea id="message" rows={6} className="block w-full px-4 py-3 text-[15px] bg-transparent border border-gray-300 rounded-[8px] appearance-none focus:outline-none focus:ring-0 focus:border-[#B8960C] peer transition-all duration-300 resize-none" placeholder="Tell us how you would like to contribute, volunteer, or partner with Kadbanu Charitable Trust."></textarea>
                <label htmlFor="message" className="absolute text-[13px] text-[#B8960C] font-semibold -translate-y-4 top-2 left-2 px-2 bg-white z-10 transition-all">Your Message</label>
              </div>

              <button type="submit" className="w-full bg-[#B8960C] text-white py-[16px] rounded-[8px] font-bold text-[16px] hover:bg-[#9A7B0A] hover:-translate-y-[2px] shadow-[0_4px_12px_rgba(184,150,12,0.3)] hover:shadow-[0_8px_20px_rgba(184,150,12,0.4)] transition-all duration-300 mt-4">
                Send Message →
              </button>
            </form>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
