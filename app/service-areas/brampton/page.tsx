import type { Metadata } from 'next'
import QuoteForm from '../../components/QuoteForm'

export const metadata: Metadata = {
  title: 'Junk Removal Brampton | Same-Day Pickup',
  description:
    'Top-rated junk removal in Brampton, ON. Same-day furniture removal, appliance removal, garage cleanouts & estate cleanouts. Call 905-782-6332 for a free quote.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does junk removal cost in Brampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Junk removal in Brampton is priced by volume. The more space your items take up in our truck, the higher the price. We always give you a clear quote before starting. Text photos to 905-782-6332 for a fast estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day junk removal in Brampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer same-day junk removal in Brampton. Call or text 905-782-6332 early in the day and we can usually be there within hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Brampton do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Brampton including Bramalea, Springdale, Heart Lake, Castlemore, Mount Pleasant, Sandringham, Fletcher\'s Creek, and surrounding neighbourhoods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What items do you remove in Brampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We remove furniture, appliances, mattresses, carpets, electronics, construction debris, garage junk, and more. We also handle full cleanouts — garages, basements, storage units, and estates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book junk removal in Brampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call or text photos to 905-782-6332. You can also use our online quote form. We\'ll get back to you fast with a price and available pickup times.',
      },
    },
  ],
}

export default function BramptonPage() {
  const phone = '905-782-6332'

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-4">
            Brampton Junk Removal
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Same-Day Junk Removal<br />in Brampton, ON
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            DuraJunk is Brampton&apos;s local junk removal crew. We remove
            furniture, appliances, garage junk, renovation debris, and more — with
            same-day and next-day availability across all of Brampton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${phone.replace(/-/g, '')}`}
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow-300 transition-colors"
            >
              Call {phone}
            </a>
            <a
              href="#quote"
              className="border border-white/30 px-8 py-4 rounded-xl font-bold text-center hover:bg-white/10 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Brampton Junk Removal Services</h2>
          <p className="text-gray-600 mb-10">
            We handle the lifting, loading, hauling, and disposal — you don&apos;t lift a finger.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Furniture Removal Brampton', desc: 'Sofas, sectionals, mattresses, bed frames, dressers, desks — any size, any floor.' },
              { title: 'Appliance Removal Brampton', desc: 'Fridges, stoves, washers, dryers, dishwashers, freezers, and more.' },
              { title: 'Garage Cleanouts Brampton', desc: 'Full garage cleanouts — years of accumulated junk cleared in one visit.' },
              { title: 'Basement Cleanouts Brampton', desc: 'We clear out the whole basement and haul everything away.' },
              { title: 'Estate Cleanouts Brampton', desc: 'Respectful, efficient whole-home cleanouts for estates and moves.' },
              { title: 'Storage Unit Cleanouts', desc: 'We empty your storage unit so you stop paying rent on stuff you don\'t need.' },
              { title: 'Carpet Removal Brampton', desc: 'Rip-up and full haul-away for any room, floor, or entire property.' },
              { title: 'Renovation Debris Removal', desc: 'Drywall, lumber, tiles, concrete, and all construction waste hauled away.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-6 hover:border-yellow-400 transition-colors">
                <div className="w-8 h-1 bg-yellow-400 rounded mb-3" />
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-gray-50 px-6 py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Get a Free Brampton Junk Removal Quote</h2>
          <p className="text-gray-500 text-center mb-8">Or call / text photos to {phone} for the fastest reply.</p>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Junk Removal Across All of Brampton</h2>
          <p className="text-gray-600 mb-8">
            We serve every neighbourhood in Brampton. Whether you&apos;re in a detached home
            in Springdale, a condo near downtown, or a townhouse in Mount Pleasant — we come to you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Bramalea', 'Springdale', 'Heart Lake', 'Castlemore',
              'Mount Pleasant', 'Sandringham', "Fletcher's Creek", 'Bram West',
              'Humber Summit', 'Snelgrove', 'Gore Meadows', 'Downtown Brampton',
            ].map((area) => (
              <div key={area} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-medium hover:border-yellow-400 transition-colors">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Brampton Chooses DuraJunk</h2>
            <ul className="space-y-4">
              {[
                'Same-day and next-day junk removal in Brampton',
                'Upfront pricing — no surprises on the day',
                'Two-person crew handles all the heavy lifting',
                'We serve all Brampton neighbourhoods',
                'Responsible disposal — items donated or recycled where possible',
                'Fast response — text photos, get a quote within minutes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="text-yellow-400 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
            <p className="text-gray-300 mb-6">
              Call or text us. We&apos;ll give you a price and confirm your pickup time.
            </p>
            <a
              href={`tel:${phone.replace(/-/g, '')}`}
              className="block bg-yellow-400 text-black px-6 py-4 rounded-xl font-bold text-center hover:bg-yellow-300 transition-colors mb-3"
            >
              Call {phone}
            </a>
            <a
              href="#quote"
              className="block border border-white/30 px-6 py-4 rounded-xl font-bold text-center hover:bg-white/10 transition-colors"
            >
              Fill Out Quote Form
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Brampton Junk Removal — FAQ</h2>
          <div className="space-y-5">
            {[
              {
                q: 'How much does junk removal cost in Brampton?',
                a: 'Pricing is based on volume — how much space your items take up in our truck. We give you a clear, upfront price before any work begins. Text photos to 905-782-6332 for a fast estimate.',
              },
              {
                q: 'Do you offer same-day junk removal in Brampton?',
                a: 'Yes. Call or text us early in the day and we can often be there same day. We also offer next-day bookings for less urgent jobs.',
              },
              {
                q: 'What areas of Brampton do you serve?',
                a: "All of Brampton — Bramalea, Springdale, Heart Lake, Castlemore, Mount Pleasant, Sandringham, Fletcher's Creek, and more.",
              },
              {
                q: 'What items do you remove in Brampton?',
                a: 'Furniture, appliances, mattresses, carpets, electronics, renovation debris, garage junk, and full cleanouts for garages, basements, storage units, and estates.',
              },
              {
                q: 'How do I book junk removal in Brampton?',
                a: 'Call or text photos to 905-782-6332, or use the quote form above. We respond fast with a price and available times.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
