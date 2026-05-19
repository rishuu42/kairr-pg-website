import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 md:px-12 pt-40 pb-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-gray-900">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="dark:text-gray-400 text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-6 dark:text-gray-300 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">1. Information We Collect</h2>
              <p>We collect personal information such as your name, contact details, identification documents, and emergency contacts when you inquire about or book a stay at KAIRR Girls Hostel.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">2. How We Use Your Information</h2>
              <p>Your information is used to manage your booking, ensure your safety (e.g., biometric access systems), and communicate important updates regarding your stay. We do not sell your personal data to third parties.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">3. CCTV and Security</h2>
              <p>For the safety of all residents, our premises are monitored by CCTV 24/7 in common areas. This footage is strictly confidential and only accessed for security purposes.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
