"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-[800px] mx-auto pt-[160px] pb-[80px] px-8">
        <div className="text-[12px] font-bold tracking-widest text-[#B8960C] mb-4 uppercase">Legal</div>
        <h1 className="text-[44px] font-playfair font-bold text-[#0D2E3D] mb-6 leading-tight">Cookie Policy</h1>
        <div className="w-[48px] h-[3px] bg-[#B8960C] mb-6"></div>
        <div className="text-[#6B7280] text-[13px] mb-12">Last updated: January 2024</div>
        
        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-[#0D2E3D] mb-4">What Are Cookies?</h2>
          <p className="text-[#6B7280] text-[16px] leading-[1.78]">
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
            They are widely used in order to make websites work efficiently and to provide reporting information to the 
            website owners. Cookies help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-[#0D2E3D] mb-4">How Hoque Group Uses Cookies</h2>
          <p className="text-[#6B7280] text-[16px] leading-[1.78]">
            Hoque Group uses cookies to ensure you get the most out of our website. We use them for various purposes, 
            such as keeping you logged in, storing your preferences across sessions, and analyzing how our site is used 
            so we can continue to improve its performance and relevance. Non-essential cookies, such as those used for 
            marketing and detailed analytics, are completely optional and rely on your explicit consent.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-[#0D2E3D] mb-6">Types of Cookies We Use</h2>
          <div className="w-full bg-white rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#0D2E3D] text-white">
                  <th className="p-4 font-semibold text-[14px]">Cookie Name</th>
                  <th className="p-4 font-semibold text-[14px]">Category</th>
                  <th className="p-4 font-semibold text-[14px]">Purpose</th>
                  <th className="p-4 font-semibold text-[14px]">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "_session", cat: "Necessary", purpose: "User session management", duration: "Session" },
                  { name: "_csrf", cat: "Necessary", purpose: "Security protection", duration: "Session" },
                  { name: "_lang", cat: "Necessary", purpose: "Language preference storage", duration: "1 year" },
                  { name: "hoque_lang", cat: "Preferences", purpose: "Site language setting", duration: "1 year" },
                  { name: "hoque_theme", cat: "Preferences", purpose: "Display preferences", duration: "1 year" },
                  { name: "_ga", cat: "Analytics", purpose: "Google Analytics user tracking", duration: "2 years" },
                  { name: "_gid", cat: "Analytics", purpose: "Google Analytics session", duration: "24 hours" },
                  { name: "_gtag", cat: "Analytics", purpose: "Google Analytics tag", duration: "1 year" },
                  { name: "_fbp", cat: "Marketing", purpose: "Facebook Pixel tracking", duration: "3 months" },
                  { name: "_gcl_au", cat: "Marketing", purpose: "Google Ads conversion", duration: "3 months" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="p-4 text-[14px] text-[#0D2E3D] font-mono border-t border-gray-100">{row.name}</td>
                    <td className="p-4 text-[14px] text-[#6B7280] border-t border-gray-100">{row.cat}</td>
                    <td className="p-4 text-[14px] text-[#6B7280] border-t border-gray-100">{row.purpose}</td>
                    <td className="p-4 text-[14px] text-[#6B7280] border-t border-gray-100">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-[#0D2E3D] mb-4">Managing Your Cookie Preferences</h2>
          <p className="text-[#6B7280] text-[16px] leading-[1.78]">
            You have the right to decide whether to accept or reject non-essential cookies. You can exercise your 
            cookie preferences at any time by utilizing our Cookie Consent tool. To reopen the preferences panel, 
            simply click the &quot;Manage My Cookie Preferences&quot; button below or click the floating cookie icon located 
            at the bottom-left corner of the website. Furthermore, you can modify your browser settings to refuse or 
            delete cookies entirely.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-[#0D2E3D] mb-4">Third Party Cookies</h2>
          <p className="text-[#6B7280] text-[16px] leading-[1.78]">
            In some special cases, we also use cookies provided by trusted third parties, such as Google Analytics 
            and Facebook Pixel, which help us analyze traffic and deliver improved marketing solutions. These third-party 
            entities have their own privacy policies governing their data practices.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-[24px] font-bold text-[#0D2E3D] mb-4">Contact Us About Cookies</h2>
          <div className="bg-[#F3F4F6] rounded-[12px] p-6 text-[#4B5563] text-[15px] max-w-[500px]">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@hoquegroup.com" className="text-[#B8960C] hover:underline">info@hoquegroup.com</a></p>
            <p><strong>Address:</strong> 27 Bentinck Street, Kolkata, WB, India</p>
          </div>
        </section>

        <div className="mt-16 text-center md:text-left">
           <button 
             onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))} 
             className="bg-[#B8960C] text-white font-bold text-[15px] py-4 px-8 rounded-[8px] hover:bg-[#9A7B0A] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_24px_rgba(184,150,12,0.3)] hover:shadow-[0_12px_32px_rgba(184,150,12,0.4)] focus:outline-none"
           >
             Manage My Cookie Preferences
           </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
