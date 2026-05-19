import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 dark:border-white/10 dark:bg-[#050505] bg-white pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                <Image 
                  src="/logo-dark.png" 
                  alt="KAIRR Girls Hostel Logo" 
                  width={240} 
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain hidden dark:block"
                />
                <Image 
                  src="/logo-light.png" 
                  alt="KAIRR Girls Hostel Logo" 
                  width={240} 
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain block dark:hidden"
                />
              </div>
            </div>
            <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-6">
              A premium, safe, and modern co-living space for female students and professionals in Delhi.
            </p>
          </div>
          
          <div className="hidden md:block">
            <h4 className="dark:text-white text-gray-900 font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Rooms", "Amenities", "Gallery", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <Link href={`/#${item.toLowerCase()}`} className="dark:text-gray-400 text-gray-600 hover:text-[#E50914] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="dark:text-white text-gray-900 font-medium mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/terms" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/rules" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black text-sm transition-colors">
                  House Rules
                </Link>
              </li>
              <li>
                <Link href="/refund" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black text-sm transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="dark:text-white text-gray-900 font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm dark:text-gray-400 text-gray-600">
                <MapPin className="w-5 h-5 text-[#E50914] shrink-0" />
                <a href="https://share.google/yiyL6QfETlVOShiik" target="_blank" rel="noopener noreferrer" className="dark:hover:text-white hover:text-black transition-colors underline-offset-4 hover:underline">
                  Milap Nagar, Uttam Nagar, New Delhi
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm dark:text-gray-400 text-gray-600">
                <Phone className="w-5 h-5 text-[#E50914] shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919891344213" className="dark:hover:text-white hover:text-black transition-colors">+91 98913 44213</a>
                  <a href="tel:+919650877767" className="dark:hover:text-white hover:text-black transition-colors">+91 96508 77767</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm dark:text-gray-400 text-gray-600">
                <Mail className="w-5 h-5 text-[#E50914] shrink-0" />
                <a href="mailto:kairrgirls@gmail.com" className="dark:hover:text-white hover:text-black transition-colors">kairrgirls@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="dark:text-gray-500 text-gray-500 text-sm">
            © {new Date().getFullYear()} Kairr Girls Hostel. All rights reserved.
          </p>
          <p className="dark:text-gray-500 text-gray-500 text-sm flex items-center gap-1">
            Designed with <span className="text-[#E50914]">♥</span> in Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
