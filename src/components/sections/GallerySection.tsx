"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000", // bedroom
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1000", // modern living
  "/image3.jpeg", // kitchen/room
  "/Terrace.jpeg",  // terrace
  "/washroom.jpeg", // washroom
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1000" // bedroom 2
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif mb-6 tracking-tight dark:text-white text-gray-900"
          >
            A Glimpse of <span className="italic text-[#E50914]">Luxury.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="dark:text-gray-400 text-gray-600 text-lg"
          >
            Take a visual tour of our premium spaces designed for comfort, productivity, and community.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden group break-inside-avoid"
            >
              {/* This padding-bottom approach gives varying heights or standard aspect ratios */}
              <div className="relative w-full h-[300px] sm:h-[400px]">
                <Image 
                  src={src} 
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 group-hover:bg-white/10 dark:group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
