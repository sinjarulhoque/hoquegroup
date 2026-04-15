"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="bg-surface-container-low py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl z-10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9bV18aHjojNC0HKpuJDV3HWFS1nAZSK9sRBQaSA9LadUchf_wiI-fYnrTyKYBoqsIQL0S83QqqRtT7vxccmTPZrhLTwvI_ohoq7EwGi1FK9NwPYiPnpqJRmSdxfDi399M26JjMStdgXeJbJY-x4X4sx4HbE0Ouhhqe7RuMPuy6uK0mZcMbTO_mAfMyYcQ5rEaBej0BZCPg4e32IL4NWBT1oXLJWm1HyCVo6rkh93ZuYPCqQwPlQzQ_S862TIl2DnmibR4p0uYRQ"
              alt="Professional logistics operations manager"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="space-y-8 relative z-20">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4 }}
              className="inline-block text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              Industrial Authority
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1], delay: 0.1 }}
              className="text-primary font-headline text-4xl md:text-5xl font-bold leading-tight"
            >
              Reshaping Global Trade Dynamics
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-on-surface-variant text-lg leading-relaxed"
          >
            Hoque Group stands at the intersection of traditional values and modern digital precision. We provide end-to-end transparency in supply chain management, ensuring every cargo movement is tracked, secured, and delivered with excellence.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-headline font-bold text-secondary">500+</div>
              <div className="text-on-surface-variant font-medium mt-2">Global Shipments</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-headline font-bold text-secondary">8+</div>
              <div className="text-on-surface-variant font-medium mt-2">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
