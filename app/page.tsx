import QuoteForm from './components/QuoteForm'
import { SplineScene } from './components/SplineScene'

// Replace with your Spline scene URL from spline.design
const SPLINE_SCENE = 'https://prod.spline.design/your-scene-id-here/scene.splinecode'

export default function Home() {
  const phone = '905-782-6332'

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: '92vh' }}>
        <div className="max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 gap-0 items-center" style={{ minHeight: '92vh' }}>

          {/* Left: content */}
          <div className="py-20 md:py-0 z-10">
            <p className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-6">
              Same Day Junk Removal · Brampton & GTA
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6">
              We Haul It.<br />
              <span className="text-yellow-400">Today.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Furniture, appliances, garage cleanouts, estate cleanouts, renovation
              debris — send photos and get a quote in minutes.
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
            Request a Quote
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Or call / text {phone} with photos for the fastest response.
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
            Full-Service Junk Removal
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Furniture Removal', desc: 'Sofas, mattresses, desks, dressers — any size.' },
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
              How It Works
            </h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Send Photos', body: 'Text us photos of what needs to go. The more detail, the faster your quote.' },
                { step: '02', title: 'Get a Price', body: 'We send you a clear, upfront price — no hidden fees, no surprises.' },
                { step: '03', title: 'We Remove It', body: 'Our crew shows up, loads everything, and disposes of it responsibly.' },
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
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                'Same-day and next-day availability',
                'Two-person crew for heavy lifts',
                'Upfront pricing — no surprises',
                'Responsible disposal and recycling',
                'Brampton, Mississauga, Toronto & more',
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
            Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Brampton', 'Mississauga', 'Toronto', 'Vaughan', 'Oakville', 'Milton', 'Etobicoke', 'North York'].map((city) => (
              <div key={city} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center font-bold hover:border-yellow-400 transition-colors">
                {city}
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
          Need Junk Gone Today?
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Call or text {phone} and we&apos;ll have a price to you within minutes.
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
