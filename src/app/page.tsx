import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen dark:bg-[#050505] bg-white transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RoomsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
