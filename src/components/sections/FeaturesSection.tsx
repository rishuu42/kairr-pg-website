"use client";

import { motion } from "framer-motion";
import { Wifi, ShieldCheck, Utensils, Zap, Car, UserCheck, Sun } from "lucide-react";

const features = [
  {
    icon: <UserCheck className="w-6 h-6 text-[#E50914]" />,
    title: "24x7 Female Warden",
    description: "Managed by a highly experienced female warden ensuring a completely safe, secure, and supportive environment."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#E50914]" />,
    title: "Premium Security",
    description: "Biometric check-in, fully CCTV monitored premises, and round-the-clock security guards for absolute peace of mind."
  },
  {
    icon: <Utensils className="w-6 h-6 text-[#E50914]" />,
    title: "All Meals Included",
    description: "Nutritious and delicious daily meals (Breakfast, Lunch, and Dinner) served in a hygienic dining area."
  },
  {
    icon: <Car className="w-6 h-6 text-[#E50914]" />,
    title: "Free Pick & Drop",
    description: "Complimentary dedicated driver services for daily pick up and drop off to nearby coaching institutes."
  },
  {
    icon: <Sun className="w-6 h-6 text-[#E50914]" />,
    title: "Luxury Terrace",
    description: "Access to a massive 2700 sq.ft open luxury terrace area for relaxation, yoga, and fresh air."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#E50914]" />,
    title: "All Essential Amenities",
    description: "High-speed Wi-Fi, fully air-conditioned rooms, daily cleaning services (including toilets/balcony), and 100% power backup."
  }
];

export function FeaturesSection() {
  return (
    <section id="amenities" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif mb-6 tracking-tight dark:text-white text-gray-900"
          >
            Redefining <span className="italic text-[#E50914]">Standards.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="dark:text-gray-400 text-gray-600 text-lg"
          >
            Experience a curated selection of premium amenities designed specifically for the comfort, safety, and success of female students.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-[#050505] group hover:border-[#E50914]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#E50914]/5 dark:bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center mb-6 group-hover:bg-[#E50914]/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white text-gray-900">{feature.title}</h3>
              <p className="dark:text-gray-400 text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
