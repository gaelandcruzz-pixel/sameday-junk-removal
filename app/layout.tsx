import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameday Junk Removal | Brampton & GTA Junk Removal",
  description:
    "Fast junk removal in Brampton, Toronto, Mississauga, Vaughan, Oakville, Milton and the GTA. Call or text 905-782-6332 for a free quote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phone = "905-782-6332";

  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="font-bold text-xl">
              Sameday Junk Removal
            </a>

            <nav className="hidden md:flex gap-6 font-medium">
              <a href="/services">Services</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/service-areas/brampton">Brampton</a>
            </nav>

            <a
              href="tel:9057826332"
              className="bg-black text-white px-4 py-2 rounded-lg font-bold"
            >
              Call {phone}
            </a>
          </div>
        </header>

        {children}

        <footer className="bg-black text-white px-6 py-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-3">Sameday Junk Removal</h3>
              <p className="text-gray-300">
                Fast junk removal for homes, apartments, garages, storage units,
                estates, and businesses across Brampton and the GTA.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Service Areas</h3>
              <p className="text-gray-300">
                Brampton, Mississauga, Toronto, Vaughan, Oakville, Milton,
                Etobicoke, and North York.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Call or Text</h3>
              <a href="tel:9057826332" className="text-yellow-400 font-bold">
                {phone}
              </a>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-10">
            © 2026 Sameday Junk Removal. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}