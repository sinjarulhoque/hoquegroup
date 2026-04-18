"use client";

import { motion } from "motion/react";
import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="bg-[#0D2E3D] pt-20 pb-0 text-slate-300 font-inter text-sm leading-relaxed overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-6">
             <div className="text-3xl font-bold text-white flex flex-col leading-none">
                <span className="tracking-widest font-serif">HOQUE</span>
                <span className="text-[10px] text-gray-400 tracking-widest mt-1 font-sans font-bold">QUALITY IS IDENTITY</span>
             </div>
          </div>
          <p className="mb-6 leading-relaxed">Global logistics and industrial conglomerate specializing in import-export and large-scale supply chain solutions.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-250 hover:bg-[#B8960C] hover:text-white">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-250 hover:bg-[#B8960C] hover:text-white">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-250 hover:bg-[#B8960C] hover:text-white">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-250 hover:bg-[#B8960C] hover:text-white">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-[#B8960C] font-bold mb-6 text-[16px]">Quick Links</h4>
          <ul className="space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/#about" },
              { name: "Services", href: "/#services" },
              { name: "Group Companies", href: "/#group-companies" },
              { name: "Contact", href: "/#contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link className="text-white hover:text-[#B8960C] transition-colors flex items-center gap-2 group" href={item.href}>
                  <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all font-bold text-[#B8960C]">&rarr;</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-[#B8960C] font-bold mb-6 text-[16px]">Group Companies</h4>
          <ul className="space-y-4 mb-8">
            <li><Link className={`text-white hover:text-[#B8960C] transition-colors ${pathname === '/hoque-mercantile' ? 'font-bold' : ''}`} href="/hoque-mercantile">Hoque Mercantile Pvt Ltd</Link></li>
            <li><Link className={`text-white hover:text-[#B8960C] transition-colors ${pathname === '/hoque-industries' ? 'font-bold' : ''}`} href="/hoque-industries">Hoque Industries Pvt Ltd</Link></li>
            <li><Link className={`text-white hover:text-[#B8960C] transition-colors ${pathname === '/hoque-logistics' ? 'font-bold' : ''}`} href="/hoque-logistics">Hoque Logistics Pvt Ltd</Link></li>
            <li><Link className={`text-white hover:text-[#B8960C] transition-colors ${pathname === '/kadbanu-trust' ? 'font-bold text-[#B8960C]' : ''}`} href="/kadbanu-trust">Kadbanu Charitable Trust</Link></li>
          </ul>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#B8960C] shrink-0" />
              <span className="text-white">+91 033 4600 4025</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#B8960C] shrink-0" />
              <span className="text-white">1800 833 9331</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#B8960C] shrink-0" />
              <span className="text-white">info@hoquegroup.com</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h4 className="text-[#B8960C] font-bold mb-6 text-[16px]">Our Location</h4>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="h-[180px] w-full rounded-[10px] overflow-hidden relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.33063539893!2d88.3496030588628!3d22.568305012551523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a06c2794eb%3A0xe108365efcccbe59!2sMK%20Point!5e0!3m2!1sen!2sin!4v1709646452292!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-opacity duration-500"
            />
          </motion.div>
          <div className="pt-2 flex flex-col gap-2">
            <div className="text-white text-[13px] leading-relaxed">
              27, Bentinck Street, MK Point, Room No. 701, Kolkata-700001, West Bengal, India
            </div>
            <div className="text-white text-[13px] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B8960C]" />
              Mon-Fri 10:30-19:00, Sat 10:30-17:00
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="bg-[#081E28] py-4 mt-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white text-[12px]">
            © 2019 Hoque Group of Industries. All Rights Reserved.
          </div>
          <div className="text-white text-[12px]">
            Quality is Identity.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
