export default function Home() {
  const phone = "905-782-6332";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<img
  src="/images/logo.png"
  alt="Durapest Junk Removal"
  className="h-14 w-auto"
/>
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#services">Services</a>
            <a href="#areas">Areas</a>
            <a href="#quote">Quote</a>
          </nav>
          <a
            href="tel:9057826332"
            className="bg-black text-white px-4 py-2 rounded-lg font-bold"
          >
            Call {phone}
          </a>
        </div>
      </header>

      <section className="bg-black text-white px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-bold mb-4">
              SAME DAY JUNK REMOVAL GTA
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Fast Junk Removal in Brampton, Toronto & the GTA
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We remove furniture, appliances, carpets, garbage, renovation
              debris, storage units, estate cleanouts, and more. Send photos for
              a fast quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9057826332"
                className="bg-yellow-400 text-black px-6 py-4 rounded-lg font-bold text-center"
              >
                Call Now
              </a>
              <a
                href="#quote"
                className="border border-white px-6 py-4 rounded-lg font-bold text-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          <div id="quote" className="bg-white text-black rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-3">Request a Free Quote</h2>
            <p className="text-gray-600 mb-6">
              Text or call {phone}. Photos help us quote faster.
            </p>

            <form className="space-y-4">
              <input className="w-full border p-3 rounded-lg" placeholder="Your name" />
              <input className="w-full border p-3 rounded-lg" placeholder="Phone number" />
              <input className="w-full border p-3 rounded-lg" placeholder="City" />
              <textarea
                className="w-full border p-3 rounded-lg"
                placeholder="What needs to be removed?"
                rows={4}
              />
              <button className="w-full bg-black text-white p-3 rounded-lg font-bold">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Junk Removal Services
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Heavy lifting, loading, hauling, and disposal handled for you.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Furniture Removal",
              "Appliance Removal",
              "Garage Cleanouts",
              "Basement Cleanouts",
              "Storage Unit Cleanouts",
              "Estate Cleanouts",
              "Carpet Removal",
              "Renovation Debris",
              "Office Junk Removal",
            ].map((service) => (
              <div key={service} className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Fast pickup and responsible disposal for homes, condos,
                  apartments, and businesses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Sameday Junk Removal?
            </h2>
            <p className="text-gray-700 mb-6">
              We make junk removal simple. Send us photos, get a clear quote,
              and our crew handles the lifting, loading, and disposal.
            </p>
            <ul className="space-y-3 font-medium">
              <li>✓ Same-day and next-day availability</li>
              <li>✓ Two-person crew available</li>
              <li>✓ Furniture, garbage, carpet, and bulky item removal</li>
              <li>✓ Great for apartments, houses, garages, and storage units</li>
              <li>✓ Serving Brampton, Toronto, Mississauga, Vaughan and more</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-bold">1. Send Photos</h4>
                <p className="text-gray-600">Text photos of what needs to go.</p>
              </div>
              <div>
                <h4 className="font-bold">2. Get a Quote</h4>
                <p className="text-gray-600">We give you a clear price upfront.</p>
              </div>
              <div>
                <h4 className="font-bold">3. We Remove It</h4>
                <p className="text-gray-600">Our crew loads, hauls, and disposes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Brampton",
              "Mississauga",
              "Toronto",
              "Vaughan",
              "Oakville",
              "Milton",
              "Etobicoke",
              "North York",
            ].map((city) => (
              <div key={city} className="bg-gray-100 rounded-xl p-5 text-center font-bold">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Junk Removed Today?
        </h2>
        <p className="text-gray-300 mb-8">
          Call or text {phone} for a fast quote.
        </p>
        <a
          href="tel:9057826332"
          className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold inline-block"
        >
          Call Now
        </a>
      </section>

      <footer className="px-6 py-8 text-center text-gray-600">
        © 2026 Sameday Junk Removal. Serving Brampton and the GTA.
      </footer>
    </main>
  );
}