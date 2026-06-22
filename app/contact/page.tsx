export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <p className="text-yellow-600 font-bold mb-4">CONTACT US</p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Get a Free Junk Removal Quote
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Call or text photos of what needs to be removed. We’ll give you a fast
          quote for junk removal in Brampton and the GTA.
        </p>

        <a
          href="tel:9057826332"
          className="bg-black text-white px-6 py-4 rounded-lg font-bold inline-block mb-10"
        >
          Call 905-782-6332
        </a>

        <div className="bg-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Quote Request Form</h2>

          <form className="space-y-4">
            <input className="w-full border p-3 rounded-lg" placeholder="Your name" />
            <input className="w-full border p-3 rounded-lg" placeholder="Phone number" />
            <input className="w-full border p-3 rounded-lg" placeholder="City" />
            <textarea
              className="w-full border p-3 rounded-lg"
              placeholder="What needs to be removed?"
              rows={5}
            />
            <button className="w-full bg-black text-white p-3 rounded-lg font-bold">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}