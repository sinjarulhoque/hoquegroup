"use client";

import Image from "next/image";
import { motion } from "motion/react";

const news = [
  {
    date: "March 15, 2024",
    title: "Future of Maritime Logistics in SE Asia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyxpsUgLZ9GXwM5rKZ4BBOb2jktvJNR0UbpJShhTZr3bndkh7z5TEcPVfnyEXM3XsmHxPUxcpXOneRO3riTnedkBAVyy_JG_YLwXC3sqAv5eH8gQyJWwIQyCL5jbj51i30ZKKaMRceD79cxontxAz9vg-UY5t1E48o6mFCzxd-pweyo4zG3bK1CsSWT8A55hv9-aQUeZoidluS83ktnis-EKldIoqeMqi-SHWxujUV0CQoBOY2weN7heOUGM-Jit1U7QFe6FRx4g"
  },
  {
    date: "March 08, 2024",
    title: "Sustainable Farming: The Export Advantage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf1zdqLLV4NnujZQDSyRI7zNgtgnZAjkSywZsaVb6VEFIFBb6Cp_OLMLCMgzHbJVqvE1M7s7DtAIt7XgT6hi-fTTF17xdg0aszactX-Tdbse61bK3Tz2zFRBE8rk3ohLVc6VevDZgzXXY34fa7gMFW3K3Wg8XLialJfdSCQ-TlYxsgZHfWNfXE8GcRZUfUtg-UNZHmkRMFOxaj21lAu9PRE6ogo-RUOWe0v5Sn_XxAxlple4XqYlfG1n8Ta6ybDHpxiBP0-3Ju1Q"
  },
  {
    date: "February 28, 2024",
    title: "Coal Import Policies and Global Energy Shifts",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJhmFWzfpeyRWHvqDgSX9dI6IvxLqoRY5uCSkLtToYQXDR3jB6T6G9azgRQEppsBtjqL1HHvuTfZyS3l0gpCw3JlYct9wFMmjBZ_FGar0du-rp9N9Vd1nFRJ50Q3TPwyesdCJLuXfgVI-aHz9Q87dObmBK6L5iFOZWYI_4M7wPEltOjPSE9dvE1JQ0AabBJ4QVkQ_IkIA_Oxb2XYcDtaK5hXNCs_cHJDDHqhGLE1lzUqh4Tn7cV9kyWi4MWuDxFqgkDOOINEUqtQ"
  }
];

export function LatestNews() {
  return (
    <section id="blog" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Industry Insights</span>
          <h2 className="text-primary font-headline text-4xl md:text-5xl font-bold mt-4">Latest Updates</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl h-64 mb-6 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-secondary text-sm font-bold mb-3 tracking-wide">{item.date}</div>
              <h4 className="text-2xl font-headline font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
