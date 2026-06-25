import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://samedayjunkremoval.ca'),
  title: {
    default: 'Junk Removal Brampton & GTA | Same-Day Service | Durapest Junk Removal',
    template: '%s | Durapest Junk Removal',
  },
  description:
    'Same-day junk removal in Brampton, Mississauga, Toronto & the GTA. Furniture, appliances, garage cleanouts, estate cleanouts and more. Call 905-782-6332 for a free quote.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Durapest Junk Removal',
  telephone: '+1-905-782-6332',
  url: 'https://samedayjunkremoval.ca',
  description:
    'Same-day junk removal in Brampton, Mississauga, Toronto and the GTA. We remove furniture, appliances, garage junk, estate cleanouts and more.',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '07:00',
      closes: '20:00',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brampton',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'City', name: 'Brampton' },
    { '@type': 'City', name: 'Mississauga' },
    { '@type': 'City', name: 'Toronto' },
    { '@type': 'City', name: 'Vaughan' },
    { '@type': 'City', name: 'Oakville' },
    { '@type': 'City', name: 'Milton' },
    { '@type': 'City', name: 'Etobicoke' },
    { '@type': 'City', name: 'North York' },
  ],
  serviceType: [
    'Junk Removal',
    'Furniture Removal',
    'Appliance Removal',
    'Garage Cleanout',
    'Basement Cleanout',
    'Estate Cleanout',
    'Renovation Debris Removal',
    'Carpet Removal',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phone = "905-782-6332";

  return (
    <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Header phone={phone} />

        {children}

        <footer className="bg-black text-white px-6 py-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-3">Durapest Junk Removal</h3>
              <p className="text-gray-300 text-sm">
                Fast, affordable junk removal for homes, apartments, garages,
                storage units, estates, and businesses across Brampton and the GTA.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Services</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="/services" className="hover:text-white">All Services</a></li>
                <li><a href="/services" className="hover:text-white">Furniture Removal</a></li>
                <li><a href="/services" className="hover:text-white">Appliance Removal</a></li>
                <li><a href="/services" className="hover:text-white">Garage Cleanouts</a></li>
                <li><a href="/services" className="hover:text-white">Estate Cleanouts</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Service Areas</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="/service-areas/brampton" className="hover:text-white">Brampton</a></li>
                <li><a href="/service-areas/mississauga" className="hover:text-white">Mississauga</a></li>
                <li><a href="/service-areas/toronto" className="hover:text-white">Toronto</a></li>
                <li><a href="/service-areas/vaughan" className="hover:text-white">Vaughan</a></li>
                <li><a href="/service-areas/oakville" className="hover:text-white">Oakville</a></li>
                <li><a href="/service-areas/north-york" className="hover:text-white">North York</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <a href="tel:9057826332" className="text-yellow-400 font-bold text-lg">
                {phone}
              </a>
              <p className="text-gray-300 text-sm mt-2">Call or text for a free quote.</p>
              <p className="text-gray-300 text-sm mt-1">Mon – Sun · 7am – 8pm</p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            © 2026 Durapest Junk Removal. Serving Brampton, Mississauga, Toronto & the GTA.
          </p>
        </footer>
      </body>
    </html>
  );
}
