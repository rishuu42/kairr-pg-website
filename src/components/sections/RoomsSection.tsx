"use client";

import { motion } from "framer-motion";
import { BedDouble, Users } from "lucide-react";
import Image from "next/image";

const rooms = [
  {
    type: "Single Occupancy",
    tag: "Premium",
    price: "₹24,000",
    description: "Your personal sanctuary. A spacious private room designed for deep focus, safety, and ultimate relaxation.",
    features: ["King-size bed", "Private balcony", "Attached washroom", "Dedicated workspace"],
    icon: <BedDouble className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
  },
  {
    type: "Double Occupancy",
    tag: "Popular",
    price: "₹15,000",
    description: "The perfect balance of community and privacy. Share a beautifully designed space with a like-minded roommate.",
    features: ["Twin beds", "Shared balcony", "Attached washroom", "Dual wardrobes"],
    icon: <Users className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1000",
  }
];

export function RoomsSection() {
  return (
    <section id="rooms" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#E50914] opacity-[0.03] blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-serif mb-6 tracking-tight dark:text-white text-gray-900"
            >
              Curated <span className="italic text-[#E50914]">Living</span> Spaces.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="dark:text-gray-400 text-gray-600 text-lg"
            >
              Choose a room that matches your lifestyle. Every space is meticulously crafted with modern aesthetics, ensuring a safe and comfortable environment.
            </motion.p>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-8 py-3 border border-black/10 dark:border-white/10 hover:border-[#E50914] rounded-none text-xs font-medium transition-all dark:text-white text-gray-900 uppercase tracking-widest hover:text-[#E50914]"
          >
            View Full Gallery
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="border border-black/10 dark:border-white/10 bg-white dark:bg-[#050505] overflow-hidden group flex flex-col shadow-sm"
            >
              <div className="h-72 w-full relative overflow-hidden bg-black">
                <Image 
                  src={room.image} 
                  alt={room.type}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute top-6 right-6 px-4 py-1.5 bg-black text-white text-xs font-semibold uppercase tracking-widest z-10">
                  {room.tag}
                </div>
                
                <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                  <div className="w-12 h-12 bg-white flex items-center justify-center text-[#E50914] shadow-lg">
                    {room.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-white">{room.type}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold dark:text-white text-gray-900">{room.price}</span>
                    <span className="text-sm dark:text-gray-500 text-gray-500">/ month</span>
                  </div>
                  <a href="tel:+919891344213" className="px-6 py-2 text-xs font-medium text-[#E50914] hover:text-white bg-[#E50914]/10 hover:bg-[#E50914] rounded-none transition-colors uppercase tracking-widest border border-transparent hover:border-[#E50914]">
                    Enquire Now
                  </a>
                </div>
                
                <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {room.description}
                </p>
                
                <div className="space-y-3 mt-auto">
                  {room.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                      <span className="text-sm dark:text-gray-300 text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
