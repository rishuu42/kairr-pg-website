"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { Footer } from "@/components/ui/Footer";
import { EnquiryModal } from "@/components/ui/EnquiryModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen dark:bg-[#050505] bg-white transition-colors duration-300">
      <Navbar onEnquire={() => setModalOpen(true)} />
      <HeroSection onEnquire={() => setModalOpen(true)} />
      <FeaturesSection />
      <RoomsSection onEnquire={() => setModalOpen(true)} />
      <GallerySection />
      <Footer />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
