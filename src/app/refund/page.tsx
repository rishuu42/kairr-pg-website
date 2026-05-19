import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function RefundPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 md:px-12 pt-40 pb-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-gray-900">Refund Policy</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="dark:text-gray-400 text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-6 dark:text-gray-300 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">1. Booking Advance</h2>
              <p>The initial booking advance is non-refundable if you decide to cancel your reservation before moving in.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">2. Security Deposit Refund</h2>
              <p>Your security deposit is fully refundable at the time of vacating the hostel, provided a standard 30-day notice period is served and no damages to the property are found.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">3. Notice Period</h2>
              <p>Residents are required to provide a mandatory 1-month written notice prior to vacating. If vacating without notice, the security deposit will be forfeited to cover the notice period rent.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">4. Processing Time</h2>
              <p>Eligible refunds will be processed and transferred to the resident's provided bank account within 7 to 10 working days of final checkout and room inspection.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
