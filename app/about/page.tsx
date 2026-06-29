import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Local Brampton Junk Removal Team',
  description:
    'DuraJunk is a local Brampton crew serving the GTA. Upfront pricing, two-person crew, same-day availability. Call 905-782-6332.',
}

export default function AboutPage() {
  const phone = '905-782-6332'

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <p className="text-yellow-600 font-bold mb-4">ABOUT US</p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Brampton&apos;s Trusted Junk Removal Team
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          DuraJunk is a local crew serving Brampton and the GTA.
          We make junk removal simple — send photos, get a clear price, and
          we handle the lifting, loading, and disposal the same day.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Furniture and appliance removal</li>
              <li>✓ Garage and basement cleanouts</li>
              <li>✓ Storage unit and estate cleanouts</li>
              <li>✓ Carpet and renovation debris removal</li>
              <li>✓ Office and commercial junk removal</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Same-day and next-day availability</li>
              <li>✓ Upfront pricing — no hidden fees</li>
              <li>✓ Two-person crew for heavy items</li>
              <li>✓ Responsible disposal and recycling</li>
              <li>✓ Serving Brampton, Mississauga, and the GTA</li>
            </ul>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Clear It Out?</h2>
          <p className="text-gray-300 mb-6">Call or text us for a fast, free quote.</p>
          <a
            href={`tel:${phone.replace(/-/g, '')}`}
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold inline-block"
          >
            Call {phone}
          </a>
        </div>
      </div>
    </main>
  )
}
