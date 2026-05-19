import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 md:px-12 pt-40 pb-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-gray-900">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="dark:text-gray-400 text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-6 dark:text-gray-300 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">1. Acceptance of Terms</h2>
              <p>By accessing and using the KAIRR Girls Hostel website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">2. Booking and Payments</h2>
              <p>All bookings are subject to availability and confirmation. Rent and security deposits must be paid in advance as per the agreed schedule. Failure to pay may result in termination of your stay.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">3. Conduct and Behavior</h2>
              <p>Residents must adhere to our House Rules at all times. Any behavior that compromises the safety, security, or comfort of other residents will not be tolerated and may lead to immediate eviction without refund.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">4. Liability</h2>
              <p>While we provide 24/7 security and CCTV surveillance, KAIRR Girls Hostel is not liable for any loss, theft, or damage to personal belongings.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
