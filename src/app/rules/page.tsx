import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function RulesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 md:px-12 pt-40 pb-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-gray-900">House Rules</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="dark:text-gray-400 text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-6 dark:text-gray-300 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">1. Timings & Curfew</h2>
              <p>For the safety of all residents, our gates close at standard curfew hours. Any late entries must be pre-approved by the warden with written permission from local guardians/parents.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">2. Visitors Policy</h2>
              <p>Male visitors are strictly prohibited from entering the residential floors. Female visitors and family members may wait in the designated visitor lounge during visiting hours only.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">3. Dining Hall Rules</h2>
              <p>Meals are served only during designated timings. Residents are requested not to take utensils or food to their rooms to maintain hygiene standards.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-900">4. Property Care</h2>
              <p>Residents are responsible for the furniture and appliances in their rooms. Any damage to hostel property will be charged directly or deducted from the security deposit.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
