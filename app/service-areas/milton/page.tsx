import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junk Removal Milton | Same-Day Service',
  description:
    'Fast junk removal in Milton, ON. Furniture removal, appliance removal, garage cleanouts & estate cleanouts. Call 905-782-6332 for a free same-day quote.',
}

export default function MiltonPage() {
  const phone = '905-782-6332'
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-4">Milton Junk Removal</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Same-Day Junk Removal in Milton, ON</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Sameday Junk Removal serves Milton and surrounding Halton Region. We remove
          furniture, appliances, garage junk, and renovation debris — with same-day junk
          removal available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a href={`tel:${phone.replace(/-/g, '')}`} className="bg-black text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-800 transition-colors">Call {phone}</a>
          <a href="/contact" className="border border-black px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-50 transition-colors">Get a Free Quote</a>
        </div>
        <h2 className="text-3xl font-bold mb-6">Milton Junk Removal Services</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {['Furniture Removal Milton','Appliance Removal Milton','Garage Cleanouts Milton','Basement Cleanouts Milton','Estate Cleanouts Milton','Renovation Debris Removal','Carpet Removal Milton','Storage Unit Cleanouts Milton'].map((s) => (
            <div key={s} className="border border-gray-100 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <div className="w-6 h-1 bg-yellow-400 rounded mb-3" />
              <p className="font-bold">{s}</p>
            </div>
          ))}
        </div>
        <div className="bg-black text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Need Junk Removed in Milton?</h2>
          <p className="text-gray-300 mb-6">Call or text for same-day junk removal in Milton.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold inline-block hover:bg-yellow-300 transition-colors">Call {phone}</a>
        </div>
      </div>
    </main>
  )
}
