"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Search } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] rounded-full bg-[#E50914] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-white opacity-[0.02] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-2xl pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-[#E50914]" />
            <span className="text-sm uppercase tracking-widest text-[#E50914] font-semibold">Uttam Nagar, Delhi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-serif mb-6 leading-[1.05] dark:text-white text-gray-900"
          >
            Elevated <br />
            <span className="italic text-[#E50914]">Living</span> for <br />
            Women.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl dark:text-gray-400 text-gray-600 mb-10 leading-relaxed max-w-xl"
          >
            Experience the fusion of luxury, safety, and comfort at KAIRR Girls Hostel. A premium space designed exclusively for your peace of mind in Milap Nagar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
          >
            <a href="tel:+919891344213" className="px-10 py-4 bg-[#E50914] hover:bg-[#b80710] text-white font-medium transition-all text-center tracking-wide uppercase text-sm">
              Book a Tour
            </a>
            <a href="#gallery" className="px-10 py-4 bg-transparent border-b border-black dark:border-white text-black dark:text-white font-medium transition-all text-center tracking-wide uppercase text-sm hover:text-[#E50914] hover:border-[#E50914]">
              View Gallery
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-black overflow-hidden relative">
                  <Image 
                    src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80`}
                    alt="Resident"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E50914] text-[#E50914]" />
                ))}
              </div>
              <span className="text-sm dark:text-gray-400 text-gray-600 font-medium mt-0.5">Trusted by 500+ residents</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] md:h-[650px] lg:h-[750px] w-full mt-12 lg:mt-0 flex justify-end"
        >
          <div className="relative w-full md:w-[80%] h-full overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000"
              alt="Premium Hostel Room"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlapping Secondary Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-0 top-1/4 w-[50%] h-[40%] overflow-hidden border-4 border-white dark:border-[#050505] shadow-2xl hidden md:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800"
              alt="Premium Amenities"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div className="absolute bottom-12 left-8 md:-left-8 bg-white dark:bg-black p-6 border border-black/10 dark:border-white/10 shadow-xl max-w-xs hidden sm:block">
            <p className="font-serif text-lg dark:text-white text-gray-900 mb-2">Refined Living.</p>
            <p className="text-sm dark:text-gray-400 text-gray-600">Curated spaces designed for focus, relaxation, and unparalleled comfort.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
