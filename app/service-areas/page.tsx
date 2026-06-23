import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junk Removal Service Areas | Brampton, Mississauga, Toronto & GTA',
  description:
    'Sameday Junk Removal serves Brampton, Mississauga, Toronto, Vaughan, Oakville, Milton, Etobicoke, and North York. Call 905-782-6332 for same-day junk removal.',
}

export default function BramptonPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-yellow-600 font-bold mb-4">
          BRAMPTON JUNK REMOVAL
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Junk Removal in Brampton
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Sameday Junk Removal provides fast junk removal services throughout
          Brampton. We remove furniture, appliances, garage junk, storage units,
          renovation debris, carpets, and estate cleanouts.
        </p>

        <div className="bg-gray-100 rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Same Day Service Available
          </h2>

          <p>
            Need junk removed today? Call or text photos to
            905-782-6332 for a quick quote.
          </p>

          <a
            href="tel:9057826332"
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg font-bold"
          >
            Call Now
          </a>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          Our Brampton Junk Removal Services
        </h2>

        <ul className="space-y-2 text-lg">
          <li>✓ Furniture Removal</li>
          <li>✓ Appliance Removal</li>
          <li>✓ Garage Cleanouts</li>
          <li>✓ Basement Cleanouts</li>
          <li>✓ Carpet Removal</li>
          <li>✓ Storage Unit Cleanouts</li>
          <li>✓ Estate Cleanouts</li>
          <li>✓ Construction Debris Removal</li>
        </ul>
      </div>
    </main>
  );
}