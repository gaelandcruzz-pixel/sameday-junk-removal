export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <p className="text-yellow-600 font-bold mb-4">OUR SERVICES</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Junk Removal Services in Brampton & the GTA
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          We handle the lifting, loading, hauling, and disposal for homes,
          condos, apartments, garages, storage units, estates, and businesses.
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
              <h2 className="text-xl font-bold mb-3">{service}</h2>
              <p className="text-gray-600 mb-4">
                Fast pickup and responsible disposal. Send photos for a quick
                quote.
              </p>
              <a href="tel:9057826332" className="font-bold text-black">
                Call 905-782-6332
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}