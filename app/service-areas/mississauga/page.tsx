import type { Metadata } from 'next'
import QuoteForm from '../../components/QuoteForm'

export const metadata: Metadata = {
  title: 'Junk Removal Mississauga | Same-Day Pickup',
  description:
    'Fast junk removal in Mississauga, ON. Furniture removal, appliance removal, garage cleanouts & estate cleanouts. Call 905-782-6332 for a free same-day quote.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does junk removal cost in Mississauga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Junk removal in Mississauga is priced by volume. We give you a clear upfront quote before we start. Text photos to 905-782-6332 for a fast estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day junk removal in Mississauga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer same-day junk removal in Mississauga. Call or text 905-782-6332 and we can often be there the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Mississauga do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Mississauga including Port Credit, Meadowvale, Streetsville, Erin Mills, City Centre, Malton, Cooksville, and surrounding neighbourhoods.',
      },
    },
  ],
}

export default function MississaugaPage() {
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
            Mississauga Junk Removal
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Same-Day Junk Removal<br />in Mississauga, ON
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Durapest Junk Removal serves all of Mississauga. We remove furniture,
            appliances, garage junk, renovation debris, and more — with same-day
            and next-day junk removal across Mississauga.
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

      {/* Services */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Mississauga Junk Removal Services</h2>
          <p className="text-gray-600 mb-10">
            We handle everything — lifting, loading, hauling, and disposal. You don&apos;t lift a finger.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Furniture Removal Mississauga', desc: 'Sofas, mattresses, dressers, bed frames — any size, any floor.' },
              { title: 'Appliance Removal Mississauga', desc: 'Fridges, stoves, washers, dryers, freezers, and more.' },
              { title: 'Garage Cleanouts Mississauga', desc: 'Years of accumulated junk cleared out in a single visit.' },
              { title: 'Basement Cleanouts Mississauga', desc: 'Full basement cleared, loaded, and hauled away.' },
              { title: 'Estate Cleanouts Mississauga', desc: 'Whole-home estate cleanouts handled with care and efficiency.' },
              { title: 'Storage Unit Cleanouts', desc: 'We empty your unit so you can stop paying monthly rent.' },
              { title: 'Carpet Removal Mississauga', desc: 'Rip-up and full haul-away for any room or property.' },
              { title: 'Renovation Debris Removal', desc: 'Drywall, lumber, tiles, and all construction waste removed.' },
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
          <h2 className="text-3xl font-bold mb-2 text-center">Free Mississauga Junk Removal Quote</h2>
          <p className="text-gray-500 text-center mb-8">Or call / text photos to {phone}.</p>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Junk Removal Across All of Mississauga</h2>
          <p className="text-gray-600 mb-8">
            We serve every corner of Mississauga — from Port Credit to Malton, Streetsville to Erin Mills.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Port Credit', 'Meadowvale', 'Streetsville', 'Erin Mills',
              'City Centre', 'Malton', 'Cooksville', 'Lakeview',
              'Clarkson', 'Mississauga Valleys', 'Hurontario', 'Rathwood',
            ].map((area) => (
              <div key={area} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center text-sm font-medium hover:border-yellow-400 transition-colors">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us + CTA */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Mississauga Chooses Us</h2>
            <ul className="space-y-4">
              {[
                'Same-day and next-day junk removal in Mississauga',
                'Upfront pricing — no surprises on pickup day',
                'Two-person crew for heavy items',
                'We serve all Mississauga neighbourhoods',
                'Responsible recycling and donation of usable items',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="text-yellow-400 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Book Your Pickup</h3>
            <p className="text-gray-300 mb-6">Call or text — we&apos;ll confirm your time same day.</p>
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
          <h2 className="text-3xl font-bold mb-10">Mississauga Junk Removal — FAQ</h2>
          <div className="space-y-5">
            {[
              {
                q: 'How much does junk removal cost in Mississauga?',
                a: 'Pricing is volume-based — how much space your items take up in our truck. You get a clear upfront quote before we start. Text photos to 905-782-6332.',
              },
              {
                q: 'Do you offer same-day junk removal in Mississauga?',
                a: 'Yes. Call or text us in the morning and we can often be there the same day.',
              },
              {
                q: 'What areas of Mississauga do you cover?',
                a: 'All of Mississauga — Port Credit, Meadowvale, Streetsville, Erin Mills, City Centre, Malton, Cooksville, and surrounding areas.',
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
