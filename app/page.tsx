import type { Metadata } from 'next'
import QuoteForm from './components/QuoteForm'
import { SplineScene } from './components/SplineScene'

export const metadata: Metadata = {
  title: 'Junk Removal Brampton & GTA | Same-Day Service',
  description:
    'Same-day junk removal in Brampton, Mississauga, Toronto & the GTA. We remove furniture, appliances, garage junk, estate cleanouts and renovation debris. Call 905-782-6332.',
}

// Replace with your Spline scene URL from spline.design
const SPLINE_SCENE = 'https://prod.spline.design/your-scene-id-here/scene.splinecode'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does junk removal cost in Brampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Junk removal in Brampton is priced by volume — how much space your items take up in our truck. We give you a clear, upfront price before any work begins. There are no hidden fees. Text us photos for a fast quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day junk removal in Brampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer same-day and next-day junk removal throughout Brampton and the GTA. Call or text 905-782-6332 in the morning and we can often be there the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What items do you remove?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We remove almost anything: furniture, appliances, mattresses, carpets, electronics, garage junk, renovation debris, yard waste, and more. We handle full garage cleanouts, basement cleanouts, storage unit cleanouts, and estate cleanouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve Brampton, Mississauga, Toronto, Vaughan, Oakville, Milton, Etobicoke, and North York. If you\'re in the GTA, call us and we\'ll confirm availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a junk removal quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fastest way is to call or text photos to 905-782-6332. You can also fill out the quote form on our website. We\'ll respond quickly with a clear price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you recycle or donate items?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We make every effort to donate usable items to local charities and recycle materials responsibly. Not everything ends up in landfill.',
      },
    },
  ],
}

export default function Home() {
  const phone = '905-782-6332'

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: '92vh' }}>
        <div className="max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 gap-0 items-center" style={{ minHeight: '92vh' }}>

          {/* Left: content */}
          <div className="py-20 md:py-0 z-10">
            <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-6">
              Same-Day Junk Removal · Brampton & GTA
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6">
              We Haul It.<br />
              <span className="text-yellow-400">Today.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Furniture, appliances, garage cleanouts, estate cleanouts, renovation
              debris — send photos and get a junk removal quote in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={`tel:${phone.replace(/-/g, '')}`}
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-center hover:bg-yellow-300 transition-colors"
              >
                Call {phone}
              </a>
              <a
                href="#quote"
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white/10 transition-colors"
              >
                Get Free Quote
              </a>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              <div>
                <p className="text-white font-bold text-2xl">Same Day</p>
                <p>Availability</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-white font-bold text-2xl">Upfront</p>
                <p>Pricing</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-white font-bold text-2xl">GTA-Wide</p>
                <p>Coverage</p>
              </div>
            </div>
          </div>

          {/* Right: Spline scene */}
          <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full">
            <SplineScene
              scene={SPLINE_SCENE}
              className="w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-black border-t border-white/10 px-6 py-20">
        <div className="max-w-xl mx-auto">
          <p className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-3 text-center">
            Free Quote
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Request a Junk Removal Quote
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Or call / text {phone} with photos — fastest response guaranteed.
          </p>
          <div className="bg-white rounded-2xl p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-3 text-center">
            What We Remove
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Full-Service Junk Removal in Brampton & GTA
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Furniture Removal', desc: 'Sofas, mattresses, desks, dressers — any size, any floor.' },
              { title: 'Appliance Removal', desc: 'Fridges, stoves, washers, dryers, and more.' },
              { title: 'Garage Cleanouts', desc: 'Clear out years of buildup in a single visit.' },
              { title: 'Basement Cleanouts', desc: 'Full basement cleared, hauled, and disposed of.' },
              { title: 'Estate Cleanouts', desc: 'Respectful, efficient whole-home cleanouts.' },
              { title: 'Storage Unit Cleanouts', desc: 'We empty the unit so you stop paying rent.' },
              { title: 'Carpet Removal', desc: 'Rip-up and haul-away for any room or floor.' },
              { title: 'Renovation Debris', desc: 'Drywall, lumber, tiles, and construction waste.' },
              { title: 'Office Junk Removal', desc: 'Desks, filing cabinets, electronics, and more.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-md transition-all">
                <div className="w-8 h-1 bg-yellow-400 rounded mb-4" />
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              How Junk Removal Works
            </h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Send Photos', body: 'Text us photos of what needs to go. The more detail, the faster your junk removal quote.' },
                { step: '02', title: 'Get a Price', body: 'We send you a clear, upfront price — no hidden fees, no surprises on pickup day.' },
                { step: '03', title: 'We Remove It', body: 'Our Brampton junk removal crew shows up, loads everything, and disposes of it responsibly.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-6">
                  <span className="text-yellow-400 font-bold text-2xl leading-none mt-1 shrink-0">{step}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{title}</h3>
                    <p className="text-gray-500">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-6">Why Brampton Chooses Us</h3>
            <ul className="space-y-4">
              {[
                'Same-day and next-day junk removal availability',
                'Two-person crew for heavy lifts',
                'Upfront pricing — no surprises',
                'Responsible disposal and recycling',
                'Serving Brampton, Mississauga, Toronto & more',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="text-yellow-400 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`tel:${phone.replace(/-/g, '')}`}
              className="mt-8 inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section id="areas" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-3 text-center">
            Where We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Junk Removal Across the GTA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: 'Brampton', href: '/service-areas/brampton' },
              { city: 'Mississauga', href: '/service-areas/mississauga' },
              { city: 'Toronto', href: '/service-areas/toronto' },
              { city: 'Vaughan', href: '/service-areas/vaughan' },
              { city: 'Oakville', href: '/service-areas/oakville' },
              { city: 'Milton', href: '/service-areas/milton' },
              { city: 'Etobicoke', href: '/service-areas/etobicoke' },
              { city: 'North York', href: '/service-areas/north-york' },
            ].map(({ city, href }) => (
              <a key={city} href={href} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center font-bold hover:border-yellow-400 hover:bg-yellow-50 transition-colors">
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-3 text-center">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Junk Removal Questions Answered
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How much does junk removal cost in Brampton?',
                a: 'Pricing is based on volume — how much space your items take up in our truck. We give you a clear, upfront price before any work begins. Text us photos for a fast quote.',
              },
              {
                q: 'Do you offer same-day junk removal?',
                a: 'Yes. We offer same-day and next-day junk removal throughout Brampton and the GTA. Call or text 905-782-6332 in the morning and we can often be there the same day.',
              },
              {
                q: 'What items do you remove?',
                a: 'Almost anything: furniture, appliances, mattresses, carpets, electronics, garage junk, renovation debris, and more. We also do full garage cleanouts, basement cleanouts, storage unit cleanouts, and estate cleanouts.',
              },
              {
                q: 'What areas do you serve?',
                a: 'We serve Brampton, Mississauga, Toronto, Vaughan, Oakville, Milton, Etobicoke, and North York. If you\'re in the GTA, call us and we\'ll confirm.',
              },
              {
                q: 'Do you recycle or donate items?',
                a: 'Yes. We donate usable items to local charities and recycle materials wherever possible. Not everything goes to landfill.',
              },
              {
                q: 'How do I book a junk removal pickup?',
                a: 'Call or text photos to 905-782-6332 or use the quote form on this page. We\'ll respond fast with a price and available times.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white px-6 py-24 text-center">
        <p className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-4">
          Ready to clear it out?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Need Junk Removed Today?
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Call or text {phone} — same-day junk removal in Brampton and the GTA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${phone.replace(/-/g, '')}`}
            className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
          >
            Call Now
          </a>
          <a
            href="/contact"
            className="border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </section>

    </main>
  )
}
