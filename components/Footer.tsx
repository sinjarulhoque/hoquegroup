import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 text-slate-400 font-body text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-10 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-6">
             <div className="text-3xl font-bold text-[#4a789c] flex flex-col leading-none">
                <span className="tracking-widest font-serif">HOQUE</span>
                <span className="text-[10px] text-gray-400 tracking-widest mt-1 font-sans font-bold">QUALITY IS IDENTITY</span>
             </div>
          </div>
          <p className="mb-6">Global logistics and industrial conglomerate specializing in import-export and large-scale supply chain solutions.</p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Strategic Solutions</h4>
          <ul className="space-y-4">
            <li><a className="hover:text-secondary transition-all" href="#">Global Trade Routes</a></li>
            <li><a className="hover:text-secondary transition-all" href="#">Carrier Partners</a></li>
            <li><a className="hover:text-secondary transition-all" href="#">Warehouse Management</a></li>
            <li><a className="hover:text-secondary transition-all" href="#">Fleet Tracking</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4">
            <li><a className="hover:text-secondary transition-all" href="#">Our Business</a></li>
            <li><a className="hover:text-secondary transition-all" href="#">CSR Initiatives</a></li>
            <li><a className="hover:text-secondary transition-all" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-secondary transition-all" href="#">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Find Us</h4>
          <div className="h-40 w-full rounded overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927768!2d88.26495092043642!3d22.53540637452678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1713206245367!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-70"
            ></iframe>
          </div>
          <div className="flex items-start gap-3">
            <span>12/A Industrial Estate, Kolkata, India</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 border-t border-white/5 pt-8 text-center text-xs tracking-widest">
        © 2024 Hoque Group of Industries. All Rights Reserved.
      </div>
    </footer>
  );
}
