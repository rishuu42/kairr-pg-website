"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Navbar({ onEnquire = () => {} }: { onEnquire?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-[#050505] border-b border-black/10 dark:border-white/10 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 relative z-50">
          <div className="flex items-center">
            <Image 
              src="/logo-dark.png" 
              alt="KAIRR Girls Hostel Logo" 
              width={200} 
              height={64}
              className="h-12 md:h-16 w-auto object-contain hidden dark:block"
              priority
            />
            <Image 
              src="/logo-light.png" 
              alt="KAIRR Girls Hostel Logo" 
              width={200} 
              height={64}
              className="h-12 md:h-16 w-auto object-contain block dark:hidden"
              priority
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Rooms", "Amenities", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-sm dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-none flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black transition-colors"
          >
            {mounted && theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href="https://share.google/yiyL6QfETlVOShiik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#E50914] transition-colors dark:text-white text-gray-900 tracking-wide uppercase flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Visit Us
          </a>
          <button onClick={onEnquire} className="px-6 py-3 text-sm font-medium bg-[#E50914] hover:bg-[#b80710] text-white rounded-none transition-all tracking-wide uppercase">
            Enquire Now
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden relative z-50">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center dark:text-gray-400 text-gray-600"
          >
            {mounted && theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="dark:text-white text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`block h-[2px] w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`block h-[2px] w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-full bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 z-40 bg-white dark:bg-[#050505] pt-24 px-6 flex flex-col h-screen"
        >
          <div className="flex flex-col gap-6 mt-8">
            {["Rooms", "Amenities", "Gallery", "Contact"].map((item, i) => (
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-5xl font-serif dark:text-white text-gray-900 border-b border-black/10 dark:border-white/10 pb-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-auto mb-12 flex flex-col gap-4"
          >
            <button onClick={() => { setMobileMenuOpen(false); onEnquire(); }} className="px-6 py-4 text-center text-lg font-medium bg-[#E50914] text-white rounded-none w-full tracking-wide uppercase">
              Enquire Now
            </button>
            <a
              href="https://share.google/yiyL6QfETlVOShiik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm dark:text-gray-400 text-gray-500 hover:text-[#E50914] transition-colors flex items-center justify-center gap-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Milap Nagar, Uttam Nagar
            </a>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
